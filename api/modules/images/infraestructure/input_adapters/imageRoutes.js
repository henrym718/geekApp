import { Router } from "express"
import ImageController from './imageController.js'
import { upload } from './multer.js'
import { checkRole } from '../../../../middleware/routes/checkRole.js'
const imageController = new ImageController()

const router = new Router()

router.post("/api/image/upload", checkRole(["BASICUSER", "COMPLETEUSER"]), upload.single("file"), imageController.uploadFile)


export default router
