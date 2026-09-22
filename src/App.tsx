import { useEffect, useState } from 'react'

type Destination = {
  name: string
  type: string
  image: string
}

const destinations: Destination[] = [
  { name: 'Sigiriya', type: 'Ancient kingdom', image: 'https://images.unsplash.com/photo-1566296314736-6eaac1ca2d25?auto=format&fit=crop&w=900&q=85' },
  { name: 'Ella', type: 'Hill country', image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=900&q=85' },
  { name: 'Galle', type: 'Southern coast', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=900&q=85' },
  { name: 'Yala', type: 'Wild frontier', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=900&q=85' },
]

const journeys = [
  { title: 'Classic Sri Lanka', detail: '10 days / 9 nights', route: 'Colombo · Sigiriya · Kandy · Ella · Galle', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85' },
  { title: 'Wild & Wonder', detail: '8 days / 7 nights', route: 'Wilpattu · Kandy · Yala · Galle', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=85' },
  { title: 'Island Honeymoon', detail: '12 days / 11 nights', route: 'Kandy · Ella · Tangalle · Galle', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85' },
]

const gallery = [
  'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1566296314736-6eaac1ca2d25?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=85',
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=85',
]

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<number | null>(null)
  const [footerOpen, setFooterOpen] = useState<string | null>(null)
  const [selectedMap, setSelectedMap] = useState('Ella')

  useEffect(() => {
    document.body.style.overflow = menuOpen || activeImage !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, activeImage])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <header className="topbar">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Return home"><span>Serendib</span><i>Journeys</i></button>
        <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><span></span><span></span></button>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Discover Sri Lanka</p>
          <h1>Journeys<br />You’ll Remember<br /><em>Forever.</em></h1>
          <p className="hero-copy">A considered way to experience the island—through its wild places, quiet rituals and generous people.</p>
          <div className="hero-actions">
            <button className="button light-button" onClick={() => scrollTo('destinations')}>Explore Sri Lanka <Arrow /></button>
            <button className="text-button" onClick={() => scrollTo('journeys')}>Plan your journey <span>→</span></button>
          </div>
        </div>
        <div className="scroll-cue"><span></span> Scroll to wander</div>
      </section>

      <section className="intro section-pad">
        <p className="eyebrow">The island, unveiled</p>
        <h2>A Small Island.<br /><em>A Thousand Stories.</em></h2>
        <div className="intro-grid">
          <p>From ancient kingdoms rising above the jungle to tea-covered mountains and the Indian Ocean beyond, Sri Lanka rewards those who travel slowly.</p>
          <div className="portrait-wrap"><img src="https://images.unsplash.com/photo-1531177071278-4e324ad5962e?auto=format&fit=crop&w=900&q=85" alt="Sri Lankan tea country" /><span className="sun-mark">✦</span></div>
        </div>
      </section>

      <section className="destinations section-pad" id="destinations">
        <div className="section-heading"><div><p className="eyebrow">Places with a pulse</p><h2>Discover<br />Sri Lanka</h2></div><p>From ancient kingdoms to endless coastlines.</p></div>
        <div className="rail">
          {destinations.map((place) => <article className="destination-card" key={place.name}><img src={place.image} alt={place.name} /><div className="card-overlay"><p>{place.type}</p><h3>{place.name}</h3><button aria-label={`Explore ${place.name}`}>↗</button></div></article>)}
        </div>
        <button className="underlined" onClick={() => setMenuOpen(true)}>View all destinations <span>→</span></button>
      </section>

      <section className="experience" id="experiences">
        <div className="experience-image train" /><div className="experience-copy"><p className="eyebrow light">Move with the landscape</p><h2>Scenic Train<br /><em>Journeys</em></h2><p>Watch mist lift from the valleys as the world glides past your window.</p><button className="text-button on-dark">Explore the experience <Arrow /></button></div>
        <div className="experience-image safari" /><div className="experience-copy cream"><p className="eyebrow">A wilder kind of luxury</p><h2>Wildlife<br /><em>Safaris</em></h2><p>Unhurried moments in the company of elephants, leopards and luminous birdlife.</p><button className="text-button">Explore the experience <Arrow /></button></div>
      </section>

      <section className="journeys section-pad" id="journeys">
        <p className="eyebrow">Made around you</p><h2>Journeys Designed<br /><em>Around You.</em></h2>
        <div className="rail journey-rail">{journeys.map((journey) => <article className="journey-card" key={journey.title}><img src={journey.image} alt="" /><div><p className="smallcaps">{journey.detail}</p><h3>{journey.title}</h3><p>{journey.route}</p><button className="underlined">View journey <Arrow /></button></div></article>)}</div>
      </section>

      <section className="map-section section-pad">
        <p className="eyebrow">Find your way</p><h2>Explore the Island</h2>
        <div className="map-box"><div className="island-shape" />{[['Sigiriya','pin-sig'],['Kandy','pin-kandy'],['Ella','pin-ella'],['Galle','pin-galle'],['Yala','pin-yala']].map(([place, cls]) => <button key={place} className={`map-pin ${cls} ${selectedMap === place ? 'selected' : ''}`} onClick={() => setSelectedMap(place)}>{place}</button>)}<div className="map-note"><span>✦</span><div><strong>{selectedMap}</strong><p>{selectedMap === 'Ella' ? 'Misty mountains & railway stories.' : 'A beautiful chapter of the island.'}</p></div><Arrow /></div></div>
      </section>

      <section className="values section-pad"><p className="eyebrow light">The serendib way</p><h2>Travel, deeply<br /><em>considered.</em></h2>{['Local Expertise','Tailor-Made Journeys','Trusted Local Partners','24/7 Travel Support','Authentic Sri Lankan Experiences'].map((value, i) => <div className="value-row" key={value}><span>0{i + 1}</span><h3>{value}</h3><Arrow /></div>)}</section>

      <section className="story"><img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85" alt="A lush Sri Lankan scene" /><div><p className="eyebrow light">Your own pace</p><h2>Come as a Traveller.<br /><em>Leave with a Story.</em></h2><button className="button light-button">Discover our Sri Lanka <Arrow /></button></div></section>

      <section className="testimonials section-pad"><p className="eyebrow">In their words</p><h2>Stories From<br /><em>Our Travellers.</em></h2><div className="rail"><article className="testimonial"><span className="stars">★★★★★</span><blockquote>“Every moment felt personal, from the tiny tea estate to the sunrise at Sigiriya. It was the most beautifully paced trip of our lives.”</blockquote><div><strong>Elena & Martin</strong><span>London, UK · Classic Sri Lanka</span></div></article><article className="testimonial pale"><span className="stars">★★★★★</span><blockquote>“They showed us an island we never could have found on our own. Thoughtful, joyful, extraordinary.”</blockquote><div><strong>Sara Miles</strong><span>Melbourne, Australia · Wild & Wonder</span></div></article></div></section>

      <section className="gallery section-pad" id="gallery"><div className="section-heading"><div><p className="eyebrow">From the road</p><h2>Postcards From<br /><em>Sri Lanka.</em></h2></div><p>Tap a moment to linger.</p></div><div className="masonry">{gallery.map((src, i) => <button className={`gallery-image image-${i}`} onClick={() => setActiveImage(i)} key={src}><img src={src} alt={`Sri Lanka travel memory ${i + 1}`} /></button>)}</div></section>

      <section className="final-cta"><img src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1400&q=85" alt="Mountains in Ella" /><div><p className="eyebrow light">It starts with a hello</p><h2>Your Sri Lankan<br /><em>Story Starts Here.</em></h2><p>Tell us what your dream trip looks like. Our local experts will take it from there.</p><button className="button light-button" onClick={() => setChatOpen(true)}>Plan my journey <Arrow /></button><button className="text-button on-dark" onClick={() => setChatOpen(true)}>Chat on WhatsApp <span>→</span></button></div></section>

      <footer><div className="footer-brand"><span>Serendib</span><i>Journeys</i><p>Thoughtfully crafted journeys across the island we call home.</p></div>{['Explore','Company','Travel Information'].map((item) => <div className="footer-accordion" key={item}><button onClick={() => setFooterOpen(footerOpen === item ? null : item)}>{item}<span>{footerOpen === item ? '−' : '+'}</span></button>{footerOpen === item && <p>{item === 'Explore' ? 'Destinations · Experiences · Journeys' : item === 'Company' ? 'About us · Journal · Contact' : 'Travel notes · Responsible travel · FAQ'}</p>}</div>)}<div className="footer-bottom"><p>Made with love in Sri Lanka.</p><p>◎ &nbsp; ◌</p></div></footer>

      <button className="whatsapp" onClick={() => setChatOpen(true)} aria-label="Chat on WhatsApp">◔</button>

      {menuOpen && <aside className="menu-overlay"><button className="close" onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button><div className="menu-logo"><span>Serendib</span><i>Journeys</i></div><nav>{[['Home','home'],['Destinations','destinations'],['Tour Packages','journeys'],['Experiences','experiences'],['Gallery','gallery'],['About Sri Lanka','intro'],['About Us','values'],['Contact','footer']].map(([label, id], i) => <button key={label} onClick={() => scrollTo(id)}><small>0{i + 1}</small>{label}<Arrow /></button>)}</nav><div className="menu-bottom"><button className="button gold-button" onClick={() => { setMenuOpen(false); setChatOpen(true) }}>Plan your journey</button><p>WhatsApp &nbsp; · &nbsp; Instagram &nbsp; · &nbsp; Facebook</p></div></aside>}
      {chatOpen && <div className="chat-pop"><button className="chat-close" onClick={() => setChatOpen(false)}>×</button><span className="chat-icon">◔</span><h3>Hello <em>👋</em></h3><p>Planning a trip to Sri Lanka? Talk to one of our local travel experts.</p><button className="button chat-button">Start WhatsApp chat <Arrow /></button></div>}
      {activeImage !== null && <div className="lightbox"><button className="close" onClick={() => setActiveImage(null)}>×</button><img src={gallery[activeImage]} alt="Expanded Sri Lanka travel memory" /><div className="lightbox-controls"><button onClick={() => setActiveImage((activeImage + gallery.length - 1) % gallery.length)}>←</button><span>{activeImage + 1} / {gallery.length}</span><button onClick={() => setActiveImage((activeImage + 1) % gallery.length)}>→</button></div></div>}
    </main>
  )
}
