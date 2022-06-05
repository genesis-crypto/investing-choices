import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import { useParams } from "react-router-dom";
import { queryClient } from "../config/cache";
import {
    Text,
    Input,
    Spacer,
    Textarea,
    Grid,
    Button,
    useInput,
} from "@geist-ui/core";
import { usePatchBook } from "../api/patchBook";
import { AxiosBodyResponse as CacheBooks } from "../api/getBooks";

const EditPrinciple = () => {
    const { id } = useParams() as { id: string };

    const data = queryClient.getQueryData<CacheBooks>("books");

    const {
        state: stateBook,
        setState: setStateBook,
        bindings: bindingsBook,
    } = useInput("");

    const {
        state: stateDescription,
        setState: setStateDescription,
        bindings: bindingsDescription,
    } = useInput("");

    const {
        state: stateImage,
        setState: setImage,
        bindings: bindingsImage,
    } = useInput("");

    const { mutate } = usePatchBook({
        id,
        nome: stateBook,
        description: stateDescription,
        image_url: stateImage,
    });

    useEffect(() => {
        const [book] =
            data?.data?.filter((item) => item.id === parseInt(id)) || [];

        setStateBook(book?.nome || "");
        setStateDescription(book?.description || "");
        setImage(book?.image_url || "");
    }, [id]);

    return (
        <Layout>
            <Text h2>Categoria</Text>
            <Input placeholder="Nome da categoria" {...bindingsBook} />

            <Spacer h={4} />

            <Text h2>Descrição</Text>
            <Textarea width="20%" height="120px" {...bindingsDescription} />

            <Spacer h={4} />

            <Text h2>Image URL</Text>
            <Input placeholder="URL da imagem" {...bindingsImage} />

            <Spacer />

            <Grid>
                <Button shadow type="secondary" onClick={() => mutate()}>
                    Editar
                </Button>
            </Grid>
        </Layout>
    );
};

export default EditPrinciple;
