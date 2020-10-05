export default function formatNumber(target: number, separator = ' '): string {
  return target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
