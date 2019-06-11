function dataGenerator({ startAge, oa, sa, ma, monthlySalary, maxAge }) {
  const annualMaxSalary = 102000;
  const OA_InterestRate = 0.025;
  const SA_InterestRate = 0.04;
  const MA_InterestRate = 0.04;
  const contributionRatesByAge = [
    { age: 35, OA: 0.23, SA: 0.06, MA: 0.08 },
    { age: 45, OA: 0.21, SA: 0.07, MA: 0.09 },
    { age: 50, OA: 0.19, SA: 0.08, MA: 0.1 },
    { age: 55, OA: 0.15, SA: 0.115, MA: 0.105 }
  ];

  let total = oa + sa + ma;
  let currentOA = oa;
  let currentSA = sa;
  let currentMA = ma;

  let thisYearStartingBalance = {
    age: startAge,
    OA: currentOA,
    SA: currentSA,
    MA: currentMA,
    total: total
  };
  const data = [thisYearStartingBalance];

  for (let age = startAge; age < maxAge; age++) {
    let previousYear = data[data.length - 1];

    //interest
    let OA_EarnedInterest = previousYear.OA * OA_InterestRate;
    let SA_EarnedInterest = previousYear.SA * SA_InterestRate;
    let MA_EarnedInterest = previousYear.MA * MA_InterestRate;

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

    currentOA += OA_EarnedInterest + OA_Contribution;
    currentSA += SA_EarnedInterest + SA_Contribution;
    currentMA += MA_EarnedInterest + MA_Contribution;

    thisYearStartingBalance = {
      age: previousYear.age + 1,
      OA: Math.round(currentOA),
      SA: Math.round(currentSA),
      MA: Math.round(currentMA),
      total: Math.round(currentOA + currentSA + currentMA)
    };

    data.push(thisYearStartingBalance);
  }

  return data;
}

export default dataGenerator;
