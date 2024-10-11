const catsRouteMiddleware = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};

const catsGetRouteMiddleware = (req, res, next) => {
  if (!req.body || !req.body.name) {
    console.log("Request body or name is missing");
  } else {
    console.log("Request name: ", req.body.name);
  }
  next();
};

module.exports = {
  catsRouteMiddleware,
  catsGetRouteMiddleware,
};
