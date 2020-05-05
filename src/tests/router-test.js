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


//set auth to allow page FIXME:
test("route to bounty 1", t => {
    supertest(router)
        .get("/bounty/1")
        .expect(200)
        .expect("content-type", "text/html; charset=utf-8")
        .end((err, res) => {
            t.error(err);
            t.end();
        });
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

FIXME:
test("route to css.styles", t => {
    supertest(router)
        .get("/public/css/styles.css")
        .expect(200)
        .expect("content-type", "text/css")
        .end((err, res) => {
            t.error(err);
            t.end();
        });
});

FIXME:
test("route to cactus.jpg", t => {
    supertest(router)
        .get("/public/img/cactus.jpg")
        .expect(200)
        .expect("content-type", "image/jpg")
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

//FIXME:
// //set 500 code
// test("500 Server down", t => {
//     supertest(router)
//         .get("/logout")
//         .expect(500)
//         .expect("content-type", "text/html; charset=utf-8")
//         .end((err, res) => {
//             t.error(err);
//             t.end();
//         });
// });


//POST ROUTES



