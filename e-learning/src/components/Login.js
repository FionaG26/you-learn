import React, { useState } from 'react'; // Ensure this line exists only once
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.css/style.css';

const Login = () => {
  return (
    <>
      {/* Spinner Start */}
      <div id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <p className="m-0 fw-bold" style={{ fontSize: '25px' }}>
            <img src="img/icon.png" alt="" height="50px" />Secret<span style={{ color: '#fb873f' }}>Coder</span>
          </p>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" style={{ border: 'none' }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <Link to="/courses" className="nav-item nav-link">Courses</Link>
            <div className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
              <div className="dropdown-menu fade-down m-0">
                <Link to="/team" className="dropdown-item">Our Team</Link>
                <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
            <Link to="/login" className="nav-item nav-link">
              <i className="fa fa-user"></i>
            </Link>
          </div>
        </div>
      </nav>
      {/* Navbar End */}

      {/* Header Start */}
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">Login</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><Link to="/" className="text-white">Home</Link></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Login</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Login Start */}
      <div className="container-xxl py-2 mt-4">
        <div className="container">
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.5s">
            <center>
              <form className="shadow p-4" style={{ maxWidth: '550px' }}>
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                  <h1 className="mb-5 bg-white text-center px-3">Login</h1>
                </div>
                <div className="row g-3">
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
                    <p><Link to="/forgot-password">Forgot password?</Link></p>
                  </div>
                  <div className="col-12">
                    <button className="btn text-light w-100 py-3" type="submit">Login</button>
                  </div>
                  <div className="col-12 text-center">
                    <p>Don't have an account? <Link className="text-decoration-none" to="/signup">Signup</Link></p>
                  </div>
                </div>
              </form>
            </center>
          </div>
        </div>
      </div>
      {/* Login End */}

      {/* Footer Start */}
      <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3">Quick Link</h4>
              <p><Link className="text-light" to="/about">About Us</Link></p>
              <p><Link className="text-light" to="/contact">Contact Us</Link></p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, Bangalore, Karnataka</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 8683045908</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>secretcoder@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <Link to="/">Secret Coder</Link>, All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
};

export default Login;
