import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

type EditSubPrinciplesOptions = {
    id: string;
    nome: string;
    description: string;
};

interface WithDataResponse {
    code: number;
    data: boolean;
}

type AxiosBodyResponse = WithDataResponse;

export const editSubPrinciple = async ({
    id,
    nome,
    description,
}: EditSubPrinciplesOptions): Promise<AxiosBodyResponse> => {
    try {
        const { data } = await axios.patch("/v1/subcategories", {
            id,
            nome,
            description,
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

export const usePatchSubPrinciple = ({
    id,
    nome,
    description,
}: UsePrincipleOptions) => {
    const navigate = useNavigate();

    return useMutation(() => editSubPrinciple({ id, nome, description }), {
        onSuccess: () => {
            navigate("/");
        },
    });
};
