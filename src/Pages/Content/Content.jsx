import React from "react";
import '../../Styles/Index.scss'
import Footer from '../Footer/Footer.jsx'

export default function Content(){
    return(
        <>
        <div className="content_containeer">
            <h1>Full-stack web developer</h1>
            <p>some text</p>
        </div>
        <Footer hours='150' projects='10' skills='16' other='19'></Footer>
        </>
    )
}