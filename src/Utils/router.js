const { Router } = require("express");

const UserController = require("../Controllers/UserController");
const LoginController = require("../Controllers/LoginController");
const PostController = require("../Controllers/PostController");

const router = Router();

// TO DO - ROUTERS

router.post("/users", UserController.createUser);

router.get("/users", UserController.listUser);

router.post("/login", LoginController.login);

router.post("/posts", PostController.createPost);
router.get("/posts", PostController.listAllPosts);
router.delete("/posts/:post_id", PostController.deletePost);
router.put("/posts/:post_id", PostController.editPost);

// CHECK USER PROFILE

// LIKE

router.get("/", (req, res) => {
  return res.send("TESTE");
});

module.exports = router;
