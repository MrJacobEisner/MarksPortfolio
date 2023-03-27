import React from "react";
import "./Latest.scss";

interface LatestProps {
    image: string;
    creditName?: string;
    header: string;
    authorImage?: string;
    authorLink?: string;
    authorName?: string;
    content: string;
    articleLink: string;
}

const defaultProps = {
    creditName: "Mark Alfred",
    authorImage: "MarkProfile.jpg",
    authorLink: "https://dailynexus.com/author/markalfred/",
    authorName: "Mark Alfred",
};

const Latest = (LatestProps: LatestProps) => {
    const {
        image,
        creditName,
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
                src={require(`../../assets/latest/${image}`)}
                alt=""
            />
            <div className="Credit">
                <p>{creditName}</p>
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
                        By{" "}
                        <a
                            href={authorLink}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            {authorName}
                        </a>
                    </p>
                </div>
                <div className="Content">
                    <p>{content}</p>
                </div>
                <a
                    className="Read-More"
                    href={articleLink}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Read More
                </a>
            </div>
        </div>
    );
};

export default Latest;
