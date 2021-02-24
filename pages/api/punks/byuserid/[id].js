import dbConnect from '../../../../utils/dbConnect'
import Punk from '../../../../models/Punk'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const punk = await Punk.find({user_id: id})
        if (!punk) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: punk })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break


    default:
      res.status(400).json({ success: false })
      break
  }
}