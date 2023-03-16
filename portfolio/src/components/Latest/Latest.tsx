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
            <div className="Latest-Tab">
                <p>Latest News</p>
            </div>
            <div className="Latest-Image-Container">
                <img
                    className="Latest-Image"
                    src={require(`../../assets/${image}`)}
                    alt=""
                />
                <p className="Latest-Image-Credit">
                    {creditName} /{" "}
                    <a className="Latest-Image-Credit-Site" href={creditLink}>
                        {creditWebsite}
                    </a>
                </p>
            </div>
            <div className="Latest-Article">
                <h2 className="Latest-Header">{header}</h2>
                <div className="Latest-Author">
                    <img
                        className="Latest-Author-Image"
                        src={require(`../../assets/${authorImage}`)}
                        alt=""
                    />
                    <p>
                        By <a href={authorLink}>{authorName}</a>
                    </p>
                </div>
                <p className="Latest-Body">{content}</p>
            </div>
            <div className="Latest-ReadMore">
                <a href={articleLink}>Read More</a>
            </div>
        </div>
    );
};

export default Latest;
