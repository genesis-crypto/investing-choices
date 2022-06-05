import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

type CreateSubPrinciplesOptions = {
    id: string;
    nome: string;
    description: string;
};

interface WithDataResponse {
    code: number;
    data: boolean;
}

type AxiosBodyResponse = WithDataResponse;

export const createSubPrinciple = async ({
    id,
    nome,
    description,
}: CreateSubPrinciplesOptions): Promise<AxiosBodyResponse> => {
    try {
        const { data } = await axios.post("/v1/subcategories", {
            nome,
            description,
            id_category: id,
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
}

export const usePostSubPrinciple = ({
    id,
    nome,
    description,
}: UsePrincipleOptions) => {
    const navigate = useNavigate();

    return useMutation(() => createSubPrinciple({ id, nome, description }), {
        onSuccess: () => {
            navigate("/");
        },
    });
};
