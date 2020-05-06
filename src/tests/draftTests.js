tape('test remove bounty', async t => {
    id = 1;
    await removeBounty(id);
    let actual = db.query('SELECT id FROM bounties')
    let expected = "I can't remember what this should give";
    t.deepEqual(actual, expected)
    t.end()

})
