const isBRm3u8 = (url) => {
  let regex = /https?:\/\/cdn-vod-ios.br.de\/i\/(.*?),([a-zA-Z0-9,]+),\.mp4\.csmil/;

  return regex.test(url);
}
export default isBRm3u8;