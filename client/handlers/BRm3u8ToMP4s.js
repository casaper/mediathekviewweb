const BRm3u8ToMP4s = (url) => {
  let regex = /https?:\/\/cdn-vod-ios.br.de\/i\/(.*?),([a-zA-Z0-9,]+),\.mp4\.csmil/;
  let match = regex.exec(url);

  if (match == null) {
      return url;
  }


  let qualities = match[2].split(',');
  let mp4s = [];

  for (var i = 0; i < qualities.length; i++) {
      mp4s.push(`http://cdn-storage.br.de/${match[1]}${qualities[i]}.mp4`);
  }

  return mp4s;
}

export default BRm3u8ToMP4s;
