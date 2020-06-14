export default function (server) {
  server.route({
    path: "/api/custom-css/saveObjectCss",
    method: "POST",
    async handler(req) {
      const fs = require("fs");
      const path = require("path");

      let fullPath = path.join(__dirname, "..", "..", "css", req.payload.cssId + '.css');

      fs.writeFile(fullPath, req.payload.cssData, function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      });

      return "hi";
    },
  });
}
