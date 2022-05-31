const router = require("express").Router();
const termController = require("../controller/termController");

// ADD A TERM
router.post("/", termController.addTerm);

//GET ALL TERMS
router.get("/", termController.getAllTerms);

//GET A TERM
router.get("/:id", termController.getTerm);

//UPDATE A TERM
router.put("/:id", termController.updateTerm);

//DELETE A TERM
router.delete("/:id", termController.deleteTerm);

module.exports = router;
