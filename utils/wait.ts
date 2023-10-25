export function waitDecay(v: number): Promise<void> {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 10 + v * v * 3);
  });
}

export function wait(ms: number): Promise<void> {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  });
}
