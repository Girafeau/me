import type { ComponentType } from "react";
import React from "react";
import "./style/index.css";

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
    return (
        <main>
            <head>
                <title>p.m • サノウイ</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
            </head>
            <Page {...pageProps} />
        </main>
    );
}
