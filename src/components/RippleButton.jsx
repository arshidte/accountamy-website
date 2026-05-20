const RippleButton = ({ children, onClick, style, disabled, type = "button" }) => {
  const handleClick = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple-effect";
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
    if (onClick) onClick(e);
  };

  return (
    <button
      type={type}
      className="btn-ripple"
      onClick={handleClick}
      disabled={disabled}
      style={{ border: "none", cursor: disabled ? "not-allowed" : "pointer", fontFamily: "inherit", ...style }}
    >
      {children}
    </button>
  );
};

export default RippleButton;
