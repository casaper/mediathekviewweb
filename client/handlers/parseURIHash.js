export const parseURIHash = (hash) => {
  hash = (hash[0] === '#') ? hash.slice(1) : hash;
 	const result = {};
  hash.split('&').forEach(prop => {
    const element = prop.split('=');
    result[element[0]] = element[1];
  });
  return result;
}
