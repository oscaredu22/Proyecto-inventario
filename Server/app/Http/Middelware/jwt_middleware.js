const jwt = require('jsonwebtoken'),
    ensureTokenAdmin = function (req, res, next) {
        const bearerHeader = req.headers.authorization;

        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(" ");
            const BearerToken = bearer[1];
            req.token = BearerToken;
            console.log(req.token)
            jwt.verify(req.token, 'my_secret_tokenAdmin', (err, data) => {
                if (err) {
                    return res.status(403).json({
                        result: 'Failed',
                        message: 'Token failed'
                    });
                } else {
                    next();
                }
            });
        } else {
            return res.status(403).json({
                result: "undefined"
            })
        }

    };


ensureToken = function (req, res, next) {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        req.token = bearer[1];
        jwt.verify(req.token, 'my_secret_token', (err, data) => {
            if (err) {
                return res.status(403).json({
                    result: err.toString()
                });
            } else {
                next();
            }
        });
    } else {
        return res.status(403).json({
            result: "undefined"
        })
    }

};

module.exports = {
    ensureToken,
    ensureTokenAdmin
};
