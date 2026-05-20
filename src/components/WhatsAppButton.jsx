import { useState } from "react";

const WhatsAppButton = () => {
  const [hover, setHover] = useState(false);

  // Using a placeholder number. The user can update it with their real WhatsApp number.
  const whatsappNumber = "1234567890";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 9999,
        background: "#25D366", // Official WhatsApp Green
        color: "#FFF",
        width: 60,
        height: 60,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: hover
          ? "0 8px 25px rgba(37, 211, 102, 0.4)"
          : "0 4px 15px rgba(0, 0, 0, 0.15)",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
        cursor: "pointer",
        textDecoration: "none",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label="Chat on WhatsApp"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.01 2.014c-5.513 0-9.998 4.486-9.998 10 0 1.954.558 3.824 1.62 5.488L2 22l4.636-1.576c1.62.983 3.486 1.516 5.374 1.516 5.513 0 10-4.486 10-10s-4.487-10-10-10zm0 18.28c-1.637 0-3.245-.425-4.66-1.228l-.334-.19-3.468 1.18 1.206-3.385-.208-.344C3.655 14.814 3.09 13.093 3.09 12.014c0-4.912 4.004-8.916 8.92-8.916 4.915 0 8.919 4.004 8.919 8.916 0 4.91-4.004 8.914-8.919 8.914zm4.896-6.685c-.268-.134-1.585-.783-1.83-.873-.245-.09-.424-.134-.603.134-.179.268-.692.873-.848 1.052-.156.179-.312.202-.58.068-.268-.134-1.133-.418-2.158-1.332-.797-.71-1.335-1.588-1.491-1.856-.156-.268-.016-.413.118-.547.12-.12.268-.312.402-.468.134-.156.178-.268.267-.446.09-.178.045-.334-.022-.468-.067-.134-.603-1.455-.826-1.993-.217-.525-.437-.453-.603-.461-.156-.008-.335-.008-.513-.008-.178 0-.47.067-.714.335-.245.268-.937.915-.937 2.233s.96 2.59 1.094 2.768c.134.179 1.886 2.879 4.568 4.037.638.275 1.135.439 1.523.562.64.203 1.223.174 1.684.106.518-.077 1.585-.648 1.808-1.272.223-.624.223-1.158.156-1.272-.067-.114-.245-.181-.513-.315z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
