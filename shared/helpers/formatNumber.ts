function formatNumber(target: number, currencyCode = 'RUB', separator = '\u00A0'): string {
  const initialParts = new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).formatToParts(target);
  const formattedParts = initialParts.map(({ type, value }) => {
    switch (type) {
      case 'group':
        return separator;
      case 'literal':
        return '';
      default:
        return value;
    }
  });
  return formattedParts.reduce((acc, part) => acc + part, '');
}

export { formatNumber };
