module.exports = function getZerosCount(number, base) {
  if (number > 1) {
    let factorial = algorithmP(2, number);
    return getCountWhileConvert(factorial, base);
  }
  return 0;
}

function algorithmP(p1, p2) {
  if (p2 > p1) {
    let half = halfsOfP(p1, p2);
    return algorithmP(p1, half) * algorithmP(half + 1, p2)
  }
  return p1;
}

function getCountWhileConvert(n, base) {
  let zerosCount = 0;
  let b = Math.floor(n / base);
  let k = n % base;
  while (k === 0) {
    zerosCount++;
    n = b;
    b = Math.floor(n / base);
    k = n % base;
  }
  
  return zerosCount;
}

function halfsOfP(p1, p2) {
  return p1 + Math.floor((p2 - p1) / 2);
}