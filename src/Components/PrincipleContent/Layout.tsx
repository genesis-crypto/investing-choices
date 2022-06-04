import React from "react";
import { Card, Text, Spacer, Collapse, Grid } from "@geist-ui/core";
import { Principle } from "../../api/getMyPrinciples";
import UserEdition from "../Actions/UserEdition";

interface PrincipleContentLayoutProps {
    data: Principle[];
}

const PrincipleContentLayout = (props: PrincipleContentLayoutProps) => {
    const { data } = props;

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
                                </Collapse>
                            </Collapse.Group>
                        ))}
                    </Card>

                    <Spacer h={2} />
                </div>
            ))}
        </div>
    );
};

export default PrincipleContentLayout;
