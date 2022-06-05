import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { useParams } from "react-router-dom";
import { queryClient } from "../config/cache";
import {
    Text,
    Input,
    Spacer,
    Textarea,
    Grid,
    Button,
    useInput,
} from "@geist-ui/core";
import { usePatchPrinciple } from "../api/patchPrinciples";
import { AxiosBodyResponse as CacheMyPrinciples } from "../api/getMyPrinciples";

const EditPrinciple = () => {
    const { id } = useParams() as { id: string };

    const data = queryClient.getQueryData<CacheMyPrinciples>("my-principles");

    const {
        state: stateCategoria,
        setState: setStateCategoria,
        bindings: bindingsCategoria,
    } = useInput("");

    const {
        state: stateDescription,
        setState: setStateDescription,
        bindings: bindingsDescription,
    } = useInput("");

    const { mutate } = usePatchPrinciple({
        id,
        nome: stateCategoria,
        description: stateDescription,
    });

    useEffect(() => {
        const [principle] =
            data?.data?.filter((item) => item.id === parseInt(id)) || [];

        setStateCategoria(principle?.category || "");
        setStateDescription(principle?.category_description || "");
    }, [id]);

    return (
        <Layout>
            <Text h2>Categoria</Text>
            <Input placeholder="Nome da categoria" {...bindingsCategoria} />

            <Spacer h={4} />

            <Text h2>Descrição</Text>
            <Textarea width="20%" height="120px" {...bindingsDescription} />

            <Spacer h={4} />

            <Grid>
                <Button shadow type="secondary" onClick={() => mutate()}>
                    Editar
                </Button>
            </Grid>
        </Layout>
    );
};

export default EditPrinciple;
