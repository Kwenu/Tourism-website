import express from 'express';

import { createTour, deleteTour, updateTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCounts } from '../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// Create a new tour
router.post('/', verifyAdmin, createTour);

// delete a tour
router.delete('/:id', verifyAdmin, deleteTour);

// update a tour
router.put('/:id', verifyAdmin, updateTour);

// get single tour
router.get('/:id', getSingleTour);

// get All tours
router.get('/', getAllTour);

//get tours by search
router.get('/search/getTourBySearch', getTourBySearch);
router.get('/search/getFeaturedTours', getFeaturedTour);
router.get('/search/getTourCount', getTourCounts);

export default router;