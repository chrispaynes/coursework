require("co-mocha");
require("should");
const data = require("../user-data.js");

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
});