import React from "react";
import { useUsers } from "../api/getUsers";
import Layout from "../Components/Layout";
import { Card, Text, Spacer, Image, Grid, Button } from "@geist-ui/core";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const { data } = useUsers();

    const navigate = useNavigate();

    return (
        <Layout>
            {data?.data.map((user) => (
                <>
                    <Grid.Container justify="center">
                        <Card shadow>
                            <Grid justify="center">
                                <Image
                                    width="280px"
                                    height="160px"
                                    src={user.image_url}
                                />
                                <Text>{user.nome}</Text>

                                <Button
                                    onClick={() =>
                                        navigate(`/users/principles/${user.id}`)
                                    }
                                >
                                    Ver principios
                                </Button>
                                <Spacer />
                                <Button>Recomendar livro</Button>
                            </Grid>
                        </Card>
                    </Grid.Container>
                    <Spacer />
                </>
            ))}
        </Layout>
    );
};

export default Users;
