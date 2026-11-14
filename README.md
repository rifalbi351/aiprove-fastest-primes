# fastest-primes entry
Run: node primes.js  (reads N on stdin, prints count of primes <= N)
Odd-only sieve of Eratosthenes in a Uint8Array. Verified: 10->4, 100->25, 1000->168, 100000->9592, 1000000->78498, 5000000->348513 (~0.11s incl. Node startup).
