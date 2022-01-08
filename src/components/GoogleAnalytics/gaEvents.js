export const gaEvents = {
  sendEvent: function (fields) {
    console.log(fields);
    try {
      if (typeof ga == "undefined") {
        var ga =
          window.ga ||
          function () {
            (ga.q = ga.q || []).push(arguments);
          };
        ga.l = +new Date();
      }
      ga(function () {
        ga(ga.getAll()[ga.getAll().length - 1].get("name") + ".send", fields);
      });
      console.log(
        "this is just demo, in real project uncomment code above and add google-analytics code from google to the project"
      );
    } catch (e) {
      console && console.log("spGA", e, fields);
    }
  },

  sendPageview: function () {
    var event = { hitType: "pageview", page: window.location.pathname };
    this.sendEvent(event);
  }
};
