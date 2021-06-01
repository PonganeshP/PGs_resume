import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">Experience</span>
                      <h2 className="colorlib-heading">I'm a newbie man</h2>
                      <p>I have a total IT experince around 1.7yrs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="projects">
          <div className="col-md-4 ice">
            <div class="card">
              <div class="card-image"></div>
              <div class="card-text">
                <span class="date">7 months</span>
                <h2>Migrating to new Pages(BOFA)</h2>
                <p>
                  <strong>Role:</strong> Developer <br />
                  <strong>Technology:</strong> Javascript, SASS, bootstrap, html
                  <br />
                  Sparta is the seperate web framework made of javascript. In
                  this project our scope is converting the existing static web
                  pages to dynamic web pages.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 sparta">
            <div class="card">
              <div class="card-image2"></div>
              <div class="card-text">
                <span class="date">3 months</span>
                <h2>Tool development</h2>
                <p>
                  <strong>Role:</strong> Buffer <br />
                  <strong>Technology:</strong> reactJS, Javascript, CSS, html{" "}
                  <br />
                  Worked as a buffer in frontend part. Scope of this project is
                  mainly on device responsiveness and creating reusable UI
                  components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
