const { User, Thought } = require("../models");

const thoughtController = {

    //get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughtData = await Thought.find()
                .select("-__v")
                .populate('reactions');
            res.json(thoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

        // get single thought
        async getSingleThought({ params }, res) {
            try {
                const thoughtData = await Thought.findOne({ _id: params.id })
                    .populate({ path: "reactions", select: "-__v" })
                    .select("-__v");

                if (!thoughtData) {
                    res.status(404).json({ message: "No thought ID found" });
                    return;
                }

                res.json(thoughtData);
            } catch (err) {
                res.status(400).json(err);
            }
        },

            // add thought
    async createThought({ body }, res) {
        try {
            const thoughtData = await Thought.create(body);
            const userData = await User.findOneAndUpdate(
                { _id: body.userId },
                { $push: { thoughts: thoughtData._id } },
                { new: true }
            );
            if (!userData) {
                res.status(404).json({ message: "No user found with this id" });
                return;
            }
            res.json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

        // update thought
        async updateThought({ params, body }, res) {
            try {
                const thoughtData = await Thought.findOneAndUpdate(
                    { _id: params.id },
                    body,
                    { new: true }
                );
                if (!thoughtData) {
                    res.status(400).json({ message: "Thought ID doesn't exist" });
                    return;
                }
                res.json(thoughtData);
            } catch (err) {
                res.status(400).json(err);
            };
        },

            // remove thought
    async removeThought({ params }, res) {
        try {
            const thoughtData = await Thought.findOneAndDelete({ _id: params.id });
            if (!thoughtData) {
                res.status(400).json({ message: "No thought ID found" });
                return;
            }
            await User.findOneAndUpdate(
                { username: thoughtData.username },
                { $pull: { thoughts: params.id } }
            );
            res.json({ message: "Thought has been deleted" });
        } catch (err) {
            res.status(400).json(err);
        }
    },


};

module.exports = thoughtController;