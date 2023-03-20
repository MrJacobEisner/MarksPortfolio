import React from "react";
import "./App.scss";

import Headline from "./components/Headline/Headline";
import Latest from "./components/Latest/Latest";
import Hub from "./components/Hub/Hub";
import Story from "./components/Story/Story";
import Byline from "./components/Byline/Byline";
import Storyline from "./components/Storyline/Storyline";

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
                    <Byline image="Frame 13.png" link="poop.com"></Byline>
                    <Byline image="Frame 14.png" link="poop.com"></Byline>
                    <Byline image="Frame 15.png" link="poop.com"></Byline>
                </div>
                <hr />
            </div>
            <div className="StorylineStories">
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
                <Storyline
                    image="https://dailynexus.s3.us-west-1.amazonaws.com/dailynexus/wp-content/uploads/2023/03/19165937/sam_campus-planning-design_current-projects_munger-hall-hero-image.jpg"
                    header="Read the award-winning investigative news series into Munger Hall"
                    credit="Courtesy UC Santa Barbara "
                    paragraph1="To remedy its student housing shortage, UC Santa Barbara is seeking to construct a massive dormitory that, at the request of a 99-year-old billionaire donor, will feature thousands of windowless student bedrooms."
                    paragraph2="Investigative reporting into the unpopular project and the traditional housing plans it replaced was named best news series at the 2023 California College Media Association awards."
                    title="The Investigative Series"
                    author="Mark Alfred"
                >
                    <Story
                        image="Frame 27.png"
                        link="https://dailynexus.com/author/markalfred/"
                    />
                    <Story
                        image="Frame 27.png"
                        link="https://dailynexus.com/author/markalfred/"
                    />
                    <Story
                        image="Frame 27.png"
                        link="https://dailynexus.com/author/markalfred/"
                    />
                    <Story
                        image="Frame 27.png"
                        link="https://dailynexus.com/author/markalfred/"
                    />
                    <Story
                        image="Frame 27.png"
                        link="https://dailynexus.com/author/markalfred/"
                    />
                    <div className="Related-Coverage">
                        <p>
                            <b>Related Coverage </b>by Mark Alfred
                        </p>
                        <ul>
                            <li>
                                <a href="poop.com">
                                    Sustainable University Now to sue UCSB,
                                    seeking documents related to Munger Hall
                                </a>
                            </li>
                            <li>
                                <a href="poop.com">
                                    Munger Hall design change eliminates two
                                    floors; awaits final approvals{" "}
                                </a>
                            </li>
                            <li>
                                <a href="poop.com">
                                    Munger’s massive donation total continues to
                                    grow
                                </a>
                            </li>
                            <li>
                                <a href="poop.com">
                                    Munger Hall Unlikely To Meet 2025 Opening
                                    Goal
                                </a>
                            </li>
                        </ul>
                    </div>
                </Storyline>
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
        </div>
    );
};

export default App;
