import React from "react";
import "./Latest.scss";

interface LatestProps {
    image: string;
    credit: string;
    header: string;
    authorImage: string;
    authorLink: string;
    authorName: string;
    content: string;
    articleLink: string;
}

function Latest(props: any) {
    return (
        <div className="Latest">
            <div className="Latest-Tab"></div>
            <div className="Latest-Image-Container">
                <img className="Latest-Image" src={props.image} alt="" />
                <p className="Latest-Image-Creadit">{props.credit}</p>
            </div>
            <div className="Latest-Article">
                <h2 className="Latest-Header">{props.header}</h2>
                <div className="Latest-Author">
                    <img
                        className="Latest-Author-Image"
                        src={props.authorImage}
                        alt=""
                    />
                    <p>By</p>
                    <a href={props.authorLink}>{props.authorName}</a>
                </div>
                <p className="Latest-Body">{props.content}</p>
            </div>
            <div className="Latest-ReadMore">
                <a href={props.articleLink}>Read More</a>
            </div>
        </div>
    );
}

export default Latest;
