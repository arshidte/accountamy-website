import { BRAND } from "../constants/theme";
import AnimateOnScroll from "../components/AnimateOnScroll";
import aboutMentorSession from "../assets/about-mentor-session.png";

const AboutPage = ({ screen }) => {
  const { isMobile, isTablet } = screen;

  return (
    <div className="page-transition-enter">
      {/* Hero */}
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          background: `linear-gradient(135deg, ${BRAND.navy} 0%, ${BRAND.blue} 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 200,
              background: "linear-gradient(0deg, rgba(10,35,81,0.8), transparent)",
            }}
          />
        </div>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: isMobile ? "112px 20px 56px" : "140px 24px 80px",
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
        >
          <div style={{ animation: "fadeInUp 0.8s ease-out" }}>
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: BRAND.orangeLight,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              About Accountamy
            </span>
            <h1
              style={{
                fontFamily: "'DM Serif Display',serif",
                fontSize: isMobile ? 36 : 52,
                color: BRAND.white,
                marginTop: 12,
                lineHeight: 1.15,
                maxWidth: 700,
              }}
            >
              Crafting Confident Accounting Professionals
            </h1>
            <p
              style={{
                fontSize: isMobile ? 16 : 18,
                color: "rgba(255,255,255,0.7)",
                marginTop: 20,
                maxWidth: 600,
                lineHeight: 1.7,
              }}
            >
              Most graduates enter the workforce with theoretical knowledge but lack the confidence
              to handle a live situation or data. Accountamy changes that.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: isMobile ? "72px 20px" : "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 1fr",
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
                  Our Story
                </span>
                <h2
                  style={{
                    fontFamily: "'DM Serif Display',serif",
                    fontSize: isMobile ? 30 : 38,
                    color: BRAND.navy,
                    marginTop: 12,
                    lineHeight: 1.2,
                  }}
                >
                  Bridging the Gap Between Education & Employment
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: BRAND.gray600, marginTop: 20 }}>
                  We bridge the gap between education and employment by replacing textbooks with live
                  practical data. Our intensive 250-hour, project-led curriculum is designed and
                  delivered by real practicing professionals.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: BRAND.gray600, marginTop: 16 }}>
                  You aren't taught by traditional teachers; you are mentored by experts who manage
                  accounts and tax compliance every day. We transform learners into 'Day-1 Ready'
                  experts with the skills and confidence of a seasoned professional.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div
                style={{
                  background: BRAND.white,
                  borderRadius: 24,
                  overflow: "hidden",
                  border: `1px solid ${BRAND.gray200}`,
                  boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)",
                }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={aboutMentorSession}
                    alt="Mentor guiding a learner through practical accounting work"
                    style={{
                      width: "100%",
                      aspectRatio: "4 / 3",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0) 28%, rgba(10,35,81,0.08) 100%)",
                    }}
                  />
                </div>
                <div style={{ padding: isMobile ? 20 : 24 }}>
                  <p
                    style={{
                      fontSize: isMobile ? 18 : 22,
                      fontFamily: "'DM Serif Display',serif",
                      color: BRAND.navy,
                      lineHeight: 1.5,
                      fontStyle: "italic",
                    }}
                  >
                    Real Data. Real Projects. Real Professionals.
                  </p>
                  <div
                    style={{
                      width: 50,
                      height: 4,
                      background: BRAND.orange,
                      borderRadius: 2,
                      marginTop: 20,
                    }}
                  />
                  <p style={{ color: BRAND.gray600, marginTop: 12, fontSize: 14, fontWeight: 600 }}>
                    — Accountamy Motto
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section
        style={{ padding: isMobile ? "72px 20px" : "80px 24px", background: BRAND.gray50 }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 32,
            }}
          >
            {[
              {
                icon: "🔭",
                title: "Our Vision",
                text: "To be the global benchmark for excellence in practical Accounts and Finance education.",
                gradient: `linear-gradient(135deg, ${BRAND.navy}, ${BRAND.blueLight})`,
              },
              {
                icon: "🎯",
                title: "Our Mission",
                text: "To bridge the gap between education and employment through intensive, project-led training that transforms learners into 'Day-1 Ready' Accounts and Finance professionals.",
                gradient: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.orangeLight})`,
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 150}>
                <div
                  style={{
                    background: item.gradient,
                    borderRadius: 24,
                    padding: isMobile ? 28 : 48,
                    color: BRAND.white,
                    height: "100%",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <div style={{ fontSize: isMobile ? 38 : 48, marginBottom: 20 }}>{item.icon}</div>
                  <h3
                    style={{
                      fontFamily: "'DM Serif Display',serif",
                      fontSize: isMobile ? 24 : 30,
                      marginBottom: 16,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.7, opacity: 0.9 }}>
                    {item.text}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: isMobile ? "72px 20px" : "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: isMobile ? 40 : 60 }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: BRAND.orange,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                Core Values
              </span>
              <h2
                style={{
                  fontFamily: "'DM Serif Display',serif",
                  fontSize: isMobile ? 30 : 38,
                  color: BRAND.navy,
                  marginTop: 12,
                }}
              >
                What We Stand For
              </h2>
            </div>
          </AnimateOnScroll>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                ? "repeat(2, 1fr)"
                : "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {[
              { icon: "💡", title: "Practical Learning", desc: "Every concept taught through real-world application" },
              { icon: "🤝", title: "Industry Mentorship", desc: "Guided by practicing accounting professionals" },
              { icon: "🌍", title: "Global Standards", desc: "Curriculum aligned with international best practices" },
              { icon: "🚀", title: "Career Readiness", desc: "Transforming learners into competent professionals" },
            ].map((v, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div
                  style={{
                    textAlign: "center",
                    padding: 32,
                    borderRadius: 20,
                    border: `1px solid ${BRAND.gray200}`,
                    transition: "all 0.35s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = BRAND.orange;
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = BRAND.gray200;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: 40, marginBottom: 16 }}>{v.icon}</div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: BRAND.navy, marginBottom: 8 }}>
                    {v.title}
                  </h4>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: BRAND.gray600 }}>{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
