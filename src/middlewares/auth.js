const userAuth = (req, res, next) => {
  const token = "xyzasddfasddf";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized Request");
  } else {
    next();
  }
};

module.exports = {
  userAuth,
};
