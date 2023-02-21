// Array of career options and their annual incomes as their values for making the dropdown menu:
let careers = [
    [ '', 0],
    [ 'Accountant', 55650 ],
    [ 'Advance Tractor/Trailer Driver', 53550 ],
    [ 'Agricultural Engineer', 56700 ],
    [ 'Architect', 53550 ],
    [ 'Auto Tech/Mechanic', 49350 ],
    [ 'Aviation Tech. Mechanic', 50400 ],
    [ 'Biologist', 54600 ],
    [ 'Bus Driver', 37800 ],
    [ 'Business Development Officer', 54600 ],
    [ 'Business Manager Hotel etc.', 61950 ],
    [ 'CNC Manufacturing', 80850 ],
    [ 'Carpenter', 47250 ],
    [ 'Chef', 52500 ],
    [ 'Chemist', 56700 ],
    [ 'Civil Engineering Technician', 68250 ],
    [ 'Commercial Driver', 51450 ],
    [ 'ComputerTechnician', 46200 ],
    [ 'Conserv./Environ. Science', 72450 ],
    [ 'Correctional Officer', 48300 ],
    [ 'Cosmetologist', 36750 ],
    [ 'Credit Union/Bank Manager', 61950 ],
    [ 'Daycare Director', 37800 ],
    [ 'Dentist', 115500 ],
    [ 'Detective', 60900 ],
    [ 'Diesel Tech/Mechanic', 55650 ],
    [ 'Doctor/Physician', 147000 ],
    [ 'Electrician', 54600 ],
    [ 'Electronic Engineer', 75600 ],
    [ 'EMT', 34650 ],
    [ 'Energy Management PG&E', 106050 ],
    [ 'Engineer', 72450 ],
    [ 'Fashion Designer', 63000 ],
    [ 'Fire Fighter', 49350 ],
    [ 'Forest Ranger', 52500 ],
    [ 'Graphic/Media Designer', 58800 ],
    [ 'H/C HVAC', 63000 ],
    [ 'Highway Patrol', 84000 ],
    [ 'Home Inspector', 56700 ],
    [ 'Industrial Mechanic', 46200 ],
    [ 'Interior Designer', 49350 ],
    [ 'Investment Analyst', 66150 ],
    [ 'Lab Technician', 42000 ],
    [ 'Landscaper Horticulture', 48300 ],
    [ 'lawyer', 86100 ],
    [ 'Marketing/Sales Manager', 58800 ],
    [ 'Media/Communications', 45150 ],
    [ 'Medical RepairTech.', 52500 ],
    [ 'Military', 55650 ],
    [ 'Nuse', 66150 ],
    [ 'Nutitionist', 45150 ],
    [ 'Oceanographer', 69300 ],
    [ 'Pastor', 50400 ],
    [ 'PGBEATT Technician', 78750 ],
    [ 'Pharmacist', 105000 ],
    [ 'Photographer', 45150 ],
    [ 'Physical Therapist', 72450 ],
    [ 'Pilot Commercial', 78750 ],
    [ 'Plumber', 52500 ],
    [ 'Police Officer', 53550 ],
    [ 'Principal', 93450 ],
    [ 'Probation Officer', 44100 ],
    [ 'Psychologist', 77700 ],
    [ 'Retail Sales Associate', 34650 ],
    [ 'Social Worker', 50400 ],
    [ 'Solar Energy Tech.', 53550 ],
    [ 'Teacher', 52500 ],
    [ 'UPS/Fed Ex Driver', 68250 ],
    [ 'Veterinarian', 82950 ],
    [ 'Welder/Metal Specialist', 47250 ],
    [ 'Wind Energy Technician', 56700 ]
  ]
  
  // This is the stuff that the you need for the code to function
  const careerOptionList = document.getElementById("careers");
  const grossAnnualIncome = document.getElementById("annualIncome");
  const grossMonthlyIncome = document.getElementById("monthlyIncome");
  const federalTaxes = document.getElementById("federalTaxes");
  const stateTaxes = document.getElementById("stateTaxes");
  const socialSecurity = document.getElementById("socialSecurity");
  const medicare = document.getElementById("medicare");
  const stateDisability = document.getElementById("stateDisability");
  const retirementInvestment = document.getElementById("retirementInvestment");
  const medicalInsurance = document.getElementById("medicalInsurance");
  const totalDeductions = document.getElementById("totalDeductions");
  
  const jobs = document.getElementById("jobs");

  const withdrawalInput = document.getElementById("withdrawalText");
  const depositInput = document.getElementById("depositText");
  const balanceInput = document.getElementById("balanceText");

  

  // This is the code that does the stuff
  for (let job of careers) {
    let newOption = document.createElement('option');
    newOption.innerHTML = job[0];
    newOption.value = job[1];
  
    careerOptionList.appendChild(newOption);
  }

  careerOptionList.addEventListener("input", () => {
    // Use "let" and variable name, and equal to how it functions. For instance, ".value" means a career's annual income value from the array above.
    let annualIncome = parseInt(careerOptionList.value);
    // Displays a string and a number, using ".innerHTML".
    // Text AFTER JavaScript calculation:
    grossAnnualIncome.innerHTML = 'Gross Annual Income: $' + annualIncome.toFixed(2);
    // Define monthlyIncome:
    let monthlyIncome = annualIncome / 12;
    // .toFixed(#) moves decimal point.
    grossMonthlyIncome.innerHTML = 'Gross Monthly Income (Gross Annual Income divided by 12): $' + monthlyIncome.toFixed(2);

    // Calculates deductions from the monthly income:
    let fedTax = monthlyIncome * 0.12;
    let stateTax = monthlyIncome * 0.07;
    let socialSec = monthlyIncome * 0.062;
    let medic = monthlyIncome * 0.0145;
    let stateDis = monthlyIncome * 0.01;
    let retireInvest = monthlyIncome * 0.05;
    let medicInsure = 180;
    // Adds up all deductions:
    let totalDeduct = fedTax + stateTax + socialSec + medic + stateDis + retireInvest + medicInsure;

    federalTaxes.innerHTML = 'Federal Taxes: Multiply by 0.12 = $' + fedTax.toFixed(2);
    stateTaxes.innerHTML = 'State Taxes: Multiply by 0.07 = $' + stateTax.toFixed(2);
    socialSecurity.innerHTML = 'Social Security: Multiply by 0.062 = $' + socialSec.toFixed(2);
    medicare.innerHTML = 'Medicare: Multiply by 0.0145 = $' + medic.toFixed(2);
    stateDisability.innerHTML = 'State Disability: Multiply by 0.01 = $' + stateDis.toFixed(2);
    retirementInvestment.innerHTML = 'Retirement Investment: Multiply by 0.05 = $' + retireInvest.toFixed(2);
    medicalInsurance.innerHTML = 'Medical Insurance: Add $180.00';
    totalDeductions.innerHTML = 'Total Deductions: $' + totalDeduct.toFixed(2);
  })