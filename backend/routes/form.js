const express = require("express"); 
const { createForm, getMyForms, getForm, updateForm, deleteForm, getMyFormsId } = require("../controllers/form");

const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/form/create").post(isAuthenticated, createForm);

router.route("/my/forms").get(isAuthenticated, getMyForms);

router.route("/my/forms/:id").get(getMyFormsId);

router
.route("/form/:id")
.get(getForm)
.put(isAuthenticated, updateForm)
.delete(isAuthenticated, deleteForm);


module.exports = router;