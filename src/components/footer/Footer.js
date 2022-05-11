import React from "react";
import './Footer.css';

import facebook from '../../assets/Facebook.svg';
import instagram from '../../assets/Instagram.svg';
import twitter from '../../assets/Twitter.svg';
import linkedin from '../../assets/Linkedin.svg';
import moon from '../../assets/moon.svg'

export default function Footer() {
    return (<div className="footer">
        <div className="foot">
            <div className="leff">
                <nav className="navbar">
                    <ul>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Status</li>
                    </ul>
                    <ul>
                        <li>Security</li>
                        <li>Contact Us</li>
                        <li>Help Center</li>
                    </ul>
                    <ul>
                        <li>Terms of use</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                    <ul>
                        <li>AML/KYC Policy</li>
                        <li>Licences</li>
                        <li>Media</li>
                    </ul>
                </nav>
                <div className="tt">
                    <div className="bs">
                        <img src={moon} alt="moon" width={20} height={20} />
                        <button>Buy Crypto</button>
                        <button>Sell Crypto</button>
                    </div>
                    <div className="socials">
                        <img src={twitter} alt="twitter" width={30} height={30} />
                        <img src={linkedin} alt="linkedin" width={30} height={30} />
                        <img src={facebook} alt="facebook" width={30} height={30} />
                        <img src={instagram} alt="instagram" width={30} height={30} />
                    </div>
                </div>
            </div>
            <div className="sub">
                <h3>Subscribe to our newsletter</h3>
                <form>
                    <div className="formcontrol">
                        <label>Email*</label>
                        <input type="text" />
                    </div>
                    <div className="formcontrol2">
                        <label>Newsletter Type*</label>
                        <select>
                            <option>Please Select</option>
                            <option value="personal">Personal</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <div className="subs">
                        <div>
                            <button>Subscribe</button>
                            <input type="checkbox" name="confirm"/>
                            <label for="confirm">Check this box to receive communications from MoonPay. You can unsubscribe at any time. We look after your data - see our privacy policy.*</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="cp">
            <p>Copyright 2022 Moon Limited. All rights reserved.</p>
            <p>Moon USB LBC is a registered money service business (NMLS ID: 5421702).</p>
            <p>For Law Enforcement requests please direct your official document to our compliance team.</p>
        </div>
    </div>);
}