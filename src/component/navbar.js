import { Link } from "react-router-dom";
import {
  AiOutlinePieChart,
  AiFillSchedule,
  AiOutlineTags,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";

const Leftcontainer = () => {
  return (
    <div className="homepageleftcontainer">
      <div className="homepagelogoname">Board.</div>
      <div className="homepagelinkcontainer">
        <Link to="/" className="navbarlink">
          <AiOutlinePieChart />
          <div className="navbarlinklable">Dashboard</div>
        </Link>
        <Link to="*" className="navbarlink">
          <AiOutlineTags />
          <div className="navbarlinklable">Transactions</div>
        </Link>
        <Link to="*" className="navbarlink">
          <AiFillSchedule />
          <div className="navbarlinklable">Schedules</div>
        </Link>
        <Link to="*" className="navbarlink">
          <BiUserCircle />
          <div className="navbarlinklable">Users</div>
        </Link>
        <Link to="*" className="navbarlink">
          <LuSettings />
          <div className="navbarlinklable">Settings</div>
        </Link>
      </div>
      <div className="homepageleftcontactuscontainer">
        <Link className="navbarlink" to="*">
          Help
        </Link>
        <Link className="navbarlink" to="*">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Leftcontainer;
