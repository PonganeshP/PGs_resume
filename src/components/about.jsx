import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I am an engineering graduate from MSEC with ECE as my
                        major. I love exploring new technologies and often
                        amazed by the various features of technologies that I
                        have been learned. But I'm sure I have explored only 1%,
                        but never stopped. Will never halt till the apocalypse
                        :p
                      </p>
                      <p>
                        If you wanna make life beautiful follow these,
                        <br />
                        Eat &#8677; Design &#8677; Sleep &#8677; REPEAT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do in free time?</span>
                <h2 className="colorlib-heading">
                  Here are some of my favorites
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div class="content">
                    <div class="infos">
                      <h3 class="name">Fav tools &#8595;</h3>
                      <p class="title">
                        <ul>
                          <li>Visual Studio code</li>
                          <li>Adobe Photoshop</li>
                          <li>Adobe Illustrator</li>
                          <li>Adobe XD</li>
                        </ul>
                      </p>
                    </div>
                    <div class="body">
                      <p></p>
                    </div>
                  </div>
                  <div className="desc">
                    <h3>Design UI/UX </h3>
                    <p>
                      I used to surf in the pool of native apps development
                      videoes. Onething for sure, flutter gonna be lambent.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div class="content">
                    <div class="infos">
                      <h3 class="name">Fav Movies &#8595;</h3>
                      <p class="title">
                        <ul>
                          <li>Nolan's Batman Trilogy</li>
                          <li>Pursuit of Happiness</li>
                          <li>Charlie (Malayalam)</li>
                          <li>Alaipayudhey (Kollywood)</li>
                        </ul>
                      </p>
                    </div>
                    <div class="body">
                      <p></p>
                    </div>
                  </div>
                  <div className="desc">
                    <h3>Movies</h3>
                    <p>
                      I don't understand people, but movies! It'll teach you
                      more. But I won't watch horror movies :P
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div class="content">
                    <div class="infos">
                      <h3 class="name">My Play &#8595;</h3>
                      <p class="title">
                        <ul>
                          <li>Tennis</li>
                          <li>Basketball</li>
                          <li>Table tennis</li>
                          <li>Cricket</li>
                        </ul>
                      </p>
                    </div>
                    <div class="body">
                      <p></p>
                    </div>
                  </div>
                  <div className="desc">
                    <h3>Sports</h3>
                    <p>
                      Have some good health, only then your vision will be wise.
                      Be Strong Be Tough!
                    </p>
                  </div>
                </div>
              </div>
              {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
