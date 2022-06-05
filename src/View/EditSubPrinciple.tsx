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
import { usePatchSubPrinciple } from "../api/patchSubPrinciples";
import { AxiosBodyResponse as CacheMyPrinciples } from "../api/getMyPrinciples";

const EditSubPrinciple = () => {
    const { idCategory, idPrinciple } = useParams() as {
        idCategory: string;
        idPrinciple: string;
    };

    const data = queryClient.getQueryData<CacheMyPrinciples>("my-principles");
    console.log(`>>`, data);
    console.log(`idCategory, idPrinciple`, idCategory, idPrinciple);
    const {
        state: stateSubCategoria,
        setState: setStateSubCategoria,
        bindings: bindingsCategoria,
    } = useInput("");

    const {
        state: stateDescription,
        setState: setStateDescription,
        bindings: bindingsDescription,
    } = useInput("");

    const { mutate } = usePatchSubPrinciple({
        id: idPrinciple,
        nome: stateSubCategoria,
        description: stateDescription,
    });

    useEffect(() => {
        const [principle] =
            data?.data?.filter((item) => item.id === parseInt(idCategory)) ||
            [];

        const [subprinciple] = principle.subcategory.filter(
            (subcategory) => subcategory.id === parseInt(idPrinciple)
        );

        setStateSubCategoria(subprinciple?.subcategory || "");
        setStateDescription(subprinciple?.subcategory_description || "");
    }, [idCategory]);

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

export default EditSubPrinciple;
