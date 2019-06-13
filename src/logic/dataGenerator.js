function dataGenerator({ startAge, oa, sa, ma, monthlySalary, maxAge }) {
  const annualMaxSalary = 102000;
  const annualContributionLimit = annualMaxSalary * 0.37;
  const frs = 176000;
  const bhs = 57200;
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
    annualContributionLimit: annualContributionLimit
  };
  const data = [thisYearStartingBalance];

  for (let age = startAge; age < maxAge; age++) {
    let previousYear = data[data.length - 1];

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
      obj => previousYear.age <= obj.age
    );

    let OA_Contribution =
      Math.min(annualMaxSalary, monthlySalary * 12) * contributionRates.OA;
    let SA_Contribution =
      Math.min(annualMaxSalary, monthlySalary * 12) * contributionRates.SA;
    let MA_Contribution =
      Math.min(annualMaxSalary, monthlySalary * 12) * contributionRates.MA;

    //tabulate numbers
    interestTotal +=
      OA_EarnedInterest + SA_EarnedInterest + MA_EarnedInterest + extraInt;
    employerTotal +=
      Math.min(annualMaxSalary, monthlySalary * 12) *
      contributionRates.employerShare;
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
      annualContributionLimit: annualContributionLimit
    };

    data.push(thisYearStartingBalance);
  }

  return data;
}

export default dataGenerator;
