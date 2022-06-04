import { queryClient } from "../config/cache";

interface GetCache {
    name: string;
}

const getCache = <T,>({ name }: GetCache) => {
    const data = queryClient.getQueryData(name);
    return data as T;
};

export default getCache;
