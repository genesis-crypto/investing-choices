import React from "react";
import Layout from "../Components/Layout";
import {
    Text,
    Input,
    Textarea,
    Spacer,
    Grid,
    Button,
    useInput,
} from "@geist-ui/core";
import { usePostBook } from "../api/postBook";

const CreateBook = () => {
    const { state: livro, bindings: bindingsLivro } = useInput("");
    const { state: descricao, bindings: bindingsDescricao } = useInput("");
    const { state: image, bindings: bindingsImage } = useInput("");

    const { mutate } = usePostBook({
        nome: livro,
        description: descricao,
        image_url: image,
    });

    return (
        <Layout>
            <Text h2>Livro</Text>
            <Input placeholder="Nome da categoria" {...bindingsLivro} />

            <Text h2>Descricao</Text>
            <Textarea width="20%" height="120px" {...bindingsDescricao} />

            <Text h2>Image URL</Text>
            <Input placeholder="URL da imagem" {...bindingsImage} />

            <Spacer h={4} />

            <Grid>
                <Button shadow type="secondary" onClick={() => mutate()}>
                    Criar
                </Button>
            </Grid>
        </Layout>
    );
};

export default CreateBook;
