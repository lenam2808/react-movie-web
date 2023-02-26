import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="subFooter sectionPadding">
                <div className="subFooterLinks">
                    <div className="subFooterLinksDiv">
                        <h4>Giới thiệu</h4>
                        <a href="/info">
                            <p>Về chúng tôi</p>
                        </a>
                        <a href="/info">
                            <p>Quy chế hoạt động</p>
                        </a>
                        <a href="/info">
                            <p>Thỏa thuận sử dụng</p>
                        </a>
                    </div>
                    <div className="subFooterLinksDiv">
                        <h4>Góc điện ảnh</h4>
                        <a href="/info">
                            <p>Thể loại phim</p>
                        </a>
                        <a href="/info">
                            <p>Bình luận phim</p>
                        </a>
                        <a href="/info">
                            <p>Blog điện ảnh</p>
                        </a>
                    </div>
                    <div className="subFooterLinksDiv">
                        <h4>Hỗ trợ</h4>
                        <a href="/info">
                            <p>Góp ý</p>
                        </a>
                        <a href="/info">
                            <p>Sale & Services</p>
                        </a>
                        <a href="/info">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="subFooterLinksDiv">
                        <h4>Social Media</h4>
                        <div className="socialMedia">
                            <i class="fa fa-facebook-official" aria-hidden="true"></i>
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                            <i class="fa fa-youtube-play" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className="subFooterBelow">
                <div className="subFooterCopyright">
                    <p>
                        <i class="fa fa-copyright" aria-hidden="true"></i> {new Date().getFullYear()} ReactMovie. All right reserved.
                    </p>
                </div>
                <div className="subFooterBelowLinks">
                    <a href="/terms"><div><p>Terms and Conditions</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/sercurity"><div><p>Sercurity</p></div></a>
                    <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;