import { File } from "../model/file.js";
export const uploadFile = async (req, res) => {
  const obj = {
    path: req.file.path,
    name: req.file.filename,
  };

  try {
    const response = await File.create(obj);
    res.status(201).json({ url: "http://localhost:8000/file/" + response._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    file.downloadCount++;
    await file.save();
    res.download(file.path, file.name.split("-")[1]);
  } catch (error) {
    console.log(error);
  }
};
