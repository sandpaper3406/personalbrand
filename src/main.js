const ventures = [
  {
    name: "Virtumarc",
    focus: "Managed IT Services",
    role: "Co-Founder & Chief Executive Officer",
    description:
      "Managed IT, managed compliance, cybersecurity, and technology consulting for organizations that need dependable operations and frameworks such as NIST 800-171, CMMC, SOC 2, HIPAA, PCI-DSS, and ISO 27001 treated seriously.",
    link: "https://virtumarc.com"
  },
  {
    name: "Virtumarc Government",
    focus: "Government Technology",
    role: "Co-Founder & Chief Executive Officer",
    description:
      "Vertically integrated technology support for the federal government and government contracting community, built around compliance awareness, contract performance, and long-term public-sector execution.",
    link: "https://virtumarcgov.com"
  },
  {
    name: "Atlas Voice Systems",
    focus: "Voice and Communications",
    role: "Founder & Managing Member",
    description:
      "Communications solutions for teams that need reliable voice systems, clean implementation, and guidance through the messy middle of telephony modernization.",
    link: "https://atlasvoicesystems.com"
  },
  {
    name: "My Virtual Hero",
    focus: "Digital Operations and Support",
    role: "Co-Founder & Managing Director",
    description:
      "A venture designed around practical support, modern workflows, and the systems small teams need to move faster without losing quality or personal service.",
    link: "https://myvirtualhero.com"
  },
  {
    name: "GDX Development",
    focus: "Product and Technical Strategy",
    role: "Chief Technology Officer & Advisory",
    description:
      "A Chief Technology Officer and advisory role supporting technology implementation, product efforts, infrastructure planning, bespoke communications, and visualization work connected to national defense initiatives.",
    link: "https://gdxdevelopment.com"
  },
  {
    name: "Epolita",
    focus: "Shared Services and Venture Support",
    role: "Co-Founder & Managing Member",
    description:
      "A shared services company supporting James's ventures with operating infrastructure, administrative systems, internal coordination, and the back-office discipline that helps the portfolio move cleanly.",
    link: "https://epolita.com"
  }
];

const highlights = [
  "Builds and scales technology companies for enterprise value and buyer readiness",
  "Operator across managed IT, federal programs, software, VoIP, and compliance",
  "Experience with NIST, CMMC, SOC 2, HIPAA, PCI-DSS, ISO 27001, and FedRAMP environments",
  "Rotary, civic, and nonprofit leadership across Rotary District 6950 and Tampa Bay"
];

const journey = [
  {
    year: "Operator",
    title: "Built around execution and transferability",
    body: "James structures companies to scale cleanly: standardized offerings, disciplined pricing, focused technology stacks, and teams that can execute without dependency on ownership."
  },
  {
    year: "Growth",
    title: "Commercial and government environments",
    body: "His work spans managed services, federal programs, compliance-driven delivery, communications, and advisory roles where risk, revenue quality, and operational maturity matter."
  },
  {
    year: "Service",
    title: "Leadership beyond the company",
    body: "James has served as a two-term City Commissioner and held Rotary leadership roles including Rotary District 6950 Public Image Chair, club president, S4TL board member, and Rotarian of the Year."
  }
];

const topics = [
  "Technology Operations",
  "Leadership",
  "Entrepreneurship",
  "Cybersecurity",
  "Managed Services",
  "Government Technology",
  "Team Building",
  "Acquisition Readiness",
  "Service Leadership"
];

const leadershipProof = [
  "Two-term City Commissioner, City of San Antonio, FL",
  "Rotary District 6950 Public Image Chair",
  "Seminar for Tomorrow's Leaders Board Member",
  "Past President, Rotary Club of San Antonio (FL)",
  "President, Rotary Club of San Antonio (FL) Fund"
];

const insights = [
  {
    label: "Operating Note",
    title: "Clean companies are easier to scale, operate, and transfer.",
    body: "A short-form essay series for leaders thinking about service maturity, EBITDA growth, buyer readiness, and the operating habits that create durable enterprise value."
  },
  {
    label: "Field Briefing",
    title: "Compliance is an operating model, not a checkbox.",
    body: "Practical guidance on NIST, CMMC, SOC 2, federal programs, managed services, and the delivery discipline that separates vendors from serious partners."
  },
  {
    label: "Leadership Lens",
    title: "Service leadership scales when structure supports it.",
    body: "Reflections on Rotary, civic leadership, youth development, and building organizations where people can connect professional capability to meaningful impact."
  }
];

const app = document.querySelector("#app");

function iconArrow() {
  return `
    <svg aria-hidden="true" viewBox="0 0 24 24" class="icon">
      <path d="M5 12h13"></path>
      <path d="m13 6 6 6-6 6"></path>
    </svg>
  `;
}

function iconSpark() {
  return `
    <svg aria-hidden="true" viewBox="0 0 24 24" class="icon">
      <path d="M12 2v4"></path>
      <path d="M12 18v4"></path>
      <path d="m4.93 4.93 2.83 2.83"></path>
      <path d="m16.24 16.24 2.83 2.83"></path>
      <path d="M2 12h4"></path>
      <path d="M18 12h4"></path>
      <path d="m4.93 19.07 2.83-2.83"></path>
      <path d="m16.24 7.76 2.83-2.83"></path>
    </svg>
  `;
}

function iconChevronLeft() {
  return `
    <svg aria-hidden="true" viewBox="0 0 24 24" class="icon">
      <path d="m15 18-6-6 6-6"></path>
    </svg>
  `;
}

function sectionHeader(eyebrow, title, body, titleId) {
  return `
    <div class="section-header reveal">
      <span class="eyebrow">${eyebrow}</span>
      <h2 id="${titleId}">${title}</h2>
      <p>${body}</p>
    </div>
  `;
}

function hero() {
  return `
    <section class="hero section" id="home" aria-labelledby="hero-title">
      <div class="hero-grid">
        <div class="hero-copy reveal">
          <span class="eyebrow">${iconSpark()} jamesmarkley.com</span>
          <h1 id="hero-title">James Markley</h1>
          <p class="positioning">Technology Executive, Strategic Advisor, and Entrepreneur</p>
          <p class="hero-intro">
            Building, scaling, and positioning technology companies across managed IT, federal programs,
            software, VoIP, compliance, and shared services with a calm operator's discipline.
          </p>
          <div class="hero-actions" aria-label="Primary actions">
            <a class="button primary" href="#contact">Schedule a Meeting ${iconArrow()}</a>
            <a class="button secondary" href="#ventures">Explore Ventures</a>
          </div>
        </div>

        <div class="hero-visual reveal" aria-label="James Markley headshot and venture command panel">
          <div class="orbital-ring ring-one"></div>
          <div class="orbital-ring ring-two"></div>
          <div class="portrait-card">
            <div class="portrait-placeholder">
              <img
                src="./assets/james-markley-headshot.png"
                alt="James Markley professional headshot"
                width="1536"
                height="1024"
                fetchpriority="high"
                decoding="async"
              />
            </div>
          </div>
          <div class="command-panel">
            <div class="panel-topline">
              <span>Operating Scope</span>
              <span>Live Portfolio</span>
            </div>
            <div class="signal-bar" aria-hidden="true">
              <span></span>
            </div>
            <ul>
              <li><span>Managed IT</span><strong>Virtumarc</strong></li>
              <li><span>Public Sector</span><strong>Virtumarc Government</strong></li>
              <li><span>Communications</span><strong>Atlas Voice Systems</strong></li>
              <li><span>Digital Support</span><strong>My Virtual Hero</strong></li>
              <li><span>Technical Strategy</span><strong>GDX Development</strong></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="hero-highlights reveal">
        ${highlights
          .map(
            (item) => `
              <article>
                <span></span>
                <p>${item}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function about() {
  return `
    <section class="section about" id="about" aria-labelledby="about-title">
      ${sectionHeader(
        "About",
        "Executive leadership with real operational depth.",
        "James works across technology strategy, managed services, federal programs, compliance, operations, business development, and entrepreneurship.",
        "about-title"
      )}
      <div class="about-layout">
        <div class="bio-panel reveal">
          <p>
            James Markley is a technology and business operator based in the Greater Tampa Bay Area.
            He builds, scales, and positions technology companies for long-term enterprise value,
            acquisition readiness, and durable operating performance.
          </p>
          <p>
            His work combines executive strategy with a hands-on understanding of service delivery,
            infrastructure, cybersecurity, compliance frameworks, customer relationships, financial
            performance, and the operating systems that help companies scale without losing trust.
          </p>
          <p>
            Across Virtumarc, Virtumarc Government, Atlas Voice Systems, My Virtual Hero, GDX
            Development, and Epolita's shared services support, James brings a grounded leadership
            style: direct, prepared, commercially aware, and focused on outcomes that hold up in the
            real world.
          </p>
        </div>
        <div class="journey reveal">
          ${journey
            .map(
              (item) => `
                <article class="journey-item">
                  <span>${item.year}</span>
                  <div>
                    <h3>${item.title}</h3>
                    <p>${item.body}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function venturesSection() {
  return `
    <section class="section ventures" id="ventures" aria-labelledby="ventures-title">
      ${sectionHeader(
        "Ventures",
        "A focused portfolio across managed IT, government technology, communications, support, and shared services.",
        "Each company reflects a different market need, but the operating standard is consistent: practical strategy, clean execution, compliance awareness, and trusted relationships.",
        "ventures-title"
      )}
      <div class="venture-flipbook reveal" data-venture-carousel>
        <div class="flipbook-topline">
          <span data-venture-count>01 / ${String(ventures.length).padStart(2, "0")}</span>
          <div class="flipbook-controls" aria-label="Venture carousel controls">
            <button type="button" aria-label="Previous venture" data-venture-prev>${iconChevronLeft()}</button>
            <button type="button" aria-label="Next venture" data-venture-next>${iconArrow()}</button>
          </div>
        </div>
        <div class="venture-viewport">
          <div class="venture-track" data-venture-track>
            ${ventures
              .map(
                (venture, index) => `
                  <article class="venture-card" aria-label="${venture.name}" data-venture-slide="${index}">
                    <div class="logo-placeholder" aria-hidden="true">${venture.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 3)}</div>
                    <div class="venture-card-body">
                      <div>
                        <p class="card-kicker">${venture.focus}</p>
                        <h3>${venture.name}</h3>
                      </div>
                      <p>${venture.description}</p>
                      <div class="card-meta">
                        <span>${venture.role}</span>
                        <a href="${venture.link}" target="_blank" rel="noreferrer" aria-label="Visit ${venture.name}">Visit Site ${iconArrow()}</a>
                      </div>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
        <div class="venture-dots" aria-label="Select venture">
          ${ventures
            .map(
              (venture, index) => `
                <button
                  type="button"
                  aria-label="Show ${venture.name}"
                  aria-current="${index === 0 ? "true" : "false"}"
                  data-venture-dot="${index}"
                ></button>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function speaking() {
  return `
    <section class="section speaking" id="speaking" aria-labelledby="speaking-title">
      <div class="speaking-layout">
        <div class="speaking-header reveal">
          <span class="eyebrow">Speaking & Leadership</span>
          <h2 id="speaking-title">Technology leadership for rooms where execution matters.</h2>
        </div>
        <div class="speaking-content">
          <div class="speaking-copy reveal">
          <p>
            James is positioned for executive briefings, association events, leadership forums, Rotary
            programs, business groups, and community conversations where audiences need practical
            perspective instead of recycled talking points.
          </p>
          <p>
            His leadership spans company building, government technology, civic office, district-level
            Rotary communications, youth leadership programming, and community service. The throughline
            is structure: helping teams, clubs, and organizations become healthier, clearer, and more
            capable of sustained impact.
          </p>
          <a class="button primary" href="#contact">Speaking Inquiry ${iconArrow()}</a>
          </div>
          <div class="leadership-stack reveal">
            <div class="topic-cloud" aria-label="Speaking topics">
              ${topics.map((topic) => `<span>${topic}</span>`).join("")}
            </div>
            <div class="leadership-proof" aria-label="Leadership credentials">
              ${leadershipProof.map((item) => `<p>${item}</p>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function insightsSection() {
  return `
    <section class="section insights" id="insights" aria-labelledby="insights-title">
      <div class="insights-layout">
        <div class="insights-intro reveal">
          <span class="eyebrow">Insights</span>
          <h2 id="insights-title">Signals for leaders building durable technology operations.</h2>
          <p>
            A future home for essays, field notes, interviews, and practical guidance drawn from
            company building and advisory work.
          </p>
        </div>
        <div class="insight-stack">
          ${insights
            .map(
              (item) => `
                <article class="insight-card reveal">
                  <div class="insight-card-topline">
                    <span>${item.label}</span>
                    <small>Coming Soon</small>
                  </div>
                  <h3>${item.title}</h3>
                  <p>${item.body}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function contact() {
  return `
    <section class="section contact" id="contact" aria-labelledby="contact-title">
      ${sectionHeader(
        "Contact / Schedule",
        "Start with a clear next conversation.",
        "For advisory work, speaking, partnerships, venture conversations, or professional introductions.",
        "contact-title"
      )}
      <div class="contact-layout">
        <div class="schedule-panel reveal">
          <span class="card-kicker">Scheduling</span>
          <h3>Schedule a Meeting</h3>
          <p>
            Choose a quick connect time that works for advisory, speaking, partnership, or venture
            conversations.
          </p>
          <div class="lunacal-inline" aria-label="Lunacal scheduling calendar">
            <div id="my-lunacal-inline-quick-connect"></div>
          </div>
        </div>
        <form
          class="contact-form reveal"
          name="contact"
          method="post"
          action="https://formspree.io/f/mjgzyebd"
          data-contact-form
        >
          <div class="contact-card-intro">
            <span class="card-kicker">Information</span>
            <h3>Reach Out</h3>
            <p>
              Send a note for speaking, advisory, partnership, media, or professional introduction
              requests.
            </p>
          </div>
          <input type="hidden" name="_subject" value="New jamesmarkley.com inquiry" />
          <input type="hidden" name="_replyto" data-reply-to />
          <label>
            Name
            <input type="text" name="name" autocomplete="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" autocomplete="email" placeholder="you@example.com" required />
          </label>
          <label>
            Reason for reaching out
            <select name="reason">
              <option>Advisory conversation</option>
              <option>Speaking inquiry</option>
              <option>Partnership or venture discussion</option>
              <option>Professional introduction</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="A few details about the opportunity" required></textarea>
          </label>
          <button class="button primary" type="submit">Send Inquiry ${iconArrow()}</button>
          <p class="form-status" data-form-status role="status" aria-live="polite"></p>
          <div class="social-links" aria-label="Social links">
            <a href="https://www.linkedin.com/in/jamesmarkley" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com/jamesmarkleyofficial" target="_blank" rel="noreferrer">Facebook</a>
            <a href="mailto:hello@jamesmarkley.com">Email</a>
          </div>
        </form>
      </div>
    </section>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <p>© ${new Date().getFullYear()} James Markley. Built for jamesmarkley.com.</p>
      <a href="#home">Back to top</a>
    </footer>
  `;
}

app.innerHTML = [hero(), about(), venturesSection(), speaking(), insightsSection(), contact(), footer()].join("");

function initializeLunacal() {
  const calendar = document.querySelector("#my-lunacal-inline-quick-connect");
  if (!calendar) return;

  (function (L, U, N) {
    const push = (api, args) => api.q.push(args);
    const doc = L.document;

    L.Lunacal =
      L.Lunacal ||
      function () {
        const lunacal = L.Lunacal;
        const args = arguments;

        if (!lunacal.loaded) {
          lunacal.ns = {};
          lunacal.q = lunacal.q || [];
          doc.head.appendChild(doc.createElement("script")).src = U;
          lunacal.loaded = true;
        }

        if (args[0] === N) {
          const api = function () {
            push(api, arguments);
          };
          const namespace = args[1];

          api.q = api.q || [];

          if (typeof namespace === "string") {
            lunacal.ns[namespace] = lunacal.ns[namespace] || api;
            push(lunacal.ns[namespace], args);
            push(lunacal, ["initNamespace", namespace]);
          } else {
            push(lunacal, args);
          }

          return;
        }

        push(lunacal, args);
      };

    if (!L.Cal) L.Cal = L.Lunacal;
  })(window, "https://app.lunacal.ai/embed/embed.js", "init");

  Lunacal("init", "quick-connect", { origin: "https://app.lunacal.ai" });
  Lunacal.config = Lunacal.config || {};
  Lunacal.config.forwardQueryParams = true;

  Lunacal.ns["quick-connect"]("inline", {
    elementOrSelector: "#my-lunacal-inline-quick-connect",
    config: { layout: "" },
    calLink: "jamesmarkley/quick-connect"
  });
  Lunacal.ns["quick-connect"]("preload", {
    calLink: "jamesmarkley/quick-connect",
    type: "inline",
    options: { prerenderIframe: true }
  });
  Lunacal.ns["quick-connect"]("ui", {
    theme: "dark",
    styles: { branding: {} },
    hideEventTypeDetails: false,
    layout: "",
    cssVarsPerTheme: {
      light: {
        "theme-border": "#2f403b",
        "theme-background-primary": "#d6b675",
        "theme-background-secondary": "#0d1816",
        "theme-background-card": "#101b19",
        "theme-background-base": "#FFFFFF",
        "theme-text-primary": "#07100e",
        "theme-text-secondary": "#f4f2ec",
        "theme-text-card": "#b6c5bd",
        "theme-text-base": "#f4f2ec",
        "theme-rounded-base": "20px",
        "theme-rounded-calendar": "24px",
        "theme-rounded-timeslot": "12px",
        "theme-rounded-day": "6px",
        "theme-rounded-button": "6px",
        "theme-shadow-calendar": "2px 2px 4px 0px #0000001A",
        "theme-shadow-button": "2px 2px 2px 0px #0000001A",
        "theme-shadow-timeslot": "0px 0px 0px 0px #000000",
        "theme-font-family": "Outfit"
      },
      dark: {
        "theme-border": "#2f403b",
        "theme-background-primary": "#d6b675",
        "theme-background-secondary": "#0d1816",
        "theme-background-card": "#101b19",
        "theme-background-base": "#000000",
        "theme-text-primary": "#07100e",
        "theme-text-secondary": "#f4f2ec",
        "theme-text-card": "#b6c5bd",
        "theme-text-base": "#f4f2ec",
        "theme-rounded-base": "20px",
        "theme-rounded-calendar": "24px",
        "theme-rounded-timeslot": "12px",
        "theme-rounded-day": "6px",
        "theme-rounded-button": "6px",
        "theme-shadow-calendar": "2px 2px 4px 0px #0000001A",
        "theme-shadow-button": "2px 2px 2px 0px #0000001A",
        "theme-shadow-timeslot": "0px 0px 0px 0px #000000",
        "theme-font-family": "Outfit"
      }
    },
    displayedContent: {
      image: false,
      name: false,
      designation: false,
      description: false,
      eventName: false,
      highlightBar: false
    },
    background: { type: "solid", color: "#07100e" },
    stylePreset: null
  });
}

initializeLunacal();

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const sections = [...document.querySelectorAll("#app > .section")];

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  nav.classList.toggle("is-open", !isOpen);
});

nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("is-open");
  }
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
});

function setActiveSection(hash, updateHistory = true) {
  if (!hash || hash === "#") return;

  const target = document.querySelector(hash);
  if (!target || !sections.includes(target)) return;

  document.body.classList.add("section-deck");
  sections.forEach((section) => {
    const isActive = section === target;
    section.classList.toggle("is-active", isActive);
    section.toggleAttribute("hidden", !isActive);
  });

  header.querySelectorAll('a[href^="#"]').forEach((link) => {
    const isCurrent = link.getAttribute("href") === hash;
    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (updateHistory) {
    history.pushState(null, "", hash);
  }
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");

    if (hash === "#") {
      event.preventDefault();
      return;
    }

    if (hash && document.querySelector(hash)) {
      event.preventDefault();
      setActiveSection(hash);
    }
  });
});

setActiveSection(window.location.hash || "#home", false);

window.addEventListener("popstate", () => {
  setActiveSection(window.location.hash || "#home", false);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    }
  },
  {
    rootMargin: "0px 0px -6% 0px",
    threshold: 0.04
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  const rect = element.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.9) {
    element.classList.add("is-visible");
    return;
  }

  revealObserver.observe(element);
});

const ventureCarousel = document.querySelector("[data-venture-carousel]");

if (ventureCarousel) {
  const track = ventureCarousel.querySelector("[data-venture-track]");
  const count = ventureCarousel.querySelector("[data-venture-count]");
  const dots = [...ventureCarousel.querySelectorAll("[data-venture-dot]")];
  const prev = ventureCarousel.querySelector("[data-venture-prev]");
  const next = ventureCarousel.querySelector("[data-venture-next]");
  let activeVenture = 0;

  const updateVenture = (index) => {
    activeVenture = (index + ventures.length) % ventures.length;
    track.style.transform = `translateX(-${activeVenture * 100}%)`;
    count.textContent = `${String(activeVenture + 1).padStart(2, "0")} / ${String(ventures.length).padStart(2, "0")}`;

    dots.forEach((dot, dotIndex) => {
      dot.setAttribute("aria-current", String(dotIndex === activeVenture));
    });
  };

  prev.addEventListener("click", () => updateVenture(activeVenture - 1));
  next.addEventListener("click", () => updateVenture(activeVenture + 1));
  dots.forEach((dot, index) => dot.addEventListener("click", () => updateVenture(index)));
}

document.querySelector("[data-contact-form]").addEventListener("submit", async (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const button = form.querySelector("button");
  const status = form.querySelector("[data-form-status]");
  const email = form.querySelector('input[name="email"]');
  const replyTo = form.querySelector("[data-reply-to]");

  if (replyTo && email) {
    replyTo.value = email.value;
  }

  const formData = new FormData(form);

  button.disabled = true;
  button.textContent = "Sending...";
  status.className = "form-status";
  status.textContent = "";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      let message = "Form submission failed";

      try {
        const data = await response.json();
        message = data?.errors?.map((error) => error.message).join(" ") || data?.message || message;
      } catch {
        message = response.statusText || message;
      }

      throw new Error(message);
    }

    form.reset();
    status.classList.add("is-success");
    status.textContent = "Thanks. Your inquiry has been sent.";
  } catch (error) {
    console.error("Contact form submission failed:", error);
    status.classList.add("is-error");
    status.textContent = error.message
      ? `Formspree could not send that message: ${error.message}`
      : "Something went wrong. Please email hello@jamesmarkley.com directly.";
  } finally {
    button.disabled = false;
    button.innerHTML = `Send Inquiry ${iconArrow()}`;
  }
});
