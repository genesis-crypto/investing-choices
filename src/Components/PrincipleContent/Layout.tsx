import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Text, Spacer, Collapse, Grid, Button } from "@geist-ui/core";
import { Principle } from "../../api/getMyPrinciples";
import UserEdition from "../Actions/UserEdition";

interface PrincipleContentLayoutProps {
    data: Principle[];
}

const PrincipleContentLayout = (props: PrincipleContentLayoutProps) => {
    const { data } = props;

    const navigate = useNavigate();

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <Card>
                        <Grid.Container gap={2} justify="space-between">
                            <Grid xs={6}>
                                <div>
                                    <Text h2 my={0}>
                                        {item.category}
                                    </Text>
                                    <Text>{item.category_description}</Text>
                                </div>
                            </Grid>

                            <Grid xs={6}>
                                <UserEdition id={item.id} />
                            </Grid>
                        </Grid.Container>

                        {item?.subcategory?.map((subcategory, subindex) => (
                            <Collapse.Group key={subindex}>
                                <Collapse title={subcategory.subcategory}>
                                    <Text>
                                        {subcategory.subcategory_description}
                                    </Text>
                                    <Button
                                        type="success"
                                        ghost
                                        auto
                                        scale={0.5}
                                        onClick={() =>
                                            navigate(
                                                `/edit/subprinciple/${item.id}/${subcategory.id}`
                                            )
                                        }
                                    >
                                        Editar
                                    </Button>
                                    <Spacer />
                                    <Button type="error" ghost auto scale={0.5}>
                                        Deletar
                                    </Button>
                                </Collapse>
                            </Collapse.Group>
                        ))}
                        <Spacer />

                        <Button
                            onClick={() =>
                                navigate(`/create/subprinciple/${item.id}`)
                            }
                        >
                            Adicionar Sub-Principio
                        </Button>
                    </Card>

                    <Spacer h={2} />
                </div>
            ))}
        </div>
    );
};

export default PrincipleContentLayout;
