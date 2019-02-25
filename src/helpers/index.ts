// eslint-disable-next-line import/prefer-default-export
export function percentChance(percentage: number): boolean {
  if (percentage > 100 || percentage < 0) {
    throw new Error("percentage must be between 0-100 inclusive");
  }
  if (percentage === 0) {
    return false;
  }
  if (percentage === 100) {
    return true;
  }

  return Math.random() * 100 < percentage;
}
