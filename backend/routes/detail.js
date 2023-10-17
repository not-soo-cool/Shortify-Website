const express = require("express"); 

const { isAuthenticated } = require("../middlewares/auth");
const { createDetailForm, getDetailForm, getMyDetailForms, updateDetailForm, deleteDetailForm, getMyDetailFormsId } = require("../controllers/detail");

const router = express.Router();

router.route("/detailform/create").post(isAuthenticated, createDetailForm);

router.route("/my/detailforms").get(isAuthenticated, getMyDetailForms);

router.route("/my/detailforms/:id").get(getMyDetailFormsId);

router
.route("/detailform/:id")
.get(getDetailForm)
.put(isAuthenticated, updateDetailForm)
.delete(isAuthenticated, deleteDetailForm);

router
.route("/prodetailform/:id")
.get(isAuthenticated, getDetailForm)
.put(isAuthenticated, updateDetailForm)
.delete(isAuthenticated, deleteDetailForm);


module.exports = router;