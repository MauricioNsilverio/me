import React, { Component } from 'react'

export default class Home extends Component {
  componentDidMount() {
    ['images/MIT.jpg', 'images/YA.JPG', 'images/StHughs.jpg'].forEach((picture) => {
      const img = new Image();
      img.src = picture;
      console.log(img.src);

    });
  }

  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: 'url(images/MIT.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Welcome! <br />I'm Maurício</h1>
                          {/* <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/15coSa2rnZcdywihM-pWTvoGqE65JAkxQAh6JDBNrF2Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(images/YA.JPG)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Tech +<br />Business =  +Education </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://iduk.me" target="_blank" rel="noopener noreferrer">MEET iDuk <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(images/StHughs.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Study<br /> abroad? </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://instagram.com/mauricionsilverio" target="_blank" rel="noopener noreferrer">View Instagram <i className="icon-instagram" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
