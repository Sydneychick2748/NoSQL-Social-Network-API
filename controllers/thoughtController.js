const { Thought, User } = require("../models");

module.exports = {
    // Get all thoughts
    getAllThoughts(req, res) {
        Thought.find()
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },


    // Get a single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: "No thought with that ID" });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },
    
    // Create a new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then(({ id }) => {
                return User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $push: { thoughts: id } },
                    { new: true }
                );
            }
            )
            .then((user) => {
                if (!user) {
                    res.status(404).json({ message: "No user with that ID" });
                    return;
                }
                res.json(user);
            }
            )
            .catch((err) => res.status(500).json(err));
    },

    // Update a thought
    
};