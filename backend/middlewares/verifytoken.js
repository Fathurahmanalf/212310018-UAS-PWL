const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({
            message: "Missing token"
        });
    }

    const JWTToken = token.split(" ").pop();

    try {
        const decoded = jwt.verify(JWTToken, "secretKey");
        const user = await User.findByPk(decoded.data.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Attach user data to the request object for later use
        req.user = decoded.data;
        next();
    } catch (error) {
        console.error('JWT Token verification error:', error);
        return res.status(403).json({
            message: "Invalid token"
        });
    }
};
