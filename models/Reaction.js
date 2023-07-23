const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
            transform: function (doc, ret) {
                ret.createdAt = doc.createdAt.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
            },
        },
        id: false,
    }
);

module.exports = reactionSchema;
