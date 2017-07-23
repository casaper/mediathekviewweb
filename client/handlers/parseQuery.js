const querySplits = (query) => (
  query.trim().toLowerCase().split(/\s+/)
    .filter((split) => (split.length > 0))
);

const splitFilter = (split) => split.slice(1).split(',').filter(split => split.length > 0);

export const parseQuery = (query) => {
    let channels = [];
    let topics = [];
    let titles = [];
    let descriptions = [];
    let generics = [];

    querySplits(query).forEach(split => {

      if (split[0] === '!') {
        const chanel = splitFilter(split);
        return (chanel.length > 0) && channels.push(chanel);
      }

      if (split[0] === '#') {
        const topic = splitFilter(split);
        return (topic.length > 0) && topics.push(topic);
      }

      if (split[0] === '+') {
        const title = splitFilter(split);
        return (title.length > 0) && titles.push(title);
      }

      if (split[0] === '*') {
        const description = splitFilter(split);
        return (description.length > 0) && descriptions.push(description);
      }
      generics = generics.concat(split.split(/\s+/));
    });

    return {
        channels,
        topics,
        titles,
        descriptions,
        generics
    }
}
