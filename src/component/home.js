import { BiSearch, BiMenu, BiBell } from "react-icons/bi";
import {
  AiOutlineDoubleLeft,
  AiOutlineTags,
  AiOutlineLike,
  AiOutlineRight,
} from "react-icons/ai";
import { PiUsers } from "react-icons/pi";
import { CiMoneyBill } from "react-icons/ci";

import Leftcontainer from "./navbar";
import { useState } from "react";

// import { Link } from "react-router-dom";

import Piechart from "./piechart";
import Linechart from "./graph";

export default function Home() {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [55, 31, 14],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const [sidebarstate, setsidebarstate] = useState(false);

  return (
    <div className="homepageparentcontainer">
      <div className="bigscreen">
        <Leftcontainer />
      </div>
      <div
        className={
          sidebarstate
            ? "smallscreen smallscreenshow"
            : "smallscreen smallscreenhide"
        }
      >
        <Leftcontainer />
        <button
          type="button"
          onClick={() => {
            setsidebarstate(false);
          }}
          className="navbarhamburgericon2"
        >
          <AiOutlineDoubleLeft />
        </button>
      </div>
      <div className="homepagerighcontainer">
        <button
          type="button"
          onClick={() => {
            setsidebarstate(true);
          }}
          className="homepagerightboxhamburgericon"
        >
          <BiMenu />
        </button>
        <div className="homepageheadtag">
          <div className="homepagerightboxiconbox bigscreenheading">
            Dashboard
          </div>
          <div className="homepagerightboxrightcontent">
            <div className="homepagerightboxiconbox smallscreenheading">
              Dashboard
            </div>
            <div className="bigscreensearchtag">
              <div className="homepagesearchbarinputcontainer">
                <input
                  className="homepagerightboxsearchtag"
                  placeholder="Search..."
                />
                <button className="homepagerightboxsearchbutton" type="button">
                  <BiSearch />
                </button>
              </div>
            </div>
            <div className="bellicon">
              <BiBell />
            </div>
            <div className="homepageuserimagecontainer">
              <img
                className="homepageuserimage"
                src="https://media.nngroup.com/media/people/photos/2022-portrait-page-3.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg"
                alt="userimage"
              />
            </div>
          </div>
        </div>
        <div className="smallscreeninputcontainer">
          <div className="homepagesearchbarinputcontainer">
            <input
              className="homepagerightboxsearchtag"
              placeholder="Search..."
            />
            <button className="homepagerightboxsearchbutton" type="button">
              <BiSearch />
            </button>
          </div>
        </div>
        <div className="homepagefourcardcontainer">
          <div className="homepagefourcard aliceblue">
            <div className="homepagefourcontainericontag">
              <CiMoneyBill />
            </div>

            <p className="homepagefourcardparatag">Total Revenues</p>
            <h2>$2,129,430</h2>
          </div>
          <div className="homepagefourcard antiquewhite">
            <div className="homepagefourcontainericontag">
              <AiOutlineTags />
            </div>

            <p className="homepagefourcardparatag">Total Transactions</p>
            <h2>1,520</h2>
          </div>
          <div className="homepagefourcard gray">
            <div className="homepagefourcontainericontag">
              <AiOutlineLike />
            </div>

            <p className="homepagefourcardparatag">Total Likes</p>
            <h2>9,721</h2>
          </div>
          <div className="homepagefourcard aqua">
            <div className="homepagefourcontainericontag">
              <PiUsers />
            </div>

            <p className="homepagefourcardparatag">Total Users</p>
            <h2>892</h2>
          </div>
        </div>
        <div className="homepagegrapharea">
          <h2 className="scheduleareatitle">Activities</h2>
          <Linechart />
        </div>
        <div className="homepagepichartrow">
          <div className="piechartcontainer schedulearea">
            <div className="piechartheadingarea">
              <h2 className="scheduleareatitle piecharttitle">Top products</h2>
              <div className="graytext">May - June 2021</div>
            </div>
            <div className="piechartrow" width={100} hight={100}>
              <Piechart data={data} />
              <div className="legentarea">
                <div className="piechartlegendrow">
                  <div
                    className="legentcolorcircle"
                    style={{ backgroundColor: "#0088FE" }}
                  ></div>
                  <h3>Basic Tees</h3>
                </div>
                <div className="graytext">55%</div>
                <div className="piechartlegendrow">
                  <div
                    className="legentcolorcircle"
                    style={{ backgroundColor: "#00C49F" }}
                  ></div>
                  <h3>Custom Sort Pants</h3>
                </div>
                <div className="graytext">31%</div>
                <div className="piechartlegendrow">
                  <div
                    className="legentcolorcircle"
                    style={{ backgroundColor: "#FFBB28" }}
                  ></div>
                  <h3>Super Hoodies</h3>
                </div>
                <div className="graytext">14%</div>
              </div>
            </div>
          </div>
          <div className="piechartcontainer schedulearea">
            <div className="sheduleareatitleandseeallrow">
              <h2 className="scheduleareatitle">Today's schedule</h2>
              <div className="graytext scheduleareaseeall">
                see all <AiOutlineRight />
              </div>
            </div>
            <div className="homepageschedulebox homepagescheduleboxyellow">
              <div>Meeting with suppliers from Kuta Bali</div>
              <div className="graytext">14.00 - 15.00</div>
              <div className="graytext">at Sunset Road, Kuta, Bali.</div>
            </div>
            <div className="homepageschedulebox homepagescheduleboxblue">
              <div>Check operation at Giga Factory 1</div>
              <div className="graytext">18.00 - 20.00</div>
              <div className="graytext">at Central Jakarta</div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
