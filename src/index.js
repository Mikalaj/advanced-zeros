module.exports = function getZerosCount(number, base) {
  let p = [...Array(number + 1).keys()].slice(2);
  let factorial = algorithmP(p);
  let factorialBase = convertFrom10To(factorial, base);
  let reversed = factorialBase.split("").reverse();
  let count = 0;
  let sum = 0;
  for (let i = 0; i < reversed.length; i++) {
    sum += parseInt(reversed[i]);
    if (sum === 0) {
      count ++;
    } else {
      break
    }
  }
    
  return count;
}

function algorithmP(p) {
  if (p.length > 1) {
    let [p1, p2] = halfsOfP(p);
    return algorithmP(p1) * algorithmP(p2)
  }
  return p[0];
}

function convertFrom10To(n, base) {
  let result = '';
  let abc = getABC(base);
  let b = Math.floor(n / base);
  let k = n % base;
  while (b) {
    result = abc[k] + result;
    n = b;
    b = Math.floor(n / base);
    k = n % base;
  }
  result = abc[k] + result;
  return result;
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

function getABC(base) {
  return a = '0123456789abcdefghijklmnopqrstuvwxyz'.split('').slice(0, base);
}