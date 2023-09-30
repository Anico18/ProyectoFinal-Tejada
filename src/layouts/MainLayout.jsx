import React from "react";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import MainRouter from "../routes/MainRouter";

const MainLayout = ({children}) => {
    return(
        <div>
            <main>
                {children}
            </main>
        </div>

    )
}

export default MainLayout;