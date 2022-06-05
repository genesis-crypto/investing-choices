import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text, Grid } from "@geist-ui/core";
import { useMyPrinciples } from "../api/getMyPrinciples";
import Layout from "../Components/Layout";
import PrincipleContent from "../Components/PrincipleContent";
import { useParams } from "react-router-dom";

const UserPrinciple = () => {
    const { id } = useParams() as { id: string };

    const { data, isLoading } = useMyPrinciples({ id });

    return (
        <Layout>
            <Grid.Container gap={2} justify="space-between">
                <Grid xs={12}>
                    <Text h1>Princípios</Text>
                </Grid>
            </Grid.Container>

            <PrincipleContent isLoading={isLoading} data={data?.data} />
        </Layout>
    );
};

export default UserPrinciple;
