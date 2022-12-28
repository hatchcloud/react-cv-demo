import React from 'react'
import logo from "../assets/adamkeyes.svg"
import logoGithub from "../assets/akar-icons_github-fill.svg"
import logoLinkedin from "../assets/LinkedIn.svg"
import logoOther from "../assets/other.svg"
import logoTwitter from "../assets/akar-icons_twitter-fill.svg"
import './nav.css'

const nav = () => {
    const banner = "banner";
    const navigation = "navigation";
    let d = "24px"

    return (
        <header role={banner} className="banner container flex">
            <img src={logo}/>
            <nav role={navigation} className="nav-icons flex">
                <img src={logoGithub} width={d} height={d}/>
                <img src={logoOther} width={d} height={d}/>
                <img src={logoLinkedin} width={d} height={d}/>
                <img src={logoTwitter} width={d} height={d}/>
            </nav>
        </header>
    )
}

export default nav
