import React from "react";
import Layout from "../Components/Layout";
import { useBooks } from "../api/getBooks";
import {
    Card,
    Text,
    Input,
    Spacer,
    Image,
    Button,
    Grid,
    useInput,
} from "@geist-ui/core";
const Books = () => {
    const { data } = useBooks();

    console.log(data);
    return (
        <Layout>
            {data?.data.map((book) => (
                <>
                    <Card>
                        <Grid justify="flex-start">
                            <Image height={20} src={book.image_url} />
                            <Text h4 my={0}>
                                {book.nome}
                            </Text>
                            <Text>{book.description}</Text>
                        </Grid>
                    </Card>
                    <Spacer />
                </>
            ))}
        </Layout>
    );
};

export default Books;
