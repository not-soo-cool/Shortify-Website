const express = require("express"); 
const { register, loginUser, followAndUnfollowUser, logoutUser, updatePassword, updateProfile, deleteMyProfile, myProfile, getUserProfile, getAllUsers, forgotPassword, resetPassword, getMyPosts, getUserPosts, becomePro } = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();


router.route("/register").post(register);

router.route("/login").post(loginUser);

router.route("/logout").get(logoutUser);

router.route("/me").get(isAuthenticated, myProfile); 

router.route("/update/password").put(isAuthenticated, updatePassword); 

router.route("/update/profile").put(isAuthenticated, updateProfile);

// router.route("/delete/me").delete(isAuthenticated, deleteMyProfile);

router.route("/user/:id").get(isAuthenticated, getUserProfile);

router.route("/forgot/password").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/user/member").put(isAuthenticated, becomePro);

module.exports = router;