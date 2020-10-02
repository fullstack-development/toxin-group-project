function valueToIndex(value: number): number {
  switch (value) {
    case 0:
      return 2;
    case 1:
      return 0;
    case 2:
    case 3:
    case 4:
      return 1;
    default:
      if (value > 20) {
        if (value > 99) {
          return valueToIndex(value % 100);
        }
        return valueToIndex(value % 10);
      }
      return 2;
  }
}

export default valueToIndex;
