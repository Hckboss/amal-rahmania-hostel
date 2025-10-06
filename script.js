const WHATSAPP_NUMBER_MAIN = '919946716151';
const WHATSAPP_NUMBER_ALT = '919656962786';
const WHATSAPP_MESSAGE = encodeURIComponent('Amal Rahmania Ladies Hostel: അഡ്മിഷൻ/ലഭ്യത അന്വേഷിക്കാൻ വിളിച്ചതാണ്.');

const WHATSAPP_LINK_MAIN = `https://wa.me/${WHATSAPP_NUMBER_MAIN}?text=${WHATSAPP_MESSAGE}`;
const WHATSAPP_LINK_ALT = `https://wa.me/${WHATSAPP_NUMBER_ALT}?text=${WHATSAPP_MESSAGE}`;

const GOOGLE_MAPS_EMBED_URL = 'https://maps.google.com/maps?q=9.628944,76.520111&z=15&output=embed';

// Inject content after DOM loads
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // ----- HEADER -----
    const header = document.createElement('header');
    header.innerHTML = `
      <div class="container">
        <h1>AMAL RAHMANIA LADIES HOSTEL</h1>
        <p class="lead">Safe, Comfortable, and Homely Living for Women — Near Kottayam Medical College</p>
      </div>`;
    body.appendChild(header);

    // ----- MAIN CONTAINER -----
    const main = document.createElement('main');
    main.className = 'container';

    const gridDiv = document.createElement('div');
    gridDiv.className = 'grid';

    // Left Column
    const leftColumn = document.createElement('div');
    leftColumn.style.display = 'flex';
    leftColumn.style.flexDirection = 'column';
    leftColumn.style.gap = '24px';

    // Hero Section
    const hero = document.createElement('section');
    hero.className = 'card hero scroll-animate';
    hero.innerHTML = `
      <div style="flex:1">
        <h2>Welcome to Amal Rahmania</h2>
        <p class="small">കോട്ടയം മെഡിക്കൽ കോളേജിനും പ്രൈവറ്റ് ബസ് സ്റ്റാൻഡിനും സമീപമുള്ള സ്ത്രീകൾക്കായുള്ള വിശ്വസ്തമായ ഹോസ്റ്റൽ.</p>
        <div class="facilities">
          <span class="chip">🚀 ഹൈ-സ്പീഡ് WIFI</span>
          <span class="chip">🧺 വാഷിംഗ് മെഷീൻ</span>
          <span class="chip">🧊 ഫ്രിഡ്ജ് സൗകര്യം</span>
          <span class="chip">🍲 മൂന്നു നേരം ഭക്ഷണം</span>
        </div>
        <div class="cta">
          <a class="btn btn-primary" href="${WHATSAPP_LINK_MAIN}">💬 WhatsApp Enquiry</a>
          <a class="btn btn-outline" href="${WHATSAPP_LINK_ALT}">📲 WhatsApp Alt</a>
        </div>
      </div>
      <img src="WhatsApp Image 2025-10-06 at 10.15.43_7a2930e5.jpg" alt="Hostel Exterior Building Photo" onerror="this.src='https://placehold.co/300x250/A9154F/FFFFFF?text=Hostel+Building';">
    `;
    leftColumn.appendChild(hero);

    // TODO: Add Gallery, Pricing, Rules Sections (similar to Hero)
    gridDiv.appendChild(leftColumn);

    // Right Column
    const rightColumn = document.createElement('div');
    // TODO: Add Chat, Contact, Support, Location cards
    gridDiv.appendChild(rightColumn);

    main.appendChild(gridDiv);
    body.appendChild(main);

    // Footer
    const footer = document.createElement('footer');
    footer.innerHTML = '&copy; 2025 Amal Rahmania Ladies Hostel. All rights reserved.';
    body.appendChild(footer);

    // Scroll animations
    const scrollAnimate = () => {
        document.querySelectorAll('.scroll-animate').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 150) el.classList.add('is-visible');
        });
    };
    window.addEventListener('load', scrollAnimate);
    window.addEventListener('scroll', scrollAnimate);
    window.addEventListener('resize', scrollAnimate);
});
