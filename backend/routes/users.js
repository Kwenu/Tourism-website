import express from 'express';

import { deleteUser, updateUser, getSingleUser, getAllUser } from '../controllers/userController.js';

const router = express.Router();

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

// delete a User
router.delete('/:id', verifyUser, deleteUser);

// update a User
router.put('/:id', verifyUser, updateUser);
 
// get single User
router.get('/:id', verifyUser, getSingleUser);

// get All Users
router.get('/', verifyAdmin, getAllUser);

export default router;