
import "./App.css";
import Header from "./components/header";
import Branding from "./components/branding";
import PostGrid from "./components/postGrid";
import Footer from "./components/footer";
// import PromptCard from "./components/prompt";
// import Card from "./components/card";
// import cardContent from "/cardContent.json";
function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <main>
                <Branding />
                <PostGrid />
            </main>

            <Footer />
        </>
    );
}

export default App;
