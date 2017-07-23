
const formatBytes = (bytes, decimals) => {
  if (parseInt(bytes) < 0) return '?';
  if (parseInt(bytes) === 0) return '0 Byte';
  const kByte = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(kByte));
  return parseFloat((bytes / Math.pow(kByte, i)).toFixed(decimals)) + ' ' + sizes[i];
}

export default formatBytes;
