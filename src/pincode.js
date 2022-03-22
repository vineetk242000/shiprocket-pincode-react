import React, { useState, useEffect } from "react";
import "./index.css";

const PinCodeComponent = (props) => {
  const [token, setToken] = useState(null);
  const [pinCode, setPincode] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let data = JSON.stringify({
      email: props.email,
      password: props.password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };

    fetch("https://apiv2.shiprocket.in/v1/external/auth/login", requestOptions)
      .then((response) => response.json())
      .then((result) => setToken(result.token))
      .catch((error) => console.log("error", error));
  }, [props]);

  const fetchDeliveryTime = async (event) => {
    if (pinCode.length === 6) {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        `https://apiv2.shiprocket.in/v1/external/courier/serviceability?pickup_postcode=${props.pickupPincode}&delivery_postcode=${pinCode}&cod=1&weight=0.5`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.status === 200) {
            if (result.data.available_courier_companies.length > 0) {
              setError(false);
              setMessage(
                `Delivery in ${result.data.available_courier_companies[0].estimated_delivery_days} days`
              );
            }
          } else {
            setError(true);
            setMessage("Delivery pincode not serviceable");
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      setError(true);
      setMessage("Please enter a valid Pin Code");
    }
    event.preventDefault();
  };

  return (
    <div className="parent-container">
      <div
        className="top"
        style={{ borderBottom: `solid 1px ${error ? "red" : "#2874f0"}` }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 9 12"
          className="_1kbGNj"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={error ? "red" : "#2874f0"}
            className="_6xm1dD"
            d="M4.2 5.7c-.828 0-1.5-.672-1.5-1.5 0-.398.158-.78.44-1.06.28-.282.662-.44 1.06-.44.828 0 1.5.672 1.5 1.5 0 .398-.158.78-.44 1.06-.28.282-.662.44-1.06.44zm0-5.7C1.88 0 0 1.88 0 4.2 0 7.35 4.2 12 4.2 12s4.2-4.65 4.2-7.8C8.4 1.88 6.52 0 4.2 0z"
            fillRule="evenodd"
          ></path>
        </svg>
        <form onSubmit={(e) => fetchDeliveryTime(e)}>
          <input
            className="input"
            onChange={(e) => setPincode(e.target.value)}
          />
        </form>
      </div>
      <div className="delivery-time-container">
        <p style={{ color: `${error ? "red" : "black"}` }}>{message}</p>
      </div>
    </div>
  );
};

export default PinCodeComponent;
