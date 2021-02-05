import React, { useState } from "react";
import Article from "../components/article.tsx";
import Logo from "../components/logo.tsx";
import Footer from "../components/footer.tsx";
import Banner from "../components/banner.tsx";

export default function News() {

    return (<React.Fragment>
            <Banner/>
            <div className="page columns center">
                <Logo active={false}/>

                <Article title={"Commencement"} date={"20 febr. 2021"}/>
                <h1>News.</h1>

                <p className="links">
                    <a href="/">home</a>
                    <span className="dot"></span>
                    <a href="/info">info</a>
                </p>
                <Footer/>
            </div>
    </React.Fragment>
    );
}
