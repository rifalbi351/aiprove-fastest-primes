// Fastest correct prime counter: odd-only sieve of Eratosthenes in a Uint8Array.
// Reads N on stdin, prints count of primes <= N.
let data = '';
process.stdin.on('data', c => data += c).on('end', () => {
  const n = parseInt(data.trim(), 10) || 0;
  if (n < 2) { console.log(0); return; }
  const half = (n >> 1) + 1;
  const sieve = new Uint8Array(half); // sieve[i] marks 2i+1
  const limit = Math.floor(Math.sqrt(n));
  for (let p = 3; p <= limit; p += 2) {
    if (!sieve[p >> 1]) {
      const step = p, start = p * p >> 1;
      for (let j = start; j < half; j += step) sieve[j] = 1;
    }
  }
  let count = 1; // prime 2
  for (let i = 1; i < half; i++) if (!sieve[i] && (2 * i + 1) <= n) count++;
  console.log(count);
});
