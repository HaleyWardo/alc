import { Link } from "gatsby"
import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div 
                style={{
                    alignItems: `center`,
                    backgroundColor: `#163f6f`,
                    display: `flex`,
                    flexDirection: `column`,
                    padding: `35px`
            }}>
                <nav 
                    style={{
                        marginBottom: `40px`,
                        width: `60%`,
                    }}>
                    <ul 
                    style={{
                        display: `flex`,
                        fontSize: `16px`,
                        justifyContent: `space-around`,
                        margin: `0`,
                        textTransform: `uppercase`
                    }}>
                    <Link
                        style={{
                        color: `white`,
                        textDecoration: `none`,
                        }}
                        to="/home"
                    >Home</Link>

                    <Link
                        style={{
                        color: `white`,
                        textDecoration: `none`,
                        }}
                        to="/about"
                    >About</Link>

                    <Link
                        style={{
                        color: `white`,
                        textDecoration: `none`,
                        }}
                        to="/services"
                    >Services</Link>

                    <Link
                        style={{
                        color: `white`,
                        textDecoration: `none`,
                        }}
                        to="/projects"
                    >Projects</Link>

                    <Link
                        style={{
                        color: `white`,
                        textDecoration: `none`,
                        }}
                        to="/news"
                    >News</Link>

                    <Link
                        style={{
                        color: `white`,
                        textDecoration: `none`,
                        }}
                        to="/contact"
                    >Contact Us</Link>

                    <Link
                        style={{
                        color: `white`,
                        textDecoration: `none`,
                        }}
                        to="/careers"
                    >Careers</Link>
                    </ul>
                </nav>

                <span 
                    style={{
                        fontSize: `15px`
                    }}
                >
                    &copy;Copyright. All rights reserved.
                </span>
            </div>
        );
    }
}

export default Footer;