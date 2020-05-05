const tape = require("tape");
const _test = require('tape-promise').default // <---- notice 'default'
const test = _test(tape) // decorate tape
const runDbBuild = require("../database/dbbuild");
const adduser = require("../models/queries/addUser");
const findByUsername = require("../models/queries/findByUsername");
const getBounties = require("../models/queries/readBounties");
const getBountiesById = require("../models/queries/getBountiesById");


tape("tape is working", t => {
    t.equals(1, 1, "one equals one");
    t.end();
});

// tape('test findByUsername', t=> {
//     const username = 'supermario'
//     let actual;
//     findByUsername(username, (err, res)=>{
//         if(err) throw err;
//         actual = res;
//         console.log(actual)
//         let expected = [{username: 'supermario'}]
//         t.deepEqual(actual, expected)
//         t.end()
//     })
// })







// tape("checkPassword", t => {
//     runDbBuild(function (err, res) {
//         t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors

//         let expected = [
//             {
//                 id: 1,
//                 firstname: "Cassaundra",
//                 lastname: "Bloxham",
//                 email: "cbloxham0@tamu.edu",
//                 password: "BiwNM5eVU"
//             }
//         ];

//         sqlFuncs.checkPassword("cbloxham0@tamu.edu", "BiwNM5eVU", (err, result) => {
//             if (err) console.log(err);
//             t.deepEqual(result, expected, "Returns expected data based on password");
//             t.end();
//         });
//     });
// });


// tape("get user data & reservations", t => {
//     runDbBuild(function (err, res) {
//         t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors


//         sqlFuncs.getUser("Lexis", (err, result) => {
//             if (err) console.log(err);


//             const expected =
//             {
//                 id: 4,
//                 firstname: 'Lexis',
//                 lastname: 'Bennell',
//                 email: 'lbennell7@alexa.com',
//                 password: 'XtWurJnVfhw',
//                 userid: 8,
//                 carid: 3,
//             }

//             t.deepEqual(result.length, 1, "Returns one user");
//             t.deepEqual(typeof result, "object", "Returns object");
//             t.deepEqual(result[0].userid, expected.userid, "Returns expected user ID");
//             t.deepEqual(result[0].carid, expected.carid, "Returns expected car ID");
//             t.end();
//         });
//     });
// });


// tape("get all cars", t => {
//     runDbBuild(function (err, res) {
//         t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors


//         var expected = {
//             id: 1,
//             make: 'Acura',
//             model: 'NSX',
//             year: '2002',
//             color: 'Purple',
//             seatsnumber: '2',
//             rate: '3',
//             image: 'https://www.wallpaperflare.com/static/751/782/488/acura-tl-2002-blue-wallpaper.jpg'
//         }


//         sqlFuncs.getAllCars((err, result) => {
//             if (err) console.log(err);
//             //console.log(result)
//             t.deepEqual(typeof result, "object", "Returns expected data type for all cars");
//             t.deepEqual(result[0].make, expected.make, "Returns first car in list is Acura");
//             t.deepEqual(result[0].color, expected.color, "Returns first car in list color as purple");
//             t.deepEqual(result.length, 18, "Returns expected number of cars in DB");
//             t.end();
//         });
//     });
// });