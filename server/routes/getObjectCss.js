export default function (server) {
  server.route({
    path: "/api/custom-css/getObjectCss",
    method: "GET",
    async handler(req) {

      const objectId = req.query.objectId;
      const objectFileName = objectId + '.css'

      const fs = require('fs');
      const path = require('path');
      
      let fullPath = path.join(__dirname, '..', '..', 'css', objectFileName);

      try {
        let fileContents = fs.readFileSync(fullPath, 'utf8');
        return fileContents;
      } catch (err) {
        return "//Write custom CSS here"
      }
    },
  });
}

