const randomString = (len) => Array(len).fill(null).map(() => randomChar()).join('');

const randomChar = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return chars.charAt(Math.floor(Math.random() * chars.length))
}

export default randomString;