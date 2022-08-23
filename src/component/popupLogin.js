import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PopupLogin() {
  const [popupSign, setPopupSign] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      {popupSign ? (
        <div className="sm:hidden flex justify-center items-center w-full h-12 bg-navbar fixed bottom-0">
          <div
            onClick={() => setPopupSign(false)}
            className="absolute bottom-12 right-2"
          >
            X
          </div>
          <button className="h-7 w-16 items-center border-2 border-white rounded-md">
            <p onClick={() => navigate("login")} className="text-white text-sm">
              Log in
            </p>
          </button>
          <button className="h-7 w-16 items-center bg-button rounded-md ml-4">
            <p
              onClick={() => navigate("signup")}
              className="text-black text-sm"
            >
              Sign up
            </p>{" "}
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PopupLogin;
