import dataGenerator from "../logic/dataGenerator";

describe("dataGenerator function generates CPF simulated values", () => {
  it("should generate (maxage-age+1) elements in an array", () => {
    const input = {
      startAge: 25,
      oa: 1,
      sa: 1,
      ma: 1,
      monthlySalary: 100,
      maxAge: 55
    };
    const result = dataGenerator(input);
    expect(result).toHaveLength(31);

    const input2 = {
      startAge: 55,
      oa: 1,
      sa: 1,
      ma: 1,
      monthlySalary: 100,
      maxAge: 55
    };

    const result2 = dataGenerator(input2);
    expect(result2).toHaveLength(1);
  });

  it("should have results that make economic sense", () => {
    const input = {
      startAge: 25,
      oa: 1000,
      sa: 1000,
      ma: 1000,
      monthlySalary: 5000,
      maxAge: 55
    };
    const result = dataGenerator(input);
    for (let i = 0; i < result.length; i++) {
      const obj = result[i];
      //total = oa + sa + ma
      expect(obj["total"]).toEqual(obj["OA"] + obj["SA"] + obj["MA"]);
      //total = interest earned + employer contribution + your own contribution
      if (i !== 0) {
        //skip starting year
        expect(Math.round(obj["total"])).toEqual(
          Math.round(
            obj["interest"] + obj["employer"] + obj["yourContribution"]
          )
        );
      }
    }
  });
});
