// string prototype

interface String {
      truncateFilename(maxLength: number): string;
}
  
String.prototype.truncateFilename = function (maxLength: number): string {
  // Get the file extension
  const fileExtension = this.slice(this.lastIndexOf('.'));
  
  // Extract the first 'maxLength' characters of the filename without the extension
  const baseFilename = this.slice(0, maxLength);
  
  // Combine the truncated filename with the file extension
  return baseFilename + fileExtension;
};
