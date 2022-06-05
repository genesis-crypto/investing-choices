import React, { Dispatch } from "react";
import { Modal } from "@geist-ui/core";
import { useDeleteBook } from "../../api/deleteBook";

interface ModalCustomProps {
    id: number;
    state: boolean;
    setState: Dispatch<React.SetStateAction<boolean>>;
    closeHandler: () => void;
}

const ModalBook = (props: ModalCustomProps) => {
    const { id, state, setState, closeHandler } = props;

    const { mutate } = useDeleteBook({ id });

    return (
        <Modal visible={state} onClose={closeHandler}>
            <Modal.Title>Atencao!</Modal.Title>
            <Modal.Subtitle>Voce ira deletar um Livro!</Modal.Subtitle>
            <Modal.Content>
                <p>Todos os dados contidos nesta serao deletados.</p>
            </Modal.Content>
            <Modal.Action passive onClick={() => setState(false)}>
                Cencelar
            </Modal.Action>
            <Modal.Action
                onClick={() => {
                    mutate();
                    closeHandler();
                }}
            >
                Deletar
            </Modal.Action>
        </Modal>
    );
};

export default ModalBook;
