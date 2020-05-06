/* eslint-disable no-unused-vars */
const test = require("tape");
const supertest = require("supertest");
const router = require("../app");

//GET ROUTES

test("route to homepage", t => {
    supertest(router)
        .get("/")
        .expect(200)
        .expect("content-type", "text/html; charset=utf-8")
        .end((err, res) => {
            t.error(err);
            t.end();
        });
});


test("route to bounty 1  - NOT LOGGED IN (redirect)", t => {
    supertest(router)
        .get("/bounty/1")
        .expect(302)
        .expect("content-type", "text/plain; charset=utf-8")
        .end((err, res) => {
            t.error(err);
            t.end();
        });
});

// Logged in route
test("route to bounty 1  - LOGGED IN", t => {
    supertest(router)
        .post('/authenticate')
        .send({ username: 'admin', password: 'admin' })
        .end((err, res) => {
            if (err) {
                console.log(err);
            }
            let cookie = res.headers['set-cookie']

            supertest(router)
                .get("/bounty/1")
                .set('Cookie', cookie)
                .expect(200)
                .expect("content-type", "text/html; charset=utf-8")
                .end((err, res) => {
                    t.error(err);
                    t.end();
                });
        })
});

test("route to login", t => {
    supertest(router)
        .get("/login")
        .expect(200)
        .expect("content-type", "text/html; charset=utf-8")
        .end((err, res) => {
            t.error(err);
            t.end();
        });
});

test("route to register", t => {
    supertest(router)
        .get("/register")
        .expect(200)
        .expect("content-type", "text/html; charset=utf-8")
        .end((err, res) => {
            t.error(err);
            t.end();
        });
});

test("route to add bounties - NOT LOGGED IN (redirect)", t => {
    supertest(router)
        .get("/addBounty")
        .expect(302)
        .expect("content-type", "text/plain; charset=utf-8")
        .end((err, res) => {
            t.error(err);
            t.end();
        });
});

//Logged in route
test("route to add bounties - LOGGED IN AS ADMIN", t => {
    supertest(router)
        .post('/authenticate')
        .send({ username: 'admin', password: 'admin' })
        .end((err, res) => {
            if (err) {
                console.log(err);
            }
            let cookie = res.headers['set-cookie']

            supertest(router)
                .get("/addbounty")
                .set('Cookie', cookie)
                .expect(200)
                .expect("content-type", "text/html; charset=utf-8")
                .end((err, res) => {
                    t.error(err);
                    t.end();
                });
        })
});


// test("route to add bounties - LOGGED IN, BUT NOT AS ADMIN", t => {
//     supertest(router)
//         .post('/authenticate')
//         .send({ username: '', password: '' })
//         .end((err, res) => {
//             if (err) {
//                 console.log(err);
//             }
//             let cookie = res.headers['set-cookie']

//             supertest(router)
//                 .get("/addbounty")
//                 .set('Cookie', cookie)
//                 .expect(200)
//                 .expect("content-type", "text/html; charset=utf-8")
//                 .end((err, res) => {
//                     t.error(err);
//                     t.end();
//                 });
//         })
// });


test("route to css.styles", t => {
    supertest(router)
        .get("/css/styles.css")
        .expect(200)
        .expect("content-type", "text/css; charset=UTF-8")
        .end((err, res) => {
            t.error(err);
            t.end();
        });
});


test("route to cactus.jpg", t => {
    supertest(router)
        .get("/img/cactus.jpg")
        .expect(200)
        .expect("content-type", "image/jpeg")
        .end((err, res) => {
            t.error(err);
            t.end();
        });
});

test("route to log out", t => {
    supertest(router)
        .get("/logout")
        .expect(302)
        .expect("content-type", "text/plain; charset=utf-8")
        .end((err, res) => {
            t.error(err);
            t.end();
        });
});

test("404 no page found", t => {
    supertest(router)
        .get("/anythinghere")
        .expect(404)
        .expect("content-type", "text/html; charset=utf-8")
        .end((err, res) => {
            t.error(err);
            t.end();
        });
});

// POST


test("route to bounty 1 - wrong password", t => {
    supertest(router)
        .post('/authenticate')
        .send({ username: 'admin', password: 'wrongpassword' })
        .end((err, res) => {
            if (err) {
                console.log(err);
            }
            supertest(router)
                .get("/")
                .expect(200)
                .expect("content-type", "text/html; charset=utf-8")
                .end((err, res) => {
                    t.error(err);
                    t.end();
                });
        });
});


test("route to bounty 1 - wrong password - redirect", t => {
    supertest(router)
        .post('/authenticate')
        .send({ username: 'admin', password: 'wrongpassword' })
        .end((err, res) => {
            if (err) {
                console.log(err);
            }
            supertest(router)
                .get("/bounty/1")
                .expect(302)
                .expect("content-type", "text/plain; charset=utf-8")
                .end((err, res) => {
                    t.error(err);
                    t.end();
                });
        });
});
