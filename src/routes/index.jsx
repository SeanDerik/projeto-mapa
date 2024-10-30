import { Main } from "../Main";

import { Routes, Route } from "react-router-dom";
import '../styles/index.css';

export function Approutes() {
    return (
        <>
            <Routes>
                <Route path="/main" element={<Main />} />
            </Routes>
        </>
    );
}
