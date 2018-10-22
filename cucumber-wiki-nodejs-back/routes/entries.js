var express = require('express');
var router = express.Router();
var Entry = require("../models/Entry");
var passport = require('passport');

router.post('/edit_entry', passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);
  if (token) {
    console.log(req.body);
    var newPost = {
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags,
      name: req.body.name,
      created_at: req.body.created_at,
      edited_at: req.body.edited_at,
      created_by: req.body.created_by,
      updated_by: req.body.updated_by,
      hidden: req.body.hidden,
      app_id: req.body.app_id,
      _id: req.body._id,
    };

    Entry.findOneAndUpdate({ _id: newPost._id }, newPost, { upsert: true }, function (err) {
      if (err) {
        console.log(err);
        Entry.save(newPost);
        return res.json({ success: false, msg: 'Save entry failed.' });
      }
      res.json({ success: true, msg: 'Successful created new entry.' });
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
});

router.get('/delete_entry/name=:name', passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);
  if (token) {
    Entry.findOneAndDelete({ name: req.params.name }, function (err) {
      if (err) {
        console.log(err);
        return res.json({ success: false, msg: 'Delete entry failed.' });
      }
      res.json({ success: true, msg: 'Successful deleted entry.' });
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
});

router.get('/entry/name=:name', function (req, res) {
  Entry.findOne({ title: req.params.name }).exec(function (err, entry) {
    if (err) throw err;
    return res.json(entry);
  });
});

router.get('/entries_list/limit=:limit&skip=:skip', function (req, res) {
  let limit;
  let skip;
  if (req.params.limit) {
    limit = parseInt(req.params.limit);
  }
  if (req.params.skip) {
    skip = parseInt(req.params.skip)
  }
  Entry.find({}).limit(limit).skip(skip).exec(function (err, entry) {
    if (err) throw err;
    return res.json(entry);
  });
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
