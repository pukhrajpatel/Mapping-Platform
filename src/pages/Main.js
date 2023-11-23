import React, { useState } from "react";
import NavBar from "../comps/NavBar/Navbar";
// import MainHome from "../comps"
import { ThemeProvider } from './MyContext';

import ExampleWithProviders from "../comps/YarTable";
import MySelect from "../comps/MySelect/MySelect";

import MyMap1 from "../comps/MapBox/MyMap1";
import MyMap2 from "../comps/MapBox/MyMap2";

import { COLORS } from "../Assets/Style/Colors";


function Main_Page(){
    const [st, setSt] = useState('');
    const [ac, setAc] = useState('');
    const [year, setYear] = useState('');
    const [elType, setElType] = useState('');
    function onchange1(e){
        setSt(e.target.innerHTML)
    }
    function onchange2(e){
        setAc(e.target.innerHTML);
    }
    function onchange3(e){
        setYear(e.target.innerHTML);
    }
    function onchange4(e){
        setElType(e.target.innerHTML);
    }
    return (
        <div style={{
            display: 'block', scrollBehavior: 'smooth',
            'scroll-padding-top': '5rem',
            overflowY: 'overlay', overflowX: 'hidden', position: 'fixed'
        }}>
            <ThemeProvider>
                <NavBar></NavBar>
                <div className="middle-items" style={{
                    overflowX: 'hidden', justifyContent: 'left', backgroundColor: COLORS.bgColorBody,
                    paddingLeft: '20px', width: '100vw'
                }}>
                    <MySelect preValue={st} tag="State" onchange={onchange1}></MySelect>
                    <MySelect preValue={ac} tag="AC" onchange={onchange2}></MySelect>
                    <MySelect preValue={year} tag="Year" onchange={onchange3}></MySelect>
                    <MySelect preValue={elType} tag="ElType" onchange={onchange4}></MySelect>
                </div>
                <div style={{
                    overflowX: 'hidden', display: 'flex', justifyContent: 'space-between', zIndex: 5, backgroundColor: COLORS.bgColorBody,
                    width: '100vw'
                }}>
                    <MyMap1 />
                    <MyMap2 />
                    {/* <MapBox></MapBox>
                <MapBox></MapBox> */}
                </div>
                {/* <MyTable></MyTable> */}
                <div style={{ overflowX: 'hidden', backgroundColor: COLORS.bgColorBody, position: 'absolute' }}>
                    <ExampleWithProviders AC={ac} state={st} Year={year} ElType={elType}></ExampleWithProviders>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default Main_Page