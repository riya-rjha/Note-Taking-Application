import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { userModel } from '../Model/user'
import 'dotenv/config.js'

const router = express.Router();

router.post('/register', async(req, res)=>{
    
})