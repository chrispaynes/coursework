const request = require('supertest');
const math = require('mathjs');
const db = 'http://localhost/dev/VueForum/dist/data/queries';
const queriesWithParams = {
    posts_ids: {
        path: "/Post.php?post=",
        success_params: math.range(1, 8),
        fail_params: math.range(11, 15)
    },
    posts_thread_ids: {
        path: "/Post.php?thread=",
        success_params: math.range(1, 4),
        fail_params: math.range(11, 15)
    },
    posts_author_ids: {
        path: "/Post.php?author=",
        success_params: math.range(0, 8),
        fail_params: math.range(11, 15)
    },
    threads_ids: {
        path: "/Thread.php?thread=",
        success_params: math.range(1, 4),
        fail_params: math.range(10, 40, 10)
    }
};

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

function queryParamList(list, path, expected_response) {
    list.map((sp, index, arr) => describe('GET ' + db + path + ' with query param "' + sp + '"', function() {
        let url = path + sp;
        if (expected_response === 'SUCCESS') {
            it('should respond with json content', function(done) {
                request(db)
                    .get(url)
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(res => {
                        if(!res.body.length > 0 ) {
                            throw new Error("Expect Response body was empty array")
                        }
                        res.body.length = 1;
                    })
                    .expect(200, done);
            });
        }
        if (expected_response === 'EMPTY') {
            // console.log('URL', url)
            it('should respond with an empty array', function(done) {
                request(db)
                    .get(url)
                    .set('Accept', 'application/json')
                    .expect([])
                    .expect('Content-Type', /json/)
                    .expect(200, done);
            });
        }
    }));
}

// test all PHP API query endpoints
// loop through each query object and get each success or fail query param
Object.keys(queriesWithParams).map(q => queriesWithParams[q]).map(result => {
    queryParamList(result.success_params, result.path, 'SUCCESS');
    queryParamList(result.fail_params, result.path, 'EMPTY');
});
