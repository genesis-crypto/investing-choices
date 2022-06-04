import React from "react";
import { Button, Grid } from "@geist-ui/core";

const UserEdition = () => {
    return (
        <Grid.Container gap={1.5} justify="flex-end">
            <Grid>
                <Button type="success" ghost auto scale={0.7}>
                    editar
                </Button>
            </Grid>

            <Grid>
                <Button type="error" ghost auto scale={0.7}>
                    deletar
                </Button>
            </Grid>
        </Grid.Container>
    );
};

export default UserEdition;
