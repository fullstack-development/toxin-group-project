export default function fontFace(fontFamily, folderName, type, fontWeight = 400, fontStyle = 'normal') {
  return `
    @font-face{
      font-family: '${fontFamily}';
      src: url('/fonts/${folderName}/${folderName}-${type}.woff2') format('woff2'),
          url('/fonts/${folderName}/${folderName}-${type}.woff') format('woff');
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
    }
  `;
}
