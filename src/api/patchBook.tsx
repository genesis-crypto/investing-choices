import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

type EditBooksOptions = {
    id: string;
    nome: string;
    description: string;
    image_url: string;
};

interface WithDataResponse {
    code: number;
    data: boolean;
}

type AxiosBodyResponse = WithDataResponse;

export const editBook = async ({
    id,
    nome,
    description,
    image_url,
}: EditBooksOptions): Promise<AxiosBodyResponse> => {
    try {
        const { data } = await axios.patch("/v1/books", {
            id,
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
    id: string;
    nome: string;
    description: string;
    image_url: string;
}

export const usePatchBook = ({
    id,
    nome,
    description,
    image_url,
}: UsePrincipleOptions) => {
    const navigate = useNavigate();

    return useMutation(() => editBook({ id, nome, description, image_url }), {
        onSuccess: () => {
            navigate("/books");
        },
    });
};
