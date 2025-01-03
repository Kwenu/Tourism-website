import User from "../models/User.js";

export const createUser = async (req, res) => {
  const NewUser = new User(req.body);
  try {
    const savedUser = await NewUser.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Successfully Created",
        data: savedUser,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to create" });
  }
};

// update User
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res
      .status(200)
      .json({
        success: true,
        message: "Successfully Updated",
        data: updatedUser,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

// delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Successfully Deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to Delete" });
  }
};

// getSingle User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res
      .status(200)
      .json({
        success: true,
        message: "Successfully Get the Data",
        data: user,
      });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

// getAll User
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({})
    res
      .status(200)
      .json({
        success: true,
        message: "Successfully Get all the Data",
        data: users,
      });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};