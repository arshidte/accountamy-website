import { BRAND } from "../constants/theme";

const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

export const injectStyles = () => {
  if (document.getElementById("accountamy-styles")) return;
  const style = document.createElement("style");
  style.id = "accountamy-styles";
  style.textContent = `
    *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
    html { scroll-behavior:smooth; }
    body { font-family:'Plus Jakarta Sans',sans-serif; color:${BRAND.gray800}; overflow-x:hidden; background:${BRAND.white}; }

    @keyframes fadeInUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
    @keyframes fadeIn { from{opacity:0} to{opacity:1} }
    @keyframes slideInLeft { from{opacity:0;transform:translateX(-60px)} to{opacity:1;transform:translateX(0)} }
    @keyframes slideInRight { from{opacity:0;transform:translateX(60px)} to{opacity:1;transform:translateX(0)} }
    @keyframes scaleIn { from{opacity:0;transform:scale(0.85)} to{opacity:1;transform:scale(1)} }
    @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
    @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
    @keyframes countUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
    @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
    @keyframes gradientMove { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
    @keyframes ripple { to{transform:scale(4);opacity:0} }
    @keyframes heroGlow { 0%,100%{box-shadow:0 0 60px rgba(245,130,32,0.15)} 50%{box-shadow:0 0 100px rgba(245,130,32,0.3)} }

    .animate-on-scroll { opacity:0; transform:translateY(30px); transition:all 0.7s cubic-bezier(0.22,1,0.36,1); }
    .animate-on-scroll.visible { opacity:1; transform:translateY(0); }

    .page-transition-enter { animation: fadeIn 0.4s ease-out forwards; }

    ::selection { background:${BRAND.orange}; color:white; }

    input:focus, textarea:focus, select:focus { outline:none; border-color:${BRAND.orange} !important; box-shadow:0 0 0 3px rgba(245,130,32,0.15) !important; }

    .btn-ripple { position:relative; overflow:hidden; }
    .btn-ripple .ripple-effect { position:absolute; border-radius:50%; background:rgba(255,255,255,0.4); transform:scale(0); animation:ripple 0.6s linear; pointer-events:none; }
  `;
  document.head.appendChild(style);
};
