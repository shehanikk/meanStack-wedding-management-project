"use strict";
exports.__esModule = true;
exports.ItemModel = exports.ItemSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ItemSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    type: { type: String, required: true }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.ItemModel = (0, mongoose_1.model)('items', exports.ItemSchema);
