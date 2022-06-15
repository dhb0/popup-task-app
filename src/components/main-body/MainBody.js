import React, { useEffect, useState } from "react";
import background from "../../assets/images/image 1.png";
import warning from "../../assets/images/warning.png";
import success from "../../assets/images/success.png";
import useApi, { urls } from "../../hooks/useApi";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { setName, setEmail, setFonts, setSelectedFont } from "../../actions";
import fontData from "../../assets/fonts/index.json";
import "./MainBody.css";

const MainBody = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fontsRes, fontsReq] = useApi();
  const { headline, description, successMessage } = useSelector(
    (state) => state.settings
  );
  const { fonts } = useSelector((state) => state.uiGlobal);
  const { selectedFont } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setFormSubmitted(true);
  };

  const filterFonts = (fontsArr) => {
    return fontsArr
      .filter((font) => font.category !== "monospace")
      .sort((a, b) =>
        a.family !== b.family ? (a.family < b.family ? -1 : 1) : 0
      )
      .map((font) => font.family);
  };

  useEffect(() => {
    fontsReq(urls.googlefontUrl, { method: "GET" });
  }, []);

  useEffect(() => {
    if (fontsRes.status && fontsRes.data) {
      if (fontsRes.status === 200) {
        dispatch(setFonts(filterFonts(fontsRes.data.result)));
      } else {
        // SHOW ALERT
      }
    } else {
      dispatch(setFonts(filterFonts(fontData)));
    }
  }, [fontsRes.data, fontsRes.status]);

  return (
    <div style={{ backgroundImage: `url("${background}")` }} id="main-body">
      <div className="application-form-holder">
        {formSubmitted ? (
          <div className="success-container">
            <img src={success} alt="success" />
            <h1>{successMessage}</h1>
          </div>
        ) : (
          <>
            <div className="close-btn">X</div>
            {headline && <h1>{headline}</h1>}
            {description && <p>{description}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Your name"
                  onChange={(e) => dispatch(setName(e.target.value))}
                  {...register("name", { required: true })}
                />
                {errors.name && errors.name.type === "required" && (
                  <span>
                    <img src={warning} alt="warning" />
                    This field is required
                  </span>
                )}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <span>
                    <img src={warning} alt="warning" />
                    This field is required
                  </span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <span>
                    <img src={warning} alt="warning" />
                    Invalid email address
                  </span>
                )}
              </div>
              <div className="input-group">
                <select
                  selected={selectedFont}
                  onChange={(e) => dispatch(setSelectedFont(e.target.value))}
                  {...register("font", { required: true })}
                >
                  <option value="">Select Font</option>
                  {fonts.map((font) => {
                    return <option value={font}>{font}</option>;
                  })}
                </select>
                {errors.font && errors.font.type === "required" && (
                  <span>
                    <img src={warning} alt="warning" />
                    This field is required
                  </span>
                )}
              </div>
              <button type="submit">GET MY 30% OFF</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default MainBody;
