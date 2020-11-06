import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/me.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Ponganesh P</a>
              </h1>
              <span className="email">
                <i className="icon-mail"></i> abcdpons@gmail.com
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About me
                    </a>
                  </li>
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      My Journey
                    </a>
                  </li>
                  <li>
                    <a href="#experience" data-nav-section="experience">
                      Experience
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/coolpg143/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-facebook2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Therrii_babe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.behance.net/ponganeshp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-behance" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ponganesh-p-9661621ba/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://steamcommunity.com/profiles/76561199068149584/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-gamepad" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>Flying in a positive vibes :)</small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
