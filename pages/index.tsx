import React from "react";
import Logo from "../components/logo.tsx";
import Cube from "../components/cube.tsx";
import Footer from "../components/footer.tsx";
import Nav from "../components/nav.tsx";

export default function Home() {

    return (
        <section className="page columns center">
            <Logo active={false}/>
            <h1>Hello there.</h1>
            <Cube active={false} rotation={"horizontal"}/>
            <Nav/>
            <Footer/>
        </section>
    );
}
