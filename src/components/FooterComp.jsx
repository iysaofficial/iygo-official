import '../assets/css/Footer.css'

const FooterComp = () => {
    return(
        <>
        <footer>
        <div className="content">
            <div className="top">
                <div className="logo-details">
                    <i><img src="./assets/images/logo/IYGO.png" alt="IYBO"/></i>
                </div>
                <div className="media-icons">
                    <a href="https://www.facebook.com/profile.php?id=100063979907207" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/iyg.olympiad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@IYSAOfficial" target="_blank"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.tiktok.com/@iysa.official" target="_blank"><i className="fab fa-tiktok"></i></a>
                    <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target="_blank"><i className="fab fa-linkedin"></i></a>
                </div>  
            </div>   
            <div className="link-boxes">
                    <ul className="box">
                        <li className="link_name">IYGO</li>
                        <li><p>An event for the achievement of talented young academics from various countries around the world in solving global problems</p></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Information Link</li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="https://iysa.or.id" target="_blank">IYSA Main Website</a></li>
                        <li><a href="https://iysaolympiad.or.id" target="_blank">IYSA Olympiad Main Website</a></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Office</li>
                        <li><a href="https://goo.gl/maps/9x18coXGCmSscKec6" target="_blank">Jl. Kemang, Pasir Putih, Kecamatan. Sawangan, Kota Depok, Jawa Barat 16519</a></li>
                        <li><a href='mailto:ny.olympiad1@gmail.com' target='_blank' className="">ny.olympiad1@gmail.com</a></li>
                        <li><a href='https://wa.me/+6281770914129' target='_blank'>+62817-7091-4129</a></li>
                    </ul>
                    <ul className="box input-box">
                        <form action="https://formspree.io/f/xoqgjrok" method="POST">
                            <li className="link_name">Newsletter</li>
                            <input type="email" name="email" placeholder="Enter Your Email"/>
                            <li><input type="submit" value={"Subscribe"}/></li>
                        </form>
                    </ul>
                </div>
        </div>
        <div className="bottom-details">
            <div className="bottom_text">
                <span className="copyright_text">Copyright &#169; 2024 <a href="#">IYGO Official.</a>All rights reserved</span>
                <span className="policy_terms">
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms & Condition</a>
                </span>
            </div>
        </div>
        </footer>
        </>
    )
}

export default FooterComp