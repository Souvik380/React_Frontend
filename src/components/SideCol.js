import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import StarIcon from '@material-ui/icons/Star';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./SideCol.css"

function SideCol() {
    return (
        <div className="SideCol">
            <div className="term-monitor-symbol">
                {/* <img src="data:image/jpeg;base64,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" alt="image" /> */}
                <div className="block-img"></div>
                <p>
                    <span className="term">Term</span>
                    <span className="monitor">Monitor</span>
                </p>
            </div>

          
                <div className="Add-Keywords">
                    <div class="sub-keywords">
                        <HomeIcon className="home" />
                        <p>Add keywords</p>
                    </div>
                </div>

                <div className="Matches">
                    <div className="sub-matches">
                        <GroupIcon className="same-color" />
                        <p>Matches</p>
                    </div>
                </div>

                <div className="Manage-sources">
                    <CreditCardIcon className="same-color"/>
                    <p>Manage sources</p>
                </div>

                <div className="Integration">
                    <CreditCardIcon className="same-color"/>
                    <p>Integration</p>
                </div>

                <div className="Alerts">
                    <CreditCardIcon className="same-color"/>
                    <p>Alerts</p>
                </div>

                <div className="settings">
                    <StarIcon className="same-color" />
                    <p>Settings</p>
                    <ArrowDropDownIcon className="same-color" />
                </div>
            
            <div className="Billings">
                <p>Billings</p>
            </div>
        </div>
    )
}

export default SideCol
