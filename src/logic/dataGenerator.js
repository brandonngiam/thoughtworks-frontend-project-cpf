function dataGenerator({
  startAge,
  oa,
  sa,
  ma,
  salary,
  maxAge,
  frsGrowth,
  bhsGrowth,
  transferFromOAtoSA
}) {
  const annualMaxSalary = 6000 * 12;
  const annualContributionLimit = 102000 * 0.37;
  let frs = 176000;
  let bhs = 57200;
  const OA_InterestRate = 0.025;
  const SA_InterestRate = 0.04;
  const MA_InterestRate = 0.04;
  const contributionRatesByAge = [
    { age: 35, OA: 0.23, SA: 0.06, MA: 0.08, employerShare: 0.17 },
    { age: 45, OA: 0.21, SA: 0.07, MA: 0.09, employerShare: 0.13 },
    { age: 50, OA: 0.19, SA: 0.08, MA: 0.1, employerShare: 0.09 },
    { age: 55, OA: 0.15, SA: 0.115, MA: 0.105, employerShare: 0.075 }
  ];

  let total = oa + sa + ma;
  let currentOA = oa;
  let currentSA = sa;
  let currentMA = ma;
  let interestTotal = 0;
  let employerTotal = 0;
  let frsMetAge = -1;
  let bhsMetAge = -1;

  let thisYearStartingBalance = {
    age: startAge,
    OA: currentOA,
    SA: currentSA,
    MA: currentMA,
    total: total,
    yourContribution: 0,
    interest: interestTotal,
    employer: employerTotal,
    frs: frs,
    bhs: bhs,
    annualContributionLimit: annualContributionLimit,
    frsMetAge: frsMetAge,
    bhsMetAge: bhsMetAge
  };
  const data = [thisYearStartingBalance];

  for (let age = startAge; age < maxAge; age++) {
    let previousYear = data[data.length - 1];
    frs = frs * (1 + frsGrowth);
    bhs = bhs * (1 + bhsGrowth);

    //interest
    let OA_EarnedInterest = previousYear.OA * OA_InterestRate;
    let SA_EarnedInterest = previousYear.SA * SA_InterestRate;
    let MA_EarnedInterest = previousYear.MA * MA_InterestRate;

    //additional interest
    let extraInt =
      Math.min(
        Math.min(previousYear.OA, 20000) + previousYear.SA + previousYear.MA,
        60000
      ) * 0.01;

    //contribution from yourself and employer
    let contributionRates = contributionRatesByAge.find(
      data => previousYear.age <= data.age
    );

    let OA_Contribution =
      Math.min(annualMaxSalary, salary * 12) * contributionRates.OA;
    let SA_Contribution =
      Math.min(annualMaxSalary, salary * 12) * contributionRates.SA;
    let MA_Contribution =
      Math.min(annualMaxSalary, salary * 12) * contributionRates.MA;

    //tabulate numbers
    interestTotal +=
      OA_EarnedInterest + SA_EarnedInterest + MA_EarnedInterest + extraInt;
    employerTotal +=
      Math.min(annualMaxSalary, salary * 12) * contributionRates.employerShare;
    currentOA += OA_EarnedInterest + OA_Contribution;
    currentSA += SA_EarnedInterest + extraInt + SA_Contribution;
    currentMA += MA_EarnedInterest + MA_Contribution;

    //check whether BHS have been exceeded in Medisave. If yes, move to Special account not beyond FRS
    let excess = 0;
    if (currentMA > bhs) {
      excess = currentMA - bhs;
      currentMA = bhs;
      if (currentSA > frs) currentOA += excess;
      else {
        currentOA += Math.max(0, currentSA + excess - frs);
        currentSA = Math.min(frs, currentSA + excess);
      }
    }

    //the scenario where user wants to transer from OA to SA
    if (transferFromOAtoSA && currentSA < frs) {
      if (currentSA + currentOA > frs) {
        const toTransfer = frs - currentSA;
        currentSA = frs;
        currentOA = currentOA - toTransfer;
      } else {
        currentSA = currentSA + currentOA;
        currentOA = 0;
      }
    }

    if (frsMetAge === -1 && currentOA + currentSA >= frs) {
      frsMetAge = previousYear.age + 1;
    }

    if (bhsMetAge === -1 && currentMA >= bhs) {
      bhsMetAge = previousYear.age + 1;
    }

    thisYearStartingBalance = {
      age: previousYear.age + 1,
      OA: currentOA,
      SA: currentSA,
      MA: currentMA,
      total: currentOA + currentSA + currentMA,
      yourContribution:
        currentOA + currentSA + currentMA - interestTotal - employerTotal,
      interest: interestTotal,
      employer: employerTotal,
      frs: frs,
      bhs: bhs,
      annualContributionLimit: annualContributionLimit,
      frsMetAge: frsMetAge,
      bhsMetAge: bhsMetAge
    };

    data.push(thisYearStartingBalance);
  }

  return data;
}

export default dataGenerator;
