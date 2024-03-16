import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PersonPinRoundedIcon from "@mui/icons-material/PersonPinRounded";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReceiptIcon from "@mui/icons-material/Receipt";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReportIcon from "@mui/icons-material/Report";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
const SideBar = () => {
  return (
    <div>
      <div>
        <h1 className="bg-black text-white  p-5 w-64">SmartHirex</h1>
        <ul className="px-4 w-64">
          <div>
            <span className="text-xs"> DASHBOARD</span>
            <li className="p-1 hover:bg-[#87C7FF] rounded  space-x-2">
              <DashboardIcon />
              <Link to="/">Dashboard</Link>
            </li>
            <li className="p-1 hover:bg-[#87C7FF] rounded  space-x-2">
           
              <ApartmentIcon />
              <Link to="/company">Company</Link>
            </li>
            <li className="p-1 hover:bg-[#87C7FF] rounded  space-x-2">
           
              <GroupIcon />
              <Link to="/">Employees</Link>
            </li>
            <hr />
          </div>

          <div>
            <span className="text-xs"> HR</span>
            <li className="p-1 hover:bg-[#87C7FF] rounded  space-x-2">
           
              <WorkIcon />
              <Link to="/">Core HR</Link>
            </li>
            <li className="p-1 hover:bg-[#87C7FF] rounded  space-x-2">
           
              <AccessTimeFilledIcon />
              <Link to="/">Timesheets</Link>
            </li>
            <li className="p-1 hover:bg-[#87C7FF] rounded  space-x-2">
           
              <CoPresentIcon />
              <Link to="/">Payroll</Link>
            </li>
            <hr />
          </div>
          <div>
            <span className="text-xs"> RECRUITMENT</span>
            <li className="p-1 hover:bg-[#87C7FF] rounded  space-x-2">
           
              <LocationCityIcon />
              <Link to="/">Clients</Link>
            </li>
            <li className="p-1 hover:bg-[#87C7FF] rounded  space-x-2">
           
              <PersonPinRoundedIcon />
              <Link to="/">Jobs</Link>
            </li>
            <li className="p-1 hover:bg-[#87C7FF] rounded  space-x-2">
           
              <Diversity3Icon />
              <Link to="/">Candidates</Link>
            </li>
            <li className="p-1 hover:bg-[#87C7FF] rounded  space-x-2">
           
              <CalendarMonthIcon />
              <Link to="/">Interview Schedule</Link>
            </li>
            <hr />
          </div>

          <div>
            <span className="text-xs"> ACCOUNT</span>
            <li className="p-1 hover:bg-[#87C7FF] rounded  space-x-2">
              <ReceiptIcon />
              <Link to="/">Invoice</Link>
            </li>
            <li className="p-1 hover:bg-[#87C7FF] rounded  space-x-2">
              <NoteAltIcon />
              <Link to="/">Credit Notes</Link>
            </li>
            <li className="p-1 hover:bg-[#87C7FF] rounded  space-x-2">
              <AccountBalanceWalletIcon />
              <Link to="/">Expense</Link>
            </li>
            <hr />
          </div>

          <div>
            <span className="text-xs"> REPORT & FILE MANAGER</span>
            <li className="p-1 hover:bg-[#87C7FF] rounded  space-x-2">
           
              <ReportIcon />
              <Link to="/">Reports</Link>
            </li>
            <li className="p-1 hover:bg-[#87C7FF] rounded  space-x-2">
           
              <ManageAccountsIcon />
              <Link to="/">File Manager</Link>
            </li>
            <hr />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
