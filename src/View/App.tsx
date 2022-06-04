import React from "react";
import { Button, Text, Grid, Card, Collapse, Spacer } from "@geist-ui/core";
import { useMyPrinciples } from "../api/getMyPrinciples";
import Layout from "../Components/Layout";

function App() {
    const { data } = useMyPrinciples({ id: 1 });
    console.log(`data > `, data);
    return (
        <Layout>
            <div></div>
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

            <Card>
                <Text h2 my={0}>
                    Inequidade economica
                </Text>
                <Text>Distribuicao de riqueza na sociedade</Text>

                <Collapse.Group>
                    <Collapse
                        title="Question A"
                        subtitle="More description about Question A"
                    >
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Text>
                    </Collapse>
                    <Collapse
                        title="Question B"
                        subtitle={
                            <>
                                More description about <Text b>Question A</Text>
                            </>
                        }
                    >
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Text>
                    </Collapse>
                </Collapse.Group>
            </Card>

            <Spacer h={2} />

            <Card>
                <Text h4 my={0}>
                    HTTP is extensible
                </Text>
                <Text>
                    Introduced in HTTP/1.0, HTTP headers make this protocol easy
                    to extend and experiment with. New functionality can even be
                    introduced by a simple agreement between a client and a
                    server about a new header's semantics.
                </Text>

                <Collapse.Group>
                    <Collapse
                        title="Question A"
                        subtitle="More description about Question A"
                    >
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Text>
                    </Collapse>
                    <Collapse
                        title="Question B"
                        subtitle={
                            <>
                                More description about <Text b>Question A</Text>
                            </>
                        }
                    >
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Text>
                    </Collapse>
                </Collapse.Group>
            </Card>
        </Layout>
    );
}

export default App;
