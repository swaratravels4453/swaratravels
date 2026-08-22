/* ============================================================
   SWARA TRAVELS — Site Scripts
   ============================================================ */

/* ---------- Mobile nav toggle ---------- */
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  if (nav) nav.classList.toggle("active");
}

function toggleDropdown(e) {
  e.preventDefault();
  const menu = document.getElementById("dropdownMenu");
  if (menu) menu.classList.toggle("show");
}

document.addEventListener("click", function (e) {
  const nav = document.getElementById("navMenu");
  const toggle = document.querySelector(".menu-toggle");
  if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove("active");
  }
});

/* ---------- Smooth scroll to booking ---------- */
function scrollBooking() {
  const el = document.getElementById("booking");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

/* ---------- Fare calculator ---------- */
function calculateFare() {
  const kmEl = document.getElementById("km");
  const fareText = document.getElementById("fare");
  if (!kmEl || !fareText) return;

  const km = kmEl.value;
  if (km === "" || km <= 0) {
    fareText.innerText = "Please enter a valid distance.";
    return;
  }

  const ratePerKm = 14;
  const totalFare = km * ratePerKm;
  fareText.innerText = "Estimated Fare: ₹" + totalFare + " (approx, confirmed on enquiry)";
}

/* ---------- Booking form submit (WhatsApp + Google Sheet) ---------- */
const bookingFormEl = document.getElementById("bookingForm");
if (bookingFormEl) {
  bookingFormEl.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const km = document.getElementById("km") ? document.getElementById("km").value.trim() : "";
    const car = document.getElementById("car").value;

    // Optional extra fields — only present on the dedicated Book Cab page
    const pickupEl = document.getElementById("pickup");
    const destinationEl = document.getElementById("destination");
    const dateEl = document.getElementById("travelDate");
    const pickup = pickupEl ? pickupEl.value.trim() : "";
    const destination = destinationEl ? destinationEl.value.trim() : "";
    const travelDate = dateEl ? dateEl.value.trim() : "";

    if (!name || !mobile || !car) {
      alert("Please fill all required details.");
      return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzEJ9hcwrjpASSqmPIeMkEBLVUy9IbrJXwetYNUbzKLInrlQb2br3D6NofXhx1h1hHT/exec";

    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("mobile", mobile);
    formData.append("km", km);
    formData.append("car", car);
    if (pickup) formData.append("pickup", pickup);
    if (destination) formData.append("destination", destination);
    if (travelDate) formData.append("travelDate", travelDate);

    try {
      const response = await fetch(scriptURL, { method: "POST", body: formData });
      await response.text();

      const routeLine = pickup || destination
        ? `Route: ${pickup || "Not specified"} to ${destination || "Not specified"}\n`
        : "";
      const dateLine = travelDate ? `Travel Date: ${travelDate}\n` : "";

      const message =
        `Hello Swara Travels,\n\nI want to book a cab.\n\nName: ${name}\nMobile: ${mobile}\n${routeLine}${dateLine}Selected Car: ${car}\nDistance: ${km || "Not entered"} KM`;

      const whatsappURL = "https://wa.me/918104050420?text=" + encodeURIComponent(message);
      window.open(whatsappURL, "_blank");

      alert("Booking sent successfully! We will confirm shortly on WhatsApp.");
      bookingFormEl.reset();
      const fareEl = document.getElementById("fare");
      if (fareEl) fareEl.innerText = "";
    } catch (error) {
      alert("Could not connect right now. Please book directly on WhatsApp.");
      console.error(error);
    }
  });
}

/* ---------- Bottom nav active state on click ---------- */
const navItems = document.querySelectorAll(".bottom-nav .nav-item");
if (navItems.length) {
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

/* ---------- Reveal on scroll ---------- */
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in-view"));
}

/* ---------- FAQ accordion ---------- */
document.querySelectorAll(".faq-question").forEach((q) => {
  q.addEventListener("click", () => {
    const item = q.closest(".faq-item");
    const wasOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach((el) => {
      el.classList.remove("open");
      el.querySelector(".faq-answer").style.maxHeight = null;
    });
    if (!wasOpen) {
      item.classList.add("open");
      const answer = item.querySelector(".faq-answer");
      answer.style.maxHeight = answer.scrollHeight + 40 + "px";
    }
  });
});

/* ---------- Trust stat counter animation ---------- */
function animateCounter(el) {
  const target = parseInt(el.getAttribute("data-count"), 10);
  if (isNaN(target)) return;
  const suffix = el.getAttribute("data-suffix") || "";
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(progress * target);
    el.innerText = value + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else el.innerText = target + suffix;
  }
  requestAnimationFrame(tick);
}

const counterEls = document.querySelectorAll("[data-count]");
if (counterEls.length && "IntersectionObserver" in window) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counterEls.forEach((el) => counterObserver.observe(el));
}
