const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  data: [],
  lastUpdate: String,
});

module.exports = News = mongoose.model("news", newsSchema);
