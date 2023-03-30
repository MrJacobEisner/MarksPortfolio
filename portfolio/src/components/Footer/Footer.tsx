import React from "react";
import "./Footer.scss";

import Instagram from "./../../assets/icons/Instagram.png";
import LinkedIn from "./../../assets/icons/LinkedIn.png";
import Twitter from "./../../assets/icons/Twitter.png";
import Share from "./../../assets/icons/Share.png";

export default function Footer() {
    return (
        <div className="Footer">
            <hr />
            <div className="Socials">
                <a
                    href="https://twitter.com/markaifred?s=21&t=27IEgTFPBb3UR2TK2kqtxw"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img src={Twitter} alt="" />
                    <p>Twitter</p>
                </a>
                <a
                    href="https://instagram.com/mark_alfred_?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img src={Instagram} alt="" />
                    <p>Instagram</p>
                </a>
                <a
                    href="https://www.linkedin.com/in/mark-alfred"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img src={LinkedIn} alt="" />
                    <p>LinkedIn</p>
                </a>
                <div className="Designed-By">
                    <p className="Designed-By">Designed by Mark Alfred</p>
                    <p className="Designed-By">Developed by Jacob Eisner</p>
                </div>
            </div>
            <p>
                <span className="C">C</span>
                <span className="M">M</span>
                <span className="Y">Y</span>
                <span className="K">K</span>
            </p>
        </div>
    );
}
