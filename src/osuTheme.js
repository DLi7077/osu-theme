export default function colorScroll(percent, lower, upper) {
  //validation
  const lowerBound = Math.max(0, Math.min(lower, 255));
  const upperBound = Math.max(0, Math.min(upper, 255));
  const rgb = [upperBound, lowerBound, lowerBound];
  const phase_length = 100 / 6;

  // 6 phases
  const phases = Math.trunc(percent / phase_length);
  const part_phase = (percent - phase_length * phases) / (100 / 6);

  //if even phase, increase next
  //if odd phase, decrease curr
  let i = 0;
  for (; i < phases; i++) {
    const curr = Math.trunc(i / 2);
    if (i % 2 === 0) rgb[(curr + 1) % 3] = upperBound;
    if (i % 2 === 1) rgb[curr % 3] = lowerBound;
  }

  const curr = Math.trunc(i / 2);

  if (i % 2 === 0)
    rgb[(curr + 1) % 3] = lowerBound + (upperBound - lowerBound) * part_phase;
  if (i % 2 === 1)
    rgb[curr % 3] = lowerBound + (upperBound - lowerBound) * (1 - part_phase);

  const [r, g, b] = rgb;
  return `rgb(${r},${g},${b})`;
}
