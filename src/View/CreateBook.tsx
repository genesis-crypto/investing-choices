import React from "react";
import Layout from "../Components/Layout";
import { Text, Input, Textarea, Spacer, Grid, Button } from "@geist-ui/core";

const CreateBook = () => {
    return (
        <Layout>
            <Text h2>Livro</Text>
            <Input placeholder="Nome da categoria" />

            <Text h2>Descricao</Text>
            <Textarea width="20%" height="120px" />

            <Text h2>Image URL</Text>
            <Input placeholder="URL da imagem" />

            <Spacer h={4} />

            <Grid>
                <Button shadow type="secondary" onClick={() => console.log()}>
                    Criar
                </Button>
            </Grid>
        </Layout>
    );
};

export default CreateBook;
