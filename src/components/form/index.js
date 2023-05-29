import React from "react";
import "./index.css";
import ArrowIcon from "../../images/icon-arrow.svg";
import { useForm } from "react-hook-form";

export default function Form({ setCalculatedTime }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const today = new Date();
    let days = 0;
    let months = 0;
    let years = 0;
    days = today.getDate() - data.day;
    months = today.getMonth() + 1 - data.month;
    years = today.getFullYear() - data.year;
    setCalculatedTime({
      days,
      months,
      years,
    });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input_main_container">
          <label className="label">day</label>
          <input
            type="number"
            className="input"
            {...register("day", {required: true, max: 31 })}
          />
        </div>
        <div className="input_main_container ml">
          <label className="label">month</label>
          <input className="input" {...register("month")} type="number" />
        </div>
        <div className="input_main_container  ml">
          <label className="label">year</label>
          <input className="input" {...register("year")} type="number" />
        </div>
        <button>
          <img src={ArrowIcon} alt="ArrowIcon" width={40} height={40} />
        </button>
      </form>
    </div>
  );
}
