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





};

module.exports = thoughtController;