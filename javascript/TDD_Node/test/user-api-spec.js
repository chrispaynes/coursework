require("co-mocha");
require("should");
const data = require("../user-data.js");
const fs = require("co-fs");
const api = require("../user-web.js");
const request = require("co-supertest").agent(api.listen());

before(function*() {
  yield fs.writeFile("./users.json", "[]");
});

describe('user data', () => {
  it('should have +1 user count after saving', function*() {
    var users = yield data.users.get();
    var newUsers = [];

    yield data.users.save({
      name: "John"
    });

    newUsers = yield data.users.get();
    newUsers.length.should.equal(users.length + 1);
  });


  describe('user web', () => {
    it('should have +1 user count after saving', function*() {
      var res = yield request.get("/user").expect(200).end();
      var users = res.body;

      yield data.users.save({
        name: "John"
      });

      var newRes = yield request.get("/user").expect(200).end();
      var newUsers = newRes.body;

      newUsers.length.should.equal(users.length + 1);
    });

  });
});