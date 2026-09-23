import { useEffect, useState } from 'react'

/* ================================
   HERO IMAGES
================================ */

import heroOne from './assets/hero/hero-1.jpg'
import heroTwo from './assets/hero/hero-2.jpg'
import heroThree from './assets/hero/hero-3.jpg'
import heroFour from './assets/hero/hero-4.jpg'

/* ================================
   DESTINATION IMAGES
================================ */

import sigiriyaImage from './assets/destinations/sigiriya.jpg'
import ellaImage from './assets/destinations/ella.jpg'
import galleImage from './assets/destinations/galle.jpg'
import yalaImage from './assets/destinations/yala.jpg'

/* ================================
   EXPERIENCE IMAGES
================================ */

import trainImage from './assets/experiences/train.jpg'
import safariImage from './assets/experiences/safari.jpg'

/* ================================
   JOURNEY IMAGES
================================ */

import classicImage from './assets/journeys/classic-sri-lanka.jpg'
import wildImage from './assets/journeys/wild-wonder.jpg'
import honeymoonImage from './assets/journeys/honeymoon.jpg'

/* ================================
   GALLERY
================================ */

import galleryOne from './assets/gallery/gallery-1.jpg'
import galleryTwo from './assets/gallery/gallery-2.jpg'
import galleryThree from './assets/gallery/gallery-3.jpg'
import galleryFour from './assets/gallery/gallery-4.jpg'
import galleryFive from './assets/gallery/gallery-5.jpg'
import gallerySix from './assets/gallery/gallery-6.jpg'

/* ================================
   OTHER SECTION IMAGES
================================ */

import teaCountryImage from './assets/sections/tea-country.jpg'
import finalCtaImage from './assets/sections/final-cta.jpg'


type Destination = {
  name: string
  type: string
  description: string
  image: string
}

type Journey = {
  title: string
  detail: string
  route: string
  description: string
  image: string
}


/* ================================
   DATA
================================ */

const heroImages = [
  heroOne,
  heroTwo,
  heroThree,
  heroFour,
]


const destinations: Destination[] = [
  {
    name: 'Sigiriya',
    type: 'Culture & Heritage',
    description:
      'Ancient history, dramatic landscapes and one of Sri Lanka’s most iconic landmarks.',
    image: sigiriyaImage,
  },
  {
    name: 'Ella',
    type: 'Hill Country',
    description:
      'Misty mountains, tea estates and unforgettable railway journeys.',
    image: ellaImage,
  },
  {
    name: 'Galle',
    type: 'Southern Coast',
    description:
      'Historic streets, ocean views and timeless southern charm.',
    image: galleImage,
  },
  {
    name: 'Yala',
    type: 'Wildlife',
    description:
      'Wild landscapes and remarkable encounters with Sri Lanka’s iconic wildlife.',
    image: yalaImage,
  },
]


const journeys: Journey[] = [
  {
    title: 'Classic Sri Lanka',
    detail: '10 Days · 9 Nights',
    route: 'Colombo · Sigiriya · Kandy · Ella · Galle',
    description:
      'A beautifully balanced introduction to culture, mountains and the southern coast.',
    image: classicImage,
  },
  {
    title: 'Wild & Wonder',
    detail: '8 Days · 7 Nights',
    route: 'Wilpattu · Kandy · Yala · Galle',
    description:
      'A journey designed for travellers drawn to wildlife, nature and unforgettable landscapes.',
    image: wildImage,
  },
  {
    title: 'Island Honeymoon',
    detail: '12 Days · 11 Nights',
    route: 'Kandy · Ella · Tangalle · Galle',
    description:
      'Romantic stays, scenic journeys and slow days beside the Indian Ocean.',
    image: honeymoonImage,
  },
]


const gallery = [
  galleryOne,
  galleryTwo,
  galleryThree,
  galleryFour,
  galleryFive,
  gallerySix,
]


const values = [
  {
    number: '01',
    title: 'Local Knowledge',
    text: 'Personal insight from people who know Sri Lanka and its hidden stories.',
  },
  {
    number: '02',
    title: 'Tailor-Made Travel',
    text: 'Every journey can be shaped around your interests, time and pace.',
  },
  {
    number: '03',
    title: 'Trusted Partners',
    text: 'Carefully selected stays, guides and experiences across the island.',
  },
  {
    number: '04',
    title: 'Personal Support',
    text: 'Friendly assistance before, during and throughout your journey.',
  },
]


/* ================================
   ICONS
================================ */

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="icon-arrow"
    >
      <path d="M5 19L19 5" />
      <path d="M8 5H19V16" />
    </svg>
  )
}


function MenuIcon() {
  return (
    <span className="menu-lines">
      <span />
      <span />
    </span>
  )
}


export default function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  const [activeHero, setActiveHero] = useState(0)

  const [activeImage, setActiveImage] =
    useState<number | null>(null)

  const [chatOpen, setChatOpen] = useState(false)

  const [scrolled, setScrolled] = useState(false)


  /* ================================
     AUTO HERO SLIDESHOW
  ================================ */

  useEffect(() => {

    const timer = window.setInterval(() => {

      setActiveHero(
        (current) =>
          (current + 1) % heroImages.length
      )

    }, 6000)


    return () =>
      window.clearInterval(timer)

  }, [])


  /* ================================
     HEADER SCROLL EFFECT
  ================================ */

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(
        window.scrollY > 50
      )

    }


    handleScroll()


    window.addEventListener(
      'scroll',
      handleScroll
    )


    return () => {

      window.removeEventListener(
        'scroll',
        handleScroll
      )

    }

  }, [])


  /* ================================
     DISABLE BODY SCROLL
  ================================ */

  useEffect(() => {

    if (
      menuOpen ||
      activeImage !== null
    ) {

      document.body.style.overflow =
        'hidden'

    } else {

      document.body.style.overflow =
        ''

    }


    return () => {

      document.body.style.overflow =
        ''

    }

  }, [menuOpen, activeImage])


  /* ================================
     SMOOTH SCROLL
  ================================ */

  const scrollTo = (id: string) => {

    setMenuOpen(false)


    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth',
      })

  }


  return (

    <main>


      {/* ========================================
          HEADER
      ======================================== */}

      <header
        className={`header ${
          scrolled
            ? 'header-scrolled'
            : ''
        }`}
      >

        <div className="header-inner">


          <button
            className="brand"
            onClick={() =>
              scrollTo('home')
            }
          >

            <span>
              RS Ceylon
            </span>

            <small>
              Tours
            </small>

          </button>


          {/* Desktop menu */}

          <nav className="desktop-nav">

            <button
              onClick={() =>
                scrollTo('destinations')
              }
            >
              Destinations
            </button>

            <button
              onClick={() =>
                scrollTo('journeys')
              }
            >
              Journeys
            </button>

            <button
              onClick={() =>
                scrollTo('experiences')
              }
            >
              Experiences
            </button>

            <button
              onClick={() =>
                scrollTo('about')
              }
            >
              About
            </button>

            <button
              onClick={() =>
                scrollTo('gallery')
              }
            >
              Gallery
            </button>

          </nav>


          <div className="header-actions">

            <button
              className="header-cta"
              onClick={() =>
                setChatOpen(true)
              }
            >
              Plan your trip

              <ArrowIcon />
            </button>


            <button
              className="mobile-menu-button"
              onClick={() =>
                setMenuOpen(true)
              }
            >
              <MenuIcon />
            </button>

          </div>


        </div>

      </header>


      {/* ========================================
          HERO
      ======================================== */}

      <section
        className="hero"
        id="home"
      >


        <div className="hero-slides">

          {heroImages.map(
            (image, index) => (

              <img
                key={image}
                src={image}
                alt=""
                className={`hero-slide ${
                  activeHero === index
                    ? 'active'
                    : ''
                }`}
              />

            )
          )}

        </div>


        <div className="hero-overlay" />


        <div className="page-container hero-layout">


          <div className="hero-content">


            <p className="eyebrow hero-eyebrow">
              Private journeys across Sri Lanka
            </p>


            <h1>
              Discover
              <br />

              Sri Lanka.
              <br />

              <em>
                Your Way.
              </em>
            </h1>


            <p className="hero-description">

              Meaningful journeys,
              beautiful places and authentic
              Sri Lankan experiences—
              carefully designed around you.

            </p>


            {/* Premium CTA Buttons */}

            <div className="hero-buttons">

              <button
                className="hero-primary"
                onClick={() =>
                  scrollTo('journeys')
                }
              >

                <span>
                  Explore journeys
                </span>

                <ArrowIcon />

              </button>


              <button
                className="hero-secondary"
                onClick={() =>
                  scrollTo('destinations')
                }
              >

                <span>
                  Discover Sri Lanka
                </span>

                <ArrowIcon />

              </button>

            </div>


          </div>


          {/* ========================================
              PREMIUM HERO BOTTOM NAVIGATION
          ======================================== */}

          <div className="hero-bottom">


            <div className="hero-trust">

              <span>
                Tailor-made journeys
              </span>

              <i />


              <span>
                Local experts
              </span>

              <i />


              <span>
                24/7 support
              </span>

            </div>


            <div className="hero-slider">


              {/* Slide Number */}

              <div className="slide-number">

                <span>

                  {String(
                    activeHero + 1
                  ).padStart(
                    2,
                    '0'
                  )}

                </span>


                <small>

                  /{' '}

                  {String(
                    heroImages.length
                  ).padStart(
                    2,
                    '0'
                  )}

                </small>

              </div>


              {/* Slide Progress */}

              <div className="slide-progress">

                {heroImages.map(
                  (image, index) => (

                    <button
                      key={image}
                      className={
                        index === activeHero
                          ? 'active'
                          : ''
                      }
                      onClick={() =>
                        setActiveHero(index)
                      }
                    >

                      <span />

                    </button>

                  )
                )}

              </div>


              {/* Previous / Next */}

              <div className="slide-arrows">

                <button
                  aria-label="Previous image"
                  onClick={() =>
                    setActiveHero(
                      (
                        activeHero +
                        heroImages.length -
                        1
                      ) %
                        heroImages.length
                    )
                  }
                >
                  ←
                </button>


                <button
                  aria-label="Next image"
                  onClick={() =>
                    setActiveHero(
                      (
                        activeHero + 1
                      ) %
                        heroImages.length
                    )
                  }
                >
                  →
                </button>

              </div>


            </div>


          </div>


        </div>


      </section>


      {/* ========================================
          INTRO
      ======================================== */}

      <section
        className="intro-section"
        id="about"
      >

        <div className="page-container">


          <div className="intro-heading">


            <div>

              <p className="eyebrow">
                Welcome to Sri Lanka
              </p>


              <h2>

                Small Island.
                <br />

                <em>
                  Extraordinary Stories.
                </em>

              </h2>

            </div>


            <div className="intro-copy">

              <p>

                Sri Lanka brings ancient
                culture, wildlife,
                misty mountains and
                tropical coastlines together
                in one remarkable island.

              </p>


              <p>

                At RS Ceylon Tours,
                we create thoughtful journeys
                that give you time to
                experience more than the
                famous landmarks.

              </p>

            </div>


          </div>


          <div className="intro-image">

            <img
              src={teaCountryImage}
              alt="Sri Lankan tea country"
            />


            <div className="intro-badge">

              <span>
                ✦
              </span>

              <small>
                Explore differently
              </small>

            </div>


          </div>


        </div>

      </section>


      {/* ========================================
          DESTINATIONS
      ======================================== */}

      <section
        className="destinations-section"
        id="destinations"
      >

        <div className="page-container">


          <div className="section-header">


            <div>

              <p className="eyebrow">
                Places worth travelling for
              </p>


              <h2>

                Discover
                <br />

                <em>
                  Sri Lanka.
                </em>

              </h2>

            </div>


            <div className="section-header-right">

              <p>

                From ancient kingdoms
                to tea-covered mountains
                and warm southern shores.

              </p>


              <button className="text-link">

                View all destinations

                <ArrowIcon />

              </button>

            </div>


          </div>


          <div className="destination-grid">


            {destinations.map(
              (
                destination,
                index
              ) => (

                <article
                  key={destination.name}
                  className={`destination-item destination-${index + 1}`}
                >


                  <img
                    src={destination.image}
                    alt={destination.name}
                  />


                  <div className="destination-gradient" />


                  <div className="destination-content">

                    <p>
                      {destination.type}
                    </p>


                    <h3>
                      {destination.name}
                    </h3>


                    <span>
                      {destination.description}
                    </span>

                  </div>


                  <button
                    className="circle-button"
                    aria-label={`Explore ${destination.name}`}
                  >
                    <ArrowIcon />
                  </button>


                </article>

              )
            )}


          </div>


        </div>

      </section>


      {/* ========================================
          EXPERIENCES
      ======================================== */}

      <section
        className="experiences-section"
        id="experiences"
      >


        <div className="experience-row">


          <div
            className="experience-photo"
            style={{
              backgroundImage:
                `url(${trainImage})`,
            }}
          />


          <div className="experience-info">


            <p className="eyebrow light-eyebrow">
              Through the highlands
            </p>


            <h2>

              One of the world's
              <br />

              <em>
                beautiful rail journeys.
              </em>

            </h2>


            <p>

              Travel through tea-covered
              mountains, cloud forests and
              quiet hill-country villages
              as the train winds towards
              Ella.

            </p>


            <button className="text-link light-text-link">

              Explore train journeys

              <ArrowIcon />

            </button>


          </div>


        </div>


        <div className="experience-row experience-row-reverse">


          <div
            className="experience-photo"
            style={{
              backgroundImage:
                `url(${safariImage})`,
            }}
          />


          <div className="experience-info experience-info-light">


            <p className="eyebrow">
              Wild Sri Lanka
            </p>


            <h2>

              Closer to
              <br />

              <em>
                the wild.
              </em>

            </h2>


            <p>

              Explore national parks where
              elephants wander, colourful
              birds fill the skies and
              leopards move quietly through
              the landscape.

            </p>


            <button className="text-link">

              Explore wildlife

              <ArrowIcon />

            </button>


          </div>


        </div>


      </section>


      {/* ========================================
          JOURNEYS
      ======================================== */}

      <section
        className="journeys-section"
        id="journeys"
      >

        <div className="page-container">


          <div className="section-header">


            <div>

              <p className="eyebrow">
                Designed around you
              </p>


              <h2>

                Signature
                <br />

                <em>
                  Journeys.
                </em>

              </h2>

            </div>


            <div className="section-header-right">

              <p>

                Begin with one of our
                favourite routes,
                then make the journey
                completely your own.

              </p>

            </div>


          </div>


          <div className="journey-grid">


            {journeys.map(
              (journey) => (

                <article
                  className="journey-card"
                  key={journey.title}
                >


                  <div className="journey-image">

                    <img
                      src={journey.image}
                      alt={journey.title}
                    />


                    <span>
                      {journey.detail}
                    </span>

                  </div>


                  <div className="journey-content">


                    <h3>
                      {journey.title}
                    </h3>


                    <p className="journey-description">

                      {journey.description}

                    </p>


                    <p className="journey-route">

                      {journey.route}

                    </p>


                    <button className="text-link">

                      View journey

                      <ArrowIcon />

                    </button>


                  </div>


                </article>

              )
            )}


          </div>


          <div className="center-action">

            <button
              className="outline-button"
              onClick={() =>
                setChatOpen(true)
              }
            >

              Create a custom journey

              <ArrowIcon />

            </button>

          </div>


        </div>

      </section>


      {/* ========================================
          WHY RS CEYLON
      ======================================== */}

      <section className="values-section">

        <div className="page-container values-layout">


          <div className="values-heading">


            <p className="eyebrow light-eyebrow">
              The RS Ceylon way
            </p>


            <h2>

              Thoughtful travel.
              <br />

              <em>
                Genuinely local.
              </em>

            </h2>


            <p>

              Great travel is not only
              about where you go.
              It is about the people,
              moments and details that
              make the journey personal.

            </p>


          </div>


          <div className="values-list">


            {values.map(
              (value) => (

                <div
                  className="value-item"
                  key={value.title}
                >


                  <span>
                    {value.number}
                  </span>


                  <div>

                    <h3>
                      {value.title}
                    </h3>

                    <p>
                      {value.text}
                    </p>

                  </div>


                  <ArrowIcon />


                </div>

              )
            )}


          </div>


        </div>

      </section>


      {/* ========================================
          TESTIMONIAL
      ======================================== */}

      <section className="testimonial-section">

        <div className="page-container testimonial-layout">


          <div>

            <p className="eyebrow">
              From our travellers
            </p>


            <h2>

              Journeys that
              <br />

              <em>
                stay with you.
              </em>

            </h2>

          </div>


          <div className="testimonial-card">


            <div className="stars">
              ★★★★★
            </div>


            <blockquote>

              “Every part of our journey
              felt thoughtful and personal.
              We saw the famous places,
              but it was the small
              unexpected moments that made
              Sri Lanka unforgettable.”

            </blockquote>


            <div className="testimonial-person">

              <strong>
                Elena & Martin
              </strong>

              <span>
                London · Classic Sri Lanka
              </span>

            </div>


          </div>


        </div>

      </section>


      {/* ========================================
          GALLERY
      ======================================== */}

      <section
        className="gallery-section"
        id="gallery"
      >

        <div className="page-container">


          <div className="section-header">


            <div>

              <p className="eyebrow">
                Moments from the island
              </p>


              <h2>

                Sri Lanka,
                <br />

                <em>
                  in every frame.
                </em>

              </h2>

            </div>


            <div className="section-header-right">

              <p>

                Mountains, wildlife,
                beaches and stories found
                between the destinations.

              </p>

            </div>


          </div>


          <div className="gallery-grid">


            {gallery.map(
              (image, index) => (

                <button
                  key={image}
                  className={`gallery-item gallery-item-${index + 1}`}
                  onClick={() =>
                    setActiveImage(index)
                  }
                >

                  <img
                    src={image}
                    alt={`Sri Lanka ${index + 1}`}
                  />

                </button>

              )
            )}


          </div>


        </div>

      </section>


      {/* ========================================
          FINAL CTA
      ======================================== */}

      <section className="final-cta">


        <img
          src={finalCtaImage}
          alt="Sri Lankan landscape"
        />


        <div className="final-cta-overlay" />


        <div className="page-container final-cta-content">


          <p className="eyebrow hero-eyebrow">
            Your journey begins here
          </p>


          <h2>

            Ready to discover
            <br />

            <em>
              Sri Lanka?
            </em>

          </h2>


          <p>

            Tell us what inspires you
            and we will help shape a
            journey that feels entirely
            your own.

          </p>


          <div className="final-actions">


            <button
              className="primary-button"
              onClick={() =>
                setChatOpen(true)
              }
            >

              Plan my journey

              <ArrowIcon />

            </button>


            <button
              className="secondary-button light-link"
              onClick={() =>
                setChatOpen(true)
              }
            >

              Chat on WhatsApp

              <ArrowIcon />

            </button>


          </div>


        </div>


      </section>


      {/* ========================================
          FOOTER
      ======================================== */}

      <footer id="footer">

        <div className="page-container">


          <div className="footer-main">


            <div className="footer-brand-area">


              <div className="footer-logo">

                <span>
                  RS Ceylon
                </span>

                <small>
                  Tours
                </small>

              </div>


              <p>

                Personal journeys across
                Sri Lanka, created with
                local knowledge and
                genuine care.

              </p>


            </div>


            <div className="footer-column">

              <p className="footer-title">
                Explore
              </p>

              <button
                onClick={() =>
                  scrollTo('destinations')
                }
              >
                Destinations
              </button>

              <button
                onClick={() =>
                  scrollTo('journeys')
                }
              >
                Journeys
              </button>

              <button
                onClick={() =>
                  scrollTo('experiences')
                }
              >
                Experiences
              </button>

              <button
                onClick={() =>
                  scrollTo('gallery')
                }
              >
                Gallery
              </button>

            </div>


            <div className="footer-column">

              <p className="footer-title">
                Company
              </p>

              <button
                onClick={() =>
                  scrollTo('about')
                }
              >
                About us
              </button>

              <button>
                Travel information
              </button>

              <button>
                Responsible travel
              </button>

              <button>
                Contact
              </button>

            </div>


            <div className="footer-column">

              <p className="footer-title">
                Connect
              </p>

              <button
                onClick={() =>
                  setChatOpen(true)
                }
              >
                WhatsApp
              </button>

              <button>
                Instagram
              </button>

              <button>
                Facebook
              </button>

            </div>


          </div>


          <div className="footer-bottom">

            <span>
              © {new Date().getFullYear()} RS Ceylon Tours
            </span>

            <span>
              Made in Sri Lanka
            </span>

          </div>


        </div>

      </footer>


      {/* ========================================
          WHATSAPP FLOATING BUTTON
      ======================================== */}

      <button
        className="floating-whatsapp"
        onClick={() =>
          setChatOpen(true)
        }
      >
        WA
      </button>


      {/* ========================================
          MOBILE MENU
      ======================================== */}

      {menuOpen && (

        <div className="mobile-menu">


          <div className="mobile-menu-header">


            <div className="footer-logo">

              <span>
                RS Ceylon
              </span>

              <small>
                Tours
              </small>

            </div>


            <button
              className="close-button"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              ×
            </button>


          </div>


          <nav className="mobile-nav">


            {[
              ['Home', 'home'],
              ['Destinations', 'destinations'],
              ['Journeys', 'journeys'],
              ['Experiences', 'experiences'],
              ['About', 'about'],
              ['Gallery', 'gallery'],
              ['Contact', 'footer'],
            ].map(
              (
                [label, id],
                index
              ) => (

                <button
                  key={label}
                  onClick={() =>
                    scrollTo(id)
                  }
                >

                  <small>
                    0{index + 1}
                  </small>

                  <span>
                    {label}
                  </span>

                  <ArrowIcon />

                </button>

              )
            )}


          </nav>


          <div className="mobile-menu-footer">


            <button
              className="primary-button gold-button"
              onClick={() => {

                setMenuOpen(false)

                setChatOpen(true)

              }}
            >

              Plan your journey

              <ArrowIcon />

            </button>


            <p>
              WhatsApp · Instagram · Facebook
            </p>


          </div>


        </div>

      )}


      {/* ========================================
          CHAT BOX
      ======================================== */}

      {chatOpen && (

        <div className="chat-card">


          <button
            className="chat-close"
            onClick={() =>
              setChatOpen(false)
            }
          >
            ×
          </button>


          <span className="chat-label">
            RS CEYLON TOURS
          </span>


          <h3>
            Ayubowan 👋
          </h3>


          <p>

            Planning a Sri Lanka trip?
            Tell us what you have in mind
            and our local team can help
            shape your journey.

          </p>


          <button className="whatsapp-button">

            Start WhatsApp chat

            <ArrowIcon />

          </button>


        </div>

      )}


      {/* ========================================
          GALLERY LIGHTBOX
      ======================================== */}

      {activeImage !== null && (

        <div className="lightbox">


          <button
            className="lightbox-close"
            onClick={() =>
              setActiveImage(null)
            }
          >
            ×
          </button>


          <img
            src={gallery[activeImage]}
            alt="Sri Lanka"
          />


          <div className="lightbox-navigation">


            <button
              onClick={() =>
                setActiveImage(
                  (
                    activeImage +
                    gallery.length -
                    1
                  ) %
                    gallery.length
                )
              }
            >
              ←
            </button>


            <span>

              {String(
                activeImage + 1
              ).padStart(
                2,
                '0'
              )}

              {' / '}

              {String(
                gallery.length
              ).padStart(
                2,
                '0'
              )}

            </span>


            <button
              onClick={() =>
                setActiveImage(
                  (
                    activeImage + 1
                  ) %
                    gallery.length
                )
              }
            >
              →
            </button>


          </div>


        </div>

      )}


    </main>

  )
}