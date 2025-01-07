import { Router } from 'express'
import { initRepo } from '../controllers/gitController.js'

const router = Router()

router.post('/init', initRepo)

export default router