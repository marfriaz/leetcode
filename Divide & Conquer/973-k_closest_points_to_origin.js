//////// K Closest Points to Origin ///////

/*
We have a list of points on the plane.  Find the K closest points to the origin (0, 0).
(Here, the distance between two points on a plane is the Euclidean distance.)
You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)
*/

// Time Complexity: O(NlogN), where N is the length of points
// Space Complexity: O(N)

var kClosest = function (points, K) {
  return points.sort((a, b) => getDistance(a) - getDistance(b)).slice(0, K);
};

// we don't need to find square root of c here
// squared length is enough to determine order
var getDistance = function ([a, b]) {
  return a * a + b * b;
};

let points = [
  [3, 3],
  [5, -1],
  [-2, 4],
]; // [[3, 3],[-2, 4]];
let K = 2;

console.log(kClosest(points, K));

///////////// WRONG

var kClosest2 = function (points, k) {
  let minPoints = [];

  const findMinPoints = (points) => {
    while (minPoints.length < k) {
      let tempMin = points[points.length - 1];
      let tempDistance = Math.sqrt(tempMin[0] ** 2 + tempMin[1] ** 2);

      for (let i = 0; i < points.length; i++) {
        let distance = Math.sqrt(points[i][0] ** 2 + points[i][1] ** 2);
        if (distance < tempDistance && !minPoints.includes(points[i])) {
          tempMin = points[i];
        }
      }
      minPoints.push(tempMin);
      findMinPoints(points);
    }
  };
  findMinPoints(points);
  return minPoints;
};
