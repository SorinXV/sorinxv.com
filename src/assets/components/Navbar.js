import '../css/navbar.css'

export default function Navbar() {
    return(
        <>
         <div id='container'>
            <a id='logo'>Logo</a>
            <div id='nav-links'>
                <a href="/">home</a>
                <a href="/projects">projects</a>
                <a href="/contact">contact</a>
            </div>
            <div id='ham-menu'>
               <div className='line'></div>
               <div className='line'></div>
               <div className='line'></div>
            </div>
         </div>
        </>
    )
}