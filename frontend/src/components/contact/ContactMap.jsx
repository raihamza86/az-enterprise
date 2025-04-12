import React from "react";

const ContactMap = () => {
  return (
    <div className="w-full h-[450px] overflow-hidden md:mt-16">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.466969242701!2d71.70376507460387!3d29.385892649473792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b91f4a89601cd%3A0xaf34dd6c1d59a43a!2sCodes%20Thinker!5e0!3m2!1sen!2s!4v1744440214259!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
