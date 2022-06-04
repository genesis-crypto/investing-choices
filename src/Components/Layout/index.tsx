import React from "react";
import { Page, Tabs } from "@geist-ui/core";

const Layout = (props: React.PropsWithChildren<{}>) => {
    const { children } = props;

    return (
        <Page>
            <Page.Header>
                <Tabs initialValue="1" onChange={(e) => console.log(e)}>
                    <Tabs.Item label="Meus Principios" value="/home" />
                    <Tabs.Item label="Livros" value="/about" />
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
