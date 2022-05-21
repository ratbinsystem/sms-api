import { Router } from 'express'
import {
  organizations,
  createOrganisation,
  organization
} from '../controller/organizationController'
import { resolveOrganisation } from '../core/auth/middleware/protectedRoute'
const router = Router()

router.route('/').get(organizations).post(createOrganisation)
router.route('/:_id').get(resolveOrganisation, organization)

export default router
