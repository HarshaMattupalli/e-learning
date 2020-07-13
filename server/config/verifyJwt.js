const jwt = require('jsonwebtoken');

module.exports.verifyJwtToken = (req, res, next) => {
    var token;
    if ('authorization' in req.headers)
        token = req.headers['authorization'].split(' ')[1];

    if (!token)
        return res.status(403).send({ auth: false, message: 'unable to find token' })
    else {
        jwt.verify(token, process.env.SECRETE, (err, decoded) => {
            if (err)
                return res.status(500).send({ auth: false, message: 'Authentication failed' })
            else {
                req._id = decoded._id;
                next();
            }
        })
    }
}