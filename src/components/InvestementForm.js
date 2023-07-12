import React, { useState } from "react";
import "./InvestementForm.css";
const InvestementForm = (props) => {
  const [currentSavings,setCurrentSavings] =   useState('');
  const [yearlySavings,setYearlySavings] =   useState('');
  const [expectedInterest,setExpectedInterest] =   useState('');
  const [investementDuration,setInvestementDuration] =   useState('');

  const currentSavingsChangeHandler = (event)=>{
    setCurrentSavings(event.target.value);

  };
  const yearlySavingsChangeHandler = (event)=>{
    setYearlySavings(event.target.value);
    
  };
  const expectedInterestChangeHandler = (event)=>{
    setExpectedInterest(event.target.value);

  };
  const investementDurationChangeHandler = (event)=>{
    setInvestementDuration(event.target.value);

  };

  const resetHandler = ()=>{
    setYearlySavings('')
    setExpectedInterest('')
    setCurrentSavings('')
    setInvestementDuration('')
  };


  const submitHandler = (event) => {
    event.preventDefault();

    const InvestementData = {
      currentSavings: currentSavings,
      yearlySavings: yearlySavings,
      expectedInterest: expectedInterest,
      investementDuration: investementDuration,
    }
    props.onSubmit(InvestementData)
    console.log(InvestementData)
    setYearlySavings('')
    setExpectedInterest('')
    setCurrentSavings('')
    setInvestementDuration('')
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" onChange={currentSavingsChangeHandler} value={currentSavings}/>
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" onChange={yearlySavingsChangeHandler}  value={yearlySavings}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" onChange={expectedInterestChangeHandler} value={expectedInterest}/>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={investementDurationChangeHandler} value={investementDuration}/>
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestementForm;
