import OpenAI from "openai";

console.log(import.meta.env.VITE_OPENAI_KEY );
// const openai = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_KEY });

// async function main() {
//     const completion = await openai.chat.completions.create({
//         messages: [{ role: "system", content: "You are a helpful assistant." }],
//         model: "gpt-3.5-turbo",
//     });

//     return completion.choices[0];
// }
const PromptCard = () => {
    return (
        <div className="media">
            <h2>What is your favorite color?</h2>
            <input type="text" />
            {/* <p>{main()}</p> */}
        </div>
    );
};

export default PromptCard;
