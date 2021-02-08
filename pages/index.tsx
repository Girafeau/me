import React from "react";
import Logo from "../components/logo.tsx";
import Cube from "../components/cube.tsx";
import Footer from "../components/footer.tsx";

export default function Home() {

    return (
        <section className="page columns center">
            <Logo active={false}/>
            <h1>It's nice to see you there.</h1>
            <Cube active={false}/>
            <p className="links">
                <a href="/contact">contact</a>
                <span className="dot"></span>
                <a href="/blog">blog</a>
            </p>

            <Footer/>
        </section>
    );
}
