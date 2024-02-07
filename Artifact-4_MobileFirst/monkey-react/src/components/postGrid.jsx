import content from "../../public/cardContent.json";
import Card from "./card";
const PostGrid = () => {
    const apiKey = import.meta.env.VITE_OPENAI_KEY
    console.log(apiKey)
    return (
        <div>
            <div className="postGrid">
                {content.map((item) => (
                    <Card title={item.title} content={item.description} />
                ))}
            </div>
       
        </div>
    );
}

export default PostGrid;