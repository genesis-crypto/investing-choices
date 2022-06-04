import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { useParams } from "react-router-dom";
import { AxiosBodyResponse as CacheMyPrinciples } from "../api/getMyPrinciples";
import { Text, Input, Spacer, Textarea } from "@geist-ui/core";
import { queryClient } from "../config/cache";

const EditPrinciple = () => {
    const { id } = useParams() as { id: string };

    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const data = queryClient.getQueryData<CacheMyPrinciples>("my-principles");

    useEffect(() => {
        const [principle] =
            data?.data?.filter((item) => item.id === parseInt(id)) || [];

        setCategory(principle?.category || "");
        setDescription(principle?.category_description || "");
    }, [id]);

    return (
        <Layout>
            <Text h2>Categoria</Text>
            <Input placeholder="Nome da categoria" value={category} />

            <Spacer h={4} />

            <Text h2>Descrição</Text>
            <Textarea width="20%" height="120px" value={description} />
        </Layout>
    );
};

export default EditPrinciple;
