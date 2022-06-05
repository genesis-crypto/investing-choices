import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

type CreateBooksOptions = {
    nome: string;
    description: string;
    image_url: string;
};

interface WithDataResponse {
    code: number;
    data: boolean;
}

type AxiosBodyResponse = WithDataResponse;

export const createBook = async ({
    nome,
    description,
    image_url,
}: CreateBooksOptions): Promise<AxiosBodyResponse> => {
    try {
        const { data } = await axios.post("/v1/books", {
            nome,
            description,
            image_url,
        });

        return data;
    } catch (err) {
        //@ts-ignore
        throw new Error(err);
    }
};

interface UsePrincipleOptions {
    nome: string;
    description: string;
    image_url: string;
}

export const usePostBook = ({
    nome,
    description,
    image_url,
}: UsePrincipleOptions) => {
    const navigate = useNavigate();

    return useMutation(() => createBook({ nome, description, image_url }), {
        onSuccess: () => {
            navigate("/books");
        },
    });
};
