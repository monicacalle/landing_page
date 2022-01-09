import React from "react";

const Card = () => {
  return (
    <>
      <div className="card m-auto" style={{ width: "15rem" }}>
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">
            Card title
          </h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#" className="btn btn-primary d-flex justify-content-center">
            Find Out More!
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
