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
            <div className="Header">
                <Headline></Headline>
            </div>
            <div className="Hero">
                <Latest
                    image="yang.jpg"
                    creditName="Mark Alfred / Daily Nexus"
                    header="UCSB out of compliance with state, federal laws for decades; works to return Native remains"
                    content="When the state of California constructs another orbital launch pad for its Space Force Base or a new railway along the coast, it often unearths artifacts and human remains left behind by California’s Indigenous peoples. Since the 1950s, such objects frequently "
                    articleLink="http://poop.com/"
                ></Latest>
                <Hub></Hub>
            </div>
            <div className="Stories">
                <Story
                    image="Untitled (25).png"
                    link="https://dailynexus.com/author/markalfred/"
                />
                <Story
                    image="Untitled (26).png"
                    link="https://dailynexus.com/author/markalfred/"
                />
                <Story
                    image="Untitled (27).png"
                    link="https://dailynexus.com/author/markalfred/"
                />
                <Story
                    image="Untitled (28).png"
                    link="https://dailynexus.com/author/markalfred/"
                />
                <Story
                    image="Untitled (29).png"
                    link="https://dailynexus.com/author/markalfred/"
                />
                <Story
                    image="Untitled (30).png"
                    link="https://dailynexus.com/author/markalfred/"
                />
            </div>
            <div className="Bylines">
                <div className="Title">
                    <hr />
                    <h2>Bylines In</h2>
                    <hr />
                </div>
                <div className="Cards">
                    <Byline image="Untitled (31).png" link="poop.com"></Byline>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default App;
