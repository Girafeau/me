import React from "react";

export default function Mail() {

    const mail = "5af9x6yvt@relay.firefox.com";

    return (
        <div className="mail">
            <form target="_top" action={`mailto:${mail}`}>
                <button type="submit" className="button"> Contact me</button>
            </form>
        </div>
    );
}
