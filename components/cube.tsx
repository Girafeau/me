import React from "react";

export default function Cube({active, rotation}) {

    return (
        <React.Fragment>
            <input type="checkbox" id="input-b" defaultChecked={active}/>
            <label htmlFor="input-b" className="scene" id="label-b">
                <div className={`box ${rotation}`}>
                    <div className="front face"></div>
                    <div className="back face"></div>
                    <div className="right face"></div>
                    <div className="left face"></div>
                    <div className="top face"></div>
                    <div className="bottom face"></div>
                </div>
            </label>
        </React.Fragment>
    );
}
