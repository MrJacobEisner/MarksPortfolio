import React from "react";
import "./Latest.scss";

interface LatestProps {
    image: string;
    creditName?: string;
    creditWebsite?: string;
    creditLink?: string;
    header: string;
    authorImage?: string;
    authorLink?: string;
    authorName?: string;
    content: string;
    articleLink: string;
}

const defaultProps = {
    creditName: "Mark Alfred",
    creditWebsite: "Daily Nexus",
    creditLink: "https://dailynexus.com/",
    authorImage: "MarkProfile.jpg",
    authorLink: "https://dailynexus.com/author/markalfred/",
    authorName: "Mark Alfred",
};

const Latest = (LatestProps: LatestProps) => {
    const {
        image,
        creditName,
        creditWebsite,
        creditLink,
        header,
        authorImage,
        authorLink,
        authorName,
        content,
        articleLink,
    } = { ...defaultProps, ...LatestProps };
    return (
        <div className="Latest">
            <div className="Tab">
                <p className="News">Latest News</p>
            </div>
            <img
                className="Image"
                src={require(`../../assets/${image}`)}
                alt=""
            />
            <div className="Credit">
                <p>
                    {creditName} / <a href={creditLink}>{creditWebsite}</a>
                </p>
            </div>
            <div className="Snippet">
                <h2 className="Latest-Header">{header}</h2>
                <div className="Author">
                    <img
                        className="Author-Image"
                        src={require(`../../assets/${authorImage}`)}
                        alt=""
                    />
                    <p>
                        By <a href={authorLink}>{authorName}</a>
                    </p>
                </div>
                <div className="Content">
                    <p>{content}</p>
                </div>
                <a className="Read-More" href={articleLink}>
                    Read More
                </a>
            </div>
        </div>
    );
};

export default Latest;
