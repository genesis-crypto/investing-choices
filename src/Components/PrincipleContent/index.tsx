import Layout from "./Layout";
import { Loading } from "@geist-ui/core";
import { Principle } from "../../api/getMyPrinciples";

interface PrincipleContentProps {
    isLoading: boolean;
    data?: Principle[];
}

const PrincipleContent = (props: PrincipleContentProps) => {
    const { isLoading, data } = props;

    if (isLoading || typeof data === "undefined") {
        return <Loading spaceRatio={2.5}>Carregando</Loading>;
    }

    return <Layout data={data} />;
};

export default PrincipleContent;
