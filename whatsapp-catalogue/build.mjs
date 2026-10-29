// Generates the WhatsApp Business catalogue: CATALOGUE.md (paste-ready item text)
// and images/*.png (1080x1080 covers rendered with headless Edge/Chrome).
//
//   node whatsapp-catalogue/build.mjs          # text + images
//   node whatsapp-catalogue/build.mjs --text   # text only
//   node whatsapp-catalogue/build.mjs --promo  # text + services promo image only

import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const OUT_DIR = dirname(fileURLToPath(import.meta.url))
// Replace with the deployed portfolio URL once it is live.
const PORTFOLIO_URL = 'https://YOUR-PORTFOLIO-URL'
const WHATSAPP_NUMBER = '263787541207'
// Shown on the promo image and the preview page.
const PHONE_NUMBERS = ['+263 78 754 1207', '+263 71 830 1187']
const PHONE_ICON = '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>'

const items = [
  {
    code: 'EC-WEB-01',
    tag: 'Websites',
    name: 'Business Website',
    price: 300,
    pitch: 'A fast, professional website that sends enquiries straight to your WhatsApp.',
    features: [
      'Up to 5 pages, designed mobile-first',
      'WhatsApp chat button and contact form',
      'Basic SEO: Google indexing, page titles, fast loading',
      'Year-one hosting and .co.zw domain included',
    ],
    timeline: '1–2 weeks',
    extras: 'Domain and hosting renewal from year two',
    proof: 'My own portfolio site, built with React and TypeScript.',
    anchor: '',
  },
  {
    code: 'EC-SHOP-01',
    tag: 'E-commerce',
    name: 'Online Store with Payments',
    price: 600,
    pitch: 'Sell online with a product catalogue, cart and secure checkout.',
    features: [
      'Paynow (EcoCash, cards), Stripe or PayPal',
      'Quote requests and order tracking',
      'Admin back office for products and orders',
    ],
    timeline: '3–5 weeks',
    extras: 'Hosting, domain and payment processing fees',
    proof: 'E-commerce and quotation platform for a curtain design and sales business.',
    anchor: '#projects',
  },
  {
    code: 'EC-ERP-01',
    tag: 'Business systems',
    name: 'Custom ERP / Business System',
    price: 6000,
    pitch: 'One system to run your business, with single sign-on for every staff member.',
    features: [
      'CRM, helpdesk, tasks, staff, assets, payments',
      'Role-based access by department',
      'Dashboards and PDF reports, works on phones',
    ],
    timeline: '2–4 months, delivered in phases',
    extras: 'Hosting, data migration from old systems and third-party subscriptions',
    proof: 'Enterprise ERP platform connecting multiple business services in one portal.',
    anchor: '#projects',
  },
  {
    code: 'EC-HELP-01',
    tag: 'Business systems',
    name: 'Helpdesk & Ticketing System',
    price: 1500,
    pitch: 'Track every support request from open to closed, with nothing slipping through.',
    features: [
      'Automatic assignment and SLA targets',
      'Escalation when tickets run late',
      'Email and real-time in-app notifications',
    ],
    timeline: '4–6 weeks',
    extras: 'Hosting, and email or SMS charges',
    proof: 'Helpdesk system that cut mean time to resolution by 25%.',
    anchor: '#projects',
  },
  {
    code: 'EC-CRM-01',
    tag: 'Business systems',
    name: 'CRM & Customer Query System',
    price: 1500,
    pitch: 'Log, route and resolve customer queries faster.',
    features: [
      'Full customer and query history',
      'SLA breach alerts',
      'Live agent-performance dashboards',
    ],
    timeline: '4–6 weeks',
    extras: 'Hosting, and email or SMS charges',
    proof: 'Customer-care system handling 500+ queries a month, about 30% faster resolution.',
    anchor: '#projects',
  },
  {
    code: 'EC-FLOW-01',
    tag: 'Automation',
    name: 'Workflow & Approvals Automation',
    price: 2500,
    pitch: 'Replace paper forms and email chains with tracked digital approvals.',
    features: [
      'Multi-step approvals with e-signatures',
      'Job cards, leave and purchase requests',
      'Reminders, escalation and a full audit trail',
    ],
    timeline: '6–8 weeks',
    extras: 'Hosting',
    proof: 'Workflow engine powering six business products, from ticketing to performance reviews.',
    anchor: '#projects',
  },
  {
    code: 'EC-ASSET-01',
    tag: 'Business systems',
    name: 'Asset & Equipment Tracking',
    price: 1200,
    pitch: 'Know who has every phone, laptop, POS unit or vehicle.',
    features: [
      'Issue and return with approval sign-off',
      'Fault tracking and live dashboard',
      'Branded PDF reports',
    ],
    timeline: '3–5 weeks',
    extras: 'Hosting',
    proof: 'Tracks 300+ assets and reduced misplacement by 35%.',
    anchor: '#projects',
  },
  {
    code: 'EC-STAFF-01',
    tag: 'Business systems',
    name: 'Staff Deployment & Performance',
    price: 2500,
    pitch: 'Schedule field staff and measure performance automatically.',
    features: [
      'Daily and monthly performance scoring',
      'Zone assignment and arrival check-in',
      'Leave management and automated scheduling',
    ],
    timeline: '6–8 weeks',
    extras: 'Hosting, and SMS charges',
    proof: 'Runs 200+ staff across 200+ locations and improved deployment efficiency by about 40%.',
    anchor: '#projects',
  },
  {
    code: 'EC-APP-01',
    tag: 'Mobile',
    name: 'Mobile App (Android & iOS)',
    price: 2500,
    pitch: 'A mobile app for your customers or staff, built for both platforms at once.',
    features: [
      'GPS, maps and push notifications',
      'Secure login and in-app payments',
      'React Native or Flutter',
    ],
    timeline: '6–10 weeks',
    extras: 'Hosting, plus Google Play and Apple developer accounts',
    proof: 'Park-Check, a GPS smart-parking app with live countdowns and fine payments.',
    anchor: '#projects',
  },
  {
    code: 'EC-GPS-01',
    tag: 'Mapping',
    name: 'GPS Tracking & Maps',
    price: 2000,
    pitch: 'See your field staff or vehicles on a live map.',
    features: [
      'Live location tracking',
      'Geofenced zones with alerts',
      'Map dashboards and reports',
    ],
    timeline: '4–6 weeks',
    extras: 'GPS hardware, SIM and data charges, and hosting',
    proof: 'Geofencing and live tracking platform for field staff.',
    anchor: '#projects',
  },
  {
    code: 'EC-INT-01',
    tag: 'Integrations',
    name: 'Payments & Notifications Setup',
    price: 250,
    pitch: 'Add online payments and automatic alerts to your existing system.',
    features: [
      'Paynow / EcoCash, Stripe or PayPal',
      'SMS, email and WhatsApp alerts',
      'Works with your current website or app',
    ],
    timeline: '1–2 weeks',
    extras: 'Payment processing fees, and SMS or WhatsApp message charges',
    proof: 'Multi-channel notification service sending SMS, email and WhatsApp alerts.',
    anchor: '#projects',
  },
  {
    code: 'EC-BOT-01',
    tag: 'WhatsApp',
    name: 'WhatsApp Chatbot',
    price: 500,
    pitch: 'Answer customers, take orders and handle bookings on WhatsApp, day and night.',
    features: [
      'Menus, FAQs, orders and bookings in chat',
      'Hand-over to a staff member when needed',
      'Optional payments in chat: EcoCash and cards',
      "Built on Meta's official WhatsApp Cloud API",
    ],
    timeline: '2–4 weeks',
    extras: "Meta's WhatsApp message fees, payment processing fees, a dedicated phone number, and hosting",
    proof: 'Custom chatbots built with Node.js on the WhatsApp Business Cloud API.',
    anchor: '#contact',
  },
  {
    code: 'EC-DASH-01',
    tag: 'Reporting',
    name: 'Dashboards & Reports',
    price: 400,
    pitch: 'Turn your spreadsheets and data into live dashboards.',
    features: [
      'Charts and KPIs that update themselves',
      'PDF and Excel exports',
      'AI-written report summaries',
    ],
    timeline: '2–3 weeks',
    extras: 'Hosting, and AI usage fees if AI summaries are included',
    proof: 'Reporting engine with period comparisons and AI-generated summaries.',
    anchor: '#projects',
  },
  {
    code: 'EC-CARE-01',
    tag: 'Support',
    name: 'Monthly Support & Maintenance',
    price: 50,
    perMonth: true,
    pitch: 'Keep your website or system secure, backed up and up to date.',
    features: [
      'Bug fixes and small changes',
      'Backups, updates and monitoring',
      'Priority response on WhatsApp',
    ],
    timeline: 'Monthly, cancel any time',
    extras: 'Each plan states its support hours, response times and backups',
    proof: 'I maintain production systems used daily by hundreds of staff.',
    anchor: '#contact',
  },
]

const usd = (n) => `$${n.toLocaleString('en-US')}`
const fileBase = (item, i) => `${String(i + 1).padStart(2, '0')}-${item.code.toLowerCase()}`
const hasPortfolio = !PORTFOLIO_URL.includes('YOUR-PORTFOLIO-URL')

const PRICING_NOTES = [
  'All prices are starting prices in US dollars, not fixed quotes.',
  'The final price depends on features, number of users, integrations, data migration and delivery timeline.',
  'Hosting, domain renewals, GPS hardware, SIM and data charges, payment processing fees, SMS and WhatsApp charges, and paid third-party subscriptions are charged separately unless your written quote includes them.',
  'For larger projects, I agree a written scope with you before giving the final quote.',
]

// The support plan's extras describe the plan rather than costs billed on top.
const extrasLabel = (item) => (item.perMonth ? 'Plan details' : 'Charged separately')

function description(item) {
  return [
    item.pitch,
    '',
    "What's included:",
    ...item.features.map((f) => `• ${f}`),
    '',
    `Timeline: ${item.timeline}`,
    `Proof: ${item.proof}`,
    `${extrasLabel(item)}: ${item.extras}`,
    '',
    `Starting price shown${item.perMonth ? ' is per month' : ''}. Final quote depends on your requirements. Message me to discuss.`,
  ].join('\n')
}

function buildMarkdown() {
  const rows = items
    .map((item, i) => {
      return [
        `## ${i + 1}. ${item.name}`,
        '',
        `![${item.name}](images/${fileBase(item, i)}.png)`,
        '',
        '| Field | Value |',
        '| --- | --- |',
        `| Item name | ${item.name} |`,
        `| Price (USD) | ${item.price} |`,
        `| Link | ${PORTFOLIO_URL}/${item.anchor} |`,
        `| Item code | ${item.code} |`,
        '',
        'Description:',
        '',
        '```text',
        description(item),
        '```',
      ].join('\n')
    })
    .join('\n\n')

  return `# WhatsApp Business Catalogue

Generated by \`build.mjs\`. Edit the items there and rerun; don't edit this file by hand.

**Adding items:** WhatsApp Business → Tools (or Settings → Business tools) → Catalogue → Add new item.
Upload the image, then copy each field below. Prices are suggested starting prices; change them in \`build.mjs\`.

**Share link:** once the catalogue is live, it can be opened at https://wa.me/c/${WHATSAPP_NUMBER}

**Pricing notes** (send these when a client asks for a quote):

${PRICING_NOTES.map((n) => `- ${n}`).join('\n')}

${rows}
`
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function cardHtml(item, index) {
  const features = item.features.map((f) => `<li><span class="tick">✓</span>${escapeHtml(f)}</li>`).join('')
  return `<!doctype html>
<html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 1080px; height: 1080px; overflow: hidden; }
  body {
    font-family: Inter, 'Segoe UI', system-ui, sans-serif;
    color: #e2e8f0;
    background:
      radial-gradient(circle at 12% 0%, rgba(45, 212, 191, 0.22), transparent 45%),
      radial-gradient(circle at 92% 18%, rgba(129, 140, 248, 0.20), transparent 45%),
      #0b0f14;
    padding: 84px 88px;
    display: flex; flex-direction: column;
  }
  .mono { font-family: 'JetBrains Mono', Consolas, monospace; }
  .top { display: flex; justify-content: space-between; align-items: center; font-size: 26px; letter-spacing: 0.18em; text-transform: uppercase; }
  .brand { color: #2dd4bf; font-weight: 700; }
  .count { color: #64748b; }
  .main { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 32px 0; }
  .tag { display: inline-block; align-self: flex-start; font-size: 24px; color: #a5b4fc; border: 2px solid rgba(129, 140, 248, 0.45); border-radius: 999px; padding: 8px 22px; margin-bottom: 30px; letter-spacing: 0.08em; text-transform: uppercase; }
  h1 { font-size: 80px; line-height: 1.04; font-weight: 800; color: #f8fafc; letter-spacing: -0.02em; }
  .pitch { font-size: 33px; line-height: 1.35; color: #94a3b8; margin-top: 26px; max-width: 880px; }
  ul { list-style: none; margin-top: 40px; display: grid; gap: 16px; }
  li { font-size: 31px; color: #cbd5e1; display: flex; align-items: center; gap: 18px; }
  .tick { display: inline-flex; width: 40px; height: 40px; border-radius: 50%; background: rgba(45, 212, 191, 0.16); color: #2dd4bf; font-size: 24px; font-weight: 700; align-items: center; justify-content: center; flex: none; }
  .bottom { display: flex; justify-content: space-between; align-items: flex-end; border-top: 2px solid rgba(255, 255, 255, 0.1); padding-top: 34px; }
  .from { font-size: 24px; color: #64748b; letter-spacing: 0.18em; text-transform: uppercase; }
  .price { font-size: 84px; font-weight: 800; color: #2dd4bf; line-height: 1; margin-top: 8px; }
  .price small { font-size: 36px; font-weight: 600; color: #5eead4; }
  .cta { text-align: right; font-size: 26px; color: #94a3b8; line-height: 1.5; }
  .cta strong { color: #f8fafc; font-weight: 600; }
</style></head>
<body>
  <div class="top mono"><span class="brand">Elton Chipuka</span><span class="count">${String(index + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}</span></div>
  <div class="main">
    <span class="tag mono">${escapeHtml(item.tag)}</span>
    <h1>${escapeHtml(item.name)}</h1>
    <p class="pitch">${escapeHtml(item.pitch)}</p>
    <ul>${features}</ul>
  </div>
  <div class="bottom">
    <div><div class="from mono">From</div><div class="price">${usd(item.price)}${item.perMonth ? '<small> /month</small>' : ''}</div></div>
    <div class="cta"><strong>Full-stack developer</strong><br>Harare · Message for a quote</div>
  </div>
</body></html>`
}

function findBrowser() {
  const candidates = [
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
  ]
  const found = candidates.find((p) => existsSync(p))
  if (!found) throw new Error('No Edge or Chrome found; run with --text or add your browser path to findBrowser().')
  return found
}

// Services shown on the promo image, by item code, with lucide-style icon paths.
const PROMO = [
  ['EC-WEB-01', 'Business Websites', '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'],
  ['EC-SHOP-01', 'Online Stores', '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>'],
  ['EC-ERP-01', 'ERP & Business Systems', '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'],
  ['EC-APP-01', 'Mobile Apps', '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>'],
  ['EC-DASH-01', 'Dashboards & Reports', '<path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/>'],
  ['EC-BOT-01', 'WhatsApp Chatbots', '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/>'],
]

// Set to true to show each service's starting price on the promo image.
const PROMO_SHOW_PRICES = false

function promoHtml() {
  const tiles = PROMO.map(([code, label, icon]) => {
    const item = items.find((it) => it.code === code)
    const price = PROMO_SHOW_PRICES ? `<div class="price"><span>from</span> ${usd(item.price)}</div>` : ''
    return `<div class="tile">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icon}</svg>
      <div class="label">${escapeHtml(label)}</div>
      ${price}
    </div>`
  }).join('')
  return `<!doctype html>
<html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 1080px; height: 1080px; overflow: hidden; }
  body {
    font-family: Inter, 'Segoe UI', system-ui, sans-serif; color: #e2e8f0;
    background:
      radial-gradient(circle at 12% 0%, rgba(45, 212, 191, 0.22), transparent 45%),
      radial-gradient(circle at 92% 18%, rgba(129, 140, 248, 0.20), transparent 45%),
      #0b0f14;
    padding: 76px 80px; display: flex; flex-direction: column; gap: 44px;
  }
  .mono { font-family: 'JetBrains Mono', Consolas, monospace; }
  .top { font-size: 24px; letter-spacing: 0.18em; text-transform: uppercase; color: #2dd4bf; font-weight: 700; }
  h1 { font-size: 72px; line-height: 1.05; font-weight: 800; color: #f8fafc; letter-spacing: -0.02em; margin-top: 18px; }
  h1 em { font-style: normal; color: #2dd4bf; }
  .grid { flex: 1; display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 1fr); gap: 20px; }
  .tile { background: rgba(255, 255, 255, 0.04); border: 2px solid rgba(255, 255, 255, 0.09); border-radius: 24px; padding: 30px 26px; display: flex; flex-direction: column; }
  .tile svg { width: 60px; height: 60px; color: #2dd4bf; background: rgba(45, 212, 191, 0.12); border-radius: 16px; padding: 12px; box-sizing: content-box; }
  .label { font-size: 31px; font-weight: 700; color: #f8fafc; line-height: 1.15; margin-top: auto; padding-top: 22px; }
  .price { font-size: 26px; font-weight: 700; color: #5eead4; margin-top: 10px; font-variant-numeric: tabular-nums; }
  .price span { color: #94a3b8; font-weight: 500; }
  .bottom { display: flex; justify-content: space-between; align-items: center; border-top: 2px solid rgba(255, 255, 255, 0.1); padding-top: 30px; }
  .who { font-size: 26px; color: #94a3b8; line-height: 1.45; }
  .who strong { color: #f8fafc; font-weight: 700; }
  .phones { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
  .phone { display: flex; align-items: center; gap: 12px; font-size: 30px; font-weight: 700; color: #f8fafc; font-variant-numeric: tabular-nums; }
  .phone svg { width: 26px; height: 26px; color: #2dd4bf; }
</style></head>
<body>
  <div>
    <div class="top mono">Elton Chipuka · Software developer</div>
    <h1>Software that runs<br>your <em>business</em>.</h1>
  </div>
  <div class="grid">${tiles}</div>
  <div class="bottom">
    <div class="who"><strong>Harare, Zimbabwe</strong><br>Message for a free quote</div>
    <div class="phones">${PHONE_NUMBERS.map((n) => `<div class="phone"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${PHONE_ICON}</svg>${n}</div>`).join('')}</div>
  </div>
</body></html>`
}

function screenshot(browser, work, html, outPath) {
  const htmlPath = join(work, 'page.html')
  writeFileSync(htmlPath, html)
  execFileSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    `--user-data-dir=${join(work, 'profile')}`,
    '--window-size=1080,1080',
    '--virtual-time-budget=4000',
    `--screenshot=${outPath}`,
    pathToFileURL(htmlPath).href,
  ], { stdio: 'ignore' })
}

function buildImages({ promoOnly = false } = {}) {
  const browser = findBrowser()
  const imagesDir = join(OUT_DIR, 'images')
  mkdirSync(imagesDir, { recursive: true })
  const work = mkdtempSync(join(tmpdir(), 'wa-catalogue-'))

  if (!promoOnly) {
    items.forEach((item, i) => {
      const file = fileBase(item, i)
      screenshot(browser, work, cardHtml(item, i), join(imagesDir, `${file}.png`))
      console.log(`images/${file}.png`)
    })
  }
  // Kept outside images/ so it isn't mistaken for a catalogue item.
  screenshot(browser, work, promoHtml(), join(OUT_DIR, 'services-promo.png'))
  console.log('services-promo.png')
}

// Browsable preview of the catalogue (preview.html + images/), shareable as a link.
function buildPreview() {
  const data = items.map((item, i) => ({
    ...item,
    image: `images/${fileBase(item, i)}.png`,
    link: hasPortfolio ? `${PORTFOLIO_URL}/${item.anchor}` : '',
  }))
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  const chat = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

  return `<title>Elton Chipuka Services</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap">
<style>
  /* Layout: a single column like WhatsApp's own catalogue list; tapping a row opens the full item. */
  :root {
    --bg: #0b0f14; --surface: #111a24; --surface-2: #16212d; --line: #1f2c39;
    --fg: #e6edf3; --muted: #8b9bab; --accent: #2dd4bf; --accent-ink: #04201c; --tag: #a5b4fc;
    --wa: #25d366; --wa-ink: #052e16; --backdrop: rgba(3, 6, 10, 0.72);
    --sans: Inter, 'Segoe UI', system-ui, sans-serif; --mono: 'JetBrains Mono', Consolas, monospace;
    color-scheme: dark;
  }
  @media (prefers-color-scheme: light) {
    :root:not([data-theme="dark"]) {
      --bg: #f3f6f7; --surface: #ffffff; --surface-2: #eef3f4; --line: #d9e2e5;
      --fg: #0f1a20; --muted: #56676f; --accent: #0d8a7f; --accent-ink: #ffffff; --tag: #4f46e5;
      --wa: #1a9e4b; --wa-ink: #ffffff; --backdrop: rgba(15, 26, 32, 0.45);
      color-scheme: light;
    }
  }
  :root[data-theme="light"] {
    --bg: #f3f6f7; --surface: #ffffff; --surface-2: #eef3f4; --line: #d9e2e5;
    --fg: #0f1a20; --muted: #56676f; --accent: #0d8a7f; --accent-ink: #ffffff; --tag: #4f46e5;
    --wa: #1a9e4b; --wa-ink: #ffffff; --backdrop: rgba(15, 26, 32, 0.45);
    color-scheme: light;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0; background: var(--bg); color: var(--fg); font: 16px/1.55 var(--sans);
    padding-left: max(16px, env(safe-area-inset-left, 0px)); padding-right: max(16px, env(safe-area-inset-right, 0px));
    padding-block: 0 48px; -webkit-font-smoothing: antialiased;
  }
  .wrap { max-width: 760px; margin: 0 auto; }
  .hero { padding-block: 56px 28px; display: grid; gap: 14px; }
  .eyebrow, .tag, .code { font-family: var(--mono); font-size: 0.75rem; letter-spacing: 0.14em; text-transform: uppercase; }
  .eyebrow { color: var(--accent); margin: 0; font-weight: 700; }
  h1 { margin: 0; font-size: clamp(2rem, 6vw, 2.75rem); line-height: 1.1; letter-spacing: -0.02em; font-weight: 800; text-wrap: balance; }
  .lede { margin: 0; color: var(--muted); max-width: 60ch; }
  .contact { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 16px; margin-top: 6px; }
  .num { font-family: var(--mono); font-size: 0.9rem; color: var(--muted); user-select: all; }
  .btn {
    display: inline-flex; align-items: center; gap: 8px; border-radius: 999px; padding: 10px 18px;
    font: 600 0.95rem var(--sans); text-decoration: none; border: 1px solid transparent; cursor: pointer;
  }
  .btn svg { width: 18px; height: 18px; }
  .btn-wa { background: var(--wa); color: var(--wa-ink); }
  .btn-ghost { background: transparent; color: var(--fg); border-color: var(--line); }
  .btn:hover { filter: brightness(1.08); }
  :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

  .filters { display: flex; flex-wrap: wrap; gap: 8px; padding-block: 8px 20px; }
  .chip {
    font: 500 0.85rem var(--sans); color: var(--muted); background: var(--surface); border: 1px solid var(--line);
    border-radius: 999px; padding: 6px 14px; cursor: pointer;
  }
  .chip[aria-pressed="true"] { background: var(--accent); border-color: var(--accent); color: var(--accent-ink); }

  .list { list-style: none; margin: 0; padding: 0; background: var(--surface); border: 1px solid var(--line); border-radius: 16px; overflow: hidden; }
  .list li + li { border-top: 1px solid var(--line); }
  .row {
    width: 100%; display: grid; grid-template-columns: 88px minmax(0, 1fr) auto; gap: 16px; align-items: center;
    padding: 14px 16px; background: none; border: 0; color: inherit; font: inherit; text-align: left; cursor: pointer;
  }
  .row:hover { background: var(--surface-2); }
  .row img { width: 88px; height: 88px; border-radius: 10px; display: block; }
  .row-text { display: grid; gap: 2px; min-width: 0; }
  .tag { color: var(--tag); font-size: 0.7rem; }
  .row-name { font-weight: 700; font-size: 1.05rem; line-height: 1.3; }
  .row-pitch { color: var(--muted); font-size: 0.9rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .price { font-weight: 700; color: var(--accent); font-variant-numeric: tabular-nums; }
  .price small { color: var(--muted); font-weight: 500; font-size: 0.8em; }
  .chev { color: var(--muted); width: 20px; height: 20px; }
  .footnote { color: var(--muted); font-size: 0.85rem; margin-top: 16px; }
  .notes { margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--line); }
  .notes h2 { margin: 0 0 10px; font: 700 0.8rem var(--mono); letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
  .notes ul { margin: 0; padding-left: 1.1em; display: grid; gap: 6px; color: var(--muted); font-size: 0.9rem; max-width: 65ch; }

  dialog {
    width: min(860px, calc(100vw - 24px)); max-height: calc(100dvh - 24px); padding: 0; border: 1px solid var(--line);
    border-radius: 18px; background: var(--surface); color: var(--fg); overflow: auto;
  }
  dialog::backdrop { background: var(--backdrop); }
  .detail { display: grid; grid-template-columns: minmax(0, 340px) minmax(0, 1fr); }
  .detail img { width: 100%; aspect-ratio: 1; max-width: 100%; display: block; }
  .d-body { padding: 24px 24px 20px; display: grid; gap: 14px; align-content: start; min-width: 0; }
  .d-head { display: flex; justify-content: space-between; gap: 12px; align-items: start; }
  .d-body h2 { margin: 4px 0 0; font-size: 1.6rem; line-height: 1.15; letter-spacing: -0.01em; text-wrap: balance; }
  .d-price { font-size: 1.4rem; margin: 0; }
  .d-body p { margin: 0; }
  .d-body h3 { margin: 4px 0 0; font-size: 0.8rem; font-family: var(--mono); letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
  .d-body ul { margin: 0; padding: 0; list-style: none; display: grid; gap: 6px; }
  .d-body li { display: flex; gap: 10px; }
  .d-body li::before { content: '✓'; color: var(--accent); font-weight: 700; }
  dl { margin: 0; display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 6px 16px; font-size: 0.95rem; }
  dt { color: var(--muted); }
  dd { margin: 0; }
  .note { color: var(--muted); font-size: 0.85rem; }
  .code { color: var(--muted); }
  .d-actions { display: flex; flex-wrap: wrap; gap: 10px; }
  .d-nav { display: flex; justify-content: space-between; gap: 8px; border-top: 1px solid var(--line); padding-top: 14px; }
  .icon-btn { background: var(--surface-2); color: var(--fg); border: 1px solid var(--line); border-radius: 999px; width: 36px; height: 36px; display: grid; place-items: center; cursor: pointer; flex: none; }
  .icon-btn svg { width: 18px; height: 18px; }
  .nav-btn { background: none; border: 0; color: var(--muted); font: 500 0.9rem var(--sans); cursor: pointer; padding: 4px 0; }
  .nav-btn:hover { color: var(--fg); }
  .nav-btn:disabled { visibility: hidden; }

  @media (max-width: 640px) {
    .hero { padding-block: 36px 20px; }
    .row { grid-template-columns: 72px minmax(0, 1fr); gap: 12px; padding: 12px; }
    .row img { width: 72px; height: 72px; }
    .chev { display: none; }
    .detail { grid-template-columns: minmax(0, 1fr); }
    .d-body { padding: 18px 18px 16px; }
  }
  @media (prefers-reduced-motion: no-preference) {
    .row, .btn, .chip { transition: background-color 0.15s, filter 0.15s; }
  }
</style>

<header class="wrap hero">
  <p class="eyebrow">Services catalogue</p>
  <h1>Elton Chipuka</h1>
  <p class="lede">Full-stack developer in Harare, Zimbabwe. I build websites, online stores, business systems and mobile apps. Prices are starting prices in US dollars; message me for a quote that fits your requirements.</p>
  <div class="contact">
    <a class="btn btn-wa" href="${chat('Hi Elton, I saw your services catalogue and would like to discuss a project.')}" target="_blank" rel="noreferrer">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
      Chat on WhatsApp
    </a>
    <span class="num">${PHONE_NUMBERS.join(' · ')}</span>
  </div>
</header>

<main class="wrap">
  <div class="filters" id="filters" aria-label="Filter by category"></div>
  <ul class="list" id="list"></ul>
  <p class="footnote">Tap a service to see what's included, the timeline and the project it's based on.</p>
  <section class="notes" aria-labelledby="notes-title">
    <h2 id="notes-title">Pricing notes</h2>
    <ul>${PRICING_NOTES.map((n) => `<li>${escapeHtml(n)}</li>`).join('')}</ul>
  </section>
</main>

<dialog id="detail" aria-labelledby="d-title"></dialog>

<script>
  const ITEMS = ${json};
  const WA = '${WHATSAPP_NUMBER}';
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const usd = (n) => '$' + n.toLocaleString('en-US');
  const price = (it) => '<small>From </small>' + usd(it.price) + (it.perMonth ? '<small> / month</small>' : '');
  const chatLink = (it) => 'https://wa.me/' + WA + '?text=' + encodeURIComponent("Hi Elton, I'm interested in " + it.name + ' (' + it.code + ').');
  const waIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>';

  const list = document.getElementById('list');
  const filters = document.getElementById('filters');
  const dialog = document.getElementById('detail');
  let active = 'All';
  let visible = ITEMS;
  let current = -1;

  const tags = ['All', ...new Set(ITEMS.map((it) => it.tag))];
  filters.innerHTML = tags.map((t) => '<button type="button" class="chip" aria-pressed="' + (t === active) + '">' + esc(t) + '</button>').join('');
  filters.addEventListener('click', (e) => {
    const b = e.target.closest('.chip');
    if (!b) return;
    active = b.textContent;
    filters.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', String(c === b)));
    renderList();
  });

  function renderList() {
    visible = active === 'All' ? ITEMS : ITEMS.filter((it) => it.tag === active);
    list.innerHTML = visible.map((it, i) =>
      '<li><button type="button" class="row" data-i="' + i + '">' +
        '<img src="' + it.image + '" alt="" width="88" height="88" loading="lazy">' +
        '<span class="row-text">' +
          '<span class="tag">' + esc(it.tag) + '</span>' +
          '<span class="row-name">' + esc(it.name) + '</span>' +
          '<span class="row-pitch">' + esc(it.pitch) + '</span>' +
          '<span class="price">' + price(it) + '</span>' +
        '</span>' +
        '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 6 6 6-6 6"/></svg>' +
      '</button></li>').join('');
  }
  list.addEventListener('click', (e) => {
    const r = e.target.closest('.row');
    if (r) openItem(Number(r.dataset.i));
  });

  function openItem(i) {
    current = i;
    const it = visible[i];
    dialog.innerHTML =
      '<div class="detail">' +
        '<img src="' + it.image + '" alt="' + esc(it.name) + ' cover image">' +
        '<div class="d-body">' +
          '<div class="d-head"><div><span class="tag">' + esc(it.tag) + '</span><h2 id="d-title">' + esc(it.name) + '</h2></div>' +
            '<button type="button" class="icon-btn" data-act="close" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>' +
          '<p class="price d-price">' + price(it) + '</p>' +
          '<p>' + esc(it.pitch) + '</p>' +
          '<h3>What\\'s included</h3><ul>' + it.features.map((f) => '<li>' + esc(f) + '</li>').join('') + '</ul>' +
          '<dl><dt>Timeline</dt><dd>' + esc(it.timeline) + '</dd><dt>Proof</dt><dd>' + esc(it.proof) + '</dd><dt>' + (it.perMonth ? 'Plan details' : 'Charged separately') + '</dt><dd>' + esc(it.extras) + '</dd><dt>Item code</dt><dd class="code">' + esc(it.code) + '</dd></dl>' +
          '<p class="note">Final quote depends on your requirements.</p>' +
          '<div class="d-actions">' +
            '<a class="btn btn-wa" href="' + chatLink(it) + '" target="_blank" rel="noreferrer">' + waIcon + 'Ask about this on WhatsApp</a>' +
            (it.link ? '<a class="btn btn-ghost" href="' + esc(it.link) + '" target="_blank" rel="noreferrer">See the portfolio</a>' : '') +
          '</div>' +
          '<div class="d-nav">' +
            '<button type="button" class="nav-btn" data-act="prev"' + (i === 0 ? ' disabled' : '') + '>← ' + (i > 0 ? esc(visible[i - 1].name) : '') + '</button>' +
            '<button type="button" class="nav-btn" data-act="next"' + (i === visible.length - 1 ? ' disabled' : '') + '>' + (i < visible.length - 1 ? esc(visible[i + 1].name) : '') + ' →</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    try { history.replaceState(null, '', '#' + it.code.toLowerCase()); } catch (e) {}
  }

  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) return dialog.close();
    const act = e.target.closest('[data-act]')?.dataset.act;
    if (act === 'close') dialog.close();
    if (act === 'prev' && current > 0) openItem(current - 1);
    if (act === 'next' && current < visible.length - 1) openItem(current + 1);
  });
  dialog.addEventListener('close', () => {
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
  });
  document.addEventListener('keydown', (e) => {
    if (!dialog.open) return;
    if (e.key === 'ArrowLeft' && current > 0) openItem(current - 1);
    if (e.key === 'ArrowRight' && current < visible.length - 1) openItem(current + 1);
  });

  renderList();
  const start = ITEMS.findIndex((it) => it.code.toLowerCase() === location.hash.slice(1).toLowerCase());
  if (start >= 0) openItem(start);
</script>
`
}

writeFileSync(join(OUT_DIR, 'CATALOGUE.md'), buildMarkdown())
console.log('CATALOGUE.md')
writeFileSync(join(OUT_DIR, 'preview.html'), buildPreview())
console.log('preview.html')
if (!process.argv.includes('--text')) buildImages({ promoOnly: process.argv.includes('--promo') })
