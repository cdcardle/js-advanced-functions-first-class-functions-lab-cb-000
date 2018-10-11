

const returnFirstTwoDrivers = (drivers => drivers.slice(0,2));

const returnLastTwoDrivers = (drivers => drivers.slice(-2));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return (fare => (fare * integer));
}
