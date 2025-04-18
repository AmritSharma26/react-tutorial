import React from "react";
import UserCard from "./components/UserCard";
import "./App.css";

import Amrit from "./assets/Amrit.jpeg";
import ujjwal from "./assets/ujjwal.jpeg";
import vikas from "./assets/vikas.jpeg";

function App() {
    return (
        <div className="main">
            <UserCard
                name="Amrit Sharma"
                image={Amrit}
                desc={"Awesome"}
                style={{ "background-color": "#510079" }}
            />
            <UserCard name="Ujjwal Tiwari" image={ujjwal} desc={"Amazing"} />
            <UserCard name="Vikas Kumar" image={vikas} desc={"wonderfull"} />
        </div>
    );
}

export default App;
