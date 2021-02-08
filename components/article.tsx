import React from "react";

export default function Article({title, date, image, description}) {

    return (
        <div className="article">
            <div className="head">
                <h3 className="title">{title}</h3>
                <p className="date">
                    {date}
                </p>
            </div>
            <div className="image">
                <img src={image}/>
            </div>
            <p className="description">{description}</p>
        </div>
    );
}
