const WDRm3u8ToMP4s = (url) => {
  const regex = /https?:\/\/wdradaptiv-vh\.akamaihd\.net\/i\/medp\/ondemand\/(\S+?)\/(\S+?)\/(\d+?)\/(\d+?)\/,?([,\d_]+?),?\.mp4.*m3u8/
  const match = regex.exec(url);
  if (match === null) return url;


  const region = (match[1] == 'weltweit') ? 'ww' : match[1];
  const fsk = match[2];
  const unknownNumber = match[3];
  const id = match[4];
  const qualities = match[5].split(',');

  return qualities.map(quality => (
    `http://ondemand-${region}.wdr.de/medp/${fsk}/${unknownNumber}/${id}/${quality}.mp4`
  ));
}

export default WDRm3u8ToMP4s;
