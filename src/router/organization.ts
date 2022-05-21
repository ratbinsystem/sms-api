import { Router } from 'express'
import {
  organizations,
  createOrganisation,
  organization
} from '../controller/organizationController'
const router = Router()
router.route('/').get(organizations).post(createOrganisation)
router.route('/:_id').get(organization)

export default router
