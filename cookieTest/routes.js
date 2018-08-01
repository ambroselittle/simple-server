module.exports = app => {
  var domainCookieController = require("./domainCookie");

  app
    .route("/domain-cookie")
    .get(domainCookieController.echoCookie)
    .post(domainCookieController.setCookie)
    .delete(domainCookieController.clearCookie);
};
