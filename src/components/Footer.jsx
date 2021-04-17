import React from "react";

const cuurentYear=new Date().getFullYear();

function Footer(){
    return(
        <footer>
            <p>Copyright © {cuurentYear}</p>
        </footer>
        
    )
}

export default Footer;