// Description: This file contains all the routes for the user model

const router = require("express").Router();
const { getUsers, createUser, getSingleUser, deleteUser, updateUser,addFriend,deleteFriend } = require("../../controllers/userController");

router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getSingleUser);
router.route('/:userId').delete(deleteUser);
router.route('/:userId').put(updateUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);


module.exports = router;
