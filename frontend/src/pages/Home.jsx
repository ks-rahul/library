import { Fragment } from "react";
import { Carousel } from "react-responsive-carousel";

function HomePage() {
  return (
    <Fragment>
      <div
        id="tg-homeslider"
        className="tg-homeslider tg-haslayout sliderSection"
      >
        <Carousel
          showArrows={false}
          autoPlay={true}
          showIndicators={false}
          infiniteLoop={true}
          emulateTouch={true}
          showStatus={false}
          stopOnHover={true}
          swipeable={true}
        >
          <div
            className="item"
            style={{
              backgroundImage: "url('/images/slider/book-library.jpg')",
              backgroundPosition: "0% 50%",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="tg-slidercontent pull-right">
                    <h1>Jude Morphew</h1>
                    <h2>Latest 2017 Release</h2>
                    <div className="tg-description">
                      <p>
                        Consectetur adipisicing elit sed do eiusmod tempor
                        incididunt ut labore tolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamcoiars nisi
                        ut aliquip commodo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: "url('/images/slider/book-library-2.jpg')",
              backgroundPosition: "0% 50%",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 ">
                  <div className="tg-slidercontent">
                    <h1>Jude Morphew</h1>
                    <h2>Latest 2017 Release</h2>
                    <div className="tg-description">
                      <p>
                        Consectetur adipisicing elit sed do eiusmod tempor
                        incididunt ut labore tolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamcoiars nisi
                        ut aliquip commodo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: "url('/images/slider/book-library-3.jpg')",
              backgroundPosition: "0% 50%",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-10  col-lg-8 ">
                  <div className="tg-slidercontent">
                    <h1>Jane Morphew</h1>
                    <h2>Latest 2019 Release</h2>
                    <div className="tg-description">
                      <p>
                        Consectetur adipisicing elit sed do eiusmod tempor
                        incididunt ut labore tolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamcoiars nisi
                        ut aliquip commodo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <strong>lkjlkjl</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </div>

      <section className="tg-haslayout">
        <div className="container">
          <div className="row">
            <div className="tg-allstatus">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div
                  className="tg-parallax tg-bgbookwehave"
                  data-z-index="2"
                  data-appear-top-offset="600"
                  data-parallax="scroll"
                  data-image-src="/images/book-library-with-open-textbook-home-page.jpg"
                >
                  <div className="tg-status">
                    <div className="tg-statuscontent">
                      <span className="tg-statusicon">
                        <i className="icon-book"></i>
                      </span>
                      <h2>
                        Books we have<span>dasda</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div
                  className="tg-parallax tg-bgtotalmembers"
                  data-z-index="2"
                  data-appear-bottom-offset="600"
                  data-parallax="scroll"
                  data-image-src="/images/book-library-with-open-textbook-home-page.jpg"
                >
                  <div className="tg-status">
                    <div className="tg-statuscontent">
                      <span className="tg-statusicon">
                        <i className="icon-user"></i>
                      </span>
                      <h2>
                        Total users<span>kjhk</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div
                  className="tg-parallax tg-bghappyusers"
                  data-z-index="2"
                  data-appear-top-offset="600"
                  data-parallax="scroll"
                  data-image-src="/images/book-library-with-open-textbook-home-page.jpg"
                >
                  <div className="tg-status">
                    <div className="tg-statuscontent">
                      <span className="tg-statusicon">
                        <i className="icon-heart"></i>
                      </span>
                      <h2>
                        Total Borrowers<span>dsads</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="tg-sectionspace tg-haslayout"
        id="our-goal-and-mission"
      >
        <div className="container">
          <div className="row">
            <div className="tg-newrelease">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="tg-sectionhead">
                  <h2>Our Goal & Mission</h2>
                </div>
                <div className="tg-description">
                  <p>
                    As avid readers ourselves, it disappointed us to see our
                    favorite books rise dramatically in price, leaving us
                    dissatisfied and wonderfully written novels not gaining the
                    audience they deserve. We noticed that many families had
                    books collecting dust on their shelves and had the idea of
                    recycling these books, creating a platform catered to
                    building the awareness of these books; saving money and the
                    planet.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="tg-postbook">
                  <figure className="tg-featureimg missinVission">
                    <img
                      src="/images/our-goal-and-mission.png"
                      alt="our-goal-and-mission"
                      className="d-block"
                      width="558"
                      height="576"
                      style={{ width: "300px", margin: "auto" }}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tg-haslayout bg-light log-sign">
        <div className="container bg-light">
          <div className="row bg-light">
            <div className="tg-allstatus bg-light py-5 mt-0 d-flex justify-content-center">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div className="tg-parallax tg-bgbookwehave">
                  <div className="tg-status">
                    <a href="/">
                      <div className="tg-statuscontent">
                        <span className="tg-statusicon">
                          <i className="fa fa-lock"></i>
                        </span>
                        <p className="text-center text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Laudantium, voluptatibus?
                        </p>
                        <h2>Sign Up</h2>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div className="tg-parallax tg-bgtotalmembers">
                  <div className="tg-status">
                    <a href="/">
                      <div className="tg-statuscontent">
                        <span className="tg-statusicon">
                          <i className="fa fa-sign-in"></i>
                        </span>
                        <p className="text-center text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Laudantium, voluptatibus?
                        </p>
                        <h2>Sign In</h2>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tg-sectionspace tg-haslayout" id="how-we-work">
        <div className="container">
          <div className="row">
            <div className="tg-newrelease">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 order-1">
                <div className="tg-postbook">
                  <figure className="tg-featureimg missinVission">
                    <img src="/images/our-mission.jpg" alt="how we work" />
                  </figure>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 order-2">
                <div className="tg-sectionhead">
                  <h2>How We Work</h2>
                </div>
                <div className="tg-description">
                  <p>
                    The days of purchasing a book at high prices just to browse
                    through it once are gone! Lending Library is a safe,
                    convenient and reliable system that enables you to
                    effortlessly exchange books within your community. With the
                    help of our website you’ll be able to share, borrow and
                    request books throughout your own neighborhood, and have
                    access to your favorite books at your doorstep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tg-sectionspace tg-haslayout" id="our-journey">
        <div className="container">
          <div className="row">
            <div className="tg-newrelease">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="tg-sectionhead">
                  <h2>Our journey</h2>
                </div>
                <div className="tg-description">
                  <p>
                    After brainstorming and coming up with the idea, we launched
                    a simplified prototype to pilot within two communities -
                    Adarsh Palm Retreat and Prestige Ozone. Thanks to the
                    welcoming nature of these societies, we were able to coin
                    what was working and what wasn’t. With the new learnings and
                    newly received funding, we dived into our product
                    development with the award winning team Iffort, and had an
                    amazing, smooth experience with the team.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="tg-postbook">
                  <figure className="tg-featureimg missinVission">
                    <img
                      src="/images/our-jurney.jpg"
                      alt="our-goal-and-mission"
                      className="d-block"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default HomePage;
