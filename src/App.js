import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            Rent Car Fit
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-lg-auto">
              <li class="nav-item">
                <a href="#home" class="nav-link smoothScroll">
                  Home
                </a>
              </li>

              <li class="nav-item">
                <a href="#about" class="nav-link smoothScroll">
                  About Us
                </a>
              </li>

              <li class="nav-item">
                <a href="#offering" class="nav-link smoothScroll">
                  Offering
                </a>
              </li>

              <li class="nav-item">
                <a href="#schedule" class="nav-link smoothScroll">
                  Schedules
                </a>
              </li>

              <li class="nav-item">
                <a href="#contact" class="nav-link smoothScroll">
                  Contact
                </a>
              </li>
            </ul>

            <ul class="social-icon ml-lg-3">
              <li>
                <a href="https://fb.com/tooplate" class="fa fa-facebook"></a>
              </li>
              <li>
                <a href="#" class="fa fa-twitter"></a>
              </li>
              <li>
                <a href="#" class="fa fa-instagram"></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        class="hero d-flex flex-column justify-content-center align-items-center"
        id="home"
      >
        <div class="bg-overlay"></div>

        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto col-12">
              <div class="hero-text mt-5 text-center">
                <h6 data-aos="fade-up" data-aos-delay="300">
                  <b style={{ color: "red" }}>new way to rent a healthy car!</b>
                </h6>

                <h1 class="text-white" data-aos="fade-up" data-aos-delay="500">
                  Upgrade your experience your driving car
                </h1>

                <a
                  href="#feature"
                  class="btn custom-btn mt-3"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Get started
                </a>

                <a
                  href="#about"
                  class="btn custom-btn bordered mt-3"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="feature" id="feature">
        <div class="container">
          <div class="row">
            <div class="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
              <h2 class="mb-3 text-white" data-aos="fade-up">
                New to the  Rent Car Fit?
              </h2>

              <h6 class="mb-4 text-white" data-aos="fade-up">
                Your discount if rent car  here is up to $10  
              </h6>

              {/* <p data-aos="fade-up" data-aos-delay="200">
                Gymso is free HTML template by{" "}
                <a
                  rel="nofollow"
                  href="https://www.tooplate.com"
                  target="_parent"
                >
                  Tooplate
                </a>{" "}
                for your commercial website. Bootstrap v4.2.1 Layout. Feel free
                to use it.
              </p> */}

              <a
                href="#"
                class="btn custom-btn bg-color mt-3"
                data-aos="fade-up"
                data-aos-delay="300"
                data-toggle="modal"
                data-target="#membershipForm"
              >
                Become a special client today
              </a>
            </div>

            <div class="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
              <div class="about-working-hours">
                <div>
                  <h2
                    class="mb-4 text-white"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    Working hours
                  </h2>

                  <strong
                    class="d-block"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    Sunday
                  </strong>

                  <p data-aos="fade-up" data-aos-delay="800">
                    7:00 AM - 10:00 PM
                  </p>

                  <strong
                    class="mt-3 d-block"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    Monday - Friday
                  </strong>

                  <p data-aos="fade-up" data-aos-delay="800">
                    7:00 AM - 10:00 PM
                  </p>

                  <strong
                    class="mt-3 d-block"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    Saturday
                  </strong>

                  <p data-aos="fade-up" data-aos-delay="800">
                    6:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about section" id="about">
        <div class="container">
          <div class="row">
            <div class="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
              <h2 class="mb-4" data-aos="fade-up" data-aos-delay="300">
                Hello, we are Rent Car Fit
              </h2>

              <p data-aos="fade-up" data-aos-delay="400">
                Kami Menyediakan jasa rental mobil yang tidak biasa, dan pasar
                kami adalah orang orang tertentu yang ingin memiliki pengalaman
                mengendarai mobil mewah dengan harga yang menarik
              </p>
     
            </div>

            <div
              class="ml-lg-auto col-lg-3 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div class="team-thumb">
                <img
                  src="images/team/team-image.jpg"
                  class="img-fluid"
                  alt="Trainer"
                />

                <div class="team-info d-flex flex-column">
                  <h3>Mary Yan</h3>
                  <span>Yoga Instructor</span>

                  <ul class="social-icon mt-3">
                    <li>
                      <a href="#" class="fa fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" class="fa fa-instagram"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              class="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div class="team-thumb">
                <img
                  src="images/team/team-image01.jpg"
                  class="img-fluid"
                  alt="Trainer"
                />

                <div class="team-info d-flex flex-column">
                  <h3>Catherina</h3>
                  <span>Body trainer</span>

                  <ul class="social-icon mt-3">
                    <li>
                      <a href="#" class="fa fa-instagram"></a>
                    </li>
                    <li>
                      <a href="#" class="fa fa-facebook"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="offering section" id="offering">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-12 text-center mb-5">
              <h6 data-aos="fade-up">Get A Perfect Offer For Your Rent</h6>

              <h2 data-aos="fade-up" data-aos-delay="200">
                Our Offer Package
              </h2>
            </div>

            <div
              class="col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="class-thumb">
                <img
                  src="images/class/yoga-class.jpg"
                  class="img-fluid"
                  alt="Class"
                />

                <div class="class-info">
                  <h3 class="mb-1">Yoga</h3>

                  <span>
                    <strong>Trained by</strong> - Bella
                  </span>

                  <span class="class-price">$50</span>

                  <p class="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="class-thumb">
                <img
                  src="images/class/yoga-class.jpg"
                  class="img-fluid"
                  alt="Class"
                />

                <div class="class-info">
                  <h3 class="mb-1">Yoga</h3>

                  <span>
                    <strong>Trained by</strong> - Bella
                  </span>

                  <span class="class-price">$50</span>

                  <p class="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="class-thumb">
                <img
                  src="images/class/yoga-class.jpg"
                  class="img-fluid"
                  alt="Class"
                />

                <div class="class-info">
                  <h3 class="mb-1">Yoga</h3>

                  <span>
                    <strong>Trained by</strong> - Bella
                  </span>

                  <span class="class-price">$50</span>

                  <p class="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </div>
              </div>
            </div>

            <div
              class="mt-5 mt-lg-0 mt-md-0 col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div class="class-thumb">
                <img
                  src="images/class/crossfit-class.jpg"
                  class="img-fluid"
                  alt="Class"
                />

                <div class="class-info">
                  <h3 class="mb-1">Areobic</h3>

                  <span>
                    <strong>Trained by</strong> - Mary
                  </span>

                  <span class="class-price">$66</span>

                  <p class="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </div>
              </div>
            </div>

            <div
              class="mt-5 mt-lg-0 col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div class="class-thumb">
                <img
                  src="images/class/cardio-class.jpg"
                  class="img-fluid"
                  alt="Class"
                />

                <div class="class-info">
                  <h3 class="mb-1">Cardio</h3>

                  <span>
                    <strong>Trained by</strong> - Cathe
                  </span>

                  <span class="class-price">$75</span>

                  <p class="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="schedule section" id="schedule">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-12 text-center">
              <h6 data-aos="fade-up">our weekly PIC for car schedules</h6>

              <h2 class="text-white" data-aos="fade-up" data-aos-delay="200">
                PIC Timetable
              </h2>
            </div>

            <div class="col-lg-12 py-5 col-md-12 col-12">
              <table
                class="table table-bordered table-responsive schedule-table"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <thead class="thead-light">
                  <th>
                    <i class="fa fa-calendar"></i>
                  </th>
                  {/* <th>Mon</th> */}
                </thead>

                <tbody>
                  <tr>
                    <td>Mon</td>

                    <td>
                      <strong>Power Fitness</strong>
                      <span>7:00 am - 9:00 am</span>
                    </td>

                    <td>
                      <strong>Yoga Section</strong>
                      <span>7:00 am - 9:00 am</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Tue</td>

                    <td>
                      <strong>Power Fitness</strong>
                      <span>7:00 am - 9:00 am</span>
                    </td>

                    <td>
                      <strong>Yoga Section</strong>
                      <span>7:00 am - 9:00 am</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Wed</td>

                    <td>
                      <strong>Power Fitness</strong>
                      <span>7:00 am - 9:00 am</span>
                    </td>

                    <td>
                      <strong>Yoga Section</strong>
                      <span>7:00 am - 9:00 am</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Thu</td>

                    <td>
                      <strong>Power Fitness</strong>
                      <span>7:00 am - 9:00 am</span>
                    </td>

                    <td>
                      <strong>Yoga Section</strong>
                      <span>7:00 am - 9:00 am</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Fri</td>

                    <td>
                      <strong>Power Fitness</strong>
                      <span>7:00 am - 9:00 am</span>
                    </td>

                    <td>
                      <strong>Yoga Section</strong>
                      <span>7:00 am - 9:00 am</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Sat</td>

                    <td>
                      <strong>Power Fitness</strong>
                      <span>7:00 am - 9:00 am</span>
                    </td>

                    <td>
                      <strong>Yoga Section</strong>
                      <span>7:00 am - 9:00 am</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Sun</td>

                    <td>
                      <strong>Power Fitness</strong>
                      <span>7:00 am - 9:00 am</span>
                    </td>

                    <td>
                      <strong>Yoga Section</strong>
                      <span>7:00 am - 9:00 am</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section class="contact section" id="contact">
        <div class="container">
          <div class="row">
            <div class="ml-auto col-lg-5 col-md-6 col-12">
              <h2 class="mb-4 pb-2" data-aos="fade-up" data-aos-delay="200">
                Feel free to ask anything
              </h2>
            </div>

            <div class="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-6 col-12">
              <h2 class="mb-4" data-aos="fade-up" data-aos-delay="600">
                Where you can <span>find us</span>
              </h2>

              <p data-aos="fade-up" data-aos-delay="800">
                <i class="fa fa-map-marker mr-1"></i> 120-240 Rio de Janeiro -
                State of Rio de Janeiro, Brazil
              </p>

              {/* <div class="google-map" data-aos="fade-up" data-aos-delay="900">
                           <iframe src="https://maps.google.com/maps?q=Av.+Lúcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="1920" height="250" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                        </div> */}
            </div>
          </div>
        </div>
      </section>

      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="ml-auto col-lg-4 col-md-5">
              <p class="copyright-text">
                Copyright &copy; 2020 Gymso Fitness Co.
                <br />
                Design: <a href="https://www.tooplate.com">Tooplate</a>
              </p>
            </div>

            <div class="d-flex justify-content-center mx-auto col-lg-5 col-md-7 col-12">
              <p class="mr-4">
                <i class="fa fa-envelope-o mr-1"></i>
                <a href="#">hello@company.co</a>
              </p>

              <p>
                <i class="fa fa-phone mr-1"></i> 010-020-0840
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* End */}
    </div>
  );
}

export default App;
