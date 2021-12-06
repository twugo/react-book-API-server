var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/8-1', function (req, res, next) {
  res.json([
    {
      "id": 1,
      "name": "主田",
      "age": 24,
      "personalColor": "blue"
    },
    {
      "id": 2,
      "name": "先岡",
      "age": 28,
      "personalColor": "pink"
    },
    {
      "id": 3,
      "name": "後藤",
      "age": 23,
      "personalColor": "green"
    },
  ]);
});

router.get('/8-2', function (req, res, next) {
  res.json([
    {
      "id": 1,
      "name": "主田",
      "age": 24,
      "personalColor": "blue"
    },
    {
      "id": 2,
      "name": "先岡",
      "age": 28,
      "personalColor": "pink"
    },
    {
      "id": 3,
      "name": "後藤",
      "age": 23,
      "personalColor": "green",
      "hobbies": ["game", "soccer"]
    },
  ]);
});

router.get('/9', function (req, res, next) {
  res.json([
    {
      "id": 1,
      "firstname": "勉",
      "lastname": "主田",
      "age": 24,
    },
    {
      "id": 2,
      "firstname": "未来",
      "lastname": "先岡",
      "age": 28,
    },
    {
      "id": 3,
      "firstname": "一郎",
      "lastname": "後藤",
      "age": 23,
    },
  ]);
});

// 全部まとめ
router.get('/', function (req, res, next) {
  res.json([
    {
      "id": 1,
      "name": "主田",
      "firstname": "勉",
      "lastname": "主田",
      "age": 24,
      "personalColor": "blue"
    },
    {
      "id": 2,
      "name": "先岡",
      "firstname": "未来",
      "lastname": "先岡",
      "age": 28,
      "personalColor": "pink"
    },
    {
      "id": 3,
      "name": "後藤",
      "firstname": "一郎",
      "lastname": "後藤",
      "age": 23,
      "personalColor": "green",
      "hobbies": ["game", "soccer"]
    },
  ]);
});

module.exports = router;
