import React from "react";
import "./App.scss";

import Headline from "./components/Headline/Headline";
import Latest from "./components/Latest/Latest";
import Hub from "./components/Hub/Hub";
import Story from "./components/Story/Story";
import Byline from "./components/Byline/Byline";

const App = () => {
    return (
        <div className="App">
            {/* <div className="Header">
                <Headline></Headline>
            </div> */}
            <div className="Hero">
                <Latest
                    image="yang.jpg"
                    header="UCSB out of compliance with state, federal laws for decades; works to return Native remains"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur rem doloribus asperiores amet magni quasi, unde nostrum eligendi porro!"
                    articleLink="http://poop.com/"
                ></Latest>
                {/* <Hub></Hub> */}
            </div>
            {/* <div className="Stories">
                <Story image="yang.jpg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum necessitatibus ea hic libero fugit minima temporibus
                    sint distinctio quasi impedit.
                </Story>
            </div>
            <div className="Bylines">
                <Byline
                    logo="logo.png"
                    header="This is a header"
                    image="yang.jpg"
                >
                    <ol>
                        <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Officia, adipisci?
                        </li>
                        <li>
                            Ea officia impedit perferendis corrupti sunt modi
                            doloribus eos aliquam.
                        </li>
                        <li>
                            Ad aliquid dolorem doloremque, vero possimus quod
                            doloribus quasi molestias?
                        </li>
                    </ol>
                </Byline>
            </div> */}
        </div>
    );
};

export default App;
