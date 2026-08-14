const StatusBar = () => (
  <div className="flex items-center justify-between px-5 pt-3 text-[8px] text-white/60">
    <span>9:41</span>
    <span className="h-3 w-14 rounded-full bg-black/50" />
    <span className="tracking-tight">5G ▮▮▮</span>
  </div>
);

const AppHeader = ({ title }) => (
  <div className="flex items-center justify-between px-4 pt-3">
    <span className="font-heading text-[10px] font-extrabold tracking-[0.25em] text-white">
      NEXTZ<span className="text-[#D4C942]">GAMES</span>
    </span>
    <span className="h-5 w-5 rounded-full bg-[#D4C942]/25 border border-[#D4C942]/50" />
  </div>
);

const screens = {
  home: (
    <>
      <AppHeader />
      <div className="mx-3 mt-3 rounded-xl bg-[#30512d] p-3 border border-[#D4C942]/20">
        <p className="text-[7px] uppercase tracking-[0.2em] text-white/50">Total Balance</p>
        <p className="font-heading text-lg font-extrabold text-[#D4C942]">₹ 2,450.00</p>
      </div>
      <div className="mx-3 mt-2 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-[#1f361d] border border-[#D4C942]/30 p-3">
          <p className="font-heading text-[10px] font-bold text-white">POKER</p>
          <p className="text-[7px] text-white/50 mt-1">12 tables live</p>
        </div>
        <div className="rounded-xl bg-[#1f361d] border border-white/10 p-3">
          <p className="font-heading text-[10px] font-bold text-white">PREDICTIONS</p>
          <p className="text-[7px] text-white/50 mt-1">8 events open</p>
        </div>
      </div>
      <div className="mx-3 mt-2 rounded-xl bg-gradient-to-r from-[#D4C942] to-[#b8ad35] p-3">
        <p className="font-heading text-[9px] font-extrabold text-[#1f361d]">WELCOME BOOST</p>
        <p className="text-[7px] text-[#1f361d]/70">New player offer inside</p>
      </div>
      <div className="mt-auto mx-3 mb-3 flex justify-between rounded-xl bg-black/30 px-4 py-2 text-[7px] text-white/50">
        <span className="text-[#D4C942]">Home</span><span>Poker</span><span>Predict</span><span>Wallet</span>
      </div>
    </>
  ),
  poker: (
    <>
      <AppHeader />
      <p className="px-4 pt-3 font-heading text-[11px] font-bold text-white">Poker Lobby</p>
      <div className="mx-3 mt-2 space-y-2">
        {[
          ["No Limit Hold'em", "₹5 / ₹10", "6/9"],
          ["PLO 4", "₹10 / ₹25", "4/6"],
          ["Turbo Hold'em", "₹2 / ₹5", "8/9"],
          ["High Roller", "₹50 / ₹100", "3/6"],
        ].map(([name, blinds, seats]) => (
          <div key={name} className="flex items-center justify-between rounded-xl bg-[#30512d]/70 border border-white/8 px-3 py-2.5">
            <div>
              <p className="font-heading text-[9px] font-bold text-white">{name}</p>
              <p className="text-[7px] text-white/50">Blinds {blinds} · {seats} seated</p>
            </div>
            <span className="rounded-full bg-[#D4C942] px-2.5 py-1 font-heading text-[7px] font-extrabold text-[#1f361d]">JOIN</span>
          </div>
        ))}
      </div>
      <div className="mt-auto mx-3 mb-3 flex justify-between rounded-xl bg-black/30 px-4 py-2 text-[7px] text-white/50">
        <span>Home</span><span className="text-[#D4C942]">Poker</span><span>Predict</span><span>Wallet</span>
      </div>
    </>
  ),
  table: (
    <>
      <StatusBar />
      <div className="relative mx-3 mt-3 flex-1 rounded-2xl border border-[#D4C942]/25 bg-[radial-gradient(circle_at_center,#3a5c34_0%,#284525_55%,#1f361d_100%)]">
        <div className="absolute left-1/2 top-6 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-center">
          <p className="text-[6px] uppercase tracking-widest text-white/50">Pot</p>
          <p className="font-heading text-[10px] font-extrabold text-[#D4C942]">₹ 1,280</p>
        </div>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-1.5">
          {["A♠", "K♥", "Q♣", "7♦", "2♠"].map((c) => (
            <span key={c} className="flex h-8 w-6 items-center justify-center rounded bg-white font-heading text-[8px] font-extrabold text-[#1f361d] shadow">{c}</span>
          ))}
        </div>
        <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-1.5">
          {["9♠", "9♥"].map((c) => (
            <span key={c} className="flex h-9 w-7 items-center justify-center rounded border-2 border-[#D4C942] bg-white font-heading text-[9px] font-extrabold text-[#1f361d] shadow-lg">{c}</span>
          ))}
        </div>
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 text-[7px] font-heading font-bold">
          <span className="rounded-full bg-black/50 px-3 py-1.5 text-white/80">FOLD</span>
          <span className="rounded-full bg-black/50 px-3 py-1.5 text-white/80">CALL ₹80</span>
          <span className="rounded-full bg-[#D4C942] px-3 py-1.5 text-[#1f361d]">RAISE</span>
        </div>
      </div>
      <div className="mb-3" />
    </>
  ),
  predictions: (
    <>
      <AppHeader />
      <p className="px-4 pt-3 font-heading text-[11px] font-bold text-white">Predictions</p>
      <div className="mx-3 mt-2 rounded-xl bg-[#30512d]/70 border border-[#D4C942]/25 p-3">
        <p className="text-[7px] uppercase tracking-widest text-white/50">Cricket · Tonight 7:30 PM</p>
        <p className="font-heading text-[10px] font-bold text-white mt-1">Mumbai vs Chennai</p>
        <p className="text-[7px] text-white/60 mt-2">Who wins the match?</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <span className="rounded-lg bg-[#D4C942] py-2 text-center font-heading text-[8px] font-extrabold text-[#1f361d]">MUMBAI · 1.85</span>
          <span className="rounded-lg border border-white/20 py-2 text-center font-heading text-[8px] font-bold text-white/80">CHENNAI · 2.05</span>
        </div>
      </div>
      <div className="mx-3 mt-2 rounded-xl bg-[#30512d]/50 border border-white/8 p-3 opacity-70">
        <p className="text-[7px] uppercase tracking-widest text-white/50">Football · Tomorrow</p>
        <p className="font-heading text-[10px] font-bold text-white mt-1">Goa vs Bengaluru</p>
        <p className="text-[7px] text-white/60 mt-1">Total goals over 2.5?</p>
      </div>
      <div className="mt-auto mx-3 mb-3 rounded-xl bg-[#D4C942] py-2.5 text-center font-heading text-[8px] font-extrabold tracking-widest text-[#1f361d]">
        CONFIRM SELECTION · ₹200
      </div>
    </>
  ),
  wallet: (
    <>
      <AppHeader />
      <div className="mx-3 mt-3 rounded-2xl border border-[#D4C942]/30 bg-gradient-to-br from-[#30512d] to-[#1f361d] p-4">
        <p className="text-[7px] uppercase tracking-[0.2em] text-white/50">Wallet Balance</p>
        <p className="font-heading text-xl font-extrabold text-white mt-1">₹ 2,450.00</p>
        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-[#D4C942] px-3 py-1.5 font-heading text-[7px] font-extrabold text-[#1f361d]">ADD FUNDS</span>
          <span className="rounded-full border border-white/25 px-3 py-1.5 font-heading text-[7px] font-bold text-white/80">WITHDRAW</span>
        </div>
      </div>
      <p className="px-4 pt-3 text-[7px] uppercase tracking-widest text-white/50">Recent Activity</p>
      <div className="mx-3 mt-1.5 space-y-1.5">
        {[["Poker Buy-in", "-₹500"], ["Prediction Won", "+₹370"], ["Deposit UPI", "+₹1,000"]].map(([t, a]) => (
          <div key={t} className="flex justify-between rounded-lg bg-black/25 px-3 py-2">
            <span className="text-[8px] text-white/70">{t}</span>
            <span className={`font-heading text-[8px] font-bold ${a.startsWith("+") ? "text-[#D4C942]" : "text-white/60"}`}>{a}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto mx-3 mb-3 flex justify-between rounded-xl bg-black/30 px-4 py-2 text-[7px] text-white/50">
        <span>Home</span><span>Poker</span><span>Predict</span><span className="text-[#D4C942]">Wallet</span>
      </div>
    </>
  ),
};

export const PhoneMockup = ({ screen = "home", className = "", testid }) => (
  <div
    data-testid={testid || `phone-${screen}`}
    className={`relative w-[230px] shrink-0 rounded-[2.8rem] border border-white/15 bg-[#0f1c0e] p-[6px] shadow-[0_40px_80px_rgba(0,0,0,0.5)] ${className}`}
  >
    <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[2.4rem] bg-[#1f361d] flex flex-col">
      {screens[screen]}
    </div>
  </div>
);
