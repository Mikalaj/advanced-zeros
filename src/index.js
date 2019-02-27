module.exports = function getZerosCount(number, base) {
  let p = [...Array(number + 1).keys()].slice(2);
  let factorial = algorithmP(p);
  return getCountWhileConvert(factorial, base);
}

function algorithmP(p) {
  if (p.length > 1) {
    let [p1, p2] = halfsOfP(p);
    return algorithmP(p1) * algorithmP(p2)
  }
  return p[0];
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

function halfsOfP(p) {
  let p1, p2;
  let pLength = p.length;
  if (pLength > 1) {
    let half = pLength % 2 === 1 ? Math.floor(pLength / 2) + 1 : Math.floor(pLength / 2);
    p1 = p.slice(0, half),
    p2 = p. slice(half);
  }
  return [p1, p2];
}