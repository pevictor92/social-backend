const { Router } = require("express");

const router = Router();

// TO DO - ROUTERS
// ADD USER
// LOGIN
// LOGOUT
// VIEW ALL PHOTOS
// LIKE PHOTO
// POST PHOTO
// DELETE PHOTO
// EDIT PHOTO
// CHECK USER PROFILE

router.get("/", (req, res) => {
  return res.send("TESTE");
});

module.exports = router;
