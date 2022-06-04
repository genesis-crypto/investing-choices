import React, { Dispatch } from "react";
import { Modal } from "@geist-ui/core";

interface ModalCustomProps {
    state: boolean;
    setState: Dispatch<React.SetStateAction<boolean>>;
    closeHandler: () => void;
}

const ModalCustom = (props: ModalCustomProps) => {
    const { state, setState, closeHandler } = props;

    return (
        <Modal visible={state} onClose={closeHandler}>
            <Modal.Title>Atencao!</Modal.Title>
            <Modal.Subtitle>Voce ira deletar uma categoria!</Modal.Subtitle>
            <Modal.Content>
                <p>Todos os dados contidos nesta serao deletados.</p>
            </Modal.Content>
            <Modal.Action passive onClick={() => setState(false)}>
                Cencelar
            </Modal.Action>
            <Modal.Action onClick={() => setState(false)}>Deletar</Modal.Action>
        </Modal>
    );
};

export default ModalCustom;
