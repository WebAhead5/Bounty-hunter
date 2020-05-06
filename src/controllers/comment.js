const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const addNewComment = require('../models/queries/addNewComment')
const moment = require('moment')
const url = require('url')
//().format('YYYY-MM-DD HH:mm:ss');

exports.addComment = (req, res) => {
    const { comment } = req.body;

    if (comment = "") {
        res.redirect(`/bounty/${bountyid}`)
    } else {
        const date = moment().format('YYYY-MM-DD HH:mm:ss');
        const path = url.parse(req.headers.referer).path
        const bountyid = path.substr(path.lastIndexOf('/') + 1);
        addNewComment(comment, res.locals.userid, bountyid, date)

        res.redirect(`/bounty/${bountyid}`)
    }
}

//exports.getComments = ()