import React from "react";

export default function Cube({active}) {

    return (
        <React.Fragment>
            <input type="checkbox" id="input-b" defaultChecked={active}/>
            <label htmlFor="input-b" className="scene" id="label-b">
                <div className="box">
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
