import React from "react";
import Article from "../components/article.tsx";
import Logo from "../components/logo.tsx";
import Footer from "../components/footer.tsx";

export default function Blog() {

    return (
        <React.Fragment>
            <section className="page columns center">
                <Logo active={false}/>
                <Article title="Commencement" date="20 febr. 2021" image="/banner.webp" description="The beginning of a great journey..."/>
                <p className="links">
                    <a href="/">home</a>
                    <span className="dot"></span>
                    <a href="/contact">contact</a>
                </p>
                <Footer/>
            </section>
    </React.Fragment>
    );
}
