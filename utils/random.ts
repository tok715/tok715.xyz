export function randomChar(candidates: Array<string>): string {
  return candidates[Math.floor(Math.random() * candidates.length)];
}
