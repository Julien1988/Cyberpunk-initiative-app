import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'

const bcrypt = require('bcrypt');

export default async function handler(req, res) {
    const { method } = req
  
    await dbConnect()
  
    switch (method) {
      case 'POST':
            try {
           
                const users = await User.findOne({ email: req.body.email })
                const userPassword = req.body.password
                console.log(users)
                if (userPassword == users.password) {
                    res.status(200).json({ success: true, data: users })
                } else {
                    console.log("Password error")
                }
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }