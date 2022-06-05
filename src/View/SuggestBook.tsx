import React, { useState } from "react";
import Layout from "../Components/Layout";
import { Text, Select, Spacer, Button } from "@geist-ui/core";
import { useBooks } from "../api/getBooks";
import { useParams } from "react-router-dom";
import { useUserSuggest } from "../api/postUserSuggest";

const SuggestBook = () => {
    const { data } = useBooks();
    const { id } = useParams() as { id: string };

    const [book, setBook] = useState<string | string[]>("");

    const { mutate } = useUserSuggest({ idBook: book, idUser: id });

    return (
        <Layout>
            <Text h2>Recomendar livros</Text>
            <Select
                onChange={(e) => setBook(e)}
                placeholder="Selecione um livro!"
                type="default"
            >
                {data?.data.map((book) => (
                    <Select.Option value={book.id.toString()}>
                        {book.nome}
                    </Select.Option>
                ))}
            </Select>
            <Spacer />
            <Button onClick={() => mutate()}>Recomendar</Button>
        </Layout>
    );
};

export default SuggestBook;
