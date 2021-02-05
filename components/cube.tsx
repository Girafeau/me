import React, { useState, useEffect } from "react";

export default function Cube({active}) {

    /*
    const [face, change] = useState('bottom');
    const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
    useEffect(() => {
        change(faces[Math.floor(Math.random() * faces.length)]);
        const interval = setInterval(() => change(faces[Math.floor(Math.random() * faces.length)]), 2500);
        return () => clearInterval(interval);
    }, []);

     */

    return (<React.Fragment>
            <input type="checkbox" id="input-b" defaultChecked={active}/>
            <label htmlFor="input-b" className="scene" id="label-b">
                <div className={`box ${2}`}>
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face right"></div>
                    <div className="face left"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
            </label>
        </React.Fragment>
    );
}
