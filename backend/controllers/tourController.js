// import { parse } from "dotenv";
import Tour from "../models/Tour.js";

export const createTour = async (req, res) => {
  const Newtour = new Tour(req.body);
  try {
    const savedTour = await Newtour.save();
    res
      .status(200)
      .json({
        success: true,
        message: "Successfully Created",
        data: savedTour,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to create" });
  }
};

// update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
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
        data: updatedTour,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

// delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Successfully Deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to Delete" });
  }
};

// getSingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");
    res
      .status(200)
      .json({
        success: true,
        message: "Successfully Get the Data",
        data: tour,
      });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

// getAll tour
export const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page);
  try {
    const tours = await Tour.find({}).populate("reviews")
      .skip(page * 6)
      .limit(6);
    res
      .status(200)
      .json({
        success: true,
        count: tours.length,
        message: "Successfully Get all the Data",
        data: tours,
      });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};


// get tours by search
export const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, "i");
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {
        const tours = await Tour.find({
            city,
            distance: {$gte: distance},
            maxGroupSize: {$gte: maxGroupSize},
        }).populate("reviews");
        res.status(200).json({
            success: true,
            message: "Successful",
            data: tours,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not Found" });
    }
}

// getFeatured tour
export const getFeaturedTour = async (req, res) => {
    try {
      const tours = await Tour.find({ featured:true }).populate("reviews").limit(6);
      res
        .status(200)
        .json({
          success: true,
          message: "Successfully Get all the Data",
          data: tours,
        });
    } catch (err) {
      res.status(404).json({ success: false, message: "Not Found" });
    }
};

// get tour counts
export const getTourCounts = async (req, res) => {
    try {
      const tourCount = await Tour.estimatedDocumentCount();
      res
        .status(200)
        .json({
          success: true,
          message: "Successful",
          data: tourCount,
        });
    } catch (err) {
      res.status(500).json({ success: false, message: "Failed to fetch" });
    }
};