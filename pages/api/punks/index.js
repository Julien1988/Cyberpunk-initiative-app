import dbConnect from '../../../utils/dbConnect'
import Punk from '../../../models/Punk'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const punks = await Punk.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: punks })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const punk = await Punk.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: punk })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}