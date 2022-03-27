import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import React, { useState, useEffect } from 'react';

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".parent-container {\n  padding: 3px;\n}\n\n.delivery-time-container {\n  margin: 3px 0;\n}\n\n.delivery-time-container p {\n  font-weight: 500;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 14px;\n}\n\n.input-container {\n  border-bottom: solid 1px #2874f0;\n  display: flex;\n  align-items: center;\n  max-width: 250px;\n}\n\ninput {\n  border: none;\n  background-color: transparent;\n}\n\ninput:focus {\n  outline: none;\n  border: none;\n}\n";
n(css,{});

var PinCodeComponent = function PinCodeComponent(props) {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      token = _useState2[0],
      setToken = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      pinCode = _useState4[0],
      setPincode = _useState4[1];

  var _useState5 = useState(""),
      _useState6 = _slicedToArray(_useState5, 2),
      message = _useState6[0],
      setMessage = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      error = _useState8[0],
      setError = _useState8[1];

  useEffect(function () {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var data = JSON.stringify({
      email: props.email,
      password: props.password
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: data,
      redirect: "follow"
    };
    fetch("https://apiv2.shiprocket.in/v1/external/auth/login", requestOptions).then(function (response) {
      return response.json();
    }).then(function (result) {
      return setToken(result.token);
    })["catch"](function (error) {
      return console.log("error", error);
    });
  }, [props]);

  var fetchDeliveryTime = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(event) {
      var myHeaders, requestOptions;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (pinCode.length === 6) {
                myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", "Bearer ".concat(token));
                requestOptions = {
                  method: "GET",
                  headers: myHeaders,
                  redirect: "follow"
                };
                fetch("https://apiv2.shiprocket.in/v1/external/courier/serviceability?pickup_postcode=".concat(props.pickupPincode, "&delivery_postcode=").concat(pinCode, "&cod=1&weight=0.5"), requestOptions).then(function (response) {
                  return response.json();
                }).then(function (result) {
                  if (result.status === 200) {
                    if (result.data.available_courier_companies.length > 0) {
                      setError(false);
                      setMessage("Delivery in ".concat(result.data.available_courier_companies[0].estimated_delivery_days, " days"));
                    }
                  } else {
                    setError(true);
                    setMessage("Delivery pincode not serviceable");
                  }
                })["catch"](function (error) {
                  return console.log("error", error);
                });
              } else {
                setError(true);
                setMessage("Please enter a valid Pin Code");
              }

              event.preventDefault();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchDeliveryTime(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement("div", {
    className: "parent-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-container",
    style: {
      borderBottom: "solid 1px ".concat(error ? "red" : "#2874f0")
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 9 12",
    className: "_1kbGNj",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fill: error ? "red" : "#2874f0",
    className: "_6xm1dD",
    d: "M4.2 5.7c-.828 0-1.5-.672-1.5-1.5 0-.398.158-.78.44-1.06.28-.282.662-.44 1.06-.44.828 0 1.5.672 1.5 1.5 0 .398-.158.78-.44 1.06-.28.282-.662.44-1.06.44zm0-5.7C1.88 0 0 1.88 0 4.2 0 7.35 4.2 12 4.2 12s4.2-4.65 4.2-7.8C8.4 1.88 6.52 0 4.2 0z",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: function onSubmit(e) {
      return fetchDeliveryTime(e);
    }
  }, /*#__PURE__*/React.createElement("input", {
    onChange: function onChange(e) {
      return setPincode(e.target.value);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "delivery-time-container"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "".concat(error ? "red" : "black")
    }
  }, message)));
};

export { PinCodeComponent as default };
