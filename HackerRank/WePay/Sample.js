function alert(inputs, windowSize, allowedIncrease) {
  let windowArray = [];
  let numAlerts = 0;
  let movingAvg = 0;
  let index = 0;
  let maxValueInWindow = Number.MIN_VALUE;
  //calculate average for the first Window
  let firstWindowSum = 0;
  for (index; index < windowSize; index++) {
    let nextValue = inputs[index];
    windowArray.push(nextValue);
    firstWindowSum += nextValue;
  }
  maxValueInWindow = Math.max(...windowArray);
  firstWindowAverage = firstWindowSum / windowSize;
  let prevAvg = movingAvg = firstWindowAverage;
  // Checking condition 1
  if (maxValueInWindow > firstWindowAverage * allowedIncrease) {
    numAlerts++;
  }
  while (index < inputs.length) {
    let prevValue = windowArray.shift();
    let nextValue = inputs[index++];
    movingAvg = ((prevAvg * windowSize) - prevValue + nextValue) / windowSize;
    windowArray.push(nextValue);
    maxValueInWindow = Math.max(...windowArray);
    if (maxValueInWindow > firstWindowAverage * allowedIncrease) {
      numAlerts++;
    } else {
      numAlerts = 0;
    }
    // Checking condition 1
    if (numAlerts === windowSize) {
      return true;
    }
    // Checking condition 2
    if (movingAvg > prevAvg * allowedIncrease) {
      return true;
    }
    prevAvg = movingAvg;
  }
  return false;
}

console.log(alert([1, 2, 100, 2, 1000, 1000, 1000], 3, 1.5));
console.log(alert([1, 2, 4, 2, 2], 3, 2));