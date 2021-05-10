import React from "react";

import "./contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="phones">
        <a href="098-228-1488-228" className="link-tel">
          098-228-1488-228
        </a>
        <a href="098-228-1488-227" className="link-tel">
          098-228-1488-227
        </a>
      </div>
      <div className="social-network">
        <a href="telegram.com" className="link-social-network">
          Telegram
        </a>
        <a href="viber.com" className="link-social-network">
          Viber
        </a>
      </div>
    </div>
  );
};
