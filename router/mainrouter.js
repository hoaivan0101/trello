/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const data = require('../data/data');

router.get('/', function(req, res) {
  data
      .find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
});

router.get('/:id', function(req, res) {
  data
      .findOne(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
});

router.post('/', function(req, res) {
  //   const name = req.body.name;
  const title = req.body.title;
  const date = req.body.date;
  const status = req.body.status;
  data
      .create({
        title: title,
        date: date,
        status: status,
      })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
});

router.put('/:id', function(req, res) {
  var id = req.params.id;
  let title = req.body.title;
  let date = req.body.date;
  let status = req.body.status;
  let FixedData = {};
  if (title) FixedData.title = title;
  if (date) FixedData.date = date;
  if (status) FixedData.status = status;
  console.log(FixedData);
  console.log(id);
  data
      .updateOne({_id: id}, FixedData)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
});

router.delete('/:id', function(req, res) {
  // eslint-disable-next-line prefer-const
  let id = req.params.id;
  data
      .deleteOne({_id: id})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
});

module.exports = router;
