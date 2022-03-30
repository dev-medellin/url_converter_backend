const UrlConvert = require('../models/converturl');

exports.getAllUrlConvert = async (req, res, next) => {
  try {
    const [getAllUrl] = await UrlConvert.fetchAll();
    res.status(200).json(getAllUrl);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postUrlConvert = async (req, res, next) => {
  try {
    const postResponse = await UrlConvert.post(req.body.redirect,req.body.alias,req.body.codex);
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getByIdConvert = async (req, res, next) => {
  try {
    const [getoneUrl] = await UrlConvert.get(req.params.id);
    res.status(200).json(getoneUrl);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

