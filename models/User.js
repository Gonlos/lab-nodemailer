const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    mail: String,
    status: {
      type: String,
      enum: ["Pending confirmation", "Active"],
      default: "Pending confirmation"
    },
    confirmationCode: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
