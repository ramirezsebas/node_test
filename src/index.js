/**
 * @returns {number} The amount of hours the classroom is used per year
 */
function hoursUsedClassroomPerYear() {
  const hoursUsedPerDay = 15;
  const timesUsedPerWeek = 5;
  const timesUsedPerMonth = 9;

  const hoursUsedPerWeek = hoursUsedPerDay * timesUsedPerWeek;

  const hoursUsedPerMonth = hoursUsedPerWeek * 4;

  const hoursUsedPerYear = hoursUsedPerMonth * timesUsedPerMonth;

  return hoursUsedPerYear;
}

/**
 * @returns {number} A random number between 100 and 200
 **/
function rand() {
  return Math.floor(Math.random() * 101) + 100;
}

function main() {
  const hoursClassroom = hoursUsedClassroomPerYear();

  // Generate the tubes
  // We have 4 supports with 4 tubes each
  const totalSupportTube = 4;
  const numberTubeSupport = 4;
  const supports = [];

  for (let index = 0; index < totalSupportTube; index++) {
    const tubes = [];
    for (let index = 0; index < numberTubeSupport; index++) {
      const fixedHoursTubeUse = rand();

      // Since we have the hours the classroom is used per year,
      // we can calculate the amount of times the tube will break
      tubes.push({
        fixedHoursTubeUse: fixedHoursTubeUse,
        numberTimesBroken: Math.floor(hoursClassroom / fixedHoursTubeUse),
      });
    }
    supports.push({
      tubes,
    });
  }

  // Count the amount of tubes broken
  let count = 0;
  for (let i = 0; i < totalSupportTube; i++) {
    for (let j = 0; j < numberTubeSupport; j++) {
      // Since the number of times the tube is broken is a year,
      // we can just sum all the tubes
      const element = supports[i].tubes[j].numberTimesBroken;
      count += element;
    }
  }

  console.log("In 1 year", count, "fluorescent tubes were broken.");

  const initialNumberFluorecent = totalSupportTube * numberTubeSupport;
  const cost = 7;

  // Sort the tubes by the amount of hours they last
  for (let i = 0; i < totalSupportTube; i++) {
    supports[i].tubes = supports[i].tubes.sort(
      (a, b) => a.fixedHoursTubeUse - b.fixedHoursTubeUse
    );
  }

  let numberNewTubesBought = 0;
  for (let i = 0; i < totalSupportTube; i++) {
    // Since my interest is for the firsst two tubes
    // because they are the ones that last less.
    // So when they both break, all 4 tubes are changed
    const firstElementToBreak = supports[i].tubes[0].fixedHoursTubeUse;
    const secondElementToBreak = supports[i].tubes[1].fixedHoursTubeUse;

    // We calculate the amount of times the tubes are changed
    // and multiply by 4 because we change all the tubes
    const totalChangedtubes =
      (hoursClassroom / (firstElementToBreak + secondElementToBreak)) * 4;

    numberNewTubesBought += totalChangedtubes;
  }

  const totalCostTubes = initialNumberFluorecent + numberNewTubesBought * cost;

  console.log(
    "The university pays for one classroom",
    "$" + totalCostTubes.toFixed(2),
    "in tubes per year.",
    "Paying for a total of",
    (initialNumberFluorecent + numberNewTubesBought).toFixed(0),
    "tubes incluiding the ones that have been changed."
  );
}

main();
