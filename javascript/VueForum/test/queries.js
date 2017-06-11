const request = require('supertest');
const check = require('check-types');
const math = require('mathjs');
const db = 'http://localhost/dev/VueForum/dist/data/queries';
const queries = ['Post', 'Subforums', 'Thread', 'User'];
const schemas = {
    POST: {
        model: 'Post',
        schema: {
            post_id_PK: 'number',
            post_thread_id: 'number',
            post_author_id: 'number',
            post_body: 'string',
            post_is_reply: 'boolean',
            post_last_updated: 'string',
            replies: 'number',
            thread_name: 'string',
            author_username: 'string',
        }
    },
    SUBFORUMS: {
        model: 'Subforums',
        schema: {
            thread_id_PK: 'number',
            thread_name: 'string'
        }
    },
    THREAD: {
        model: 'Thread',
        schema: {
            post_id_PK: 'number',
            post_thread_id: 'number',
            post_author_id: 'number',
            post_body: 'string',
            post_is_reply: 'boolean',
            post_last_updated: 'string',
            replies: 'number',
            thread_name: 'string',
            author_username: 'string'
        }
    },
    USER: {
        model: 'User',
        schema: {
            user_id_PK: 'number',
            user_username: 'string',
            user_password: 'string',
            user_firstname: 'string',
            user_lastname: 'string',
            user_email: 'string',
            user_is_admin: 'boolean'
        }
    },
};

// test all PHP API query endpoints
queries.map(q => {
    describe('GET /' + q + '.php', function() {
        it('should respond with json content', function(done) {
            request(db)
                .get('/' + q + '.php')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
        it('should return an array of JSON objects', function(done) {
            request(db)
                .get('/' + q + '.php')
                .end(function(err, res) {
                    if (!Array.isArray(res.body)) {
                        throw new Error('Failed to Return an array of JSON Objects');
                    }
                    done();
                });
        });
        it('should return the correct object model', function(done) {
            request(db)
                .get('/' + q + '.php')
                .end(function(err, res) {
                    if (!Array.isArray(res.body)) {
                        throw new Error('Failed to Return an array of JSON Objects');
                    }

                    // find the model schema that matches the response body's model
                    let model = Object.keys(schemas).map(k => schemas[k]).find(s => s.model == q) || {};
                    // loop through the model properties and verify the types match schema types
                    Object.keys(model.schema)
                        .forEach((k, i) => {
                            // throw error is DB values don't match type
                            if (!verifyType(res.body[i][k], model.schema[k])) {
                                throw new Error('verifyType Failed: expected value "' + res.body[i][k] + '" to be a "' + USER.schema[k] + '"');
                            }
                        });
                    done();
                });
        });
    });
});


// verifyType verifies a value matches its expected data type
function verifyType(value, type) {
    switch (type) {
        case 'string':
            return check.string(value);
        case 'number':
            return check.number(+value);
        case 'boolean':
            return value.toLowerCase() === 'true' || value.toLowerCase() === 'false';
        default:
            return typeof(value) == type;
    }
}
