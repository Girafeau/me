import React from "react";
import Article from "../components/article.tsx";
import Logo from "../components/logo.tsx";
import Footer from "../components/footer.tsx";
import Nav from "../components/nav.tsx";

export default function Blog() {

    return (
        <React.Fragment>
            <section className="page columns center">
                <Logo active={false}/>
                <Article title="Les Vosges" date="15 febr. 2021" image="/vosges.webp" description="A beautiful journey in France."/>
                <hr/>
                <Article title="Commencement" date="08 febr. 2021" image="/tournesol.webp" description="..."/>
                <Nav/>
                <Footer/>
            </section>
    </React.Fragment>
    );
}
