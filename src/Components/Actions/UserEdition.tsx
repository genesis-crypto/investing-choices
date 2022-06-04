import React, { useState } from "react";
import { Button, Grid, Modal } from "@geist-ui/core";
import ModalCustom from "../Modal";

interface UserEditionProps {
    id: number;
}

const UserEdition = (props: UserEditionProps) => {
    const { id } = props;

    const [state, setState] = useState(false);

    const handler = () => setState(true);

    const closeHandler = () => {
        setState(false);
    };

    return (
        <>
            <Grid.Container gap={1.5} justify="flex-end">
                <Grid>
                    <Button
                        type="success"
                        ghost
                        auto
                        scale={0.7}
                        onClick={() => console.log(`going to edit > ${id}`)}
                    >
                        editar
                    </Button>
                </Grid>

                <Grid>
                    <Button
                        type="error"
                        ghost
                        auto
                        scale={0.7}
                        onClick={handler}
                    >
                        deletar
                    </Button>
                </Grid>
            </Grid.Container>

            <ModalCustom
                id={id}
                state={state}
                setState={setState}
                closeHandler={closeHandler}
            />
        </>
    );
};

export default UserEdition;
