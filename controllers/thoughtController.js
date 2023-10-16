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




};

module.exports = thoughtController;