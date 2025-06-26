import React, { useEffect } from 'react';
import $ from 'jquery';

import '../assets/css/Navbar.css'

const NavbarComp = () =>{
    useEffect(() => {
        // jquery for toggle dropdown menus
        $(document).ready(function(){
            // toggle sub-menus
            $(".sub-btn").click(function(){
                $(this).next(".sub-menu").slideToggle();
            });
            // toggle more-menus
            $(".more-btn").click(function(){
                $(this).next(".more-menu").slideToggle();
            });
        });
        

        // javascript for the responsive navigation menu
        var menu = document.querySelector(".menu");
        var menuBtn = document.querySelector(".menu-btn");
        var closeBtn = document.querySelector(".close-btn");

        menuBtn.addEventListener("click", () =>{
            menu.classList.add("active");
        });

        closeBtn.addEventListener("click", () =>{
            menu.classList.remove("active");
        });
    }, []);
    
    return(
        <>
        <header>
            <a href="/"><img className='logo-nav' src="./assets/images/logo/IYGO.png" alt="" /></a>
            <div className='navigation'>
                <ul className='menu'>
                    <div className='close-btn'>

                    </div>
                    <li className='menu-item'><a href="/">Home</a></li>
                    <li className='menu-item'><a href="#about-section">About</a></li>
                    {/* <li className='menu-item'><a href="/#category-main-section">Category</a></li> */}
                    {/* <li className='menu-item'><a href="#">FAQ</a></li> */}
                    {/* <li className='menu-item'><a href="#main-category-section">Category</a></li> */}
                    <li className='menu-item'><a href="https://drive.google.com/file/d/1Z8Ll4w7Xqd6vYIGWw3kxafRBXKIpE68L/view?usp=sharing" target='_blank'>Guide Book</a></li>
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Media Coverage <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1NdOFy48a5igVT5h2umhzqrDZujjNRDW1/view?usp=sharing" target='_blank'>Press Release 2024</a></li>
                        </ul>
                    </li> */}
                    <li className='menu-item'>
                        <a className='sub-btn' href="/ListOfWinnerAllPage">List of Winner</a>
                        {/* <ul className='sub-menu'>
                            <li className='sub-item more'>
                                <a className='more-btn' href="#">IYGO 2024 <i className='fas fa-angle-right'></i></a>
                                <ul className='more-menu'>
                                    <li className='more-item'><a href="https://drive.google.com/file/d/1JElLfMWf7-GEFW03ziyYfynPr7lf-WC9/view?usp=sharing" target='_blank'>IYGO Online 2024</a></li>
                                    <li className='more-item'><a href="https://drive.google.com/file/d/1fFAxqs7Fha5D-kCnZaKGieVAf-AyADZv/view?usp=sharing" target='_blank'>IYGO Offline 2024</a></li>
                                </ul>
                            </li>
                        </ul> */}
                    </li>
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Curation <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1uGmebygjQMWTht5b4JgNTJ4VokQ9wOdr?usp=sharing" target='_blank'>Curation 2024</a></li>
                        </ul>
                    </li> */}
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Curation <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1XiQPYXktmf47cO6g1sZ9HfprPE6A-5Ok" target='_blank'>IYEO 2023</a></li>
                        </ul>
                    </li> */}
                    <li className='menu-item'>
                        <a className='sub-btn' href="#">Certificate Supervisor <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/104aB7iGt7q7pCSN18KTe1oBzAHU_XxC0?usp=sharing" target='_blank'>Certificate Supervisor 2025</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1D5dDtmf8Se8DQa6kEXSbja24B9ZaSjzs?usp=sharing" target='_blank'>Certificate Supervisor 2024</a></li>
                        </ul>
                    </li>
                    <li className='menu-item'>
                        <a className='sub-btn' href="#">Gallery <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1g_FTKMi1CdUKKFrvOyhysCSKpPtPHCOY?usp=sharing" target='_blank'>2025</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1JROGpOT_Ow7kHwwfcr7tOs8eR0RdgDW0?usp=sharing" target='_blank'>2024</a></li>
                        </ul>
                    </li>
                    {/* <li className='menu-item'><a href="#contact-section">Contact</a></li> */}
                    {/* <li className='menu-item'><a href="https://drive.google.com/drive/folders/1l_bCazIZmdtOSUjAuBAgXTg7YEBTixPY" target='_blank'>Certificate Supervisor</a></li> */}

                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Curation <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1XiQPYXktmf47cO6g1sZ9HfprPE6A-5Ok" target='_blank'>IYEO 2023</a></li>
                        </ul>
                    </li>
                    <li className='menu-item'>
                        <a className='sub-btn' href="#">List of Winner <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1fguKg3dnfY3YTBwxsyx-3xq3l4VIlNta/view" target='_blank'>IYEO 2023</a></li>
                        </ul>
                    </li> */}
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">With Sub-dropdown <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="#">Sub Item 01</a></li>
                            <li className='sub-item'><a href="#">Sub Item 02</a></li>
                            <li className='sub-item'><a href="#">Sub Item 03</a></li>
                            <li className='sub-item'><a href="#">Sub Item 04</a></li>
                            <li className='sub-item more'>
                                <a className='more-btn' href="#">More Items <i className='fas fa-angle-right'></i></a>
                                <ul className='more-menu'>
                                    <li className='more-item'><a href="#">More Item 01</a></li>
                                    <li className='more-item'><a href="#">More Item 02</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li> */}
                </ul>
            </div>
            <div className='menu-btn'>

            </div>
        </header>
        </>
    )
}

export default NavbarComp