import { useEffect } from 'react';
import { Carousel } from 'bootstrap';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize Bootstrap carousel on mount
    const el = document.getElementById('myCarousel');
    if (el) {
      const carousel = Carousel.getOrCreateInstance(el, { interval: 5000 });
      window.__carousel = carousel;
    }
  }, []);

  const handleBannerPause = () => {
    if (window.__carousel) window.__carousel.pause();
  };
  const handleBannerPlay = () => {
    if (window.__carousel) window.__carousel.cycle();
  };
  const handleBannerPrev = (e) => { e.preventDefault(); if (window.__carousel) window.__carousel.prev(); };
  const handleBannerNext = (e) => { e.preventDefault(); if (window.__carousel) window.__carousel.next(); };

  return (
    <div className="super_container">
      {/* ===== SKIP / HIDDEN ===== */}
      <div>
        <a href="#rightContent" id="skip-to-content" className="access">Skip To Content</a>
      </div>
      <div id="rightContent"></div>
      <div><a name="maintop" id="maintop"></a></div>

      <div id="content" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <a id="mt"></a>

        {/* ===== HEADER ===== */}
        <header className="header d-print-none">
          <div className="header_main" style={{ marginBottom: '5px' }}>
            <div className="container" style={{ display: 'flex' }}>
              <div className="row" style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>

                {/* Logo */}
                <div className="col-lg-6 col-12 text-lg-left text-left topL2Left_Logo">
                  <a href="/index" className="logo_replacement" aria-label="Home">
                    <div className="logo_replacement"><label className="sr-only">logo</label></div>
                  </a>
                </div>

                {/* Top Right */}
                <div className="col-lg-6 col-12 topL2Right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: 'auto' }}>
                  {/* Language */}
                  <div className="topL3_Lang" style={{ textAlign: 'right' }}>
                    <ul className="small d-flex" style={{ justifyContent: 'flex-end', listStyle: 'none', margin: '0 0 4px', padding: 0 }}>
                      <li className="nav-item2" style={{ padding: '0 8px' }}>
                        <a className="langLink" href="?request_locale=zh_TW" style={{ fontSize: '0.85rem' }}>繁體版</a>
                      </li>
                      <li className="nav-item2" style={{ padding: '0 8px' }}>
                        <a className="langLink" href="?request_locale=zh_CN" style={{ fontSize: '0.85rem' }}>简体版</a>
                      </li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="topL3_Buttons">
                    <div className="justify-content-end" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                      <a href="/wac/showVrfyQrCodePage" className="headerButton button button-action button-rounded" aria-label="My Certificate and QR Code">
                        <i className="bi bi-qr-code" style={{ fontSize: '1.2rem' }}></i>
                      </a>
                      <a href="/common/createUserAccount" className="headerButton button button-action button-rounded">
                        <i className="bi bi-person-plus-fill" style={{ fontSize: '1.1rem' }}></i>
                        &nbsp;Create Account
                      </a>
                      <a href="/security/login?applcTypeCd=D" className="headerButton button button-action button-rounded">
                        <i className="bi bi-box-arrow-in-right" style={{ fontSize: '1.1rem' }}></i>
                        &nbsp;Login
                      </a>
                      <a href="/online-demo/en/DRS_index1.html" target="OpenOnlineDemo" className="headerButton button button-action button-rounded">
                        <i className="bi bi-play-circle" style={{ fontSize: '1.1rem' }}></i>
                        &nbsp;Online Demo
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ===== NAVIGATION ===== */}
          <nav className="main_nav">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="main_nav_content d-flex flex-row justify-content-end">
                    <div className="main_nav_menu">
                      <ul className="standard_dropdown main_nav_dropdown">
                        <li>
                          <a className="vertical_center_menu" href="/information/1_introduction">
                            <span className="vertical_center_span">Introduction <i className="fas fa-chevron-down"></i></span>
                          </a>
                        </li>
                        <li className="hassubs">
                          <a className="vertical_center_menu" href="/information/2_DPMS_Register">
                            <span className="vertical_center_span">Register <i className="fas fa-chevron-down"></i></span>
                          </a>
                          <ul>
                            <li><a href="/wsrh/001s0">Register of Precious Metals and Stones Dealers <i className="fas fa-chevron-down"></i></a></li>
                            <li><a href="/information/22_DPMS_Register">Application for an entry in or extract from the Register <i className="fas fa-chevron-down"></i></a></li>
                            <li><a href="/information/23_DPMS_Register">Application for a Certificate on the Register <i className="fas fa-chevron-down"></i></a></li>
                            <li><a href="/information/24_DPMS_Register">Related Fee <i className="fas fa-chevron-down"></i></a></li>
                            <li><a href="/wac/showVrfyQrCodePage">Verification by Dynamic QR Code <i className="fas fa-chevron-down"></i></a></li>
                          </ul>
                        </li>
                        <li className="hassubs">
                          <a className="vertical_center_menu" href="/information/3_registrationDPMS">
                            <span className="vertical_center_span">Registration of DPMS <i className="fas fa-chevron-down"></i></span>
                          </a>
                          <ul>
                            <li>
                              <a href="/information/31_registrationDPMS">Category A Registration <i className="fas fa-chevron-down"></i></a>
                              <ul>
                                <li><a href="/information/312_registrationDPMS">Forms</a></li>
                                <li><a href="/information/313_registrationDPMS">Guidance Notes on Forms</a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="/information/32_registrationDPMS">Category B Registration <i className="fas fa-chevron-down"></i></a>
                              <ul>
                                <li><a href="/information/324_registrationDPMS">FORMS and GUIDANCE NOTES – Renewal Application (BR Holder)</a></li>
                                <li><a href="/information/321_registrationDPMS">FORMS and GUIDANCE NOTES – Application for Registration (BR Holder)</a></li>
                                <li><a href="/information/325_registrationDPMS">FORMS and GUIDANCE NOTES – Renewal Application (Hawker)</a></li>
                                <li><a href="/information/322_registrationDPMS">FORMS and GUIDANCE NOTES – Application for Registration (Hawker)</a></li>
                                <li><a href="/information/323_registrationDPMS">OTHER FORMS and GUIDANCE NOTES</a></li>
                              </ul>
                            </li>
                            <li><a href="/information/33_registrationDPMS">DPMS iPASS <i className="fas fa-chevron-down"></i></a></li>
                            <li><a href="/information/34_registrationDPMS">Fee <i className="fas fa-chevron-down"></i></a></li>
                          </ul>
                        </li>
                        <li className="hassubs">
                          <a className="vertical_center_menu" href="/information/4_nonHongKongDealers">
                            <span className="vertical_center_span">Non-HK precious metals and stones dealer <i className="fas fa-chevron-down"></i></span>
                          </a>
                          <ul>
                            <li><a href="/information/43_nonHongKongDealers">Forms</a></li>
                          </ul>
                        </li>
                        <li className="hassubs">
                          <a className="vertical_center_menu" href="/information/5_Guidelines">
                            <span className="vertical_center_span">Guidelines</span>
                          </a>
                        </li>
                        <li className="hassubs">
                          <a className="vertical_center_menu" href="/information/6_legislation">
                            <span className="vertical_center_span">Legislation</span>
                          </a>
                        </li>
                        <li className="hassubs">
                          <a className="vertical_center_menu" href="/information/7_circularsAndPublications">
                            <span className="vertical_center_span">Circulars and<br />Publications <i className="fas fa-chevron-down"></i></span>
                          </a>
                          <ul>
                            <li><a href="/information/71_circularsAndPublications">Circulars <i className="fas fa-chevron-down"></i></a>
                              <ul>
                                <li><a href="/information/711_circularsAndPublications">Sanctions-related</a></li>
                                <li><a href="/information/712_circularsAndPublications">AML / CFT / CPF</a></li>
                                <li><a href="/information/713_circularsAndPublications">Regulatory Matters</a></li>
                                <li><a href="/information/714_circularsAndPublications">General Notices</a></li>
                              </ul>
                            </li>
                            <li><a href="/information/72_circularsAndPublications">Publications</a></li>
                          </ul>
                        </li>
                        <li className="hassubs">
                          <a className="vertical_center_menu" href="/information/8_enforcement">
                            <span className="vertical_center_span">Enforcement<br />News <i className="fas fa-chevron-down"></i></span>
                          </a>
                          <ul>
                            <li><a href="/information/81_enforcement">Highlights of Prosecution Cases <i className="fas fa-chevron-down"></i></a></li>
                            <li><a href="/information/82_enforcement">Highlights of Disciplinary Cases <i className="fas fa-chevron-down"></i></a></li>
                          </ul>
                        </li>
                        <li className="hassubs">
                          <a className="vertical_center_menu" href="/information/9_publicityAndPresentation">
                            <span className="vertical_center_span">Publicity &<br />Presentation <i className="fas fa-chevron-down"></i></span>
                          </a>
                          <ul>
                            <li><a href="/information/91_publicityAndPresentation">Press Release <i className="fas fa-chevron-down"></i></a></li>
                            <li><a href="/information/92_publicityAndPresentation">Presentation <i className="fas fa-chevron-down"></i></a></li>
                            <li><a href="/information/93_publicityAndPresentation">Publicity materials <i className="fas fa-chevron-down"></i></a>
                              <ul>
                                <li><a href="/information/931_publicityAndPresentation">Leaflet and Posters</a></li>
                                <li><a href="/information/932_publicityAndPresentation">Videos</a></li>
                                <li><a href="/information/933_publicityAndPresentation">Media news</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <div className="menu_trigger_container ml-auto">
                      <div className="menu_burger">
                        <div className="container">
                          <a title="Verification by Dynamic QR Code" href="/wac/showVrfyQrCodePage">
                            <i className="bi bi-qr-code" style={{ fontSize: '1.3rem', verticalAlign: 'middle' }}></i>
                          </a>
                          <a title="Create Account" href="/common/createUserAccount">
                            <i className="bi bi-person-plus-fill" style={{ fontSize: '1.3rem', verticalAlign: 'middle' }}></i>
                          </a>
                          <a title="Login" href="/security/login?applcTypeCd=D">
                            <i className="bi bi-box-arrow-in-right" style={{ fontSize: '1.3rem', verticalAlign: 'middle' }}></i>
                          </a>
                          <a title="Online Demo" href="/online-demo/en/DRS_index1.html" target="OpenOnlineDemo">
                            <i className="bi bi-play-circle" style={{ fontSize: '1.3rem', verticalAlign: 'middle' }}></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* ===== BANNER CAROUSEL ===== */}
        <section id="main_banner">
          <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <picture>
                  <source media="(min-width:1024px)" srcSet="/assets/img/HPE/banner1_en.jpg" />
                  <img src="/assets/img/HPE/banner1_en.jpg" alt="Dealers in Precious Metals and Stones Sector Advisory Group" style={{ width: '100vw', display: 'block' }} />
                </picture>
              </div>
              <div className="carousel-item">
                <picture>
                  <source media="(min-width:1024px)" srcSet="/assets/img/HPE/banner2_en.jpg" />
                  <img src="/assets/img/HPE/banner2_en.jpg" alt="Registration regime has been introduced" style={{ width: '100vw', display: 'block' }} />
                </picture>
              </div>
              <div className="carousel-item">
                <picture>
                  <source media="(min-width:1024px)" srcSet="/assets/img/HPE/banner3.jpg" />
                  <img src="/assets/img/HPE/banner3.jpg" alt="Dealers in Precious Metals and Stones Supervision Bureau" style={{ width: '100vw', display: 'block' }} />
                </picture>
              </div>
              <div className="carousel-item">
                <picture>
                  <source media="(min-width:1024px)" srcSet="/assets/img/HPE/banner4_en.jpg" />
                  <img src="/assets/img/HPE/banner4_en.jpg" alt="Category B registrants compliance" style={{ width: '100vw', display: 'block' }} />
                </picture>
              </div>
              <div className="carousel-item">
                <picture>
                  <source media="(min-width:1024px)" srcSet="/assets/img/HPE/banner5_en.jpg" />
                  <img src="/assets/img/HPE/banner5_en.jpg" alt="Non-Hong Kong dealers cash transaction report" style={{ width: '100vw', display: 'block' }} />
                </picture>
              </div>
              <div className="carousel-item">
                <picture>
                  <source media="(min-width:1024px)" srcSet="/assets/img/HPE/banner6_en.jpg" />
                  <img src="/assets/img/HPE/banner6_en.jpg" alt="Cash transactions at or above HK$120,000" style={{ width: '100vw', display: 'block' }} />
                </picture>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="carousel-panel container text-center">
              <div className="row">
                <div className="col">
                  <div className="carousel-button-row">
                    <a id="previous-banner" href="/" role="button" onClick={handleBannerPrev}>
                      <i className="fas fa-chevron-left"></i>
                    </a>
                    <a id="next-banner" href="/" role="button" onClick={handleBannerNext}>
                      <i className="fas fa-chevron-right"></i>
                    </a>
                    <ol className="carousel-indicators">
                      <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
                      <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                      <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                      <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
                      <li data-bs-target="#myCarousel" data-bs-slide-to="4"></li>
                      <li data-bs-target="#myCarousel" data-bs-slide-to="5"></li>
                    </ol>
                    <a id="pause-banner" href="/" role="button" onClick={handleBannerPause}>
                      <i id="pauseBanner" className="fas fa-pause-circle" style={{ color: '#FFFFFF' }}></i>
                    </a>
                    <a id="play-banner" href="/" role="button" onClick={handleBannerPlay}>
                      <i id="playBanner" className="fas fa-play-circle" style={{ color: '#B0904F' }}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <section className="text-center">
          <div className="row" style={{ height: '38px', backgroundColor: '#003b3a', color: '#003b3a', margin: 0 }}>
            <div className="col"></div>
          </div>
        </section>

        {/* ===== SHORTCUTS ===== */}
        <section id="main_shortcut" className="shortcut_bg">
          <div className="container">
            <div className="row">
              {[
                { img: 'icon01.png', label: 'Introduction', href: '/information/1_introduction' },
                { img: 'icon02.png', label: 'Register', href: '/information/2_DPMS_Register' },
                { img: 'icon03.png', label: 'Registration of DPMS', href: '/information/3_registrationDPMS' },
                { img: 'icon04.png', label: 'Non-HK Dealer', href: '/information/4_nonHongKongDealers' },
                { img: 'icon05.png', label: 'Guidelines', href: '/information/5_Guidelines' },
                { img: 'icon06.png', label: 'Legislation', href: '/information/6_legislation' },
                { img: 'icon07.png', label: 'Circulars and<br/>Publications', href: '/information/7_circularsAndPublications' },
                { img: 'icon08.png', label: 'Enforcement<br/>News', href: '/information/8_enforcement' },
                { img: 'icon09.png', label: 'Publicity &<br/>Presentation', href: '/information/9_publicityAndPresentation' },
              ].map((item, i) => (
                <div className="col-12 col-sm-4" key={i}>
                  <a href={item.href} className="shortcut_link">
                    <div className="iconbox">
                      <div className="iconbox_photo">
                        <img src={`/assets/img/HPE/shortcut/${item.img}`} className="shortcutIconImage" alt="" />
                        <div className="iconbox_text text-center">
                          <h2 className="h6 shortcut_fontstyle_1" dangerouslySetInnerHTML={{ __html: item.label }}></h2>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== LATEST NEWS ===== */}
        <section id="main_news" className="news_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center demo_head">
                <div className="demo_space"></div>
                <h2><b>Latest News</b></h2>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 mx-auto" style={{ marginTop: '50px', marginBottom: '20px' }}>
                    <div className="career-search mb-60">
                      <div className="filter-result">
                        {[
                          { date: '2026-07-07', text: 'Hong Kong Customs detects case of non-registered precious metals and stones dealer carrying out specified transactions<br/><br/>Hong Kong Customs yesterday (July 6) detected a case involving a local company that conducted transactions of jewellery and watch containing precious metals and stones valued at over HK$120,000, without registration under the Dealers in Precious Metals and Stones Regulatory Regime. The company director was arrested.', url: 'https://www.info.gov.hk/gia/general/202607/07/P2026070700351.htm' },
                          { date: '2026-07-03', text: 'Hong Kong Customs detects case of non-registered precious metals and stones dealer carrying out specified transactions<br/><br/>Hong Kong Customs yesterday (July 2) detected a case involving a local company that conducted transactions of precious stones and precious products valued at over HK$120,000, without registration under the Dealers in Precious Metals and Stones Regulatory Regime. The company owner was arrested.', url: 'https://www.info.gov.hk/gia/general/202607/03/P2026070300427.htm' },
                          { date: '2026-06-26', text: 'Statements issued by the Financial Action Task Force', url: 'https://www.drs.customs.gov.hk/information/7121_circularsAndPublications' },
                          { date: '2026-06-23', text: 'Hong Kong Customs detects case involving precious metals and stones dealer carrying out specified cash transaction without Category B registration', url: 'https://www.info.gov.hk/gia/general/202606/23/P2026062300475.htm' },
                          { date: '2026-06-23', text: 'Important point-to-note before carrying out specified cash transactions (For Category B Registrants)', url: 'https://www.drs.customs.gov.hk/information/7121_circularsAndPublications?request_locale=en' },
                          { date: '2026-06-17', text: 'Hong Kong Customs to publicise Dealers in Precious Metals and Stones Regulatory Regime at jewellery exhibition', url: 'https://www.info.gov.hk/gia/general/202606/17/P2026061700323.htm' },
                          { date: '2026-06-16', text: 'Hong Kong Customs detects case involving precious metals and stones dealer carrying out both specified cash and non-cash transactions without registration', url: 'https://www.info.gov.hk/gia/general/202606/16/P2026061600628.htm' },
                          { date: '2026-06-12', text: 'Hong Kong Customs detects case of non-registered precious metals and stones dealer carrying out specified transactions', url: 'https://www.info.gov.hk/gia/general/202606/12/P2026061200522.htm' },
                          { date: '2026-06-05', text: 'Hong Kong Customs detects case of non-registered precious metals and stones dealer carrying out specified transactions', url: 'https://www.info.gov.hk/gia/general/202606/05/P2026060500605.htm' },
                          { date: '2026-05-22', text: 'Updates relating to United Nations Sanctions (ISIL and Al-Qaida) Regulation', url: 'https://www.drs.customs.gov.hk/information/7111_circularsAndPublications' },
                          { date: '2026-05-21', text: 'Hong Kong Customs detects case involving precious metals and stones dealer carrying out specified cash transaction without Category B registration', url: 'https://www.info.gov.hk/gia/general/202605/21/P2026052100425.htm' },
                          { date: '2026-05-19', text: 'Hong Kong Customs detects case of non-registered precious metals and stones dealer carrying out specified transactions', url: 'https://www.info.gov.hk/gia/general/202605/19/P2026051900375.htm' },
                          { date: '2026-05-12', text: 'Hong Kong Customs detects case of non-registered precious metals and stones dealer carrying out specified transactions', url: 'https://www.info.gov.hk/gia/general/202605/12/P2026051200561.htm' },
                        ].map((news, i) => (
                          <div className="news-box d-md-flex align-items-center justify-content-between mb-30" key={i}>
                            <div className="news-left my-4 d-md-flex align-items-center flex-wrap" style={{ width: '100%' }}>
                              <div className="col-1 newsicon" style={{ paddingLeft: 0, paddingRight: '50px' }}>
                                <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-flex">
                                  <i className="bi bi-newspaper"></i>
                                </div>
                              </div>
                              <div className="news-content col-11">
                                <div className="text-left text-md-left newstext2" style={{ fontSize: '1.1em', marginBottom: '0.6em' }}>
                                  <p style={{ textAlign: 'justify', overflowWrap: 'break-word' }}
                                    dangerouslySetInnerHTML={{ __html: news.text + '<br/><br/><a href="' + news.url + '" target="_blank">' + news.url + '</a>' }}>
                                  </p>
                                </div>
                                <div className="mr-md-4 newstext_date">{news.date}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROMOTIONAL VIDEOS ===== */}
        <section id="main_demo" className="demo_bg">
          <div className="container" style={{ paddingBottom: '50px' }}>
            <div className="row">
              <div className="col-md-12 text-center demo_head">
                <div className="demo_space"></div>
                <h2><b>Promotional Videos</b></h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row" style={{ width: '100%', display: 'flex' }}>
              {[
                { img: 'video_01_en.png', label: 'TV Announcement in the Public Interest', url: 'https://youtu.be/HjzNtuj0IbA' },
                { img: 'video_02_en.png', label: 'Information Video (for local dealers and the public)', url: 'https://youtu.be/fgwrHOUik30' },
                { img: 'video_03_en.png', label: 'Information Video (for non-Hong Kong precious metals and stones dealers)', url: 'https://youtu.be/Puou_Kn3NDk' },
                { img: 'video_04_en.png', label: 'Animated Promotional Video', url: 'https://www.youtube.com/watch?v=3YTCoDdI-84' },
                { img: 'video_06_en.png', label: 'Animated Promotional Video (Registration Regime - Detailed Introduction)', url: 'https://www.youtube.com/watch?v=-EfgpgeRraQ' },
              ].map((video, i) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                  <div style={{ width: '100%', marginBottom: '20px' }}>
                    <a href={video.url} target="_blank" rel="noopener noreferrer">
                      <img className="imgHover" src={`/assets/img/videos/${video.img}`} style={{ width: '100%', borderRadius: '10px' }} alt={video.label} />
                      <div className="caption">
                        <p>{video.label}</p>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="main_faq" className="faq_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center demo_head">
                <div className="demo_space"></div>
                <h2><b>Frequently Asked Questions</b></h2>
              </div>
            </div>
            <div className="hp-fp-section">
              <div className="container">
                <div className="fp-slider-items">
                  {[
                    { img: 'faq01_en.jpg', label: 'Understanding the Dealers in Precious Metals and Stones Registration Regime', group: 1 },
                    { img: 'faq02_en.jpg', label: 'About Application for Registration', group: 2 },
                    { img: 'faq03_en.jpg', label: 'General Obligations of Registrants', group: 3 },
                    { img: 'faq04_en.jpg', label: 'Fees', group: 4 },
                    { img: 'faq05_en.jpg', label: 'Non-Hong Kong Precious Metals and Stones Dealers', group: 5 },
                  ].map((faq, i) => (
                    <div className="fp-slider-wrapper" key={i}>
                      <a href={`/common/faqs_Group?group=${faq.group}`}>
                        <div className="fp-img faq_slick-slide">
                          <img src={`/assets/img/HPE/faq/${faq.img}`} alt={faq.label} />
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
                <div className="col text-center" style={{ marginTop: '10px' }}>
                  <a id="pause-FAQ" href="/" role="button">
                    <i id="pauseFAQ" className="fas fa-pause-circle" style={{ color: '#000000', padding: '10px', fontSize: '1.5rem' }}></i>
                    <span className="sr-only">Pause</span>
                  </a>
                  <a id="play-FAQ" href="/" role="button">
                    <i id="playFAQ" className="fas fa-play-circle" style={{ color: '#006866', padding: '10px', fontSize: '1.5rem' }}></i>
                    <span className="sr-only">Play</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center faq_bottom_btn">
              <a href="/common/faqs" className="button button-action button-rounded demo_btn">All Questions</a>
            </div>
          </div>
        </section>

        {/* ===== SITEMAP ===== */}
        <section id="main_sitemap" className="sitemap_bg">
          <div className="container">
            <div className="row">
              <div className="accordion" id="accordionExample">
                <div className="card text-center">
                  <div className="card-header collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" tabIndex="0" role="button">
                    <span className="title">Site Map</span>
                    <span className="accicon"><i className="fas fa-angle-down rotate-icon"></i></span>
                  </div>
                  <div id="collapseOne" className="collapse" data-parent="#accordionExample">
                    <div className="card-body">
                      <div className="row justify-content-start">
                        <div className="col-md-12" style={{ marginBottom: '40px' }}>
                          <h2><b>Dealers in Precious Metals and Stones Registration System</b></h2>
                        </div>
                        <div className="col-md-4 sitemap_box">
                          <a href="/index" className="sitemap_link"><b>Home</b></a>
                        </div>
                        <div className="col-md-4 sitemap_box">
                          <a href="/information/1_introduction" className="sitemap_link"><b>Introduction</b></a>
                        </div>
                        <div className="col-md-4 sitemap_box">
                          <a href="/information/2_DPMS_Register"><b>Register</b></a>
                          <ul>
                            <li><a href="/wsrh/001s0">Register of Precious Metals and Stones Dealers</a></li>
                            <li><a href="/information/22_DPMS_Register">Application for an entry in or extract from the Register</a></li>
                            <li><a href="/information/23_DPMS_Register">Application for a Certificate on the Register</a></li>
                            <li><a href="/information/24_DPMS_Register">Related Fee</a></li>
                            <li><a href="/wac/showVrfyQrCodePage">Verification by Dynamic QR Code</a></li>
                          </ul>
                        </div>
                        <div className="col-md-4 sitemap_box">
                          <a href="/information/3_registrationDPMS"><b>Registration of DPMS</b></a>
                          <ul>
                            <li><a href="/information/31_registrationDPMS">Category A Registration</a></li>
                            <li><a href="/information/32_registrationDPMS">Category B Registration</a></li>
                            <li><a href="/information/33_registrationDPMS">DPMS iPASS</a></li>
                            <li><a href="/information/34_registrationDPMS">Fee</a></li>
                          </ul>
                        </div>
                        <div className="col-md-4 sitemap_box">
                          <a href="/information/4_nonHongKongDealers"><b>Non-Hong Kong precious metals and stones dealer</b></a>
                          <ul><li><a href="/information/43_nonHongKongDealers">Forms</a></li></ul>
                        </div>
                        <div className="col-md-4 sitemap_box">
                          <a href="/information/5_Guidelines"><b>Guidelines</b></a>
                          <ul>
                            <li><a href="/download/drsguideline/Registration_Guide.pdf" target="_blank">Registration Guide</a></li>
                            <li><a href="/download/drsguideline/AML_CFT_Guideline_en.pdf" target="_blank">Guideline on AML/CFT</a></li>
                            <li><a href="/download/drsguideline/Disciplinary_Action_Guideline_en.pdf" target="_blank">Disciplinary Action Guideline</a></li>
                            <li><a href="/download/drsguideline/Guide_on_Criteria_for_Determining_Fitness_and_Propriety_en.pdf" target="_blank">Guide on Criteria for Determining Fitness and Propriety</a></li>
                            <li><a href="/download/drsguideline/DRS_External_User_Manual_en.pdf" target="_blank">User Manual For DRS</a></li>
                          </ul>
                        </div>
                        <div className="col-md-4 sitemap_box">
                          <a href="/information/6_legislation"><b>Legislation</b></a>
                          <ul>
                            <li><a href="https://www.elegislation.gov.hk/hk/cap615!en" target="_blank">AMLO, Cap. 615</a></li>
                            <li><a href="https://www.elegislation.gov.hk/hk/cap405!en" target="_blank">DTROPO, Cap. 405</a></li>
                            <li><a href="https://www.elegislation.gov.hk/hk/cap455!en" target="_blank">OSCO, Cap. 455</a></li>
                            <li><a href="https://www.elegislation.gov.hk/hk/cap575!en" target="_blank">UNATMO, Cap. 575</a></li>
                            <li><a href="https://www.elegislation.gov.hk/hk/cap537!en" target="_blank">UNSO, Cap. 537</a></li>
                          </ul>
                        </div>
                        <div className="col-md-4 sitemap_box">
                          <a href="/information/7_circularsAndPublications"><b>Circulars and Publications</b></a>
                          <ul>
                            <li><a href="/information/71_circularsAndPublications">Circulars</a></li>
                            <li><a href="/information/72_circularsAndPublications">Publications</a></li>
                          </ul>
                        </div>
                        <div className="col-md-4 sitemap_box">
                          <a href="/information/8_enforcement"><b>Enforcement News</b></a>
                          <ul>
                            <li><a href="/information/81_enforcement">Highlights of Prosecution Cases</a></li>
                            <li><a href="/information/82_enforcement">Highlights of Disciplinary Cases</a></li>
                          </ul>
                        </div>
                        <div className="col-md-4 sitemap_box">
                          <a href="/information/9_publicityAndPresentation"><b>Publicity &amp; Presentation</b></a>
                          <ul>
                            <li><a href="/information/91_publicityAndPresentation">Press Release</a></li>
                            <li><a href="/information/92_publicityAndPresentation">Presentation</a></li>
                            <li><a href="/information/93_publicityAndPresentation">Publicity materials</a></li>
                          </ul>
                        </div>
                        <div className="col-md-4 sitemap_box">
                          <a href="#main_faq" className="sitemap_link"><b>Frequently Asked Questions</b></a>
                        </div>
                        <div className="col-md-4 sitemap_box">
                          <a href="#main_news" className="sitemap_link"><b>Latest News</b></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <div id="head" style={{ marginTop: 'auto' }} className="footerContainer">
          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                  <p className="copyright-text">
                    2023 &copy; |
                    <a href="/common/contactus">Contact us</a> |
                    <a href="/common/imptnotice">Important Notices</a> |
                    <a href="http://www.customs.gov.hk/en/privacy-policy/index.html" className="app-target-blank" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                  </p>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <ul className="social-icons" style={{ listStyle: 'none', margin: 0, padding: 0, textAlign: 'right' }}>
                    <li>
                      <p style={{ margin: 0 }}>Last Revision Date: 2 July 2026</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>

        <p className="ns4"><a href="#mt">Skip to main content</a></p>
      </div>
    </div>
  );
}

export default App;
