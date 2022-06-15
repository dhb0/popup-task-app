import React from "react";
import { setHeadline, setDescription, setSuccessMessage } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import "./SideBar.css";

const SideBar = () => {
  const dispatch = useDispatch();
  const { headline, description, successMessage } = useSelector((state) => state.settings);
  return (
    <div id="side-bar">
      <div className="form-container">
        <h3>General Settings</h3>
        <form action="">
          <div className="input-group">
            <label htmlFor="">Headline</label>
            <input type="text" value={headline} onChange={e => dispatch(setHeadline(e.target.value))} />
          </div>
          <div className="input-group">
            <label htmlFor="">Description</label>
            <textarea rows={6} value={description} onChange={e => dispatch(setDescription(e.target.value))} />
          </div>
          <div className="input-group">
            <label htmlFor="">Success Message</label>
            <input type="text" value={successMessage} onChange={e => dispatch(setSuccessMessage(e.target.value))} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SideBar;
