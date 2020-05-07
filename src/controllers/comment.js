const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const addNewComment = require('../models/queries/addNewComment')
const moment = require('moment')
const url = require('url')
//().format('YYYY-MM-DD HH:mm:ss');




exports.addComment = (req, res) => {
    let { comment } = req.body;
    let path = url.parse(req.headers.referer).path
    let bountyid = path.substr(path.lastIndexOf('/') + 1);

    if (comment === "") {
        res.redirect(`/bounty/${bountyid}`)
    } else {
        const date = moment().format('YYYY-MM-DD HH:mm:ss');
        addNewComment(comment, res.locals.userid, bountyid, date)

        res.redirect(`/bounty/${bountyid}`)
    }
}

//exports.getComments = ()