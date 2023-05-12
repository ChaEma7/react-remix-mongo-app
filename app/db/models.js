import { mongoose } from "mongoose";

const { Schema } = mongoose;

const plantschema = new Schema(
  {
    firstname: String,
    lastname: String,
    age: Number,
  },
  { timestamps: true }
);

export const models = [
  {
    name: "Plant",
    schema: plantschema,
    collection: "plants",
  },
];
