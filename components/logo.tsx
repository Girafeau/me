import React from "react";

export default function Logo({active}) {

    return (<React.Fragment>
            <input type="checkbox" id="input-l" defaultChecked={active}/>
            <label htmlFor="input-l" className="logo" id="label-l">
                <div className="characters">
                    <p>サノ</p>
                    <p>ウイ</p>
                </div>
                <div className="flag">
                    <span className="circle"></span>
                </div>
            </label>
    </React.Fragment>
    );
}
