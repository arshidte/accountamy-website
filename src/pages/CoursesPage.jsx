import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BRAND } from "../constants/theme";
import AnimateOnScroll from "../components/AnimateOnScroll";
import RippleButton from "../components/RippleButton";

const modules = [
  { id: 0, title: "Business Accounting Pro", sub: "Basic Accounting & Bookkeeping", desc: "Master the fundamentals of double-entry bookkeeping, journal entries, ledgers, trial balance, and preparation of final accounts using live company data.", icon: "📒", weeks: "3 Weeks" },
  { id: 1, title: "Indirect Tax (GST)", sub: "GST, Eway Bill, E-Invoice, Filing", desc: "Learn the complete GST compliance cycle — registration, invoice generation, Eway Bills, E-invoicing, return filing (GSTR-1, 3B), and reconciliation.", icon: "🧾", weeks: "3 Weeks" },
  { id: 2, title: "Direct Tax", sub: "Income Tax, TDS, TCS", desc: "Hands-on with Income Tax computations, TDS deductions & returns, TCS provisions, advance tax, and ITR preparation for individuals and businesses.", icon: "💰", weeks: "3 Weeks" },
  { id: 3, title: "Payroll Compliance & Banking", sub: "PF/ESI & Banking Operations", desc: "Process payroll from scratch — PF/ESI registrations, monthly returns, challans, and banking operations including reconciliation and cash management.", icon: "🏦", weeks: "2 Weeks" },
  { id: 4, title: "Applied Auditing", sub: "Practical Audit Procedures", desc: "Learn audit procedures through simulated engagements — vouching, verification, physical verification, bank confirmations, and report drafting.", icon: "🔍", weeks: "2 Weeks" },
  { id: 5, title: "Advanced Excel", sub: "Financial Modeling & Analysis", desc: "Advanced formulas, pivot tables, macros, VLOOKUP/XLOOKUP, dashboards, and data visualization tailored for accounting professionals.", icon: "📊", weeks: "2 Weeks" },
  { id: 6, title: "Tally Prime", sub: "Complete ERP Software Training", desc: "Master Tally Prime for company creation, voucher entries, GST-compliant invoicing, inventory management, and generating statutory reports.", icon: "💻", weeks: "2 Weeks" },
  { id: 7, title: "GCC VAT", sub: "Gulf Countries VAT System", desc: "Understand the GCC VAT framework — registration, return filing, input tax credit mechanisms, and compliance for businesses operating in the Gulf.", icon: "🌐", weeks: "1 Week" },
  { id: 8, title: "The Grand Finale Project", sub: "End-to-End Company Lifecycle", desc: "Your capstone: manage a simulated company from incorporation to year-end — complete books, compliance filings, audit preparation, and financial reporting.", icon: "🏆", weeks: "2 Weeks" },
];

const CoursesPage = ({ screen }) => {
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState(null);
  const { isMobile, isTablet } = screen;

  return (
    <div className="page-transition-enter">
      {/* Hero */}
      <section
        style={{
          minHeight: "55vh",
          display: "flex",
          alignItems: "center",
          background: `linear-gradient(135deg, ${BRAND.navy} 0%, #1e4d8a 100%)`,
          position: "relative",
        }}
      >
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
          <div
            style={{
              animation: "fadeInUp 0.8s ease-out",
              display: "grid",
              gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr auto",
              alignItems: "center",
              gap: isMobile ? 28 : 60,
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(245,130,32,0.12)",
                  borderRadius: 50,
                  padding: "6px 16px",
                  border: "1px solid rgba(245,130,32,0.2)",
                  marginBottom: 20,
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 700, color: BRAND.orangeLight }}>
                  PCAPT — Flagship Program
                </span>
              </div>
              <h1
                style={{
                  fontFamily: "'DM Serif Display',serif",
                  fontSize: isMobile ? 34 : 48,
                  color: BRAND.white,
                  lineHeight: 1.15,
                }}
              >
                Professional Certification in Accounts & Practical Taxation
              </h1>
              <p
                style={{
                  fontSize: isMobile ? 16 : 18,
                  color: "rgba(255,255,255,0.7)",
                  marginTop: 20,
                  lineHeight: 1.7,
                  maxWidth: 600,
                }}
              >
                Most courses teach you the "What." We teach you the "How." Over 4.5 months, you
                won't just read textbooks — you will manage the books of a simulated company.
              </p>
            </div>

            <div style={{ animation: "scaleIn 0.8s ease-out 0.3s both" }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 24,
                  padding: isMobile ? 28 : 36,
                  textAlign: "center",
                  minWidth: isMobile ? "auto" : 220,
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Serif Display',serif",
                    fontSize: isMobile ? 42 : 56,
                    color: BRAND.orange,
                  }}
                >
                  4.5
                </div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: 600 }}>
                  Months
                </div>
                <div
                  style={{
                    width: "60%",
                    height: 1,
                    background: "rgba(255,255,255,0.1)",
                    margin: "16px auto",
                  }}
                />
                <div
                  style={{
                    fontFamily: "'DM Serif Display',serif",
                    fontSize: isMobile ? 42 : 56,
                    color: BRAND.white,
                  }}
                >
                  250
                </div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: 600 }}>
                  Hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key badges */}
      <section
        style={{
          padding: isMobile ? "32px 20px" : "40px 24px",
          background: BRAND.white,
          borderBottom: `1px solid ${BRAND.gray200}`,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "100% Project-Based", color: "#16a34a", bg: "#dcfce7" },
            { label: "Complete Compliance", color: "#2563eb", bg: "#dbeafe" },
            { label: "Audit Ready", color: "#9333ea", bg: "#f3e8ff" },
            { label: "Job-Ready Portfolio", color: BRAND.orange, bg: BRAND.orangePale },
          ].map((b, i) => (
            <span
              key={i}
              style={{
                padding: "10px 22px",
                borderRadius: 50,
                background: b.bg,
                color: b.color,
                fontSize: 14,
                fontWeight: 700,
                transition: "transform 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {b.label}
            </span>
          ))}
        </div>
      </section>

      {/* Modules accordion */}
      <section
        style={{ padding: isMobile ? "72px 20px" : "100px 24px", background: BRAND.gray50 }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
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
                Curriculum
              </span>
              <h2
                style={{
                  fontFamily: "'DM Serif Display',serif",
                  fontSize: isMobile ? 30 : 38,
                  color: BRAND.navy,
                  marginTop: 12,
                }}
              >
                9 Intensive Modules
              </h2>
              <p style={{ color: BRAND.gray600, marginTop: 12 }}>
                Click any module to explore its details
              </p>
            </div>
          </AnimateOnScroll>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {modules.map((mod, i) => {
              const isOpen = activeModule === mod.id;
              return (
                <AnimateOnScroll key={mod.id} delay={i * 60}>
                  <div
                    style={{
                      background: BRAND.white,
                      borderRadius: 16,
                      overflow: "hidden",
                      border: `1px solid ${isOpen ? BRAND.orange : BRAND.gray200}`,
                      boxShadow: isOpen ? "0 10px 30px rgba(245,130,32,0.1)" : "none",
                      transition: "all 0.35s ease",
                    }}
                  >
                    <button
                      onClick={() => setActiveModule(isOpen ? null : mod.id)}
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: isMobile ? "18px" : "20px 24px",
                        display: "flex",
                        alignItems: isMobile ? "flex-start" : "center",
                        gap: 16,
                        flexWrap: isMobile ? "wrap" : "nowrap",
                        fontFamily: "inherit",
                        textAlign: "left",
                      }}
                    >
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 12,
                          background: isOpen
                            ? `linear-gradient(135deg,${BRAND.orange},${BRAND.orangeLight})`
                            : BRAND.gray100,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 22,
                          transition: "all 0.3s ease",
                          flexShrink: 0,
                        }}
                      >
                        {mod.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 16, fontWeight: 700, color: BRAND.navy }}>
                          {mod.title}
                        </div>
                        <div style={{ fontSize: 13, color: BRAND.gray400, marginTop: 2 }}>
                          {mod.sub}
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: BRAND.orange,
                          background: `${BRAND.orange}12`,
                          padding: "4px 12px",
                          borderRadius: 20,
                          marginLeft: isMobile ? 64 : 0,
                        }}
                      >
                        {mod.weeks}
                      </span>
                      <span
                        style={{
                          fontSize: 20,
                          color: BRAND.gray400,
                          transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        ▾
                      </span>
                    </button>
                    <div
                      style={{
                        maxHeight: isOpen ? 200 : 0,
                        overflow: "hidden",
                        transition: "max-height 0.4s cubic-bezier(0.22,1,0.36,1)",
                      }}
                    >
                      <div style={{ padding: isMobile ? "0 18px 18px" : "0 24px 20px 88px" }}>
                        <p style={{ fontSize: 14, lineHeight: 1.7, color: BRAND.gray600 }}>
                          {mod.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section style={{ padding: isMobile ? "64px 20px" : "80px 24px", background: BRAND.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: BRAND.orange,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                Tools You'll Master
              </span>
              <h2
                style={{
                  fontFamily: "'DM Serif Display',serif",
                  fontSize: isMobile ? 28 : 34,
                  color: BRAND.navy,
                  marginTop: 12,
                }}
              >
                Industry-Standard Software
              </h2>
            </div>
          </AnimateOnScroll>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            {[
              { name: "Microsoft Excel", icon: "📊" },
              { name: "Tally Prime", icon: "💻" },
              { name: "GST Portal", icon: "🧾" },
              { name: "GCC VAT System", icon: "🌐" },
              { name: "PF/ESI Portals", icon: "🏛️" },
              { name: "TDS System", icon: "💰" },
            ].map((t, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div
                  style={{
                    background: BRAND.gray50,
                    borderRadius: 16,
                    padding: "24px 32px",
                    textAlign: "center",
                    border: `1px solid ${BRAND.gray200}`,
                    transition: "all 0.3s ease",
                    cursor: "default",
                    minWidth: isMobile ? 130 : 150,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 8 }}>{t.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: BRAND.gray800 }}>{t.name}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Certification & CTA */}
      <section
        style={{
          padding: isMobile ? "64px 20px" : "80px 24px",
          background: `linear-gradient(135deg, ${BRAND.navy}, ${BRAND.blue})`,
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <AnimateOnScroll>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎓</div>
            <h2
              style={{
                fontFamily: "'DM Serif Display',serif",
                fontSize: isMobile ? 30 : 36,
                color: BRAND.white,
                marginBottom: 16,
              }}
            >
              Dual Certification
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: isMobile ? 15 : 17,
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              Upon completion, you receive both the CTDS Certificate and a Centre Certificate —
              recognized credentials that validate your practical expertise.
            </p>
            <div
              style={{
                display: "flex",
                gap: 20,
                justifyContent: "center",
                marginBottom: 40,
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              {["CTDS Certificate", "Centre Certificate"].map((c, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 16,
                    padding: "20px 32px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 8 }}>📜</div>
                  <div style={{ color: BRAND.white, fontWeight: 700, fontSize: 15 }}>{c}</div>
                </div>
              ))}
            </div>
            <RippleButton
              onClick={() => navigate("/contact")}
              style={{
                background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.orangeLight})`,
                color: BRAND.white,
                padding: "16px 40px",
                borderRadius: 12,
                fontSize: 17,
                fontWeight: 700,
                boxShadow: "0 8px 30px rgba(245,130,32,0.4)",
              }}
            >
              Enroll Now — Limited Seats
            </RippleButton>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
