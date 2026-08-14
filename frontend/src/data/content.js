export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/poker", label: "Poker" },
  { to: "/predictions", label: "Predictions" },
  { to: "/promotions", label: "Promotions" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/about-us", label: "About Us" },
  { to: "/faq", label: "FAQ" },
];

export const MOBILE_EXTRA_LINKS = [
  { to: "/responsible-gaming", label: "Responsible Gaming" },
  { to: "/contact", label: "Contact" },
];

export const POKER_FEATURES = [
  { title: "Multiple Games", desc: "Explore the available Poker formats through the app." },
  { title: "Smooth Experience", desc: "A responsive interface designed for a seamless mobile experience." },
  { title: "Easy Game Selection", desc: "Find available games and tables easily." },
  { title: "Mobile First", desc: "Take your Poker experience wherever you go." },
];

export const PREDICTION_STEPS = [
  { n: "01", title: "Choose", desc: "Select an available event." },
  { n: "02", title: "Predict", desc: "Choose from available prediction options." },
  { n: "03", title: "Confirm", desc: "Review and confirm your selection." },
  { n: "04", title: "Follow", desc: "Follow the outcome through the app." },
];

export const WHY_CARDS = [
  { icon: "users", title: "Built for Players", desc: "Designed around a simple and engaging experience." },
  { icon: "smartphone", title: "Mobile First", desc: "Your gaming experience wherever you go." },
  { icon: "layers", title: "Poker + Predictions", desc: "Two experiences in one app." },
  { icon: "compass", title: "Simple Experience", desc: "Easy-to-understand navigation." },
  { icon: "shield", title: "Secure Platform", desc: "Designed with account and platform security in mind." },
  { icon: "headphones", title: "Player Support", desc: "Help when you need it." },
];

export const TRUST_ITEMS = [
  { icon: "lock", title: "Account Protection", desc: "Measures designed to protect user accounts." },
  { icon: "database", title: "Data Protection", desc: "Responsible handling of user information." },
  { icon: "card", title: "Secure Transactions", desc: "Secure processing through supported payment providers." },
  { icon: "scale", title: "Fair Play", desc: "Transparent rules and clearly communicated gameplay processes." },
];

export const HOW_IT_WORKS_STEPS = [
  { n: "01", title: "Download", desc: "Get the official NextZGames app." },
  { n: "02", title: "Register", desc: "Create your account and complete required verification." },
  { n: "03", title: "Explore", desc: "Choose Poker or Predictions." },
  { n: "04", title: "Play", desc: "Access the available experience through the app." },
  { n: "05", title: "Enjoy", desc: "Continue exploring available games and promotions." },
];

export const PROMOTIONS = [
  {
    slug: "welcome-boost",
    icon: "gift",
    title: "Welcome Boost",
    desc: "A welcome offer for new players joining the NextZGames app for the first time.",
    validity: "Launch period",
    terms: "New verified accounts only. One per player. In-app terms apply.",
  },
  {
    slug: "refer-and-earn",
    icon: "users",
    title: "Refer & Earn",
    desc: "Invite your friends to NextZGames and earn rewards when they join and play.",
    validity: "Ongoing",
    terms: "Reward credited after referred player completes verification. In-app terms apply.",
  },
  {
    slug: "weekend-predictions",
    icon: "zap",
    title: "Weekend Predictions Special",
    desc: "Featured prediction events with special pools every weekend in the app.",
    validity: "Every weekend",
    terms: "Available on selected events only. In-app terms apply.",
  },
];

export const FAQ_GROUPS = [
  {
    group: "General",
    items: [
      { q: "What is NextZGames?", a: "NextZGames is a digital gaming brand offering Poker and Predictions through a single modern mobile application. The website is our official front door — the gameplay happens inside the app." },
      { q: "What games are available?", a: "NextZGames currently focuses on two experiences: Poker and Predictions. Available formats and events are listed inside the app." },
      { q: "Where can I download the app?", a: "Head to our Download page. Android and iOS distribution links will be activated there as soon as the app launches." },
      { q: "Is NextZGames available on Android?", a: "Yes — the NextZGames app is being built for Android first. The download link will go live on our Download page at launch." },
      { q: "Is NextZGames available on iOS?", a: "An iOS version is planned. The App Store button on our Download page will be activated when the iOS app is available." },
    ],
  },
  {
    group: "Poker",
    items: [
      { q: "What Poker games are available?", a: "The app offers multiple Poker formats. Open the Poker lobby in the app to explore the games currently available." },
      { q: "How do I play Poker?", a: "Download the app, register, and head to the Poker lobby. Choose a table that suits you and take your seat." },
      { q: "Can I play Poker on mobile?", a: "Yes — NextZGames is mobile first. The entire Poker experience is designed for your phone." },
      { q: "How do I access Poker?", a: "Poker is available exclusively inside the NextZGames mobile app. There is no website gameplay." },
    ],
  },
  {
    group: "Predictions",
    items: [
      { q: "What are Predictions?", a: "Predictions let you choose outcomes on available events — pick your option, confirm your selection, and follow the result in the app." },
      { q: "How do Predictions work?", a: "Choose an event, select from the available prediction options, confirm your selection, then follow the outcome — all inside the app." },
      { q: "What events are available?", a: "Available events are listed in the Predictions section of the app and updated regularly." },
      { q: "Where can I access Predictions?", a: "Predictions are available exclusively inside the NextZGames mobile app." },
    ],
  },
  {
    group: "Account",
    items: [
      { q: "How do I create an account?", a: "Download the app, tap Register, and follow the on-screen steps to create and verify your account." },
      { q: "How do I verify my account?", a: "Verification is completed in the app during registration. You may be asked to confirm your mobile number and provide required details." },
      { q: "What if I forget my login details?", a: "Use the account recovery option on the app's login screen, or contact our support team through the Contact page." },
    ],
  },
  {
    group: "Payments",
    items: [
      { q: "How do I add funds?", a: "Funds are added inside the app through the supported payment providers listed in your account section." },
      { q: "What payment methods are supported?", a: "Supported payment methods are shown in the app's wallet section. We never process payments on this website." },
      { q: "How do I withdraw?", a: "Withdrawals are requested from the wallet section inside the app, subject to account verification." },
      { q: "How long do withdrawals take?", a: "Withdrawal timelines depend on the payment provider and verification status. Current timelines are communicated inside the app." },
    ],
  },
  {
    group: "App",
    items: [
      { q: "How do I download the app?", a: "Visit our Download page and use the Android or iOS option for your device. Desktop users can scan the QR code." },
      { q: "How do I install the app?", a: "Android users may need to allow installation from the official source. iOS users install directly from the App Store when available." },
      { q: "How do I update the app?", a: "Updates are delivered through the same channel you installed from. Keep the app updated for the latest games and promotions." },
    ],
  },
];

export const LEGAL_PAGES = {
  "terms-and-conditions": {
    title: "Terms & Conditions",
    intro: "These terms govern your use of the NextZGames website and mobile application. Final legal copy will be reviewed and approved before public launch.",
    sections: [
      { h: "1. The Service", p: "NextZGames provides Poker and Predictions experiences through its mobile application. This website is informational only — no gameplay, wagering, or transactions take place on this website." },
      { h: "2. Eligibility", p: "You must meet the applicable legal age requirement in your jurisdiction to register and play. Age and identity verification are completed inside the app. Residents of restricted jurisdictions may not be eligible to participate." },
      { h: "3. Your Account", p: "You are responsible for keeping your account credentials confidential and for all activity under your account. One account per player." },
      { h: "4. Acceptable Use", p: "You agree not to misuse the platform, interfere with other players, use automated tools, or attempt to circumvent platform rules and security controls." },
      { h: "5. Game Rules", p: "Specific rules for Poker formats and Predictions events are published inside the app and form part of these terms." },
      { h: "6. Changes", p: "We may update these terms from time to time. Material changes will be communicated through the app or website." },
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    intro: "This policy explains how NextZGames collects, uses and protects your information. Final legal copy will be reviewed and approved before public launch.",
    sections: [
      { h: "1. Information We Collect", p: "Account details you provide during registration (such as name, mobile number and email), gameplay and transaction records, and technical data such as device and usage information." },
      { h: "2. How We Use It", p: "To operate the app, verify your identity, process transactions, provide support, improve the experience, and meet legal and regulatory obligations." },
      { h: "3. Website Data", p: "This website collects contact-form submissions you choose to send us and anonymous usage analytics (such as page views and download-button clicks) to improve our marketing." },
      { h: "4. Sharing", p: "We do not sell your personal information. Data is shared only with service providers needed to operate the platform (such as payment processors) or where required by law." },
      { h: "5. Security", p: "We apply technical and organisational measures designed to protect your information. No method of transmission is 100% secure, but safeguarding your data is a core priority." },
      { h: "6. Your Rights", p: "You may request access, correction or deletion of your personal data by contacting us through the Contact page, subject to legal retention requirements." },
    ],
  },
  "payment-policy": {
    title: "Payment Policy",
    intro: "This policy describes how payments work inside the NextZGames app. Final legal copy will be reviewed and approved before public launch.",
    sections: [
      { h: "1. Where Payments Happen", p: "All deposits and withdrawals take place exclusively inside the NextZGames mobile app. This website never collects payments or stores payment credentials." },
      { h: "2. Deposits", p: "Funds can be added through the supported payment providers listed in the app's wallet section. Deposits are credited as per the provider's processing timelines." },
      { h: "3. Withdrawals", p: "Withdrawals are subject to account verification and the rules of the applicable payment provider. Timelines are communicated inside the app." },
      { h: "4. Fees & Limits", p: "Any applicable fees, minimums and maximums are displayed in the app before you confirm a transaction." },
      { h: "5. Failed Transactions", p: "If a transaction fails but your account was debited, the amount is typically reversed by the payment provider. Contact support if a reversal does not appear within the provider's stated timeline." },
      { h: "6. Responsible Play", p: "Deposit limits and other account controls are available in the app. See our Responsible Gaming page for details." },
    ],
  },
  "promotion-terms": {
    title: "Promotion Terms",
    intro: "General terms that apply to NextZGames promotions. Individual promotions may carry additional terms, published with each offer. Final legal copy will be reviewed and approved before public launch.",
    sections: [
      { h: "1. Eligibility", p: "Promotions are open to verified account holders who meet the eligibility criteria stated in each offer. One promotion per player unless stated otherwise." },
      { h: "2. How Promotions Work", p: "Each promotion includes its own description, validity period and participation steps, available inside the app and on our Promotions page." },
      { h: "3. Rewards", p: "Promotional rewards are credited as described in each offer and may carry usage conditions or expiry." },
      { h: "4. Fair Use", p: "We may withhold or reverse promotional benefits where we reasonably suspect abuse, multiple accounts, or manipulation." },
      { h: "5. Changes & Cancellation", p: "We may modify or withdraw a promotion where necessary, for example due to technical or regulatory reasons, without affecting rewards already fairly earned." },
      { h: "6. General Terms", p: "The NextZGames Terms & Conditions apply to all promotions in addition to these terms." },
    ],
  },
};
