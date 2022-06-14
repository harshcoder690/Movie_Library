import React, { useEffect,useState  } from 'react'
import { NavLink,Link, Outlet  } from 'react-router-dom';
import $ from 'jquery';
import "./Navbar.css";
import { HomePage } from "../Homepage/HomePage";
import img from "../../assets/logo.png";

export const Navbar2 = (props) => {

  const [val, setVal] = useState(1);

  const valhandler = () => {
    setVal(2);
  };

  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {

    animation();
    $(window).on('resize', function () {
      setTimeout(function () { animation(); }, 500);
    });

  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-mainbg">

        <div className="navbar-brand navbar-logo" to="/" exact>
          <img src={img} />
          <h1>
            Movielib
          </h1>
        </div>


        <button
          className="navbar-toggler"
          onClick={function () {
            setTimeout(function () { animation(); });
          }}
          type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars text-white"></i>
        </button>

        <div
          className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>

            <li className="nav-item active">
              <NavLink className="nav-link" to="/Home" exact>
                <i
                  className="fas fa-tachometer-alt">
                </i>Home
              </NavLink>
            </li>

            <li className="nav-item"  onClick={valhandler}>
              <NavLink className="nav-link" to="/PrivateList" exact>
                <i
                  className="far fa-address-book">
                </i>My Favourites
              </NavLink>
            </li>

            <li className="nav-item"  onClick={valhandler}>
              <NavLink className="nav-link" to="/PublicList" exact>
                <i
                  className="far fa-clone">
                </i>Public Favorites
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {val == 1 ? <HomePage /> : <Outlet />}
    </div>
  )
}