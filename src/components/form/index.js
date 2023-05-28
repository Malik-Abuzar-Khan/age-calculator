import React from "react"
import "./index.css"
import ArrowIcon from '../../images/icon-arrow.svg'

export default function Form() {
  return (
    <div>
      <form className="form">
        <div className="input_main_container">
          <label className="label">day</label>
          <input className="input" />
        </div>
        <div className="input_main_container ml">
          <label className="label">month</label>
          <input className="input" />
        </div>
        <div className="input_main_container  ml">
          <label className="label">year</label>
          <input className="input" />
        </div>
        <button>
         <img src={ArrowIcon} alt='ArrowIcon' width={40} height={40}/>
        </button>
      </form>
    </div>
  );
}
