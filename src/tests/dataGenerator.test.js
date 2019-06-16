import dataGenerator from "../logic/dataGenerator";

describe("dataGenerator function generates CPF simulated values", () => {
  it("should generate (maxage-age+1) elements in an array", () => {
    const input = {
      startAge: 25,
      oa: 1,
      sa: 1,
      ma: 1,
      salary: 100,
      maxAge: 55,
      frsGrowth: 0.01,
      bhsGrowth: 0.01
    };
    const result = dataGenerator(input);
    expect(result).toHaveLength(31);

    const input2 = {
      startAge: 55,
      oa: 1,
      sa: 1,
      ma: 1,
      salary: 100,
      maxAge: 55,
      frsGrowth: 0.01,
      bhsGrowth: 0.01
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
      salary: 5000,
      maxAge: 55,
      frsGrowth: 0.01,
      bhsGrowth: 0.01
    };
    const result = dataGenerator(input);
    for (let i = 0; i < result.length; i++) {
      const year = result[i];
      //total = oa + sa + ma
      expect(year["total"]).toEqual(year["OA"] + year["SA"] + year["MA"]);
      //total = interest earned + employer contribution + your own contribution
      if (i !== 0) {
        //skip starting year
        expect(Math.round(year["total"])).toEqual(
          Math.round(
            year["interest"] + year["employer"] + year["yourContribution"]
          )
        );
      }
    }
  });
});
