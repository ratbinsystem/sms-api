import { Router } from 'express'
import { users } from '../controller/userController'
const router = Router()
router.route('/').get(users)
export default router
