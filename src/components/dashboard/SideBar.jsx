import React from "react";
import {Link} from 'react-router-dom';
import "../../styles/components/Sidebar.css";
// Import Sidebar Icons
import EventBoardIcon from '../../assets/sidebar-icons/event-dashboard-icon.png'
import EventInfoIcon from '../../assets/sidebar-icons/event-info-icon.png'
import InvitationFlyerIcon from '../../assets/sidebar-icons/flyer-icon.png'
import GuestlistIcon from '../../assets/sidebar-icons/guest-icon.png'
import VendorsIcon from '../../assets/sidebar-icons/vendor-icon.png'
import BudgetingIcon from '../../assets/sidebar-icons/budgeting-icon.png'
import GeneralSettingsIcon from '../../assets/sidebar-icons/general-settings-icon.png'

{/* var accepts property called isEventCreated */}
const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/dashboard/event-board">
                <img src={EventBoardIcon} alt="Event Board" />
            </Link>
            <Link to="/dashboard/invitation-flyers">
                <img src={InvitationFlyerIcon} alt="Invitation Flyer Icon" />
            </Link>
            <Link to="/dashboard/guestlist" className="guest-icon">
                <img src={GuestlistIcon} alt="Guestlist Icon" />
            </Link>
            <Link to="/dashboard/vendors">
                <img src={VendorsIcon} alt="Vendors Icon" />
            </Link>
            <Link to="/dashboard/budgeting">
                <img src={BudgetingIcon} alt="Budgeting Icon" />
            </Link>
            <Link to="/dashboard/general-settings" className="general-settings">
                <img src={GeneralSettingsIcon} alt="General Settings Icon" />
            </Link>
        </div> 
     );
};

export default Sidebar;

// {/* If EventCreated true, expression in () will be evaluated */}
// {isEventCreated && (
//     <></>
// )}


        // <div className="sidebar">
        //     <div className="event-board">Event Board</div>
        //     <div className="event-information">Event Information</div>
        //     <div className="digital-flyers">Digital Flyers</div>
        //     <div className="guests">Guests</div>
        //     <div className="vendors">Vendors</div>
        //     <div className="budgeting">Budgeting</div>
        //     <div className="general-settings">General Settings</div>
        // </div>