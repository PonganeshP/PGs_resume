import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Journey</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Engineer at Infosys <span>2019-present</span>
                        </h2>
                        <p>
                          I joined Infosys as a trainee by 2019. Now I'm working
                          as a Software Engineer in Infosys, Mcity - Chennai.
                          During training period I got trained in JAVA for 6
                          months. But I wish I could have trained in UI. So I
                          made my oppurtunity to get into UI project. Now I'm a
                          junior UI/UX designer/developer. I started to explore
                          on JS now typing these thing in reactJS, LOL. Also I'm
                          exploring UX, because UX needs to be treated in
                          different perspection. UI is easy but UX is someting
                          crazy.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Undergraduation at MSEC <span>2015-2019</span>
                        </h2>
                        <p>
                          I am pursued my under-graduation studies with major in
                          ECE.(Electronics and Communication Engineering). I
                          have taken courses like DSA, OOPs, Computer Networks,
                          IOT over the years and have better understanding of
                          these subjects.I have also been part of MSEC's
                          Photographic club since my first year of college.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Primary and Higher Education <span>2003-2015</span>
                        </h2>
                        <p>
                          I have completed my higher secondary education with
                          major subjects as Physics,Chemistry,Maths & Biology
                          with 90% merit. During my time at school, I have
                          developed interest in graphic design and started to
                          seed the PS skills from my schooling itself. But never
                          imagined I'll land in Engineering college. LOL!
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
