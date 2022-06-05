import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

type EditPrinciplesOptions = {
    id: string;
    nome: string;
    description: string;
};

interface WithDataResponse {
    code: number;
    data: boolean;
}

type AxiosBodyResponse = WithDataResponse;

export const editPrinciple = async ({
    id,
    nome,
    description,
}: EditPrinciplesOptions): Promise<AxiosBodyResponse> => {
    try {
        const { data } = await axios.patch("/v1/categories", {
            nome,
            description,
            id,
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

export const usePatchPrinciple = ({
    id,
    nome,
    description,
}: UsePrincipleOptions) => {
    const navigate = useNavigate();

    return useMutation(() => editPrinciple({ id, nome, description }), {
        onSuccess: () => {
            navigate("/");
        },
    });
};
