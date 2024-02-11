import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <main className="banner">
                <div className="banner-info">
                    <h1>WELKOM BIJ <br />onze recepten pagina</h1>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;