import React from "react";

function ContactUsButton({ href }: { href: string }) {
  return (
    <button className="hidden md:block border-2 px-4 py-2 border-primary-800 text-primary-800 rounded-md font-semibold">
      Contact Us
    </button>
  );
}

export default ContactUsButton;
