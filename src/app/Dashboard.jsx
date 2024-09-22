import React from "react";
import Header from "app/commonComponent/Header/index";
import TopResturents from "./page/homepage/TopResturents";

export const Dashboard = () => {
    async function cc(){
        navigator.clipboard.writeText(text).then(data => setCopied(true));
        console.log( navigator.onLine.valueOf());
    }
    return(
        <>
        <Header />
        <TopResturents/>
        </>
    )
}