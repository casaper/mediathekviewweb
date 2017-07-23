const isWDRm3u8 = (url) => {
  const regex = /https?:\/\/wdradaptiv-vh\.akamaihd\.net\/i\/medp\/ondemand\/(\S+?)\/(\S+?)\/(\d+?)\/(\d+?)\/,?([,\d_]+?),?\.mp4.*m3u8/

  return regex.test(url);
}

export default isWDRm3u8;
