import axios from "axios";
import { useMutation } from "react-query";
import { WithDataResponse as CacheMyPrinciples } from "../api/getMyPrinciples";
import { queryClient } from "../config/cache";

type DeleteSubPrinciplesOptions = {
    id: number;
};

interface WithDataResponse {
    code: number;
    data: boolean;
}

type AxiosBodyResponse = WithDataResponse;

export const deleteSubPrinciple = async ({
    id,
}: DeleteSubPrinciplesOptions): Promise<AxiosBodyResponse> => {
    try {
        const { data } = await axios.delete("/v1/subcategories", {
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

interface UsePrincipleOptions {
    id: number;
}

export const useDeleteSubPrinciple = ({ id }: UsePrincipleOptions) => {
    return useMutation(() => deleteSubPrinciple({ id }));
};
