export default function fontFace(fontFamily, src, fontWeight = 400, fontStyle = 'normal') {
  return `
    @font-face{
      font-family: '${fontFamily}';
      src: url('/fonts/${fontFamily}/${src}.woff2') format('woff2'),
          url('/fonts/${fontFamily}/${src}.woff') format('woff');
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
    }
  `;
}
