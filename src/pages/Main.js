import React from "react";
import NavBar from "../comps/NavBar/Navbar";
// import MainHome from "../comps"
import { ThemeProvider } from './MyContext';

import ExampleWithProviders from "../comps/YarTable";
import MySelect from "../comps/MySelect";

import MyMap1 from "../comps/MapBox/MyMap1";
import MyMap2 from "../comps/MapBox/MyMap2";

function Main_Page(){
    return (
        <ThemeProvider>
            <NavBar></NavBar>
            <div className="middle-items" style = {{'overflow-y': 'auto',justifyContent:'space-between', margin:'0px 200px 0px 200px'}}>
                <MySelect tag = "State"></MySelect>
                <MySelect tag = "AC"></MySelect>
            </div>
            <div style = {{marginTop:'20px', marginLeft:'20px', marginRight:'20px', display:'flex', justifyContent:'space-between', zIndex:5}}>
                <MyMap1/>
                <MyMap2/>
                {/* <MapBox></MapBox>
                <MapBox></MapBox> */}
            </div>
            {/* <MyTable></MyTable> */}
            <ExampleWithProviders></ExampleWithProviders>
        </ThemeProvider>
    )
}

export default Main_Page;