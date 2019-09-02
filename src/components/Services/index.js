import React, { Component } from 'react';

export default class Services extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-services" data-section="services">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-business-card" />
                  </span>
                  <div className="desc">
                    <h3>Entrepreneurship</h3>
                    <p>
                      I'm the co-founder and CEO of <a href="https://iduk.me" target="_blank" rel="noopener noreferrer">iDuk</a>:
                      a showcase of dreams.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-database" />
                  </span>
                  <div className="desc">
                    <h3>Software Development</h3>
                    <p>
                      I've learned Java, Delphi, SQL, HTML, CSS, and JavaScript. I decided to focus on JS and to learn React,
                      React Native, NodeJS and MongoDB.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-microphone2" />
                  </span>
                  <div className="desc">
                    <h3>Public Speaking</h3>
                    <p>
                      I've already spoken in front of more than 400 people in my city, in front of 180+ students
                      at Oxford, and pitched my startup at New York University. Also, I was invited to represent 5200 students
                      in a debate about ethics and corruption in my school.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-support" />
                  </span>
                  <div className="desc">
                    <h3>Mentoring</h3>
                    <p>I help other young people have international experiences just like I had at Oxford and NY!</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-pencil" />
                  </span>
                  <div className="desc">
                    <h3>English teaching</h3>
                    <p>
                      I've been studying English for 7 years and, in 2018, I founded a project in partnership with Yázigi Criciúma
                      where we offered free English classes to our community.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-music2" />
                  </span>
                  <div className="desc">
                    <h3>Guitar</h3>
                    <p>
                      I'm a human (seriously? haha), so I also have free time and normally what I like to do is to play my
                      guitar. I've learned more than 80 songs from Brazilian Popular Music and presented twice in front of
                      50+ people.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}