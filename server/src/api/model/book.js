const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const isSeriesValue = ["No", "Yes"];
const bookStatus = ["Active", "Borrowed", "Available", "Inactive"];
const uplaodType = ["Manual", "ISBN"];

const BookSchema = new Schema({
  title: { type: String, require: true },
  is_series: {
    type: String,
    require: true,
    enum: isSeriesValue,
    default: "No",
  },
  series_no: { type: String, require: isSeriesRequired, default: null },
  age_group: { type: Number, require: true },
  isbn10: { type: String },
  isbn13: { type: String },
  publisher: { type: String, require: true },
  landing_period: { type: Number, require: true },
  penality_per_day: { type: Number, require: true },
  penality_for_damage: { type: Number, require: true },
  thumbnail: { type: String },
  images: { type: String },
  supporting_images: { type: [String] },
  created_by: { type: Number },
  upload_type: { type: String, enum: uplaodType },
  status: { type: String, enum: bookStatus, default: "Active" },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
});

function isSeriesRequired() {
  if (this.is_series === "Yes") {
    return true;
  }
  return false;
}

module.exports = mongoose.model("Book", BookSchema);
