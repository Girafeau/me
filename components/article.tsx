import React, { useState } from "react";

export default function Article({title, date, image, content}) {

    return (
        <div className="article">
            <h3 className="title">{title}</h3>
            <p className="date">
                {date}
            </p>
        </div>
    );
}
