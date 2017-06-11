const request = require('supertest');
const math = require('mathjs');
const db = 'http://localhost/dev/VueForum/dist/data/queries';
const queriesWithParams = {
    posts: {
        path: "/Post.php?post=",
        success_params: math.range(1, 10),
        fail_params: math.range(11, 20)
    },
    threads: {
        path: "/Thread.php?thread=",
        success_params: math.range(1, 4),
        fail_params: math.range(10, 40, 10)
    }
};

console.log(math.range(1, 4)._data)
// ._data.concat('Placid and passive? Extra safe? Readers describe Seattle’s driving culture'.replace(/ /g, "%20")
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
// loop through each query object
Object.keys(queriesWithParams).map(q => queriesWithParams[q]).map(result => {
    result.success_params.map((sp, index, arr) => describe('GET ' + db + result.path + ' with query param "'+ sp + '"', function() {
        var path = result.path + sp;
        it('should respond with json content', function(done) {
            request(db)
                .get(path)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    }));

});
