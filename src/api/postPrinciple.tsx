import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

type CreatePrinciplesOptions = {
    id: number;
    nome: string;
    description: string;
};

interface WithDataResponse {
    code: number;
    data: boolean;
}

type AxiosBodyResponse = WithDataResponse;

export const createPrinciple = async ({
    id,
    nome,
    description,
}: CreatePrinciplesOptions): Promise<AxiosBodyResponse> => {
    try {
        const { data } = await axios.post("/v1/categories", {
            nome,
            description,
            id_user: id,
        });

        return data;
    } catch (err) {
        //@ts-ignore
        throw new Error(err);
    }
};

interface UsePrincipleOptions {
    id: number;
    nome: string;
    description: string;
}

export const usePostPrinciple = ({
    id,
    nome,
    description,
}: UsePrincipleOptions) => {
    const navigate = useNavigate();

    return useMutation(() => createPrinciple({ id, nome, description }), {
        onSuccess: () => {
            navigate("/");
        },
    });
};
