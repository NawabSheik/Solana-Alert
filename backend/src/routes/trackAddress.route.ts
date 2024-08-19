import { Router } from "express";
import trackAddress from "../controller/trackAddress.controller";

const router = Router()

router.route('/trackAddress').post(trackAddress)

export default router;