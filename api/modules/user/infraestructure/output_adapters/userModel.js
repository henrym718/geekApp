import { Schema, model } from "mongoose";
const userSchema = new Schema(
  {
    user: {type: Schema.Types.ObjectId, ref: "Auth"},
    email: String,
    firstName: String,
    lastName: String,
    displayName: String,
    gender: String,
    city: String,
    sector: String,
    aboutMe: String,
    avatar: String,
    dateOfBirth: Date,
    levelOfEducation: String,
    profession: String,
    phone: String,
    memberSince: { type: Date, default: new Date() },
    rol: String,
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const userModel = model("User", userSchema);
export { userModel };
