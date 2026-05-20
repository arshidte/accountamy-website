import { useNavigate } from "react-router-dom";
import { BRAND } from "../constants/theme";
import AnimateOnScroll from "../components/AnimateOnScroll";
import AnimatedCounter from "../components/AnimatedCounter";
import RippleButton from "../components/RippleButton";
import homeHeroTeam from "../assets/home-hero-team.png";

const HomePage = ({ screen }) => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = screen;
  const isCompact = isMobile || isTablet;

  return (
    <div className="page-transition-enter">
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: `url(${homeHeroTeam}) center/cover no-repeat`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Text-side overlay for readability */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "linear-gradient(to right, rgba(5,12,30,0.82) 0%, rgba(5,12,30,0.60) 45%, rgba(5,12,30,0.20) 70%, rgba(5,12,30,0.10) 100%)",
        }} />

        {/* Decorative elements */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              top: -120,
              right: -120,
              width: 500,
              height: 500,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(245,130,32,0.08) 0%, transparent 70%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -80,
              left: -80,
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
            }}
          />
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `${15 + i * 18}%`,
                left: `${60 + i * 8}%`,
                width: 6 + i * 2,
                height: 6 + i * 2,
                borderRadius: "50%",
                background: `rgba(245,130,32,${0.15 + i * 0.05})`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
          {!isMobile && (
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "45%",
                height: "100%",
                background:
                  "linear-gradient(150deg, transparent 40%, rgba(245,130,32,0.04) 60%, rgba(245,130,32,0.08) 100%)",
                clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            />
          )}
        </div>

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: isMobile ? "112px 20px 56px" : isTablet ? "128px 24px 72px" : "120px 24px 80px",
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isCompact ? "1fr" : "1fr 1fr",
              gap: isMobile ? 32 : 60,
              alignItems: "center",
            }}
          >
            {/* Left content */}
            <div>
              <div
                style={{
                  animation: "fadeInUp 0.8s ease-out",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(245,130,32,0.12)",
                  borderRadius: 50,
                  padding: "6px 16px",
                  marginBottom: 24,
                  border: "1px solid rgba(245,130,32,0.2)",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: BRAND.orange,
                    animation: "pulse 2s infinite",
                  }}
                />
                <span
                  style={{ fontSize: 13, fontWeight: 600, color: BRAND.orangeLight, letterSpacing: "0.3px" }}
                >
                  Admissions Open 2026
                </span>
              </div>

              <h1
                style={{
                  animation: "fadeInUp 0.8s ease-out 0.1s both",
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: isMobile ? 36 : isTablet ? 46 : 56,
                  lineHeight: 1.1,
                  color: BRAND.white,
                  marginBottom: 20,
                }}
              >
                Where Theory Meets the{" "}
                <span
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.orangeLight})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Boardroom
                </span>
              </h1>

              <p
                style={{
                  animation: "fadeInUp 0.8s ease-out 0.2s both",
                  fontSize: isMobile ? 16 : 18,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: 36,
                  maxWidth: 500,
                }}
              >
                Our intensive 250-hour, project-led curriculum is designed and delivered by real
                practicing professionals. Become a{" "}
                <strong style={{ color: BRAND.orangeLight }}>Day-1 Ready</strong> expert.
              </p>

              <div
                style={{
                  animation: "fadeInUp 0.8s ease-out 0.3s both",
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  flexDirection: isMobile ? "column" : "row",
                }}
              >
                <RippleButton
                  onClick={() => navigate("/courses")}
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.orangeLight})`,
                    color: BRAND.white,
                    padding: "16px 36px",
                    borderRadius: 12,
                    width: isMobile ? "100%" : "auto",
                    fontSize: 16,
                    fontWeight: 700,
                    boxShadow: "0 8px 30px rgba(245,130,32,0.4)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Explore Courses →
                </RippleButton>
                <RippleButton
                  onClick={() => navigate("/about")}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: BRAND.white,
                    padding: "16px 36px",
                    borderRadius: 12,
                    width: isMobile ? "100%" : "auto",
                    fontSize: 16,
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Learn More
                </RippleButton>
              </div>
            </div>

            {/* Right — feature cards */}
            <div style={{ animation: "slideInRight 1s ease-out 0.4s both" }}>
              <div style={{ display: "grid", gap: 16, position: "relative" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: 16,
                  }}
                >
                  {[
                    { icon: "📊", title: "Live Practical Data", desc: "Work with real-world financial data, not textbook exercises" },
                    { icon: "🎯", title: "100% Project-Based", desc: "Hands-on projects that build a job-ready portfolio" },
                    { icon: "👨‍💼", title: "Expert Mentors", desc: "Learn from professionals who manage accounts daily" },
                    { icon: "🏆", title: "Certified Program", desc: "CTDS & Centre Certification upon completion" },
                  ].map((card, i) => (
                    <div
                      key={i}
                      style={{
                        background: "rgba(0,0,0,0.38)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 16,
                        padding: 24,
                        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                        cursor: "default",
                        animationDelay: `${0.5 + i * 0.1}s`,
                        animation: "scaleIn 0.6s ease-out both",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-6px)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                        e.currentTarget.style.borderColor = "rgba(245,130,32,0.3)";
                        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.background = "rgba(0,0,0,0.38)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div style={{ fontSize: 32, marginBottom: 12 }}>{card.icon}</div>
                      <h3 style={{ color: BRAND.white, fontSize: 15, fontWeight: 700, marginBottom: 6 }}>
                        {card.title}
                      </h3>
                      <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.5 }}>
                        {card.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section
        style={{
          background: BRAND.white,
          borderBottom: `1px solid ${BRAND.gray200}`,
          padding: isMobile ? "40px 20px" : "48px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: isMobile ? 24 : 32,
          }}
        >
          {[
            { value: 250, suffix: "+", label: "Hours of Training", color: BRAND.orange },
            { value: 9, suffix: "+", label: "Industry Modules", color: BRAND.blue },
            { value: 100, suffix: "%", label: "Project-Based", color: BRAND.green },
            { value: 12, suffix: "+", label: "Recognitions", color: BRAND.orange },
          ].map((s, i) => (
            <AnimateOnScroll key={i} delay={i * 120}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'DM Serif Display',serif",
                    fontSize: isMobile ? 34 : 48,
                    fontWeight: 400,
                    color: s.color,
                    lineHeight: 1,
                  }}
                >
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 14, color: BRAND.gray600, marginTop: 8, fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ── WHY ACCOUNTAMY ── */}
      <section style={{ padding: isMobile ? "72px 20px" : "100px 24px", background: BRAND.gray50 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimateOnScroll>
            <div
              style={{
                textAlign: "center",
                maxWidth: 650,
                margin: `0 auto ${isMobile ? 40 : 60}px`,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: BRAND.orange,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                Why Choose Us
              </span>
              <h2
                style={{
                  fontFamily: "'DM Serif Display',serif",
                  fontSize: isMobile ? 32 : 42,
                  color: BRAND.navy,
                  marginTop: 12,
                }}
              >
                Not Just Another Accounting Course
              </h2>
              <p style={{ color: BRAND.gray600, lineHeight: 1.7, marginTop: 16, fontSize: 16 }}>
                We replace textbooks with live practical data. You're mentored by experts who manage
                accounts and tax compliance every day.
              </p>
            </div>
          </AnimateOnScroll>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {[
              { icon: "🔬", title: "Live Practical Data", desc: "Manage the books of a simulated company using real financial data — GST filings, TDS returns, payroll processing, and complete audit trails.", accent: "#4f46e5" },
              { icon: "🏗️", title: "Project-Led Curriculum", desc: "Every module culminates in a hands-on project. The Grand Finale project integrates everything into a complete company lifecycle.", accent: BRAND.orange },
              { icon: "👔", title: "Real Professionals", desc: "Your mentors aren't academics — they're chartered accountants and tax professionals handling live client portfolios.", accent: "#0891b2" },
              { icon: "⚡", title: "Day-1 Ready", desc: "Graduate with the skills and confidence of a seasoned professional. Walk into any accounts department and start contributing immediately.", accent: "#7c3aed" },
              { icon: "🛡️", title: "Complete Compliance", desc: "Master every compliance requirement: GST, Income Tax, TDS/TCS, PF/ESI, and banking — all under one intensive program.", accent: "#059669" },
              { icon: "📜", title: "Dual Certification", desc: "Earn your CTDS Certificate plus a Centre Certificate — industry-recognized credentials that set you apart from the competition.", accent: "#dc2626" },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div
                  style={{
                    background: BRAND.white,
                    borderRadius: 20,
                    padding: isMobile ? 24 : 36,
                    border: `1px solid ${BRAND.gray200}`,
                    transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                    cursor: "default",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = `0 25px 50px rgba(0,0,0,0.08), 0 0 0 1px ${item.accent}22`;
                    e.currentTarget.style.borderColor = `${item.accent}44`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = BRAND.gray200;
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: `${item.accent}10`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 28,
                      marginBottom: 20,
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: BRAND.navy, marginBottom: 10 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: BRAND.gray600 }}>{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSE PREVIEW ── */}
      <section style={{ padding: isMobile ? "72px 20px" : "100px 24px", background: BRAND.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isCompact ? "1fr" : "1fr 1fr",
              gap: isMobile ? 32 : 80,
              alignItems: "center",
            }}
          >
            <AnimateOnScroll>
              <div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: BRAND.orange,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  Flagship Program
                </span>
                <h2
                  style={{
                    fontFamily: "'DM Serif Display',serif",
                    fontSize: isMobile ? 30 : 40,
                    color: BRAND.navy,
                    marginTop: 12,
                    lineHeight: 1.2,
                  }}
                >
                  Professional Certification in Accounts & Practical Taxation
                </h2>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: `${BRAND.orange}12`,
                    borderRadius: 8,
                    padding: "8px 16px",
                    marginTop: 16,
                    marginBottom: 24,
                  }}
                >
                  <span style={{ fontSize: 20 }}>⏱️</span>
                  <span style={{ fontWeight: 700, color: BRAND.orange }}>4.5 Months</span>
                  <span style={{ color: BRAND.gray400 }}>|</span>
                  <span style={{ fontWeight: 700, color: BRAND.navy }}>250 Hours</span>
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: BRAND.gray600, marginBottom: 32 }}>
                  Over 4.5 months, you won't just read textbooks — you will manage the books of a
                  simulated company using live practical data. Most courses teach you the "What." We
                  teach you the "How."
                </p>
                <RippleButton
                  onClick={() => navigate("/courses")}
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.navy}, ${BRAND.blueLight})`,
                    color: BRAND.white,
                    padding: "14px 32px",
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: 700,
                    boxShadow: "0 6px 25px rgba(10,35,81,0.25)",
                  }}
                >
                  View Full Curriculum →
                </RippleButton>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: 12,
                }}
              >
                {[
                  "Business Accounting Pro",
                  "Indirect Tax (GST)",
                  "Direct Tax (TDS/TCS)",
                  "Payroll & Banking",
                  "Applied Auditing",
                  "Advanced Excel",
                  "Tally Prime",
                  "GCC VAT",
                  "Grand Finale Project",
                ].map((mod, i) => (
                  <div
                    key={i}
                    style={{
                      background:
                        i === 8
                          ? `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.orangeLight})`
                          : BRAND.gray50,
                      color: i === 8 ? BRAND.white : BRAND.gray800,
                      borderRadius: 12,
                      padding: "16px 18px",
                      fontSize: 14,
                      fontWeight: 600,
                      border: i === 8 ? "none" : `1px solid ${BRAND.gray200}`,
                      transition: "all 0.3s ease",
                      cursor: "default",
                      gridColumn: i === 8 ? "1 / -1" : "auto",
                      textAlign: i === 8 ? "center" : "left",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                    onMouseEnter={(e) => {
                      if (i !== 8) {
                        e.currentTarget.style.borderColor = BRAND.orange;
                        e.currentTarget.style.background = BRAND.orangePale;
                      } else {
                        e.currentTarget.style.transform = "scale(1.02)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (i !== 8) {
                        e.currentTarget.style.borderColor = BRAND.gray200;
                        e.currentTarget.style.background = BRAND.gray50;
                      } else {
                        e.currentTarget.style.transform = "scale(1)";
                      }
                    }}
                  >
                    <span
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background:
                          i === 8 ? "rgba(255,255,255,0.2)" : `${BRAND.orange}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 13,
                        fontWeight: 800,
                        flexShrink: 0,
                        color: i === 8 ? BRAND.white : BRAND.orange,
                      }}
                    >
                      {i === 8 ? "★" : `0${i + 1}`}
                    </span>
                    {mod}
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── RECOGNITION MARQUEE ── */}
      <section
        style={{
          padding: isMobile ? "56px 20px" : "70px 24px",
          background: BRAND.cream,
          borderTop: `1px solid ${BRAND.gray200}`,
          borderBottom: `1px solid ${BRAND.gray200}`,
        }}
      >
        <AnimateOnScroll>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: BRAND.orange,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Trusted & Recognized
            </span>
            <h2
              style={{
                fontFamily: "'DM Serif Display',serif",
                fontSize: isMobile ? 28 : 36,
                color: BRAND.navy,
                marginTop: 12,
              }}
            >
              Recognized by Leading Bodies
            </h2>
          </div>
        </AnimateOnScroll>
        <div style={{ overflow: "hidden", position: "relative" }}>
          <div
            style={{
              display: "flex",
              animation: "marquee 30s linear infinite",
              width: "max-content",
            }}
          >
            {[...Array(2)].map((_, rep) =>
              [
                "KAB",
                "IAF",
                "IAS Accredited",
                "Media & Entertainment Skills Council",
                "Vidyadaan",
                "DAC",
                "EIAC",
                "Telecom Sector Council",
                "NIELIT",
                "MSME",
              ].map((name, i) => (
                <div
                  key={`${rep}-${i}`}
                  style={{
                    background: BRAND.white,
                    borderRadius: 12,
                    padding: "16px 32px",
                    margin: "0 12px",
                    border: `1px solid ${BRAND.gray200}`,
                    fontSize: 14,
                    fontWeight: 600,
                    color: BRAND.gray600,
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    minHeight: 56,
                  }}
                >
                  <span
                    style={{ width: 10, height: 10, borderRadius: "50%", background: BRAND.orange }}
                  />
                  {name}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: isMobile ? "72px 20px" : "100px 24px",
          background: `linear-gradient(135deg, ${BRAND.navy} 0%, ${BRAND.blue} 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,130,32,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <AnimateOnScroll>
          <div
            style={{
              maxWidth: 700,
              margin: "0 auto",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <h2
              style={{
                fontFamily: "'DM Serif Display',serif",
                fontSize: isMobile ? 32 : 44,
                color: BRAND.white,
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              Ready to Become a Day-1 Ready Professional?
            </h2>
            <p
              style={{
                fontSize: isMobile ? 16 : 18,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                marginBottom: 36,
              }}
            >
              Join hundreds of learners who transformed their careers with Accountamy's practical,
              hands-on training.
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <RippleButton
                onClick={() => navigate("/contact")}
                style={{
                  background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.orangeLight})`,
                  color: BRAND.white,
                  padding: "16px 40px",
                  borderRadius: 12,
                  width: isMobile ? "100%" : "auto",
                  fontSize: 17,
                  fontWeight: 700,
                  boxShadow: "0 8px 30px rgba(245,130,32,0.4)",
                }}
              >
                Start Your Journey
              </RippleButton>
              <RippleButton
                onClick={() => navigate("/courses")}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: BRAND.white,
                  padding: "16px 36px",
                  borderRadius: 12,
                  width: isMobile ? "100%" : "auto",
                  fontSize: 17,
                  fontWeight: 600,
                  backdropFilter: "blur(10px)",
                }}
              >
                View Courses
              </RippleButton>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
};

export default HomePage;
