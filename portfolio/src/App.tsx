import React from "react";
import "./App.scss";

import Headline from "./components/Headline/Headline";
import Latest from "./components/Latest/Latest";
import Hub from "./components/Hub/Hub";
import Story from "./components/Story/Story";
import Storyline from "./components/Storyline/Storyline";
import Footer from "./components/Footer/Footer";
import BylineSection from "./components/BylineSection/BylineSection";

const App = () => {
    return (
        <div className="App">
            <div className="Header">
                <Headline></Headline>
            </div>
            <div className="Hero">
                <Latest
                    image="NativeRemains.jpg"
                    creditName="Joshua Yepez Martinez / Daily Nexus"
                    header="UCSB out of compliance with state, federal laws for decades; works to return Native remains"
                    content="When the state of California constructs another orbital launch pad for its Space Force Base or a new railway along the coast, it often unearths artifacts and human remains left behind by California’s Indigenous peoples. Since the 1950s, such objects frequently "
                    articleLink="https://dailynexus.com/2023-03-02/ucsb-out-of-compliance-with-state-federal-laws-for-decades-works-to-return-native-remains/"
                ></Latest>
                <Hub></Hub>
            </div>
            <div className="Stories">
                <Story
                    image="AbortionMarch.jpg"
                    link="https://dailynexus.com/2022-05-04/hundreds-march-for-abortion-rights-in-downtown-santa-barbara-following-supreme-court-leak/"
                />
                <Story
                    image="CharlieKirk.jpg"
                    link="https://dailynexus.com/2023-03-01/students-protest-tpusa-founder-charlie-kirks-campus-visit/"
                />
                <Story
                    image="MissileBan.jpg"
                    link="https://dailynexus.com/2022-04-19/vice-president-kamala-harris-visits-vandenberg-space-force-base-announces-u-s-anti-satellite-missile-test-ban/"
                />
                <Story
                    image="MungerMockup.jpg"
                    link="https://dailynexus.com/2022-04-27/nexus-uncovers-ucsbs-munger-hall-mockup/"
                />
                <Story
                    image="MungerReport.jpg"
                    link="https://dailynexus.com/2022-12-21/in-202-page-report-academic-senate-panel-excoriates-munger-hall-design-recommends-major-changes/"
                />
                <Story
                    image="NoDebtAct.jpg"
                    link="https://dailynexus.com/2022-06-02/congressman-carbajal-unveils-updated-degrees-not-debt-act-addresses-school-shooting-in-uvalde-texas/"
                />
            </div>
            <div className="Bylines">
                <BylineSection></BylineSection>
            </div>
            <div className="StorylineStories">
                <Story
                    image="PrivateMillions.jpg"
                    link="https://dailynexus.com/2023-01-26/private-millions-ucsbs-lifeline-against-a-stagnating-state-budget/"
                />
                <Story
                    image="ResearcherCharged.jpg"
                    link="https://dailynexus.com/2022-09-29/on-leave-researcher-alleged-to-have-possessed-child-porn-worked-with-students-for-months-following-felony-charges/"
                />
                <Story
                    image="SnuClosed.jpg"
                    link="https://dailynexus.com/2022-09-29/ucsb-sigma-nu-fraternity-closed-following-financial-delinquency-alcohol-violations-dishonesty-with-university-and-national-organization/"
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
                        image="Munger1.jpg"
                        link="https://dailynexus.com/2022-11-03/nexus-explained-munger-hall/"
                    />
                    <Story
                        image="Munger2.jpg"
                        link="https://dailynexus.com/2022-04-27/nexus-uncovers-ucsbs-munger-hall-mockup/"
                    />
                    <Story
                        image="Munger3.jpg"
                        link="https://dailynexus.com/2022-11-23/university-scrapped-decades-old-housing-plans-for-munger-hall-documents-reveal/"
                    />
                    <Story
                        image="Munger4.jpg"
                        link="https://dailynexus.com/2022-07-27/secret-ucsb-tours-munger-hall-mock/"
                    />
                    <Story
                        image="Munger5.jpg"
                        link="https://dailynexus.com/2022-11-23/university-scrapped-decades-old-housing-plans-for-munger-hall-documents-reveal/"
                    />
                    <div className="Related-Coverage">
                        <p>
                            <b>Related Coverage </b>by Mark Alfred
                        </p>
                        <ul>
                            <li>
                                <a
                                    href="https://dailynexus.com/2022-11-04/sustainable-university-now-to-sue-ucsb-seeking-documents-related-to-munger-hall/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Sustainable University Now to sue UCSB,
                                    seeking documents related to Munger Hall
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://dailynexus.com/2022-10-06/munger-hall-design-change-eliminates-two-floors-awaits-final-approvals/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Munger Hall design change eliminates two
                                    floors; awaits final approvals
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://dailynexus.com/2023-02-17/mungers-massive-donation-total-continues-to-grow/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Munger’s massive donation total continues to
                                    grow
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://dailynexus.com/2022-07-07/munger-hall-unlikely-meet-2025-goal/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Munger Hall Unlikely To Meet 2025 Opening
                                    Goal
                                </a>
                            </li>
                        </ul>
                    </div>
                </Storyline>
                <Story
                    image="StrikeVote.jpg"
                    link="https://dailynexus.com/2021-11-10/uc-lecturers-union-to-hold-strike-authorization-vote-over-alleged-unfair-labor-practices-committed-by-the-university-of-california/"
                />
                <Story
                    image="StudentArrested.jpg"
                    link="https://dailynexus.com/2022-08-25/student-arrested-cameras-bathroom-charges-investigation/"
                />
                <Story
                    image="StudentHotels.jpg"
                    link="https://dailynexus.com/2021-12-03/uncertainty-and-stress-is-the-norm-for-hundreds-of-students-living-in-hotels/"
                />
                <Story
                    image="TAStrike.jpg"
                    link="https://dailynexus.com/2021-11-21/strike-averted-as-uc-lecturers-reach-historic-deal-securing-job-security-and-better-pay/"
                />
                <Story
                    image="UnionsRallying.jpg"
                    link="https://dailynexus.com/2022-04-30/three-university-of-california-unions-rally-for-new-contracts/"
                />
                <Story
                    image="UnionsStriking.jpg"
                    link="https://dailynexus.com/2022-11-05/three-uc-unions-ready-to-begin-strike-on-nov-14/"
                />
            </div>
            <Footer />
        </div>
    );
};

export default App;
