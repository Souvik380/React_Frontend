import React from 'react'
import ArrowRightAltSharpIcon from '@material-ui/icons/ArrowRightAltSharp';
import "./Header.css"

function Header() {
    return (
        <div className="header-container">
            <div className="total-shape">
                <h3>KEYWORDS</h3>
                <div className="shapes">
                    <div class="rectangle">
                        <h3>SUBMIT</h3>
                        <ArrowRightAltSharpIcon />
                    </div>

                    <div className="circle">
                        <p>A</p>
                    </div>
                </div>
            </div>

                    
        </div>
    )
}

export default Header
