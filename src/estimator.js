const data = {
region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: "days",
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614,
}
 const impact = {
  currentlyInfect: null,
 infectionsByRequestTi: null,
  severalCasesByRequestedTi: null,
  hospitalBedsByRequestedTi: null,
  casesForICUByRequestedTi: null,
  casesForVentilatorsByRequestedTi: null,
  dollarsInFlig: null
}
const severeImpact = {
  currentlyInfected: null,
  infectionsByRequestTime: null,
  severalCasesByRequestedTime: null,
  casesForICUByRequestedTime: null,
  casesForVentilatorsByRequestedTime: null,
  dollarsInFlight: null
};
  
const covid19ImpactEstimator = (data) => {
  const factor = Math.trunc((days / 3))
  const Impacts = () => {
    impact.currentlyInfected = reportedCase * 10;
    impact.infectionsByRequestTime = impact.currentlyInfected * Math.pow(2, factor);
    impact.severalCasesByRequestedTime = impact.infectionsByRequestTime * (15 / (100));
    impact.hospitalBedsByRequestedTime = impact.severalCasesByRequestedTime - (availableBed * (35 / (100)))
    impact.casesForICUByRequestedTime = impact.infectionsByRequestTime * (5 / 100)
    impact.casesForVentilatorsByRequestedTime = impact.infectionsByRequestTime * (2 / 100)
    impact.dollarsInFlight = (impact.infectionsByRequestTime * 0.65 * earning * days)
    return impact
  }
  const SevereImpacts = () => {
    severeImpact.currentlyInfected = reportedCase * 50;
    severeImpact.infectionsByRequestTime = severeImpact.currentlyInfected * Math.pow(2, factor);
    severeImpact.severalCasesByRequestedTime = severeImpact.infectionsByRequestTime * ((15 / (100)));
    severeImpact.hospitalBedsByRequestedTime = severeImpact.infectionsByRequestTime - (availableBed * (35 / (100)))
    severeImpact.casesForICUByRequestedTime = severeImpact.infectionsByRequestTime * (5 / 100)
    severeImpact.casesForVentilatorsByRequestedTime = severeImpact.infectionsByRequestTime * (2 / 100)
    severeImpact.dollarsInFlight = severeImpact.infectionsByRequestTime * 0.65 * earning * days

    return severeImpact;
  }
  const show = [data,Impacts(), SevereImpacts()]
  return show

}




export default covid19ImpactEstimator;
