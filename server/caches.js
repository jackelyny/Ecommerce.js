const NodeCache = require("node-cache");

const cache = new NodeCache();

module.exports = (duration) => (req, res, next) => {
  //only cache get
  if (req.method !== "GET") {
    console.error("Dont cache non-GET.");
    return next();
  }

  const key = req.originalUrl;
  const cacheResponse = cache.get(key);

  if (cacheResponse) {
    //console.log(`Cache received for ${key}`)
    res.send(cacheResponse);
  } else {
    var now = new Date().toLocaleString();
    console.log(`Cache not found for ${key}: creating cache (${now})`);
    res.originalSend = res.send;
    res.send = (body) => {
      res.originalSend(body);
      cache.set(key, body, duration);
    };
    next();
  }
};
