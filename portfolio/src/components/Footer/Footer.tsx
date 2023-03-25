import React from "react";
import "./Footer.scss";

import Instagram from "./../../assets/Instagram.png";
import LinkedIn from "./../../assets/LinkedIn.png";
import Twitter from "./../../assets/Twitter.png";
import Share from "./../../assets/Share.png";

export default function Footer() {
    return (
        <div className="Footer">
            <hr />
            <div className="Socials">
                <a href="https://twitter.com/markaifred?s=21&t=27IEgTFPBb3UR2TK2kqtxw">
                    <img src={Twitter} alt="" />
                    <p>Twitter</p>
                </a>
                <a href="https://instagram.com/mark_alfred_?igshid=YmMyMTA2M2Y=">
                    <img src={LinkedIn} alt="" />
                    <p>Instagram</p>
                </a>
                <a href="https://www.linkedin.com/in/mark-alfred">
                    <img src={Instagram} alt="" />
                    <p>LinkedIn</p>
                </a>
                <a href="">
                    <img src={Share} alt="" />
                    <p>Share</p>
                </a>
                <p className="Designed-By">Designed by Mark Alfred</p>
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
