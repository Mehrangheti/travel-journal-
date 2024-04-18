import React from "react";

export default function MainContent(props) {
    return (
        <>
            <main>
                <div className="image">
                    <img src={`${props.imageUrl}`} />
                </div>
                <div className="info">
                    <div>
                        <p className="link"><i className="fa-solid fa-location-dot"></i>{props.location} <a href={props.googleMapsUrl}>View on Google Maps</a></p>
                    </div>
                    <div>
                        <h1>{props.title}</h1>
                    </div>
                    <div>
                        <p className="para">{props.startDate} - {props.endDate}</p>
                    </div>
                    <div>
                        <p className="desc">{props.description}</p>
                    </div>
                </div>
            </main>
        </>
    );
}
