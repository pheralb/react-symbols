export const downloadFile = (filename: string, content: string) => {
  const element = document.createElement("a");
  const file = new Blob([content], { type: "image/svg+xml" });
  element.href = URL.createObjectURL(file);
  element.download = filename;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

export const tsxToSvg = async (tsxCode: string): Promise<string> => {
  const svgStartMatch = tsxCode.match(/<svg[\s\S]*?>/);
  if (!svgStartMatch) {
    throw new Error("<svg> not found in TSX code");
  }
  const svgStartIndex = tsxCode.indexOf(svgStartMatch[0]);
  const svgEndIndex = tsxCode.lastIndexOf("</svg>");

  if (svgEndIndex === -1) {
    throw new Error("<svg> not found in TSX code");
  }
  let svgContent = tsxCode.substring(
    svgStartIndex,
    svgEndIndex + "</svg>".length,
  );
  svgContent = svgContent.replace(/\s*\{\.\.\.props\}\s*/g, "");
  return svgContent;
};
