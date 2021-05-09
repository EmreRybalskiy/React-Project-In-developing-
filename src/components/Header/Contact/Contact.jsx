import React from "react";

import "./contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="phones">
        <a href="#" className="link-tel">
          098-228-1488-228
        </a>
        <a href="#" className="link-tel">
          098-228-1488-227
        </a>
      </div>
      <div className="social-network">
        <a href="#" className="link-social-network">Telegram</a>
        <a href="#" className="link-social-network">Viber</a>
      </div>
    </div>
  );
};
