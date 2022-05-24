import { faker } from '@faker-js/faker'
import ContactModal, { IContactModal } from '../../model/ContactModal'
import { IOrganisation } from '../../model/OrganisationModel'
import TypeModel, { ITypeModal } from '../../model/TypeModel'
import { getModels } from './seeder'

export const organisationFactory = async(): Promise<IOrganisation> => ({
  name: `${faker.name.firstName} ${faker.name.lastName}`,
  estd: Number(faker.random.numeric(4)),
  registration_number: faker.random.alphaNumeric(10),
  affliation_number: faker.random.alphaNumeric(10),
  description: faker.lorem.paragraph(),
  contacts : await ContactModal.insertMany(await getModels(contactFactory, Number(faker.random.numeric(1))))
})

export const contactFactory = async (): Promise<IContactModal> => ({
  name: `${faker.name.firstName} ${faker.name.lastName}`,
  contact: faker.finance.creditCardNumber(),
  contact_type: await TypeModel.findOne({l1 : 'Contact'}),
})

export const typeFactory = (): ITypeModal[] => [
  // gender
  {
    l1: 'Gender',
    l2: 'Male',
    l3: '♂',
    l4: '',
    description: 'Male (symbol: ♂)'
  },
  {
    l1: 'Gender',
    l2: 'Female',
    l3: '♀',
    l4: '',
    description: 'Female (symbol: ♀)'
  },

  // contact
  {
    l1: 'Contact',
    l2: 'mobile',
    l3: 'whatsapp',
    l4: 'varified',
    description: ''
  },
  {
    l1: 'Contact',
    l2: 'mobile',
    l3: 'whatsapp',
    l4: 'notVarified',
    description: ''
  },
  {
    l1: 'Contact',
    l2: 'mobile',
    l3: '',
    l4: 'varified',
    description: ''
  },
  {
    l1: 'Contact',
    l2: 'mobile',
    l3: '',
    l4: 'notVarified',
    description: ''
  },

  {
    l1: 'Contact',
    l2: 'email',
    l3: 'varified',
    l4: '',
    description: ''
  },
  {
    l1: 'Contact',
    l2: 'email',
    l3: 'notVarified',
    l4: '',
    description: ''
  },
  {
    l1: 'Contact',
    l2: 'email',
    l3: 'varified',
    l4: '',
    description: ''
  },
  {
    l1: 'Contact',
    l2: 'email',
    l3: 'notVarified',
    l4: '',
    description: ''
  },
  { l1: 'Contact', l2: 'Facebook', l3: '', l4: '', description: '' },
  { l1: 'Contact', l2: 'Twitter', l3: '', l4: '', description: '' },
  { l1: 'Contact', l2: 'Website', l3: '', l4: '', description: '' },
  { l1: 'Contact', l2: 'otherActive', l3: '', l4: '', description: '' },
  { l1: 'Contact', l2: 'otherInactive', l3: '', l4: '', description: '' },

  // address
  { l1: 'Address', l2: 'Home', l3: '', l4: 'permanent', description: '' },
  { l1: 'Address', l2: 'Home', l3: '', l4: 'temporary', description: '' },
  { l1: 'Address', l2: 'Office', l3: '', l4: 'current', description: '' },
  { l1: 'Address', l2: 'Office', l3: '', l4: 'past', description: '' },
  { l1: 'Address', l2: 'Office', l3: '', l4: 'future', description: '' },
  { l1: 'Address', l2: '', l3: '', l4: '', description: '' }
]
