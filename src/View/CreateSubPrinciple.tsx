import React from "react";
import {
    Text,
    Input,
    Spacer,
    Textarea,
    Button,
    Grid,
    useInput,
} from "@geist-ui/core";
import Layout from "../Components/Layout";
import { useParams } from "react-router-dom";
import { usePostSubPrinciple } from "../api/postSubPrinciple";

const CreateSubPrinciple = () => {
    const { id } = useParams() as { id: string };

    const { state: stateSubCategoria, bindings: bindingsSubCategoria } =
        useInput("");

    const { state: stateDescription, bindings: bindingsDescription } =
        useInput("");

    const { mutate } = usePostSubPrinciple({
        id,
        nome: stateSubCategoria,
        description: stateDescription,
    });

    return (
        <Layout>
            <Text h2>Sub-Principio</Text>
            <Input
                placeholder="Nome do sub-principio"
                {...bindingsSubCategoria}
            />

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

export default CreateSubPrinciple;
