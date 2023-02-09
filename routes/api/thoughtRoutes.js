// This file defines the routes for the thought model
const router = require("express").Router();
const {
  getAllThoughts,
  createThought,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");


router.route("/").get(getAllThoughts).post(createThought);
 router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
 router.route('/:thoughtId/reactions').post(addReaction);
 router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
