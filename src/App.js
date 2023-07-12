import { useState } from 'react';
import DataTable from './components/DataTable';
import InvestementForm from './components/InvestementForm';
import PageHeader from './components/PageHeader';

function App() {
  const [resultData,setResultData] = useState(null)
  const [userData,setUserData] = useState(null)

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['currentSavings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearlySavings']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expectedInterest'] / 100;
    const duration = +userInput['investementDuration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    console.log(yearlyData)
    setResultData(yearlyData)

    // do something with yearlyData ...
  };

  const getEnteredData = (data) =>{
    calculateHandler(data)
    setUserData(data)
   
  };

  return (
    <div>
      <PageHeader></PageHeader>
      <InvestementForm onSubmit={getEnteredData}></InvestementForm>
      
    
     {resultData &&<DataTable items = {resultData} initialInvestement={userData['currentSavings']}></DataTable>}
     {!resultData &&<p>No Investement Calculated yet!</p>}
    </div>
  );
}

export default App;
