import { useState } from "react";
import { BRAND } from "../constants/theme";
import RippleButton from "../components/RippleButton";
import contactAdmissions from "../assets/contact-admissions.png";

const InputField = ({ label, field, type = "text", placeholder, form, handleChange, handleBlur, touched, errors }) => (
  <div style={{ marginBottom: 20 }}>
    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: BRAND.gray800, marginBottom: 6 }}>
      {label}
    </label>
    <input
      type={type}
      value={form[field]}
      placeholder={placeholder}
      onChange={(e) => handleChange(field, e.target.value)}
      onBlur={() => handleBlur(field)}
      style={{
        width: "100%",
        padding: "14px 16px",
        borderRadius: 10,
        border: `1.5px solid ${touched[field] && errors[field] ? BRAND.red : BRAND.gray200}`,
        fontSize: 15,
        fontFamily: "inherit",
        color: BRAND.gray800,
        background: BRAND.white,
        transition: "all 0.25s ease",
      }}
    />
    {touched[field] && errors[field] && (
      <p style={{ color: BRAND.red, fontSize: 12, marginTop: 5, fontWeight: 500 }}>
        {errors[field]}
      </p>
    )}
  </div>
);

const ContactPage = ({ screen }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "", qualification: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({});
  const { isMobile, isTablet } = screen;

  const validate = (fields, currentStep) => {
    const e = {};
    if (currentStep >= 1) {
      if (!fields.name.trim()) e.name = "Name is required";
      if (!fields.email.trim()) e.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = "Enter a valid email";
      if (!fields.phone.trim()) e.phone = "Phone is required";
      else if (!/^[0-9]{10}$/.test(fields.phone.replace(/\D/g, "")))
        e.phone = "Enter a valid 10-digit number";
    }
    if (currentStep >= 2) {
      if (!fields.qualification) e.qualification = "Please select your qualification";
    }
    return e;
  };

  const handleBlur = (field) => {
    setTouched((p) => ({ ...p, [field]: true }));
    setErrors(validate(form, step));
  };

  const handleChange = (field, value) => {
    const newForm = { ...form, [field]: value };
    setForm(newForm);
    if (touched[field]) setErrors(validate(newForm, step));
  };

  const nextStep = () => {
    const allTouched = {};
    if (step === 1) ["name", "email", "phone"].forEach((f) => (allTouched[f] = true));
    if (step === 2) allTouched.qualification = true;
    setTouched((p) => ({ ...p, ...allTouched }));
    const e = validate(form, step);
    setErrors(e);
    const stepFields = step === 1 ? ["name", "email", "phone"] : ["qualification"];
    if (stepFields.some((f) => e[f])) return;
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <div className="page-transition-enter">
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `linear-gradient(135deg, ${BRAND.navy}, ${BRAND.blue})`,
          }}
        >
          <div
            style={{
              background: BRAND.white,
              borderRadius: 24,
              padding: isMobile ? 32 : 60,
              textAlign: "center",
              maxWidth: 500,
              animation: "scaleIn 0.6s ease-out",
              boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #16a34a, #22c55e)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                fontSize: 40,
              }}
            >
              ✓
            </div>
            <h2
              style={{
                fontFamily: "'DM Serif Display',serif",
                fontSize: isMobile ? 28 : 32,
                color: BRAND.navy,
                marginBottom: 12,
              }}
            >
              Inquiry Submitted!
            </h2>
            <p style={{ color: BRAND.gray600, lineHeight: 1.7, fontSize: 16, marginBottom: 32 }}>
              Thank you, {form.name}! Our admissions team will reach out to you at {form.email}{" "}
              within 24 hours.
            </p>
            <RippleButton
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setForm({ name: "", email: "", phone: "", qualification: "", message: "" });
                setTouched({});
              }}
              style={{
                background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.orangeLight})`,
                color: BRAND.white,
                padding: "14px 32px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
              }}
            >
              Submit Another Inquiry
            </RippleButton>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-transition-enter">
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: `linear-gradient(135deg, ${BRAND.navy} 0%, ${BRAND.blue} 100%)`,
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: isMobile ? "112px 20px 56px" : "120px 24px 80px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 1fr",
              gap: isMobile ? 32 : 80,
              alignItems: "center",
            }}
          >
            {/* Left info */}
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
                Get In Touch
              </span>
              <h1
                style={{
                  fontFamily: "'DM Serif Display',serif",
                  fontSize: isMobile ? 34 : 48,
                  color: BRAND.white,
                  marginTop: 12,
                  lineHeight: 1.15,
                }}
              >
                Start Your Journey to Becoming Day-1 Ready
              </h1>
              <p
                style={{
                  fontSize: isMobile ? 15 : 17,
                  color: "rgba(255,255,255,0.7)",
                  marginTop: 20,
                  lineHeight: 1.7,
                }}
              >
                Fill in your details and our admissions counselor will get in touch with you to
                guide you through enrollment.
              </p>

              <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { icon: "📧", label: "Email", value: "info@accountamy.com", link: "mailto:info@accountamy.com" },
                  { icon: "📞", label: "Admissions", value: "+91 7994833515", link: "tel:+917994833515" },
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 20,
                      }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>
                        {c.label}
                      </div>
                      <a
                        href={c.link}
                        style={{
                          fontSize: 15,
                          color: BRAND.white,
                          fontWeight: 600,
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = BRAND.orange)}
                        onMouseLeave={(e) => (e.target.style.color = BRAND.white)}
                      >
                        {c.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 32,
                  borderRadius: 22,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 20px 50px rgba(3, 10, 28, 0.22)",
                }}
              >
                <img
                  src={contactAdmissions}
                  alt="Admissions counselor meeting with a prospective student"
                  style={{
                    width: "100%",
                    height: isMobile ? 240 : 280,
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Right form */}
            <div
              style={{
                background: BRAND.white,
                borderRadius: 24,
                padding: isMobile ? 24 : 40,
                boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
                animation: "slideInRight 0.8s ease-out 0.2s both",
              }}
            >
              {/* Step indicator */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    style={{ display: "flex", alignItems: "center", flex: s < 3 ? 1 : "none" }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background:
                          step >= s
                            ? `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.orangeLight})`
                            : BRAND.gray100,
                        color: step >= s ? BRAND.white : BRAND.gray400,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        fontWeight: 700,
                        transition: "all 0.3s ease",
                        boxShadow: step >= s ? "0 4px 12px rgba(245,130,32,0.3)" : "none",
                      }}
                    >
                      {s}
                    </div>
                    {s < 3 && (
                      <div
                        style={{
                          flex: 1,
                          height: 2,
                          margin: "0 8px",
                          background: step > s ? BRAND.orange : BRAND.gray200,
                          transition: "background 0.3s ease",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <div style={{ animation: "fadeIn 0.3s ease-out" }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: BRAND.navy, marginBottom: 4 }}>
                    Personal Details
                  </h3>
                  <p style={{ fontSize: 13, color: BRAND.gray400, marginBottom: 24 }}>
                    Tell us about yourself
                  </p>
                  <InputField
                    label="Full Name"
                    field="name"
                    placeholder="e.g. Priya Sharma"
                    form={form}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                    errors={errors}
                  />
                  <InputField
                    label="Email Address"
                    field="email"
                    type="email"
                    placeholder="priya@example.com"
                    form={form}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                    errors={errors}
                  />
                  <InputField
                    label="Phone Number"
                    field="phone"
                    type="tel"
                    placeholder="9876543210"
                    form={form}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                    errors={errors}
                  />
                  <RippleButton
                    onClick={nextStep}
                    style={{
                      width: "100%",
                      background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.orangeLight})`,
                      color: BRAND.white,
                      padding: "14px",
                      borderRadius: 10,
                      fontSize: 15,
                      fontWeight: 700,
                      marginTop: 8,
                      boxShadow: "0 6px 20px rgba(245,130,32,0.3)",
                    }}
                  >
                    Continue →
                  </RippleButton>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div style={{ animation: "fadeIn 0.3s ease-out" }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: BRAND.navy, marginBottom: 4 }}>
                    Education Background
                  </h3>
                  <p style={{ fontSize: 13, color: BRAND.gray400, marginBottom: 24 }}>
                    Help us understand your profile
                  </p>
                  <div style={{ marginBottom: 20 }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: 13,
                        fontWeight: 600,
                        color: BRAND.gray800,
                        marginBottom: 6,
                      }}
                    >
                      Highest Qualification
                    </label>
                    <select
                      value={form.qualification}
                      onChange={(e) => handleChange("qualification", e.target.value)}
                      onBlur={() => handleBlur("qualification")}
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        borderRadius: 10,
                        border: `1.5px solid ${
                          touched.qualification && errors.qualification ? BRAND.red : BRAND.gray200
                        }`,
                        fontSize: 15,
                        fontFamily: "inherit",
                        color: form.qualification ? BRAND.gray800 : BRAND.gray400,
                        background: BRAND.white,
                        appearance: "none",
                        cursor: "pointer",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23475569' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                      }}
                    >
                      <option value="">Select qualification</option>
                      <option value="12th">12th / Higher Secondary</option>
                      <option value="bcom">B.Com</option>
                      <option value="bba">BBA / BMS</option>
                      <option value="mcom">M.Com</option>
                      <option value="mba">MBA / PGDM</option>
                      <option value="ca-inter">CA Inter / IPCC</option>
                      <option value="other">Other</option>
                    </select>
                    {touched.qualification && errors.qualification && (
                      <p style={{ color: BRAND.red, fontSize: 12, marginTop: 5, fontWeight: 500 }}>
                        {errors.qualification}
                      </p>
                    )}
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: 13,
                        fontWeight: 600,
                        color: BRAND.gray800,
                        marginBottom: 6,
                      }}
                    >
                      Anything you'd like to tell us? (optional)
                    </label>
                    <textarea
                      value={form.message}
                      rows={4}
                      placeholder="Your goals, questions, or anything relevant..."
                      onChange={(e) => handleChange("message", e.target.value)}
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        borderRadius: 10,
                        border: `1.5px solid ${BRAND.gray200}`,
                        fontSize: 15,
                        fontFamily: "inherit",
                        color: BRAND.gray800,
                        resize: "vertical",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: 12,
                      flexDirection: isMobile ? "column" : "row",
                    }}
                  >
                    <RippleButton
                      onClick={() => setStep(1)}
                      style={{
                        flex: 1,
                        background: BRAND.gray100,
                        color: BRAND.gray800,
                        padding: "14px",
                        borderRadius: 10,
                        fontSize: 15,
                        fontWeight: 600,
                      }}
                    >
                      ← Back
                    </RippleButton>
                    <RippleButton
                      onClick={nextStep}
                      style={{
                        flex: 2,
                        background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.orangeLight})`,
                        color: BRAND.white,
                        padding: "14px",
                        borderRadius: 10,
                        fontSize: 15,
                        fontWeight: 700,
                        boxShadow: "0 6px 20px rgba(245,130,32,0.3)",
                      }}
                    >
                      Continue →
                    </RippleButton>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div style={{ animation: "fadeIn 0.3s ease-out" }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: BRAND.navy, marginBottom: 4 }}>
                    Review & Submit
                  </h3>
                  <p style={{ fontSize: 13, color: BRAND.gray400, marginBottom: 24 }}>
                    Please confirm your details
                  </p>
                  <div
                    style={{
                      background: BRAND.gray50,
                      borderRadius: 14,
                      padding: 24,
                      border: `1px solid ${BRAND.gray200}`,
                      marginBottom: 24,
                    }}
                  >
                    {[
                      { label: "Name", value: form.name },
                      { label: "Email", value: form.email },
                      { label: "Phone", value: form.phone },
                      { label: "Qualification", value: form.qualification },
                      ...(form.message ? [{ label: "Message", value: form.message }] : []),
                    ].map((r, i, arr) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          flexDirection: isMobile ? "column" : "row",
                          gap: isMobile ? 6 : 0,
                          padding: "10px 0",
                          borderBottom: i < arr.length - 1 ? `1px solid ${BRAND.gray200}` : "none",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 13,
                            color: BRAND.gray400,
                            fontWeight: 600,
                            minWidth: 100,
                          }}
                        >
                          {r.label}
                        </span>
                        <span
                          style={{
                            fontSize: 14,
                            color: BRAND.gray800,
                            fontWeight: 600,
                            textAlign: isMobile ? "left" : "right",
                          }}
                        >
                          {r.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: 12,
                      flexDirection: isMobile ? "column" : "row",
                    }}
                  >
                    <RippleButton
                      onClick={() => setStep(2)}
                      style={{
                        flex: 1,
                        background: BRAND.gray100,
                        color: BRAND.gray800,
                        padding: "14px",
                        borderRadius: 10,
                        fontSize: 15,
                        fontWeight: 600,
                      }}
                    >
                      ← Back
                    </RippleButton>
                    <RippleButton
                      onClick={handleSubmit}
                      style={{
                        flex: 2,
                        background: "linear-gradient(135deg, #16a34a, #22c55e)",
                        color: BRAND.white,
                        padding: "14px",
                        borderRadius: 10,
                        fontSize: 15,
                        fontWeight: 700,
                        boxShadow: "0 6px 20px rgba(22,163,74,0.3)",
                      }}
                    >
                      Submit Inquiry ✓
                    </RippleButton>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
