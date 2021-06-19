import React from 'react'
import { Navbar } from "../Components/Navbar";
import { Headings } from "../Components/Headings";
import { Slideshow } from "../Layout/Home/Slideshow";
import { Products } from "../Layout/Home/Products";
import { Foot1 } from "../Components/Foot1";
import { Foot2 } from "../Components/Foot2";
import { Foot3 } from "../Components/Foot3";

export const Home = () => {
    return (
        <div>
            <Navbar/>
            <Headings/>
            <Slideshow/>
            <Products/>
            <Foot1/>
            <Foot2/>
            <Foot3/>
        </div>
    )
}
