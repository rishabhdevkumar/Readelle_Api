
const mongoose = require("mongoose");
const generateCustomId = require("../utils/idGenerator");

const wishlistSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
        },

        user_id: {
            type: String,
            required: [true, "User id is required"],
            trim: true,
        },

        book_id: {
            type: String,
            required: [true, "Book id is required"],
            trim: true,
        },

        status: {
            type: String,
            enum: {
                values: ["to read", "Reading", "Complete"],
                message: "Status must be to read, Reading or Complete",
            },
            default: "to read",
        },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: false,
        },
    }
);

wishlistSchema.pre("save", async function () {
    if (this.isNew) {

        this._id = await generateCustomId(
            "wishlist_sequence_id",
            "WIS",
            null,
            3
        );
    }
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;