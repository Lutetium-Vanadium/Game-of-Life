import React from "react";

import Board from "components/Board";
import DashBoard from "components/DashBoard";

import "styles/styles.css";

function App() {
    return (
        <div className="App">
            <div className="main-page">
                <DashBoard />
                <Board />
            </div>
        </div>
    );
}

export default App;
