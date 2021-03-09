var findCircleNum7 = function (isConnected) {
  let visited = {};
  let count = 0;
  let queue = [];

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited[i]) {
      queue.push(i);
      while (queue.length) {
        let s = queue.shift();
        visited[s] = true;
        for (let j = 0; j < isConnected.length; j++) {
          if (isConnected[s][j] && !visited[j]) {
            queue.push(j);
          }
        }
      }
      count++;
    }
  }
  return count;
};

let isConnected = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]; // 3
console.log(findCircleNum7(isConnected));
