import { useState, useEffect } from "react";
import { BRAND } from "../constants/theme";
import RippleButton from "./RippleButton";

const InputField = ({ label, field, type = "text", placeholder, form, handleChange, handleBlur, touched, errors }) => (
  <div style={{ marginBottom: 16 }}>
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
        padding: "12px 14px",
        borderRadius: 8,
        border: `1.5px solid ${touched[field] && errors[field] ? BRAND.red : BRAND.gray200}`,
        fontSize: 14,
        fontFamily: "inherit",
        color: BRAND.gray800,
        background: BRAND.white,
        transition: "all 0.25s ease",
      }}
    />
    {touched[field] && errors[field] && (
      <p style={{ color: BRAND.red, fontSize: 12, marginTop: 4, fontWeight: 500 }}>
        {errors[field]}
      </p>
    )}
  </div>
);

const EnquiryPopup = ({ screen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("enquiry_popup_seen");
    if (!hasSeenPopup) {
      // Show popup 10 seconds after first visit
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem("enquiry_popup_seen", "true");
  };

  const validate = (fields) => {
    const e = {};
    if (!fields.name.trim()) e.name = "Name is required";
    if (!fields.phone.trim()) e.phone = "Phone is required";
    else if (!/^[0-9]{10}$/.test(fields.phone.replace(/\D/g, "")))
      e.phone = "Enter a valid 10-digit number";
    if (!fields.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = "Enter a valid email";
    return e;
  };

  const handleBlur = (field) => {
    setTouched((p) => ({ ...p, [field]: true }));
    setErrors(validate(form));
  };

  const handleChange = (field, value) => {
    const newForm = { ...form, [field]: value };
    setForm(newForm);
    if (touched[field]) setErrors(validate(newForm));
  };

  const handleSubmit = () => {
    const allTouched = { name: true, phone: true, email: true };
    setTouched(allTouched);
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      closePopup();
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        background: "rgba(3, 10, 28, 0.6)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        animation: "fadeIn 0.3s ease-out",
      }}
    >
      <div
        style={{
          background: BRAND.white,
          borderRadius: 20,
          width: "100%",
          maxWidth: 420,
          boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
          position: "relative",
          animation: "scaleIn 0.4s ease-out",
          overflow: "hidden",
        }}
      >
        <button
          onClick={closePopup}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "rgba(0,0,0,0.05)",
            border: "none",
            width: 32,
            height: 32,
            borderRadius: "50%",
            fontSize: 18,
            color: BRAND.gray600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
            zIndex: 2,
          }}
          onMouseEnter={(e) => (e.target.style.background = "rgba(0,0,0,0.1)")}
          onMouseLeave={(e) => (e.target.style.background = "rgba(0,0,0,0.05)")}
        >
          ×
        </button>

        <div style={{ background: `linear-gradient(135deg, ${BRAND.navy}, ${BRAND.blue})`, padding: "24px", color: BRAND.white }}>
          <h3 style={{ fontSize: 22, fontFamily: "'DM Serif Display',serif", marginBottom: 6 }}>
            Start Your Journey
          </h3>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
            Need help choosing a course? Drop your details and we'll guide you.
          </p>
        </div>

        <div style={{ padding: "24px" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "20px 0 10px" }}>
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #16a34a, #22c55e)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  fontSize: 30,
                  color: BRAND.white,
                }}
              >
                ✓
              </div>
              <h4 style={{ fontSize: 18, color: BRAND.navy, marginBottom: 8 }}>Got it!</h4>
              <p style={{ color: BRAND.gray500, fontSize: 14 }}>
                We'll reach out to you shortly.
              </p>
            </div>
          ) : (
            <>
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
              <RippleButton
                onClick={handleSubmit}
                style={{
                  width: "100%",
                  background: `linear-gradient(135deg, ${BRAND.orange}, ${BRAND.orangeLight})`,
                  color: BRAND.white,
                  padding: "12px",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 700,
                  marginTop: 8,
                  boxShadow: "0 4px 15px rgba(245,130,32,0.3)",
                }}
              >
                Request Callback
              </RippleButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryPopup;
