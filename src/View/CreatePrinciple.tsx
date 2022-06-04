import React from "react";
import Layout from "../Components/Layout";
import {
    Text,
    Input,
    Spacer,
    Textarea,
    Button,
    Grid,
    useInput,
} from "@geist-ui/core";
import { usePostPrinciple } from "../api/postPrinciple";

const CreatePrinciple = () => {
    const { state: stateCategoria, bindings: bindingsCategoria } = useInput("");

    const { state: stateDescription, bindings: bindingsDescription } =
        useInput("");

    const { mutate } = usePostPrinciple({
        id: 1,
        nome: stateCategoria,
        description: stateDescription,
    });

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
                    Criar
                </Button>
            </Grid>
        </Layout>
    );
};

export default CreatePrinciple;
