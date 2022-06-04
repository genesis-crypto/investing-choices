import { QueryClientProvider, QueryClient } from "react-query";

export const queryClient = new QueryClient();

const ReactQueryProvider = (props: React.PropsWithChildren<{}>) => {
    const { children } = props;

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default ReactQueryProvider;
