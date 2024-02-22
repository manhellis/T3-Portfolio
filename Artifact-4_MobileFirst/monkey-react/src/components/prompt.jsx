import OpenAI from "openai";
import { useEffect, useState } from "react";
// console.log(import.meta.env.VITE_OPENAI_KEY );
const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
});

async function getContent() {
    const response = await openai.chat.completions.create({
        messages: [
            { role: "assistant", content: "Generate 10 funny monkey Jokes. respond with a json object with title and description properties for each joke. the json object should be formatted like [{title: 'joke title', description: 'joke description'}]" },
            
            
        ],
        model: "gpt-4-0125-preview",
        response_format: { type: "json_object" },

    });

    const answer = response.choices[0].message.content;
    return answer;
}

const PromptCard = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        getContent().then((response) => setContent(response));

        
    }, []);

    return (
        <div className="media">
            <h2>What is your favorite color?</h2>
            <input type="text" />
            <p>{content}</p>
        </div>
    );
};

export default PromptCard;
