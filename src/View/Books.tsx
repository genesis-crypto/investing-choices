import React, { useState } from "react";
import Layout from "../Components/Layout";
import { useBooks } from "../api/getBooks";
import { Card, Text, Spacer, Image, Button, Grid } from "@geist-ui/core";
import { useNavigate } from "react-router-dom";
import ModalBook from "../Components/Modal/Book";

const Books = () => {
    const { data } = useBooks();

    const navigate = useNavigate();

    const [id, setId] = useState(0);
    const [state, setState] = useState(false);

    return (
        <Layout>
            <Grid.Container gap={2} justify="space-between">
                <Grid xs justify="flex-end">
                    <Button
                        shadow
                        type="secondary"
                        onClick={() => navigate("/create/books")}
                    >
                        Adicionar livro
                    </Button>
                </Grid>
            </Grid.Container>
            <Spacer />

            {data?.data?.map((book) => (
                <>
                    <Card>
                        <Grid>
                            <Image height={20} src={book.image_url} />
                            <Text h4 my={0}>
                                {book.nome}
                            </Text>
                            <Text>{book.description}</Text>
                            <Text
                                h4
                            >{`Numero de recomendacoes: ${book.numberOfSuggestions}`}</Text>
                            <Spacer />

                            <Button
                                onClick={() =>
                                    navigate(`/edit/books/${book.id}`)
                                }
                            >
                                Editar
                            </Button>

                            <Spacer />

                            <Button
                                type="error"
                                onClick={() => {
                                    setId(book.id);
                                    setState(true);
                                }}
                            >
                                Deletar
                            </Button>
                        </Grid>
                    </Card>
                    <Spacer />
                </>
            ))}

            <ModalBook
                id={id}
                state={state}
                setState={setState}
                closeHandler={() => setState(false)}
            />
        </Layout>
    );
};

export default Books;
