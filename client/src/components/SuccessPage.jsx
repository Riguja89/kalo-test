import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="productdetail-container">
      <h1>Thanks for your order!</h1>
      <p>
        We appreciate your business! If you have any questions, please email:
        <a href="mailto:orders@example.com"> orders@example.com</a>.
      </p>

      <Link to="/">
        <button>Keep Shopping</button>
      </Link>
    </div>
  );
};

export default SuccessPage;
