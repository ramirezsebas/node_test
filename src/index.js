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

  // Generate the initial tubes
  // We have 4 supports with 4 tubes each
  const totalSupportTube = 4;
  const numberTubeSupport = 4;
  const supports = [];

  for (let index = 0; index < totalSupportTube; index++) {
    const tubes = [];
    for (let index = 0; index < numberTubeSupport; index++) {
      const fixedHoursTubeUse = rand();

      tubes.push({
        fixedHoursTubeUse: fixedHoursTubeUse,
      });
    }
    supports.push({
      tubes,
    });
  }

  let numberBrokenTubes = 0;
  let numberTubes = totalSupportTube * numberTubeSupport;

  for (let i = hoursClassroom; i >= 0; i--) {
    // console.log("Estamos en hora", hoursClassroom);

    for (let i = 0; i < supports.length; i++) {
      // console.log("Support N°", i);
      const support = supports[i];

      // console.log("Current tubes", support.tubes);

      // Decrement by 1 hour each tube that is not in zero.
      // Since we can have up to 2 broken tubes, we have to check
      // if its greater than 0.
      support.tubes = support.tubes.map((e) => {
        if (e.fixedHoursTubeUse <= 0) {
          return e;
        }

        return {
          fixedHoursTubeUse: e.fixedHoursTubeUse - 1,
        };
      });

      // console.log("Updated tubes", support.tubes);

      // Check if 2 tubes are broken
      const brokenTubes = support.tubes.filter((e) => e.fixedHoursTubeUse <= 0);

      // Their are 2 broken tubes, so we replace all tubes.
      // We assume that, when we change the tubes, each will recieve
      // a new value for use in hours.
      if (brokenTubes.length == 2) {
        // Increment the number of broken tubes
        numberBrokenTubes += 2;
        // console.log("2 broken tubes, so we change all of it");
        support.tubes = support.tubes.map((e) => {
          return {
            fixedHoursTubeUse: rand(),
          };
        });
        // Increment the total number of tubes used.
        numberTubes += 4;
        // console.log("Replaced tubes", support.tubes);
      }
    }
  }

  console.log("In 1 year", numberBrokenTubes, "fluorescent tubes were broken.");

  const totalCostTubes = numberTubes * 7;

  console.log(
    "The university pays for one classroom",
    "$",
    totalCostTubes.toFixed(2),
    "in tubes per year."
  );
}

main();
