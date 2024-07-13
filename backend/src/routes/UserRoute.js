const express = require('express')
const verifyToken = require("../../middlewares/verifytoken")
const router = express.Router()
const userHandlers = require('./handlers/users')
const userIdHandlers = require('./handlers/users/id')

router.route('/').get(verifyToken, userHandlers.get)

router
.route("/:userId")
  .get(userIdHandlers.get)
  .put(userIdHandlers.put)
  .delete(userIdHandlers.delete);

module.exports = router;