export function formatNumber(
  target: number,
  currencyCode = 'RUB',
  separator = '\u00A0',
  locale = 'ru',
): string {
  if (new Intl.NumberFormat().formatToParts) {
    const initialParts = new Intl.NumberFormat(locale, {
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

  return target.toLocaleString(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}
