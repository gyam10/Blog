const grid = require("gridfs-stream");
const mongoose = require("mongoose");

// const dburl =

let gfs, gridfsBucket;
const connect = mongoose.connection;
connect.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(connect.db, {
    bucketName: "fs",
  });
  gfs = grid(connect.db, mongoose.mongo);
  gfs.connection("fs");
});

export const uploadImage = (req, res, next) => {
  if (!req.file) {
    return res.status(404).json("File not found");
  }
  const ImageUrl = `${url}/file/${req.file.filename}`;
  res.json({
    status: true,
    result: ImageUrl,
    msg: "Image sucessfully uploaded",
  });
};

export default getImage = async (req, res, next) => {
  try {
    const file = await gfs.files.findOne({
      filename: req.params.filename,
    });
    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (error) {
    next({
      status: 500,
      msg: error.message,
    });
  }
};
