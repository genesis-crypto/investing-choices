import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

type CreatePrinciplesOptions = {
    idUser: string;
    idBook: string | string[];
};

interface WithDataResponse {
    code: string;
    data: boolean;
}

type AxiosBodyResponse = WithDataResponse;

export const suggestBook = async ({
    idBook,
    idUser,
}: CreatePrinciplesOptions): Promise<AxiosBodyResponse> => {
    try {
        const { data } = await axios.post("/v1/users/suggest", {
            idBook,
            idUser,
        });

        return data;
    } catch (err) {
        //@ts-ignore
        throw new Error(err);
    }
};

interface UseSuggestOptions {
    idUser: string;
    idBook: string | string[];
}

export const useUserSuggest = ({ idUser, idBook }: UseSuggestOptions) => {
    const navigate = useNavigate();

    return useMutation(() => suggestBook({ idUser, idBook }), {
        onSuccess: () => {
            navigate("/");
        },
    });
};
