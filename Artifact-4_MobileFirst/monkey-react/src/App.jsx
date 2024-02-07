import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Branding from "./components/branding";
import PostGrid from "./components/postgrid";
import Footer from "./components/footer";
import PromptCard from "./components/prompt";
// import Card from "./components/card";
// import cardContent from "/cardContent.json";
function App() {
    // const [count, setCount] = useState(0);


    return (
      <>
        <Header />
        <Branding />
        {/* <div className="postGrid">
          <Card title="Card 1" content="This is the first card" />
        </div> */}
        <PromptCard />
        <PostGrid />
        <Footer />


        
      </>
      
    );
}

export default App;
