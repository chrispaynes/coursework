const request = require('supertest');
const app = 'http://localhost/dev/VueForum/dist';
const routes = ['/', '/#/register', '/#/profile', '/#/thread/new', '/#/thread/?thread=0'];
const invalid_routes = [randomString(), randomString(), randomString()]

// test all valid routes respond with a 200 response and HTML
routes.map(function(r) {
    describe('GET ' + app + r, function() {
        it('should respond with a Content-Type of "text/html"', function(done) {
            request(app)
                .get(r)
                .expect(200, done)
                .expect('Content-Type', 'text/html');
        });
    });
});

// test random/invalid routes return a 404 page
invalid_routes.map(function(ir) {
    describe('GET ' + app + ir, function() {
        it('should respond with a 404 error', function(done) {
            request(app)
                .get(ir)
                .expect(404, done)
                .expect('Content-Type', 'text/html; charset=utf-8')
        });
    });
});

function randomString() {
    var str = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < Math.floor(Math.random() * (20 - 1)) + 1; i++)
        str += possible.charAt(Math.floor(Math.random() * possible.length));

    return '/' + str;
}
