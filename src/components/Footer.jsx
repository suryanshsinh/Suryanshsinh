/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import {links} from './links'
import './footer.css'

export default function Footer({workPage, setWorkPage, setLoading}) {
    const footerLinks = links.map(linkItem => <Link to={linkItem.link} className="footer-link" key={linkItem.key} target={linkItem.external && "_blank"}>{linkItem.text}</Link>)

    return (
        <footer>
            <div className="left">
                <div className="footer-title">Main</div>
                <div className="footer-links">
                    <Link to="/" className="footer-link"><div onClick={() => {!workPage && setWorkPage(true); !workPage && setLoading(true)}}>Work</div></Link>
                    <Link to="/info" className="footer-link"><div onClick={() => {workPage && setWorkPage(false); workPage && setLoading(true);}}>Info</div></Link>
                </div>
            </div>
            <div className="right">
                <div className="footer-title">Links</div>
                <div className="footer-links">
                    {/* <div className="footer-link">LinkedIn</div>
                    <div className="footer-link">Resume</div> */}
                    {footerLinks}
                </div>
            </div>
        </footer>
    )
}