import React from "react";
import { Card, Text, Spacer, Collapse } from "@geist-ui/core";
import { Principle } from "../../api/getMyPrinciples";

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
                        <Text h2 my={0}>
                            {item.category}
                        </Text>
                        <Text>{item.category_description}</Text>

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

/**
 * <Collapse.Group>
                <Collapse
                    title="Question A"
                    subtitle="More description about Question A"
                >
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.
                    </Text>
                </Collapse>
                <Collapse
                    title="Question B"
                    subtitle={
                        <>
                            More description about{" "}
                            <Text b>Question A</Text>
                        </>
                    }
                >
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.
                    </Text>
                </Collapse>
            </Collapse.Group>
 */

export default PrincipleContentLayout;
