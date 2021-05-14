import '../../css/index.css';

export const createButton = ({ isi }) => {
  const header = document.createElement('header');
  header.className = 'header';
  if (isi) {
    header.innerHTML = `
        <!-- Header -->
          <header class="header">
              <!-- Indications and Usage -->
              <div class="indications">
                  <h5 class="indications__title">Indications and Usage</h5>
                  <p class="indications__body copyright">BELEODAQ is a histone deacetylase inhibitor indicated for the treatment of patients with relapsed or refractory peripheral T-cell lymphoma (PTCL). This indication is approved under accelerated approval based on tumor response rate and duration of response. An improvement in survival or disease-related symptoms has not been established. Continued approval for this indication may be contingent upon veriﬁcation and description of clinical beneﬁt in the conﬁrmatory trial.<sup>1</sup></p>
              </div>
              <!-- Navigation -->
              <nav class="nav">
                  <!-- Logo -->
                  <a class="nav__logo" href="index.html">
                      <img src="https://jacobkleiman.com/beleodaq/assets/svg/beleodaq-logo.svg" alt="BELEODAQ® (belinostat) for injection: For injection in the treatment of relapsed or refractory PTCL" />
                  </a>
                  <!-- Header Buttons -->
                  <div class="nav__buttons">
                      <!-- Site Buttons (redirecting to other parts of site) -->
                      <ul class="site-buttons">
                          <li>
                              <a class="site-buttons__button p" href="#">
                                  Important Safety Information
                              </a>
                          </li>
                          <li>
                              <a class="site-buttons__button p"
                              href="#">
                                 Prescribing Information
                              </a>
                          </li>
                          <li>
                              <a class="site-buttons__button button--orange p" href="#">
                                 Patient Site
                              </a>
                          </li>
                      </ul>
                      <!-- Mobile Logo -->
                      <a class="mobile__logo" href="index.html">
                          <img src="assets/svg/beleodaq-logo.svg" alt="BELEODAQ® (belinostat) for injection: For injection in the treatment of relapsed or refractory PTCL" />
                      </a>
                      <!-- Nav Links and Dropdown Menus -->
                      <button class="mobile__button">
                          <img src="assets/svg/menu/bars.svg" alt="hamburger menu button" class="mobile__button__icon"/>
                      </button>
                      <ul class="navlinks">
                          <li>
                              <a class="navlinks__link p" href="ptcl.html">PTCL <br>Overview</a>
                          </li>
                          <li>
                              <a class="navlinks__link p" href="about.html">About <br>Beleodaq</a>
                          </li>
                          <li>
                              <a class="navlinks__link p" href="inclusion-criteria.html">BELIEF <br>Trial</a>
                          </li>
                          <li>
                              <a class="navlinks__link p" href="efficacy.html"><br>Efficacy</a>
                              <ul class="dropdown dropdown--hidden">
                                  <li>
                                      <a href="" class="dropdown__item p">
                                          Study design
                                      </a>
                                  </li>
                                  <li>
                                      <a href="" class="dropdown__item p">
                                          Baseline Characteristics
                                      </a>
                                  </li>
                                  <li>
                                      <a href="" class="dropdown__item p">
                                          Response Rate
                                      </a>
                                   </li>
                                  <li>
                                      <a href="" class="dropdown__item p">
                                          Duration of Response
                                      </a>
                                  </li>
                              </ul>
                          </li>
                          <li>
                              <a class="navlinks__link p" href="safety.html">Safety & Tolerability</a>
                              <ul class="dropdown dropdown--hidden">
                                  <li>
                                      <a href="" class="dropdown__item p">
                                          Adverse Reactions
                                      </a>
                                  </li>
                                  <li>
                                      <a href="" class="dropdown__item p">
                                          Tolerability
                                      </a>
                                  </li>
                              </ul>
                          </li>
                          <li>
                              <a class="navlinks__link p" href="dosing.html">Dosing & Administration</a>
                              <ul class="dropdown dropdown--hidden">
                                  <li>
                                      <a href="" class="dropdown__item p">
                                          Dosing Schedule
                                      </a>
                                  </li>
                                  <li>
                                      <a href="" class="dropdown__item p">
                                          Dose Modifications
                                      </a>
                                  </li>
                              </ul>
                          </li>
                          <li>
                              <a class="navlinks__link p" href="access.html">Access & Resources</a>
                              <ul class="dropdown dropdown--hidden">
                                  <li>
                                      <a href="" class="dropdown__item p">
                                          STAR
                                      </a>
                                  </li>
                                  <li>
                                      <a href="" class="dropdown__item p">
                                          Resources
                                      </a>
                                  </li>
                              </ul>
                          </li>
                          <li>
                              <a class="navlinks__link p" href="#">Contact <br>Us</a>
                          </li>
                      </ul>
                  </div>
              </nav>
          </header>
        `;
  } else {
    header.innerHTML = `
    <!-- Header -->
      <header class="header">
          <!-- Navigation -->
          <nav class="nav">
              <!-- Logo -->
              <a class="nav__logo" href="index.html">
                  <img src="https://jacobkleiman.com/beleodaq/assets/svg/beleodaq-logo.svg" alt="BELEODAQ® (belinostat) for injection: For injection in the treatment of relapsed or refractory PTCL" />
              </a>
              <!-- Header Buttons -->
              <div class="nav__buttons">
                  <!-- Site Buttons (redirecting to other parts of site) -->
                  <ul class="site-buttons">
                      <li>
                          <a class="site-buttons__button p" href="#">
                              Important Safety Information
                          </a>
                      </li>
                      <li>
                          <a class="site-buttons__button p"
                          href="#">
                             Prescribing Information
                          </a>
                      </li>
                      <li>
                          <a class="site-buttons__button button--orange p" href="#">
                             Patient Site
                          </a>
                      </li>
                  </ul>
                  <!-- Mobile Logo -->
                  <a class="mobile__logo" href="index.html">
                      <img src="assets/svg/beleodaq-logo.svg" alt="BELEODAQ® (belinostat) for injection: For injection in the treatment of relapsed or refractory PTCL" />
                  </a>
                  <!-- Nav Links and Dropdown Menus -->
                  <button class="mobile__button">
                      <img src="assets/svg/menu/bars.svg" alt="hamburger menu button" class="mobile__button__icon"/>
                  </button>
                  <ul class="navlinks">
                      <li>
                          <a class="navlinks__link p" href="ptcl.html">PTCL <br>Overview</a>
                      </li>
                      <li>
                          <a class="navlinks__link p" href="about.html">About <br>Beleodaq</a>
                      </li>
                      <li>
                          <a class="navlinks__link p" href="inclusion-criteria.html">BELIEF <br>Trial</a>
                      </li>
                      <li>
                          <a class="navlinks__link p" href="efficacy.html"><br>Efficacy</a>
                          <ul class="dropdown dropdown--hidden">
                              <li>
                                  <a href="" class="dropdown__item p">
                                      Study design
                                  </a>
                              </li>
                              <li>
                                  <a href="" class="dropdown__item p">
                                      Baseline Characteristics
                                  </a>
                              </li>
                              <li>
                                  <a href="" class="dropdown__item p">
                                      Response Rate
                                  </a>
                               </li>
                              <li>
                                  <a href="" class="dropdown__item p">
                                      Duration of Response
                                  </a>
                              </li>
                          </ul>
                      </li>
                      <li>
                          <a class="navlinks__link p" href="safety.html">Safety & Tolerability</a>
                          <ul class="dropdown dropdown--hidden">
                              <li>
                                  <a href="" class="dropdown__item p">
                                      Adverse Reactions
                                  </a>
                              </li>
                              <li>
                                  <a href="" class="dropdown__item p">
                                      Tolerability
                                  </a>
                              </li>
                          </ul>
                      </li>
                      <li>
                          <a class="navlinks__link p" href="dosing.html">Dosing & Administration</a>
                          <ul class="dropdown dropdown--hidden">
                              <li>
                                  <a href="" class="dropdown__item p">
                                      Dosing Schedule
                                  </a>
                              </li>
                              <li>
                                  <a href="" class="dropdown__item p">
                                      Dose Modifications
                                  </a>
                              </li>
                          </ul>
                      </li>
                      <li>
                          <a class="navlinks__link p" href="access.html">Access & Resources</a>
                          <ul class="dropdown dropdown--hidden">
                              <li>
                                  <a href="" class="dropdown__item p">
                                      STAR
                                  </a>
                              </li>
                              <li>
                                  <a href="" class="dropdown__item p">
                                      Resources
                                  </a>
                              </li>
                          </ul>
                      </li>
                      <li>
                          <a class="navlinks__link p" href="#">Contact <br>Us</a>
                      </li>
                  </ul>
              </div>
          </nav>
      </header>
    `;
  }

  return header;
};
