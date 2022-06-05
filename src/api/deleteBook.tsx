import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "../config/cache";

type DeleteBooksOptions = {
    id: number;
};

interface WithDataResponse {
    code: number;
    data: boolean;
}

type AxiosBodyResponse = WithDataResponse;

export const deleteBook = async ({
    id,
}: DeleteBooksOptions): Promise<AxiosBodyResponse> => {
    try {
        const { data } = await axios.delete("/v1/books", {
            params: {
                id,
            },
        });

        return data;
    } catch (err) {
        //@ts-ignore
        throw new Error(err);
    }
};

interface UseBookOptions {
    id: number;
}

export const useDeleteBook = ({ id }: UseBookOptions) => {
    return useMutation(() => deleteBook({ id }), {
        onSuccess: () => {
            queryClient.refetchQueries("books");
        },
    });
};
