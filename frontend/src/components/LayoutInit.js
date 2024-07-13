import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutInit({ children }) {
  return (
    <div>
      <Navbar />
      <div>
        <section>
          <div>{children}</div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
