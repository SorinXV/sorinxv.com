import '../css/navbar.css'

export default function Navbar() {
    return(
        <>
         <div id='container'>
            <a id='logo'>Logo</a>
            <div id='nav-links'>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </div>
            <div id='ham-menu'>
                menu
            </div>
         </div>
        </>
    )
}