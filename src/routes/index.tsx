import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-sweets.jpg";
import sweetsImg from "@/assets/sweets.jpg";
import namkeenImg from "@/assets/namkeen.jpg";
import bakeryImg from "@/assets/bakery.jpg";
import thaliImg from "@/assets/thali.jpg";
import hamperImg from "@/assets/hamper.jpg";
import restaurantImg from "@/assets/restaurant.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dwarika Bakery & Restaurant — Heritage Sweets, Namkeen & Restaurant in Bikaner" },
      { name: "description", content: "Dwarika Bakery & Restaurant, Bikaner's beloved name for authentic Bikaneri namkeen, Indian mithai, artisan bakery, festive hampers and a heritage family restaurant in Rajasthan." },
      { property: "og:title", content: "Dwarika Bakery & Restaurant — Bikaner's Heritage Sweet House" },
      { property: "og:description", content: "Authentic Bikaneri namkeen, Indian sweets, bakery, hampers and family dining." },
    ],
  }),
  component: Index,
});

const Ornament = () => (
  <div className="ornament-divider my-6">
    <span className="h-px w-12 bg-gold/60" />
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gold">
      <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="currentColor" opacity="0.9"/>
    </svg>
    <span className="h-px w-12 bg-gold/60" />
  </div>
);

const offerings = [
  { title: "Bikaneri Namkeen", desc: "Crisp bhujia, dal moth and time-honoured snacks from the lanes of Bikaner.", img: namkeenImg },
  { title: "Indian Sweets", desc: "Kaju katli, ghewar, milk cake — handcrafted in our halwai tradition.", img: sweetsImg },
  { title: "Artisan Bakery", desc: "Slow-baked cookies, rusks and breads from our wood-fired ovens.", img: bakeryImg },
  { title: "Family Restaurant", desc: "Royal Rajasthani thalis served in a haveli-inspired dining hall.", img: thaliImg },
  { title: "Festive Hampers", desc: "Curated gift boxes of mithai, dry fruits and namkeen for every occasion.", img: hamperImg },
  { title: "Sweets Counter", desc: "An ever-changing showcase of seasonal mithai, made fresh each dawn.", img: sweetsImg },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-cream">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gold/60 flex items-center justify-center font-display text-gold text-xl">D</div>
            <div>
              <div className="font-display text-xl leading-none">Dwarika Bakery & Restaurant</div>
              <div className="font-serif-alt text-[10px] text-gold/80 mt-1">EST · BIKANER</div>
            </div>
          </div>
          <ul className="hidden md:flex items-center gap-10 font-serif-alt text-[11px]">
            <li><a href="#offerings" className="hover:text-gold transition">OFFERINGS</a></li>
            <li><a href="#heritage" className="hover:text-gold transition">HERITAGE</a></li>
            <li><a href="#hampers" className="hover:text-gold transition">HAMPERS</a></li>
            <li><a href="#visit" className="hover:text-gold transition">VISIT</a></li>
          </ul>
          <a href="#visit" className="hidden md:inline-block border border-gold/70 text-gold px-5 py-2 font-serif-alt text-[11px] hover:bg-gold hover:text-maroon transition">RESERVE</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img src={heroImg} alt="Dwarika sweets and namkeen" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/70 via-maroon/40 to-maroon/90" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-cream">
          <div className="font-serif-alt text-[11px] text-gold tracking-[0.4em] animate-fade-up">SINCE GENERATIONS · BIKANER, RAJASTHAN</div>
          <Ornament />
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-medium text-balance animate-fade-up" style={{animationDelay:'0.1s'}}>
            Dwarika Bakery & Restaurant
          </h1>
          <p className="mt-4 max-w-xl text-cream/85 italic font-display text-xl md:text-2xl text-balance animate-fade-up" style={{animationDelay:'0.2s'}}>
            "Where the soul of Bikaner is folded into every sweet, every spice, every meal."
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center animate-fade-up" style={{animationDelay:'0.3s'}}>
            <a href="#offerings" className="bg-gold text-maroon px-8 py-3 font-serif-alt text-xs hover:bg-cream transition">EXPLORE OUR TRADITION</a>
            <a href="#visit" className="border border-cream/40 text-cream px-8 py-3 font-serif-alt text-xs hover:border-gold hover:text-gold transition">VISIT THE HAVELI</a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 font-serif-alt text-[10px] tracking-[0.3em]">SCROLL ↓</div>
      </section>

      {/* INTRO */}
      <section id="heritage" className="py-28 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-serif-alt text-[11px] text-terracotta tracking-[0.3em]">OUR HERITAGE</div>
            <Ornament />
            <h2 className="font-display text-5xl md:text-6xl text-maroon leading-tight">
              A taste passed down through golden hands.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Born in the spice-laden gullies of Bikaner, Dwarika Bakery & Restaurant is more than a sweet house —
              it is a memory of festivals lit by diyas, of brass thalis steaming with dal baati,
              of paper-wrapped bhujia carried home in joy. For decades, our halwais have woven
              cardamom, saffron and ghee into the same recipes that grandmothers still whisper.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed italic font-display text-lg">
              Pure ingredients. Patient hands. Royal Rajasthani soul.
            </p>
          </div>
          <div className="relative">
            <img src={restaurantImg} alt="Dwarika heritage interior" className="w-full h-[520px] object-cover rounded-sm shadow-2xl" loading="lazy" width={1024} height={1024} />
            <div className="absolute -bottom-6 -left-6 bg-cream border border-gold/40 px-6 py-4">
              <div className="font-display text-3xl text-maroon">75+</div>
              <div className="font-serif-alt text-[10px] text-terracotta tracking-widest">YEARS OF TRADITION</div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section id="offerings" className="py-28 px-6 bg-maroon text-cream relative">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: `radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)`, backgroundSize: '32px 32px'}} />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="font-serif-alt text-[11px] text-gold tracking-[0.3em]">WHAT WE CRAFT</div>
            <Ornament />
            <h2 className="font-display text-5xl md:text-6xl text-cream">Six chambers of flavour</h2>
            <p className="mt-4 text-cream/70 max-w-xl mx-auto">Each counter at Dwarika Bakery & Restaurant is a small world — bound by recipes older than memory.</p>
          </div>
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((o, i) => (
              <article key={i} className="group relative overflow-hidden bg-cream/5 border border-gold/20 hover:border-gold/60 transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={o.img} alt={o.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={800} height={1000} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="font-serif-alt text-[10px] text-gold tracking-[0.3em]">0{i+1}</div>
                  <h3 className="font-display text-3xl text-cream mt-2">{o.title}</h3>
                  <p className="text-cream/70 text-sm mt-2 leading-relaxed">{o.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HAMPERS BANNER */}
      <section id="hampers" className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <img src={hamperImg} alt="Festive hamper" className="w-full h-[500px] object-cover rounded-sm shadow-xl" loading="lazy" width={800} height={1000}/>
          </div>
          <div className="md:col-span-3 md:pl-8">
            <div className="font-serif-alt text-[11px] text-terracotta tracking-[0.3em]">CURATED FOR CELEBRATION</div>
            <Ornament />
            <h2 className="font-display text-5xl md:text-6xl text-maroon leading-tight">
              Hampers that carry the warmth of Rajasthan.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              From intimate house-warmings to grand Diwali gifting, our hampers arrive wrapped in
              maroon silk and golden cord — bearing mithai, dry fruits, namkeen and the unmistakable
              Dwarika Bakery & Restaurant touch. Each box is composed by hand, sealed with care, and ready to delight.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#visit" className="bg-maroon text-cream px-8 py-3 font-serif-alt text-xs hover:bg-terracotta transition">REQUEST A HAMPER</a>
              <a href="#visit" className="border border-maroon text-maroon px-8 py-3 font-serif-alt text-xs hover:bg-maroon hover:text-cream transition">CORPORATE GIFTING</a>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 px-6 bg-cream border-y border-gold/30">
        <div className="max-w-3xl mx-auto text-center">
          <svg className="mx-auto text-gold mb-6" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M10 11H6a2 2 0 01-2-2V7a4 4 0 014-4h2v4H8v2h2v2zm10 0h-4a2 2 0 01-2-2V7a4 4 0 014-4h2v4h-2v2h2v2z"/></svg>
          <p className="font-display italic text-3xl md:text-4xl text-maroon leading-snug text-balance">
            One bite of Dwarika Bakery & Restaurant's ghewar, and you are no longer in a shop — you are in a Rajasthani courtyard, beneath a sky of marigolds.
          </p>
          <div className="font-serif-alt text-[11px] text-terracotta tracking-[0.3em] mt-8">— A LETTER FROM A GUEST</div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-28 px-6 bg-maroon text-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div className="font-serif-alt text-[11px] text-gold tracking-[0.3em]">VISIT US</div>
            <Ornament />
            <h2 className="font-display text-5xl md:text-6xl text-cream">Come dine at our haveli.</h2>
            <p className="mt-6 text-cream/75 leading-relaxed">
              Step through our arched doorway in the heart of Bikaner, where lantern light dances
              across jharokha windows and the air carries the warmth of cardamom and ghee.
            </p>
            <div className="mt-10 space-y-6 font-body">
              <div>
                <div className="font-serif-alt text-[10px] text-gold tracking-[0.3em]">ADDRESS</div>
                <p className="font-display text-xl mt-1">Station Road, Bikaner<br/>Rajasthan, India 334001</p>
              </div>
              <div>
                <div className="font-serif-alt text-[10px] text-gold tracking-[0.3em]">HOURS</div>
                <p className="font-display text-xl mt-1">Open daily · 8:00 AM — 11:00 PM</p>
              </div>
              <div>
                <div className="font-serif-alt text-[10px] text-gold tracking-[0.3em]">RESERVATIONS</div>
                <p className="font-display text-xl mt-1">+91 151 000 0000</p>
              </div>
            </div>
          </div>
          <div className="border border-gold/30 p-10 bg-cream/5">
            <h3 className="font-display text-3xl text-gold">Reserve a Table</h3>
            <p className="text-cream/70 mt-2 text-sm">A note to our khansamas — we'll prepare your seats and your favourite mithai.</p>
            <form className="mt-8 space-y-5">
              <div>
                <label className="font-serif-alt text-[10px] text-gold tracking-[0.3em]">NAME</label>
                <input className="w-full bg-transparent border-b border-cream/30 py-2 focus:outline-none focus:border-gold text-cream" />
              </div>
              <div>
                <label className="font-serif-alt text-[10px] text-gold tracking-[0.3em]">PHONE</label>
                <input className="w-full bg-transparent border-b border-cream/30 py-2 focus:outline-none focus:border-gold text-cream" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="font-serif-alt text-[10px] text-gold tracking-[0.3em]">DATE</label>
                  <input type="date" className="w-full bg-transparent border-b border-cream/30 py-2 focus:outline-none focus:border-gold text-cream [color-scheme:dark]" />
                </div>
                <div>
                  <label className="font-serif-alt text-[10px] text-gold tracking-[0.3em]">GUESTS</label>
                  <input type="number" defaultValue={2} className="w-full bg-transparent border-b border-cream/30 py-2 focus:outline-none focus:border-gold text-cream" />
                </div>
              </div>
              <button type="button" className="w-full bg-gold text-maroon py-3 font-serif-alt text-xs tracking-[0.3em] hover:bg-cream transition mt-4">
                REQUEST RESERVATION
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[oklch(0.18_0.05_25)] text-cream/70 py-14 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gold/60 flex items-center justify-center font-display text-gold text-xl">D</div>
            <div>
              <div className="font-display text-xl text-cream leading-none">Dwarika</div>
              <div className="font-serif-alt text-[10px] text-gold/70 mt-1">BIKANER · RAJASTHAN</div>
            </div>
          </div>
          <p className="font-serif-alt text-[10px] tracking-[0.3em] text-cream/50">© DWARIKA HERITAGE SWEET HOUSE · ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
}
