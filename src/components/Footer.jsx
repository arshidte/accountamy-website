import { useNavigate } from "react-router-dom";
import { BRAND } from "../constants/theme";
import logo from "../assets/accountamy-logo.png";

const Footer = ({ screen }) => {
  const navigate = useNavigate();
  return (
  <footer style={{ background: BRAND.white, borderTop: `1px solid ${BRAND.gray200}`, padding: screen.isMobile ? "48px 20px 24px" : "60px 24px 30px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: screen.isMobile
            ? "1fr"
            : screen.isTablet
            ? "1.5fr 1fr 1fr"
            : "2fr 1fr 1fr 1fr",
          gap: screen.isMobile ? 28 : 40,
          marginBottom: 48,
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ marginBottom: 16 }}>
            <img
              src={logo}
              alt="Accountamy"
              style={{
                height: 38,
                width: "auto",
                display: "block",
                objectFit: "contain",
              }}
            />
          </div>
          <p style={{ fontSize: 14, color: BRAND.gray600, lineHeight: 1.7, maxWidth: 300 }}>
            Crafting confident accounting professionals through intensive, project-led training with
            real practical data.
          </p>
        </div>

        {/* Link columns */}
        {[
          {
            title: "Quick Links",
            items: [
              { l: "Home", p: "home" },
              { l: "About", p: "about" },
              { l: "Courses", p: "courses" },
              { l: "Contact", p: "contact" },
            ],
          },
          {
            title: "Programs",
            items: [
              { l: "PCAPT Certification", p: "courses" },
              { l: "GST Training", p: "courses" },
              { l: "Tally Prime", p: "courses" },
              { l: "Advanced Excel", p: "courses" },
            ],
          },
          {
            title: "Resources",
            items: [
              { l: "Blog", p: "home" },
              { l: "Student Portal", p: "home" },
              { l: "Careers", p: "contact" },
              { l: "FAQs", p: "home" },
            ],
          },
        ].map((col, i) => (
          <div key={i}>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: BRAND.navy,
                marginBottom: 16,
                letterSpacing: "0.5px",
              }}
            >
              {col.title}
            </h4>
            {col.items.map((item, j) => (
              <div
                key={j}
                onClick={() => {
                  navigate(item.p === "home" ? "/" : `/${item.p}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                style={{
                  fontSize: 14,
                  color: BRAND.gray600,
                  marginBottom: 10,
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = BRAND.orange)}
                onMouseLeave={(e) => (e.target.style.color = BRAND.gray600)}
              >
                {item.l}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div
        style={{
          borderTop: `1px solid ${BRAND.gray200}`,
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: screen.isMobile ? "flex-start" : "center",
          flexDirection: screen.isMobile ? "column" : "row",
          gap: screen.isMobile ? 8 : 0,
        }}
      >
        <p style={{ fontSize: 13, color: BRAND.gray500 }}>
          © 2026 Accountamy. All rights reserved.
        </p>
        <p style={{ fontSize: 13, color: BRAND.gray500 }}>accountamy.com</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
