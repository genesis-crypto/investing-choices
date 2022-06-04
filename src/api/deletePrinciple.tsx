import axios from "axios";
import { useMutation } from "react-query";
import { WithDataResponse as CacheMyPrinciples } from "../api/getMyPrinciples";
import { queryClient } from "../config/cache";

type DeletePrinciplesOptions = {
    id: number;
};

interface WithDataResponse {
    code: number;
    data: boolean;
}

type AxiosBodyResponse = WithDataResponse;

export const deletePrinciple = async ({
    id,
}: DeletePrinciplesOptions): Promise<AxiosBodyResponse> => {
    try {
        const { data } = await axios.delete("/v1/categories", {
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

export const useDeletePrinciple = ({ id }: UsePrincipleOptions) => {
    return useMutation(async () => await deletePrinciple({ id }), {
        onSuccess: () => {
            queryClient.setQueryData<CacheMyPrinciples | undefined>(
                "my-principles",
                (cache) => {
                    const data = cache!.data;
                    cache!.data = data.filter((item) => item.id !== id);

                    return cache;
                }
            );
        },
    });
};
