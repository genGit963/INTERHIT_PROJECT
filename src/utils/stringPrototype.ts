export function truncateFilename(fn: string, maxLength: number): string {
  const fileExtension = fn.slice(fn.lastIndexOf('.'));
  const baseFilename = fn.slice(0, maxLength);
  return baseFilename + fileExtension;
}

export function truncateContent(content: string, maxLength: number): string {
  const splitWords = content.split(' ');
  const slicedText = splitWords.slice(0, maxLength);
  return slicedText.join(' ');
}
