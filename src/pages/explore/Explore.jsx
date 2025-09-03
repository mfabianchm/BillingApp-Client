import "./Explore.css";

const Explore = () => {
  return (
    <div className="explore-container text-light">
      <div className="first-row" style={{ overflowY: "auto" }}>
        categories
      </div>
      <hr className="horizontal-line"></hr>
      <div className="second-row" style={{ overflowY: "auto" }}>
        items
      </div>
      <div className="rith-column d-flex flex-column">
        <div className="customer-form-container" style={{ height: "15%" }}>
          customer form
        </div>
        <hr className="my-3 text-light"></hr>
        <div
          className="cart-items-container"
          style={{ height: "55%", overflowY: "auto" }}
        >
          cart items
        </div>
        <div className="cart-summary-container" style={{ height: "30%" }}>
          cart summary
        </div>
      </div>
    </div>
  );
};

export default Explore;
