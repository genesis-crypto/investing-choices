import React from "react";
import { Button, Text, Grid } from "@geist-ui/core";
import { useMyPrinciples } from "../api/getMyPrinciples";
import Layout from "../Components/Layout";
import PrincipleContent from "../Components/PrincipleContent";

function App() {
    const { data, isLoading } = useMyPrinciples({ id: 1 });

    return (
        <Layout>
            <Grid.Container gap={2} justify="space-between">
                <Grid xs={12}>
                    <Text h1>Princípios</Text>
                </Grid>
                <Grid xs={12} justify="flex-end">
                    <Button shadow type="secondary">
                        Criar Principio
                    </Button>
                </Grid>
            </Grid.Container>

            <PrincipleContent isLoading={isLoading} data={data?.data} />
        </Layout>
    );
}

export default App;
