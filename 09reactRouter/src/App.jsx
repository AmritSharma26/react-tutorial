import { useState } from "react";
import "./App.css";
import { Header, Home, Footer, About } from "./components";

function App() {
    const [page, setpage] = useState("Home");
    return (
        <>
            <Header setpage={setpage} />
            {page == "Home" && <Home />}
            {page == "About" && <About />}
            <Footer />
        </>
    );
}

export default App;
