import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BRAND } from "../constants/theme";
import RippleButton from "./RippleButton";
import logo from "../assets/accountamy-logo.png";

const Nav = ({ screen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isMobile, isTablet } = screen;
  const navigateBase = useNavigate();
  const location = useLocation();
  const page = location.pathname.substring(1) || "home";

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navigate = (p) => {
    navigateBase(p === "home" ? "/" : `/${p}`);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "courses", label: "Courses" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: isMobile ? 12 : 18,
        left: isMobile ? 12 : 20,
        right: isMobile ? 12 : 20,
        zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(14px)",
        border: `1px solid ${scrolled ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.06)"}`,
        borderRadius: isMobile ? 16 : 18,
        boxShadow: scrolled
          ? "0 8px 32px rgba(0,0,0,0.12)"
          : "0 4px 20px rgba(0,0,0,0.08)",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        padding: scrolled
          ? isMobile ? "10px 0" : "12px 0"
          : isMobile ? "12px 0" : "16px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          padding: "0 24px",
        }}
      >
        {/* Logo */}
        <div
          onClick={() => navigate("home")}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <img
            src={logo}
            alt="Accountamy"
            style={{
              height: isMobile ? 36 : 44,
              width: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
          {!isMobile && (
              <div
                style={{
                  fontSize: 9,
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  display: "none",
                }}
              >
                Crafting Confident Professionals
              </div>
            )}
        </div>

        {/* Desktop nav */}
        {isMobile ? (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(0,0,0,0.05)",
              color: BRAND.navy,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            {mobileOpen ? "×" : "☰"}
          </button>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: isTablet ? 2 : 6 }}>
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => navigate(l.id)}
                style={{
                  background: page === l.id ? "rgba(245,130,32,0.15)" : "transparent",
                  border: "none",
                  color: page === l.id ? BRAND.orange : BRAND.gray800,
                  padding: isTablet ? "8px 14px" : "8px 18px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: page === l.id ? 700 : 500,
                  fontFamily: "inherit",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  if (page !== l.id) {
                    e.target.style.color = BRAND.navy;
                    e.target.style.background = "rgba(0,0,0,0.04)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (page !== l.id) {
                    e.target.style.color = BRAND.gray800;
                    e.target.style.background = "transparent";
                  }
                }}
              >
                {l.label}
              </button>
            ))}
            <RippleButton
              onClick={() => navigate("contact")}
              style={{
                marginLeft: isTablet ? 8 : 12,
                background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.orangeLight})`,
                color: BRAND.white,
                padding: isTablet ? "10px 18px" : "10px 24px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 700,
                boxShadow: "0 4px 20px rgba(245,130,32,0.35)",
                transition: "all 0.3s ease",
              }}
            >
              Enroll Now
            </RippleButton>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && mobileOpen && (
        <div style={{ padding: "8px 16px 16px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => navigate(l.id)}
                style={{
                  width: "100%",
                  background: page === l.id ? "rgba(245,130,32,0.1)" : "rgba(0,0,0,0.03)",
                  border: `1px solid ${page === l.id ? "rgba(245,130,32,0.2)" : "rgba(0,0,0,0.06)"}`,
                  color: page === l.id ? BRAND.orange : BRAND.gray800,
                  padding: "12px 14px",
                  borderRadius: 12,
                  textAlign: "left",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {l.label}
              </button>
            ))}
            <RippleButton
              onClick={() => navigate("contact")}
              style={{
                width: "100%",
                marginTop: 4,
                background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.orangeLight})`,
                color: BRAND.white,
                padding: "13px 16px",
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Enroll Now
            </RippleButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
