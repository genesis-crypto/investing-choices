import React from "react";
import { Page, Tabs } from "@geist-ui/core";
import { useNavigate } from "react-router-dom";

const Layout = (props: React.PropsWithChildren<{}>) => {
    const { children } = props;
    const navigate = useNavigate();

    return (
        <Page>
            <Page.Header>
                <Tabs initialValue="1" onChange={(e) => navigate(e)}>
                    <Tabs.Item label="Meus Principios" value="/" />
                    <Tabs.Item label="Livros" value="/books" />
                    <Tabs.Item label="Usuarios" value="/about-us" />
                </Tabs>
            </Page.Header>

            <Page.Content>{children}</Page.Content>

            <Page.Footer>
                <h4>make smart choices</h4>
            </Page.Footer>
        </Page>
    );
};

export default Layout;
