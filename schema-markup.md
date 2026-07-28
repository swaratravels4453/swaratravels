# Schema Markup (JSON-LD) — Swara Travels

Ha file madhe ready-to-paste code blocks aahet. Prattyek block kuthe pasave karayche te title madhe sangitla aahe. Prattyek `<script>...</script>` block tumchya HTML page chya `<head>...</head>` madhe, `</head>` tag chya aadhi paste kara.

Kuthe change karayla lagel te `⚠️` ne mark kela aahe.

---

## 1. Sitewide Business schema — SAGLYA pages var paste kara
(index.html, book-cab.html, Ashtavinayak.html, nashik.html, solapur.html, blog-ashtavinayak.html, reviews.html, contact.html — sagalikade same block)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  "@id": "https://swaratravels.vercel.app/#business",
  "name": "Swara Travels",
  "alternateName": "Swara Travels Goregaon East",
  "description": "Outstation cab and taxi service in Mumbai offering fixed-rate, no-surge AC cabs to Nashik, Pune, Solapur, Ashtavinayak Yatra and Shirdi.",
  "url": "https://swaratravels.vercel.app/",
  "telephone": "+91-8104050420",
  "email": "swaratravels4453@gmail.com",
  "priceRange": "₹12–₹18 per km",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Aarey Colony, Goregaon East",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400065",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.1551",
    "longitude": "72.8679"
  },
  "areaServed": [
    "Mumbai", "Pune", "Nashik", "Solapur", "Thane", "Navi Mumbai",
    "Shirdi", "Pandharpur", "Ashtavinayak circuit"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.instagram.com/swaratravels4453/"
  ]
}
</script>
```

⚠️ **Note:**
- `geo` coordinates approximate aahet (Goregaon East area). Google Maps var tumcha exact pin drop karun (right-click → coordinates copy) exact lat/long update kara.
- Jar tumhi Instagram व्यतिरिक्त Facebook page / Google Business Profile / JustDial listing banवला tar te sagle `sameAs` array madhe add kara — jitkya jasta verified third-party links tितका trust signal jasta.
- Ithe purposefully **aggregateRating add केलं nahi**. Tumchya site वरचे 4 testimonials real customer कडून घेतलेले असले तरी, Google che rich-results guidelines सांगतात ki review count फक्त verifiable/genuine असावं (fake किंवा inflated counts मुळे manual penalty येऊ शकते). Ekda tumhi **Google Business Profile** var 5-10+ genuine reviews collect केल्या ki ती rating tithun automatically Google Search/Maps madhe dispaly hoईल — ते jasta credible source aahे kontyahi self-hosted schema peksha.

---

## 2. Homepage FAQ schema — फक्त index.html var

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How to book outstation cab with Swara Travels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WhatsApp us at 8104050420 or fill the form on the website. Tell us pickup city, destination, date and car preference. We confirm with a fixed fare — no app needed, no surge."
      }
    },
    {
      "@type": "Question",
      "name": "Is Swara Travels cheaper than Uber outstation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Uber/Ola charge surge during weekends, festivals and peak hours. Swara Travels gives a fixed outstation rate decided before the trip starts — no hidden charges."
      }
    },
    {
      "@type": "Question",
      "name": "Do you cover Ashtavinayak Yatra from Mumbai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Swara Travels specializes in the Ashtavinayak Yatra from Mumbai and Pune — the full 654 km circuit, all 8 temples, with a 2-day package available."
      }
    },
    {
      "@type": "Question",
      "name": "What are Swara Travels' cab rates per km?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sedan (Dzire/Xcent) starts at ₹12–14 per km, and a 6-seater SUV is ₹16–18 per km for outstation trips. All rates are fixed with no surge."
      }
    },
    {
      "@type": "Question",
      "name": "Are cabs available during Ashadhi Ekadashi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Swara Travels ensures availability during Wari seasons and festivals, unlike ride-hailing apps which often show surge pricing or no availability. Advance booking is recommended to confirm your slot."
      }
    }
  ]
}
</script>
```

---

## 3. Ashtavinayak.html — Service + FAQ schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Ashtavinayak Yatra Cab Tour",
  "name": "Ashtavinayak Yatra Cab from Mumbai & Pune",
  "description": "2-day outstation cab tour covering all 8 sacred Ashtavinayak Ganesh temples across a 654 km circuit — Morgaon, Siddhatek, Pali, Mahad, Theur, Lenyadri, Ozar and Ranjangaon — with fixed fare and the same driver both days.",
  "provider": {
    "@id": "https://swaratravels.vercel.app/#business"
  },
  "areaServed": ["Mumbai", "Pune", "Maharashtra"],
  "url": "https://swaratravels.vercel.app/Ashtavinayak.html"
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many days does the Ashtavinayak Yatra take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2 days is ideal for the full 654 km circuit covering all 8 temples comfortably. A rushed 1-day trip from Pune, starting at 5 AM, is also possible."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cab fare for Ashtavinayak from Mumbai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Swara Travels gives a fixed fare for the Ashtavinayak Yatra with no surge pricing. WhatsApp 8104050420 for current pricing based on car type."
      }
    },
    {
      "@type": "Question",
      "name": "In which order should the 8 Ashtavinayak temples be visited?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Yatra begins and ends at Morgaon, in this sequence: Morgaon, Siddhatek, Pali, Mahad, Theur, Lenyadri, Ozar, Ranjangaon, and back to Morgaon."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Ashtavinayak cab available during Ganesh Chaturthi season?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Booking 2-3 weeks in advance is recommended. Swara Travels gives a fixed fare year-round, unlike ride-hailing apps which show surge pricing during the Chaturthi season."
      }
    }
  ]
}
</script>
```

---

## 4. nashik.html — Service + FAQ schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Mumbai to Nashik Outstation Cab",
  "name": "Mumbai to Nashik Cab — Trimbakeshwar & Shirdi Tour",
  "description": "Outstation cab from Mumbai or Pune to Nashik (approx. 165-170 km, 3-3.5 hrs), covering Trimbakeshwar Jyotirlinga, Panchvati, Saptashrungi Devi and Sula Vineyards, with an optional Shirdi combo.",
  "provider": {
    "@id": "https://swaratravels.vercel.app/#business"
  },
  "areaServed": ["Mumbai", "Pune", "Nashik", "Shirdi"],
  "url": "https://swaratravels.vercel.app/nashik.html"
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the cab fare from Mumbai to Nashik?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Swara Travels offers a fixed outstation fare with no surge pricing. WhatsApp 8104050420 for current pricing; both sedan and 6-seater options are available."
      }
    },
    {
      "@type": "Question",
      "name": "Can I visit Nashik and Shirdi together?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Day 1 covers Nashik darshan (Trimbakeshwar, Panchvati, Kalaram) and Day 2 covers Shirdi Sai Baba, with the same cab and driver throughout."
      }
    },
    {
      "@type": "Question",
      "name": "How far is Nashik from Mumbai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nashik is approximately 165-170 km from Mumbai via NH-3, with a travel time of around 3-3.5 hours by cab in normal traffic."
      }
    },
    {
      "@type": "Question",
      "name": "Can I visit Nashik in one day from Mumbai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Starting at 5-6 AM from Mumbai, Trimbakeshwar, Panchvati, Ramkund, Kalaram and Muktidham can be covered in one day. For Saptashrungi, an overnight stay is recommended."
      }
    }
  ]
}
</script>
```

---

## 5. solapur.html — Service + FAQ schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Mumbai to Solapur Outstation Cab",
  "name": "Mumbai to Solapur Cab — Pandharpur, Akkalkot & Tuljapur Tour",
  "description": "Outstation cab from Mumbai or Pune to the Solapur pilgrimage circuit — Vitthal-Rukmini Temple (Pandharpur), Swami Samarth Temple (Akkalkot) and Tulja Bhavani Shakti Peeth (Tuljapur) — with fixed fare and no surge, including during the Ashadhi Ekadashi Wari season.",
  "provider": {
    "@id": "https://swaratravels.vercel.app/#business"
  },
  "areaServed": ["Mumbai", "Pune", "Solapur", "Pandharpur"],
  "url": "https://swaratravels.vercel.app/solapur.html"
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I book a cab for Pandharpur during Ashadhi Ekadashi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WhatsApp Swara Travels at 8104050420 at least 2-3 weeks before Ashadhi Ekadashi. During Wari season, ride-hailing apps often show high surge or no availability, while Swara Travels guarantees a confirmed fixed-rate cab with advance booking."
      }
    },
    {
      "@type": "Question",
      "name": "Can I cover Pandharpur, Akkalkot and Tuljapur together?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this is the Solapur Pilgrimage Package: Pandharpur on Day 1, then Akkalkot and Tuljapur on Day 2, with the same cab and driver throughout."
      }
    },
    {
      "@type": "Question",
      "name": "How far is Pandharpur from Mumbai by cab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pandharpur is approximately 330-340 km from Mumbai, taking around 5-6 hours by cab via Pune."
      }
    },
    {
      "@type": "Question",
      "name": "Is Tulja Bhavani Temple open during Navratri?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Navratri is the biggest festival at Tulja Bhavani Temple with large crowds, so booking a cab well in advance is recommended."
      }
    },
    {
      "@type": "Question",
      "name": "Can I do a one-day Pandharpur trip from Pune?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Pandharpur is about 180 km from Pune (3-3.5 hours). Starting early allows a same-day visit to Vitthal-Rukmini Temple and Chandrabhaga Ghat."
      }
    }
  ]
}
</script>
```

---

## Testing / verification

Sagle blocks paste kelyanantar, Google chya free tools madhe test kara:

- **Rich Results Test**: https://search.google.com/test/rich-results
- **Schema Markup Validator**: https://validator.schema.org/

Prattyek page cha live URL tya tools madhe takun check kara ki errors nahit.
