import React from "react";

export default function Article({title, date, image, video, description}) {

    let content = <div></div>;
    if(image) {
        content = <Image source={image}/>;
    }
    if(video) {
        content = <Video source={video}/>;
    }

    return (
        <div className="article">
            <div className="head">
                <h3 className="title">{title}</h3>
                <p className="date">
                    {date}
                </p>
            </div>

            {content}

            <p className="description">{description}</p>
        </div>
    );
}


function Image({source}) {
    return (<div className="image">
        <img src={source}/>
    </div>);
}

function Video({source}) {
    return (<div className="video">
        <video controls>
            <source src={source} type="video/mp4"/>
            Video format not supported by your browser.
        </video>
    </div>);
}
