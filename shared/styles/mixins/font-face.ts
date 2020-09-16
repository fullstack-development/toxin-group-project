export default function fontFace(fontFamily, folderName, src, fontWeight = 400, fontStyle = 'normal') {
  return `
    @font-face{
      font-family: '${fontFamily}';
      src: url('/fonts/${folderName}/${src}.woff2') format('woff2'),
          url('/fonts/${folderName}/${src}.woff') format('woff');
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
    }
  `;
}
