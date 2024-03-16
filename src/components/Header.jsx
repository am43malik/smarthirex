import React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import HelpIcon from "@mui/icons-material/Help";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div >
  <div className="flex items-center justify-between m-4">
  <ul className="flex">
    <li><Link><MenuOpenIcon /></Link></li>
  </ul>
  <ul className="flex">
    <li className="p-1 items-center"><Link><HelpIcon /></Link></li>
    <li className="p-1 items-center"><Link><CircleNotificationsIcon /></Link></li>
    <li className="p-1 items-center"><Link><Avatar  
    // style={{height:26 ,width:26}}
     alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></Link></li>
  </ul>
</div>
          <div className="felx justify-end">

          </div>
    </div>
  );
};

export default Header;
