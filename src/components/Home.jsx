import React from "react";

const Home = () => {
  return (
  <>
    <div style={{ width: "100%" }}>
      <header>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "rgb(191, 255, 234)" }}
        >
          <div className="container-xxl" style={{ width: "100%"}}>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <a className="navbar-brand" href="#">
                CareCompass
              </a>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#intro"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Doctor's page
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More options
                  </a>
                  <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Reviews</a></li>
                <li><a className="dropdown-item" href="#">Give us feedback!</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#contactUs">Contact Us</a></li>
              </ul>
                </li>
              </ul>
            </div>
            <button className="btn btn-outline-success m-3" type="button">
              LogIn
            </button>
            <button className="btn btn-success" type="button">
              SignUp
            </button>
          </div>
        </nav>
      </header>

    <main> 
      <section id="intro">

        <div className="container-xxl align-center py-1 my-3">
          <div className="container-xxl justify-content-center" id="image" >
            <img src="../../img1.jpeg" alt="img" className="img-fluid mx-auto d-block" style={{position: "absolute", zIndex: 1, borderRadius: "50px" , height: "95%", width: "80%"}}/>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <div className="container-xxl text-center rounded" style={{position: "relative", zIndex: 2, backgroundColor: "rgba(255, 255, 255, 0.398)"}}>
                  <h1>CareCompass Hub</h1>
                  <h2 className="display-5">Navigating health together</h2>
              </div>
            </div>
          </div>
          

          <div className="row align-items-center justify-content-start features">
            <div className="col-md-5 mt-2 mb-1 mx-3">
              <div className="container-xxl text-center rounded" style={{position: "relative" ,zIndex: 2, backgroundColor: "rgba(255, 255, 255, 0.398)"}}>
                <div id="fetaure1">
                  <button className="btn btn-lg btn-outline-success my-2" type="button">Call the Doctor</button>
                  <button className="btn btn-lg btn-success my-2" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg>
                  </button>
                  <div className="lead py-2">You can directly call certified doctors associated with us in case you need prescription for your health</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center justify-content-start features">
            <div className="col-md-5 my-1 mx-3">
              <div className="container-xxl text-center rounded" style={{position: "relative", zIndex: 2, backgroundColor: "rgba(255, 255, 255, 0.398)"}}>
                <div id="fetaure2">
                  <button className="btn btn-lg btn-outline-success my-2" type="button">Chat with the Doctor</button>
                  <button className="btn btn-lg btn-success my-2" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                      <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                      <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
                    </svg>
                  </button>
                  <div className="lead py-2">You can directly chat with certified doctors associated with us in case you need prescription for your health</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center justify-content-start features">
            <div className="col-md-5 my-1 mx-3">
              <div className="container-xxl text-center rounded" style={{position: "relative", zIndex: 2, backgroundColor: "rgba(255, 255, 255, 0.398)"}}>
                <div id="fetaure3">
                  <button className="btn btn-lg btn-outline-success my-2" type="button">Upload Prescription</button>
                  <button className="btn btn-lg btn-success my-2" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-file-arrow-up" viewBox="0 0 16 16">
                      <path d="M8 11a.5.5 0 0 0 .5-.5V6.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7.5 6.707V10.5a.5.5 0 0 0 .5.5"/>
                      <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
                    </svg>
                  </button>
                  <div className="lead py-2">Upload the prescription so that you will never miss to take the medicines prescribed to you.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center justify-content-start features">
            <div className="col-md-5 mt-1 mx-3 mb-1">
              <div className="container-xxl text-center rounded" style={{position: "relative", zIndex: 2, backgroundColor: "rgba(255, 255, 255, 0.398)"}}>
                <div id="fetaure4">
                  <button className="btn btn-lg btn-outline-success my-2" type="button">Calorie Tracker</button>
                  <button className="btn btn-lg btn-success my-2" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-file-arrow-up" viewBox="0 0 16 16">
                      <path d="M8 11a.5.5 0 0 0 .5-.5V6.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7.5 6.707V10.5a.5.5 0 0 0 .5.5"/>
                      <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
                    </svg>
                  </button>
                  <div className="lead py-2">Upload your diet to get your daily calorie intake in just one click!</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      

    </main>

      
    <footer className="main-footer-section mt-5 py-3 text-white" style={{backgroundColor: "rgba(53, 110, 91, 0.708)"}}>
      <div className="contact-datails">
          <div className="container-xxl" >
              <div className="row justify-content-center align-items-center display-5 my-3" id="contactUs">
                  Contact Us
              </div>
              <div className="row g-0">
                  <div className="col-lg-4">
                      <div className="contact-div d-flex flex-column justify-content-center align-items-center">
                          <div className="icon-div rounded">
                              <h4><a href="#contact-number" style={{color: "white"}}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                              </svg></a></h4>
                          </div>
                          <p id="contact-number"><small>+91 XXXXXXXXXX</small></p>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="contact-div d-flex flex-column justify-content-center align-items-center">
                          <div className="icon-div rounded">
                              <h4><a href="#email-id" style={{color: "white"}}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                              </svg></a></h4>
                          </div>
                          <p id="email-id"><small>team.CareCompass@Ca***.com</small></p>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="contact-div d-flex flex-column justify-content-center align-items-center">
                          <div className="icon-div rounded" >
                              <h4><a href="#office-address" style={{color: "white"}}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-building-fill" viewBox="0 0 16 16">
                                <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
                              </svg></a></h4>
                          </div>
                          <p id="office-address"><small>No physical office yet</small></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
     
      <div className="container-xxl my-5">
          <div className="row justify-content-between align-items-top g-4">
              <div className="col-md-5" style={{backgroundColor: "rgba(0, 0, 0, 0.382)"}}>
                  <div className="fs-6"><em>Our mission</em></div><hr style={{marginTop:"0"}}/>
                  <p style={{color: "rgba(113, 251, 205, 0.708)"}}><small><em>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias odio odit labore neque voluptatum harum voluptatibus tempore, dolore voluptatem vel ipsa quae eaque cupiditate fugit dolores! Iusto reprehenderit magnam delectus molestias et similique, in ex placeat sunt, nisi sint ut harum commodi minus accusantium voluptas cumque deleniti beatae maxime. Cupiditate?
                  </em></small></p>
              </div>
              
          </div>
          <hr style={{color: "rgb(255, 255, 255)"}}/>
          <div className="row justify-content-evenly align-items-top g-0" style={{backgroundColor: "rgba(0, 0, 0, 0.382)"}}>
              <div className="col-2">
                  <a href="#" style={{color: "white"}}><small>Terms and Conditions</small></a>
              </div>
              <div className="col-1">
                  <a href="#" style={{color: "white"}}><small>Services</small></a>
              </div>
              <div className="col-1">
                  <a href="#" style={{color: "white"}}><small>Google Maps</small></a>
              </div>
              <div className="col-1">
                  <a href="#" style={{color: "white"}}><small>E-mail</small></a>
              </div>
              <div className="col-1">
                  <a href="#" style={{color: "white"}}><small>Instagram</small></a>
              </div>
              <div className="col-1">
                  <a href="#" style={{color: "white"}}><small>Facebook</small></a>
              </div>
          </div>
      </div>
  </footer>
    </div>
  </>
  );
};

export default Home;
