// string prototype

interface String {
  truncateFilename(maxLength: number): string;
  truncateContent(maxLength: number): string;
}

String.prototype.truncateFilename = function (maxLength: number): string {
  // Get the file extension
  const fileExtension = this.slice(this.lastIndexOf('.'));

  // Extract the first 'maxLength' characters of the filename without the extension
  const baseFilename = this.slice(0, maxLength);

  // Combine the truncated filename with the file extension
  return baseFilename + fileExtension;
};

String.prototype.truncateContent = function (maxLength: number): string {
  const splitWords = this.split(' ');
  const slicedText = splitWords.slice(0, maxLength);

  return slicedText.join(' ');
};
