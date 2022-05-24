import { Router } from 'express'
import { type, types } from '../controller/typeController'
const router = Router()
router.route('/').get(types)
router.route('/:_id').get(type)

export default router
