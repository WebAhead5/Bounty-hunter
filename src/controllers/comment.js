const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment')
const url = require('url')
const addNewComment = require('../models/queries/addNewComment')
const deleteMessageQuery = require('../models/queries/deleteMessageQuery')

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

exports.delete = async (req, res) => {
    try {
        if (res.locals.error) {
            return res.render('error', {
                error: res.locals.error
            });
        }
        const messageid = req.params.id
        if (res.locals.signedIn && res.locals.admin) {
            await deleteMessageQuery(messageid)
            res.redirect('back')
        }
    }
    catch (error) {
        res.render('error', {
            statusCode: "Delete Message",
            errorMessage: error.message
        });
    }
}