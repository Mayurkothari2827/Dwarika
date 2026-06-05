import { j as jsxRuntimeExports } from "../_libs/react.mjs";
const heroImg = "/assets/bg-Dyzp1cSr.png";
const sweetsImg = "/assets/sweets-Canct2yQ.jpg";
const namkeenImg = "/assets/namkeen-jCaSBNaY.jpg";
const bakeryImg = "/assets/bakery-BVTzfzSD.jpg";
const thaliImg = "/assets/thali-DBI-O-1Q.jpg";
const hamperImg = "/assets/hamper-DKLpkeny.jpg";
const restaurantImg = "/assets/restaurant-CWTxZIr4.jpg";
const logoImg = "/assets/logo-Bea9o0ZY.png";
const Ornament = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ornament-divider my-6", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-gold/60" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", className: "text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z", fill: "currentColor", opacity: "0.9" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-gold/60" })
] });
const offerings = [{
  title: "Bikaneri Namkeen",
  desc: "Crisp bhujia, dal moth and time-honoured snacks from the lanes of Bikaner.",
  img: namkeenImg
}, {
  title: "Indian Sweets",
  desc: "Kaju katli, ghewar, milk cake — handcrafted in our halwai tradition.",
  img: sweetsImg
}, {
  title: "Artisan Bakery",
  desc: "Slow-baked cookies, rusks and breads from our wood-fired ovens.",
  img: bakeryImg
}, {
  title: "Family Restaurant",
  desc: "Royal Rajasthani thalis served in a haveli-inspired dining hall.",
  img: thaliImg
}, {
  title: "Festive Hampers",
  desc: "Curated gift boxes of mithai, dry fruits and namkeen for every occasion.",
  img: hamperImg
}, {
  title: "Sweets Counter",
  desc: "An ever-changing showcase of seasonal mithai, made fresh each dawn.",
  img: sweetsImg
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "absolute top-0 left-0 right-0 z-30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-cream", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoImg, alt: "Dwarika Bakery & Restaurant Logo", className: "h-36 w-auto object-contain scale-125 origin-left" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "hidden md:flex items-center gap-10 font-serif-alt text-[11px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#offerings", className: "hover:text-gold transition", children: "OFFERINGS" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#heritage", className: "hover:text-gold transition", children: "HERITAGE" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#hampers", className: "hover:text-gold transition", children: "HAMPERS" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#visit", className: "hover:text-gold transition", children: "VISIT" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#visit", className: "hidden md:inline-block border border-gold/70 text-gold px-5 py-2 font-serif-alt text-[11px] hover:bg-gold hover:text-maroon transition", children: "RESERVE" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-screen w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Dwarika Bakery & Restaurant sweets and namkeen", className: "absolute inset-0 w-full h-full object-cover animate-slow-zoom", width: 1920, height: 1080 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-maroon/70 via-maroon/40 to-maroon/90" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-cream", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-6xl md:text-8xl lg:text-9xl font-medium text-balance animate-fade-up", style: {
          animationDelay: "0.1s"
        }, children: "Dwarika Bakery & Restaurant" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-cream/85 italic font-display text-xl md:text-2xl text-balance animate-fade-up", style: {
          animationDelay: "0.2s"
        }, children: '"Where the soul of Bikaner is folded into every sweet, every spice, every meal."' })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "heritage", className: "py-28 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif-alt text-[11px] text-terracotta tracking-[0.3em]", children: "OUR HERITAGE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ornament, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-6xl text-maroon leading-tight", children: "A taste passed down through golden hands." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: "Born in the spice-laden gullies of Bikaner, Dwarika Bakery & Restaurant is more than a sweet house — it is a memory of festivals lit by diyas, of brass thalis steaming with dal baati, of paper-wrapped bhujia carried home in joy. For decades, our halwais have woven cardamom, saffron and ghee into the same recipes that grandmothers still whisper." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed italic font-display text-lg", children: "Pure ingredients. Patient hands. Royal Rajasthani soul." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: restaurantImg, alt: "Dwarika heritage interior", className: "w-full h-[520px] object-cover rounded-sm shadow-2xl", loading: "lazy", width: 1024, height: 1024 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -left-6 bg-cream border border-gold/40 px-6 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-maroon", children: "75+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif-alt text-[10px] text-terracotta tracking-widest", children: "YEARS OF TRADITION" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "offerings", className: "py-28 px-6 bg-maroon text-cream relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10", style: {
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)`,
        backgroundSize: "32px 32px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif-alt text-[11px] text-gold tracking-[0.3em]", children: "WHAT WE CRAFT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ornament, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-6xl text-cream", children: "Six chambers of flavour" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-cream/70 max-w-xl mx-auto", children: "Each counter at Dwarika Bakery & Restaurant is a small world — bound by recipes older than memory." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: offerings.map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative overflow-hidden bg-cream/5 border border-gold/20 hover:border-gold/60 transition-all duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: o.img, alt: o.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700", loading: "lazy", width: 800, height: 1e3 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-maroon via-maroon/30 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif-alt text-[10px] text-gold tracking-[0.3em]", children: [
              "0",
              i + 1
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl text-cream mt-2", children: o.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/70 text-sm mt-2 leading-relaxed", children: o.desc })
          ] })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "hampers", className: "py-28 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hamperImg, alt: "Festive hamper", className: "w-full h-[500px] object-cover rounded-sm shadow-xl", loading: "lazy", width: 800, height: 1e3 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 md:pl-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif-alt text-[11px] text-terracotta tracking-[0.3em]", children: "CURATED FOR CELEBRATION" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ornament, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-6xl text-maroon leading-tight", children: "Hampers that carry the warmth of Rajasthan." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: "From intimate house-warmings to grand Diwali gifting, our hampers arrive wrapped in maroon silk and golden cord — bearing mithai, dry fruits, namkeen and the unmistakable Dwarika Bakery & Restaurant touch. Each box is composed by hand, sealed with care, and ready to delight." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#visit", className: "bg-maroon text-cream px-8 py-3 font-serif-alt text-xs hover:bg-terracotta transition", children: "REQUEST A HAMPER" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#visit", className: "border border-maroon text-maroon px-8 py-3 font-serif-alt text-xs hover:bg-maroon hover:text-cream transition", children: "CORPORATE GIFTING" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 bg-cream border-y border-gold/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "mx-auto text-gold mb-6", width: "32", height: "32", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 11H6a2 2 0 01-2-2V7a4 4 0 014-4h2v4H8v2h2v2zm10 0h-4a2 2 0 01-2-2V7a4 4 0 014-4h2v4h-2v2h2v2z" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-3xl md:text-4xl text-maroon leading-snug text-balance", children: "One bite of Dwarika Bakery & Restaurant's ghewar, and you are no longer in a shop — you are in a Rajasthani courtyard, beneath a sky of marigolds." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif-alt text-[11px] text-terracotta tracking-[0.3em] mt-8", children: "— A LETTER FROM A GUEST" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "visit", className: "py-28 px-6 bg-maroon text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif-alt text-[11px] text-gold tracking-[0.3em]", children: "VISIT US" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ornament, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-6xl text-cream", children: "Come dine at our haveli." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-cream/75 leading-relaxed", children: "Step through our arched doorway in the heart of Bikaner, where lantern light dances across jharokha windows and the air carries the warmth of cardamom and ghee." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-6 font-body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif-alt text-[10px] text-gold tracking-[0.3em]", children: "ADDRESS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl mt-1", children: [
              "Station Road, Bikaner",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Rajasthan, India 334001"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif-alt text-[10px] text-gold tracking-[0.3em]", children: "HOURS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl mt-1", children: "Open daily · 8:00 AM — 11:00 PM" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif-alt text-[10px] text-gold tracking-[0.3em]", children: "RESERVATIONS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl mt-1", children: "+91 151 000 0000" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gold/30 p-10 bg-cream/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl text-gold", children: "Reserve a Table" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/70 mt-2 text-sm", children: "A note to our khansamas — we'll prepare your seats and your favourite mithai." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-8 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-serif-alt text-[10px] text-gold tracking-[0.3em]", children: "NAME" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full bg-transparent border-b border-cream/30 py-2 focus:outline-none focus:border-gold text-cream" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-serif-alt text-[10px] text-gold tracking-[0.3em]", children: "PHONE" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full bg-transparent border-b border-cream/30 py-2 focus:outline-none focus:border-gold text-cream" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-serif-alt text-[10px] text-gold tracking-[0.3em]", children: "DATE" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", className: "w-full bg-transparent border-b border-cream/30 py-2 focus:outline-none focus:border-gold text-cream [color-scheme:dark]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-serif-alt text-[10px] text-gold tracking-[0.3em]", children: "GUESTS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", defaultValue: 2, className: "w-full bg-transparent border-b border-cream/30 py-2 focus:outline-none focus:border-gold text-cream" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "w-full bg-gold text-maroon py-3 font-serif-alt text-xs tracking-[0.3em] hover:bg-cream transition mt-4", children: "REQUEST RESERVATION" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-[oklch(0.18_0.05_25)] text-cream/70 py-14 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoImg, alt: "Dwarika Bakery & Restaurant Logo", className: "h-28 w-auto object-contain" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif-alt text-[10px] tracking-[0.3em] text-cream/50", children: "© DWARIKA BAKERY & RESTAURANT · ALL RIGHTS RESERVED" })
    ] }) })
  ] });
}
export {
  Index as component
};
