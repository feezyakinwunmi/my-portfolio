import React, { useEffect } from "react";
import services from "../srevice";
import workdet from "../workdet";
// import percentage from "../percentage";
// import { Line, Circle } from 'rc-progress';
import "boxicons";
import { Link } from "react-router-dom";
import Slideshow from "./slide/slide.jsx";
import SlideImages from "./slide/slide.jsx";
import { useState } from "react";
import experience from "./experience.js";
import Glowbox from "./glowbox.jsx";
import Offer from "./offer/offer.jsx";
import Comment from "./comments/comment.jsx";
import Contact from "./contact/contact.jsx";

const Home = () => {
  
  return (
    <>
      <div className="homebigcont">
        <div className="leftcont">
          <div className="profile">
            <div className="user">
              <box-icon color="white" type="logo" name="user"></box-icon>
            </div>
            <div className="userdt">
              <h1>Web_Developer</h1>
              <h2>AKINWUNMI OLUWAFEMI</h2>
              <p>feezyakinwunmi001@gmail.com</p>
            </div>
          </div>

          <div className="midcont">
            <div className="cskill">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className="progresscircle"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className="progresscirclepath path1"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <p>Team work</p>
            </div>
            <div className="cskill">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className="progresscircle"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className="progresscirclepath path2"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <p>communication</p>
            </div>
            <div className="cskill">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className="progresscircle"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className="progresscirclepath path3"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>{" "}
              <p>problem solving</p>
            </div>
            <div className="cskill">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle
                  className="progresscircle"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
                <circle
                  className="progresscirclepath path4"
                  cx="100"
                  cy="100"
                  r="80"
                ></circle>
              </svg>
              <p>creativity</p>
            </div>
          </div>

          <div className="skillcont">
            <div className="skill1">
              <div className="info">
                {" "}
                <box-icon color="brown" type="logo" name="html5"></box-icon>
                <span>
                  HTML5<p>94%</p>
                </span>
              </div>
              <div className="progresslinehtml">
                <span></span>
              </div>
            </div>

            <div className="skill1">
              <div className="info">
                {" "}
                <box-icon color="lightblue" type="logo" name="css3"></box-icon>
                <span>
                  CSS3<p>90%</p>
                </span>
              </div>
              <div className="progresslinecss">
                <span></span>
              </div>
            </div>

            <div className="skill1">
              <div className="info">
                {" "}
                <box-icon
                  color="yellow"
                  type="logo"
                  name="javascript"
                ></box-icon>
                <span>
                  JavaScript<p>80%</p>
                </span>
              </div>

              <div className="progresslinejs">
                <span></span>
              </div>
            </div>

            <div className="skill1">
              <div className="info">
                {" "}
                <box-icon color="green" type="logo" name="nodejs"></box-icon>
                <span>
                  Node.js<p>70%</p>
                </span>
              </div>
              <div className="progresslinenode">
                <span></span>
              </div>
            </div>

            <div className="skill1">
              <div className="info">
                {" "}
                <box-icon color="lightblue" type="logo" name="react"></box-icon>
                <span>
                  Reat.js<p>70%</p>
                </span>
              </div>

              <div className="progresslinereact">
                <span></span>
              </div>
            </div>

            <div className="skill1">
              <div className="info">
                {" "}
                <box-icon
                  color="lightblue"
                  type="logo"
                  name="typescript"
                ></box-icon>
                <span>
                  TypeScript <p>70%</p>
                </span>
              </div>

              <div className="progresslinets">
                <span></span>
              </div>
            </div>
            <div className="skill1">
              <div className="info">
                {" "}
                <box-icon
                  color="brown"
                  type="logo"
                  name="javascript"
                ></box-icon>
                <span>
                  Nest.Js <p>80%</p>
                </span>
              </div>

              <div className="progresslinenst">
                <span></span>
              </div>
            </div>

            <div className="skill1">
              <div className="info">
                {" "}
                <box-icon color="green" type="logo" name="mongodb"></box-icon>
                <span>
                  MongoDB <p>80%</p>
                </span>
              </div>

              <div className="progresslinemongo">
                <span></span>
              </div>
            </div>

            <div className="skill1">
              <div className="info">
                {" "}
                <box-icon color="white" type="logo" name="github"></box-icon>
                <span>
                  Git/github<p>80%</p>
                </span>
              </div>

              <div className="progresslinegit">
                <span></span>
              </div>
            </div>

            <div className="skill1">
              <div className="info">
                {" "}
                <box-icon color="white" type="logo" name="figma"></box-icon>
                <span>
                  Figma<p>80%</p>
                </span>
              </div>

              <div className="progresslinefigma">
                <span></span>
              </div>
            </div>

            <div className="skill1">
              <div className="info">
                {" "}
                <box-icon color="white" type="logo" name="wix"></box-icon>
                <span>
                  Wix<p>90%</p>
                </span>
              </div>

              <div className="progresslinewix">
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="rightcont">
          {/* <div  style={containerStyles} >
          <ImageSlider slides={slides} />
          </div> */}
          <Slideshow />

          <div className="workdetails">
            {workdet.map((value, index) => {
              return (
                <div className="workd" key={index}>
                  <h3>{value.title}</h3>
                  <p>{value.status}</p>
                </div>
              );
            })}
          </div>
          <div className="myservice">
            {services.map((value, index) => {
              return (
                <div className="myserv" key={index}>
                  <h3>{value.title}</h3>
                  <p>
                    <Link to="/"> {value.status}</Link>
                  </p>
                  <h4>
                    {" "}
                    <Link to="/">{value.more}</Link>
                  </h4>
                </div>
              );
            })}
          </div>

<div className="yearsbox">
  <h1>#04</h1>
  <p>Years;</p>
</div>
<div className="mid">

<div className="experiencebox">
{experience.map((value, index) => {
              return (
                <div className="expd" key={index}>
                  <h2>{value.years}</h2>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              );
            })}
</div>
 <div className="vid">
 <video src="https://cdn.pixabay.com/video/2020/08/05/46444-449560766_large.mp4" autoPlay loop muted ></video>

 </div>
</div>
<Offer/>
<Comment/>
<Contact/>
{/* <Glowbox /> */}

        </div>

      </div>
   
   
    </>
  );
};



export default Home;
