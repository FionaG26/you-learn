import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';  // Link to your custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  return (
    <>
      {/* Spinner Start */}
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <p className="m-0 fw-bold" style={{ fontSize: '25px' }}>
            <img src="img/icon.png" alt="" height="50px" /> Secret<span style={{ color: '#fb873f' }}>Coder</span>
          </p>
        </a>
        <button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" style={{ border: 'none' }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="index.html" className="nav-item nav-link active">Home</a>
            <a href="about.html" className="nav-item nav-link">About</a>
            <a href="courses.html" className="nav-item nav-link">Courses</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu fade-down m-0">
                <a href="team.html" className="dropdown-item">Our Team</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
            <a href="login.html" className="nav-item nav-link"><FontAwesomeIcon icon={faUser} /></a>
          </div>
        </div>
      </nav>
      {/* Navbar End */}

      {/* Header Start */}
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">Signup</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a className="text-white" href="index.html">Home</a></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Signup</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Signup Start */}
      <div className="container-xxl py-2 mt-4">
        <div className="container">
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.5s ">
            <center>
              <form className="shadow p-4" style={{ maxWidth: '550px' }}>
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                  <h1 className="mb-5 bg-white text-center px-3">Signup</h1>
                </div>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="username" placeholder="Username" />
                      <label htmlFor="username">Username</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Email Address" />
                      <label htmlFor="email">Email Address</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="password" className="form-control" id="password" placeholder="Password" />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn text-light w-100 py-3" type="submit">Signup</button>
                  </div>
                  <div className="col-12 text-center">
                    <p>Already have an account? <a className="text-decoration-none" href="login.html">Login</a></p>
                  </div>
                </div>
              </form>
            </center>
          </div>
        </div>
      </div>
      {/* Signup End */}

      {/* Footer Start */}
      <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3">Quick Link</h4>
              <p><a className="text-light" href="about.html">About Us</a></p>
              <p><a className="text-light" href="contact.html">Contact Us</a></p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, Bangalore, Karnataka</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 8683045908</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>secretcoder@gmail.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a className="border-bottom" href="index.html">Secret Coder</a>, All Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </>
  );
};

export default Register;

