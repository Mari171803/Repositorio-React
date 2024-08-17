import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Home } from "../pages/Home"
import { Contato } from "../pages/Contato"
import { Projetos } from "../pages/Projetos"

export const AppRoutes = () => (
    <>
        <Router>

            <Navbar />

            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Contato />} path="/contact" />
                <Route element={<Projetos />} path="/projetos" />
            </Routes>

        </Router>
    </>
)