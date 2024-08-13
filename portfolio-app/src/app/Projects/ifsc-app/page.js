"use client";
import styles from "../project.module.css";
import post from "../../styles/post.module.css";
import Link from "next/link";
import TabContainer from "@/app/components/TabContainer"; // Ensure this import path is correct
import {
    faCirclePlay,
    faFillDrip,
    faServer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullScreenCode from "@/app/components/FullScreenCode";
const Page = () => {
    const r1 = `@app.get("/fullResults")
async def read_full_results(id: int = Query(default=65, alias="id"), cid: int = Query(default=1, alias="cid")):
    file_path = os.path.join(base_directory, "outputFullResults", f"fullResults_{id}_{cid}.json")
    if os.path.exists(file_path):
        return FileResponse(path=file_path, media_type='application/json')
    else:
        raise HTTPException(status_code=404, detail="Event or Result not found")

@app.get("/athlete")
async def read_athlete(id: int = Query(default=1612, alias="id")):
    file_path = os.path.join(base_directory, "athlete", f"athlete_{id}.json")
    if os.path.exists(file_path):
        return FileResponse(path=file_path, media_type='application/json')
    else:
        raise HTTPException(status_code=404, detail="Athlete not found")

@app.get("/searchAthlete")
async def search_athlete(query: str = Query(None, min_length=3)):
    if not index:
        raise HTTPException(status_code=501, detail="Index not found")
    else:
        query_parts = query.lower().split()
        results = [
            athlete for athlete in index
            if all(
                part in (
                    athlete['firstname'].lower() + " " + 
                    athlete['lastname'].lower() + " " + 
                    (athlete['country'].lower() if athlete['country'] else "") + " " + 
                    (athlete.get('country_name', '').lower() if athlete.get('country_name') else "") + " " + 
                    (athlete['birthday'] if athlete['birthday'] else "")
                )
                for part in query_parts
            )
        ]
        return {"results": results}`;
    const tabContent1JSX = (
        <>
            <h1 className={post.h1}>Concept:</h1>
            <p className={post.p}>
                I've always been obsessed with sport climbing and, by extension,
                the related results and statistics. I wanted to create a simple
                web app that would allow me to search for climbing competitions
                and view the results in a clean, easy-to-read format.
            </p>
            <p className={post.p}>
                The International Federation of Sport Climbing (IFSC) is the
                official international organization that runs climbing
                competitions worldwide. Currently they host their results on a
                site <a href="ifsc.results.info">ifsc.results.info</a>.
            </p>
            <h1 className={post.h1}>Development Process:</h1>
            <p className={post.p}>
                I started by approaching the concept from what steps I need to
                accomplish in order to display any event. I needed to scrape the
                data from the current results page, host it on my server, and
                create a web app that would display the data in a user-friendly
                way.
            </p>
            <p className={post.p}>
                I used Python to scrape the data from the IFSC site and store it
                in a set of JSON files. I then created a FastAPI server to serve
                JSON documents given the request. Finally, I created a React web
                app that would fetch the data from my server and display it in a
                user-friendly manner of my choosing.
            </p>
            <FullScreenCode code={r1} />
        </>
    );
    const r2 = `return data.ranking.reduce((acc, athlete) => {
athlete.rounds.forEach((round) => {
if (!acc[round.category_round_id]) {
    acc[round.category_round_id] = {
        round_name: round.round_name,
        routes: {},
    };
}

// Adapt old format rounds to fit new processing logic
if (round.hasOwnProperty("speed_elimination_stages")) {
    // Assuming old format doesn't have detailed ascents, simulate a basic structure
    const values = extractValues(round.score);
    if (round.round_name === "Qualification") {
        round.ascents = [
            {
                route_id: "old_format_" + round.category_round_id,
                route_name: round.round_name,
                score: round.score, // this should be extracted from values
                // need to create multiple ascents for qualis
                // rank: values.rank,
            },
            
        ];
    } else { // semis and finals old format
        round.ascents = [
            {
                route_id: "old_format_" + round.category_round_id,
                route_name: round.round_name,
                score: round.score,
                // Default or inferred values for other ascent properties as necessary
            },`;
    const tabContent2JSX = (
        <>
            <h2 className={post.h1}>Data Scraping</h2>
            <p className={post.p}>
                I found an endpoint in the official site that exposed their JSON
                serving system. The data was structured in two distinct
                groupings: a listing of events and a results JSON file. The
                listing of events were accessed after a year was requested. From
                here, I recursively navigated the structure of event data,
                season data, and results data. This allowed me to display any
                ranking information, from any event and year in the IFSC
                database.
            </p>
            <h2 className={post.h1}>Discoveries</h2>
            <p className={post.p}>
                The IFSC was founded in 2007, so pre-2007 there is less detail
                stored about events, such as the counting of attempts or times
                for certain disciplines. Furthermore, formats have changed over
                the years, for example the transition from bonuses to zones,
                resulting in a change in scoring. Also, the change of rank
                valuation from top - attemp to top / zone - attempt to zone to
                top - zone / attempt to top - attempt to zone happened around
                2018, which changed the final ranking value was calculated.
            </p>
            <h1 className={post.h1}>Technical Challenges</h1>
            <p className={post.p}>
                Scraping the data took considerable time, but generally, I
                didn't make backward progress often. The total size of the data
                was around 400MB. Creating an api with FastAPI was a really easy
                experience, and I was able to create a fast server quickly.
                NextJS was maybe not a good choice, but eventually I can migrate
                the api requests to use server side rendering, which would be a
                good optimization, and could enable caching of pages beforehand.
                One of the reasons to use Python was to enable easier data
                manipulation down the line, for faster integration into data
                analytic libraries in Python.
            </p>
            <FullScreenCode code={r2} />
        </>
    );
    const tabContent3JSX = (
        <>
            <h2 className={post.h1}>Hosting</h2>
            <p className={post.p}>
                I spun up a Digital Ocean Droplet, and built NextJS into a
                docker container. I also containerized the FastAPI server, and
                used docker-compose to run both. Although they don't talk to
                each other internally through docker, by using docker compose,
                this allows me to easily scale the app in the future. Seting up
                Docker Compose was challenging, and it might not have been the
                most efficient method. The primary issues was that my containers
                were often 1GB in file size, so testing and uploading took time.
            </p>
            <div className={post.linkContainer}>
                <Link
                    className={post.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://ifsc.manhellis.com"
                >
                    Visit Site{" "}
                </Link>
            </div>
        </>
    );

    const spacers = [3];

    return (
        <div className={post.post}>
            <div className={styles.title}>
                <h1 className={styles.h1}>IFSC Results Browser</h1>
                <h2>Project Overview</h2>
            </div>

            <TabContainer
                contentTabs={[
                    {
                        title: "Intro",
                        icon: <FontAwesomeIcon size="xl" icon={faCirclePlay} />,
                        content: tabContent1JSX,
                    },
                    {
                        title: "Scraping",
                        icon: <FontAwesomeIcon size="xl" icon={faFillDrip} />,
                        content: tabContent2JSX,
                    },
                    {
                        title: "Hosting",
                        icon: <FontAwesomeIcon size="xl" icon={faServer} />,
                        content: tabContent3JSX,
                    },
                ]}
            />
        </div>
    );
};

export default Page;
