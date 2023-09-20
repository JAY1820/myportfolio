import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat, FaCss3 } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiReact,
  SiBootstrap,
  SiCss3,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://www.linkpicture.com/q/city-go-logo_1.jpg"
                    alt="City Go"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>CITY GO</h2>
                <p>
                  Powered by PHP, this web application revolutionizes the way service providers
                  and customers connect by offering a seamless platform. With a user-centric design,
                  it prioritizes convenience for customers, making urban living effortless and hassle-free.
                </p>
                <div>
                  <SiPhp />
                  <SiMysql />
                  <SiHtml5 />
                  <FaCss3 />
                </div>
                <div>
                  <a
                    //live link
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/JAY1820/City-Go"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>



          {/* Project 2 */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://www.linkpicture.com/q/Apni-sawari_1.jpg" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>CAR YATRA</h2>
                <p>
                  Car Yatra is a user-friendly car rental website with advanced features,
                  including easy registration, search and filtering seamless booking, and reliable customer support.
                  Enjoy a hassle-free experience, from finding the perfect car to secure transactions.
                </p>
                <div>
                  <SiReact />
                  <SiMongodb />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/JAY1820/CarYatra"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://www.linkpicture.com/q/weather-2_2.jpg"
                    alt="Apna-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Apna Weather App</h2>
                <p>
                  Apna Weather App is a user-friendly solo project that delivers accurate and up-to-date weather
                  information to its users. With the ability to search for cities or select locations directly from the integrated Google Map,
                  users can easily access weather data for their desired locations.
                </p>
                <div>
                  <SiJavascript />
                  <DiCss3 />
                  <SiHtml5 />
                </div>
                <div>
                  <a
                    //live link
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/JAY1820/Apna_weather"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* project 4 */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://www.linkpicture.com/q/ceramic-logo1_1.jpg" alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Mama Ceramics</h2>
                <p>
                  Mama Ceramics: Your Premier PHP-Powered Ecommerce Platform for Tiles and Ceramics. Discover an extensive collection, seamless shopping experience,
                  and secure transactions to elevate your space with style and sophistication.
                </p>
                <div>
                  <SiPhp />
                  <SiMysql />
                  <SiCss3 />
                  <SiHtml5 />
                  <SiBootstrap />
                </div>
                <div>
                  <a
                    href="https://github.com/JAY1820/Icon_and_gif/blob/main/ceramic%20logo1.jpg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/JAY1820/MAMA-CERAMICS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://www.linkpicture.com/q/book-1.jpg"
                    alt="book-app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Online Free Book</h2>
                <p>
                  The OpenTextbook Library is a web application designed to provide students with free and open study materials. The platform offers a wide range of textbooks and educational resources that can be accessed online. It aims to support affordable and accessible education for all students.
                </p>
                <div>
                  <SiJavascript />
                  <DiCss3 />
                  <SiHtml5 />
                </div>
                <div>
                  <a
                    //live link
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/JAY1820/OpentextbookLibrary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* project 6 */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://www.linkpicture.com/q/FlowFinder-logo_1.png" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Flow Finder</h2>
                <p>
                  Flow Finder is  a React.js project for efficient workflow management, reminiscent of Trello. Create boards, customize cards, and effortlessly move them across stages. Simplify task management, enhance productivity, and streamline collaboration.
                </p>
                <div>
                  <SiJavascript />
                  <DiCss3 />
                  <SiHtml5 />
                  <SiReact />
                </div>
                <div>
                  <a href=" " target="_blank" rel="norefeyrrer">
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a href="https://github.com/JAY1820/FlowFinderre" target="_blank" rel="noreferrer">
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* project 7 */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://www.linkpicture.com/q/jorney-logo-1.png" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>
                TravelTales - UPCOMING PROJECT MERN 
                </h2>
                <p>
                TravelTales: Embark on unforgettable journeys and create memories to last a lifetime
                </p>
                <div>
                  <SiJavascript />
                  <DiCss3 />
                  <SiHtml5 />
                  <SiReact />
                  <SiExpress />
                </div>
                <div>
                  <a href=" " target="_blank" rel="norefeyrrer">
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a href="" target="_blank" rel="noreferrer">
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        {/* project 8 */}
        <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://www.linkpicture.com/q/ctypto-ss-1-1.png" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>
                CoinPlus - UPCOMING PROJECT REACT Native
                </h2>
                <p>
                Crypto live tracker - CoinPulse is a React native project for a cyptocurrency live tracker. 
                </p>
                <div>
                  <SiJavascript />
                  <DiCss3 />
                  <SiHtml5 />
                  <SiReact />
                  <SiExpress />

                </div>
                <div>
                  <a href=" " target="_blank" rel="norefeyrrer">
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a href="" target="_blank" rel="noreferrer">
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* //project 9 upcoming project */}
          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="#"
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2></h2>
                <p>
                 
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>

    </>
  );
};
