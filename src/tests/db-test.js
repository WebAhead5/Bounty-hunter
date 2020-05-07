const tape = require("tape");
const runDbBuild = require("../database/dbbuild");
const addUser = require("../models/queries/addUser");
const findByUsername = require("../models/queries/findByUsername");
const getBounties = require("../models/queries/readBounties");
const getBountiesById = require("../models/queries/getBountiesById");
const addBounty = require("../models/queries/addBounty")
const removeBounty = require("../models/queries/removeBounty")
const getMessageData = require("../models/queries/getMessageData")
const addNewComment = require("../models/queries/addNewComment");
const db = require('../../src/database/dbconnection')

// --------- initial test ----------

tape("tape is working", t => {
    t.equals(1, 1, "one equals one");
    t.end();
});


// --------- findByUsername test --------------



tape('test findByUsername', async t=> {
    const username = 'supermario'
    let actual;
    const user = await findByUsername(username)
        actual = user.username;
        let expected = 'supermario'
        t.deepEqual(actual, expected)
        t.end()
})

tape('test findByUsername get other details', async t=> {
    const username = 'supermario'
    let actual;
    const user = await findByUsername(username);
    actual = user.name;
    let expected = 'Mario'
    t.deepEqual(actual, expected);
    t.end()
})

tape('test findByUsername if retreives the right length', async t=> {
    const username = 'supermario'
    let actual; 
    const user = await findByUsername(username);
    actual = Object.keys(user).length
    let expected = 6
    t.deepEqual(actual, expected)
    t.end()
})

// --------- readBounties test ---------------

tape('test getBounties', async t=> {
    let actual;
    const bounties = await getBounties()
        actual = typeof bounties
        let expected = 'object'
        t.deepEqual(actual, expected, 'both should be an object')
        t.end()
})

tape('test the values that are retreived', async t=> {
    let actual;
    const bounties = await getBounties()
    actual = bounties[0].id
    let expected = 1
    t.deepEqual(actual, expected, 'should be 1')
    t.end()
})

tape('test the values that are retreived', async t=> {
    let actual;
    const bounties = await getBounties()
    actual = bounties[1].name
    let expected = 'Snakey Jake'
    t.deepEqual(actual, expected, 'should be Snakey Jake')
    t.end()
})

tape('test the length of the bounties', async t=> {
    let actual;
    const bounties = await getBounties()
    actual = bounties.length
    let expected = 3
    t.deepEqual(actual, expected, 'should be equal 3')
    t.end()
})


// --------- addBounty test --------------

tape('test add bounty functionality', async t=> {

    let actual = await addBounty('name', 'picture','crimes',555,'status','furtherinfo')
    let expected = 'bounty has been added' 
    t.deepEqual(actual, expected)
    t.end()
})

tape('test adding a new bounty with wrong values "long username"', async t=> {
    try {
        await addBounty('nammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmme', 'picture','crimes',555,'status','furtherinfo')
        t.fail()
    }
    catch{
        t.pass('an error has occurred in the database')
    } finally {
        t.end()
    }
})

// --------- removeBounty test --------------


tape('test remove bounty', async t => {
    id = 1;
    await removeBounty(id);
    let readActual = await db.query(`SELECT id from bounties where id = 1;`)
    let actual = readActual.rows.length
    let expected = 0;
    t.deepEqual(actual, expected)
    t.end()
})

// --------- addUser test --------------

tape('test adding a new user', async t=> {
    let actual = await addUser('name', 'username', 'password', 'admin', 0)
    let expected = 'user has been added' 
    t.deepEqual(actual, expected)
    t.end()
})

tape('test adding a new user with wrong values "long username"', async t=> {
    runDbBuild()
    try {
        await addUser('gg', 'yggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg', 'ttt', 0)
        t.fail()
    }
    catch{
        t.pass('an error has occurred in the database')
    } finally {
        t.end()
    }
})


// --------- getBountiesById test --------------

tape('test getting bounty by id', async t=> {
    // let id = 2
    let actual = await getBountiesById(2)
    actual = actual.name
    let expected = 'Snakey Jake'
    t.deepEqual(actual, expected)
    t.end()
})

// --------- addNewComment test --------------

tape('test getmessagedata', async t => {
    message = "testing message1";
    const newCommentAdded = await addNewComment(message, 5, 5,"05/05/2020");
    let res = await db.query(`SELECT message FROM comments WHERE message = 'testing message1'`)
    actual = res.rows[0].message
    let expected = "testing message1";
    t.deepEqual(actual, expected)
    t.end()
})

// --------- getMessageData test --------------

tape('test getmessagedata', async t => {
    runDbBuild()
    bountyid = 1;
    const messageData = await getMessageData(1);
    let actual = messageData[0].id
    let expected = 1;
    t.deepEqual(actual, expected)
    t.end()
})






