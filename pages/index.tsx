import { useDeno } from "aleph";
import React, { useState, useEffect } from "react";
import Logo from "../components/logo.tsx";
import Cube from "../components/cube.tsx";
import Footer from "../components/footer.tsx";

export default function Home() {

    return (
        <div className="page columns center">

            <Logo active={false}/>
            <h1>It's nice to see you there.</h1>
            <Cube active={false}/>
            <p className="links">
                <a href="/info">info</a>
                <span className="dot"></span>
                <a href="/news">news</a>
                <span className="dot"></span>
                <a href="/news">songs</a>
                <span className="dot"></span>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">source code</a>
            </p>
            <Footer/>
        </div>
    );
}