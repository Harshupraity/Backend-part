const express = require('express');

const verifyUser= require("../middleware/verifyUser");
const wishlistController = require("../controllers/wishlistController")


const {createwishlistHandler,deleteWishlistHandler,getWishlistHandler} = wishlistController;
const router = express.Router();
router.route("/")
    .post(verifyUser,createwishlistHandler )
router.route("/:id")
    .delete(verifyUser,deleteWishlistHandler)

router.route("/")
    .get(verifyUser,getWishlistHandler )
module.exports = router;