import axios from "axios";
import { useQuery } from "react-query";

type GetMyPrinciplesOptions = {
    id: number;
};

export interface Principle {
    id: number;
    category: string;
    category_description: string;
    subcategory:
        | { id: number; subcategory: string; subcategory_description: string }[]
        | [];
}

export interface WithDataResponse {
    code: number;
    data: Principle[];
}

export type AxiosBodyResponse = WithDataResponse;

export const getMyPrinciples = async ({
    id,
}: GetMyPrinciplesOptions): Promise<AxiosBodyResponse> => {
    try {
        const { data } = await axios.get("/v1/categories/user", {
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

interface UseMyPrinciplesOptions {
    id: number;
}

export const useMyPrinciples = ({ id }: UseMyPrinciplesOptions) => {
    return useQuery(["my-principles"], () => getMyPrinciples({ id }));
};
