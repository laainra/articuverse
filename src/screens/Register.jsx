import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Footer from "../components/General/Footer";
import Navi from "../components/General/Navbar.jsx";

import "../App.css";

function Login() {
  return (
    <>
      <Navi />
      <style>
        {`
          /* Override accent colors */
          .btn {
            background-color: #FF5B5B !important;
            color: #000 !important;
            color: #fff !important;
          }

          .btn:hover {
            background-color: #c84343 !important;
            color: #fff !important;
          }

          .circle-button {
            background-color: #FFE9E9 !important;
          }

          .social-buttons .circle-button:hover {
            background-color: #FF5B5B !important;
          }

          .md-form.md-form-lg.focused .form-control {
            border-color: #c84343 !important;
          }
        `}
      </style>

      <MDBContainer fluid className="p-3 my-2 h-custom ">
        <MDBRow>
          <MDBCol col="10" md="7" className="d-flex ml-5">
            <img
              src="./image/register.png"
              className=" ml-auto"
              alt="Sample image"
            />
          </MDBCol>
          <MDBCol col="4" md="4">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">REGISTER</p>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center">
              <div className="social-buttons">
                <div className="circle-button">
                  {/* <MDBBtn floating size='md' tag='a' className='me-2'> */}
                  <i className="fab fa-google-plus"></i>
                  {/* </MDBBtn> */}
                </div>

                <div className="circle-button">
                  <a>
                    {" "}
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>

                <div className="circle-button">
                  {/* <MDBBtn floating size='md' tag='a' className='me-2'> */}
                  <i className="fab fa-github"></i>
                  {/* </MDBBtn> */}
                </div>
              </div>
            </div>

            <div className="divider d-flex align-items-center my-4">
              <div className="divider-line"></div>
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
              <div className="divider-line"></div>
            </div>

            <MDBInput
              wrapperClass="mb-4"
              label={
                <span>
                  <i className="fas fa-user mr-2"></i> Name
                </span>
              }
              id="formControlLg"
              type="email"
              size="lg"
            />

            <MDBInput
              wrapperClass="mb-4"
              label={
                <span>
                  <i className="fas fa-envelope mr-2"></i> Email address
                </span>
              }
              id="formControlLg"
              type="email"
              size="lg"
            />

            <MDBInput
              wrapperClass="mb-4"
              label={
                <span>
                  <i className="fas fa-lock mr-2"></i> Password
                </span>
              }
              id="formControlLg"
              type="password"
              size="lg"
            />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <div className=" flex-column flex-md-row align-items-center text-center text-md-start mt-4 pt-2">
              <MDBBtn className="mb-2 mb-md-0 px-5 " size="lg">
                Register
              </MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?{" "}
                <a href="#!" className="link-danger">
                  Login
                </a>
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
}

export default Login;
