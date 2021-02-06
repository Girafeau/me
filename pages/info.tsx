import React from "react";
import Logo from "../components/logo.tsx";
import Footer from "../components/footer.tsx";
import Mail from "../components/mail.tsx";

export default function Info() {

    return (
        <React.Fragment>
            <section className="page columns center">
                <Logo active={false}/>
                <div className="content">
                    <span>software engineer</span>
                    <span className="dot"></span>
                    <span>designer</span>
                    <span className="dot"></span>
                    <span>creator</span>
                    <span className="dot"></span>
                    <span>adventurer</span>
                    <span className="dot"></span>
                    <span>french</span>
                    <span className="dot"></span>
                    <span>pianist</span>
                    <span className="dot"></span>
                    <span>and more...</span>
                </div>
                <Mail/>
                <p className="links">
                    <a href="/">home</a>
                    <span className="dot"></span>
                    <a href="/blog">blog</a>
                </p>
                <Footer/>
            </section>
        </React.Fragment>
    );
}
