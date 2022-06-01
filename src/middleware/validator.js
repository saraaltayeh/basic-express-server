'use strict';

function validator(req, res, next) {
    // if(req.query.name == "sara")
    if(req.query.name == null)
   errorHandler();
    next();

}

module.exports = validator;