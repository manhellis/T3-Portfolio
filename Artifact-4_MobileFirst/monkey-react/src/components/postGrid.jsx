// import content from "../../public/cardContent.json";
import Card from "./card";
import OpenAI from "openai";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
});

async function getContent() {
    const response = await openai.chat.completions.create({
        messages: [
            {
                role: "assistant",
                content:
                    "Generate 10 funny monkey Jokes, each joke should be around 15 words. respond with a json object with title and description properties for each joke. the json object should be formatted like [{title: 'joke title', description: 'joke description'}].",
            },
        ],
        model: "gpt-4-0125-preview",
        response_format: { type: "json_object" },
    });

    const answer = response.choices[0].message.content;
    return answer;
}

const PostGrid = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        getContent().then((response) => setContent(JSON.parse(response)));
    }, []);

    if (!content) {
        return (
            <div className="postGrid">
                Loading..
                <FontAwesomeIcon icon="fa-solid fa-spinner" spin />
            </div>
        );
    }

    // const json_content = JSON.parse(content);

    return (
        <div>
            <div className="postGrid">
                {/* {content} */}
                {content.jokes.map((item) => (
                    <Card title={item.title} content={item.description} />
                ))}
            </div>
        </div>
    );
};

export default PostGrid;
