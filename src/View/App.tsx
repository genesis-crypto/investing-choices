import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text, Grid } from "@geist-ui/core";
import { useMyPrinciples } from "../api/getMyPrinciples";
import Layout from "../Components/Layout";
import PrincipleContent from "../Components/PrincipleContent";

const App = () => {
    const { data, isLoading } = useMyPrinciples({ id: 1 });

    const navigate = useNavigate();

    return (
        <Layout>
            <Grid.Container gap={2} justify="space-between">
                <Grid xs={12}>
                    <Text h1>Princípios</Text>
                </Grid>
                <Grid xs={12} justify="flex-end">
                    <Button
                        shadow
                        type="secondary"
                        onClick={() => navigate("/create")}
                    >
                        Criar Principio
                    </Button>
                </Grid>
            </Grid.Container>

            <PrincipleContent isLoading={isLoading} data={data?.data} />
        </Layout>
    );
};

export default App;
