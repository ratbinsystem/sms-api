import { faker } from '@faker-js/faker'
import AddressModal, { IAddressModal } from '../../model/AddressModal'
import ContactModal, { IContactModal } from '../../model/ContactModal'
import { IOrganisation } from '../../model/OrganisationModel'
import PinModal, { IPinModal } from '../../model/PinModal'
import TypeModel, { ITypeModal } from '../../model/TypeModel'
import UserModal, { IUserModal } from '../../model/UserModel'
import { getModels } from './seeder'

export const organisationFactory = async (): Promise<IOrganisation> => ({
  name: `${faker.name.firstName} ${faker.name.lastName}`,
  estd: Number(faker.random.numeric(4)),
  registration_number: faker.random.alphaNumeric(10),
  affliation_number: faker.random.alphaNumeric(10),
  description: faker.lorem.paragraph(),
  contacts: await ContactModal.insertMany(
    await getModels(contactFactory, Number(faker.random.numeric(1)))
  ),
  addresses: await AddressModal.insertMany(
    await getModels(addressFactory, Number(faker.random.numeric(1)))
  ),
  users: await UserModal.insertMany(
    await getModels(userFactory, Number(faker.random.numeric(1)))
  )
})

export const userFactory = async (): Promise<IUserModal> => ({
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email : faker.internet.email(),
  avatar : faker.image.avatar(),
  contacts: await ContactModal.insertMany(
    await getModels(contactFactory, Number(faker.random.numeric(1)))
  ),
  addresses: await AddressModal.insertMany(
    await getModels(addressFactory, Number(faker.random.numeric(1)))
  )
})

export const contactFactory = async (): Promise<IContactModal> => ({
  name: `${faker.name.firstName} ${faker.name.lastName}`,
  contact: faker.finance.creditCardNumber(),
  contact_type: await TypeModel.findOne({ l1: 'Contact' })
})

export const addressFactory = async (): Promise<IAddressModal> => ({
  name: `${faker.name.firstName} ${faker.name.lastName}`,
  address_line_1: faker.address.streetAddress(true),
  address_line_2: faker.address.streetAddress(true),
  lankmark: faker.address.cityName(),
  pin: await PinModal.findOne({ state: 'Bihar' }),
  address_type: await TypeModel.findOne({ l1: 'Address' })
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
export const pinFactory = (): IPinModal[] => [
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Adai BO',
    pin: 824207
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Adarchak BO',
    pin: 824221
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Agnoor BO',
    pin: 824143
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Ahiyapur BO',
    pin: 824207
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Akauna BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Akauni BO',
    pin: 824113
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Akhoini Regania BO',
    pin: 824103
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Akouna BO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Amari BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Amarut BO',
    pin: 824220
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Amas SO',
    pin: 824219
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Amauna BO',
    pin: 824143
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Amba SO',
    pin: 824111
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Amilauna BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Anchha BO',
    pin: 824143
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Angra BO',
    pin: 824116
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Angrahi BO',
    pin: 824115
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Anjan BO',
    pin: 824217
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Ankora RS BO',
    pin: 824303
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Ankupa BO',
    pin: 824123
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Ankuri BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Anti SO',
    pin: 824116
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Apiroo BO',
    pin: 824120
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Arai BO',
    pin: 824143
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Aranda BO',
    pin: 824113
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Ararua BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Arthua BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Aurangabad BH HO',
    pin: 824101
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Aurangabad Kutchehry SO',
    pin: 824101
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Azamgarh BO',
    pin: 824217
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'B  Chaugain BO',
    pin: 824217
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'B Sagarpur BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Babahandeo BO',
    pin: 824220
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Baghoi BO',
    pin: 824120
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bahoura BO',
    pin: 824220
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bahuara BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bairia BO',
    pin: 824303
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Baksibigha BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Balia BO',
    pin: 824205
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Baligaon BO',
    pin: 824103
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Ballia BO',
    pin: 824111
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Baluganj BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bankey Bajar SO',
    pin: 824217
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bantara BO',
    pin: 824120
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Banua BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bara BO',
    pin: 824301
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bara BO',
    pin: 824210
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Barabanadih BO',
    pin: 824302
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Barachatti SO',
    pin: 824201
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Barahi BO',
    pin: 824122
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Barauli BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Barem BO',
    pin: 824303
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Barhussainganj BO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Barkapandu BO',
    pin: 824302
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Barpa BO',
    pin: 824114
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Barun SO AurangabadBH',
    pin: 824112
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Basdiha BO',
    pin: 824301
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Baxar BO',
    pin: 824129
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bedauli BO',
    pin: 824111
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bedauli BO',
    pin: 824210
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bedhani BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bel BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Belain BO',
    pin: 824301
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Belaon BO',
    pin: 824127
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Belawarish BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Belsar BO',
    pin: 824127
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Belsara BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Beri BO',
    pin: 824208
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Beri Khiriawan BO',
    pin: 824208
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Betibigha BO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bhadeya BO',
    pin: 824220
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bhadwa Bazar BO',
    pin: 824122
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bhakharua SO',
    pin: 824113
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bhaluachatti BO',
    pin: 824201
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bham BO',
    pin: 824116
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bharaunda BO',
    pin: 824205
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bhartholi BO',
    pin: 824121
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bharub BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bijauli BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Binda BO',
    pin: 824201
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bishambharpur BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bishunpur Chatti BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'BManjhiawan BO',
    pin: 824207
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Bodhi Bigha BO',
    pin: 824221
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Budhai BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bumuar BO',
    pin: 824201
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'CDhongra BO',
    pin: 824111
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Chain BO',
    pin: 824103
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Chainpur BO',
    pin: 824303
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Chakkarbandha BO',
    pin: 824221
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Chanda BO',
    pin: 824113
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Chandragarh BO',
    pin: 824301
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Chansi BO',
    pin: 824205
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Charan BO',
    pin: 824112
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Charkanwan BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Chaurahi BO',
    pin: 824120
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Chauri BO',
    pin: 824127
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Chauria BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Chechari BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Chechaura BO',
    pin: 824207
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Chilim BO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Chiraila BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Chitabkhurd BO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Choukhra BO',
    pin: 824103
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Chuawar BO',
    pin: 824217
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Chubra BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dadar BO',
    pin: 824129
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dadhapi BO',
    pin: 824103
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dadhpa BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Darha BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dariaura BO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Darma BO',
    pin: 824116
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Darwan BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Daudnagar SO',
    pin: 824143
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Deo SO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Deohara SO',
    pin: 824114
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Deoria Kala BO',
    pin: 824121
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Deshpur BO',
    pin: 824111
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dewania BO',
    pin: 824201
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dhab Chiraiya BO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dhamani BO',
    pin: 824115
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dhamna BO',
    pin: 824201
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dhangain BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dhibra BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dhnaoh Bigha BO',
    pin: 824143
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dihara BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dihuri Ekauni BO',
    pin: 824129
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dindir BO',
    pin: 824120
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dobhi SO',
    pin: 824220
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dongra BO',
    pin: 824201
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dosma BO',
    pin: 824122
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Duba BO',
    pin: 824205
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dugul BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dumari BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dumaria SO',
    pin: 824221
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dumra BO',
    pin: 824120
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dumra BO',
    pin: 824111
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Dumri Belwan BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Eguna BO',
    pin: 824207
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Entwan BO',
    pin: 824120
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Erki BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Fag BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Fort Daudnagar BO',
    pin: 824143
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'G Kenap BO',
    pin: 824120
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'G Kharma BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Gaini BO',
    pin: 824113
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Gamhari BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Gangi BO',
    pin: 824220
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Gardi BO',
    pin: 824103
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Ghatrain BO',
    pin: 824208
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Gheura BO',
    pin: 824111
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Ghoraghat BO',
    pin: 824220
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Ghoshta BO',
    pin: 824103
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Gijna BO',
    pin: 824121
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Goh SO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Goharpur BO',
    pin: 824207
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Gola Bajar Sherghati SO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Gopalkera BO',
    pin: 824201
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Gordiha BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Gorkatti BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Gosaidih BO',
    pin: 824303
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Gotibandh BO',
    pin: 824221
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Gurua SO',
    pin: 824205
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'H Bigha BO',
    pin: 824143
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Hardwan BO',
    pin: 824220
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Haspura SO',
    pin: 824120
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Hathiara BO',
    pin: 824120
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Hridaychak BO',
    pin: 824127
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Ibrahimpur BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Imamganj SO',
    pin: 824206
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Indrar BO',
    pin: 824122
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Ismailpur BO',
    pin: 824205
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Ismailpur BO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Itar BO',
    pin: 824122
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Ithat BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'ITWAN BO',
    pin: 824301
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'J H Tendua BO',
    pin: 824301
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Jagatpur BO',
    pin: 824112
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Jagdishpur BO',
    pin: 824112
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Jai Govind Nagar BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Jaigir BO',
    pin: 824201
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Jaipur BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Jaitiya BO',
    pin: 824116
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Jaitpur BO',
    pin: 824114
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Jakhim SO',
    pin: 824122
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Jalpura BO',
    pin: 824120
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Jamhor SO',
    pin: 824121
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Jamuara Kala BO',
    pin: 824217
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Jamuawan BO',
    pin: 824143
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Jhari BO',
    pin: 824219
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Jhinguri BO',
    pin: 824115
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Jhumardihra BO',
    pin: 824112
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Jogia BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'K P Tendua BO',
    pin: 824123
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kabar BO',
    pin: 824207
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kachauri BO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Kaithi BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Kaithi Siro BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kaithisadipur BO',
    pin: 824207
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Kaler SO',
    pin: 824127
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Kanbehari BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Kandi BO',
    pin: 824301
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Kapasia BO',
    pin: 824103
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Kara BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Karma Bhagwan BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Karma Pandey BO',
    pin: 824129
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Karmalahang BO',
    pin: 824302
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Karsara BO',
    pin: 824122
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Karsawan BO',
    pin: 824121
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kartahi BO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Kashipur Tetaria BO',
    pin: 824112
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Kasma BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kathautia BO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kathautia BO',
    pin: 824116
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Kerap BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Ketaki BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Kewala Kala BO',
    pin: 824221
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Khadiha BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Khadiha Kerka BO',
    pin: 824303
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Khaira Manjhouli BO',
    pin: 824103
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Khaira Rajpur BO',
    pin: 824123
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Khairadip BO',
    pin: 824113
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Khajuri BO',
    pin: 824207
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Khajuri Saraiya BO',
    pin: 824302
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Khudwan BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Khuthan BO',
    pin: 824120
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Koilwan BO',
    pin: 824115
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Kona BO',
    pin: 824103
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Konch SO Gaya',
    pin: 824207
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kothi BO',
    pin: 824210
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Kunda BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Kurhwan BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Kurmawan BO',
    pin: 824220
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Kurwan BO',
    pin: 824122
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Kutumba SO',
    pin: 824123
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Lahasa BO',
    pin: 824122
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Lahathua BO',
    pin: 824201
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Latta BO',
    pin: 824122
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Lukka BO',
    pin: 824122
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Lutua BO',
    pin: 824217
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Madanpur SO AurangabadBH',
    pin: 824208
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Mahsu BO',
    pin: 824111
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Mahuawan BO',
    pin: 824303
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Mahuawan BO',
    pin: 824208
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Maigra BO',
    pin: 824206
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Malahari BO',
    pin: 824206
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Malhad BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Malhara BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Malhara BO',
    pin: 824114
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Malwan BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Manika BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Manjurahi BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Manpur Chanda BO',
    pin: 824127
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Matpa BO',
    pin: 824111
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Mehian BO',
    pin: 824302
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Mirjapur BO',
    pin: 824303
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Mohabbatpur BO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Mok BO',
    pin: 824207
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Molbiganj Pothu BO',
    pin: 824122
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Mungia BO',
    pin: 824302
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Munjhar BO',
    pin: 824114
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Munjhara BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Murera BO',
    pin: 824207
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Nabinagar Road SO',
    pin: 824303
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Nabinagar SO',
    pin: 824301
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Nagmatia BO',
    pin: 824208
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Nagwan Pathra BO',
    pin: 824210
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'NAGWANGARH BO',
    pin: 824219
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Nainsagar BO',
    pin: 824220
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Narainpur BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Narendra Khap BO',
    pin: 824123
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Naugarh BO',
    pin: 824219
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Naugarh BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Naur BO',
    pin: 824303
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Nima Anjan',
    pin: 824208
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Nima Chaturbhuj BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Nimabidhoul BO',
    pin: 824219
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Niyamatpur BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Obra SO AurangabadBH',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'P Babhandiha BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'P Sikandarpur BO',
    pin: 824103
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Pachaukhar BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Paharpura BO',
    pin: 824103
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Pakri BO',
    pin: 824205
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Pakri Guria BO',
    pin: 824206
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Panania BO',
    pin: 824217
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Pandaria BO',
    pin: 824111
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Panrawan BO',
    pin: 824121
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Panti BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Parsawan BO',
    pin: 824217
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Parta BO',
    pin: 824111
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Paruhara BO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Patluka BO',
    pin: 824201
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Pauthu BO',
    pin: 824121
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Phesar BO',
    pin: 824121
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Phulwaria Baheri BO',
    pin: 824219
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Phulwaria BO',
    pin: 824206
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Pilchhi BO',
    pin: 824113
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Pipra Bagahi BO',
    pin: 824123
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Pipra BO',
    pin: 824221
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Pirasin BO',
    pin: 824220
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Pirauta BO',
    pin: 824303
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Pirthoo BO',
    pin: 824208
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Pirwan BO',
    pin: 824219
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Pogar BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Poiwan BO',
    pin: 824103
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Pokhraha BO',
    pin: 824121
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Purhara BO',
    pin: 824120
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'R B Bigha BO',
    pin: 824112
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'R B Nagar BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'R Pithanua BO',
    pin: 824112
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Rafiganj SO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Rajbari Kala BO',
    pin: 824303
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Rajoi BO',
    pin: 824103
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Rajpur BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Ramchandra Nagar BO',
    pin: 824121
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Ramnagar BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANAGABAD',
    subDistrict: 'RAMPUR B.O',
    pin: 824301
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Ranidih BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Raniganj SO Gaya',
    pin: 824210
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Risiap BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Riyasat Mali BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Riyasat Pawai BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Rondawan BO',
    pin: 824201
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Roshanganj BO',
    pin: 824217
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Rukundi Jhikatia SO',
    pin: 824129
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'S S College SO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Saduri Karma BO',
    pin: 824112
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sagdiha BO',
    pin: 824217
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sahuberma BO',
    pin: 824205
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sahukarma BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sakardiha BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Salaiya BO',
    pin: 824208
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Salaiya BO',
    pin: 824210
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sananpura BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sandya BO',
    pin: 824129
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sansa BO',
    pin: 824143
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Saonkala BO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Saratu BO',
    pin: 824302
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sarawak BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sargawan BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sarsawli BO',
    pin: 824121
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sattar BO',
    pin: 824301
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Satuahi BO',
    pin: 824112
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Shamshernagar BO',
    pin: 824143
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sharwankhas BO',
    pin: 824201
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Shekhpura BO',
    pin: 824114
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sherghati SO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Shyamnagar Nima BO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sidhpur BO',
    pin: 824206
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sihari SO',
    pin: 824115
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sihuli BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sihuli Khaira BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Silar BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Silar BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Simla BO',
    pin: 824125
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Simra BO',
    pin: 824303
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Simri Dhamni BO',
    pin: 824303
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sinduria BO',
    pin: 824207
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Singhana BO',
    pin: 824202
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Singhari BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Siris BO',
    pin: 824112
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Siyadih BO',
    pin: 824207
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sohsa BO',
    pin: 824127
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Son Nagar BO',
    pin: 824112
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sonaura BO',
    pin: 824303
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sonhathoo BO',
    pin: 824115
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sori BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sri Rampur BO',
    pin: 824211
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sunbarasa BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Sunurganj BO',
    pin: 824102
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Tandwa SO AurangabadBH',
    pin: 824302
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Tankupa BO',
    pin: 824207
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Tara BO',
    pin: 824113
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Tarar BO',
    pin: 824143
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Tarari BO',
    pin: 824113
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Tarari BO',
    pin: 824207
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Tayap BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Tejpura BO',
    pin: 824124
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Teldiha BO',
    pin: 824103
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Temura BO',
    pin: 824122
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Tengra BO',
    pin: 824112
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Tilaiya BO',
    pin: 824217
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Turk Telpa BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Turta BO',
    pin: 824123
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Udhampur BO',
    pin: 824103
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Umga BO',
    pin: 824208
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Unthu BO',
    pin: 824121
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Uphara BO',
    pin: 824203
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Urdina BO',
    pin: 824112
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Utrain BO',
    pin: 824207
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'War SO',
    pin: 824103
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Agiaon Bazar SO',
    pin: 802202
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Agiaon SO',
    pin: 802201
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Agrsanda Behara BO',
    pin: 802156
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Ahirauli BO',
    pin: 802116
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Akarua BO',
    pin: 802155
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Akhagaon SO',
    pin: 802352
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Akhauripur Gola BO',
    pin: 802114
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Allipur BO',
    pin: 802161
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Amehata BO',
    pin: 802202
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Amrainawada BO',
    pin: 802154
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Amsari BO',
    pin: 802126
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Anaith SO',
    pin: 802302
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Andhari BO',
    pin: 802222
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Arak SO',
    pin: 802111
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Ariaon BO',
    pin: 802119
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Arjunpur BO',
    pin: 802116
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Arrah Chowk SO',
    pin: 802301
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Arrah HO',
    pin: 802301
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Arrah Kutchey SO',
    pin: 802301
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Asha Parari BO',
    pin: 802135
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Ashni Jaitpur BO',
    pin: 802210
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Athar BO',
    pin: 802126
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Atimi BO',
    pin: 802129
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Atrauna BO',
    pin: 802123
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Attaon BO',
    pin: 802119
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Ayar BO',
    pin: 802155
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Ayer BO',
    pin: 802203
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Babhangawan BO',
    pin: 802163
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Babhaniaon BO',
    pin: 802158
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Babura BO',
    pin: 802163
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bachari BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Baga BO',
    pin: 802164
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bagar BO',
    pin: 802222
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Bagen BO',
    pin: 802134
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Baghi BO',
    pin: 802201
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bagmajhauan BO',
    pin: 802163
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bagwan BO',
    pin: 802203
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bahoranpur BO',
    pin: 802166
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bahuara BO',
    pin: 802158
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Baikunthpur BO',
    pin: 802123
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bairahi BO',
    pin: 802158
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Baisadih BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bakhorapur BO',
    pin: 802311
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Balbandh BO',
    pin: 802203
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Baligaon BO',
    pin: 802203
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Balua BO',
    pin: 802130
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Balua High School BO',
    pin: 802351
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bambhawar BO',
    pin: 802155
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bampali BO',
    pin: 802312
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Banahi BO',
    pin: 802183
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Banarpur BO',
    pin: 802114
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bandhu Chhapra BO',
    pin: 802163
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bankat BO',
    pin: 802206
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bankat Sikaria BO',
    pin: 802183
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Banni BO',
    pin: 802128
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Barad Parwa BO',
    pin: 802158
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Barahara SO',
    pin: 802311
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Barakhrauni BO',
    pin: 802166
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Barauli BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bargaon  BO',
    pin: 802201
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bariswan BO',
    pin: 802165
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Barka Dhakaich BO',
    pin: 802133
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Barka Dumra BO',
    pin: 802312
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Barka Sikraul BO',
    pin: 802114
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Barka Singhanpura BO',
    pin: 802120
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Barkagaon  BO',
    pin: 802209
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Barkarajpur SO',
    pin: 802113
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Barki Basauli BO',
    pin: 802119
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Barki Kulharia BO',
    pin: 802116
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Barki Nainijor BO',
    pin: 802112
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Barnaon BO',
    pin: 802203
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Baruhan BO',
    pin: 802134
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Baruhi BO',
    pin: 802208
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Baruna RS BO',
    pin: 802119
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Basantpur BO',
    pin: 802123
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Basantpur BO',
    pin: 802156
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Basaon Kalan BO',
    pin: 802129
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Basauri BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Bashudhar BO',
    pin: 802123
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Baulipur BO',
    pin: 802152
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Belahari BO',
    pin: 802126
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Belaon BO',
    pin: 802129
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Belauna BO',
    pin: 802154
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Belaur BO',
    pin: 802206
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Belauti BO',
    pin: 802154
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Belghat Balua BO',
    pin: 802312
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bemari BO',
    pin: 802154
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Benwalia SO',
    pin: 802351
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Berath BO',
    pin: 802201
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Bhada BO',
    pin: 802134
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Bhadar BO',
    pin: 802126
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bhadsera BO',
    pin: 802209
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bhadwar Barari BO',
    pin: 802134
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bhadwar BO',
    pin: 802161
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bhakura BO',
    pin: 802205
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bharasra Judge BO',
    pin: 802152
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bharauli BO',
    pin: 802165
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Bhatauli BO',
    pin: 802129
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bhelai BO',
    pin: 802312
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bichhiaon BO',
    pin: 802206
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bihia SO',
    pin: 802152
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bihta English BO',
    pin: 802209
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Bikaram English BO',
    pin: 802117
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bimwan BO',
    pin: 802152
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Birampur BO',
    pin: 802314
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Birpur BO',
    pin: 802165
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Bishunpur Dumaria BO',
    pin: 802314
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Bisikala BO',
    pin: 802129
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Boksa BO',
    pin: 802103
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Brahampur SO',
    pin: 802112
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Brahmapur Chaurasta SO',
    pin: 802112
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Buxar Gajadhar Ganj SO',
    pin: 802103
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Buxar HO',
    pin: 802101
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Buxar Jail SO',
    pin: 802102
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Chakai BO',
    pin: 802152
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Chakia BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Chakki BO',
    pin: 802120
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Chamarpur BO',
    pin: 802166
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Chanawath BO',
    pin: 802125
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Chandakewatia BO',
    pin: 802166
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Chandawa SO',
    pin: 802312
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Chandi BO',
    pin: 802223
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Charghat Chanaur BO',
    pin: 802166
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Charpokhari SO',
    pin: 802223
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Chasi BO',
    pin: 802201
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Chaturbhujibaraon BO',
    pin: 802159
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Chaubey Ke Prasia BO',
    pin: 802128
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Chaugai SO',
    pin: 802115
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Chaugain BO',
    pin: 802205
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Chaukia BO',
    pin: 802133
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Chaurasta Bihia SO',
    pin: 802154
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Chausa SO Buxar',
    pin: 802114
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Chhatnawar BO',
    pin: 802133
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Chhilhari BO',
    pin: 802133
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Chhotka Sasaram BO',
    pin: 802157
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Chhotkarajpur BO',
    pin: 802113
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Chhwarhi BO',
    pin: 802155
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Chilhar BO',
    pin: 802164
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Chilhose BO',
    pin: 802164
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Chunni BO',
    pin: 802114
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Churamanpur SO',
    pin: 802116
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Dahiwar BO',
    pin: 802116
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dakhin Ekauna BO',
    pin: 802210
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dalippur SO Bhojpur',
    pin: 802155
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Dallupur BO',
    pin: 802130
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Dalsagar BO',
    pin: 802116
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Damodarpur BO',
    pin: 802166
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dariapur BO',
    pin: 802156
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Daulatpur BO',
    pin: 802313
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Daulatpur BO',
    pin: 802163
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dawan BO',
    pin: 802152
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Dehari BO',
    pin: 802114
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Deo BO',
    pin: 802209
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Deochanda BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Deokuli BO',
    pin: 802112
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Deoria BO',
    pin: 802122
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Deoria BO',
    pin: 802210
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Derhgaon BO',
    pin: 802204
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dhamar SO',
    pin: 802156
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dhanauti BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Dhanbakhra BO',
    pin: 802129
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dhanchhuhan BO',
    pin: 802208
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dhandihan BO',
    pin: 802160
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dhangawan BO',
    pin: 802209
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dhansoi SO',
    pin: 802117
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Dharauli BO',
    pin: 802134
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dhobha Bazar BO',
    pin: 802156
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dhrubdihan BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Diaman BO',
    pin: 802111
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dilia BO',
    pin: 802201
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Diwan De Barka Gaon BO',
    pin: 802123
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dulahpur SO',
    pin: 802118
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dulamchak Chak Chaudhari BO',
    pin: 802208
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dularpur BO',
    pin: 802206
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dumari SO Buxar',
    pin: 802120
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dumaria BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dumraon SO',
    pin: 802119
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Dumraon Textiles SO',
    pin: 802136
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Ekauna BO',
    pin: 802311
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Ekauna Dubauli BO',
    pin: 802131
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Ekauni BO',
    pin: 802119
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Ekrasi BO',
    pin: 802134
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Ekwari BO',
    pin: 802208
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Gagaura BO',
    pin: 802117
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Gaharuaon BO',
    pin: 802204
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Gaighat BO',
    pin: 802130
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Gajrajganj SO',
    pin: 802157
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Gangahar BO',
    pin: 802312
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Gangauli BO',
    pin: 802131
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Garhani SO',
    pin: 802203
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Gaudarh Rudranagar SO',
    pin: 802183
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Gaura BO',
    pin: 802166
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Gidha BO',
    pin: 802314
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Girdhar Baraon BO',
    pin: 802127
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Girdharpur BO',
    pin: 802129
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Gosaipur BO',
    pin: 802114
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Guljarpur BO',
    pin: 802208
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Gunari SO',
    pin: 802313
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Hadiabad BO',
    pin: 802203
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Hanswadih BO',
    pin: 802155
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Haradiya BO',
    pin: 802152
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Hariyana Cattle Farm BO',
    pin: 802119
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Harpur BO',
    pin: 802128
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Hasan Bazar SO',
    pin: 802204
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Hathilpur BO',
    pin: 802130
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'HDJain College SO',
    pin: 802301
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Hetampur BO',
    pin: 802158
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Hethua BO',
    pin: 802122
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Hitawarajpur SO',
    pin: 802122
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Horil Chhapra BO',
    pin: 802165
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Ichari BO',
    pin: 802203
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Imadpur BO',
    pin: 802222
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Indaur BO',
    pin: 802117
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Isharapura BO',
    pin: 802112
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Itarhi SO',
    pin: 802123
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Itarhian BO',
    pin: 802117
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Jagdishpur SO Bhojpur',
    pin: 802158
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Jalahara BO',
    pin: 802128
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Jalpura BO',
    pin: 802352
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Jamauli BO',
    pin: 802128
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Jamira BO',
    pin: 802161
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Jamorhi BO',
    pin: 802204
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Jamuaon BO',
    pin: 802159
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Jamuaon Dihari BO',
    pin: 802206
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Jethwar Bhatt BO',
    pin: 802204
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Jigna BO',
    pin: 802129
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Jitaura SO',
    pin: 802159
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Jogia BO',
    pin: 802111
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Jokta BO',
    pin: 802352
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kahathu masurhi BO',
    pin: 802158
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kahen BO',
    pin: 802203
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kahndani BO',
    pin: 802202
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Kaithi BO',
    pin: 802134
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Kajaria BO',
    pin: 802128
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Kakaria BO',
    pin: 802117
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kakila BO',
    pin: 802158
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kalyanpur BO',
    pin: 802154
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kamariaon BO',
    pin: 802183
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Kamarpur BO',
    pin: 802102
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Kanehari BO',
    pin: 802128
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Kanjharua BO',
    pin: 802126
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Kant BO',
    pin: 802112
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Karath SO',
    pin: 802205
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Karbasin BO',
    pin: 802201
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Karhshi BO',
    pin: 802102
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Karisath BO',
    pin: 802157
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Karnamepur BO',
    pin: 802112
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Karsar BO',
    pin: 802129
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Karwan BO',
    pin: 802312
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kasap SO',
    pin: 802206
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Kasia BO',
    pin: 802126
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kataria BO',
    pin: 802202
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kateyan BO',
    pin: 802152
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Kathar BO',
    pin: 802111
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Katiknar BO',
    pin: 802125
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Katkaira BO',
    pin: 802160
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kaup BO',
    pin: 802203
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kawara BO',
    pin: 802162
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kayamnagar SO',
    pin: 802314
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kesari BO',
    pin: 802155
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kesath SO',
    pin: 802125
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kesawan BO',
    pin: 802155
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Keshopur BO',
    pin: 802113
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Khajuria BO',
    pin: 802156
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Khandricha BO',
    pin: 802126
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Khangaon BO',
    pin: 802161
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Khanita BO',
    pin: 802123
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Kharahatand BO',
    pin: 802120
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Khirauli BO',
    pin: 802136
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Khiri BO',
    pin: 802128
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Khocharia BO',
    pin: 802117
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Khopira BO',
    pin: 802206
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Khraonkalan BO',
    pin: 802208
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Khutahan SO',
    pin: 802222
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kirhi BO',
    pin: 802205
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kirkiri BO',
    pin: 802164
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Koil BO',
    pin: 802223
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Koilwar SO',
    pin: 802160
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kolodihri BO',
    pin: 802222
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Kopawan BO',
    pin: 802126
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Koran Sarai SO',
    pin: 802126
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kori BO',
    pin: 802164
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Koshiar BO',
    pin: 802208
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Krishnagarh BO',
    pin: 802313
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Kukurahan BO',
    pin: 802123
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kulharia BO',
    pin: 802160
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kumhaila BO',
    pin: 802223
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kundeshar BO',
    pin: 802165
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kurmichak BO',
    pin: 802201
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kurmurhi BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kurur BO',
    pin: 802205
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Kushi BO',
    pin: 802205
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Lachhutola BO',
    pin: 802351
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Lahang Dumaria BO',
    pin: 802351
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Lahrabad BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Lahritiwaridih BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Lahthan BO',
    pin: 802202
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Lakhandihara BO',
    pin: 802119
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Lasari BO',
    pin: 802201
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Lauhar Farna BO',
    pin: 802311
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Lilari BO',
    pin: 802223
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'LKDera BO',
    pin: 802112
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Madanpur BO',
    pin: 802201
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Maharaja College SO',
    pin: 802301
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Mahdah BO',
    pin: 802103
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Mahila BO',
    pin: 802123
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Mahuaon BO',
    pin: 802183
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Mahuar BO',
    pin: 802112
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Mahuli BO',
    pin: 802312
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Mahulighat BO',
    pin: 802316
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Mainpura BO',
    pin: 802156
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Majharia BO',
    pin: 802116
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Majhiaon BO',
    pin: 802223
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Malaur BO',
    pin: 802223
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Mangraon Sangraon BO',
    pin: 802122
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Mania BO',
    pin: 802125
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Maniachh BO',
    pin: 802206
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Manikpur BO',
    pin: 802163
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Manikpur BO',
    pin: 802128
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Manjhawari BO',
    pin: 802133
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Manoharpur SO Buxar',
    pin: 802128
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Mansagar BO',
    pin: 802223
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Mansingh Patti Barkagaon BO',
    pin: 802118
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Manudehari BO',
    pin: 802158
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Masarh BO',
    pin: 802162
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Masuri BO',
    pin: 802158
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Mathila BO',
    pin: 802126
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Matukpur BO',
    pin: 802311
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Moapkalan BO',
    pin: 802222
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Mohanpur  Karja BO',
    pin: 802311
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Moharihan BO',
    pin: 802128
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Mugaon BO',
    pin: 802126
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Mukhraon BO',
    pin: 802128
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Mukundpur BO',
    pin: 802223
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Murar SO',
    pin: 802127
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'MVCollege Buxar BO',
    pin: 802102
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Nachap BO',
    pin: 802134
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Nadaoan BO',
    pin: 802103
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Nagari BO',
    pin: 802223
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Nagpur BO',
    pin: 802122
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Nagpura BO',
    pin: 802118
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Nagraon BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Nagwan BO',
    pin: 802133
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Nai Bazar SO Buxar',
    pin: 802101
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Nainijor BO',
    pin: 802112
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Nandan BO',
    pin: 802119
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Narayan Pur Baghaur BO',
    pin: 802202
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Narayanpur BO',
    pin: 802201
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Narayanpur BO',
    pin: 802204
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Narhi Chandi SO',
    pin: 802161
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Nasaratpur BO',
    pin: 802352
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Nathmalpur BO',
    pin: 802316
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Nawada Ben SO',
    pin: 802162
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Nawada Pataria BO',
    pin: 802208
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Nawanagar SO Buxar',
    pin: 802129
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Naya Bhojpur BO',
    pin: 802133
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Naya Mohamad  Pur SO',
    pin: 802163
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Nehalpur BO',
    pin: 802117
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Neknam Tola BO',
    pin: 802311
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Nenua BO',
    pin: 802119
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Niazipur SO',
    pin: 802131
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Nimej SO',
    pin: 802130
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Noaon BO',
    pin: 802204
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Nonar BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Nuaon BO',
    pin: 802111
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Ojha Baraon BO',
    pin: 802115
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Osain BO',
    pin: 802183
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Pachma BO',
    pin: 802204
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Pachrukhia BO',
    pin: 802204
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Pachrukhia Kala BO',
    pin: 802163
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Pakari SO',
    pin: 802301
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Pandeypatti BO',
    pin: 802103
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Pandurarampur BO',
    pin: 802164
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Panwari BO',
    pin: 802222
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Pararia Pramanpur BO',
    pin: 802129
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Parasia BO',
    pin: 802111
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Parasia BO',
    pin: 802158
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Pareo BO',
    pin: 802160
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Pasahara BO',
    pin: 802119
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Pasaur BO',
    pin: 802223
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Pawana BO',
    pin: 802201
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Pawani',
    pin: 802114
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Pawar BO',
    pin: 802201
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Perhap BO',
    pin: 802208
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Peur BO',
    pin: 802208
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Phaphadar BO',
    pin: 802115
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Pharpur BO',
    pin: 802201
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Phuhan BO',
    pin: 802163
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Phulari BO',
    pin: 802164
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Piania BO',
    pin: 802210
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Pirauta BO',
    pin: 802312
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Piru SO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Pitaru BO',
    pin: 802202
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Pitath',
    pin: 802202
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Pokharahan BO',
    pin: 802134
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Posawa BO',
    pin: 802201
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Prasaunda BO',
    pin: 802112
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Prashurampur BO',
    pin: 802316
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Pratappur BO',
    pin: 802352
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Pulia BO',
    pin: 802102
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Purahra BO',
    pin: 802222
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Purana Bhojpur SO',
    pin: 802133
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Purana Haripur BO',
    pin: 802163
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Raghunathpur SO Buxar',
    pin: 802134
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Rahathua BO',
    pin: 802134
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Rajapur BO',
    pin: 802155
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Rajapur English BO',
    pin: 802163
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Rajeyan BO',
    pin: 802159
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Rajpur BO',
    pin: 802131
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Ramasarh BO',
    pin: 802164
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Rampur BO',
    pin: 802127
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Rampur BO',
    pin: 802114
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Ramsahar BO',
    pin: 802311
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Rani Singhanpura BO',
    pin: 802120
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Ranisagar BO',
    pin: 802165
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Rasen BO',
    pin: 802128
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Ratanpur BO',
    pin: 802312
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Ratnarh BO',
    pin: 802203
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Rauni BO',
    pin: 802122
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Rupsagar BO',
    pin: 802129
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sahangi BO',
    pin: 802203
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sahar SO Bhojpur',
    pin: 802208
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Sahiyar BO',
    pin: 802131
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Saisar Ganghari BO',
    pin: 802117
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sakaddi BO',
    pin: 802160
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sakariramnagar BO',
    pin: 802204
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sakhuan BO',
    pin: 802206
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sakla Bazar BO',
    pin: 802205
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Salempur BO',
    pin: 802351
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Salsala BO',
    pin: 802125
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sandaur BO',
    pin: 802154
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sandesh Bhatauli BO',
    pin: 802164
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sandesh SO',
    pin: 802164
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Saneya Barhata BO',
    pin: 802162
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sara BO',
    pin: 802209
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Saraiyan BO',
    pin: 802313
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sarathua BO',
    pin: 802206
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sarenja BO',
    pin: 802114
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Sarimpur BO',
    pin: 802116
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sarna BO',
    pin: 802165
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sedahan BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Semaria Patti Ojha BO',
    pin: 802165
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Semraon BO',
    pin: 802203
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sewatha BO',
    pin: 802201
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Shahbad DisttBoard Ara SO',
    pin: 802301
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Shahjauli BO',
    pin: 802165
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Shahpurpatti SO',
    pin: 802165
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sheoganj SO Bhojpur',
    pin: 802301
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Sheopur  North BO',
    pin: 802125
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sheopur BO',
    pin: 802204
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sheopur BO',
    pin: 802203
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Sheopur Diar BO',
    pin: 802131
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sheopurkunai BO',
    pin: 802158
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Siaruan BO',
    pin: 802158
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sikrahta Kala BO',
    pin: 802222
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Sikraul BO',
    pin: 802129
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sikraulfatehpur BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Simari SO',
    pin: 802135
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sinha SO',
    pin: 802316
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sinhaghat BO',
    pin: 802316
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Sisrarh BO',
    pin: 802122
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Siyadih BO',
    pin: 802223
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sohara Tribhuani BO',
    pin: 802316
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sohni Patti SO',
    pin: 802101
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Sonbarsa BO',
    pin: 802125
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sonbarsa BO',
    pin: 802205
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Sonbarsa BO',
    pin: 802118
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sonbarsa BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Sonbarsa BO',
    pin: 802112
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sondhila BO',
    pin: 802103
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Sonpa BO',
    pin: 802114
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sonpura BO',
    pin: 802206
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Sowan BO',
    pin: 802111
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sripalpur BO',
    pin: 802314
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Suhia BO',
    pin: 802165
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Sukarwalia BO',
    pin: 802114
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Sunderpur Barja BO',
    pin: 802351
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Tar BO',
    pin: 802155
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Tarari SO',
    pin: 802209
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Tenduni BO',
    pin: 802158
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Thakuri BO',
    pin: 802207
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Tikthi BO',
    pin: 802112
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Tiyar BO',
    pin: 802134
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Tola Achraj Lal BO',
    pin: 802351
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Tundiganjbazar BO',
    pin: 802133
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Udawant Nagar SO',
    pin: 802210
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Umarpur Diar BO',
    pin: 802118
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Umedpur BO',
    pin: 802112
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Umraonganj SO',
    pin: 802166
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Unwas BO',
    pin: 802123
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Upadhyapandeypur BO',
    pin: 802118
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Waina BO',
    pin: 802125
  },
  {
    state: 'Bihar',
    district: 'BUXAR',
    subDistrict: 'Waina Jamuni Pur BO',
    pin: 802155
  },
  {
    state: 'Bihar',
    district: 'BHOJPUR',
    subDistrict: 'Waliganj BO',
    pin: 802301
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Abgila BO',
    pin: 804423
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Agni BO',
    pin: 804403
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Aiara BO',
    pin: 804426
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Aima Chouki BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Aira BO',
    pin: 804421
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Akamba BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'AURANGABAD',
    subDistrict: 'Akbarpur BO',
    pin: 804401
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Alinagarpali BO',
    pin: 804418
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Alipur BO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Allahganj BO',
    pin: 804405
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Amain BO',
    pin: 804425
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Ambatari BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Amwan BO',
    pin: 824231
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Anandpur BO',
    pin: 804419
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Anjanwan BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Annua BO',
    pin: 804419
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'APColony SO Gaya',
    pin: 823001
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Arkdhibariya BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'AROPUR',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Arwal SO',
    pin: 804401
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Asc CentreN Gaya SO',
    pin: 823005
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Atiawan BO',
    pin: 804432
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Atri SO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Ayer BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Babhana BO',
    pin: 804417
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bagadaha BO',
    pin: 823004
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bahsa Pipra BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Baidrabad SO',
    pin: 804402
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Baiju Bigha BO',
    pin: 824237
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bairagi SO',
    pin: 823002
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bairka BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Bajitpur BO',
    pin: 804426
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Bambhai BO',
    pin: 804428
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bandeya BO',
    pin: 804422
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bandhuganj SO',
    pin: 804432
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bandimaniyara BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bankraur BO',
    pin: 824231
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Banshi Bigha BO',
    pin: 804405
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bara BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Bara BO',
    pin: 804421
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Bara Korium BO',
    pin: 804401
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bara Rahimbigha BO',
    pin: 804404
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Baragandhar BO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Baraila BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Baraini BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bargaon BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Barheta BO',
    pin: 804423
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Barnathu BO',
    pin: 804419
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Basarhi BO',
    pin: 824231
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bathani BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Bauri Beldari BO',
    pin: 804407
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Belaganj SO',
    pin: 804403
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Belhari BO',
    pin: 804403
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Belkhara BO',
    pin: 804428
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Berka BO',
    pin: 804422
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Bhadasi BO',
    pin: 804401
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bhadeji BO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bhadsara BO',
    pin: 804418
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Bhagawanpur BO',
    pin: 804407
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bhaikh BO',
    pin: 804405
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bhaismara Maksudpur BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bhalua BO',
    pin: 804404
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bhalua BO',
    pin: 824231
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bhare BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bharthu BO',
    pin: 804432
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bharthua BO',
    pin: 804417
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bhimdaspur BO',
    pin: 804403
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bhoremirganj BO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bhori BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bihta BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bijubigha BO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bindaul BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Birnoi BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Birra BO',
    pin: 804405
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bishunganj BO',
    pin: 804405
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bishunpura BO',
    pin: 824237
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bithosarif BO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Bithra BO',
    pin: 804421
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bodhgaya SO',
    pin: 824231
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bohiya BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Budhgere BO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Budhoul BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Buniyad Ganj SO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Burman BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Chakand RS BO',
    pin: 804404
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Chakand SO',
    pin: 804404
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Chand Chourah SO',
    pin: 823001
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Chandouti Bhagawanpur BO',
    pin: 804403
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Chandouti SO',
    pin: 823001
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Charaili BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Charh BO',
    pin: 804427
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Charokharigarh BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Cherki SO',
    pin: 824237
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Chhariyari BO',
    pin: 804422
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Chhatiyana BO',
    pin: 804403
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Chhatubagh BO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Chhotki Akouna BO',
    pin: 804432
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Chiraili BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'CHIRAILLA',
    pin: 804403
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Chiriyawan BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Choukiya BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Chowk SO',
    pin: 823001
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Churi BO',
    pin: 823002
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Civil Aerodram SO',
    pin: 823004
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Civil Lines SO Gaya',
    pin: 823001
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Daboor BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Dakra BO',
    pin: 804422
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'DARAMPUR',
    pin: 804403
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Daulatpur Arhit BO',
    pin: 804432
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dehuri BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Delha SO',
    pin: 823002
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dema BO',
    pin: 824231
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dema Fatehpur BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Deo Nagar Uchirwan BO',
    pin: 824237
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Deokali BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Deora BO',
    pin: 804432
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Derhma BO',
    pin: 804403
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dhana Dehri BO',
    pin: 804429
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dhangawan BO',
    pin: 804417
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dhansingara BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dharamashala BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dharampur BO',
    pin: 804417
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dharaut SO',
    pin: 804405
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Dhawal Bigha BO',
    pin: 804407
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dhibar BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dhibri BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'DHUSARI',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dighi BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dighwara BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Diha BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Dora BO',
    pin: 804419
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dumarichatti BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Durga Asthan SO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Dushadh Bigha BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Erki BO',
    pin: 804404
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Fatehpur Nepa BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Fatehpur Sanda BO',
    pin: 804402
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Fatehpur SO Gaya',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Gajanpur BO',
    pin: 824237
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Gangapur BO',
    pin: 804407
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Gaya DB SO',
    pin: 823001
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Gaya HO',
    pin: 823001
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Gaya Jail SO',
    pin: 823001
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Gaya RS SO',
    pin: 823002
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Gayani Bigha BO',
    pin: 804424
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'GEHLORE',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Gewal Bigha SO',
    pin: 823001
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Ghatera BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Ghejan BO',
    pin: 804424
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Ghosi SO Jehanabad',
    pin: 804406
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Ginji BO',
    pin: 804406
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Golakpur Dehuni BO',
    pin: 804420
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Guraru Mills SO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Gurpa RS BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Hasanpur BO',
    pin: 804402
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Hathiawan BO',
    pin: 804407
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Hathiyar BO',
    pin: 824231
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Hati BO',
    pin: 804420
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Hemara BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Hematpur BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Hulashganj SO',
    pin: 804407
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Ibrahimpur BO',
    pin: 804423
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Ikil BO',
    pin: 804425
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Ilra BO',
    pin: 824237
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Injore BO',
    pin: 804428
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Itwan BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Jagdari BO',
    pin: 804432
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Jagpura BO',
    pin: 804424
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Jaipur BO',
    pin: 804428
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Jaitipur Kurwa BO',
    pin: 804432
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Jalalpur BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Jalpura BO',
    pin: 804401
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Jamanganj BO',
    pin: 804405
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Jamri BO',
    pin: 823004
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Jamuara BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Jamuhari BO',
    pin: 804428
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Jamuk BO',
    pin: 804429
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Jamunapur Noudiha BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Jani Bigha BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Jarubanwariya BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Jehanabad HO',
    pin: 804408
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Jehanabad Kutchary SO',
    pin: 804408
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Jehanabad RS SO',
    pin: 804417
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Jethian BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Julfipur Modanganj BO',
    pin: 804432
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Junathi BO',
    pin: 804426
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Junathi BO',
    pin: 804429
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kachnama BO',
    pin: 804403
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Kachnawan BO',
    pin: 804422
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kadhariya BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Kako SO',
    pin: 804418
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kalanour BO',
    pin: 804427
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kalpa BO',
    pin: 804417
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kamalpur BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kamta BO',
    pin: 804428
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kanousi BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kanti BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kapasiya BO',
    pin: 824209
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Karhari BO',
    pin: 804423
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Karimganj SO',
    pin: 823001
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kariyadpur BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Karpi SO',
    pin: 804419
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kaswan BO',
    pin: 804429
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kazisarai SO',
    pin: 804420
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kendui BO',
    pin: 824231
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Ker BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kerki BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kespa BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kesru Dharampur BO',
    pin: 823002
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Ketra BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Keur BO',
    pin: 804407
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Keyal BO',
    pin: 804419
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Khabhaini BO',
    pin: 804402
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Khajuri BO',
    pin: 804419
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Khanetu BO',
    pin: 824209
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Khanjahapur BO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Khantangi BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'KHARASIN',
    pin: 804419
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kharkhura SO',
    pin: 823002
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Khizersarai SO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Khukri BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Kochhasa BO',
    pin: 804426
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kodra BO',
    pin: 804401
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Koel Bhupat BO',
    pin: 804428
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Koiri Bigha BO',
    pin: 804403
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Konchi BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Korap BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Korauna BO',
    pin: 804417
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Korma BO',
    pin: 804432
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Kormathu BO',
    pin: 804424
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kormathu BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Korra BO',
    pin: 804406
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kosdihra BO',
    pin: 804417
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Koshila BO',
    pin: 824231
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kujapi BO',
    pin: 823002
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kumbhawan BO',
    pin: 804417
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kurmawan BO',
    pin: 824209
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kurmawan BO',
    pin: 824237
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Kurre BO',
    pin: 804405
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kurtha Bazar BO',
    pin: 804427
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Kurtha SO',
    pin: 804421
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Lakhaipur BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Lari BO',
    pin: 804421
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Law BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Laxman Bigha BO',
    pin: 824209
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Laxmipur BO',
    pin: 804404
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Lodhway BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Lodipur BO',
    pin: 824209
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Lodipur BO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Madhopur BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Magadh University SO',
    pin: 824234
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Mahamana BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Mahimapur BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Main SO',
    pin: 804435
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Majhiyawan BO',
    pin: 804421
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Makarpur BO',
    pin: 804422
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Makhdumabad BO',
    pin: 804402
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Makhdumpur BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Makhdumpur Harhi BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Makhdumpur SO',
    pin: 804422
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Maksudpur BO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Malathi BO',
    pin: 804427
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Malheya BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Mali BO',
    pin: 804419
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Malpa BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Mandil BO',
    pin: 804417
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Manikpur BO',
    pin: 804421
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Manjhiyawan BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Manjhosh BO',
    pin: 804424
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Manjhouli BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Manpur BO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Maranchi BO',
    pin: 824209
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Masadpur BO',
    pin: 804428
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Mathurapur BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Mednipur Brahiya BO',
    pin: 804421
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Meera Bigha BO',
    pin: 804404
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Mocharim BO',
    pin: 824231
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Mohanpur BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Mohiudinpur BO',
    pin: 804420
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Moratal BO',
    pin: 824231
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Mouri BO',
    pin: 804426
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Mow SO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Murari BO',
    pin: 804419
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Musaila BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Musepur BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Musi BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Muther BO',
    pin: 804417
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Nadara BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Nagariyawan BO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Nagla Kinger SO',
    pin: 804423
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Nagma Erazi BO',
    pin: 804420
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Naili BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Narga BO',
    pin: 804419
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Narhi BO',
    pin: 804421
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Narma BO',
    pin: 804407
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'NAUDIHA',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Naudiha Jhurang BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Nauranga BO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Nauru BO',
    pin: 804417
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Nehalpur SO',
    pin: 804429
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Neori BO',
    pin: 804403
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Ner BO',
    pin: 804422
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'New Godown SO',
    pin: 823001
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Newari BO',
    pin: 804425
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Nighwan BO',
    pin: 804421
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Nimsar BO',
    pin: 804435
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Niranjanpur BO',
    pin: 804428
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Noawan BO',
    pin: 804429
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Nonhi BO',
    pin: 804418
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Paharabali BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Paibigha SO',
    pin: 804424
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Paigambarpur BO',
    pin: 804417
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Pakharpur BO',
    pin: 804401
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Panari BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Panchanpur BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'PANDABIGHA',
    pin: 804435
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Pandey Parasawan BO',
    pin: 823004
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Pandooi BO',
    pin: 804417
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Pandoul BO',
    pin: 804425
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Paraiya SO',
    pin: 824209
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Parariya BO',
    pin: 824231
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Parasi BO',
    pin: 804428
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Pariyari BO',
    pin: 804426
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Patharkatti BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Patiyawan BO',
    pin: 804424
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Phurhuriya BO',
    pin: 824237
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Pinjarawan BO',
    pin: 804423
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Pinjora BO',
    pin: 804417
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Pinjore BO',
    pin: 804417
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Piyar BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Pondil BO',
    pin: 804421
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Powa BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Prasadi English BO',
    pin: 804401
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Puarainia BO',
    pin: 804426
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Puna Kala BO',
    pin: 824209
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Punar BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Punaul BO',
    pin: 824237
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Pura BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Puran BO',
    pin: 804419
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Purani Godown SO',
    pin: 823001
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Railly BO',
    pin: 804403
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Rajan Ithari BO',
    pin: 824237
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Rajepur BO',
    pin: 804421
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Rampur BO',
    pin: 804403
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Rampur Chouram BO',
    pin: 804402
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Rampur Waina BO',
    pin: 804402
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Rampurchai BO',
    pin: 804428
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Ranipur Nishurpur BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Rasalpur BO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Ratni Bazar BO',
    pin: 804421
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Rauniya BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Rewai BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Rouna BO',
    pin: 804404
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sadopur BO',
    pin: 804435
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sagahi BO',
    pin: 824237
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Sagarpur BO',
    pin: 804422
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Sahar Telpa BO',
    pin: 804419
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sahdeokhap BO',
    pin: 824234
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Saho Bigha BO',
    pin: 804406
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Saidabad BO',
    pin: 804417
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Saistabad BO',
    pin: 804418
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Sakarichowki BO',
    pin: 804401
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sakri Khurd BO',
    pin: 804428
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sakurabad SO',
    pin: 804425
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'SALAIYAKALA',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Salarpur BO',
    pin: 804429
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'SALEMPUR',
    pin: 804426
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Salempur BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Salepur Fatehpur BO',
    pin: 804404
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Samaspur BO',
    pin: 804403
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sanda BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sapneri BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sarbahda BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Saren BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Saren BO',
    pin: 804427
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sarta BO',
    pin: 804429
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sarthua BO',
    pin: 804427
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sarvahada BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Sarwan BO',
    pin: 804402
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sarwarpur BO',
    pin: 804428
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Satamas BO',
    pin: 804407
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Seikhpura BO',
    pin: 804428
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Shadipur BO',
    pin: 804421
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sikandarpur BO',
    pin: 804425
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Silounja BO',
    pin: 804403
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Simuara BO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sirdundichak BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sisamba BO',
    pin: 804425
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'SMoulanagar BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sohaipur BO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sohariya BO',
    pin: 804423
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Solhanda BO',
    pin: 804422
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Solra BO',
    pin: 824209
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sonawa BO',
    pin: 804405
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Sonbhadra BO',
    pin: 804419
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sondhi BO',
    pin: 823003
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'SP Imamganj SO',
    pin: 804426
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sripur BO',
    pin: 824233
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sugaon BO',
    pin: 804427
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Supi BO',
    pin: 804427
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Surangapur BO',
    pin: 804429
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'T Jalalpur BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Tajpur BO',
    pin: 804407
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Takiya Karpi BO',
    pin: 804407
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Tankupa BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Tehta SO',
    pin: 804427
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Tej Bigha BO',
    pin: 804420
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Tekari SO',
    pin: 824236
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Telari BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Terra BO',
    pin: 804419
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Terri BO',
    pin: 804428
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Tetar BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Teusa Bandhubigha BO',
    pin: 823311
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Tilkai BO',
    pin: 804405
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Tineri BO',
    pin: 824118
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Turi BO',
    pin: 804435
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Tuturakhi BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Uber BO',
    pin: 804405
  },
  {
    state: 'Bihar',
    district: 'JEHANABAD',
    subDistrict: 'Umta BO',
    pin: 804403
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Ur Bishunpur BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Usari SO',
    pin: 804428
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Usas Deora BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Utarsarthu BO',
    pin: 804418
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Utli Bara BO',
    pin: 824232
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Utrawan BO',
    pin: 824235
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Waina BO',
    pin: 804418
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Waina Lakhaipur BO',
    pin: 804423
  },
  {
    state: 'Bihar',
    district: 'ARWAL',
    subDistrict: 'Walidad BO',
    pin: 804402
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Zindapur BO',
    pin: 824234
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Achua BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Ahiyapur BO',
    pin: 801108
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'AIIMS SO',
    pin: 801507
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Aikhan BO',
    pin: 801102
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Ajwan BO',
    pin: 801109
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Akauna BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Akhtiyarpur BO',
    pin: 801104
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Akilpur BO',
    pin: 800012
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Alampur Gonpura BO',
    pin: 801505
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Alawalpur SO',
    pin: 803203
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Alipur Bihta BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Amarpura BO',
    pin: 801109
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Amhara BO',
    pin: 801103
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Anandpur BO',
    pin: 801103
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'ANANDPUR HOMEGUARD BO',
    pin: 801103
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'ANDA BO',
    pin: 801113
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'ANISABAD S.O',
    pin: 800002
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'ANKURI BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'APiplawan BO',
    pin: 801109
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'ARAP BO',
    pin: 801104
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Ashiananagar SO',
    pin: 800025
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Ashok Nagar SO Patna',
    pin: 800020
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'B R Centre S.O',
    pin: 801503
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BAHPURA BO',
    pin: 801103
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BAHRAMPUR BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BAIKATPUR BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Bairia BO',
    pin: 800007
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BALUA BO',
    pin: 801113
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BANAULI KHURD BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Bank Road SO Patna',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Bankipore HO',
    pin: 800004
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BANSBIGHA BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BARA BO',
    pin: 804454
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BARAH BO',
    pin: 801112
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BARAH BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BARAWAN BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BARHIBIGHA BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BARNI BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BARUNA BO',
    pin: 803201
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BASUHAR BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Bataganj SO',
    pin: 800018
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BAURAHI BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BC Road SO',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BEAPUR BO',
    pin: 801503
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BEDAULI BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Begampur SO Patna',
    pin: 800009
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BELA TARARI BO',
    pin: 801109
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'BELHAURI S.O',
    pin: 801102
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BENI BIGHA BO',
    pin: 801104
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BERRA BO',
    pin: 804454
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BERTHU BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BEUR BO',
    pin: 800002
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BHADAURA BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BHAGWANGANJ BO',
    pin: 804454
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BHAKHARI BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BHARATPURA BO',
    pin: 801102
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BHASMA BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BHColony SO',
    pin: 800026
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BHERAGAWAN BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BHOJPUR BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'BIHTA S.O',
    pin: 801103
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'BIKRAM S.O',
    pin: 801104
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BINDAUL BO',
    pin: 801112
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BIR BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BISHUNPURA BO',
    pin: 801111
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BMACHHERIAMA BO',
    pin: 803201
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BPSC SO',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BSEBOARD SO',
    pin: 800017
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BSIKARIA BO',
    pin: 804454
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'BV College SO',
    pin: 800014
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'CDA SO',
    pin: 800019
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'CDARIYAPUR BO',
    pin: 801109
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'CHANDHOSH BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'CHANDMARI BO',
    pin: 801503
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'CHARMA BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Chaughara BO',
    pin: 800008
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'CHESI BO',
    pin: 801109
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'CHHATA BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'CHIKSHI BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'CHIPURA KURD BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Chiraiyatand SO',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'CHIRAURA BO',
    pin: 801109
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'CHISTIPUR BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Chitragupta Nagar SO',
    pin: 800020
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Chowk Shikarpur SO',
    pin: 800008
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'D KALAPUR BO',
    pin: 801111
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'D.CANTT. S.O',
    pin: 801503
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DAHIA BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DALIPCHAK BO',
    pin: 801503
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Danapur Bazar SO',
    pin: 801503
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DANARA BO',
    pin: 801104
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'Dariyapur B.O',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Darul Mallick SO',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DATIYANA BO',
    pin: 801104
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DAUDPUR BO',
    pin: 801503
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DAULATPUR BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DEHRI BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Dental College SO',
    pin: 800007
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DEODHA BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DEWAN BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DGTOLA BO',
    pin: 803203
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DHANARUA BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DHANAUT BO',
    pin: 801506
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DHELMA BO',
    pin: 800020
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DHIBRA BO',
    pin: 801505
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'DIGHA S.O',
    pin: 800012
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Dighaghat SO',
    pin: 800011
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Diwan Mohalla SO',
    pin: 800008
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DOGHRA BO',
    pin: 801112
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DOMA BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DSIMARI BO',
    pin: 801103
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'DUMRI BO',
    pin: 803201
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'ENISARPURA BO',
    pin: 801112
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'FARIDPUR BO',
    pin: 801113
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'Fatehpur B.O',
    pin: 800007
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'FATWA S.O',
    pin: 803201
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'GANGACHAK BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'GANGAHARA BO',
    pin: 801503
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Gardanibagh SO',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'GARHOCHAK BO',
    pin: 803201
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'GARIHARA BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'GAURI PUNDO BO',
    pin: 803201
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'GHORAHUA BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'GORAKHARI BO',
    pin: 801104
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Gulzarbagh SO',
    pin: 800007
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'GYASPUR MAHAJI BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'HANSADIH BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'HAZRAT SAIN SO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Hotel Republic SO',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'HULASHI TOLA BO',
    pin: 801108
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'IIT Patna Bihta SO',
    pin: 801106
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Indian Nation SO',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'JAITIA BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Jamal Road SO',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'JAMSAUT BO',
    pin: 801503
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'JAMUI BO',
    pin: 801102
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'JANPUR BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'JARKHA BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'JAT DUMARI BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'JCRoad SO',
    pin: 800004
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'JRTOLA BO',
    pin: 801503
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KAB BO',
    pin: 801104
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KACHIDARGALI BO',
    pin: 803201
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Kadamkuan SO',
    pin: 800003
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KALADIARA BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KALYANPUR BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KANCHANPUR BO',
    pin: 803201
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KANCHANPUR BO',
    pin: 801103
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KANDAP BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KANSARI BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KARAI BO',
    pin: 801109
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KARANJA BO',
    pin: 801109
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KARAUTA BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KATAUNA BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KATESHAR BO',
    pin: 801103
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Katra Bazar SO Patna',
    pin: 800008
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KAYAMPUR BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KCHAUHATTAR BO',
    pin: 801108
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KEORA BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'Keshari Nagar S.O',
    pin: 800024
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KGOPALPUR BO',
    pin: 801111
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Khagaul Bazar SO',
    pin: 801105
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'KHAGAUL S.O',
    pin: 801105
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KHAINIA BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KHAJURI BO',
    pin: 801109
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KHANPURA BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KHARAUNA BO',
    pin: 804454
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KHUSRUPUR SO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Kidwaipuri SO',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KNATAUL BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KOHAWAN BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KORAWAN BO',
    pin: 801109
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KOSUT BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Kothia BO',
    pin: 800009
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KSector SO',
    pin: 800020
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Kumhrar SO',
    pin: 800026
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KUNJWAN BO',
    pin: 801103
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KURKURI BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'KURTHAUL BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'L KACHUARA BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'LAHSUNA BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'LAI S.O',
    pin: 801112
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'LAKHANA BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'LAKHANPAR BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'LAKHANPURA BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'LALA BHADSARA BO',
    pin: 801102
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'LALBENGWA BO',
    pin: 801503
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'LBS Nagar SO',
    pin: 800023
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'LOHIA NAGAR S.O',
    pin: 800020
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'M KACHUARA BO',
    pin: 800030
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Machharhatta SO',
    pin: 800008
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Machhuatoli SO',
    pin: 800004
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MADHOPUR BO',
    pin: 801108
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MADHOPUR BO',
    pin: 801503
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MAHABALIPUR BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MAHAJPURA BO',
    pin: 801104
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Mahavir Asthan SO',
    pin: 800008
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Mahendru SO',
    pin: 800006
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MAHIUDDINPUR BO',
    pin: 803201
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MAHKAR BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Makhdumpur Digha SO',
    pin: 800011
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MALLICKPUR BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'MANER S.O',
    pin: 801108
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MANGARPAL BO',
    pin: 801108
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Mangla Devi BO',
    pin: 800007
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MANJHAULI BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MANKIPAR BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'Maranchi B.O',
    pin: 800009
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MARANCHI BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Marufganj SO',
    pin: 800008
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MASARHI BO',
    pin: 803201
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MASAURHA BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'MASAURHI S.O',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MDIHULI BO',
    pin: 801102
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MEHDAWAN BO',
    pin: 801108
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MGOPALPUR BO',
    pin: 801104
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Mithapur SO Patna',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MITTANCHAK BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MKURJI BO',
    pin: 801105
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MOBARAKPUR BO',
    pin: 801505
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MOHANPUR BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MOKAR BO',
    pin: 804454
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MUKHMILPUR BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MURIKA BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MUSEPUR BO',
    pin: 801103
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'MYSandalpur SO',
    pin: 800006
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'NADAUL S.O',
    pin: 804454
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Nadghat BO',
    pin: 800007
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'NADPURA BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'NADWAN BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'NAGWAN BO',
    pin: 801109
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'NANAURI BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'NANDLALABAD BO',
    pin: 803203
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Nanmuhia SO',
    pin: 800007
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'NASARATPUR BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'NAUBATPUR SO',
    pin: 801109
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Navshakti SO',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'NAWASI CHAK BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'NAYA PANAPUR BO',
    pin: 800012
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Naya Tola SO Patna',
    pin: 800004
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'NEORA S.O',
    pin: 801113
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'NETAR BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'New Jaganpura SO',
    pin: 800027
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'New Jakkanpur SO',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'NISARPURA BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'P.SHARIF S.O',
    pin: 801505
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PABHERA BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Pabheri more BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Pachhim Darwaza SO',
    pin: 800008
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PAHARI BO',
    pin: 800030
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PAIMARGHAT BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PAINAL BO',
    pin: 801111
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PAIPURA KALA BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PAKRI BO',
    pin: 800002
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'PALIGANJ S.O',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PANAPUR BO',
    pin: 800012
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PANDITGANJ BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PARSA BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PARSA BO',
    pin: 803201
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PARTHU BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PATARIA BO',
    pin: 804454
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PATHAR HAT BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PATILA BO',
    pin: 801108
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Patliputra SO',
    pin: 800013
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Patna Aerodrome SO',
    pin: 800014
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Patna City SO',
    pin: 800008
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Patna Collectoriate SO',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Patna High Court SO',
    pin: 800028
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Patna Sectt SO',
    pin: 800015
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Patna University SO',
    pin: 800005
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PATUT BO',
    pin: 801112
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PITWANS BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PMCH SO',
    pin: 800004
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'POAWAN BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Postal Park SO',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'PPAINATHI BO',
    pin: 801103
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Punadih BO',
    pin: 800009
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Punaichak SO',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'PUNPUN S.O',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Purvi laxmi nagar SO',
    pin: 800030
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'RAJ BHAWAN SO',
    pin: 800022
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Rajendra Nagar SO Patna',
    pin: 800016
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'RAJIPUR BO',
    pin: 801104
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Ram Jaipal Nagar SO',
    pin: 801503
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'RAMCHAURA BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'RAMNAGAR BO',
    pin: 801108
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'RAMPUR DIARA BO',
    pin: 801108
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'RANIPUR BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Rastranagar Rarha BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'RBJAITIPUR BO',
    pin: 801109
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'RBlock SO',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'REWAN BO',
    pin: 804454
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'RMS Colony SO',
    pin: 800020
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'RUKUNPUR BO',
    pin: 803203
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Sabalpur BO',
    pin: 800009
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Sadaquat Ashram SO',
    pin: 800010
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SADAWAH BO',
    pin: 801102
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SADIKPUR BO',
    pin: 801503
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'SADISOPUR S.O',
    pin: 801111
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'SAHAYNAGAR S.O',
    pin: 801506
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SAHORA BO',
    pin: 801102
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SAIDAPBAD BO',
    pin: 801104
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SAKRAICHA BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SALIMPUR BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SANDA BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SARAI BO',
    pin: 801113
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SARASAT BO',
    pin: 801109
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SARHARI BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SARSI BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SEHRA BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SEONAN BO',
    pin: 804454
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SGOPALPUR BO',
    pin: 801109
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Sheikhpura SO Patna',
    pin: 800014
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SHERPUR BO',
    pin: 801503
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SHIKARPUR BO',
    pin: 801105
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SIDHIPUR BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SIGORI BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SIHI BO',
    pin: 801102
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SIKARIA BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SIMHARI BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SINGHARA BO',
    pin: 801102
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SIYARAMPUR BO',
    pin: 801110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Sonagopalpur BO',
    pin: 800007
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SONMAI BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SORAMPUR BO',
    pin: 801505
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SORANGPUR BO',
    pin: 801102
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SRAMPUR BO',
    pin: 801109
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Sri Krishnapuri SO',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Sri Madhoji Mills SO',
    pin: 800008
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SRICHANDPUR BO',
    pin: 801111
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SRIPALPUR BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SUITHA BO',
    pin: 804453
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'SULTANPUR BO',
    pin: 803201
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'TARANAGAR BO',
    pin: 801103
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'TELMAR BO',
    pin: 803202
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'TISKHORA BO',
    pin: 801111
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'USFA BO',
    pin: 803203
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'USMANCHAK BO',
    pin: 804452
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Vidyut Parisad SO',
    pin: 800021
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'VIJAYPURA BO',
    pin: 804451
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'WAZIRPUR BO',
    pin: 801104
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'WAZITPUR BO',
    pin: 801111
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'West Lohianagar SO',
    pin: 800020
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Patna GPO',
    pin: 800001
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'A Kala BO',
    pin: 802226
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'A Saraiya BO',
    pin: 821312
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Adhaura BO',
    pin: 821102
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Akhini BO',
    pin: 802132
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Akhlaspur BO',
    pin: 821101
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Akhtiarpur BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Akorha BO',
    pin: 802213
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Akorhi Bazar SO',
    pin: 821301
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Akorhi BO',
    pin: 821301
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Akorhi BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Alampur BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Amaon Baraon BO',
    pin: 821104
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Amaon BO',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Amaura BO',
    pin: 821309
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Amiyawar BO',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Amjhore Camp SO',
    pin: 821302
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Amoura BO',
    pin: 802214
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Andore BO',
    pin: 802213
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Ararua BO',
    pin: 821107
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Arthu BO',
    pin: 802218
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Atimi BO',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Awarainya BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Awarhi BO',
    pin: 802211
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'B Kaithi BO',
    pin: 821309
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'B Khas BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Babhnaul SO',
    pin: 802211
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Babhni BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bad BO',
    pin: 802214
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Badauha BO',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Badupur BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bagarhi BO',
    pin: 802132
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bahuara BO',
    pin: 802216
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Baknaura BO',
    pin: 821311
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Balthari BO',
    pin: 821107
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Banjari SO',
    pin: 821303
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bank BO',
    pin: 821301
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Baradih BO',
    pin: 802214
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Baraila BO',
    pin: 821111
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Baraon BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Baraon Kala BO',
    pin: 821306
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bararhi BO',
    pin: 821103
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bararhi BO',
    pin: 821305
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Baraura BO',
    pin: 821110
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Bare BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Barhari BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Barhutikala BO',
    pin: 821107
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Barkadih BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Barki Akorhi BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Barki Kharari BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Barki Mahuli BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Basadihan BO',
    pin: 802213
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Basahi BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Basudeo Dehri BO',
    pin: 802218
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Baulia SO',
    pin: 821304
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Belondi BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Belvaiyan BO',
    pin: 802213
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Belwain BO',
    pin: 802214
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Belwan BO',
    pin: 802217
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bensagar BO',
    pin: 802220
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Betari BO',
    pin: 821101
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Bhabua SO',
    pin: 821101
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bhadokhra BO',
    pin: 821312
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bhadoula BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bhagwanpur SO Kaimur Bhabua',
    pin: 821102
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bhaluahi BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bhalunidham BO',
    pin: 802218
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bhanpur BO',
    pin: 802213
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bhelari BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bheria BO',
    pin: 821105
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bhitari Bandh BO',
    pin: 821104
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bhitti BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bhorari BO',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bikramganj SO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bishambhrpur BO',
    pin: 802218
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bisheni Kala BO',
    pin: 802219
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bishunpur BO',
    pin: 802219
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Bisodihri BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Biur BO',
    pin: 821103
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Burhan Road BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Burhwal BO',
    pin: 802214
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Chainpur SO Kaimur Bhabua',
    pin: 821103
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Chakedihra BO',
    pin: 821102
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Chand BO',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Chandanpura BO',
    pin: 821312
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Chandarkaihti BO',
    pin: 821104
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Chandesh BO',
    pin: 802132
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Chandi BO',
    pin: 821301
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Chanp BO',
    pin: 821301
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Chatara BO',
    pin: 802211
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Chenari SO',
    pin: 821104
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Chhata BO',
    pin: 821105
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Chhatauna BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Chhewari BO',
    pin: 821110
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Chhotka Amaon BO',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Chhotki Chenari BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Chhotki Kulhariya BO',
    pin: 821110
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Chilheuon BO',
    pin: 802213
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Chitokhar BO',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Chunhatta BO',
    pin: 821304
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Dadar BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Daidhan BO',
    pin: 821112
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dalmianagar SO',
    pin: 821305
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dangri BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Danwar BO',
    pin: 821309
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Daranagar BO',
    pin: 821304
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Daraon BO',
    pin: 821112
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Darauli BO',
    pin: 821101
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Darhwa BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Darigaon BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Darihat SO',
    pin: 821306
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Darwan BO',
    pin: 821110
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dawath SO',
    pin: 802226
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dehi BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dehri BMP SO',
    pin: 821307
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dehri R S SO',
    pin: 821307
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dehrionsone SO',
    pin: 821307
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Deo BO',
    pin: 802214
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Deokhaira BO',
    pin: 821107
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Derwan BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Dewhalia BO',
    pin: 821110
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dhanaw English BO',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dhanej BO',
    pin: 821107
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dhangain BO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dhanhara BO',
    pin: 821309
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dharkandha BO',
    pin: 802218
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dharupur BO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dhawani BO',
    pin: 802214
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dhawpokhar BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dhowdarh BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dibhia BO',
    pin: 821107
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dighita BO',
    pin: 821112
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dinara SO Rohtas',
    pin: 802213
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Doiya BO',
    pin: 821112
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dumaraith BO',
    pin: 821105
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dumari BO',
    pin: 821104
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Dumari Sahpur BO',
    pin: 821111
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Dumarkon BO',
    pin: 821102
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Dumduma BO',
    pin: 802132
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Durgadi BO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Durgawati SO',
    pin: 821105
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Eghara BO',
    pin: 802217
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Fakhrabad BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Gachhai BO',
    pin: 802214
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Gamhariya BO',
    pin: 821301
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Gandhi Path SO',
    pin: 821115
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Gangouli BO',
    pin: 821305
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Ganj Bharsara BO',
    pin: 802218
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Gara BO',
    pin: 821112
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Garh Nokha SO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Gehwa BO',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Ghordiha BO',
    pin: 821107
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Ghosia BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Ghosia Kala BO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Goi BO',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Gorakh Parasi BO',
    pin: 802214
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Gorari SO',
    pin: 802214
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Gori BO',
    pin: 821107
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Goshaldih BO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Gotapa BO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Gotpa BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Gunsej BO',
    pin: 802211
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Harihar Ganj SO Rohtas',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Harnathpur BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Hathini BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Hatta SO Kaimur Bhabua',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Hurka BO',
    pin: 821312
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Imirtha BO',
    pin: 802221
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Indrapuri SO',
    pin: 821308
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Itriya BO',
    pin: 802220
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Jabra BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Jaipur BO',
    pin: 821301
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Jaitpur Kalan BO',
    pin: 821102
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Jaldaha BO',
    pin: 821110
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Jamalpur  Paturi BO',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Jamorhi BO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Jamroh BO',
    pin: 802213
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Jamuhar BO',
    pin: 821305
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Jamurna BO',
    pin: 821110
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Jeena BO',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Jhalkhoria BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Jigana BO',
    pin: 802213
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Jonhi BO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'K Kalyanpur BO',
    pin: 821105
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'K Mahdeo BO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kabilashpur BO',
    pin: 821105
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kachhwa SO Rohtas',
    pin: 821309
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Kaithi BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kajhain BO',
    pin: 802220
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Kajura BO',
    pin: 821110
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kanchanpur BO',
    pin: 821305
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kaniyari BO',
    pin: 802213
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Karahansi BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Karakat BO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Karamnasa BO',
    pin: 821105
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Karari BO',
    pin: 821105
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kargahar SO',
    pin: 821107
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Karji BO',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Karma BO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Karma Pathkhaulia BO',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Karmaini BO',
    pin: 802220
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Karmhari BO',
    pin: 802132
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Karup Indrahiyan BO',
    pin: 802217
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Karup Itwa BO',
    pin: 802214
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Karwandia BO',
    pin: 821305
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Kaser BO',
    pin: 821102
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kasthari BO',
    pin: 821105
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Kathej BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kathrain BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Katra Kala BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kewarhi BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Khaira BO',
    pin: 821101
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Khairhan BO',
    pin: 821305
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Khajura BO',
    pin: 821102
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Khanaithi BO',
    pin: 821107
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kharari BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Kharenda BO',
    pin: 821102
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Khirion BO',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Khnethi BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Khudru BO',
    pin: 821112
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Khuria BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Khurmabad BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kilani BO',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kirhindi BO',
    pin: 821111
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Koath SO',
    pin: 802216
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kochas SO',
    pin: 821112
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kolhua BO',
    pin: 821102
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Konar BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kopsar BO',
    pin: 821107
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kuchila BO',
    pin: 821112
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kuddi BO',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kudra Bazar SO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kudra SO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kund BO',
    pin: 802213
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Kurasan BO',
    pin: 821101
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kuriari BO',
    pin: 821105
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kushdihra BO',
    pin: 821311
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Kusumhara BO',
    pin: 802218
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Laheri BO',
    pin: 821112
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Lilwachh BO',
    pin: 802218
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Lohdan BO',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Mahdewa BO',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Mahila BO',
    pin: 802132
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Mahrajganj BO',
    pin: 821312
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Mahroh BO',
    pin: 802213
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Mahuari BO',
    pin: 821101
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Mahuari BO',
    pin: 821107
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Mahuwat BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Maidhara BO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Majhigawan BO',
    pin: 821304
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Malwar BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Mamrejpur BO',
    pin: 821104
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Mangraon BO',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Mani BO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Manihari BO',
    pin: 821105
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Manikpur Bastipur BO',
    pin: 821305
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Manipur BO',
    pin: 802217
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Marojhian BO',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Masauna BO',
    pin: 802220
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Masaurha BO',
    pin: 821105
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Meari Bazar SO',
    pin: 802217
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Medinipur BO',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Mednipur BO',
    pin: 802211
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Mion BO',
    pin: 821101
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Mohan Darwan BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Mohania SO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Mohanpur BO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Mokar BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Mokari BO',
    pin: 821101
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Motha BO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Mudhi BO',
    pin: 821103
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Mujan BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Mujrarh BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Munji BO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Muodihan BO',
    pin: 802217
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Muradabad BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Muriyar BO',
    pin: 821301
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Muthani BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Nad BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Nadaon BO',
    pin: 802218
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Nahauna BO',
    pin: 821305
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Nasej BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Nasriganj SO',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Nateya BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Natwar Khurd BO',
    pin: 802218
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Natwar SO',
    pin: 802218
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Nauhatta BO',
    pin: 821104
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Nauhatta BO',
    pin: 821304
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Nawadih BO',
    pin: 821308
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Nawadih Karma BO',
    pin: 821302
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'New Area Sasaram SO',
    pin: 821115
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Nishan Nagar Baddi BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Noan SO',
    pin: 802132
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Nonhar BO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Nonsari BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Odar BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Orrah BO',
    pin: 821101
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Osaon BO',
    pin: 821309
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Pachilikhi BO',
    pin: 821105
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Pachpokhari BO',
    pin: 802217
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Padri BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Pahariya BO',
    pin: 821101
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Pahleza BO',
    pin: 821305
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Panapur BO',
    pin: 821107
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Panapur BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Panjer BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Panjraon BO',
    pin: 802132
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Pararia BO',
    pin: 802217
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Parariya BO',
    pin: 821304
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Parbatpur BO',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Parchha BO',
    pin: 821304
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Parsar BO',
    pin: 821309
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Paruhar BO',
    pin: 821306
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Pawani BO',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Penar BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Pipra BO',
    pin: 821107
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Pipra Sakarwar BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Pipriya BO',
    pin: 821105
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Piyan BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Puhpi BO',
    pin: 802218
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Raipur Chore BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Rajandih BO',
    pin: 802219
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Rajpur BO',
    pin: 802218
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Rajpur SO Rohtas',
    pin: 802219
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Ramdihra BO',
    pin: 821312
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Ramgarh SO Kaimur Bhabua',
    pin: 821110
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Ratwar BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Rehal BO',
    pin: 821304
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Rohtas SO',
    pin: 821311
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Rudrawar Kala BO',
    pin: 821101
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Ruphatha BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Ruppur BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sabar BO',
    pin: 821104
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sadokhar BO',
    pin: 821104
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Sahu Ka Mahua BO',
    pin: 821110
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Saitha BO',
    pin: 821101
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Salathua BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Samahuta BO',
    pin: 821309
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Samardihan BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sanjhauli SO',
    pin: 802220
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sarai BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Saraon BO',
    pin: 802218
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sasaram Bazar SO',
    pin: 821115
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sasaram HO',
    pin: 821115
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sasaram Local Board SO',
    pin: 821115
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Satowanti BO',
    pin: 802132
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Saukhara BO',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Semra BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Semri BO',
    pin: 802211
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sewahi BO',
    pin: 821312
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Shahbajpur BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Shankarpuri BO',
    pin: 821308
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sheosagar SO',
    pin: 821111
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Shiorampur BO',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Sikandarpur BO',
    pin: 821103
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sikaria BO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sikarian Ultenganj BO',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sikrour BO',
    pin: 821104
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sikthi BO',
    pin: 802213
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Silari BO',
    pin: 821111
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sioruan BO',
    pin: 802220
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sirhira BO',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sirkhinda BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sirsi BO',
    pin: 821106
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sisirit BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sisirita BO',
    pin: 802217
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Siyawak BO',
    pin: 802219
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sohagi BO',
    pin: 821306
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sokhara BO',
    pin: 802219
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Sondhi BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Sonhan BO',
    pin: 821101
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Suara BO',
    pin: 802219
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Sujatpur BO',
    pin: 802213
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Sukul Pipra BO',
    pin: 821109
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Surajpura SO',
    pin: 802221
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Surware Ke Bararhi BO',
    pin: 802218
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Takia Bazar SO',
    pin: 821113
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Taraitha BO',
    pin: 802132
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Taraon BO',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Tararh BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Telari BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Tendua BO',
    pin: 802215
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Tenduni Chauk SO',
    pin: 802212
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Tetrarh BO',
    pin: 821301
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Thakura BO',
    pin: 802132
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Thakurai Parasia BO',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Thanua BO',
    pin: 821111
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Tilain BO',
    pin: 802220
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Tilokhar BO',
    pin: 821304
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Tilouthu SO',
    pin: 821312
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Torni BO',
    pin: 821111
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Torni Lahera BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Turk Bigha BO',
    pin: 821310
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Turki BO',
    pin: 821108
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Udaipur BO',
    pin: 802220
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Ugahni BO',
    pin: 821104
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Ujari Sikathi BO',
    pin: 821101
  },
  {
    state: 'Bihar',
    district: 'KAIMUR BHABUA',
    subDistrict: 'Umapur Saraiya BO',
    pin: 821102
  },
  {
    state: 'Bihar',
    district: 'ROHTAS',
    subDistrict: 'Upari BO',
    pin: 802132
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Ababakarpur  Kowahi BO',
    pin: 843114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Abbul Hasanpur BO',
    pin: 844123
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Adalpur BO',
    pin: 844126
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Ajijpur Chande BO',
    pin: 843110
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Akhtiyarpur Paterha BO',
    pin: 844125
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Alipur Hatta BO',
    pin: 844506
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Amritpur BO',
    pin: 844113
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Aniruddha Belsar SO',
    pin: 844111
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Anjani BO',
    pin: 844125
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Anzanpeer Chok SO',
    pin: 844103
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Arnia BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Asoi BO',
    pin: 844114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Azampur BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bahilwara Bhual BO',
    pin: 844111
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bahilwara Govind BO',
    pin: 844111
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bahilwara Roopnath BO',
    pin: 844111
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bahuara BO',
    pin: 844502
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Baikunthpur BO',
    pin: 844124
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bajitpur Kasturi BO',
    pin: 844509
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bajitpur Malahi BO',
    pin: 844502
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bajitpur Saidat BO',
    pin: 844503
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bakhari Supayan BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bakhri Dua BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Baksama BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Balatand BO',
    pin: 844502
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Baligaon Chandpura BO',
    pin: 843114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Balukaram SO',
    pin: 844113
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Balwakuari BO',
    pin: 844103
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bardiha Turki BO',
    pin: 843110
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Basantpur BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Basara BO',
    pin: 844124
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Basudeopur Chandel SO',
    pin: 844501
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bathna Mahodat BO',
    pin: 844118
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Belkunda BO',
    pin: 844125
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Belwar BO',
    pin: 844111
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bhagwanpur SO Vaishali',
    pin: 844114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bhagwatpur Taraura BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bhairopur Deodhi BO',
    pin: 844102
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bhanborhan BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bhataulia BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bhathahi BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bhojpatti BO',
    pin: 844125
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bhuwalpur Bahadurpur BO',
    pin: 844118
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bibipur BO',
    pin: 844111
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bidupur Bazar SO',
    pin: 844503
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bidupur Rs SO',
    pin: 844502
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bilandpur BO',
    pin: 844116
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Birna Lakhan Sen BO',
    pin: 844125
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Birpur  BO',
    pin: 844508
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bishanpur  Bande BO',
    pin: 844114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bishanpur Bedaulia BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bishanpur Bejha BO',
    pin: 844116
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bishanpur BO',
    pin: 844508
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bishanpur Said Urf Bakarpur BO',
    pin: 844115
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bishanpur Titara BO',
    pin: 844502
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bishunpur Rajkhand BO',
    pin: 844503
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bitandipur  BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Bithauli BO',
    pin: 844114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Boaria BO',
    pin: 844114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chakaiya BO',
    pin: 844126
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chakamgola BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chakgarho Daudnagar BO',
    pin: 844503
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chakjamal BO',
    pin: 844509
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chaklahlad BO',
    pin: 844113
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chakmajahid BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chakmaruf BO',
    pin: 844118
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chakramdas BO',
    pin: 844128
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chaksaid BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chaksikandar SO',
    pin: 844115
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chaksingar BO',
    pin: 844508
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chamarhara Mamsai BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chandpura BO',
    pin: 844502
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chandpura Idrak BO',
    pin: 844508
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chandpura Nankar BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chandralay BO',
    pin: 844103
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chandsarai Sahdullahchak BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chansarai BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chechar BO',
    pin: 844503
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chehrakala BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chhourahi BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Chitrauli BO',
    pin: 844126
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Dabhaichh BO',
    pin: 843110
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Daudnagar BO',
    pin: 844113
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Dayalpur Garh BO',
    pin: 844502
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Desari SO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Dhamaun BO',
    pin: 844506
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Dhandhua BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Dhankaul BO',
    pin: 843114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Dharampur BO',
    pin: 844111
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Dharhara SO Vaishali',
    pin: 844117
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Dighi Kala BO',
    pin: 844102
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Dih Bichauli BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Dilawarpur Govardhan BO',
    pin: 844503
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Dumari SO Vaishali',
    pin: 844116
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Fatehpur Fulwaria BO',
    pin: 844116
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Gadaisarai BO',
    pin: 844103
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Gara Urf Govindpur Devi BO',
    pin: 844126
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Garahua BO',
    pin: 844118
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Garjaul BO',
    pin: 844114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Gauspur Bariarpur BO',
    pin: 844115
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Ghataro SO',
    pin: 844119
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Goraul SO',
    pin: 844118
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Gorigama BO',
    pin: 844507
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Govindpur Gokhula BO',
    pin: 844503
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Gurmia BO',
    pin: 844117
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Hajipur Chowk SO',
    pin: 844101
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Hajipur HO',
    pin: 844101
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Hajipur IndArea SO',
    pin: 844102
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Hansikewal BO',
    pin: 844114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Harauli BO',
    pin: 844103
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Hargovindpur BO',
    pin: 844501
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Harpur Belwa BO',
    pin: 844126
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Harpur Fatikwara BO',
    pin: 844501
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Hasanpur BO',
    pin: 844506
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Hasanpur Gurda BO',
    pin: 844506
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Hasapur Bhadwas BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Hauzpura BO',
    pin: 844111
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Hetanpur BO',
    pin: 844506
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Hilalpur Madarpur BO',
    pin: 844502
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Husaina Khurd BO',
    pin: 844114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Inayatpur BO',
    pin: 844506
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Ishmilepur BO',
    pin: 844103
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Izra  BO',
    pin: 844103
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Jadhua BO',
    pin: 844102
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Jafarpatti BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Jafrabad BO',
    pin: 844503
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Jahangirpur Salkhanni BO',
    pin: 844126
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Jahangirpur Sham BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Jaintipur BO',
    pin: 844121
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Jalalpur BO',
    pin: 844121
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Jarang Rampur BO',
    pin: 844123
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Jhandaha SO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Jowaj BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Juramanpur Rampur BO',
    pin: 844508
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Jurawanpur Barari BO',
    pin: 844508
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Jurawanpur Karari BO',
    pin: 844508
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Kadilpur BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Kalapahar BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Kalyanpur BO',
    pin: 844115
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Kanhauli BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Karhatia Buzurg BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Karnauti BO',
    pin: 844501
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Karneji BO',
    pin: 844111
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Kartahan BO',
    pin: 844119
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Katarmala BO',
    pin: 844114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Kawadid BO',
    pin: 843114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Kazari Buzurg BO',
    pin: 844507
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Khanjahachak BO',
    pin: 844121
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Khanpur Pakari BO',
    pin: 844115
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Kharika  BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Kheshramadih BO',
    pin: 844118
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Khesrahi BO',
    pin: 843114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Khilwat BO',
    pin: 844503
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Khokhsa Bujurg BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Khopi BO',
    pin: 844507
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Kiratpur Rajaram BO',
    pin: 844114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Kumar Bajitpur SO',
    pin: 843110
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Kutubpur Saidpur BO',
    pin: 844503
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Lakhani BO',
    pin: 844502
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Lakhmipur BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Lalganj Vaishali SO',
    pin: 844121
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Lawapur Mahnar BO',
    pin: 844506
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Lawapur Narain BO',
    pin: 844506
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Laxmanpur BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Loma BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Madarna BO',
    pin: 844113
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Madhaul BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Madhopur Nijhma BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Madhopur Ram BO',
    pin: 844113
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Madhurapur BO',
    pin: 844503
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Maganpur BO',
    pin: 844118
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Mahathi Dharamchand BO',
    pin: 844126
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Mahipura BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Mahisaur BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Mahnar Road Rs SO',
    pin: 844507
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Mahnar SO',
    pin: 844506
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Mahuwa SO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Majhauli BO',
    pin: 844123
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Malikpura BO',
    pin: 844118
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Malpur BO',
    pin: 843110
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Mamrejpur BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Mandaidih BO',
    pin: 843110
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Mani Bhakurahar BO',
    pin: 844125
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Maniarpur BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Manikpur Pakri BO',
    pin: 844121
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Mansingpur Bijhrauli BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Marai BO',
    pin: 844501
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Marauatpur BO',
    pin: 844506
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Marui BO',
    pin: 843110
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Mathurapur Sultan BO',
    pin: 844503
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Maudah BO',
    pin: 843114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Maudah Buzurg BO',
    pin: 843114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Milki Urf  Chakwaje Khijirpur BO',
    pin: 844126
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Minapur Rai BO',
    pin: 844103
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Mirza Nagar BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Mohanpur BO',
    pin: 844508
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Mohanpur BO',
    pin: 844115
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Mukundpur Bhat BO',
    pin: 844507
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Mukundpur Grahi BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Murtuzapur BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Naharpur BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Nainha BO',
    pin: 844124
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Nandlalpur BO',
    pin: 844113
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Narainpur Deopura BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Nari Khurd BO',
    pin: 844126
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Navanagar BO',
    pin: 844503
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Nayaganj BO',
    pin: 844506
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Nilkanthpur BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Pachdamia BO',
    pin: 844119
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Padmaul BO',
    pin: 844118
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Paharpur BO',
    pin: 844508
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Paharpur Toi BO',
    pin: 844509
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Palwaiya BO',
    pin: 844506
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Panapur Dharampur BO',
    pin: 844102
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Panapur Langa BO',
    pin: 844124
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Parmanandpur BO',
    pin: 844507
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Pastara BO',
    pin: 843114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Patepur SO',
    pin: 843114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Paterha Jairam BO',
    pin: 844111
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Paura BO',
    pin: 844117
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Phular BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Pirapur BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Pirapur Mathura BO',
    pin: 844114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Piroi BO',
    pin: 844114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Pohiar BO',
    pin: 844507
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Pour BO',
    pin: 844126
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Prataptand SO',
    pin: 844123
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Purkhauli BO',
    pin: 844121
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Raghopur Chandel BO',
    pin: 844508
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Raghopur SO',
    pin: 844508
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Raghunathpur Imadpur BO',
    pin: 844114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rahimapur BO',
    pin: 844502
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rahimpur Jagdish BO',
    pin: 844128
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rajapakar SO',
    pin: 844124
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rajasan BO',
    pin: 844102
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rajauli BO',
    pin: 844102
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rambhadra SO',
    pin: 844101
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Ramouli BO',
    pin: 843114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rampur Bhaghel BO',
    pin: 844507
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rampur Kumaharkol BO',
    pin: 844507
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rampur Madhaul BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rampur Ramhar BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rampur Ratnakar BO',
    pin: 844116
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rampur Shyamchand BO',
    pin: 844508
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rasalpur Fatah BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rasulpur Enayat BO',
    pin: 844114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rasulpur Korigaon BO',
    pin: 844114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rasulpur Purusottam BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Ratnakar BO',
    pin: 844102
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rikhar BO',
    pin: 844123
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Rushtampur BO',
    pin: 844508
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Sadullahpur BO',
    pin: 844102
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Sahdei Buzurg SO',
    pin: 844509
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Sahdullahpur BO',
    pin: 844121
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Sahdullpur Dhabouli BO',
    pin: 844502
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Sahpur BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Sahtha BO',
    pin: 844123
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Saidpur Dumra BO',
    pin: 843114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Sain BO',
    pin: 844111
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Saistapur BO',
    pin: 844508
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Salempur Dumaria BO',
    pin: 844122
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Salha BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Sarai Dhanesh BO',
    pin: 844509
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Sarai SO',
    pin: 844125
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Sarmaspura BO',
    pin: 844126
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Sarmastpur BO',
    pin: 844501
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Sathiauta Bhagwan BO',
    pin: 844123
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Satpura BO',
    pin: 844114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Sekhopur BO',
    pin: 844509
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Senduari BO',
    pin: 844124
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Serpur Chatwara BO',
    pin: 844126
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Shoharthi BO',
    pin: 844505
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Simarwara Durgapur BO',
    pin: 843114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Singhara SO',
    pin: 844126
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Sirsabiran BO',
    pin: 844123
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Sondho BO',
    pin: 844118
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Subhai BO',
    pin: 844102
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Sukki BO',
    pin: 843114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Sultanpur BO',
    pin: 844506
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Supaul BO',
    pin: 844501
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Taibpur BO',
    pin: 844506
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Thathan Buzurg BO',
    pin: 844125
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Tisiuta Dharampur BO',
    pin: 844126
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Ufraul BO',
    pin: 844504
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Vaishali SO',
    pin: 844128
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Warispur BO',
    pin: 844114
  },
  {
    state: 'Bihar',
    district: 'VAISHALI',
    subDistrict: 'Yusufpur SO',
    pin: 844101
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Agapur BO',
    pin: 851128
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Agauni BO',
    pin: 851216
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Ahiyapur BO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Aijani BO',
    pin: 848204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Ajhaur BO',
    pin: 851131
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Akopur BO',
    pin: 848202
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Alauli BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'Khagaria',
    subDistrict: 'Alauli S.O',
    pin: 851206
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Amaridih BO',
    pin: 848202
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Amarpur BO',
    pin: 851118
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Amba BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Amba BO',
    pin: 851112
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Amjadpur Pidhauli BO',
    pin: 851133
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Amni BO',
    pin: 851214
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Amousi BO',
    pin: 851205
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Anantpur BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Araria Balha BO',
    pin: 851203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Arjuntola Baryarpur BO',
    pin: 851132
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Asli Kothia BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Babhabgama BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Babhangama BO',
    pin: 851131
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Babu Bagicha BO',
    pin: 851214
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Bachauta BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Bachhawara SO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Badalpura BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Badia BO',
    pin: 851213
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Bagdobh BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Bagras BO',
    pin: 848201
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Bahadurpur BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Bahuara BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Bakhadda BO',
    pin: 851217
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Balahpur BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Balha  BO',
    pin: 851214
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Ballia Bazar BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Bandehra BO',
    pin: 851212
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Banduar BO',
    pin: 851131
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Bank BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Banni BO',
    pin: 851213
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Banwaripur BO',
    pin: 851133
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Barai Bangraha BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Baraipura BO',
    pin: 848204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Barauni Oil Refinery SO',
    pin: 851114
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Barauni SO',
    pin: 851112
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Barauni Urvark Nagar SO',
    pin: 851115
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Bari Ballia BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Bariarpurtola Sirsi BO',
    pin: 848202
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Barkhunt BO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Baro SO',
    pin: 851118
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Bashi BO',
    pin: 848202
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'BBazar SO',
    pin: 848201
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'BDeorhi SO',
    pin: 851113
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Begusarai Court SO',
    pin: 851101
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Begusarai HO',
    pin: 851101
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'BEGUSARAI ZILA PARISHAD S.O',
    pin: 851101
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Bela Simri BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Belanawada BO',
    pin: 852161
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Beldaur SO',
    pin: 852161
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Bhadas BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Bhagatpur BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Bhagwanpur SO',
    pin: 851120
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Bhairwar BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Bharsoi BO',
    pin: 851216
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Bhith BO',
    pin: 851120
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Bhoja BO',
    pin: 848202
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Bhutali Malpa BO',
    pin: 851201
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Bihat SO',
    pin: 851135
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Bikrampur BO',
    pin: 851132
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Binodpur BO',
    pin: 851134
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Birpur BO',
    pin: 851127
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Birwas BO',
    pin: 851212
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Bishanpur Ahok BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Bishanpur BO',
    pin: 851215
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Bishanpur BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Bishanpur Dumri BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Borna BO',
    pin: 851202
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Borney BO',
    pin: 851201
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'BTPP SO',
    pin: 851116
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Buchauli BO',
    pin: 851120
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Budhaura BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Burhwa BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Chak Hamid BO',
    pin: 848201
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Chak Prayag BO',
    pin: 851216
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Chakbedulia BO',
    pin: 851128
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Chamtha BO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Chandaur BO',
    pin: 851133
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Chandpur Khurd BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Chandpura BO',
    pin: 851131
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Chatarghat BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Chauki BO',
    pin: 851217
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Chautham SO',
    pin: 851201
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Cheria BO',
    pin: 851132
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Chhapki BO',
    pin: 851131
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Chharrapatti BO',
    pin: 851217
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Chhatauna BO',
    pin: 851130
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Chhera Khera BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Chhitraur BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Chhourahi BO',
    pin: 848202
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Chilmil BO',
    pin: 851131
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Chirainyatol BO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Chorhli BO',
    pin: 852161
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Churamachak BO',
    pin: 851133
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Dafarpur BO',
    pin: 851127
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Dahiya BO',
    pin: 851120
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Damdama BO',
    pin: 851131
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Danauli Phulwaria BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Dandari BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Deopura BO',
    pin: 848201
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Deotha BO',
    pin: 851212
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Dhabauli BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Dhankaul BO',
    pin: 851112
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Dhari Pachout BO',
    pin: 852161
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Dighaun BO',
    pin: 852161
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Dighni BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Dihpar BO',
    pin: 851127
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Dinachakla BO',
    pin: 851212
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Dularpur BO',
    pin: 851133
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Dumaria Buzurg BO',
    pin: 851216
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Dumaria Khurd BO',
    pin: 851215
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Dumri BO',
    pin: 851117
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Dumri BO',
    pin: 852161
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Dunhi BO',
    pin: 848204
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Durgapur BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Ekamba BO',
    pin: 848204
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Fango BO',
    pin: 851214
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Farreh BO',
    pin: 851213
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Fateha BO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Fazilpur BO',
    pin: 851127
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Gamharia BO',
    pin: 848201
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Gara BO',
    pin: 851120
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Garhara SO',
    pin: 851126
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Garhiya BO',
    pin: 851214
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Garhpura SO',
    pin: 848204
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Garmohini BO',
    pin: 851203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Gaura BO',
    pin: 851113
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Gaura Shakti Tola BO',
    pin: 851205
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'GDCollege Road SO',
    pin: 851101
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Gehuni BO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Ghagrha BO',
    pin: 848201
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Godhna BO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Gogri SO',
    pin: 851202
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Gokhle Nagar Bishanpur BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Gopalpur BO',
    pin: 851203
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Goraiya Bathan BO',
    pin: 851203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Gorgama BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Goriyami BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Govindpur BO',
    pin: 851128
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Gram Garhara BO',
    pin: 851126
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Hanspur BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Hardia BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Hariharpur BO',
    pin: 851133
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Harinmar BO',
    pin: 851203
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Haripur BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Hasanpur BO',
    pin: 851130
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Hathwan BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Hussaina BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Ishapur BO',
    pin: 851120
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Itmadi BO',
    pin: 851212
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Jahangir Tola BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Jalkaura BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Jamalpur Gogri SO',
    pin: 851203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Jayintigram BO',
    pin: 851120
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Jhanjhara BO',
    pin: 851212
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Jhawabohiyar BO',
    pin: 851203
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Jhiktia BO',
    pin: 851213
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Jogia BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Jokia BO',
    pin: 851127
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Jorawarpur BO',
    pin: 851215
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Kabela BO',
    pin: 851215
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Kaidrabad BO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Kaith BO',
    pin: 851131
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Kaithi BO',
    pin: 851201
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Kamruddinpur BO',
    pin: 851134
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Kanhaiyachak BO',
    pin: 851216
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Katarmala BO',
    pin: 851130
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Kavia BO',
    pin: 851120
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Keshave BO',
    pin: 851134
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Keshavnagar BO',
    pin: 851201
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Khagaria Bazar SO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Khagaria Mukhya Dakghar SO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Khamhar BO',
    pin: 851131
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Khanjahapur BO',
    pin: 851132
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Kharaita BO',
    pin: 851201
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Khargi Terasi BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Khizirchak BO',
    pin: 851112
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Khodabandpur BO',
    pin: 848202
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Khutha BO',
    pin: 851205
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Kolwara BO',
    pin: 851216
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Korai BO',
    pin: 848204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Koria Haibatpur BO',
    pin: 851127
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Koshi College SO',
    pin: 851205
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Kulharia BO',
    pin: 851216
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Kumbhi BO',
    pin: 848202
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Kumharson BO',
    pin: 848204
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Kurwan BO',
    pin: 852161
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Kushmahaut BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Labhgaon BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Lagar BO',
    pin: 851216
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Lakhanpatti BO',
    pin: 848204
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Lakhanpur BO',
    pin: 851133
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Lakhminia Bazar BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Lakhminia SO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Lakho BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Laruara BO',
    pin: 851218
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Lodiyahi BO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Machhra BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Madarpur BO',
    pin: 851213
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Madhopur BO',
    pin: 851215
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Madhurapur BO',
    pin: 851113
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Madhusudanpur BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Mahendrapur BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Maheshkhunt SO',
    pin: 851213
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Maheshpur BO',
    pin: 851133
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Maheswara BO',
    pin: 851127
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Mahipa Tol BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Mahna SO',
    pin: 851210
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'MALHIPUR BO',
    pin: 851116
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Malia BO',
    pin: 851203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Malipur BO',
    pin: 848204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Malpur BO',
    pin: 848202
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Maniappa BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Manjhaul SO',
    pin: 851127
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Manopur BO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Mansi SO',
    pin: 851214
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Mansurchak SO',
    pin: 851128
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Marachi Kalan BO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Marar BO',
    pin: 851205
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Mathurapur BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Matihani BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'MBabhangama BO',
    pin: 851112
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Meghaul SO',
    pin: 848202
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Meghauna BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Mehdasahpur BO',
    pin: 851132
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Mehsauri BO',
    pin: 851205
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Mirzapur Banduar SO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Mirzapurchand BO',
    pin: 851112
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Mohaddipur SO Khagaria',
    pin: 851212
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Mohanaigh BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Mohanpur BO',
    pin: 848201
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Mohanpur BO',
    pin: 851131
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Mohinath Nagar BO',
    pin: 852161
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Mohraghat Press BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Mukhtiyarpur BO',
    pin: 851133
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Muzaffara BO',
    pin: 851127
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Nagdah BO',
    pin: 851117
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Naipur BO',
    pin: 851128
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Naktitola BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Naokothi SO',
    pin: 851130
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Nawada BO',
    pin: 851201
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Naya Gaon SO Begusarai',
    pin: 851215
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Nayanagar BO',
    pin: 851133
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Neola BO',
    pin: 851120
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Ninga BO',
    pin: 851112
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Nirpur BO',
    pin: 851201
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Nonpur BO',
    pin: 851112
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Noorpur BO',
    pin: 851210
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'NSheotol BO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Olapur Ganguar BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Pabra BO',
    pin: 851127
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Pachaut BO',
    pin: 852161
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Paharpur BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Pahsara Babhangama BO',
    pin: 851127
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Pakrail BO',
    pin: 851213
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Panapur BO',
    pin: 851127
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Panchbir BO',
    pin: 851217
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Pansalla BO',
    pin: 848202
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Pansalwa BO',
    pin: 852161
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Papraur BO',
    pin: 851210
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Parbatta SO',
    pin: 851216
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Parihara BO',
    pin: 848201
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Parmanandpur BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Parna BO',
    pin: 851131
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Parora BO',
    pin: 848204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Pasopur BO',
    pin: 851112
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Paspura BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Pasraha BO',
    pin: 851212
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Patel Nagar Bharra BO',
    pin: 851213
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Paura BO',
    pin: 851201
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Phaphaut BO',
    pin: 848202
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Phudkichak BO',
    pin: 851203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Phulmallik BO',
    pin: 851217
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Phulwaria BO',
    pin: 851201
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Phulwaria Deorhi BO',
    pin: 852161
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Piparpanti BO',
    pin: 851212
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Pipra Baisa BO',
    pin: 851212
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Pipra Devas BO',
    pin: 851112
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Pipralathif BO',
    pin: 851212
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Pirnagra Deorhi BO',
    pin: 852161
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Purpathar BO',
    pin: 848204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Rachiahi Akashpur BO',
    pin: 851134
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Raghunandanpur BO',
    pin: 851133
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Raghunathpur BO',
    pin: 851217
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Rahatpur BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Rahimpur BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Rajakpur BO',
    pin: 851130
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Rajapur BO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Rajaur BO',
    pin: 848204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Rajaura SO',
    pin: 851131
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Ram Nagar Math BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Ramdiri BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Rampur BO',
    pin: 848201
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Rampur Matihani BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Rani BO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Rani Sakarpura BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Ranko BO',
    pin: 851205
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Rasidpur BO',
    pin: 851128
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Rasounk BO',
    pin: 851205
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Ratan BO',
    pin: 851203
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Raun BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Refinery Township SO',
    pin: 851117
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Rohiyama BO',
    pin: 852161
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Rohiyar BO',
    pin: 851214
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Rudauli BO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Rupasbaj BO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sadanandpur BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sadpur BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Safapur BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Saharbanni BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sahebpur Kamal SO',
    pin: 851217
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sahpur BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Sahraun BO',
    pin: 851201
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Sahsi BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sahuri BO',
    pin: 851112
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Saidpur BO',
    pin: 851214
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Saidpur BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sakarbasa BO',
    pin: 848202
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Sakarpura SO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sakrauli BO',
    pin: 848202
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Sakrohar BO',
    pin: 852161
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Salarpur BO',
    pin: 851216
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Salemabad BO',
    pin: 851217
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Saligrami BO',
    pin: 851217
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Samaspur BO',
    pin: 851213
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Samastipur BO',
    pin: 851217
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Samsa BO',
    pin: 848201
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Samsa BO',
    pin: 851128
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Samsipur Bhith BO',
    pin: 851111
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sandalpur BO',
    pin: 851217
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sanha BO',
    pin: 851217
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Sanhauli BO',
    pin: 851205
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sanjat BO',
    pin: 851120
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sankh BO',
    pin: 851131
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Sanokhar BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Sansarpur BO',
    pin: 851214
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Saraiya BO',
    pin: 851201
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Saraunja BO',
    pin: 851127
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Shergarh BO',
    pin: 851203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sihma BO',
    pin: 851129
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sihmachakka BO',
    pin: 848204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Simaria BO',
    pin: 851126
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Simaria Ghat BO',
    pin: 851126
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Simraha BO',
    pin: 848203
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Singhaul BO',
    pin: 851134
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sisauni Kothi BO',
    pin: 851130
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Siswa BO',
    pin: 851214
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sital Rampur BO',
    pin: 848201
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Sonbarsa Ghat BO',
    pin: 851201
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Sondiha BO',
    pin: 851212
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sonihar BO',
    pin: 848201
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sonma BO',
    pin: 848201
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sri Ram Press SO',
    pin: 851101
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sripur SO',
    pin: 851132
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Suhird Nagar SO',
    pin: 851218
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Suja BO',
    pin: 851218
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Sumbha BO',
    pin: 848201
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Suryapura BO',
    pin: 851120
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Tajpur BO',
    pin: 851120
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Takiadadpur BO',
    pin: 851133
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Tarabariarpur BO',
    pin: 848202
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Teghra SO',
    pin: 851133
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Telihar BO',
    pin: 852161
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Temtha BO',
    pin: 851216
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Tetrabad Chandpura BO',
    pin: 851204
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Tetri BO',
    pin: 851211
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Thatha BO',
    pin: 851214
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Thuthi BO',
    pin: 851214
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Tilrath BO',
    pin: 851112
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Ullao SO',
    pin: 851134
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Abhiya bazarBO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Abhiyudayasharan BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'ABHYUDAY ASHRAM',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Adampur SO',
    pin: 812001
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Afzugaj BO',
    pin: 813213
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Agarpur BO',
    pin: 813210
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Ahiro BO',
    pin: 813110
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Akabarpur BO',
    pin: 813222
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Akbarnagar BO',
    pin: 812006
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Akidatpur BO',
    pin: 853202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Aliganj SO',
    pin: 812005
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Alinagear Rajpur BO',
    pin: 813210
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Amapali BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Amarpur BO',
    pin: 853201
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Amarpur SO Banka',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Amba BO',
    pin: 813108
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Amdanda BO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Amribishapur BO',
    pin: 812004
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Arajpur BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Arar BO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Auria BO',
    pin: 813103
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Babhangama BO',
    pin: 853201
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Badluchak BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bagduma BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bahadurpur BO',
    pin: 813210
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Bahrna BO',
    pin: 813207
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Baid Pur BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Baidachak BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Baijani BO',
    pin: 812005
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Bairoganj BO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Baisi jahangira BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Bakchappar BO',
    pin: 813108
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bakharpur BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bakiadiara BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Balaha BO',
    pin: 853203
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Balia BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Balia Mahra BO',
    pin: 813103
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Baliskadma BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Baluachak BO',
    pin: 812005
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Bamdev BO',
    pin: 813107
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Baniakura BO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Bank BO',
    pin: 814131
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Banka HO',
    pin: 813102
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Bara BO',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Barahat SO',
    pin: 813103
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Barahpura',
    pin: 812001
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Barani BO',
    pin: 813222
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Barari SO',
    pin: 812003
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Barhara BO',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'BARHUNA BO',
    pin: 813103
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Barmasia BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Barwasini BO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Basbita BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Basmatta BO',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bath BO',
    pin: 813201
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Batsar BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Beijnathpur BO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Belarimilki BO',
    pin: 813211
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Beldiha BO',
    pin: 813207
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Belhar SO',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Belsira BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bhagalpur City SO',
    pin: 812002
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bhagalpur HO',
    pin: 812001
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bhaglapur  Engg College',
    pin: 813210
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bhaglapur Central Jail',
    pin: 813210
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bhaglapur Distt Board',
    pin: 812001
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bhalua BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bharakhand Naybas BO',
    pin: 853203
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bharamarpur BO',
    pin: 853201
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bharatkhand dyorhi BO',
    pin: 853203
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bharko BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bhatgama BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Bhatkund BO',
    pin: 813109
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bhatoria BO',
    pin: 812006
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Bhatshila BO',
    pin: 813207
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bhawanipur BO',
    pin: 813203
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bhawanpura BO',
    pin: 853202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bhawauipur BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Bhelwa BO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bhghwa BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'BHIKHANPUR',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bhimdestola BO',
    pin: 853205
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Bhitia BO',
    pin: 813207
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Bhorabazar  BO',
    pin: 814131
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Bhorsar BO',
    pin: 814131
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bhowadeorhi BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bhurna BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bihpur SO',
    pin: 853201
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Bijaynagar',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Bindi BO',
    pin: 813109
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bisanpur Bhurbhuri BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Bishambharchak BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bishanpur BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Bishanpur BO',
    pin: 813207
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bishanpur BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bishanpurjicho BO',
    pin: 813210
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Bounsi SO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'BudhuchaK BO',
    pin: 813222
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Burhanath BO',
    pin: 812005
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Buzurgharna BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Chakdaria BO',
    pin: 813210
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Chaknarayanpur BO',
    pin: 812006
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Chaknathu BO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Chakrami BO',
    pin: 853203
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Chalna BO',
    pin: 813110
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Champanagar SO',
    pin: 812004
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Chandadih BO',
    pin: 813109
  },
  {
    state: 'Bihar',
    district: 'DEOGHAR',
    subDistrict: 'Chandan SO',
    pin: 814131
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Chandpur BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Chandrabhanpur BO',
    pin: 812006
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Chanjeri BO',
    pin: 813109
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Channo BO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Chapar BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Charabargaon BO',
    pin: 812006
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Charkapathar BO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Chathar Dhaniar BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Chatmadih BO',
    pin: 813201
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'ChhotInaki BO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'CHUAPANI BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'chutia',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Chutia BO',
    pin: 813211
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Dahuwa BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Danda Bazar BO',
    pin: 812005
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'DANRA',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Darha BO',
    pin: 813212
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Dariapur BO',
    pin: 812006
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Dhakamor BO',
    pin: 813103
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Dhankuria BO',
    pin: 813207
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Dhanokhar',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Dhanoura BO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Dharahara BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Dharampurrahi BO',
    pin: 853201
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Dharia BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Dholbazza  BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Dhubai BO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Dhuibelari BO',
    pin: 813201
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Dimaha BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'DOMUHAN',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'DUDHARI',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Duldulia BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Dumarama BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Dumaria BO',
    pin: 813212
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Ekchari Khawas BO',
    pin: 813222
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Ekchari SO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Ekdara BO',
    pin: 813222
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Fatehpur BO',
    pin: 812004
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Fatehpur SO BhagalpBO',
    pin: 813210
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Fullidumar BO',
    pin: 813207
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Gangapur Diara BO',
    pin: 813213
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Gerua BO',
    pin: 813212
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Ghogha SO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Gidhora BO',
    pin: 813211
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Gobrain BO',
    pin: 812006
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Gokula  KURAWA BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Golhatti BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Golni Kusaha BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Gopalpur BO',
    pin: 813107
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Goradih BO',
    pin: 813210
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Gorgama BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Gorgama BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Gosaigaov BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Gourachouki BO',
    pin: 812005
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Gouripur BO',
    pin: 853201
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Habibpur BO',
    pin: 812005
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Harchandi BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Haridaspur BO',
    pin: 812006
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Hario BO',
    pin: 853201
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'HARIPUR',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Harnathpur BO',
    pin: 812006
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Harpur BO',
    pin: 813108
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Hasai BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Hathiyok BO',
    pin: 813213
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Hirambhi BO',
    pin: 813109
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Inarabaran BO',
    pin: 814131
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Ishakchak SO',
    pin: 812001
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Ishapur Chorhar BO',
    pin: 853202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Ishipur SO',
    pin: 813206
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Ismailpur BO',
    pin: 853205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Itahari BO',
    pin: 813206
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Jagatpur BO',
    pin: 813103
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Jagatpur BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Jagdishpur SO Bhagalpur',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Jahagira BO',
    pin: 813213
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Jaipur BO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'JAMDAHA',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Jamunia BO',
    pin: 853202
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'JETHOR JAMUA',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Jhandapur BO',
    pin: 853201
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'JOGDIHA',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Jokta Fatehpur BO',
    pin: 814131
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Jotgobind BO',
    pin: 853205
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Jotha BO',
    pin: 813109
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Kadrachak BO',
    pin: 813211
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kadwadiara BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kahalgaon SO',
    pin: 813203
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Kairee BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kairia BO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Kaitha BO',
    pin: 813211
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kajhia BO',
    pin: 813103
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kajraili BO',
    pin: 812005
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Kakwara BO',
    pin: 813103
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kalgigaj BO',
    pin: 813203
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kaliprasad BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Kaluchak Bispuria BO',
    pin: 853202
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Kamdeodih BO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Kamdeopur BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kamlakund BO',
    pin: 853205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kapsona BO',
    pin: 813108
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Karaharia BO',
    pin: 813201
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Karanja BO',
    pin: 813207
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Karik Bazar SO',
    pin: 853202
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Kasba BO',
    pin: 813211
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kasimpur BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kasri BO',
    pin: 813203
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'KATARIYA',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Kathail BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kathara BO',
    pin: 813213
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Kathoun BO',
    pin: 813107
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kathrang BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Katoria SO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Katsakrah BO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kenduar BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Keruar BO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'KHAGRA',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Khaira BO',
    pin: 812006
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Khairpurkadwa BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Khajraitha BO',
    pin: 853203
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Khanjarpur BO',
    pin: 812005
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Khanpurmal BO',
    pin: 813213
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'KHARHARA BO',
    pin: 813103
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kharmanchak',
    pin: 812001
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Khawaspur MILKI BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Khesar SO',
    pin: 813207
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Khiribandha BO',
    pin: 812005
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Khojhi BO',
    pin: 813103
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Khutaha BO',
    pin: 812005
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Kiranpur BO',
    pin: 813108
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kishandaspur amkhoria BO',
    pin: 812006
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kishandaspur BO',
    pin: 813222
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kodanda BO',
    pin: 813108
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Kolbuzurg BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Kolhasar BO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Kolhatha BO',
    pin: 813109
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Krma BO',
    pin: 813211
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Kumaitha BO',
    pin: 813213
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kumarpur BO',
    pin: 813211
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Kumartar BO',
    pin: 814131
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kumri BO',
    pin: 813212
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'KUNOUNI',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kushmaha BO',
    pin: 813108
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Kushmaha BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Lagma BO',
    pin: 813222
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'LAKHNOUDIH',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Lakhpura BO',
    pin: 813103
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Lakra BO',
    pin: 813107
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Lalapur Bhader BO',
    pin: 813203
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Laskari BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Latra BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'LaTTIPUR BO',
    pin: 853201
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'LAXMIPUR',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Laxmipur Babhania BO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Laxmipur BO',
    pin: 813222
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Laxmipur Chiraya BO',
    pin: 813108
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Laxmipurgirdhar BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Lilatari BO',
    pin: 813109
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Logain BO',
    pin: 813108
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Lohari BO',
    pin: 814131
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Lokmanpur BO',
    pin: 853202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'M M Ashram',
    pin: 812003
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Machipur BO',
    pin: 813210
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Madarganj BO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Madhurapur BO',
    pin: 853203
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Madrauni BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Mahadeopur BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Mahesakhore BO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Mahesh Munda BO',
    pin: 813203
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'MAHESHADIH',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Maheshpur BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Mahisota BO',
    pin: 813211
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Mahiyama BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Makaita BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'MAKDUMA',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Makhatakia BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Malbathan BO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Mamallkha BO',
    pin: 813210
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Mandar Vidyapith BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Mangachak BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Maniamore BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Maniyarpur BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Manjhili Matihani BO',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Manjhoni BO',
    pin: 813109
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'MANJIRA GOURIPUR',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Mardimushari BO',
    pin: 813213
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Marwa BO',
    pin: 853201
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Masumganj BO',
    pin: 813213
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Mathura Sahibganj BO',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Mathurapur SO Bhagalpur',
    pin: 813222
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Mayaganj',
    pin: 812001
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'MERHA',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Milki BO',
    pin: 853201
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Mirhatti BO',
    pin: 813213
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Mirjafari BO',
    pin: 853202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Mirjanhat SO',
    pin: 812005
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Mirzapur BO',
    pin: 812004
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Mirzapur BO',
    pin: 813211
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Mohanpur BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Mohanpur Govinpur BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Mohiuddivpur BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Mokinpur English BO',
    pin: 813108
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Morma BO',
    pin: 813107
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Motanga BO',
    pin: 813110
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Moultola BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Murhan BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Nadiyama BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Nagarpara BO',
    pin: 853203
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Nandlalpur BO',
    pin: 813222
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Nansar BO',
    pin: 813213
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Narayanpur BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Narayanpur BO',
    pin: 813103
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Narayanpur SO Bhagalpur',
    pin: 853203
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Nathnagar SO',
    pin: 812006
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Naugachia SO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Nawada bazar BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Nayagaon BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Nayagaon BO',
    pin: 813201
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Nimia BO',
    pin: 813207
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Nraun BO',
    pin: 813207
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Orhara BO',
    pin: 813109
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Paharpur BO',
    pin: 853203
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Pair BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Pair BO',
    pin: 813110
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Pakaria BO',
    pin: 813211
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Panchgachia Bazar BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Panchrukhi Bazar BO',
    pin: 813108
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Panjwara SO',
    pin: 813110
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Papraiba BO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Pararia BO',
    pin: 813211
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'PARARIA CHAKKADIH',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Parghari BO',
    pin: 813210
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'PARMANANDPUR ITWA',
    pin: 813207
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Parshurampur BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Pasmanandpur BO',
    pin: 813207
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Pathada BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Pathakdih BO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Pathara BO',
    pin: 813110
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Patharghatta BO',
    pin: 813203
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'PATHRA',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Patsorikhaira BO',
    pin: 813107
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Pawai SO BanBO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Phaga BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Pharka BO',
    pin: 813210
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Phulakia BO',
    pin: 853205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Pilua Jharna BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Pirpainti Bazar BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Pirra BO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Pithna BO',
    pin: 813210
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Pothia BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Prasasthdih BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Pratapnager BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Pripainti SO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Punsia SO',
    pin: 813109
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Puraini BO',
    pin: 812005
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Raghopur BO',
    pin: 853202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Raghunitola BO',
    pin: 853205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Rahmandih BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Raipur BO',
    pin: 853203
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Rajoun SO',
    pin: 813107
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Rajpur BO',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Rajwara BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'RAMCHANDRAPUR ITAHARI',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Ramchna BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Rampur BO',
    pin: 813222
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'RANGA BO',
    pin: 813207
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'RANGATTA',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Rangra BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Ranidiara BO',
    pin: 813222
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Ranikita BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Ranjodha BO',
    pin: 813107
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Ranuchakmakandpur BO',
    pin: 812004
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Rata BO',
    pin: 813207
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Ratanganj BO',
    pin: 812006
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Rataupur Maikpur BO',
    pin: 813108
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Raugaon BO',
    pin: 813110
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Rauja BO',
    pin: 813207
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Rauka BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Rifatpur BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Rojabar BO',
    pin: 813107
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Roshanpur BO',
    pin: 813206
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Rupsa BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'S R Sultanganj SO',
    pin: 813213
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'S S Lane BO',
    pin: 812005
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Sabalpur BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sabour SO',
    pin: 813210
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sadhwa BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sadipur BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sadpur BO',
    pin: 813110
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Saguni BO',
    pin: 813211
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sahebganj',
    pin: 812004
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Sahjadpur BO',
    pin: 813108
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sahjatpur BO',
    pin: 812005
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sahkund SO',
    pin: 813108
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sahuparbatta BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Saino BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sajour BO',
    pin: 812006
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sakrama BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Salempur BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Salempurtola BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Samastipur BO',
    pin: 813108
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'SAMUKHIYA',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'SAMUKHIYAMORE',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sangitbaita BO',
    pin: 813203
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sanhoula BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sanhouli BO',
    pin: 812005
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sanjha BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sanokhar  BazarBO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Santadih BO',
    pin: 813212
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Saraiya BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sarkanda BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sathishnagar BO',
    pin: 853203
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sathiyari BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Satjori BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Satparaiya BO',
    pin: 813108
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Semaria BO',
    pin: 812005
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Serua BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Shambhuganj SO',
    pin: 813211
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Shankarpur BO',
    pin: 812004
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Shaukarpur BO',
    pin: 813210
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Shobhnathpur BO',
    pin: 813203
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Shreepathar BO',
    pin: 813109
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Shreepathas BO',
    pin: 813109
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Shyambazar BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sian BO',
    pin: 813206
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Silhan BO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Singhia makandpur BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Singhnan BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Sobhanpur Katoria BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sohail BO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sonbarsa BO',
    pin: 853201
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Sondiha Babhangama BO',
    pin: 813103
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Sondiha Dharmdiha BO',
    pin: 813103
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Srimaha BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Srimatpur Belsar BO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Srimatpur BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Srinagar BO',
    pin: 813209
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'STGoriar SO',
    pin: 853205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'STP Kahalgaon SO',
    pin: 813214
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sujaganj Bazar SO',
    pin: 812002
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sukhari BO',
    pin: 813206
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Sukhia Barhet BO',
    pin: 813104
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Suktia BO',
    pin: 853205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sultanganj SO Bhagalpur',
    pin: 813213
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Sultanpur BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Supaha BO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Surhari BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'T N B College SO',
    pin: 812007
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Tarar BO',
    pin: 813205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Tarcha BO',
    pin: 813105
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Tatarpur',
    pin: 812002
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Telghee BO',
    pin: 853202
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Telia BO',
    pin: 813103
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Telia Lowgain BO',
    pin: 813101
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Tengza BO',
    pin: 813202
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Tetaria BO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Tetripakra BO',
    pin: 853204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Thilkulia BO',
    pin: 813212
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'TILAKPUR BO',
    pin: 813213
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Tilkamanjhi',
    pin: 812001
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Tintanga BO',
    pin: 853205
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Tintangadiara BO',
    pin: 853205
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Tonapathar BO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Trimohan BO',
    pin: 813204
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Tulsipur Jamunia BO',
    pin: 853202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Udhadih BO',
    pin: 813213
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Uparchakmarhia BO',
    pin: 813106
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Uprama BO',
    pin: 813107
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Vijayhat BO',
    pin: 813109
  },
  {
    state: 'Bihar',
    district: 'BANKA',
    subDistrict: 'Warsabad BO',
    pin: 813211
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'AJHRAIL BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'ALTAHAT BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Amdabad SO',
    pin: 854112
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Angarhat BO',
    pin: 855115
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'ARIHANA BO',
    pin: 855114
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'ASJA BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Awadpur BO',
    pin: 855102
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Ayodhyaganj Bazar SO',
    pin: 854101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Azamnagar BO',
    pin: 855113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'B BALRAMPUR BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'B SIMARIA BO',
    pin: 854106
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BABHANI BO',
    pin: 855105
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'BAGALBARI BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BAGHWA BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Bahadurganj SO Kishanganj',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Baigna BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BAINA BO',
    pin: 854116
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Bairia BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Bakharganj BO',
    pin: 854112
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BAKIA BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Balia Belon BO',
    pin: 855113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BALTAR BO',
    pin: 855113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Balthi Maheshpur BO',
    pin: 854101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BALUPARA BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Bangama BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Bansgarha BO',
    pin: 854115
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Bareta BO',
    pin: 854114
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Barsoi SO',
    pin: 855102
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Barsoighat SO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Basantpur BO',
    pin: 854114
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BASTAUL BO',
    pin: 854116
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BATNA BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'BBBHARATPUR BO',
    pin: 855108
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Belbari BO',
    pin: 855113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BELWA BO',
    pin: 854107
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'BELWA BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BHAIS DIARA BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BHANDARTAL BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Bhangaha BO',
    pin: 854114
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BHARRI BO',
    pin: 855105
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BHATWARA BO',
    pin: 854108
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Bhawaniganj BO',
    pin: 855116
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BHBHIR BO',
    pin: 854115
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BHELAGANJ BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Bhittabari BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BHOLMARA BO',
    pin: 855108
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'BHORADAH',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Bibiganj BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BIGHOUR BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Bijaili BO',
    pin: 855114
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Binjee BO',
    pin: 854115
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Bishanpur BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BISHANPUR BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BNDIARA BO',
    pin: 854113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'BUDH NAGAR BO',
    pin: 854107
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'CHAKLA GHAT BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Chanamana BO',
    pin: 855117
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Chandpur BO',
    pin: 854101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'CHANDPUR BO',
    pin: 855105
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Chapahari BO',
    pin: 854101
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'CHATTAR GACHHI BO',
    pin: 855117
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Chhoghra BO',
    pin: 855102
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Chhohar BO',
    pin: 854114
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'CHOWKCHAMA BO',
    pin: 854112
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'CHOWKI HARIPUR BO',
    pin: 855105
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Churli BO',
    pin: 855116
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'D BAGCHALLA BO',
    pin: 854116
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'D BISHANPUR BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Daharia Molls SO',
    pin: 854103
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'DALAN BO',
    pin: 854106
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Daluahat BO',
    pin: 855117
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Dandkhora BO',
    pin: 855114
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'DANGOL BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Dasgram BO',
    pin: 855102
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'DAWASAI BO',
    pin: 855105
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'DHACHNA BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'DHANETHA BO',
    pin: 854108
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Dhangarha BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Dhanpatganj BO',
    pin: 855115
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Dhantola BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'DHARHAN BO',
    pin: 854116
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Dhumnagar BO',
    pin: 855113
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'DHUSMALHAT BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Dighalbank BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'DIGHRI BO',
    pin: 854106
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Dilarpur BO',
    pin: 854113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Dilli Diwanganj BO',
    pin: 854117
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Dogharia BO',
    pin: 855115
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'DUMAR BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Dumaria BO',
    pin: 855114
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Durgaganj SO',
    pin: 855105
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Durgapur BO',
    pin: 854112
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Falka BO',
    pin: 854114
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Fatehpur BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'FATEHPUR BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Galgalia SO',
    pin: 855106
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'GANGI BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'GANJAN BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Gauripur BO',
    pin: 854116
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'GMBATHNA BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Gopalpur Diara BO',
    pin: 854112
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Goriar BO',
    pin: 854101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'GOWALTOLI BO',
    pin: 855102
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Gunjanmari BO',
    pin: 855116
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Gurubazar SO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Haldikhora BO',
    pin: 855115
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'HASIMPUR BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Hat Balrampur BO',
    pin: 855102
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Hemkunj BO',
    pin: 854113
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Hulhuli BO',
    pin: 855116
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Jagdishpur BO',
    pin: 854115
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Jalki BO',
    pin: 855102
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'JARLAHI BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'JHAGRUCHAK BO',
    pin: 854108
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Jhala BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Jhawa BO',
    pin: 855113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'JIA POKHAR BO',
    pin: 855108
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Jirangachhi BO',
    pin: 855116
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'JOTRAMRAI BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Kabar BO',
    pin: 854115
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Kadwa BO',
    pin: 855114
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'KANHAIYABARI HAT BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'KANT NAGAR BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Kantakosh BO',
    pin: 854113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'KARHAGOLA BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'KASHIBARI HAT BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Katihar Bara Bazar SO',
    pin: 854105
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Katihar Bmp Camp SO',
    pin: 854106
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Katihar Colony SO',
    pin: 854105
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Katihar Court SO',
    pin: 854109
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Katihar HO',
    pin: 854105
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Katihar Mill SO',
    pin: 854107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Katihar Rs SO',
    pin: 854105
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Kehunia BO',
    pin: 854116
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Khaira BO',
    pin: 854101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Kharsouta BO',
    pin: 855113
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'KHARUDAH BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Khatia Pichhia BO',
    pin: 855117
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'KHERIA BO',
    pin: 854108
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'KHIDIRPUR BO',
    pin: 855102
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'KHODAGANJ BO',
    pin: 855108
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'KIRORA BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Kishanganj Bazar SO',
    pin: 855108
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Kishanganj SO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'KNGURMELA BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Kochadhaman BO',
    pin: 855115
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Korha SO',
    pin: 854108
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'KORHOBARI BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'KUMARIPUR BO',
    pin: 854103
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'KURETHA BO',
    pin: 854107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'KURHELA BOBRA BO',
    pin: 855113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'KURUM BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'KUTTI GOLA BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Laucha BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'LAXMIPUR BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Lohargarha BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'M BATHNA BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'M NAWABGANJ BO',
    pin: 854113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Madarichak BO',
    pin: 854113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'MADHEPUR BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'MADHURA BO',
    pin: 854107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Mahadevpur SO Katihar',
    pin: 854116
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'MAHI NAGAR BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'MAHISHAL BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'MAHUAR BO',
    pin: 854116
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'MAINA NAGAR BO',
    pin: 854116
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Mangura BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Manihari SO',
    pin: 854113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'MANMAN BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'MANSAHI BO',
    pin: 854103
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'MARGHIA BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'MARIYA BO',
    pin: 855117
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'MARWA BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'MARWA BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Mathurapur BO',
    pin: 855102
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Matiari BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'MAUDHA BO',
    pin: 855115
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'MEHARGANJ BO',
    pin: 855108
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Mirjapur BO',
    pin: 855117
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Mirpur BO',
    pin: 855115
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'MORSANDA BO',
    pin: 854108
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Moula Nagar BO',
    pin: 854101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'MPGARH BO',
    pin: 855114
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'MTDevipur BO',
    pin: 854101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'MUJWAR BO',
    pin: 854113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'MUKURIA BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'MUSAPUR BO',
    pin: 854108
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Nainagachhi BO',
    pin: 855116
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Nandgola BO',
    pin: 854101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Narayanpur BO',
    pin: 854113
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'NATUA PARA BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Neema BO',
    pin: 854117
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Nimoul BO',
    pin: 855102
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Nimoul BO',
    pin: 855113
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'NISHANDRA BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'PADAMPUR BO',
    pin: 855108
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Pahar Katta BO',
    pin: 855117
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Paharpur BO',
    pin: 854112
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'PAKAHARA BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Palsa BO',
    pin: 854116
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Panasihat BO',
    pin: 855117
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Pani Kamla BO',
    pin: 854112
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Pardiara BO',
    pin: 854112
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'PARVELI BO',
    pin: 855105
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Pathamari BO',
    pin: 855116
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Patharia BO',
    pin: 855116
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'PATKOI HAT BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'PAWAI BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Piprithan BO',
    pin: 855116
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Pirmokam BO',
    pin: 854114
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'PIYAJEE BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Porla BO',
    pin: 855102
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Poth RS BO',
    pin: 855117
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Pothia SO',
    pin: 854114
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'POWAKHALI BO',
    pin: 855108
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Pranpur BO',
    pin: 854116
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'PThakurbari BO',
    pin: 855117
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'PURANAGANJ BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'RAGHELI BO',
    pin: 855114
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'RAIPUR BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'RNBOULIA BO',
    pin: 854113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Rosna SO',
    pin: 854117
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'ROUNIA BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Ruidhasa BO',
    pin: 855116
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'RUNKI BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Rupani BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'S WONKAR BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Sadapur BO',
    pin: 855113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'SAGRATH BO',
    pin: 855105
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'SAHJA BO',
    pin: 854107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'SALEHPUR BO',
    pin: 854114
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Salmari SO',
    pin: 855113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'SAMDA BO',
    pin: 854104
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Sameli BO',
    pin: 854101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'SANDALPUR BO',
    pin: 854106
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Sankola BO',
    pin: 855102
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'SARAIKURI BO',
    pin: 855108
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'SAURIYA',
    pin: 854107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Semapur Factory SO',
    pin: 854115
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'SHIHIPUR BO',
    pin: 855113
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Shishabari BO',
    pin: 855115
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'SHITALMANI BO',
    pin: 855102
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'SHITALPUR BO',
    pin: 855117
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Shivananpur BO',
    pin: 855102
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Sikat BO',
    pin: 854115
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Siktia BO',
    pin: 855113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Simra BO',
    pin: 854101
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Singhari BO',
    pin: 855115
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'SINGHIA BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'SIRNEA BO',
    pin: 854103
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'SIRSEE BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'SISIYA BO',
    pin: 854108
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'SOMESHWAR BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Sonaili SO',
    pin: 855114
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Sontha SO',
    pin: 855115
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'SUDHANI RS BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Sujapur BO',
    pin: 854115
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'SUKHASAN BO',
    pin: 854107
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Taiyabpur SO',
    pin: 855117
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Tangore BO',
    pin: 854116
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'TARABARI BO',
    pin: 855108
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Teghra BO',
    pin: 855113
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'TELTA BO',
    pin: 854317
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'TEOSA BO',
    pin: 855107
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'TERHAGACHHI BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Thakurganj SO',
    pin: 855116
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Thiraniganj BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'Tikapatti BO',
    pin: 854101
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'TINGACHIA BO',
    pin: 854103
  },
  {
    state: 'Bihar',
    district: 'KATIHAR',
    subDistrict: 'TM Baghar BO',
    pin: 854113
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Tulsia BO',
    pin: 855101
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Abgil Chaurama BO',
    pin: 811301
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Abhaypur BO',
    pin: 811112
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Agahara Barubatta BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Aghara So BO',
    pin: 811314
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Agrahan BO',
    pin: 811211
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Akbarpur BO',
    pin: 811106
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Aliganj SO Jamui',
    pin: 811301
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Alinagar BO',
    pin: 811106
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Amaiya BO',
    pin: 813201
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Amari BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Amari BO',
    pin: 811212
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Amarpur BO',
    pin: 811106
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Amrath BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Anandpur BO',
    pin: 811312
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Arbaria BO',
    pin: 811312
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Arma BO',
    pin: 811309
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Arsar BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Asarganj SO',
    pin: 813201
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Aurey BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'B Bahadurpur BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'B Dariyapur BO',
    pin: 811302
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'B M Tola BO',
    pin: 811202
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Baghaur BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Baha Chowki BO',
    pin: 811202
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Bajila BO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Baladih BO',
    pin: 811301
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Balgudar BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Balthar BO',
    pin: 811314
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Bamdah BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Banhara BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Bank Harpur BO',
    pin: 811202
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Bannu Bagicha BO',
    pin: 811310
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Banpur BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Barabandh BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Barahat BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Barhauna BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Barhiya SO',
    pin: 811302
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Barhunia BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Bariarpur BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Bariarpur SO Munger',
    pin: 811211
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Baribag BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Barmasia BO',
    pin: 811212
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Barmoria BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Basbittibo BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Basudeopur SO',
    pin: 811202
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Batia BO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Belan Bazar SO',
    pin: 811201
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Belari BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Belchhi BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Benigir BO',
    pin: 811202
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Bhabangama BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Bhadaura BO',
    pin: 811211
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bhagalpur Devgaon BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Bhalar BO',
    pin: 811212
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Bhikhadih BO',
    pin: 813212
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Bhour BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Bichhichanchar BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Bichhwey BO',
    pin: 811310
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Bichkorwa BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Bijulia BO',
    pin: 811106
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Binda Diyara BO',
    pin: 811211
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Birupur BO',
    pin: 811302
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Bishanpur BO',
    pin: 811314
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Bisodah BO',
    pin: 811316
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Bukar BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Chain BO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Chakai SO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Chanashly BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Chandra Mandi BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Chango Dih BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Charkapathal BO',
    pin: 811314
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Chaura BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Chetan Tola Khutha BO',
    pin: 811302
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Chhapar Dih BO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Chhuchhnaria BO',
    pin: 811314
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Chorgaon BO',
    pin: 813201
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Chuwan BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'CR Lakhisarai BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Dabil BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Dadhwa BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Dadri BO',
    pin: 813212
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Damodar Pur BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Darha BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Dariapur BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Dariayapur BO',
    pin: 811202
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Darkha BO',
    pin: 811301
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Daulatpur BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Dhadhaur BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Dhamna BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Dhanama BO',
    pin: 811301
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Dhandh BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Dharhara SO Munger',
    pin: 811212
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Dhira BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Dhiradar BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Dhodhari BO',
    pin: 811314
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Dighari BO',
    pin: 811106
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Dighi BO',
    pin: 811312
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Dihra BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Dinnagar BO',
    pin: 811301
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Domamarhar BO',
    pin: 811312
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Dulampur BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Dumari BO',
    pin: 811314
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Dumari BO',
    pin: 811302
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Dumarkola BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Dundu BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Durmalta BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Ekashi BO',
    pin: 811211
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Farda BO',
    pin: 811202
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Fatehpur BO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'G Parsando BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Gadibishanpur BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Gaganpur BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Gagra BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Ganga Darshan SO',
    pin: 811201
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Ganga Sarai BO',
    pin: 811302
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Ganganiya BO',
    pin: 811211
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Gangata More BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Garhi BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Garsanda BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Gaura BO',
    pin: 811312
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Gaurab Dih BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Ghazipur BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Ghonghsa BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Ghorghat BO',
    pin: 811211
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Ghughuldih BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Gidhaur SO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Gobadda BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Gonai BO',
    pin: 813201
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Gopalpur BO',
    pin: 811310
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Gopalpur BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Halimpur BO',
    pin: 811214
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Halsi BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Harkhar BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Harpur BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Hathia BO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Haweli Kharagpur SO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Heru Diyara BO',
    pin: 811202
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Hilsa BO',
    pin: 811301
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Islamnagar BO',
    pin: 811301
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Ithari BO',
    pin: 811214
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Itwa BO',
    pin: 811212
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'J Nagar BO',
    pin: 811202
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Jaitpur BO',
    pin: 811302
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Jalal Pur Nauranga BO',
    pin: 811302
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Jamalpur SO Munger',
    pin: 811214
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Jamalpur WS',
    pin: 811201
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Jamui Court SO',
    pin: 811307
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Jamui HO',
    pin: 811307
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Janki Dih Beldaria BO',
    pin: 811310
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Jankinagar BO',
    pin: 811211
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Jhajha Bazar SO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Jhajha SO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Jhundo BO',
    pin: 811314
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Jit Jhingoibo BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'K Shampur BO',
    pin: 811211
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'K T Laxmipur BO',
    pin: 811106
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kahua BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Kaiyar BO',
    pin: 811301
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Kajra SO',
    pin: 811309
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Kakan BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Kala BO',
    pin: 811312
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Kalarampur BO',
    pin: 811211
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Kalyanpur BO',
    pin: 811211
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Kamargama BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Karhara BO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Karma BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Karma Borba BO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Katauna BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Kendi BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Kendua BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Keshopur BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Kewal BO',
    pin: 811316
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Kewal Fariyatta BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Khabra BO',
    pin: 813212
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Khadigram BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Khaira BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Khaira Doray BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Khaira SO Jamui',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Kharaich BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Khardih BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Kharhawa BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Kharia BO',
    pin: 811211
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Kharma BO',
    pin: 811316
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Kharsari BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Khelari BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Khuranda BO',
    pin: 811316
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Khutha BO',
    pin: 811302
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Kiranpur BO',
    pin: 811106
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Kisanpur BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Kiulrs SO',
    pin: 811310
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Kiya Jori BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Kolhua BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Koluadih BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Konag BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Konan BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Korane BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Kumar BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Kutlupur BO',
    pin: 811202
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'L Kalyanpur BO',
    pin: 811302
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'L Laxmipur BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Lachhuar BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Lagma BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Lahauta Ghatwari BO',
    pin: 811212
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Lai BO',
    pin: 811309
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Lakhanpur BO',
    pin: 813201
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Lakhisarai Court SO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Lakhisarai SO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Lal Darwaza SO Munger',
    pin: 811201
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Launaparsa BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Laxmipur Jamui SO',
    pin: 811312
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Loha BO',
    pin: 811314
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Lohchi BO',
    pin: 811211
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Lohra BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Loshghani BO',
    pin: 811112
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'M Nagar BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Madhochih BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Madhopur BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Mahadeo Simaria BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Maheshpur BO',
    pin: 811211
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Maheshwari BO',
    pin: 811314
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Mahisona BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Majhgain BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Makwa BO',
    pin: 813201
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Malia BO',
    pin: 811310
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Mallehpur SO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Mamai BO',
    pin: 813201
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Mananpur BO',
    pin: 811310
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Mangarh BO',
    pin: 811212
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Mango Bandar BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Manikpur BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Maniyadda BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Manjhgay BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Manjhway BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Manjosh BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Mankattha BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Mano BO',
    pin: 811310
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Markama BO',
    pin: 811301
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Matashi BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Mathar BO',
    pin: 811202
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Mathurapur BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Matia BO',
    pin: 811312
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Maura BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Mirzaganj BO',
    pin: 811301
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Mohanpur BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Mohanpur BO',
    pin: 811316
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Mundbaro BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Munger College SO',
    pin: 811201
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Munger Fort SO',
    pin: 811201
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Munger HO',
    pin: 811201
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Munger Town SO',
    pin: 811201
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Muskipur BO',
    pin: 813201
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Mustafapur BO',
    pin: 811106
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Muzaffarganj BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'N Silfari BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Naiyadih BO',
    pin: 811314
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Nandnama BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Nandpur BO',
    pin: 811106
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Narganjo BO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Nariyana BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Nawagarhi BO',
    pin: 811211
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Nayagaon BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'NDRoad Munger SO',
    pin: 811201
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Nimnawada BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Noma BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Noni BO',
    pin: 811301
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Nowgain BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Numar BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Orabagicha BO',
    pin: 811212
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'P Matihana BO',
    pin: 811314
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Pacham BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Paharpur BO',
    pin: 811106
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Parsama BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Parsando BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Parwara BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Patambar BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Patauwa BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Pathak Chack BO',
    pin: 811313
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Pattam BO',
    pin: 811214
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Pawai BO',
    pin: 811309
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'PBLakhisarai SO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Phariatadih BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Phulhara BO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Pipariya BO',
    pin: 811302
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Pirhinda BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Piri Bazar SO',
    pin: 811112
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Pojha BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Pokhrama BO',
    pin: 811309
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Pradhanchak BO',
    pin: 811317
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Purab Sarai SO',
    pin: 811201
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Pursanda BO',
    pin: 811301
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Purshotampur BO',
    pin: 811211
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'R CMaidan BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Rabai BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Raja Dih BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Rajala BO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Ramankabad BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Ramchandradih BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Ramchandrapur BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Ramgarh BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Ramnagar BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Rampur BO',
    pin: 811310
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Rangaon BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Ratanpur BO',
    pin: 811211
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Ratanpur BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Rathaitha BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Rehua BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'S Batpar BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'S Khairma BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'S Salaunja BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Sadaibigha BO',
    pin: 811302
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Sadar Bazar Jamalpur SO',
    pin: 811214
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Sadobh BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Safiabad BO',
    pin: 811214
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Sahiya BO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Sahoor BO',
    pin: 811310
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Sahora BO',
    pin: 811301
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sahora BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Sangrampur BO',
    pin: 811310
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sangrampur SO Bhagalpur',
    pin: 813212
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Saraun BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Sarobagh BO',
    pin: 811214
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Sarsa Bichwe BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Sawal Bigha BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Sevai BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Seway BO',
    pin: 811301
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Shamho BO',
    pin: 811106
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Shankarpur BO',
    pin: 811202
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Sharma BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Shiovsona BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Shiv Kund BO',
    pin: 811202
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Shivpur Logain BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Shobhani BO',
    pin: 811310
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Sijhauri BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Sikandra SO Jamui',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Simultala SO',
    pin: 811316
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Singhchak BO',
    pin: 811310
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Singhia BO',
    pin: 811202
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Sishua BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Sohjana BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Sono SO',
    pin: 811314
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Sonpai BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'BEGUSARAI',
    subDistrict: 'Ss Barari BO',
    pin: 811106
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Sugba Urown BO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Suggi BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'Supour BO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Surajgaraha SO',
    pin: 811106
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'T Barajor BO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'T Barmasia BO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'T Chhapa BO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Tabha BO',
    pin: 811308
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Tal Saharsa BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Talsharama BO',
    pin: 811302
  },
  {
    state: 'Bihar',
    district: 'BHAGALPUR',
    subDistrict: 'TARAPUR SO',
    pin: 813221
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Tarhari BO',
    pin: 811315
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Taufir BO',
    pin: 811202
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Teghara BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Telia Dih BO',
    pin: 811312
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Telwa Bazar BO',
    pin: 811316
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Tetarhat BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Tetia Bambar BO',
    pin: 811213
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Tihiya BO',
    pin: 811305
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Tikarampur BO',
    pin: 811202
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Tola Bangalwa BO',
    pin: 811212
  },
  {
    state: 'Bihar',
    district: 'JAMUI',
    subDistrict: 'Tola Urba BO',
    pin: 811303
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Urain BO',
    pin: 811309
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Walipur BO',
    pin: 811311
  },
  {
    state: 'Bihar',
    district: 'MUNGER',
    subDistrict: 'Zamin Degree BO',
    pin: 811202
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Aatma BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Abdachak BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Achuara BO',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Agwanpur BO',
    pin: 803214
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ajanaura BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ajaypur BO',
    pin: 803120
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Akair BO',
    pin: 801305
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Akbarpur BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Alawan BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Alinagar SO',
    pin: 803101
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Amba BO',
    pin: 803119
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Amber SO',
    pin: 803101
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Amraura BO',
    pin: 801307
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Andauli BO',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Andhana BO',
    pin: 803113
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Andi BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ant BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Arai Benipur BO',
    pin: 801305
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Arai BO',
    pin: 801304
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Arjunsarthuya BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ashanagar SO',
    pin: 803118
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Asharhi BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ashrafpur BO',
    pin: 801305
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Asta SO',
    pin: 803120
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Asthawan SO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Athmalgola SO',
    pin: 803211
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Atnama BO',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Aungari BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Aunta BO',
    pin: 803303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Babhanbarui BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Badarbali BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Badhauna BO',
    pin: 803108
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Badopur BO',
    pin: 803214
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bahapar BO',
    pin: 801304
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Bahrawan BO',
    pin: 803214
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bain BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bajitpur Khiruti BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bajitpur Mudhari BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bakawa BO',
    pin: 803306
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Bakhtiyarpur SO',
    pin: 803212
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bakra BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bali Belchi BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Banarsibigha BO',
    pin: 803117
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bangpur BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bansdih BO',
    pin: 801307
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bara BO',
    pin: 803117
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Barah BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Barahgawan BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Barai BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Barakhurd BO',
    pin: 803113
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Barandi BO',
    pin: 803119
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Barara BO',
    pin: 803118
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bardih BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bargaon BO',
    pin: 803111
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Barh Court SO',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Barh Rs SO',
    pin: 803214
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Barh SO Patna',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Barnausha BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Baruane BO',
    pin: 803307
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Basniwan BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Baswanbigha BO',
    pin: 803216
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Belchi BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Belchi Sharif BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bele BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bena BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Berhana BO',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Besai Bigha BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Beshwak BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Bhadaur SO Patna',
    pin: 803307
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bhadru BO',
    pin: 803108
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bhagan Bigha BO',
    pin: 803118
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bhagwatpur Karmaur BO',
    pin: 803214
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bhandari BO',
    pin: 803119
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bhatgaon BO',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bhathar SO',
    pin: 801307
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bheria BO',
    pin: 803113
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bhobhi BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bhoklapar BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bhuapur BO',
    pin: 803211
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bhui BO',
    pin: 803117
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Bihari Bigha BO',
    pin: 803214
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Biharsharif HO',
    pin: 803101
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bind BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Birju Milki BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Bodhibigharamghat BO',
    pin: 801305
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Borhog BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Borisarai BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Burhara BO',
    pin: 803212
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Chaknawada BO',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Chaksawar BO',
    pin: 803211
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Chamarbigha BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Chanda BO',
    pin: 803212
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Chandhari BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Chandi SO',
    pin: 803108
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Chandoura BO',
    pin: 803119
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Charuipar BO',
    pin: 803113
  },
  {
    state: 'Bihar',
    district: 'Nalanda',
    subDistrict: 'Chero B.O',
    pin: 811104
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Chero BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Chhabilapur BO',
    pin: 803216
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Chhariari Bujurg BO',
    pin: 801307
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Chhatiana BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Chiksoura BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Chintamanchak BO',
    pin: 803302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Chorsua BO',
    pin: 803115
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Choti Chariari BO',
    pin: 803120
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Dahabigha BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Dahpar Sargaon BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Daily BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Dakshnichak BO',
    pin: 803211
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Damodarpur Waldha BO',
    pin: 801305
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Daniawan Pendapur BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Daniyawan BO',
    pin: 801304
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Dariyapur BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Daruara BO',
    pin: 803216
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Darveshpur BO',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Daulatpur BO',
    pin: 803214
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Dayalpur BO',
    pin: 803108
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Deepnagar BO',
    pin: 803111
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Desna BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Dhabhma BO',
    pin: 803214
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Dhanak Dove BO',
    pin: 803302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Dhangawan BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Dharahara BO',
    pin: 803111
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Dharampur BO',
    pin: 803120
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Dhobdiha BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Dhurgaon BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Diha BO',
    pin: 803120
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Diyawan BO',
    pin: 801304
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Doiya BO',
    pin: 803118
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Dosut BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Dumrawan BO',
    pin: 803216
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Durgapur BO',
    pin: 803115
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ekangerdih BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ekangersarai SO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Ekdanga BO',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Eksara BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Eksari BO',
    pin: 803117
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Fatehpur BO',
    pin: 803211
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Fulelpur BO',
    pin: 803211
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ganpura BO',
    pin: 803113
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Gaurav Nagar BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ghorsrawan BO',
    pin: 803115
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ghostawan BO',
    pin: 803117
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Ghoswari BO',
    pin: 803212
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Gonawan BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Gonkura BO',
    pin: 803108
  },
  {
    state: 'Bihar',
    district: 'Nalanda',
    subDistrict: 'Gopalbad B.O',
    pin: 811104
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Gopalur BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Gorawan BO',
    pin: 803117
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Goror BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Gosaimath BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Gowasa Shikhpura BO',
    pin: 803214
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Gunjarchak BO',
    pin: 803108
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Gurusaranpu BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Habbibpur BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Hargawan BO',
    pin: 803216
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Harnaut SO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Hathidah SO',
    pin: 803301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Hazipur Belaur BO',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Hilsa SO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'Nalanda',
    subDistrict: 'Husaina B.O',
    pin: 811104
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Hussain Pur BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ichhos BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Islampur SO Nalanda',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Itasang Bhadwa BO',
    pin: 803119
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Itaura BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Jagai BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Jagatpur BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Jagdishpur Tiyari BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Jaitpur BO',
    pin: 801307
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Jalalpur BO',
    pin: 803211
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Jamsari BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Jana BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Jear BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Jodhan Bigha BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Juniar BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Kachcharia BO',
    pin: 801307
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Kachiyawan BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Kaila BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Kaila BO',
    pin: 803108
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Kairi Meyar BO',
    pin: 803118
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Kaliyachak BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Kamta BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Kanhaipur BO',
    pin: 803221
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Kanhaiya Ganj BO',
    pin: 801306
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Kapsima BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Karah BO',
    pin: 803117
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Karaipersurai SO',
    pin: 801304
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Karara BO',
    pin: 803302
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Karjan BO',
    pin: 803211
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Karjara BO',
    pin: 803117
  },
  {
    state: 'Bihar',
    district: 'Patna',
    subDistrict: 'Karkain B.O',
    pin: 811104
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Karnauti BO',
    pin: 803212
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Karubigha BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Kathauli BO',
    pin: 803113
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Kathrahi BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Kawa BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Keshopur BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Khaddi Lodipur BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Khaira BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Khaje Itwar Sarai BO',
    pin: 803118
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Khajurar BO',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Khapura BO',
    pin: 801305
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Kharthua BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Khodaganj BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Khojpura BO',
    pin: 801306
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Khorampur BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Khushiyalpur BO',
    pin: 801306
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Kobil BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Kochra BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Koklakchak BO',
    pin: 803113
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Kolawan BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Konand BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Kondi BO',
    pin: 803214
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Korari BO',
    pin: 801304
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Korari BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Korawan BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Koshiyawan BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Kulti BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Lahuar BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Laranpur BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Lemuabad BO',
    pin: 803221
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Lohra BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Machhalduhe BO',
    pin: 803111
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Madanpur BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Madhar BO',
    pin: 803117
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Madhopur BO',
    pin: 803212
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Madhopur BO',
    pin: 803108
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mafi BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Maghra BO',
    pin: 803216
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Mahammadpur BO',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mahanandpur BO',
    pin: 801305
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mahanandpur BO',
    pin: 803216
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mahmuda BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mahuri BO',
    pin: 803111
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mai BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mai Farida BO',
    pin: 803119
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Makrauta BO',
    pin: 801304
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mallikpur BO',
    pin: 803117
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Malpur BO',
    pin: 803301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Malti BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mandachh BO',
    pin: 801306
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Maranchi BO',
    pin: 803301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mari BO',
    pin: 803111
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Masathu BO',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Mekra BO',
    pin: 803221
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Merhma BO',
    pin: 801304
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Meyar BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mighi Nagma BO',
    pin: 803111
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mirchaiganj BO',
    pin: 803111
  },
  {
    state: 'Bihar',
    district: 'Nalanda',
    subDistrict: 'Mirnagar B.O',
    pin: 811104
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mirzapur BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Missi BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Mobarakpur BO',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mogalkuan SO',
    pin: 803118
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mohammadpur BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mohiddinpur BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Mokama SO',
    pin: 803302
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Mokamachauk SO',
    pin: 803302
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Mokamaghat SO',
    pin: 803303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Molanachak BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Molanadih BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mominpur BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Moratalab BO',
    pin: 803118
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'More BO',
    pin: 803302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mukhtarganj BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Muraura BO',
    pin: 803216
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Murgaon BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Murgawan BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Murgiachak BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Musarhi BO',
    pin: 801304
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Musepur BO',
    pin: 803118
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Nadama Tola BO',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Nagarnausa SO',
    pin: 801305
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Nahub BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Nailly BO',
    pin: 803113
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Naima BO',
    pin: 801306
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Naisarai BO',
    pin: 803216
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Nalanda College SO',
    pin: 803101
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Nalanda SO',
    pin: 803111
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Nanand BO',
    pin: 803115
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Nanaura BO',
    pin: 803113
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Narari BO',
    pin: 803120
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Narayanpur BO',
    pin: 801306
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Narsanda BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Nayabigha BO',
    pin: 803211
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Nehusa BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Nekpur BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Nepura BO',
    pin: 803115
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Nerut BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Nimthu BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Niriatulsipur BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Nirpur BO',
    pin: 803111
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Nishchalganj BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Noawan BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'Nalanda',
    subDistrict: 'NOHSA BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'NTPC Barh SO',
    pin: 803215
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Nursarai SO',
    pin: 803113
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Onda BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ope BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ordnance Factory Rajgir SO',
    pin: 803121
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Oriyawan BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Pachauri BO',
    pin: 803216
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Pachoura BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Paijuna BO',
    pin: 803302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Palatpura BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Panchlowa BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Pandarak SO',
    pin: 803221
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Panhar BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Parasdiha BO',
    pin: 801305
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Pariouna BO',
    pin: 803113
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Paroha BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Parsawan BO',
    pin: 803214
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Parthu BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Parwalpur SO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Pasanchi BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Pathana BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Pathraura BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Pawa BO',
    pin: 803115
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Pawapuri SO',
    pin: 803115
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Peshaur BO',
    pin: 803119
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Pillich BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Pirbarhauna BO',
    pin: 801305
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Pitamberpur BO',
    pin: 801306
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Poari BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Prahladpur BO',
    pin: 803306
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Pratappur BO',
    pin: 803120
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Puna BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Punha BO',
    pin: 803119
  },
  {
    state: 'Bihar',
    district: 'Nalanda',
    subDistrict: 'Pyarepur B.O',
    pin: 811104
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Pyarepur BO',
    pin: 803115
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Rahimapur BO',
    pin: 803211
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Rahui SO',
    pin: 803119
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Raily BO',
    pin: 803221
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Raipur Koil Bigha BO',
    pin: 803120
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Raisa BO',
    pin: 803108
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Rajgir Kund BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Rajgir SO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ramchandrapur SO',
    pin: 803216
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Ramnagar Diara BO',
    pin: 803212
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Ramnagar Karai Kachhar BO',
    pin: 803211
  },
  {
    state: 'Bihar',
    district: 'Nalanda',
    subDistrict: 'Ramnathpur B.O',
    pin: 811104
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Rampur Dumra BO',
    pin: 803301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ranabigha BO',
    pin: 803216
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Ranabigha BO',
    pin: 803214
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ranipur BO',
    pin: 801301
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Rasalpur BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Rasisa BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Rawaich BO',
    pin: 803212
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Rukhai BO',
    pin: 803108
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Rupas BO',
    pin: 803211
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Rustampur BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sabait BO',
    pin: 803111
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sabnahua BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sabnima Khurd BO',
    pin: 803212
  },
  {
    state: 'Bihar',
    district: 'Nalanda',
    subDistrict: 'Sahari B.O',
    pin: 811104
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sahdeopur Chaturbhujpur BO',
    pin: 803306
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Sahri BO',
    pin: 803214
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Saistapur BO',
    pin: 803211
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sakraurah BO',
    pin: 803111
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Saksohra BO',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sakunat SO',
    pin: 803101
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Salarpur BO',
    pin: 801305
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Salempur BO',
    pin: 801304
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Salepur BO',
    pin: 801306
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Samya Kurmichak BO',
    pin: 803306
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Samyagarh SO',
    pin: 803306
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sanda BO',
    pin: 801303
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sarbahadi BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sare BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Sarhan BO',
    pin: 803214
  },
  {
    state: 'Bihar',
    district: 'Nalanda',
    subDistrict: 'Sarmera S.O',
    pin: 811104
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sarthua BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Satnag BO',
    pin: 803108
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Satya Bhaiya BO',
    pin: 803212
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Shahjahanpur BO',
    pin: 801305
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Shankardih BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Shawani BO',
    pin: 803211
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Shivnar BO',
    pin: 803302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sigaryawn BO',
    pin: 801304
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Silao SO',
    pin: 803117
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sinama BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Singthu BO',
    pin: 803216
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sirhari BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sirnawan BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sirsi BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sirsi Dihra BO',
    pin: 803110
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sithaura BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sohsarai SO',
    pin: 803118
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sonchari BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sonsa BO',
    pin: 803119
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Sosandi BO',
    pin: 803119
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Soure BO',
    pin: 803114
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Suhawanpur BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'PATNA',
    subDistrict: 'Tajnipur BO',
    pin: 803213
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Tartar BO',
    pin: 803302
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Telhara SO Nalanda',
    pin: 801306
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Tetrawan BO',
    pin: 803216
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Tinalodipur BO',
    pin: 801305
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Tiuri BO',
    pin: 803216
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Tola Sohan Rai BO',
    pin: 803212
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Top BO',
    pin: 801304
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Tulsigarh BO',
    pin: 803108
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Tungi BO',
    pin: 803216
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Uttarnama BO',
    pin: 803119
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Uttarthu BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Veerayatan BO',
    pin: 803116
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Waiyao BO',
    pin: 803107
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Yogipur BO',
    pin: 801302
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Abgil Chandey BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Adampur BO',
    pin: 803109
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Afni BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Akarha BO',
    pin: 811304
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Akaunabazar BO',
    pin: 805123
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Amawan BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Ambari BO',
    pin: 811103
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Amethi BO',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Andharwari BO',
    pin: 805125
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Ankari BO',
    pin: 805122
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Apsai BO',
    pin: 805108
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Aranikesopur BO',
    pin: 805109
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Arawan BO',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Arha BO',
    pin: 805124
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Arnadi BO',
    pin: 805129
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Aruri BO',
    pin: 805132
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Asarhi BO',
    pin: 805111
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Asthama BO',
    pin: 811304
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Asthana BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Audhey BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'B Garhrampur BO',
    pin: 805126
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'B Makdumpur BO',
    pin: 805128
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Babhanbigha BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Babhnaur BO',
    pin: 805111
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Badi BO',
    pin: 805105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Baghibardiha BO',
    pin: 805132
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Bahachha BO',
    pin: 811304
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Bahadurganj BO',
    pin: 805105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Bahadurpur BO',
    pin: 805125
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Baijdah BO',
    pin: 805128
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Baijnathpur BO',
    pin: 805103
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Bajitpur BO',
    pin: 805108
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Baksanda BO',
    pin: 805126
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Baksoti BO',
    pin: 805121
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Bansgopal BO',
    pin: 805125
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Barasolapur BO',
    pin: 805101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Barat Sarai BO',
    pin: 805103
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Barbigha SO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Bargaon BO',
    pin: 805122
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Barhauna BO',
    pin: 805103
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Bauri BO',
    pin: 805113
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'BBartara BO',
    pin: 811107
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Belar BO',
    pin: 805113
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Belaw BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Belchhi BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Bermi BO',
    pin: 805104
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Bhadausi BO',
    pin: 811107
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Bhadokhara BO',
    pin: 805123
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Bhadous BO',
    pin: 811107
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Bhadseni BO',
    pin: 805129
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Bhagwanpur BO',
    pin: 805105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Bhanail BO',
    pin: 805121
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Bhatta BO',
    pin: 805113
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Bhattagarh BO',
    pin: 805107
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Bhojdih BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Biju Bigha BO',
    pin: 805122
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Bilari BO',
    pin: 805130
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Billo BO',
    pin: 811107
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Biman BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Bindidih BO',
    pin: 803109
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Birnawan BO',
    pin: 805113
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Bisunpur BO',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Bisunpur BO',
    pin: 805102
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Brindaban BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Budhauli BO',
    pin: 805124
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Budhwara BO',
    pin: 805121
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Chackwai BO',
    pin: 805130
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Chakandra BO',
    pin: 811304
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Chakdin BO',
    pin: 811103
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Chamotha BO',
    pin: 805125
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Chandradeep BO',
    pin: 805124
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Charuawan BO',
    pin: 811103
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Chauby BO',
    pin: 805127
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Chewara SO',
    pin: 811304
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Chhatiara BO',
    pin: 811304
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Chhatihar BO',
    pin: 805111
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Chhota Jamura BO',
    pin: 805103
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Chhotashekhpur BO',
    pin: 805103
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Chhoti Amawa BO',
    pin: 805121
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Chhotipali BO',
    pin: 805103
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Chordargah BO',
    pin: 811304
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Chorwar BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Chowar BO',
    pin: 805128
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'CR Barbigha BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'D Garh Itpakwa BO',
    pin: 805106
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'D Lodipur BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dariyapur BO',
    pin: 805129
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dariyapur BO',
    pin: 805130
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Datraul BO',
    pin: 805124
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Deoley',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dergoan BO',
    pin: 805113
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Derma BO',
    pin: 805112
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dermobara BO',
    pin: 805104
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dhamani BO',
    pin: 805125
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dhamul SO',
    pin: 805101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dhanar BO',
    pin: 805101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dhandhar BO',
    pin: 805129
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Dhanuki BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dhanwan BO',
    pin: 805103
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dharampur BO',
    pin: 805128
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dharhara BO',
    pin: 805101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dhewdha BO',
    pin: 805132
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Dih Kushumbha BO',
    pin: 811107
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Diha BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Diri BO',
    pin: 805112
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dohra BO',
    pin: 805109
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dona BO',
    pin: 805103
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dosut BO',
    pin: 805132
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dumari BO',
    pin: 805121
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dumrawan SO',
    pin: 805132
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Dumri BO',
    pin: 805128
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Ekrama BO',
    pin: 811304
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Esuwa BO',
    pin: 811102
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Frahimabad BO',
    pin: 805112
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'G B Kendua Konihar BO',
    pin: 805122
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Gabai BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Gagaur BO',
    pin: 811102
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Gagri BO',
    pin: 811304
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Gazipur BO',
    pin: 805105
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Ghariya BO',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Ghogha BO',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Ghostama BO',
    pin: 805104
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Gilani BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Giriak SO',
    pin: 803109
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Gonawan BO',
    pin: 805111
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Gopalpur BO',
    pin: 803109
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Govindpur SO Nawada',
    pin: 805102
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Gulani BO',
    pin: 805124
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Hasapur BO',
    pin: 805111
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Hassari BO',
    pin: 811304
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Hasua SO',
    pin: 805103
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Hathiyama BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Hussainabad BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ibrahimpur BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Jalalpur BO',
    pin: 805130
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Jean Bigha BO',
    pin: 811103
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Juri BO',
    pin: 805124
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'K Milki Chak BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Kachhiyana BO',
    pin: 811107
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Kadhar BO',
    pin: 805106
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Kadirganj SO',
    pin: 805104
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Kahuara BO',
    pin: 805109
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Kaithwan BO',
    pin: 811107
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Kajifatuchak BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kajoor BO',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'Sheikhpura',
    subDistrict: 'Kamta B.O',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Karandey BO',
    pin: 811304
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Kare BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Karisowa BO',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Karki BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Kasar BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Kashichak SO',
    pin: 805113
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Katari BO',
    pin: 811102
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Katauna BO',
    pin: 805130
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Katrisarai SO',
    pin: 805105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Kawakol SO',
    pin: 805106
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Kenar BO',
    pin: 805128
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Kenar Kalan BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Kenasari BO',
    pin: 805123
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Keshauri BO',
    pin: 805132
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Kewaii BO',
    pin: 805106
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Kewti BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Khakhari BO',
    pin: 805113
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Khalsadhibari BO',
    pin: 805104
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Khanpur BO',
    pin: 803109
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Khanpur BO',
    pin: 805129
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Khanwan BO',
    pin: 805122
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kharaua BO',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Kharghara BO',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Kharsari BO',
    pin: 805106
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Khirwan BO',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Kishanpur BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Kochagoan BO',
    pin: 805130
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Konadpur BO',
    pin: 805124
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Konibar BO',
    pin: 805122
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Koriauna BO',
    pin: 805126
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Kosi SO Nawada',
    pin: 805107
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Kosla BO',
    pin: 805109
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Kother BO',
    pin: 805128
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Kuhila BO',
    pin: 805126
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Kundabhalua BO',
    pin: 805107
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Kurkihar BO',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Kusherhi BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Kushumbha BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Kusmuhar BO',
    pin: 805126
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Kuthaut BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Lalbigha SO',
    pin: 805108
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Lalpur BO',
    pin: 805106
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Lkhamohna BO',
    pin: 805121
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Lodipur BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Lohan BO',
    pin: 811304
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Lond BO',
    pin: 805122
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'M H Chack BO',
    pin: 805128
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Madhurapur BO',
    pin: 805106
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Mafo BO',
    pin: 811102
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Mahapurchhab BO',
    pin: 805106
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Mahnadpur BO',
    pin: 805111
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Mahrawan BO',
    pin: 805107
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Mahugain BO',
    pin: 805128
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Maira Barich BO',
    pin: 805105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Makanpur BO',
    pin: 805130
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Makhar BO',
    pin: 805112
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Maldah BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Malwa BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Mandana BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Maninda BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Manjaur BO',
    pin: 805130
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Manjhauli BO',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Manjhauli BO',
    pin: 805127
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Manjhaway BO',
    pin: 805129
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Manjhila BO',
    pin: 805106
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Marara BO',
    pin: 805107
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Marue BO',
    pin: 805104
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Marwa BO',
    pin: 805124
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Masaurha BO',
    pin: 805109
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Masodha BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Maur BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Mehus SO',
    pin: 811102
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Merkuri BO',
    pin: 805122
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Meskaur BO',
    pin: 805122
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Mheshdih BO',
    pin: 805121
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Millky BO',
    pin: 805130
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Mobarakpur BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Mohani BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Mosama BO',
    pin: 805130
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Mow Bindidah BO',
    pin: 803109
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'N Purwaritola BO',
    pin: 805106
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Nadiyama BO',
    pin: 811107
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Nagwan BO',
    pin: 805128
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Nanaura BO',
    pin: 805112
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Nardiganj SO',
    pin: 805109
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Narhat SO',
    pin: 805122
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Navinagar Kakrar BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Nawada Kutchery SO',
    pin: 805111
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Nawadha HO',
    pin: 805110
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Nemdarganj SO',
    pin: 805121
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Nimi SO',
    pin: 811103
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Nromurar BO',
    pin: 805130
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Ohari BO',
    pin: 805104
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Okhariyagolab BO',
    pin: 805106
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Onama BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Oraina BO',
    pin: 805123
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Orhanpur SO',
    pin: 805123
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'ORRO BO',
    pin: 805109
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Pachana BO',
    pin: 811107
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Pachra BO',
    pin: 805111
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Paharia BO',
    pin: 811103
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Paharpur BO',
    pin: 805126
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Pain BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Paingari BO',
    pin: 805130
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Pakaribarwan SO',
    pin: 805124
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Panhesa BO',
    pin: 811103
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Panley BO',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Parnawada SO',
    pin: 805112
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Parwati BO',
    pin: 805108
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Pasarhi BO',
    pin: 805128
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Pathraitha BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Paura BO',
    pin: 805104
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Pharpar BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Phatehpurmore BO',
    pin: 805126
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Phuldih BO',
    pin: 805106
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Pinjari BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Pithauri BO',
    pin: 805112
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Prama BO',
    pin: 805109
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'Pratappur BO',
    pin: 811107
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Punther BO',
    pin: 805103
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Purani BO',
    pin: 803109
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Purankama BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'R Mahsaura BO',
    pin: 811107
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Railer BO',
    pin: 803109
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Raja Bigha BO',
    pin: 805122
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Rajan BO',
    pin: 805122
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Rajapur Saur BO',
    pin: 805104
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Rajauli SO',
    pin: 805125
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Rajhat SO',
    pin: 805126
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Rajwara BO',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Ramjan Pur BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Rampur Sinday BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Ramraichack BO',
    pin: 805127
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Rasalpur BO',
    pin: 805122
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Rayes BO',
    pin: 805124
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Reula BO',
    pin: 805109
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Roh BO',
    pin: 805107
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Rupau BO',
    pin: 805107
  },
  {
    state: 'Bihar',
    district: 'LAKHISARAI',
    subDistrict: 'S Imam Nagar BO',
    pin: 811107
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'S Marighgawa BO',
    pin: 805127
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'S Nawada BO',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Sabhari BO',
    pin: 805123
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Sachaul BO',
    pin: 805103
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Sadarpur BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Sadipur BO',
    pin: 805104
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Sahiya BO',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Samas BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Sambey BO',
    pin: 805130
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Samharigarh BO',
    pin: 805132
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Sanaiya BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Sarba BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Sarkanda BO',
    pin: 805102
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Sarsu BO',
    pin: 805109
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Sasaur BO',
    pin: 811102
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Seotar BO',
    pin: 805109
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'SGhuskari BO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Sheikhpura Bazar SO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Sheikhpura R S SO',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Sheikhpura SO Sheikhpura',
    pin: 811105
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Shekhodaura BO',
    pin: 805106
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Sherpur BO',
    pin: 805127
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Sihin BO',
    pin: 805103
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Simariya BO',
    pin: 805124
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Singar BO',
    pin: 805125
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Singhaul BO',
    pin: 811102
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Singhwara BO',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Sirari SO',
    pin: 811107
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Sirdala SO',
    pin: 805127
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Sisma BO',
    pin: 805111
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Siur BO',
    pin: 805107
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Sohdi BO',
    pin: 811304
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Sonsihari BO',
    pin: 805123
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Spur Gowasa BO',
    pin: 805122
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Subhanpur BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Sughari BO',
    pin: 805126
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Sundri Dumari BO',
    pin: 805106
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Targir BO',
    pin: 805125
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Tarwan SO',
    pin: 805128
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Tetariya BO',
    pin: 805122
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Tetariya BO',
    pin: 805102
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Teus BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Teyar BO',
    pin: 805112
  },
  {
    state: 'Bihar',
    district: 'SHEIKHPURA',
    subDistrict: 'Toygarh BO',
    pin: 811101
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Tungi SO',
    pin: 805129
  },
  {
    state: 'Bihar',
    district: 'NALANDA',
    subDistrict: 'Ugaban BO',
    pin: 811103
  },
  {
    state: 'Bihar',
    district: 'NAWADA',
    subDistrict: 'Warisaliganj SO',
    pin: 805130
  },
  {
    state: 'Bihar',
    district: 'GAYA',
    subDistrict: 'Wazirganj SO Gaya',
    pin: 805131
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Abhirampur BO',
    pin: 852213
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Abhuar BO',
    pin: 852138
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Achalpur BO',
    pin: 852109
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Aina BO',
    pin: 852216
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Ajgeba BO',
    pin: 852221
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Akbarpur BO',
    pin: 852116
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Alani BO',
    pin: 852126
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Amarpur BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Amarpura BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Amha BO',
    pin: 852108
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Amha BO',
    pin: 852218
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Amrita BO',
    pin: 852217
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Anandpura BO',
    pin: 852115
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Andouli BO',
    pin: 852105
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Aran BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Arapatti BO',
    pin: 852216
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Arraha BO',
    pin: 852121
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Atalkha BO',
    pin: 852217
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Aurai BO',
    pin: 852116
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'B Bhelahi BO',
    pin: 852216
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Babhangama BO',
    pin: 852139
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Babhani Bhelwa BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Baghla BO',
    pin: 852139
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Baghwa BO',
    pin: 852216
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'BAIDYANATHPUR',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Baijnathpur BO',
    pin: 852221
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Baira BO',
    pin: 852123
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Baisa BO',
    pin: 852215
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Baisi BO',
    pin: 852215
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Bajraha BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Bakaur BO',
    pin: 852130
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Bakunia BO',
    pin: 852123
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Balbhadrapur BO',
    pin: 854339
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Balha BO',
    pin: 852130
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Balhampur BO',
    pin: 852127
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Balia BO',
    pin: 852217
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Baljora BO',
    pin: 852139
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Baltharwa BO',
    pin: 852105
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Balua Bazar SO',
    pin: 854339
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Balwahat BO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Banailipatti BO',
    pin: 854340
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Banania BO',
    pin: 852105
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Bangaon SO Saharsa',
    pin: 852212
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Bansgopal BO',
    pin: 852213
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Bara BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Barahi Hasanpur BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Barahihat BO',
    pin: 852130
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Barail BO',
    pin: 852110
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Baraith BO',
    pin: 852217
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Bargaon BO',
    pin: 852217
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Barhara',
    pin: 847452
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Barharia BO',
    pin: 852123
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Barhsher BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Bariahi BO',
    pin: 852212
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Bariahi BO',
    pin: 852132
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Bariarpur BO',
    pin: 852127
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Barkurwa BO',
    pin: 852139
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Barsam BO',
    pin: 852221
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Barsam BO',
    pin: 852217
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Basaha BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Basantpur BO',
    pin: 854340
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Basanwara BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Basauna BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Basbitti BO',
    pin: 852130
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Baskhora BO',
    pin: 852133
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Basnahi BO',
    pin: 852115
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Basudeva BO',
    pin: 852121
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Bathanparsa BO',
    pin: 852132
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Bauraha BO',
    pin: 852215
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Bauraha BO',
    pin: 852138
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'BBarhona BO',
    pin: 852213
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Behariganj SO',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Behrari BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Behri BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Bela Terha BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Belari BO',
    pin: 852114
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'BELHA',
    pin: 847452
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Belhi',
    pin: 847452
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Belhi Teghra BO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Belo BO',
    pin: 852114
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Belwara BO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Benghaha BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Besarh BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'BFulkaha BO',
    pin: 852214
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'BGarhia BO',
    pin: 852121
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Bhaddi Durgapur BO',
    pin: 852217
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Bhadol BO',
    pin: 852114
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Bhagwanpur BO',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Bhairo Patti BO',
    pin: 852114
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Bhangha Chandpur BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Bhaptiyahi Bazar SO',
    pin: 852105
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Bharahi BO',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Bharouli Dhakjhari BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Bhatauni BO',
    pin: 852127
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Bhatkhora BO',
    pin: 852114
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Bhatni BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Bhatrandha BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Bhavdeva BO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Bhawanipur BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Bhawanipur Patni BO',
    pin: 852125
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Bhelwa BO',
    pin: 852126
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Bheropatti BO',
    pin: 852218
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Bhimnagar Bairrage SO',
    pin: 854338
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Bhimpur BO',
    pin: 854339
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Bhirkhi BO',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Bhura BO',
    pin: 852139
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Bijalpur BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Bina BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Biratpur BO',
    pin: 852217
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Biri Rampal BO',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Birpur SO Supaul',
    pin: 854340
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Bishanpur BO',
    pin: 852105
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Bishanpur BO',
    pin: 852107
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Bishanpur BO',
    pin: 852214
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Bishanpurarar BO',
    pin: 852115
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Bispatti BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'BKorhlahi BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Bnmu University Madhepura SO',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'BSPatti BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'BTekhti BO',
    pin: 852121
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Budhma SO',
    pin: 852114
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Cahndpiper BO',
    pin: 852105
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Chainpur BO',
    pin: 852212
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Chainsinghpatti BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Chandour BO',
    pin: 852221
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Chandryan Dharhara BO',
    pin: 852123
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Chapraon SO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Charne BO',
    pin: 852214
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Chatra BO',
    pin: 852115
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Chauhatta BO',
    pin: 852138
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Chausa SO Madhepura',
    pin: 852213
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Chikni Phulkaha BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Chilauni BO',
    pin: 852125
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Chiraouri BO',
    pin: 852213
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Chitti BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Chitti Hanuman Nagar BO',
    pin: 852215
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Chouraha BO',
    pin: 852132
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Chunnimal BO',
    pin: 852137
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Dabhari BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Dagmara',
    pin: 847451
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Daharia BO',
    pin: 852137
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Damgarhi BO',
    pin: 852221
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Daparkha BO',
    pin: 852139
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Darhar BO',
    pin: 852123
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Daulatpur BO',
    pin: 852215
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Dehad BO',
    pin: 852129
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Devipur BO',
    pin: 852109
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Dhabauli SO',
    pin: 852107
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Dhamsena BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Dhaneshpur BO',
    pin: 852213
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Dhanpura BO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Dharhara BO',
    pin: 852109
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Dhrampur BO',
    pin: 852123
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Dhurgaon BO',
    pin: 852114
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Dighia',
    pin: 847452
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Dighiya BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Dinapatti BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Dinapatti BO',
    pin: 852218
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Diwari BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'DKalan BO',
    pin: 852213
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Dumari BO',
    pin: 852215
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Dumra BO',
    pin: 852130
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Durgapur BO',
    pin: 852116
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Ekma BO',
    pin: 852110
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Ekrah BO',
    pin: 852123
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Fatehpur BO',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Finglas BO',
    pin: 852111
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Gahumani BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Gamaharia Rampur BO',
    pin: 852221
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Gamaharia SO',
    pin: 852108
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Gamail  BO',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Ganaura BO',
    pin: 852133
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Ganeshpur BO',
    pin: 852133
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Gangapur BO',
    pin: 852105
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Gangapur BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Gangapur BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Ganpatganj SO Supaul',
    pin: 852109
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Garh Baruari SO',
    pin: 852110
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Garhia BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Garhia Vijaypur BO',
    pin: 852221
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'GBihra BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Gelhia Bishanpur BO',
    pin: 852218
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Ghailar BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Ghiwaha BO',
    pin: 852137
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Ghoghanpatti BO',
    pin: 852107
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Ghoghsam BO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Ghordaur BO',
    pin: 852127
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Ghosai BO',
    pin: 852213
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Ghuran BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Gidarahi BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Gidha BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Girdharpatti BO',
    pin: 852137
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Golma BO',
    pin: 852107
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Gonaha BO',
    pin: 852125
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Gopalpur BO',
    pin: 852220
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Gopalpur BO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Gordah BO',
    pin: 852127
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Gorela BO',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Goriari BO',
    pin: 852127
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Goshpur BO',
    pin: 852215
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Goth Bardaha BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Govindpur BO',
    pin: 852125
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Govinpur BO',
    pin: 852214
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Guria BO',
    pin: 852214
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Gwalpara BO',
    pin: 852137
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Gwalpara SO',
    pin: 852115
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Hanuman Nagar Chouraha BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Hareshwari Dighi BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Harewa BO',
    pin: 852126
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Hariharpur BO',
    pin: 852137
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Haripur BO',
    pin: 852111
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Haripur BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Hariraha BO',
    pin: 852215
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Hariyahi',
    pin: 847452
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Hathionda BO',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Hati BO',
    pin: 852130
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Hatwaria BO',
    pin: 852108
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Herdi BO',
    pin: 852108
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'HKala BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Hulas BO',
    pin: 852111
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Israin BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Itahari BO',
    pin: 852126
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Itahari BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Jadia SO',
    pin: 852214
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Jadua Patti BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Jagjiwan Ashram BO',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Jalsima BO',
    pin: 852217
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Jamal Nagar BO',
    pin: 852126
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Jamhara BO',
    pin: 852217
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Janak Lal Basanpatti BO',
    pin: 852215
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Janardanpur SO',
    pin: 852133
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Jaraila BO',
    pin: 852139
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Jeeta Pur BO',
    pin: 852114
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Jhalari BO',
    pin: 852115
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Jhanjhari BO',
    pin: 852115
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Jharkaha BO',
    pin: 852132
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Jhila Dumari BO',
    pin: 852111
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Jia Ram Raghopur SO',
    pin: 852111
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Jirwa BO',
    pin: 852132
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Jirwa Madheli BO',
    pin: 852132
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Jiwachhpur BO',
    pin: 852125
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Jiwachpur BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Jobaha BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Jolahaniya BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Jorgama BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Kabira BO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Kachra Karahia BO',
    pin: 852221
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Kadampura BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Kahra BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Kalhua BO',
    pin: 852132
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Kamaldaha BO',
    pin: 852105
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'KAMALPUR',
    pin: 847451
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Kamargama BO',
    pin: 852218
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Kamrail BO',
    pin: 852133
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Kanp BO',
    pin: 852221
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Kapasia BO',
    pin: 852107
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Karauti Bazar BO',
    pin: 852220
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Karibiahi BO',
    pin: 852139
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Kariho BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Karjain Bazar SO',
    pin: 852215
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Karupur BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Kataia Mahe BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Kataia Satokar BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Kataiya BO',
    pin: 852123
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Kathbanshi BO',
    pin: 852110
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Kathdumar BO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Kathotia BO',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'KBalua BO',
    pin: 852216
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Kedlipatti BO',
    pin: 852123
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Kenjari BO',
    pin: 852129
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Khajurah BO',
    pin: 852217
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Khajuri BO',
    pin: 852221
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Khamauti BO',
    pin: 852127
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Khara Budhma BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Kharagpur BO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Kharail BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Kherho BO',
    pin: 852116
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Khojuri Matihani BO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Khokhnaha BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Khorma BO',
    pin: 852133
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Khunti BO',
    pin: 852137
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Khurhan Mal BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Kishanpur BO',
    pin: 852217
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'KMillik BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Koparia BO',
    pin: 852126
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Koria Patti BO',
    pin: 852214
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Koriyarh BO',
    pin: 852108
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Korlahi BO',
    pin: 852215
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Koshlipatti BO',
    pin: 852108
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'KRatwara BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'KSPur BO',
    pin: 852220
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Kumarkhand SO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Kumiahi BO',
    pin: 852139
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'KUNAUALI BAZAR SO',
    pin: 847451
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'KUNAULI',
    pin: 847451
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Kundah BO',
    pin: 852216
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Kunjouri BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Kurshandi BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Kushaha BO',
    pin: 852139
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'L Bhagwati BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Lagma Deorhi BO',
    pin: 852129
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Laharnia BO',
    pin: 852139
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Lakshminia BO',
    pin: 854339
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Lalganj BO',
    pin: 852137
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Lalkuria BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Lalpur',
    pin: 847452
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Lalpur BO',
    pin: 852109
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Lalpur BO',
    pin: 852137
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Lalpur Sarropatti BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Laskari BO',
    pin: 852220
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Latauna BO',
    pin: 852139
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Laua Lagam BO',
    pin: 852213
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Laukaha BO',
    pin: 852110
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Laurh BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Laxmipur Bisharia BO',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Laxmipur BO',
    pin: 852218
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Laxmipur Lalchand BO',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Lc Ashthan BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Madhepura Collectorate SO',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Madhepura MDG',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Madhuban BO',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Madhubani BO',
    pin: 852125
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Madhukarchak BO',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Mahadeo Asthan BO',
    pin: 852109
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Maheshpur BO',
    pin: 852109
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Maheshua BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Mahishi SO',
    pin: 852216
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Mahkhar BO',
    pin: 852127
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Mahmooda BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Mahua Bazar BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Mahulia BO',
    pin: 852214
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Maina BO',
    pin: 852129
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Maina Gram BO',
    pin: 852216
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Majarhat BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Makdampur BO',
    pin: 852213
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Makuna BO',
    pin: 852110
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Malarh BO',
    pin: 852138
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Malhanwa BO',
    pin: 852139
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Mali BO',
    pin: 852129
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Maliya BO',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Manganj Bazar BO',
    pin: 852214
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Manganj BO',
    pin: 852214
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Mangarwara BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Mangwar SO',
    pin: 852217
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Manhara Sukhashan BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Manikpur BO',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Manjhaul BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Manjoura BO',
    pin: 852116
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Manoharpatti',
    pin: 847452
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Manpur BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Manuar BO',
    pin: 852216
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Maoura Ramnagar BO',
    pin: 852132
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Marauna BO',
    pin: 852133
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Mathahi SO',
    pin: 852121
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Matiayari BO',
    pin: 854339
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Maujaha BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'MBaghaili BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Menha Khadimpur BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Mirchaibari BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Mirjawa BO',
    pin: 852139
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'MKahra BO',
    pin: 852107
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Mobarakpur BO',
    pin: 852126
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Mohamadpur BO',
    pin: 852115
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Mohania BO',
    pin: 852110
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Mohanpur BO',
    pin: 852137
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Mohanpur BO',
    pin: 852123
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Mohanpur Choumukh BO',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Mohanpur Dudhela BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Mohmmad Ganj BO',
    pin: 852137
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Mokma BO',
    pin: 852217
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Monga Sihol BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Morsanda BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Motipur BO',
    pin: 852215
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Mouahi',
    pin: 847452
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Mungraha',
    pin: 847452
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Muradpur BO',
    pin: 852123
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Muraut BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Murho BO',
    pin: 852114
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Murli Basantpur BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Murli BO',
    pin: 852105
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Murli Chandwa BO',
    pin: 852220
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Murliganj Bazar BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Murliganj SO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Murliganj Tola BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'N Bhagipur BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Nandalali BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Narahi BO',
    pin: 852138
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Narainpur BO',
    pin: 852111
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Narayanpur BO',
    pin: 852216
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Nariyarh BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Narsingbag BO',
    pin: 852114
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Nauhatta SO',
    pin: 852123
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Naulakhi BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Nauwa Bakhar BO',
    pin: 852138
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Naya Nagar BO',
    pin: 852220
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Naya Tola BO',
    pin: 852116
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Nemua BO',
    pin: 852130
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Nirmali BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Nirmali SO',
    pin: 847452
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Noneti BO',
    pin: 852217
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Orahi BO',
    pin: 852108
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Orlaha Bazitpur BO',
    pin: 852139
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Paharpur BO',
    pin: 852127
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Paina BO',
    pin: 852213
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Pakri BO',
    pin: 852218
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Pama BO',
    pin: 852107
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Panchgachiya SO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Pandeypatti BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Pararia BO',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Pararia BO',
    pin: 852129
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Parikonch',
    pin: 847452
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Pariyahi BO',
    pin: 852137
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Parmanandpur BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Parri BO',
    pin: 852212
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Parsa Madho BO',
    pin: 852138
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Parsharma BO',
    pin: 852130
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Parwa BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Pastpar BO',
    pin: 852107
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Patarghat BO',
    pin: 852107
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Pathra BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Patori BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Patori BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Patuaha BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Peernagar BO',
    pin: 852115
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Persa BO',
    pin: 852218
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Persa Garhi BO',
    pin: 852214
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Phulaut BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Phulkahi BO',
    pin: 852111
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Phulwaria BO',
    pin: 852105
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Pipra Bazar SO',
    pin: 852218
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Piprahi BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Piprakhurd BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'PNPur BO',
    pin: 852114
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Pokhram BO',
    pin: 852114
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'PPrayag BO',
    pin: 852214
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Pratapganj SO Supaul',
    pin: 852125
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Puraini Bazar SO',
    pin: 852116
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Puraini BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Purshotampur BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Radha Nagar BO',
    pin: 852111
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Raghunath Pur BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Raghunathpur BO',
    pin: 852214
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Raharia BO',
    pin: 852105
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Rahta BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Rahta Chamukh BO',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Rahua BO',
    pin: 852116
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Rahua BO',
    pin: 852127
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Rahuamani BO',
    pin: 852212
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Raibhir BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Rajanpur BO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Rajeshwari BO',
    pin: 852214
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Rajni Babhangama BO',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Rajni BO',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Rajpur BO',
    pin: 813102
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Rakia BO',
    pin: 852110
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Ram Bishanpur BO',
    pin: 852111
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Ramganj BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Ramnagar Bazar BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Ramnagar Bharna BO',
    pin: 852123
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Ramnagar BO',
    pin: 852108
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Rampatti BO',
    pin: 852114
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Rampur BO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Rampur BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Rampur BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Rampur Khora BO',
    pin: 852220
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Ranipatti BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Rasalpur BO',
    pin: 852123
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Rasalpur BO',
    pin: 852129
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Ratanpatti BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Ratanpura BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Ratanpura BO',
    pin: 852215
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Ratauli BO',
    pin: 852138
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Rauta BO',
    pin: 852221
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'RBarateni BO',
    pin: 852220
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'RNKhwan BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'RTulsiahi BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Rupanagar BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Rupauli Jiwachpur BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Rupauli Lalpatti BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Sabaila BO',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Saharsa Basti BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Saharsa Bazar SO',
    pin: 852201
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Saharsa Collec SO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Saharsa DistBoard SO',
    pin: 852201
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Saharsa HO',
    pin: 852201
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Saheban BO',
    pin: 854338
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Sahjadpur BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Sahpur Prithbi Patti BO',
    pin: 852111
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Sahsoul BO',
    pin: 852129
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Sahugarh BO',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Sahuria BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Sahuria BO',
    pin: 852221
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Sakarpura BO',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Sakhua BO',
    pin: 852218
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Sakra Paharpur BO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Salkhua Bazar SO',
    pin: 852126
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Samda BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Sanskrit Nirmali BO',
    pin: 854339
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Sapardah BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Saraigarh BO',
    pin: 852105
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Sarauni BO',
    pin: 852216
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Sarauni Kala BO',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Sarbella BO',
    pin: 852127
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Sardiha BO',
    pin: 852127
  },
  {
    state: 'Bihar',
    district: 'KISHANGANJ',
    subDistrict: 'Sarojabela',
    pin: 847452
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Saronja BO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Sattar BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'SBToli BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'SDakshinwari BO',
    pin: 852121
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Shah Alam Nagar SO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Shahpur BO',
    pin: 852115
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Shahpur BO',
    pin: 852129
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Shahpur Manjhol BO',
    pin: 852123
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Shankarpur Bazar SO',
    pin: 852132
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Shankarpur BO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Shankarpur BO',
    pin: 852132
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Shyam BO',
    pin: 852220
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Sigion BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Sihaul BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Sikarhatta',
    pin: 847451
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Simaria BO',
    pin: 852218
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Simraha BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Simrahi Bazar BO',
    pin: 852111
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Simri Bakhtiarpur SO',
    pin: 852127
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Simri BO',
    pin: 852127
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Singhar BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Singheshwar SO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Singihaun BO',
    pin: 852138
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Sirsia BO',
    pin: 852101
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Sisai BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Sisauna BO',
    pin: 852216
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Sitanabad BO',
    pin: 852106
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Sitapur BO',
    pin: 854339
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Siyana BO',
    pin: 852105
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'SMadheli BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'SMillick BO',
    pin: 852114
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'SNHat BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Soha BO',
    pin: 852129
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Sonbersa BO',
    pin: 852132
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Sonbersa Raj SO',
    pin: 852129
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Sonpura BO',
    pin: 852127
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Sour Bazar SO',
    pin: 852221
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'SRauta BO',
    pin: 852112
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Srinagar BO',
    pin: 852124
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Sripur BO',
    pin: 852215
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Sripur Sukhasan BO',
    pin: 852138
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Sripur Tengraha BO',
    pin: 852128
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'SSimraha BO',
    pin: 852121
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Sugma BO',
    pin: 852129
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Suhath BO',
    pin: 852221
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Sukhanagar BO',
    pin: 852125
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Sukhasan Chakla BO',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Sukhashan BO',
    pin: 852115
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Sukhpur SO',
    pin: 852130
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Sulindabad BO',
    pin: 852202
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Supaul Bazar SO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Supaul HO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Surjapur BO',
    pin: 852125
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Surpatganj SO',
    pin: 852137
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'T Dhanchhoa BO',
    pin: 852121
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Tamot Persa BO',
    pin: 852122
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Tamua BO',
    pin: 852214
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Tarhi Bazar BO',
    pin: 852215
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Tarhi Bhawanipur BO',
    pin: 852218
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Tariama BO',
    pin: 852127
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'TBargaon BO',
    pin: 852219
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Tekuna BO',
    pin: 852125
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Telhar BO',
    pin: 852216
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Telwa BO',
    pin: 852216
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Telwa Situhar BO',
    pin: 852130
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Temabhelwa BO',
    pin: 852115
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Terhi BO',
    pin: 852216
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Tharbitta SO',
    pin: 852138
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Thumha BO',
    pin: 852131
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'TPCollegemadhepura SO',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Triveniganj SO',
    pin: 852139
  },
  {
    state: 'Bihar',
    district: 'SUPAUL',
    subDistrict: 'Tullapatti BO',
    pin: 852108
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Tulsibari BO',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Tuniahi BO',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Turkahi BO',
    pin: 852113
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Udakishunganj SO',
    pin: 852220
  },
  {
    state: 'Bihar',
    district: 'SAHARSA',
    subDistrict: 'Uteshra BO',
    pin: 852126
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Adharpur BO',
    pin: 848130
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Ahilwar BO',
    pin: 848205
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Ahmadpur BO',
    pin: 848505
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Akauna BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Akha Bishanpur BO',
    pin: 848132
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Akhtiarpur BO',
    pin: 848127
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Akhtiarpur Khajuri BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Andaur BO',
    pin: 848502
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Angarghat BO',
    pin: 848236
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Arout BO',
    pin: 848210
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Ashinchak BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Aura BO',
    pin: 848205
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Baghi BO',
    pin: 848130
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Baghra SO Samastipur',
    pin: 848506
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bahadurpur BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bahadurpur Patory BO',
    pin: 848504
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Baidyanathpur BO',
    pin: 848210
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'BAiloth BO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bairampur BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bajitpur Bombaiya BO',
    pin: 848160
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bajitpur Karnail BO',
    pin: 848505
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bajitpur Meari BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bakarpur BO',
    pin: 848501
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Balahi BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Balha BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Balha Nandenagar BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Balhajainarain BO',
    pin: 848125
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Ballipur BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Banda BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bandhar BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bangarhatta BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Banghara BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Barahi BO',
    pin: 848207
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Barbatta BO',
    pin: 848127
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bargaon BO',
    pin: 848213
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Barhauna BO',
    pin: 848502
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Barra BO',
    pin: 848210
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Barra BO',
    pin: 848206
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Basudeopur BO',
    pin: 848102
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Basudeva BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bathua Buzurg BO',
    pin: 848127
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bazidpur BO',
    pin: 848503
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bazidpur Kumhira BO',
    pin: 848127
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'BChaksekhu BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Begampur BO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Belamegh BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Belari BO',
    pin: 848132
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Belsandi BO',
    pin: 848207
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Belsandi BO',
    pin: 848302
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Belsandi Dih BO',
    pin: 848236
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Beridharsham BO',
    pin: 848213
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bhadaiya BO',
    pin: 848502
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bhagwanpur Desua BO',
    pin: 848134
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bhagwanpur Lohagir BO',
    pin: 848132
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bhagwarpur Kamla BO',
    pin: 848132
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bhagwatpur BO',
    pin: 848127
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bharpura BO',
    pin: 848236
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bharwari BO',
    pin: 848208
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bhataura BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bhatwan BO',
    pin: 848206
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'BhDhurlak BO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bherokhra BO',
    pin: 848130
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bhindua BO',
    pin: 848213
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bhorejairam BO',
    pin: 848236
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bhuswar BO',
    pin: 848211
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bibhutipur BO',
    pin: 848211
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bihrha SO',
    pin: 848216
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bikrampur Bandey BO',
    pin: 848129
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Birnamatula BO',
    pin: 848134
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Birouli Rural Institute SO',
    pin: 848113
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Birsisngpur Deorhi BO',
    pin: 848102
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bishanpur Abhi BO',
    pin: 848210
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bishanpur Bathua BO',
    pin: 848115
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bishanpur Beri BO',
    pin: 848501
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bishanpur Diha BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bishanpur Hakimabad BO',
    pin: 848134
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bishanpur Keothar BO',
    pin: 848206
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bithan SO',
    pin: 848207
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bochaha BO',
    pin: 848503
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bombaiya Harlal BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Boria BO',
    pin: 848211
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'BRBCollege BO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Buzurgdwar BO',
    pin: 848236
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chaita BO',
    pin: 848132
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chakbahauddin BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chakhabib BO',
    pin: 848160
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chakhaji BO',
    pin: 848115
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chakmehsi BO',
    pin: 848302
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chaknawada BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chakpahar BO',
    pin: 848122
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chaksaho BO',
    pin: 848504
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chaksikandar BO',
    pin: 848122
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chakthat BO',
    pin: 848210
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chandauli BO',
    pin: 848132
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chandauli BO',
    pin: 848115
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chandchour BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chandpura BO',
    pin: 848504
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chapar BO',
    pin: 848501
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chapta BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chhatauna BO',
    pin: 848134
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chhatneshwar BO',
    pin: 848301
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chigri BO',
    pin: 848213
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Chora Tabhka BO',
    pin: 848211
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Dadhia Asadhar BO',
    pin: 848134
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Dalsinghsarai SO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Dalsingsarai Bazar SO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Darwa Mathurapur BO',
    pin: 848505
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Dasaut BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Dashara BO',
    pin: 848501
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Daulatpur BO',
    pin: 848210
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Deokuli BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Depura BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Desari BO',
    pin: 848211
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Dharampur Bandey BO',
    pin: 848504
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Dharmagatpur Bathua BO',
    pin: 848115
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Dharnipatti BO',
    pin: 848506
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Dhobgama BO',
    pin: 848125
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Dhrubgama BO',
    pin: 848302
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Dighra SO',
    pin: 848115
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Dinmanpur BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Dinmo BO',
    pin: 848213
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Dumri Bindgama BO',
    pin: 848506
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Fatehpur Bela BO',
    pin: 848130
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Gajpatti BO',
    pin: 848205
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Gangapur BO',
    pin: 848121
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Gangeshwar Nagar BO',
    pin: 848502
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Gangsara BO',
    pin: 848505
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Gaopur BO',
    pin: 848132
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Garhsisai BO',
    pin: 848503
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Gauspur Sarsauna BO',
    pin: 848130
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Geeta Deodha BO',
    pin: 848208
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Ghataho BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Gohi Bishanpur BO',
    pin: 848133
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Gopalpur BO',
    pin: 848102
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Gorgama BO',
    pin: 848504
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Hajpurwa Karua BO',
    pin: 848125
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Hansa BO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Hansopur BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Harail BO',
    pin: 848501
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Hardaspur Diara BO',
    pin: 848506
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Hardia BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Harilochanpur BO',
    pin: 848127
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Harinagar BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Haripur BO',
    pin: 848216
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Harpur Ailoth BO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Harpur Barhetta BO',
    pin: 848127
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Harpur Bhindi BO',
    pin: 848122
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Harpur Bochaha BO',
    pin: 848503
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Harpur Mahmada BO',
    pin: 848125
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Harpur Pusa BO',
    pin: 848125
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Harpur Rewari BO',
    pin: 848134
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Hasanpur [Rusera BO',
    pin: 848210
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Hasanpur BO',
    pin: 848205
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Hasanpur Jitwarpur BO',
    pin: 848134
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Hassanpur S Mill SO',
    pin: 848205
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Hatha BO',
    pin: 848125
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Hirni BO',
    pin: 848213
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Ilmasnagar SO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Indrawara BO',
    pin: 848505
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Ithar BO',
    pin: 848213
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Jagannathpur BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Jagdish Paran BO',
    pin: 848302
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Jagmohra BO',
    pin: 848207
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Jahangirpur Kothia BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Jahangirpur Lagma BO',
    pin: 848208
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Jahingra BO',
    pin: 848506
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Jalalpur BO',
    pin: 848506
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Janakpur BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Janardanpur BO',
    pin: 848302
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Jaunapur BO',
    pin: 848501
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Jhajhra BO',
    pin: 848213
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Jhakhar BO',
    pin: 848216
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Jhakhra BO',
    pin: 848127
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Jitwaria BO',
    pin: 848302
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Jitwarpur Chouth BO',
    pin: 848134
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Jitwarpur Kumhira BO',
    pin: 848127
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Jitwarpur SO',
    pin: 848134
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Jorpura BO',
    pin: 848504
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kalaunjar BO',
    pin: 848125
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kale Narpatnagar BO',
    pin: 848206
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kalyanpur Basti BO',
    pin: 848502
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kalyanpur Chowk SO',
    pin: 848302
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kalyanpur SO Samastipur',
    pin: 848160
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kamraon BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kancha BO',
    pin: 848503
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kapan BO',
    pin: 848236
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Karian BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Karihara BO',
    pin: 848132
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Karpoorigram BO',
    pin: 848129
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kasba Tajpur BO',
    pin: 848130
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kashipur Samastipur SO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kashore BO',
    pin: 848133
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Keos Nizamat BO',
    pin: 848134
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Keota BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Keotgama BO',
    pin: 848213
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kerai BO',
    pin: 848160
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Keshonarainpur BO',
    pin: 848504
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Khairi BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Khajuri BO',
    pin: 848301
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Khalispur BO',
    pin: 848505
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Khan Mirzapur BO',
    pin: 848503
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Khanpur BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kharaj Jitwarpur BO',
    pin: 848134
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kishanpur SO Samastipur',
    pin: 848301
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kishanpur Yusuf BO',
    pin: 848505
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Koan Bajitpur BO',
    pin: 848113
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Konaila BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kubouliram BO',
    pin: 848131
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kumaiya BO',
    pin: 848505
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kundal SO Samastipur',
    pin: 848206
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kurba Barhetta BO',
    pin: 848302
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kursaha BO',
    pin: 848501
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kuseshwar Asthan SO',
    pin: 848213
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Ladaura Dargah BO',
    pin: 848302
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Lagunia BO',
    pin: 848504
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Lagunia Raghukanth BO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Lagunia Surya Kanth BO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Larua BO',
    pin: 848505
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'LBPura BO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Lilhaul BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'LMPatti BO',
    pin: 848132
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Madhaipur BO',
    pin: 848503
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Madhopur BO',
    pin: 848506
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Madhopur BO',
    pin: 848211
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Madhopur Dighrua SO',
    pin: 848122
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Madhurapur Tara BO',
    pin: 848302
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mahathi BO',
    pin: 848211
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mahen BO',
    pin: 848208
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mahmadpur Sakra BO',
    pin: 848160
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mahmmadipur BO',
    pin: 848502
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mahuli BO',
    pin: 848208
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Malikaur BO',
    pin: 848115
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Malinagar BO',
    pin: 848125
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Manda BO',
    pin: 848211
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mangalgarh SO',
    pin: 848208
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Manikpur BO',
    pin: 848127
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Manpura BO',
    pin: 848130
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Maricha BO',
    pin: 848504
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Marthua BO',
    pin: 848207
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Masina BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mathurapur BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mathurapur BO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Matiur BO',
    pin: 848501
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mau Dhaneshpur BO',
    pin: 848503
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mauzi BO',
    pin: 848205
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mehsari BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mehsi BO',
    pin: 848160
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mishratol BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mohammedpur Koari BO',
    pin: 848131
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mohanpur BO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mohanpur BO',
    pin: 848506
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mohiuddin N Baluahi SO',
    pin: 848501
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mohiuddin Nagar RS SO',
    pin: 848502
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mohiuddin Nagar SO',
    pin: 848501
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mohiuddinpur Rajwa BO',
    pin: 848131
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mordiwa BO',
    pin: 848134
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Morsand BO',
    pin: 848115
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Morwa SO',
    pin: 848121
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Morwarai BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'MorwaraIi BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Motipur BO',
    pin: 848130
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Motipur BO',
    pin: 848210
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'MTAlampur BO',
    pin: 848236
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Mukhtiarpur BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Muktapur BO',
    pin: 848102
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Muradpur BO',
    pin: 848210
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Musapur BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Nakuni BO',
    pin: 848206
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Namapur BO',
    pin: 848125
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Narhan SO',
    pin: 848211
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Narpa BO',
    pin: 848207
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Nathudwar BO',
    pin: 848236
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Nauraga SO',
    pin: 848102
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Nayanagar BO',
    pin: 848208
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Nikaspur Nisfi BO',
    pin: 848121
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Nirpur Bharwaria BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Nirpur BO',
    pin: 848129
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Nowdega Balha BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'P Pur Halai',
    pin: 848505
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Pachbhinda BO',
    pin: 848505
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Pachpaika BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Pagra BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Pan Basadhia BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Pandit Tol Tabhka BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Paroria BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Paroria BO',
    pin: 848301
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Parwana BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Pataili BO',
    pin: 848132
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Patailia BO',
    pin: 848211
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Patory Bazar Cinema Chowk SO',
    pin: 848504
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Patory SO',
    pin: 848504
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Patpara BO',
    pin: 848236
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Patsa BO',
    pin: 848206
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Phulhara BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Pokhraira BO',
    pin: 848113
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Punas BO',
    pin: 848113
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Purnahi BO',
    pin: 848301
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Pusa SO',
    pin: 848125
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Pushaho BO',
    pin: 848207
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Raghopur BO',
    pin: 848211
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Raghunathpur BO',
    pin: 848505
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rahimabad BO',
    pin: 848130
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rahiyar Kochi BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rahmatpur BO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rahua BO',
    pin: 848210
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rahua BO',
    pin: 848133
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Raipur Buzurg BO',
    pin: 848505
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rajajan BO',
    pin: 848502
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rajpur BO',
    pin: 848501
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rajwara BO',
    pin: 848210
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Ramapur Maheshpur BO',
    pin: 848121
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Ramchandarpur BO',
    pin: 848127
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rampur Dudhpura BO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rampur Jalalpur BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rampur Kushaiya BO',
    pin: 848301
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rampur Rajwa BO',
    pin: 848205
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rampur Samthu BO',
    pin: 848132
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Raniparti BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Ranitol BO',
    pin: 848113
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rasalpur BO',
    pin: 848506
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rasalpur Dharha BO',
    pin: 848210
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Raspur Patasia BO',
    pin: 848503
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Ratanpur Bela BO',
    pin: 848113
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rebra BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rosera SO',
    pin: 848210
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'RRBhadrapur BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rupauli BO',
    pin: 848132
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Rusera Thana SO',
    pin: 848210
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sadipur BO',
    pin: 848133
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sadipurghat BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sagma BO',
    pin: 848132
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sahpur Undi BO',
    pin: 848504
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Saidpur BO',
    pin: 848125
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sakarpura BO',
    pin: 848205
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sakhmohan BO',
    pin: 848211
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sakhwa BO',
    pin: 848207
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sakrichandpusa BO',
    pin: 848125
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Salha Buzurg BO',
    pin: 848207
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Samartha BO',
    pin: 848160
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Samastipur Bazar SO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Samastipur HO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sarairanjan SO',
    pin: 848127
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sarangpur BO',
    pin: 848505
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sari BO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sasan BO',
    pin: 848205
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Satanpur BO',
    pin: 848132
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Satighat BO',
    pin: 848213
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Satmalpur BO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Shahpur Baghauni BO',
    pin: 848131
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Shambhupatti SO',
    pin: 848129
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Shankarpur BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Shekhopur BO',
    pin: 848101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sheora BO',
    pin: 848504
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sherpur Dhepura BO',
    pin: 848503
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sibaisingpur BO',
    pin: 848502
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sihma BO',
    pin: 848207
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Simartoka BO',
    pin: 848213
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Simri BO',
    pin: 848503
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Singhia Ghat SO',
    pin: 848236
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Singhia SO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Singhiakhurd BO',
    pin: 848113
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Soeral BO',
    pin: 848114
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sohma BO',
    pin: 848207
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Soman BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Somnaha Mirzanagar BO',
    pin: 848125
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Songar BO',
    pin: 848122
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sonsa BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sonupur BO',
    pin: 848210
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sormar Baghla BO',
    pin: 848125
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Srichandpur Kothia BO',
    pin: 848122
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Srikameshwar Nagar BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sripur Gahar BO',
    pin: 848117
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sugrain BO',
    pin: 848207
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sultanpur East BO',
    pin: 848501
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sultanpur West BO',
    pin: 848501
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Sumbha Deorhi BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Surauli BO',
    pin: 848211
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Tajpur SO Samastipur',
    pin: 848130
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Tara BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Taradhamaun BO',
    pin: 848504
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Tetarpur BO',
    pin: 848502
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Tetrahi BO',
    pin: 848207
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Thahra Gopalpur BO',
    pin: 848115
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Tilkeshwar BO',
    pin: 848207
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Udaipur BO',
    pin: 848210
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Ujan BO',
    pin: 848207
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Ujiarpur SO',
    pin: 848132
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Ujua BO',
    pin: 848213
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Usri BO',
    pin: 848213
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Vidhyapati Nagar SO',
    pin: 848503
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Waini SO',
    pin: 848131
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Wari BO',
    pin: 848209
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Warish Nagar SO',
    pin: 848133
  },
  {
    state: 'Bihar',
    district: 'Khagaria',
    subDistrict: 'Amba B.O (Alauli S.O)',
    pin: 851206
  },
  {
    state: 'Bihar',
    district: 'Khagaria',
    subDistrict: 'Anantpur B.O (Alauli S.O)',
    pin: 851206
  },
  {
    state: 'Bihar',
    district: 'Khagaria',
    subDistrict: 'Cherakhera B.O (Alauli S.O)',
    pin: 851206
  },
  {
    state: 'Bihar',
    district: 'Khagaria',
    subDistrict: 'Goriyami B.O Alauli S.O)',
    pin: 851206
  },
  {
    state: 'Bihar',
    district: 'Khagaria',
    subDistrict: 'Hathwan B.O (Alauli S.O)',
    pin: 851206
  },
  {
    state: 'Bihar',
    district: 'Khagaria',
    subDistrict: 'Jogia  B.O (Alauli S.O)',
    pin: 851206
  },
  {
    state: 'Bihar',
    district: 'Khagaria',
    subDistrict: 'Mohraghat Prass B.O (Alauli S.O)',
    pin: 851206
  },
  {
    state: 'Bihar',
    district: 'Khagaria',
    subDistrict: 'Raun B.O (Alauli S.O)',
    pin: 851206
  },
  {
    state: 'Bihar',
    district: 'Khagaria',
    subDistrict: 'Sahsi B.O (Alauli S.O)',
    pin: 851206
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'ABabhangama BO',
    pin: 847121
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Adalpur BO',
    pin: 847115
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Adharpur BO',
    pin: 847427
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Adhloam BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Afzala BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Agai BO',
    pin: 847303
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ahilwara BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ahiyari BO',
    pin: 847304
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Akabarpur Bank BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Alimabad Nimrauli BO',
    pin: 847304
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Alinagar BO',
    pin: 847405
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Amaithi BO',
    pin: 847233
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Anandpur SO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Andauli BO',
    pin: 847103
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Antaur BO',
    pin: 847103
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Arai Birdipur BO',
    pin: 847106
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Araila BO',
    pin: 847106
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Arga BO',
    pin: 847105
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ashraha BO',
    pin: 847121
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ashthua BO',
    pin: 847104
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Asi BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Atahar BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Atihar BO',
    pin: 846007
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Aurahi BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Badarbanna BO',
    pin: 847233
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Baghant BO',
    pin: 847422
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Baghaul BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Baghauni BO',
    pin: 847105
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Baghra Simri BO',
    pin: 847105
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Baghras BO',
    pin: 847427
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bahadurpur BO',
    pin: 846002
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bahera SO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Baheri SO Darbhanga',
    pin: 847105
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Baigani BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bakmandal BO',
    pin: 847105
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Baligaon BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Balour BO',
    pin: 847107
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Balour BO',
    pin: 847422
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Balthari BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Banauli BO',
    pin: 847428
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bandhauli BO',
    pin: 847303
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Banka BO',
    pin: 847121
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bardaha BO',
    pin: 847304
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Barhaulia BO',
    pin: 847106
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Barhi BO',
    pin: 846005
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bariaul BO',
    pin: 846005
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Baruary BO',
    pin: 847107
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Basatpur BO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Basatwara BO',
    pin: 847428
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Basauli BO',
    pin: 847121
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bathia BO',
    pin: 847423
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Batho BO',
    pin: 847233
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bauharwa BO',
    pin: 847423
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bauram BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bazitpur BO',
    pin: 847422
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'BBira BO',
    pin: 846005
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Belhi',
    pin: 847237
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Benibad BO',
    pin: 847107
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Benipur SO',
    pin: 847103
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Benta South SO',
    pin: 846003
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bhacchi BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bhadhar BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bhandar Sogani BO',
    pin: 847422
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bharathi SO',
    pin: 847428
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bharwara SO',
    pin: 847104
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bhataura BO',
    pin: 847306
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bhatraghat BO',
    pin: 847122
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bhawanipur BO',
    pin: 847104
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bhawanipur BO',
    pin: 847103
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bherwa BO',
    pin: 847304
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bhoj Pandaul BO',
    pin: 847121
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bhuskaul BO',
    pin: 846007
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bihar Nursary BO',
    pin: 847123
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bijuli BO',
    pin: 847115
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Biraul SO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bisfi SO',
    pin: 847122
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bishanpur BO',
    pin: 847303
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bishnupur SO Darbhanga',
    pin: 847204
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bishwanathpur Tarauni BO',
    pin: 847233
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'BKAsthan BO',
    pin: 846005
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'BMVPith BO',
    pin: 846002
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Boraj BO',
    pin: 847105
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'BParsa BO',
    pin: 847337
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Brahampur Sotia BO',
    pin: 847307
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Brahampura BO',
    pin: 847422
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'BRusselpur BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'C M College SO',
    pin: 846004
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Chak Tataila BO',
    pin: 847304
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Chakauti BO',
    pin: 847307
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Chakla BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Chakwa BO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Chanaur BO',
    pin: 847422
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Chandanpatti BO',
    pin: 846002
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Chandauna BO',
    pin: 847303
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Chatwan BO',
    pin: 847337
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Chhacha BO',
    pin: 847337
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Chhotaipatti BO',
    pin: 847337
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Chilha Dilawarpur BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'CQuaztola BO',
    pin: 847122
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Dadpatti BO',
    pin: 847405
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Dakaram Pauri BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Damala BO',
    pin: 847304
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Darbhanga Bara Bazar SO',
    pin: 846004
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Darbhanga Chowk SO',
    pin: 846004
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Darbhanga City SO',
    pin: 846004
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Darbhanga HO',
    pin: 846004
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Darima BO',
    pin: 847121
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Darshuar BO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Dasauth BO',
    pin: 847405
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Dekuli BO',
    pin: 846002
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Dhamsain BO',
    pin: 847405
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Dhamuara BO',
    pin: 847405
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Dhanauli BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Dharia BO',
    pin: 847304
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Dhoi BO',
    pin: 846009
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Dihrampur BO',
    pin: 846003
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Dilahi BO',
    pin: 846003
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'DKaskaur BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'DMC SO',
    pin: 846003
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Doghra BO',
    pin: 847302
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Dulha BO',
    pin: 847121
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Fardaha BO',
    pin: 847233
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Gaighat BO',
    pin: 847107
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Galma BO',
    pin: 847427
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ganaun BO',
    pin: 847427
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Gangauli BO',
    pin: 847407
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Garaul BO',
    pin: 847423
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Garri BO',
    pin: 847303
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'GBasailha BO',
    pin: 846007
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ghanshyampur SO Darbhanga',
    pin: 847427
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ghoshrama BO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Gobarsitha BO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Goraman Singh BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Goriari BO',
    pin: 846003
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Gorkha BO',
    pin: 847405
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Gujrauli BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Habi Bhuar BO',
    pin: 847233
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Harhachcha BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Hariath BO',
    pin: 847423
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Hariharpur BO',
    pin: 847306
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Haripur BO',
    pin: 847233
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Haripur BO',
    pin: 847427
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Harsinghpur BO',
    pin: 847103
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Hathauri BO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Hawasa BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Hayaghat Bilashpur SO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Hiropatti BO',
    pin: 847304
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Imambari SO',
    pin: 846001
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Inai BO',
    pin: 847105
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Izra BO',
    pin: 847337
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Jagwan BO',
    pin: 847304
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Jahangirtola BO',
    pin: 847303
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Jaideopatti BO',
    pin: 847405
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Jakso Jamalpur BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Jalley SO',
    pin: 847302
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Jalwara BO',
    pin: 847121
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Janta BO',
    pin: 847107
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Jarso BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Jatmalpura Tira BO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Jayantipur BO',
    pin: 847103
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Jhagarua BO',
    pin: 847427
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Jogiara BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Jogiara SO',
    pin: 847303
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Jorja BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'K D S U SO',
    pin: 846008
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kabaria Khutwara BO',
    pin: 846009
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kabirchak BO',
    pin: 846009
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kaithwar BO',
    pin: 847204
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kakorha BO',
    pin: 847204
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kaligaon BO',
    pin: 847104
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kamrouli BO',
    pin: 847428
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kamtaul SO',
    pin: 847304
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kanaur BO',
    pin: 847306
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kanhai BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kansi BO',
    pin: 847428
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kansi Simri SO',
    pin: 847106
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kanthudih BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kapchhahi BO',
    pin: 846009
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Karhatia BO',
    pin: 847306
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Karjapatti BO',
    pin: 847306
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kasraur BO',
    pin: 847427
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kathalia BO',
    pin: 847123
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kathalwari SO',
    pin: 846004
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kathra BO',
    pin: 847423
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Katka BO',
    pin: 847307
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Katki Bazar BO',
    pin: 846004
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Katraul BO',
    pin: 847302
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Keoti Ranway SO',
    pin: 847121
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Keotsa Baruari SO',
    pin: 847107
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Khaira Kunji BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Khangraitha BO',
    pin: 847105
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kharajpur BO',
    pin: 846003
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kharari BO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Kharkha BO',
    pin: 847302
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kharsand BO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kharua BO',
    pin: 847115
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Khirma BO',
    pin: 847121
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kilaghat SO',
    pin: 846004
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Kishanpur Baikunth BO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'KJagdishpur BO',
    pin: 847103
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'KManjhigama BO',
    pin: 847306
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Koilam BO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kora BO',
    pin: 847104
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Korthu BO',
    pin: 847103
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kothia BO',
    pin: 847306
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kothra BO',
    pin: 847105
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kothram BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'KPirochha BO',
    pin: 847107
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kumhrauli BO',
    pin: 847304
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kurso Nadiami SO',
    pin: 847405
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Kusothar SO',
    pin: 847429
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ladaho BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Ladour BO',
    pin: 847107
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'LAGMA Rambhadrapur BO',
    pin: 847407
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Lahatta BO',
    pin: 847423
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Laheriasarai Court SO',
    pin: 846001
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Laheriasarai HO',
    pin: 846001
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Lahwar BO',
    pin: 847337
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Lakhanpur BO',
    pin: 847307
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Lalsahpur BO',
    pin: 846005
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Laxman Nagar BO',
    pin: 847107
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Laxmanpur BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Laxmipur Kakorba BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Laxmisagar SO Darbhanga',
    pin: 846009
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Loam BO',
    pin: 847115
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Lohna Road SO',
    pin: 847407
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Madanpur BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Madhopatti BO',
    pin: 847306
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Madhupur BO',
    pin: 847306
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Maheshwara BO',
    pin: 847107
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Mahinam BO',
    pin: 847103
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Mahpara BO',
    pin: 846009
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Mahuli BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Manigachi SO',
    pin: 847422
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Manikauli BO',
    pin: 847104
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Matunia BO',
    pin: 847105
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Maun Behat BO',
    pin: 847423
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Milkichak BO',
    pin: 846009
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Mirzapur BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Mohiuddinagar Pakari BO',
    pin: 847103
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Moro BO',
    pin: 847106
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Motipur BO',
    pin: 847103
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'MPBahadurpur BO',
    pin: 846002
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'MSajhouti BO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'MSinuara BO',
    pin: 846003
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Muraitha BO',
    pin: 847304
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Muria SO',
    pin: 847115
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Nadiami BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Nagardih BO',
    pin: 847304
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Narauchdham BO',
    pin: 847307
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Narayandohat BO',
    pin: 847105
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Narayanpur BO',
    pin: 847204
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Nari BO',
    pin: 847103
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Narsara BO',
    pin: 846003
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Naruar BO',
    pin: 847407
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Nawada BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Nayagaon BO',
    pin: 847121
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Nayatola BO',
    pin: 847302
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Nehra SO',
    pin: 847233
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Neori BO',
    pin: 847103
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Nikasi BO',
    pin: 847306
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Nimathi BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Nishihara BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'NN Patti BO',
    pin: 847405
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Noorchak BO',
    pin: 847122
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ojhaul BO',
    pin: 846003
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'P Dharampur BO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Pacharhi BO',
    pin: 847337
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Paghari BO',
    pin: 847105
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Paghari BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Paigambarpur BO',
    pin: 847123
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Pali BO',
    pin: 847304
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Pali Mahathwar BO',
    pin: 847427
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Panchobe BO',
    pin: 846003
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Parohi BO',
    pin: 847122
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Patania BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Patore BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'PBasant BO',
    pin: 846003
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'PBuzurg BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'PGhiwahi BO',
    pin: 847105
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Pindaruch SO',
    pin: 847306
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Pohaddi Bela BO',
    pin: 847427
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Pohhadi BO',
    pin: 847103
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Pokhar Bhinda BO',
    pin: 847407
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Postal Traning Centre SO',
    pin: 846005
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Punhad BO',
    pin: 847427
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Putai SO',
    pin: 847423
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Qadirabad BO',
    pin: 846004
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Raghauli BO',
    pin: 847304
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ramauli BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ramnagar Dhusi BO',
    pin: 847233
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Rampura BO',
    pin: 847123
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ranna BO',
    pin: 847105
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'RAPMills BO',
    pin: 846002
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Rarhi BO',
    pin: 847302
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Rasalpur BO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Rashiyari BO',
    pin: 847427
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Rasidpur BO',
    pin: 847423
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ratanpur SO Darbhanga',
    pin: 847307
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ratanpura BO',
    pin: 847106
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ratanpura BO',
    pin: 846002
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Rathaus BO',
    pin: 847304
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Ratwara BO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Reorha BO',
    pin: 847302
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Rohar BO',
    pin: 847103
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ruchighat BO',
    pin: 847103
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Rupauli Ghat BO',
    pin: 846003
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ryam Factory SO',
    pin: 847337
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sadhopur BO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sadiquepur BO',
    pin: 847337
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sadullahpur BO',
    pin: 847304
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sahari BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sahasram BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sahjauli BO',
    pin: 847405
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sahoparari SO',
    pin: 847202
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sajanpura BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sajhuar BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Salempur Lagma BO',
    pin: 847427
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sanahpurdih BO',
    pin: 847307
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Saramohanpur SO',
    pin: 846007
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sarwara BO',
    pin: 847106
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Satghara BO',
    pin: 847337
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'SDangarwara BO',
    pin: 847306
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Seodaha Barail BO',
    pin: 847107
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sherpur BO',
    pin: 847204
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Shivnagarghat BO',
    pin: 847103
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Shivram BO',
    pin: 847233
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Shivram BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'SHMC SO',
    pin: 846002
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sidhauli BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Simariabhindia BO',
    pin: 847301
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Singhaso BO',
    pin: 847121
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Singhia Deorhi BO',
    pin: 847306
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Singhwara SO',
    pin: 847123
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sinuar Gopal BO',
    pin: 847429
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sirnia BO',
    pin: 846002
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sirua Maner BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Siso BO',
    pin: 846005
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sisodih BO',
    pin: 846005
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'SLalganj BO',
    pin: 847121
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'SMajarahia BO',
    pin: 847105
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sonhaun BO',
    pin: 846005
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sonki BO',
    pin: 846009
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Sonpur BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'SRBithauli BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Srirampur BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Subhankarpur SO',
    pin: 846006
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Subhash Keso BO',
    pin: 847107
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Susari BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Susta BO',
    pin: 847107
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Taralahi BO',
    pin: 846003
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Tarsarai BO',
    pin: 847115
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Tarwara BO',
    pin: 847427
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Tatuar BO',
    pin: 847422
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Tehwara BO',
    pin: 847123
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Telhan BO',
    pin: 847115
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Thalwara BO',
    pin: 846002
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Tharma BO',
    pin: 847107
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Thathopur BO',
    pin: 847105
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Thengaha BO',
    pin: 847405
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Trimuhanighat BO',
    pin: 847201
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Tumaul BO',
    pin: 847405
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Uchhati BO',
    pin: 847203
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Ughra BO',
    pin: 847101
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Adapur SO',
    pin: 845301
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Adhkaparia Phulwaria BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Ahiman Chapra BO',
    pin: 845413
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Ahiraulia Bhinak BO',
    pin: 845415
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Ahiraulia BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Ahiraulia BO',
    pin: 845417
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Ajgarhimath BO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Ajgarwa BO',
    pin: 845428
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Amawa BO',
    pin: 845303
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Amodei BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Andhra BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Areraj SO',
    pin: 845411
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Ashok Pakari BO',
    pin: 845429
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Athmohan BO',
    pin: 845303
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Auraia BO',
    pin: 845301
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bagaha Champaran BO',
    pin: 845315
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bagahi BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bahadurpur BO',
    pin: 845411
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Baharupia BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bahlolpur BO',
    pin: 845413
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bahlolpur BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bahuarawa BO',
    pin: 845456
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bahuarwa Gopi Singh BO',
    pin: 845436
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Baidnathpur BO',
    pin: 845415
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bairia SO East Champaran',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bairiadih BO',
    pin: 845435
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bairiya BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bairiya BO',
    pin: 845424
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bakarpur Jagat SO',
    pin: 845413
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bakhari BO',
    pin: 845457
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bakhari BO',
    pin: 845413
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bakhari Mahesh BO',
    pin: 845413
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bakhathaura BO',
    pin: 845301
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Balo Chak BO',
    pin: 845412
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Balua BO',
    pin: 845422
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Balua Tola BO',
    pin: 845304
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Balua Zulfikarabad BO',
    pin: 845457
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bangari BO',
    pin: 845429
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bankat BO',
    pin: 845424
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bankatwa BO',
    pin: 845303
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Bans Ghat BO',
    pin: 845426
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bara Chakia SO',
    pin: 845412
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bara Jai Ram BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bara Shankar BO',
    pin: 845457
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Baramania BO',
    pin: 845412
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Barawa BO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Barawa BO',
    pin: 845301
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Barharwa FMohamad BO',
    pin: 845304
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Barharwa Kala BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Barharwa Lakhansen BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Barharwa Siwan BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bariariya BO',
    pin: 845434
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bariarpur BO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Barkagaon BO',
    pin: 845428
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Barmashwa BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Barwa Khurd BO',
    pin: 845304
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bazitpur BO',
    pin: 845420
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bediban Madhuban BO',
    pin: 845416
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bela Baiju BO',
    pin: 845457
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bela BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Belahiya BO',
    pin: 845301
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Belghati BO',
    pin: 845435
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bella Champaran  BO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Belwa BO',
    pin: 845305
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Belwa Madho BO',
    pin: 845423
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Belwa Rai Khas BO',
    pin: 845435
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Belwatia BO',
    pin: 845429
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Betauna BO',
    pin: 845457
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bhada Murli BO',
    pin: 845417
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bhandar BO',
    pin: 845427
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bhargawan BO',
    pin: 845435
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bharwalia BO',
    pin: 845425
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bhataha BO',
    pin: 845456
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bhatwalia BO',
    pin: 845417
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bhawanipur Bazar BO',
    pin: 845301
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bhelahi BO',
    pin: 845305
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bhelwa BO',
    pin: 845420
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bhelwa Circle SO',
    pin: 845315
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bhgwatia BO',
    pin: 845432
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bhopatpur BO',
    pin: 845432
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bhurkurwa BO',
    pin: 845406
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bhuwan Chapra BO',
    pin: 845412
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bijayee BO',
    pin: 845315
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bijdhari Nizamat BO',
    pin: 845424
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bijwani BO',
    pin: 845303
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Biradban Mirchaiya BO',
    pin: 845412
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bishambharapur BO',
    pin: 845413
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bishunpurwa BO',
    pin: 845301
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bisunpur Basant BO',
    pin: 845430
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Bokane Kala BO',
    pin: 845414
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'BRTNariarwa BO',
    pin: 845435
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chailaha BO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chainpur BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chainpur BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chaita SO',
    pin: 845414
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Champapur BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Champapur Koiria BO',
    pin: 845315
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chanari BO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chandanwara BO',
    pin: 845304
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chandi Sthan BO',
    pin: 845419
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chandrahia  BO',
    pin: 845411
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chandrahiya BO',
    pin: 845429
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chapra Bihari BO',
    pin: 845414
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chatia BO',
    pin: 845425
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chauradano SO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chhapawa Phulwaria BO',
    pin: 845456
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chhapkahia BO',
    pin: 845458
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chhapra Bahas BO',
    pin: 845435
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chintamanpur BO',
    pin: 845416
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chiraiya SO',
    pin: 845415
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Chorma BO',
    pin: 845414
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Dalpat Bishunpur BO',
    pin: 845427
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Damodarpur Mathia BO',
    pin: 845425
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Damodarpur SO',
    pin: 845416
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Dariapur SO East Champaran',
    pin: 845417
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Darmaha BO',
    pin: 845432
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Darpa BO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Deokulia BO',
    pin: 845430
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Dhaka SO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Dhanhar Dihuli BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Dhanujee BO',
    pin: 845428
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Dhawahi BO',
    pin: 845422
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Dhekaha Bazar BO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Dilawarpur BO',
    pin: 845426
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Dipahi Dharharwa BO',
    pin: 845315
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Dubaha BO',
    pin: 845301
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Dulama BO',
    pin: 845414
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Dumariaghat BO',
    pin: 845423
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Dumra BO',
    pin: 845417
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Ekdari BO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Gad Bahuari BO',
    pin: 845440
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Gai Ghat BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Gamaharia Kala BO',
    pin: 845301
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Gamharia BO',
    pin: 845431
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Gamharia Khurd BO',
    pin: 845301
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Ganga Pipara BO',
    pin: 845458
  },
  {
    state: 'Bihar',
    district: 'DARBHANGA',
    subDistrict: 'Garahiya BO',
    pin: 845426
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Gariba BO',
    pin: 845432
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Gawandra BO',
    pin: 845426
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Gawandri BO',
    pin: 845304
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Gheghawa BO',
    pin: 845436
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Ghiwadhar BO',
    pin: 845411
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Ghora Sahan SO',
    pin: 845303
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Gobindapur Bazar BO',
    pin: 845411
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Gobindganj SO',
    pin: 845419
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Gonaha BO',
    pin: 845305
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Gonahi BO',
    pin: 845427
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Gudra BO',
    pin: 845456
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Gulwara Madhuban SO',
    pin: 845420
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Gurhanawa BO',
    pin: 845304
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Haraj Narullahpur BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Hardia BO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Hardiya BO',
    pin: 845305
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Harnaraina BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Harnatha BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Harpur BO',
    pin: 845301
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Harpur Nag BO',
    pin: 845412
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Harsiddhi SO',
    pin: 845422
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Hazipur BO',
    pin: 845432
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Hussaini SO',
    pin: 845423
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Ibrahimpur Parsauni BO',
    pin: 845430
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Inarwa Phulwar BO',
    pin: 845315
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Inrawa BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Itwa BO',
    pin: 845428
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Izara BO',
    pin: 845419
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Izor Bara BO',
    pin: 845430
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jadopur BO',
    pin: 845422
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jagapakar BO',
    pin: 845411
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jagiraha BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jaishingpur BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jaitapur Laukaria SO',
    pin: 845440
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jamua BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jamunia Koraiya BO',
    pin: 845303
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Janerwa  BO',
    pin: 845435
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jasauli Jamunia BO',
    pin: 845432
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jasauli Patti BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jhajhara BO',
    pin: 845303
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jhakhara BO',
    pin: 845429
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jhauaram BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jhitkahia BO',
    pin: 845431
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jhitkahiya BO',
    pin: 845406
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jhitkahiya BO',
    pin: 845427
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jihuli BO',
    pin: 845427
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jitaura BO',
    pin: 845414
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jitpur BO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jiwdhara BO',
    pin: 845429
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Jokiyari BO',
    pin: 845305
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Juafar BO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kadamawa BO',
    pin: 845303
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kaithwalia BO',
    pin: 845456
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kajraha BO',
    pin: 845436
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kalu Pakar BO',
    pin: 845430
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kalyanpur BO',
    pin: 845413
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kanchhedwa BO',
    pin: 845422
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kapur Pakari BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kararia BO',
    pin: 845417
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Karhan BO',
    pin: 845423
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Karmawa BO',
    pin: 845304
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Karsahiya BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kasba Mehsi BO',
    pin: 845426
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kashi Pakari BO',
    pin: 845406
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kataha BO',
    pin: 845426
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Katahariya BO',
    pin: 845413
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Katha Loknathpur BO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kathmalia BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kaurihar BO',
    pin: 845305
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kauriya BO',
    pin: 845420
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kesharia SO',
    pin: 845424
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Khagani BO',
    pin: 845435
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Khairi Ajgarwa BO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Khairimal BO',
    pin: 845416
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'KHariram BO',
    pin: 845426
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Khartari BO',
    pin: 845415
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Khodadpur BO',
    pin: 845420
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Khori Pakar BO',
    pin: 845427
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Khurahiya BO',
    pin: 845303
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kodariya BO',
    pin: 845430
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kodarkat BO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Koila Belwa BO',
    pin: 845412
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Koilhara BO',
    pin: 845420
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Konhia BO',
    pin: 845432
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kotwa BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Krishna Nagara BO',
    pin: 845420
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kritpur Mathiya BO',
    pin: 845411
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kuawa BO',
    pin: 845412
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kukurjari BO',
    pin: 845431
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kumhrar BO',
    pin: 845430
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kundwa Chainpur SO',
    pin: 845304
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kunwar Dhekha BO',
    pin: 845424
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kuriya BO',
    pin: 845416
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Kushar BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Lakhaura BO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Latihanawa BO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Laukaria BO',
    pin: 845440
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Laukhan BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Lauriya BO',
    pin: 845411
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Laxmipur BO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Laxmipur Pokhariya BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Machhargawa BO',
    pin: 845417
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Madan Sirsiya BO',
    pin: 845426
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Madhopur BO',
    pin: 845415
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Madhopur BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Madhopur Govind BO',
    pin: 845426
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Madhopur Karamwa BO',
    pin: 845431
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Madhopur Keso BO',
    pin: 845406
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Madhubani Kala BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Madhubanighat BO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Madhurapur BO',
    pin: 845420
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Madhuwahan Brit BO',
    pin: 845436
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mahamada BO',
    pin: 845426
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mahatha Tola BO',
    pin: 845417
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mahuawa BO',
    pin: 845415
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mahuawa Imilia BO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Majhar Gohiya BO',
    pin: 845428
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Majharia BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Majharia SO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Majhaulia BO',
    pin: 845414
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Makhuwa BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Malahi SO',
    pin: 845425
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mali BO',
    pin: 845456
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mamarkha BO',
    pin: 845425
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mangalpur BO',
    pin: 845423
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Manglapur Rajpur BO',
    pin: 845434
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Manguraha SO',
    pin: 845458
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Manikpur BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mankararia BO',
    pin: 845422
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mankarwa BO',
    pin: 845430
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mansingha BO',
    pin: 845431
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Math Lohiyar BO',
    pin: 845422
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mathia Bhopat BO',
    pin: 845315
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mathia Brit BO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mathurapur BO',
    pin: 845429
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mazirwa BO',
    pin: 845315
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'MBBathana BO',
    pin: 845429
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mehsi SO',
    pin: 845426
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mirpur BO',
    pin: 845415
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mirzapur BO',
    pin: 845457
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Misraulia BO',
    pin: 845415
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Moglania BO',
    pin: 845420
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Motihari  College SO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Motihari Chowk SO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Motihari City SO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Motihari Court SO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Motihari HO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'MSikatia BO',
    pin: 845425
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Mukhalishpur Pachrukha BO',
    pin: 845435
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Murarpur BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Murla BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Muzia BO',
    pin: 845430
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Nagdaha BO',
    pin: 845425
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Nankardewa BO',
    pin: 845406
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Narayanpur BO',
    pin: 845427
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Narha Panapur BO',
    pin: 845406
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Narkatia BO',
    pin: 845301
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Naurangia BO',
    pin: 845420
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Nawada BO',
    pin: 845414
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Nawada Izara BO',
    pin: 845419
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Nawadih BO',
    pin: 845458
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Naya Gaon BO',
    pin: 845424
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Nimoiya BO',
    pin: 845315
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Nonea BO',
    pin: 845422
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Noniman BO',
    pin: 845406
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Noniyadih BO',
    pin: 845305
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Nonuara BO',
    pin: 845315
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Noonfarwa BO',
    pin: 845427
  },
  {
    state: 'Bihar',
    district: 'NA',
    subDistrict: 'Olaha Madubani BO',
    pin: 845417
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Pachpakari SO',
    pin: 845427
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Padmuker BO',
    pin: 845427
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Paharia BO',
    pin: 845422
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Paharpur BO',
    pin: 845458
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Pajiarwa BO',
    pin: 845431
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Pakari Dayal SO',
    pin: 845428
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Pakari Dixit BO',
    pin: 845412
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Pakaria BO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Palanwa BO',
    pin: 845440
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Panditpur BO',
    pin: 845422
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Pannapur Ranjeeta BO',
    pin: 845422
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Parsa BO',
    pin: 845456
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Parsauna BO',
    pin: 845417
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Parsauna Madan BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'ParsaunaTapasi BO',
    pin: 845440
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Parsauni Kapoor BO',
    pin: 845457
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Parsauni Kishun BO',
    pin: 845416
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Parsauni Wajit BO',
    pin: 845413
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Parsurampur BO',
    pin: 845416
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Parsurampur BO',
    pin: 845305
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Patahi SO East Champaran',
    pin: 845457
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Patani BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Pataura BO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Patjirwa BO',
    pin: 845415
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Phenhara SO',
    pin: 845430
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Phulwar BO',
    pin: 845431
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Phulwaria BO',
    pin: 845304
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Pipara BO',
    pin: 845419
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Pipra Factory SO',
    pin: 845429
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Pipra Khem BO',
    pin: 845412
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Puchharia BO',
    pin: 845434
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Purainia BO',
    pin: 845301
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Puran Chapra BO',
    pin: 845426
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Purandara BO',
    pin: 845305
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Purnahiya BO',
    pin: 845303
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Purshottampur BO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Purvi Pakari BO',
    pin: 845423
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Radhia BO',
    pin: 845458
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Raghopur Gangapipar BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Raghunathpur Bazar SO',
    pin: 845431
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Raghunathpur BO',
    pin: 845432
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Raghunathpur BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Rai Kararia BO',
    pin: 845422
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Rajepur Champaran SO',
    pin: 845406
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Rajpur SO East Champaran',
    pin: 845432
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Ramgahrwa SO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Ramkaran Pakari BO',
    pin: 845416
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Rampur BO',
    pin: 845415
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Rampur Khajuria BO',
    pin: 845423
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Rampurwa Bazar BO',
    pin: 845458
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Raxaul SO',
    pin: 845305
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Rulahi BO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Rupani BO',
    pin: 845420
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Rupdih BO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Ruphara BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sabaiya BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sagar BO',
    pin: 845416
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sakarar BO',
    pin: 845440
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Salaha BO',
    pin: 845419
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Salempur BO',
    pin: 845406
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sangrampur SO East Champaran',
    pin: 845434
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sapaha BO',
    pin: 845435
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sapahi BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Saraiya Gopal BO',
    pin: 845457
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sareya Khas BO',
    pin: 845419
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sariyatpur Khan Tola BO',
    pin: 845416
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sarotar BO',
    pin: 845423
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sawangia BO',
    pin: 845412
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sembhuapur BO',
    pin: 845423
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Semra BO',
    pin: 845415
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Semra Sagardina BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Semra SO East Champaran',
    pin: 845435
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Semraha BO',
    pin: 845436
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Semrahia BO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Shambhuchak BO',
    pin: 845413
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Shankar Sharaiya BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Shyampur BO',
    pin: 845417
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sihpur BO',
    pin: 845305
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sikandarpur BO',
    pin: 845434
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Singasani BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Siraha BO',
    pin: 845414
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sirauna BO',
    pin: 845418
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sirni Bazar BO',
    pin: 845425
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sirsa Colony BO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sirsia Ganesh BO',
    pin: 845426
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sirsia Khurd BO',
    pin: 845301
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sirsiya Kala BO',
    pin: 845301
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sishani BO',
    pin: 845428
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Siswa Bazar BO',
    pin: 845422
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Siswa BO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Siswa Kharar BO',
    pin: 845432
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Siswa Patna BO',
    pin: 845432
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Siswa Sounaha BO',
    pin: 845305
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Siswania BO',
    pin: 845301
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Siswania BO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sital Pur BO',
    pin: 845412
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Son Barsa BO',
    pin: 845422
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sonwal BO',
    pin: 845425
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sripur BO',
    pin: 845456
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sripur Kawaiya BO',
    pin: 845303
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sugaon BO',
    pin: 845456
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sugauli Bazar BO',
    pin: 845456
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sugauli SO',
    pin: 845456
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sukul Pakar BO',
    pin: 845456
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sundar Patti BO',
    pin: 845414
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Sundarpur BO',
    pin: 845424
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Suraha BO',
    pin: 845401
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Tajpur Patkhaulia BO',
    pin: 845424
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Talwa Pokhar BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Telhara Kala BO',
    pin: 845304
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Tetaria Factory SO',
    pin: 845436
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Thikaha Bhawanipur BO',
    pin: 845434
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Tikaita BO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Tikulia BO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Tikulia BO',
    pin: 845416
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Tinkoni BO',
    pin: 845302
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Tola Mauje BO',
    pin: 845433
  },
  {
    state: 'Bihar',
    district: 'EAST CHAMPARAN',
    subDistrict: 'Turkaulia SO',
    pin: 845437
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Akaur BO',
    pin: 847230
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Alola BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Amahi BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Amouza BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Andah BO',
    pin: 847234
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Andhra SO',
    pin: 847401
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Araria Sangra BO',
    pin: 847109
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Arerhat SO',
    pin: 847222
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Auraha BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Awari BO',
    pin: 847308
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Baboobarhi SO',
    pin: 847224
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bagha Kusmar BO',
    pin: 847409
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Baikabishanpur BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Baira BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Baliabikrampur BO',
    pin: 847239
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Balua BO',
    pin: 847409
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bangama BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bankatta Uren BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Banki BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bardaha BO',
    pin: 847401
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Barha BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Barhampura BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Barhara BO',
    pin: 847401
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Barhi BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Barhmotra BO',
    pin: 847227
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Barri BO',
    pin: 847102
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Barsam BO',
    pin: 847411
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Baruar BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Basaith Chandpura SO',
    pin: 847102
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Basania BO',
    pin: 847421
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Basipatti BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Basopatti SO',
    pin: 847225
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Basuara BO',
    pin: 847212
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Basuari BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Basudevpur BO',
    pin: 847421
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Basuki Bihari BO',
    pin: 847305
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bath BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bathnaha BO',
    pin: 847227
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bathne BO',
    pin: 847236
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'BBelahi BO',
    pin: 847215
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Behat Goth BO',
    pin: 847403
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bela BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bela BO',
    pin: 847224
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bela BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Belarahi BO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Belauncha BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Belauza BO',
    pin: 847222
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Belha BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Belhi Bhawanipur BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Belhi BO',
    pin: 847227
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Belhwar BO',
    pin: 847215
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bengra BO',
    pin: 847308
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Benipatti SO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Benta BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Benta Parsa BO',
    pin: 847230
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Berma BO',
    pin: 847410
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bhachhi BO',
    pin: 847212
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bhagta BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bhagwatipurnahar BO',
    pin: 847236
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bhaiyapatti BO',
    pin: 847230
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bhakhrain BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bhakua BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bhalpatti BO',
    pin: 847239
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bhaptiahi BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bhargama BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bhariabishanpur BO',
    pin: 847235
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bharkhori BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bhatchaura BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bhatsimar BO',
    pin: 847235
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bhawanipur BO',
    pin: 847234
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bheja BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bhith Bhagwanpur BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bhour BO',
    pin: 847231
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bhowara SO',
    pin: 847212
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Biraoul BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Biratpur Birauli BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Biraul BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Biroul BO',
    pin: 847236
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Birpur BO',
    pin: 847225
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Birpur Harpatti BO',
    pin: 847227
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Birsair BO',
    pin: 847234
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bisanpur BO',
    pin: 847102
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Bishoul BO',
    pin: 847240
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Brahmpur BO',
    pin: 847409
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Chachraha BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Chandra Dih BO',
    pin: 847224
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Chanouraganj BO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Chapahi BO',
    pin: 847235
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Chatra BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Chatra BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Chaturbhuj Piprahi BO',
    pin: 847421
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Chhajana BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Chhatauni BO',
    pin: 847225
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Chhaurahi BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Chichorba BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Chichrikanungo BO',
    pin: 847235
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Chikna BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Choramahrail BO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Chunni BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dahaura BO',
    pin: 847239
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dahibatnathwan BO',
    pin: 847234
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dahiwatmadhopur BO',
    pin: 847234
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Daiya Kharwar BO',
    pin: 847403
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Daldal BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Damo BO',
    pin: 847225
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Damodarpur BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Datuar BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'DChandpura BO',
    pin: 847102
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Deep BO',
    pin: 847403
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Deodha BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Deopura BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Devhar BO',
    pin: 847224
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dhabahi BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dhakjari BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dhamaura BO',
    pin: 847224
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dhamiapatti BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dhanauja BO',
    pin: 847409
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dhanchhiha Baruar BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dhanga BO',
    pin: 847229
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dharmdiha BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dighia Phent BO',
    pin: 847225
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dorbar BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dubahi Mahinathpur BO',
    pin: 847225
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dullipatti BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dumari BO',
    pin: 847212
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dumra BO',
    pin: 847411
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Durgapatti BO',
    pin: 847308
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Dwalakh BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Ekhari BO',
    pin: 847232
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Ekhathha BO',
    pin: 847227
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Ektara BO',
    pin: 847222
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Gahuma Beria BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Gajhara BO',
    pin: 847227
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Ganauli BO',
    pin: 847401
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Gandhwair BO',
    pin: 847234
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Gangapur BO',
    pin: 847403
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Gangaur BO',
    pin: 847308
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Gangdwar BO',
    pin: 847235
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Ganguli BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Garatol BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Garha BO',
    pin: 847232
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Genaur BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Ghoghardiha SO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Ghonghour BO',
    pin: 847235
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Ghorabanki BO',
    pin: 847225
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Gobraura BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Gurmaha BO',
    pin: 847231
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Harbhanga BO',
    pin: 847403
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Haripur Baxi Tola BO',
    pin: 847229
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Haripur Dih Tol BO',
    pin: 847229
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Harlakhi BO',
    pin: 847240
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Harna BO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Harri BO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Hata Rupauli BO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Hatni BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Hattapur BO',
    pin: 847225
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Hisardeorhi BO',
    pin: 847230
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Hudra BO',
    pin: 847227
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Husainpur BO',
    pin: 847238
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Imadpatti BO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Jafra BO',
    pin: 847222
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Jagatpur BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Jagatpur BO',
    pin: 847213
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Jageshwar Asthan BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Jalsain BO',
    pin: 847411
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Jamsam BO',
    pin: 847234
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Jaso BO',
    pin: 847225
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Jaynagar Bazar SO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Jaynagar SO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Jhaloun BO',
    pin: 847232
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Jhanjharpur Court SO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Jhanjharpur RS SO',
    pin: 847403
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Jhanjharpur SO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Jiraul BO',
    pin: 847230
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Jitwarpur BO',
    pin: 847215
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Jonki BO',
    pin: 847225
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kachhua BO',
    pin: 847410
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kachhubi BO',
    pin: 847410
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kaithai BO',
    pin: 847236
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kaithinia BO',
    pin: 847403
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kakardobh BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kakna BO',
    pin: 847212
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kako BO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kakraul BO',
    pin: 847238
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kalapatti BO',
    pin: 847409
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kalikapur BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kalikapur BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kaluahi SO',
    pin: 847229
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kamalabari BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kamalpur BO',
    pin: 847225
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kanhauli BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kanhouli BO',
    pin: 847239
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kapileshwar Asthan BO',
    pin: 847238
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kapsiya BO',
    pin: 847213
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Karbi Dhankaul BO',
    pin: 847102
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Karhari BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Karhi BO',
    pin: 847222
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kariot BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Karmauli BO',
    pin: 847229
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Karmegh BO',
    pin: 847421
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kasma Marar BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kataiya BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kataya BO',
    pin: 847225
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kathia BO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kauwaha Barhi BO',
    pin: 847230
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Keotha BO',
    pin: 847230
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Keotna BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kerwar BO',
    pin: 847222
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kewalpatti BO',
    pin: 847235
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Khajauli SO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Khajedih BO',
    pin: 847232
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Khajuri BO',
    pin: 847212
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kharagwani BO',
    pin: 847224
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kharaua BO',
    pin: 847238
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kharra BO',
    pin: 847212
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Khauna BO',
    pin: 847240
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Khirhar SO',
    pin: 847230
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Khozpur BO',
    pin: 847224
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Khutauna SO',
    pin: 847227
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Koilakh BO',
    pin: 847236
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Korahia BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Korahiyabalha BO',
    pin: 847235
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kotjia Bharam BO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kuar BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kukurdaura BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kulharia BO',
    pin: 847401
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Kumarkhat BO',
    pin: 847232
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Ladania SO',
    pin: 847232
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Lakhnour BO',
    pin: 847403
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Lalmania BO',
    pin: 847421
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Laufa BO',
    pin: 847403
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Laukaha SO',
    pin: 847421
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Laukahi BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Laukahi Dhanchhiha BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Lawani BO',
    pin: 847410
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Laxamipur BO',
    pin: 847421
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Laxmipur BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Loha BO',
    pin: 847213
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Lohat SO',
    pin: 847231
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Lohna BO',
    pin: 847424
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Lorika BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'M G Bazar SO',
    pin: 847214
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Madhepur SO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Madhopur BO',
    pin: 847421
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Madhubani Court SO',
    pin: 847211
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Madhubani HO',
    pin: 847211
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Madhwapur SO',
    pin: 847305
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Madna BO',
    pin: 847401
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Mahadev Math BO',
    pin: 847452
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Maheaswara BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Mahindwar Navtoli BO',
    pin: 847109
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Mahpatia BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Mahrail BO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Mahtha BO',
    pin: 847232
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Mahthour BO',
    pin: 847409
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Mahua Ekdara BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Mailam BO',
    pin: 847235
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Maina Sukki BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Makhnaha BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Makrampur BO',
    pin: 847234
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Maksuda BO',
    pin: 847234
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Malangia BO',
    pin: 847212
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Malin Belha BO',
    pin: 847227
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Malmal BO',
    pin: 847229
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Mangrauni BO',
    pin: 847214
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Manpour BO',
    pin: 847230
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Mansapur BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Marhia BO',
    pin: 847225
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Marukia BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Massa BO',
    pin: 847102
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Matras BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Mauahi BO',
    pin: 847224
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Mdb Bara Bazar SO',
    pin: 847213
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Meghoul BO',
    pin: 847239
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Meghwan BO',
    pin: 847102
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Mehath BO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Mirjapur BO',
    pin: 847232
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Misrauli BO',
    pin: 847224
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Mureth BO',
    pin: 847229
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Murli BO',
    pin: 847409
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Nagdah Balain BO',
    pin: 847222
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Nagwas BO',
    pin: 847222
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Nahas Rupauli BO',
    pin: 847222
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Nainaghat BO',
    pin: 847239
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Najramahmda BO',
    pin: 847239
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Nakti BO',
    pin: 847235
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Nanaour BO',
    pin: 847109
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Narahiya SO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Narar BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Narendrapur BO',
    pin: 847452
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Narpatinagar BO',
    pin: 847239
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Navkarhi BO',
    pin: 847222
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Nazirpur BO',
    pin: 847215
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Neor BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Pachahi BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Pachrukhi BO',
    pin: 847224
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Padma BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Paithankabai BO',
    pin: 847239
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Palimohan BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Pandaul SO',
    pin: 847234
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Paraul BO',
    pin: 847229
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Pariharpur BO',
    pin: 847235
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Parjuar BO',
    pin: 847229
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Parsa BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Parsa BO',
    pin: 847109
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Parsahi Sirsiya BO',
    pin: 847421
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Parsauni BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Parsuna BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Parwa BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Pastan BO',
    pin: 847401
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Pathrahi BO',
    pin: 847227
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Patwara BO',
    pin: 847235
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Phatki BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Phulhar BO',
    pin: 847240
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Phulparas SO',
    pin: 847409
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Pilakhwar BO',
    pin: 847214
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Piprahi BO',
    pin: 847232
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Pipraun BO',
    pin: 847240
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Pirhi BO',
    pin: 847224
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Pirojgadh BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Pokhrouni BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Pursaulia BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Raghopur Deorhi BO',
    pin: 847239
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Raghopurbalat BO',
    pin: 847236
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Raghunidehat BO',
    pin: 847214
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Rahika SO',
    pin: 847238
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Rahua Sangram BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Raima BO',
    pin: 847308
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Raima BO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Raja Kharwar BO',
    pin: 847403
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Rajaram Patti BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Raje BO',
    pin: 847424
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Rajnagar SO Madhubani',
    pin: 847235
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Rakhwari BO',
    pin: 847411
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Ramchandra BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Ramnipatti BO',
    pin: 847224
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Rampatti SO',
    pin: 847236
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Rampur BO',
    pin: 847424
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Rampur BO',
    pin: 847240
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Ranti BO',
    pin: 847214
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Rashidpur BO',
    pin: 847229
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Rataul BO',
    pin: 847403
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Ratnasara BO',
    pin: 847108
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'RKCollage SO',
    pin: 847215
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Rudrapur SO Madhubani',
    pin: 847411
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Rupauli BO',
    pin: 847403
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sagarpur BO',
    pin: 847239
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sahar SO Madhubani',
    pin: 847308
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Saini BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sakhwar BO',
    pin: 847424
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sakri Madhubani SO',
    pin: 847239
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Salempur BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Salempur BO',
    pin: 847234
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sangi BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sankorthu BO',
    pin: 847424
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sanpatahi BO',
    pin: 847401
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sant Nagar BO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sapta BO',
    pin: 847214
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sarabe Tarapatti BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sarauti BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sarisavpahi SO',
    pin: 847424
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Satghara BO',
    pin: 847224
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Saurath BO',
    pin: 847213
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Seli Beli BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Selra BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Shahpur BO',
    pin: 847102
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Shahpur BO',
    pin: 847231
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Shambhuar BO',
    pin: 847234
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Shibipatti BO',
    pin: 847215
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Shivnagar BO',
    pin: 847102
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Shubhankarpur BO',
    pin: 847213
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Shyamsidhap BO',
    pin: 847235
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sidhap Kalan BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sidhhap Parsahi BO',
    pin: 847232
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sijaulia BO',
    pin: 847409
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Siktiahi BO',
    pin: 847227
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Simra BO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Simri BO',
    pin: 847222
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Simri BO',
    pin: 847235
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Siriapur BO',
    pin: 847230
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sirkharia BO',
    pin: 847109
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sirpurhati BO',
    pin: 847212
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Siswabarhi BO',
    pin: 847409
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Siswabazar BO',
    pin: 847409
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sohroul BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sonai BO',
    pin: 847308
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sonre BO',
    pin: 847410
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sothgaon BO',
    pin: 847240
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sudairatauli BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sugapatti BO',
    pin: 847409
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sugauna BO',
    pin: 847235
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sukhet BO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Sunder Virajit BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Suriahi Ramnagar BO',
    pin: 847409
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Tamuria SO',
    pin: 847410
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Taraiya BO',
    pin: 847102
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Tardiha BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Tazpur BO',
    pin: 847109
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Teghra BO',
    pin: 847227
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Tengraha BO',
    pin: 847408
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Tengrar BO',
    pin: 847409
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Thahar BO',
    pin: 847228
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Tharhi BO',
    pin: 847401
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Tharhi Sidhhap BO',
    pin: 847232
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Tilath BO',
    pin: 847402
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Tirhuta BO',
    pin: 847224
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Tisi Narsam BO',
    pin: 847223
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Tulapatganj SO',
    pin: 847109
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Uchhal BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Udaypur Bithwar BO',
    pin: 847231
  },
  {
    state: 'Bihar',
    district: 'MADHEPURA',
    subDistrict: 'Umari BO',
    pin: 847403
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Umgaon kothi SO',
    pin: 847240
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Usarahi Deodha BO',
    pin: 847226
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Uttra BO',
    pin: 847308
  },
  {
    state: 'Bihar',
    district: 'MADHUBANI',
    subDistrict: 'Vijai BO',
    pin: 847404
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Ababakarpur BO',
    pin: 844112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'ABishanpur BO',
    pin: 843113
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Adigopalpur BO',
    pin: 843118
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Aghoria Bazaar SO',
    pin: 842002
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Ahiyapur BO',
    pin: 843125
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Ajna Kot BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Alinagar Leorhan BO',
    pin: 843104
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Amaitha BO',
    pin: 843123
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Amarakh BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Amgola SO',
    pin: 842001
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Amma BO',
    pin: 843103
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Amnaur BO',
    pin: 843129
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Anant Kamtaul BO',
    pin: 844120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Angoa BO',
    pin: 843360
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'APurushotampur BO',
    pin: 842002
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Athar BO',
    pin: 843118
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Atrar BO',
    pin: 843129
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Aura BO',
    pin: 843131
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Aurai SO Muzaffarpur',
    pin: 843312
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Azizpur BO',
    pin: 844120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Baburban Tajpur BO',
    pin: 843127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Baghakhal BO',
    pin: 843103
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Baghi SO Muzaffarpur',
    pin: 844112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bahdinpur BO',
    pin: 843112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bajitpur BO',
    pin: 843123
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bakatpur BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bakhari BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bakhra SO',
    pin: 843101
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Balaur BO',
    pin: 844120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Balra Ismail BO',
    pin: 844112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Balthi Mushahari BO',
    pin: 843118
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Balthi Narhar BO',
    pin: 843125
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bandpura BO',
    pin: 843321
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bandra BO',
    pin: 843115
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bara Daud BO',
    pin: 843112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Baraitha BO',
    pin: 843321
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Barhad BO',
    pin: 843129
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Barhanda BO',
    pin: 843128
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bariarpur Karpur BO',
    pin: 843115
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bariarpur SO Muzaffarpur',
    pin: 843102
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Barjee BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Baruraj BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Basara Shukul BO',
    pin: 843123
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Basatpur BO',
    pin: 843125
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Basauli BO',
    pin: 844127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bashantpur Patti BO',
    pin: 843101
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Basua BO',
    pin: 843321
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Basudeo Sarai BO',
    pin: 843125
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'BBaghnagari BO',
    pin: 843105
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'BBajitpur BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'BBakhari BO',
    pin: 843121
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'BBarna BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'BBasudeo BO',
    pin: 843117
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bedaul Asli BO',
    pin: 843116
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Beladam BO',
    pin: 843105
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Belahi Lachchi BO',
    pin: 843131
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Berai BO',
    pin: 843129
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Berua BO',
    pin: 843122
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'BFiroj BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bhadai BO',
    pin: 843116
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bhagwanpur BO',
    pin: 844120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bhagwanpur BO',
    pin: 843120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bhagwatpur BO',
    pin: 843120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bhalura BO',
    pin: 843312
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bhartipur BO',
    pin: 843104
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bharwari SO MuzaffarpBO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bhatauna BO',
    pin: 843113
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bherokhara BO',
    pin: 844112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bihar University SO',
    pin: 842001
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Binda BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Birihma Bazar SO',
    pin: 843127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Birpur BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bishanpur Arara BO',
    pin: 844112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bishundatpur BO',
    pin: 843113
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bishunpur Patti BO',
    pin: 843125
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'BKalyan BO',
    pin: 843125
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'BKarman BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'BKesho BO',
    pin: 843118
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'BKesho BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bmahanand BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'BMPVI SO',
    pin: 842001
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'BMuza BO',
    pin: 843120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'BNijamat BO',
    pin: 843125
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Bochaha SO',
    pin: 843103
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'BPandey BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Brindawan BO',
    pin: 843131
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'BRudal BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'BTayab BO',
    pin: 843360
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Budhnagra Radha BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'BUmapat Basant BO',
    pin: 843116
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Ch Harishankar BO',
    pin: 844127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chahuta BO',
    pin: 843312
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chainpur Bangra BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chak Sarmastpur BO',
    pin: 843104
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chak Shambhu BO',
    pin: 843117
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chakna BO',
    pin: 843126
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chakwaja Nagma BO',
    pin: 844120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chamarua BO',
    pin: 843113
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chandanpatti SO',
    pin: 843104
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chandrahatti BO',
    pin: 844120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Changel BO',
    pin: 843360
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chapaith BO',
    pin: 844112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chapra Dharampur Jaddu BO',
    pin: 843108
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chapra Megh BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Charhua BO',
    pin: 844127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chatursi BO',
    pin: 843128
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chhap BO',
    pin: 843107
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chhata Bazar SO Muzaffarpur',
    pin: 842001
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chhitrauli BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chiraila BO',
    pin: 843118
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chochahi Chapra BO',
    pin: 843122
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chochahi Saraiya BO',
    pin: 843112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Chorghatta BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Choubey Ambara BO',
    pin: 843101
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Choumukh BO',
    pin: 843103
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'CRPF Camp BO',
    pin: 842004
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'DACollege SO',
    pin: 843121
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Dadar kolhua BO',
    pin: 843108
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Dahila BO',
    pin: 843103
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Dakrama BO',
    pin: 843116
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Damodarpur BO',
    pin: 843113
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Dargah Bela BO',
    pin: 843104
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Dariyapur Kafen BO',
    pin: 844127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Datapur Pachbhirwa BO',
    pin: 843101
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Daud Chapra BO',
    pin: 842004
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Daudpur BO',
    pin: 843107
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Dehuli Buzurg BO',
    pin: 843104
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Deoria SO Muzaffarpur',
    pin: 843120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Dhanaiya BO',
    pin: 843120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Dhanaur BO',
    pin: 843321
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Dharampur BO',
    pin: 843117
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Dharfari BO',
    pin: 843120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Dholi SO',
    pin: 843105
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Dih Jiwar BO',
    pin: 843116
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'DRSah BO',
    pin: 842002
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Dubaha Buzurg BO',
    pin: 843104
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Dubiahi BO',
    pin: 844127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Dubiahi BO',
    pin: 843106
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Dumari BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Dumri BO',
    pin: 843113
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Fateha BO',
    pin: 843124
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Fatehabad BO',
    pin: 843107
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Gangeya BO',
    pin: 843321
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Ganiari BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Gaus Nagar BO',
    pin: 843117
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'GDharampur BO',
    pin: 843128
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Geyaspur SO',
    pin: 843107
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Gharbhara BO',
    pin: 843103
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Ghosaut BO',
    pin: 843128
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Ghosrama BO',
    pin: 843115
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Gidha SO',
    pin: 843106
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Ginjas BO',
    pin: 843123
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Girigama Dih BO',
    pin: 844120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'GKNagar BO',
    pin: 843102
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Godanpatti BO',
    pin: 843118
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Gokhula Rupauli BO',
    pin: 843120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Gopalpur Neora BO',
    pin: 843126
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Gorigama BO',
    pin: 843117
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Govindpur Bejha BO',
    pin: 843105
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Govindpur Bela BO',
    pin: 843105
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'GPitaunjhia BO',
    pin: 843116
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Hanswara BO',
    pin: 843116
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Hardi SO Muzaffarpur',
    pin: 843122
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Haridaspur BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Harkhauli BO',
    pin: 843321
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Harnahi BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Harser BO',
    pin: 843128
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Hasna BO',
    pin: 843103
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'HKhanpur BO',
    pin: 843129
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'HManshahi BO',
    pin: 843128
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Hussepur BO',
    pin: 843125
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Ibrahimpur BO',
    pin: 843118
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Imlichatti SO',
    pin: 842001
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'IRNagar BO',
    pin: 843121
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Jagdishpur Baghnagari BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Jagdishpur BO',
    pin: 843125
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Jaimal Dumari BO',
    pin: 843107
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Jaintpur Estate SO',
    pin: 843123
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Jajuar SO',
    pin: 843360
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Jalalpur BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Jamalabad BO',
    pin: 842004
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Jamalpur BO',
    pin: 843124
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Jamin Mathia BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Janar BO',
    pin: 843116
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Jarang Deorhi BO',
    pin: 843118
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Jasauli BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Jasoda Math BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Jhapaha BO',
    pin: 842004
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Jhikati BO',
    pin: 844127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Jhingaha BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Jita Chapra BO',
    pin: 843127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kabilpur BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kachhi Sarai BO',
    pin: 842002
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kafen BO',
    pin: 843103
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kalwari SO Muzaffarpur',
    pin: 842006
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kalyani SO',
    pin: 842001
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kalyanpur BO',
    pin: 843107
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kamalpura BO',
    pin: 843101
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kamarthu BO',
    pin: 843118
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kanhara BO',
    pin: 843118
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kanhauli Azra SO',
    pin: 842002
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kanti SO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kanti TPS SO',
    pin: 843130
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Karamwari BO',
    pin: 843107
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Karja BO',
    pin: 843106
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Katesar BO',
    pin: 843102
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kathaiya SO',
    pin: 843124
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Katra SO Muzaffarpur',
    pin: 843321
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'KBabhangaon BO',
    pin: 843112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'KBithraul BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kerma BO',
    pin: 844127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Keshopur BO',
    pin: 843104
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Khabra BO',
    pin: 843113
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Khajechand Chapra BO',
    pin: 844112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Khangura BO',
    pin: 843321
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kharauna BO',
    pin: 843113
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kharhar BO',
    pin: 843117
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'KHRamani BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Khutahi BO',
    pin: 843107
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kinaru BO',
    pin: 844127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kishanpur Telour BO',
    pin: 843102
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'KMadhuban BO',
    pin: 844127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'KMohan BO',
    pin: 844127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kodaria BO',
    pin: 843128
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kokilwara BO',
    pin: 843312
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kolwara BO',
    pin: 843123
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Koria Nizamat BO',
    pin: 843112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Korlahia Mansingh BO',
    pin: 843117
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Krishnawara BO',
    pin: 843104
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kuahi SO',
    pin: 843116
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kurhani SO',
    pin: 844120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Kurnowl SO',
    pin: 843125
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Ladaura Pakari BO',
    pin: 843113
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Laloo Chapra BO',
    pin: 843126
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Lautan BO',
    pin: 843117
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Lohsari BO',
    pin: 843103
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Loma BO',
    pin: 843118
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'M Afzalpur BO',
    pin: 844120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Machhahi BO',
    pin: 843105
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Madhaul BO',
    pin: 843101
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Madhopur BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Madhubani BO',
    pin: 843125
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mahanth Maniari BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mahartha BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mahdaiya BO',
    pin: 843128
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mahindwara BO',
    pin: 843117
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mahmada BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mahual RS BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Maithi BO',
    pin: 843118
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Majhaulia BO',
    pin: 843104
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Maksudpur BO',
    pin: 843117
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Malighat Maniari SO',
    pin: 842001
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Malpur Agrail BO',
    pin: 843104
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Malpur BO',
    pin: 843103
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Manain BO',
    pin: 843125
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Manika BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Manohar Chapra BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Manpur Ratnauli BO',
    pin: 843116
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mansoorpur BO',
    pin: 843101
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mansurpur Halaiya BO',
    pin: 844112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Maripur BO',
    pin: 842003
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Markan BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Marwan BO',
    pin: 843113
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Marwan BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mathna Mallik BO',
    pin: 844112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mathurapur Buzurg BO',
    pin: 843321
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Matihani BO',
    pin: 843116
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'MBadal BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'MBalmi BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Meghua BO',
    pin: 843131
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mehshi BO',
    pin: 843105
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'MFarakpur BO',
    pin: 843116
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'MGopinathpur BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'MHazari BO',
    pin: 843125
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'MIC SO',
    pin: 842005
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Minapur SO',
    pin: 843128
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mirapur BO',
    pin: 843121
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mirzapur BO',
    pin: 843126
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mirzapur BO',
    pin: 843103
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'MIT SO',
    pin: 842003
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mohabatpur BO',
    pin: 843120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mohamadpur BO',
    pin: 843120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mohammadpur Bhopat BO',
    pin: 843102
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mohjama BO',
    pin: 843107
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Morsandi BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Motijheel SO Muzaffarpur',
    pin: 842001
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Motipur SO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'MPachdahi BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'MSusta BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Munni Bangari BO',
    pin: 843115
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mushahari Farm BO',
    pin: 842002
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mustafaganj BO',
    pin: 843128
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mustafapur BO',
    pin: 842004
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Mutlupur BO',
    pin: 843115
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Muz Collectorate SO',
    pin: 842001
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Muza Patrahia BO',
    pin: 843126
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Muzaffarpur Court SO',
    pin: 842001
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Muzaffarpur HO',
    pin: 842001
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Narauli BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Nariar Panapur BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Narma SO',
    pin: 843129
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Narsinghpur BO',
    pin: 842002
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Narsinghpur BO',
    pin: 843105
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Narwara BO',
    pin: 843131
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Naya Tola SO MuzaffarpBO',
    pin: 842002
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'NChampapur BO',
    pin: 843104
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Neknampur BO',
    pin: 843120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Newachak BO',
    pin: 843102
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Noonfara BO',
    pin: 843115
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Olipur Sarhachia BO',
    pin: 843117
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Pagahia Aima BO',
    pin: 843122
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Pahsaul BO',
    pin: 843321
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Paigambarpur BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Pakari BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Pakari Pakohi BO',
    pin: 843113
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Pakhnaha Shriram BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Pakki Sarai SO',
    pin: 842001
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Pana Chapra BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Panapur Akhtiarpur BO',
    pin: 843123
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Panapur Kariat BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Paraspatti BO',
    pin: 843125
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Paroo SO',
    pin: 843112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Parsauni Nath BO',
    pin: 843127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Parsauni Pagahia BO',
    pin: 843122
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Partapur BO',
    pin: 843106
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Patahi SO Muzaffarpur',
    pin: 843113
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Patsara BO',
    pin: 843115
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Patti Aswari BO',
    pin: 843124
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'PBasarat BO',
    pin: 843120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'PBishanpur BO',
    pin: 843115
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Phular BO',
    pin: 843107
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Phulwaria BO',
    pin: 843107
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Piar SO',
    pin: 843115
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Pilkhi Gajpatti BO',
    pin: 843121
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Pindauli BO',
    pin: 843321
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Pipra Asli BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Pirapur BO',
    pin: 843115
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Pitaunjhia BO',
    pin: 843116
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'PKolhua SO',
    pin: 843108
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'PMushahari BO',
    pin: 843124
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Prahladpur BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'PShyam BO',
    pin: 843103
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'PTJiwar BO',
    pin: 843129
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Pupari BO',
    pin: 844127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Purani Bazar SO',
    pin: 842001
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Raghai BO',
    pin: 843128
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Raghopur BO',
    pin: 843128
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Raghunathpur BO',
    pin: 843126
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Raini BO',
    pin: 843121
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Raja Pakar BO',
    pin: 843102
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Raja Rampur BO',
    pin: 843126
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Rajala BO',
    pin: 844120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Rajepur BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Rajkhand BO',
    pin: 843312
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Rajwara BO',
    pin: 843125
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Raksha BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Ram Nagar BO',
    pin: 843103
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Ramna SO Muzaffarpur',
    pin: 842002
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Rampur Bheriahi BO',
    pin: 843122
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Rampur Dayal BO',
    pin: 843115
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Rampur Hari SO',
    pin: 843117
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Rampur Mina BO',
    pin: 843127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Ratnauli BO',
    pin: 844127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Ratwara Bindwara BO',
    pin: 843312
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Ratwara BO',
    pin: 843115
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'RDSCollege SO',
    pin: 842002
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Repura Mahadeo BO',
    pin: 843107
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Repura RBishwanath BO',
    pin: 843123
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Rewa Basantpur BO',
    pin: 843101
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'RKAshram BO',
    pin: 842002
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'RKMalahi BO',
    pin: 843126
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'RSaghari BO',
    pin: 843312
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Rup Chapra BO',
    pin: 843125
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Rupauli BO',
    pin: 843106
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sadiquepur BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sagahari BO',
    pin: 843128
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sahbajpur Puraina BO',
    pin: 843102
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sahi Minapur BO',
    pin: 843312
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sahpur Maricha BO',
    pin: 844112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sahpurpatti BO',
    pin: 843120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sainpatti SPSingh BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sakari Saraiya BO',
    pin: 844127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sakarwara BO',
    pin: 843118
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sanathi BO',
    pin: 843103
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sangopatti BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Saraiya Bazar BO',
    pin: 843112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Saraiya BO',
    pin: 843127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Saraiya BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Saraiya Factory SO',
    pin: 843126
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Saraiyaganj SO',
    pin: 842001
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sarfuddinpur SO',
    pin: 843118
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sarhachia BO',
    pin: 843116
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sarmastpur BO',
    pin: 843107
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sarwarpur BO',
    pin: 843131
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'SBarkagaon BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sehan BO',
    pin: 844112
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Shahila Balli BO',
    pin: 843129
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Shahila Rampur BO',
    pin: 843129
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sheikhpur BO',
    pin: 842002
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Shirsia Jagdish BO',
    pin: 843127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Shitalpatti BO',
    pin: 843128
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Shivdaspur BO',
    pin: 843321
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Shrikant BO',
    pin: 843115
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Siho BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sikandarpur SO Muzaffarpur',
    pin: 842001
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Silout SO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Simra Urf Afzalpur BO',
    pin: 843113
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Singar BO',
    pin: 843109
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sirkhiria BO',
    pin: 843117
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sirkohia BO',
    pin: 843123
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sirsia Buzurg BO',
    pin: 843108
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Siwaipatti BO',
    pin: 843128
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'SJahangirpur BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'SMuraul BO',
    pin: 843121
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sohansa BO',
    pin: 843120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sonbarsa BO',
    pin: 843131
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sonbarsa Dih BO',
    pin: 843119
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sonepur BO',
    pin: 843321
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'SSandha BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'SSKBhawan SO',
    pin: 842001
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Subhaigarh BO',
    pin: 843117
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Subhankarpur BO',
    pin: 843113
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sundar Sarai BO',
    pin: 843111
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Sundarpur BO',
    pin: 843102
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Susta BO',
    pin: 842002
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Tarawa BO',
    pin: 843125
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Tariyani Chowk SO',
    pin: 843131
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Tengraha BO',
    pin: 843117
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Tengrari BO',
    pin: 843128
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Tepari BO',
    pin: 843115
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Thikaha Basudeo BO',
    pin: 843124
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Titra Ashanand BO',
    pin: 843105
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Tola Muza BO',
    pin: 843120
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Turki Khararu BO',
    pin: 843128
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Turki SO',
    pin: 844127
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Ufrauli BO',
    pin: 843360
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Umanagar SO',
    pin: 842004
  },
  {
    state: 'Bihar',
    district: 'MUZAFFARPUR',
    subDistrict: 'Unsar BO',
    pin: 843103
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Achra BO',
    pin: 854336
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Adhang BO',
    pin: 854330
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Ahilgaon BO',
    pin: 854327
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Ajhokopa BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Akarthapa BO',
    pin: 854102
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Amari kukron BO',
    pin: 854205
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Amgachhi BO',
    pin: 854332
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Amhara BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Amouna BO',
    pin: 854316
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Amour BO',
    pin: 854315
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Araria Bairgachhi BO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Araria RS SO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Araria SO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Asja Mobaiya BO',
    pin: 854315
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Aurahi Gobindpur BO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Aurahi Hingua BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'B Rampur BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bagdahara BO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bagnagar BO',
    pin: 854325
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bagulaha BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Baharbari BO',
    pin: 854329
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bahdura BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bahora BO',
    pin: 854306
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Baisi SO',
    pin: 854315
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Ballia BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Balua Deorhi BO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Balua Kachahari BO',
    pin: 854201
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Balua kaliaganj BO',
    pin: 854333
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Banaili SO',
    pin: 854201
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bangama BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Banmankhi SO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bansbari BO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Banshi Purandaha BO',
    pin: 854205
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bara Idagah BO',
    pin: 854330
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bara Istambarar BO',
    pin: 854329
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bardahahat BO',
    pin: 854333
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bardela BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Barhara BO',
    pin: 854335
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Barhara Kothi SO',
    pin: 854203
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Barhari BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Barmasia Simarbani BO',
    pin: 854333
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Barsauni BO',
    pin: 854326
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Basaity BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Basmatia BO',
    pin: 854336
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bathnaha SO',
    pin: 854316
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bathraha Ashabhag BO',
    pin: 854332
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Baturbari BO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Baunsi BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Begumpur BO',
    pin: 854330
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bela Basmatia BO',
    pin: 854336
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bela Rikbaganj BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Belouri BO',
    pin: 854326
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Belsara BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Belwa BO',
    pin: 854337
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Betouna BO',
    pin: 854330
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bhadeshwar BO',
    pin: 854316
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bhagwa Deviganj BO',
    pin: 854335
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bhangahi BO',
    pin: 854316
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bhargama BO',
    pin: 854102
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bharmara BO',
    pin: 854330
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bhatgama BO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bhatottar Chakla BO',
    pin: 854203
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bhatsara BO',
    pin: 854203
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bhatta Bazar SO',
    pin: 854301
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bhawanipur BO',
    pin: 854336
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bhawanipur Rajdham SO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bhirbhiri BO',
    pin: 854333
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bhogabhatgama BO',
    pin: 854337
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bhojpur BO',
    pin: 854333
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bhuna BO',
    pin: 854325
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bihari BO',
    pin: 854329
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bikash Bhargama BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Birnagar BO',
    pin: 854102
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bishanpur BO',
    pin: 854315
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bishanpur Deorhi BO',
    pin: 854203
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bishanpur Dutt BO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bithnauli BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'BKAsthan BO',
    pin: 854303
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Bochgaon BO',
    pin: 854330
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Bochi BO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Burhia Dhankatta BO',
    pin: 854306
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Chainpur BO',
    pin: 854325
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Chakaihat BO',
    pin: 854329
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Chakmaka BO',
    pin: 854102
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Champawati BO',
    pin: 854306
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Chandardai BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Chandrahi BO',
    pin: 854205
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Chanka BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Channidoria BO',
    pin: 854315
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Charaiya BO',
    pin: 854315
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Chhatiouna BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Chiknihat BO',
    pin: 854331
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Chirah BO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Chokta BO',
    pin: 854325
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Chopra Ram Nagar SO',
    pin: 854102
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Dabhara BO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Dagarua Hat BO',
    pin: 854326
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Dalmalpur BO',
    pin: 854329
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Damgara BO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Dehati BO',
    pin: 854333
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Deottar BO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Dhamdaha SO',
    pin: 854205
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Dharamaganj BO',
    pin: 854333
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Dharhara Millik BO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Dhima BO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Dholbazza BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Dibra BO',
    pin: 854203
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Dobha BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Doria Sonapur BO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Dubha BO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Dumra BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Dumuria Bisstaria BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Durgapur BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Ekamba Nishara BO',
    pin: 854327
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Ekraha BO',
    pin: 854102
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Farkia BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Fatehpur BO',
    pin: 854335
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Forbesganj SO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Gairah BO',
    pin: 854325
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Gairki BO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Gaiyari BO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Gamharia BO',
    pin: 854333
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Ganeshpur BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Gangali BO',
    pin: 854303
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Gangarghosh BO',
    pin: 854315
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Garhbanaili SO',
    pin: 854325
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Garhiyabalua BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Gaura BO',
    pin: 854337
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Ghurna BO',
    pin: 854336
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Gidwas BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Goasi BO',
    pin: 854303
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Gokhlapur BO',
    pin: 854335
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Gokulpur BO',
    pin: 854306
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Gulabbagh SO',
    pin: 854326
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Gunwanti BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Gurahi BO',
    pin: 854330
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Hafania BO',
    pin: 854315
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Haldharahat BO',
    pin: 854331
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Haldia Bokra BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Hansa BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Harda BO',
    pin: 854303
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Haripur Dak BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Haripur Madi BO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Harirahi BO',
    pin: 854203
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Harpatti BO',
    pin: 854102
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Haryabara BO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Hasanganj BO',
    pin: 854337
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Hingua BO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Indrapur Barhara BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Jabe BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Jageli BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Jagta BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Jahanpur BO',
    pin: 854329
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Jalalgarh SO',
    pin: 854327
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Jamua BO',
    pin: 854331
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Jankinagar BO',
    pin: 854102
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Jaynagar BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Jhalari BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Jhawari BO',
    pin: 854330
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Jhunni Kalan BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Jogbani SO',
    pin: 854328
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Jokihat SO',
    pin: 854329
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Kajha BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Kajhi BO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Kakan BO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Kala Balua BO',
    pin: 854201
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Kalsar BO',
    pin: 854337
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Kamaldaha BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Kamalpur BO',
    pin: 854203
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Kanharia BO',
    pin: 854315
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Kankhudia BO',
    pin: 854333
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Kannaili BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Karankia BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Kasba SO Purnia',
    pin: 854330
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'KBaijnathpur BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Kesharra BO',
    pin: 854329
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Khagra BO',
    pin: 854335
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Khairkhan BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Khajurihat BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Kharaiya BO',
    pin: 854315
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Khawashpur BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Khemchand BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Khokha BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Khoksa BO',
    pin: 854315
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Khudna Rupaspur BO',
    pin: 854303
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Khuskibagh SO',
    pin: 854305
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Koshkapur BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Kuari SO',
    pin: 854332
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Kujari BO',
    pin: 854333
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Kukraon BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'KullaKhas BO',
    pin: 854330
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Kursail BO',
    pin: 854329
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Kursakanta SO',
    pin: 854331
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Kushkapur BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Kushmaha BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Kushmoul BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Kuwarigola BO',
    pin: 854205
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Ladugarh BO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Lalganj BO',
    pin: 854303
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Latraha BO',
    pin: 854203
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Laukahi Sukhasan BO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Machhaila BO',
    pin: 854325
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Machhatta BO',
    pin: 854315
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Madanpur SO Araria',
    pin: 854333
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Madarghat BO',
    pin: 854330
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Madhavnagar BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Madhulata BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Madhura BO',
    pin: 854335
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Mahalbari BO',
    pin: 854326
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Mahalgaon BO',
    pin: 854325
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Mahamadia BO',
    pin: 854330
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Maharajganj BO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Maheshwari BO',
    pin: 854328
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Mahsail BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Mahthawabazar BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Mainahat BO',
    pin: 854329
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Majgama BO',
    pin: 854330
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Majhuwa BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Majhuwa BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Majhuwakalan BO',
    pin: 854330
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Makelibalgachhi BO',
    pin: 854315
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Maldiha BO',
    pin: 854203
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Maldwar BO',
    pin: 854333
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Malinia Diara BO',
    pin: 854201
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Mangalbar Chiraiya BO',
    pin: 854102
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Manikpur BO',
    pin: 854336
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Manullah patti BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Maranga BO',
    pin: 854303
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Maryganj SO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Masuria BO',
    pin: 854325
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Mathour BO',
    pin: 854330
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Matiyari BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Matiyari BO',
    pin: 854329
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Matkopa BO',
    pin: 854330
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Maujaha BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Mauzampatti BO',
    pin: 854203
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Megra Mehndipur BO',
    pin: 854331
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Mehdi BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Mirdaul BO',
    pin: 854335
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Mirganj BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Mirjapur Kothi BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Mirzapur BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Mohan kunda BO',
    pin: 854326
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Mohani BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Mohania Chakla BO',
    pin: 854102
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'MPurandaha BO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Musahari Idgah BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Narpatganj SO',
    pin: 854335
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Nathpur BO',
    pin: 854335
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Nawabganj SO Araria',
    pin: 854336
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Nipania BO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Nirpur BO',
    pin: 854203
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Orlaha BO',
    pin: 854203
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Pachira BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Pahsara BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Pahunsi BO',
    pin: 854332
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Paikpar BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Paiktola BO',
    pin: 854325
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Pakari BO',
    pin: 854329
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Palasi BO',
    pin: 854333
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Palasi Chakardaha BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Panjarkatta BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Pararia BO',
    pin: 854333
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Parasmani BO',
    pin: 854306
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Parihari BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Parmanpur BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Parora BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Parsa Hat BO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Parwaha BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Pategana BO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Patharbari BO',
    pin: 854329
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Pipra BO',
    pin: 854102
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Pipra BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Pithoura BO',
    pin: 854335
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Pokharia Benguwabad BO',
    pin: 854326
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Pothia BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'PTDumaria BO',
    pin: 854325
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Purnea Aerodram BO',
    pin: 854303
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Purnea Chowk SO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Purnea City SO',
    pin: 854302
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Purnea Court SO',
    pin: 854301
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Purnea DB SO',
    pin: 854301
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Purnea HO',
    pin: 854301
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Purnea Polyticnic SO',
    pin: 854303
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Raghunathpur BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Raghunathpur BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Rahua BO',
    pin: 854303
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Rajganj BO',
    pin: 854335
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Rajokhar BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Ramai BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Ramnagar BO',
    pin: 854201
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Rampur BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Rampur Kodarkatti BO',
    pin: 854325
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Rampur Mohanpur BO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Rampur Tilak BO',
    pin: 854102
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Rangpura BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Ranipatra SO',
    pin: 854337
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Rasarh BO',
    pin: 854202
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Rautara BO',
    pin: 854337
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Routahat BO',
    pin: 854315
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'RTMohan BO',
    pin: 854311
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Rupaspur BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Rupauli BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Sadhubeli BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Sadipur Bhutaha BO',
    pin: 854315
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Sahara BO',
    pin: 854303
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Sahidganj BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Sanjhaghat BO',
    pin: 854205
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Sarsi SO',
    pin: 854306
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Shankarpur BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Shekhapura BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Shilanath Rupauli BO',
    pin: 854102
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Siarkhan BO',
    pin: 854326
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Sikti BO',
    pin: 854333
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Simarbani BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Simraha BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Singhiya BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Sirsia Kalan BO',
    pin: 854334
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Sohagmare BO',
    pin: 854331
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Sohandarhat BO',
    pin: 854329
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Sohangaon BO',
    pin: 854327
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Sonapur Bazar BO',
    pin: 854316
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Sondeep BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Sourajabar BO',
    pin: 854315
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Sourgaon BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Southa BO',
    pin: 854325
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'SRForbesganj SO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Srinagar BO',
    pin: 854304
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Sripur BO',
    pin: 854205
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'STBrahmgyani BO',
    pin: 854204
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Talbari BO',
    pin: 854315
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Tamganj BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Tamghatti BO',
    pin: 854312
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Tarauna BO',
    pin: 854327
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Tarbi BO',
    pin: 854329
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Tetrahi BO',
    pin: 854102
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Tirakhardah BO',
    pin: 854331
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Tiraskund BO',
    pin: 854318
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Tolikola BO',
    pin: 854330
  },
  {
    state: 'Bihar',
    district: 'ARARIA',
    subDistrict: 'Urlaha BO',
    pin: 854333
  },
  {
    state: 'Bihar',
    district: 'PURNIA',
    subDistrict: 'Zianganj BO',
    pin: 854306
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Aami BO',
    pin: 841207
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Afaur BO',
    pin: 841414
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Agauthar Nanda BO',
    pin: 841411
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Amar Chapra BO',
    pin: 841414
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Amardah BO',
    pin: 841421
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Amdarhi BO',
    pin: 841208
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Amnour Harnarain BO',
    pin: 841401
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Amnour SO',
    pin: 841401
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Anjani BO',
    pin: 841219
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Anwal BO',
    pin: 841213
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Aphar SO',
    pin: 841402
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Arbindnagar BO',
    pin: 841221
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Ardewa BO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Arna BO',
    pin: 841417
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Aruwa BO',
    pin: 841224
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Arwa BO',
    pin: 841442
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Asahani BO',
    pin: 841204
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Ashok Nagar BO',
    pin: 841412
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Atarsan BO',
    pin: 841204
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Atta BO',
    pin: 841419
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Awari BO',
    pin: 841419
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Babhangawa BO',
    pin: 841219
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Badar Zamin BO',
    pin: 841224
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Badlu Tola BO',
    pin: 841414
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Baghakol BO',
    pin: 841215
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Baghauna BO',
    pin: 841223
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bahrauli BO',
    pin: 841417
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Baijalpur Keso BO',
    pin: 841101
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bajaiha BO',
    pin: 841221
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Baksanda BO',
    pin: 841219
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Baldiha BO',
    pin: 841401
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Balsohi BO',
    pin: 841417
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Banauta BO',
    pin: 841215
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bangra BO',
    pin: 841205
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Baniapur SO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bankat BO',
    pin: 841422
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Banpura Bazar BO',
    pin: 841206
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Banpura BO',
    pin: 841212
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bardahiya BO',
    pin: 841419
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bareja SO Saran',
    pin: 841201
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Barka Baneya BO',
    pin: 841219
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Barua BO',
    pin: 841101
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Barwakhurd BO',
    pin: 841205
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Barwe BO',
    pin: 841219
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Basahi BO',
    pin: 841206
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Basant SO',
    pin: 841202
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Basantpur Bangla BO',
    pin: 841401
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Basdila BO',
    pin: 841412
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Basti Jalal BO',
    pin: 841221
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bela BO',
    pin: 841221
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Belhari BO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bellour BO',
    pin: 841410
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Berui BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bhagwan Bazar SO',
    pin: 841301
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bhagwanpur BO',
    pin: 841219
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bhagwatpur BO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bhainsmara BO',
    pin: 841311
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bhalua Bhikhari BO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bhaluhi BO',
    pin: 841419
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bharpura BO',
    pin: 841101
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bhatgai BO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bhatha BO',
    pin: 841215
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bhatha Sonho SO',
    pin: 841460
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bhatkeshri BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bhatwalia BO',
    pin: 841214
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bhawalpur BO',
    pin: 841401
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bheldi BO',
    pin: 841402
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bhithi Sahabuddin BO',
    pin: 841411
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bhorahopur BO',
    pin: 841208
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bhorha BO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bhualpur BO',
    pin: 841415
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bigaha BO',
    pin: 841212
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Bishunpura Kala BO',
    pin: 841208
  },
  {
    state: 'Bihar',
    district: 'SAMASTIPUR',
    subDistrict: 'Bodha Chapra BO',
    pin: 841225
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Brahampur BO',
    pin: 841305
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Brit Bhagwanpr BO',
    pin: 841410
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'BTKohra BO',
    pin: 841219
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Chainwa SO',
    pin: 841204
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Chakia BO',
    pin: 841410
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Chanchaura BO',
    pin: 841204
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Chanchaura BO',
    pin: 841414
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Chandpurwa BO',
    pin: 841411
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Chapra HO',
    pin: 841301
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Chatra BO',
    pin: 841213
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Cheful BO',
    pin: 841209
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Chhapia BO',
    pin: 841417
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Chhitraulia BO',
    pin: 841208
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Chirand BO',
    pin: 841211
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Chorauwa BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dariapur BO',
    pin: 841221
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Darihara BO',
    pin: 841101
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Daudpur SO Saran',
    pin: 841205
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Daulatganj BO',
    pin: 841301
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dayalpur SO Saran',
    pin: 841206
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Deo Bahuara BO',
    pin: 841442
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Deopura BO',
    pin: 841212
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Deorhi BO',
    pin: 841401
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Deoria BO',
    pin: 841225
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Deoria BO',
    pin: 841213
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dhamsar BO',
    pin: 841224
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dhanaw BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dhangarha BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dharhara Kala BO',
    pin: 841402
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dharmapura BO',
    pin: 841201
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dhelhari BO',
    pin: 841214
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dhenuki BO',
    pin: 841417
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dholahi Kaithal BO',
    pin: 841402
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dhoopnagar Dhobawal BO',
    pin: 841412
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dighwara SO',
    pin: 841207
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'District Board SO',
    pin: 841301
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dohar BO',
    pin: 841204
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Doriganj BO',
    pin: 841211
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'DSultanpur BO',
    pin: 841202
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dubauli BO',
    pin: 841410
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dumaigarh BO',
    pin: 841209
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dumari Balua BO',
    pin: 841216
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dumari Bujurg BO',
    pin: 841217
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dumari Chhapia BO',
    pin: 841417
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dumarshan Bangra SO',
    pin: 841410
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dumri BO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Dumri BO',
    pin: 841313
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Ekma Nautan BO',
    pin: 841208
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Ekma SO',
    pin: 841208
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Eksar BO',
    pin: 841204
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Enai BO',
    pin: 841305
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Fakuli BO',
    pin: 841316
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Fatehpur Chain BO',
    pin: 841202
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Ferusa BO',
    pin: 841415
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Fulwaria Tajpur SO',
    pin: 841209
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Fursatpur BO',
    pin: 841222
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Gamahria BO',
    pin: 841421
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Gariba Tola SO',
    pin: 841312
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Garkha SO',
    pin: 841311
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Gaura SO Saran',
    pin: 841443
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Gawandri BO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'GDurgapur BO',
    pin: 841313
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Gheghta BO',
    pin: 841302
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Ghorhat Mathia BO',
    pin: 841313
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'GNParshurampur BO',
    pin: 841401
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Gohpur BO',
    pin: 841311
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Gola Mubarkpur BO',
    pin: 841209
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Gopalpur BO',
    pin: 841217
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Goraipur BO',
    pin: 841207
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Govindchak BO',
    pin: 841101
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'GPiparpanti BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'GSBangra BO',
    pin: 841412
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Gultenganj SO',
    pin: 841211
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Gurukul Mehiya BO',
    pin: 841302
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Hafijpur BO',
    pin: 841422
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Haraji BO',
    pin: 841207
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Harihar Kshetra BO',
    pin: 841101
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Hariharpur BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Harpur BO',
    pin: 841208
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Hasulahi Deoria BO',
    pin: 841213
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'HKarah BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Hussepur BO',
    pin: 841419
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Hussepur BO',
    pin: 841220
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Inayatpur BO',
    pin: 841205
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Ishrauli BO',
    pin: 841419
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Ishuwapur SO',
    pin: 841411
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Ismela BO',
    pin: 841221
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Itawa BO',
    pin: 841202
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Jagarnathpur BO',
    pin: 841222
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Jagdam College SO',
    pin: 841301
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Jaithar BO',
    pin: 841417
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Jaitipur BO',
    pin: 841207
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Jaitpur Bharwalia BO',
    pin: 841205
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Jalalpur Bazar SO',
    pin: 841412
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Jamanpura BO',
    pin: 841201
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Jayee Chapra BO',
    pin: 841209
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'JBishunpura BO',
    pin: 841211
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Jhakhra BO',
    pin: 841401
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Jhauwa BO',
    pin: 841216
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Jigna Parsa BO',
    pin: 841305
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Jogia SO',
    pin: 841212
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'K P Rampur BO',
    pin: 841211
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kachnar BO',
    pin: 841214
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kahi BO',
    pin: 841412
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kaituka Nandan BO',
    pin: 841460
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kakadhiya BO',
    pin: 841414
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kakrahat BO',
    pin: 841222
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kamta BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kanar Hariharpur BO',
    pin: 841414
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kans Diara BO',
    pin: 841216
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Karahi BO',
    pin: 841220
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Karanpura BO',
    pin: 841401
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Katsa BO',
    pin: 841311
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kawalpura BO',
    pin: 841417
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kerwa BO',
    pin: 841411
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Keshri Mathia BO',
    pin: 841220
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kewani BO',
    pin: 841311
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Khabsi BO',
    pin: 841443
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Khaira SO Saran',
    pin: 841414
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Khairwar BO',
    pin: 841214
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Khajuhatti BO',
    pin: 841209
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Khalpura BO',
    pin: 841211
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Khanpur BO',
    pin: 841208
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Khanpur BO',
    pin: 841207
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Khardahiya BO',
    pin: 841205
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kharika BO',
    pin: 841101
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Khawaspur BO',
    pin: 841312
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Khodaibagh SO',
    pin: 841415
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kishunpur BO',
    pin: 841412
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'KManohar BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kohra BO',
    pin: 841205
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kolhua BO',
    pin: 841422
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kopa Bazar SO',
    pin: 841214
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kopa Samhota SO',
    pin: 841213
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Koreya BO',
    pin: 841218
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kotheya BO',
    pin: 841412
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kotheya BO',
    pin: 841216
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kudarbadha BO',
    pin: 841202
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Kumna BO',
    pin: 841205
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Lachhi Kaituka BO',
    pin: 841460
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Lahladpur BO',
    pin: 841224
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Latrahiya BO',
    pin: 841219
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Lauwa BO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Lauwa Kala BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Lejuar BO',
    pin: 841205
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'M Kuari BO',
    pin: 841219
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Madansath BO',
    pin: 841201
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Madarpur BO',
    pin: 841311
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Madarpur BO',
    pin: 841422
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Madhopur BO',
    pin: 841415
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Magaidih BO',
    pin: 841316
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Mahamda BO',
    pin: 841302
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Majhanpura BO',
    pin: 841305
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Majlishpur BO',
    pin: 841213
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Maker SO',
    pin: 841215
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Malkhachak BO',
    pin: 841207
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Mane BO',
    pin: 841205
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Mangolapur BO',
    pin: 841412
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Manikpura BO',
    pin: 841220
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Manikpura BO',
    pin: 841206
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Manjhi SO',
    pin: 841313
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Manpur BO',
    pin: 841414
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Manupur BO',
    pin: 841207
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Marar BO',
    pin: 841219
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Marhowrah HO',
    pin: 841418
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Maricha BO',
    pin: 841411
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Masrakh SO',
    pin: 841417
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Masti Chak BO',
    pin: 841219
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Matiyar BO',
    pin: 841209
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Mauna SO',
    pin: 841301
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Meera Mushehri BO',
    pin: 841414
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Mehrauli BO',
    pin: 841211
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Methwalia BO',
    pin: 841213
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Mirpur Zuara BO',
    pin: 841216
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Mirzapur Khurd Lauwa BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Mirzapur SO Saran',
    pin: 841419
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Mohamadpur SO',
    pin: 841223
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Mohammadpur BO',
    pin: 841311
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Moreya BO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Mothaha BO',
    pin: 841442
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Mubarakpur BO',
    pin: 841415
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Mujauna BO',
    pin: 841207
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Mukrera BO',
    pin: 841213
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Murarpur BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Mushehri BO',
    pin: 841414
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Nachap BO',
    pin: 841208
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Nagdiha BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Nagra SO Saran',
    pin: 841442
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Naini SO Saran',
    pin: 841316
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Nandpur BO',
    pin: 841313
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Naraon SO',
    pin: 841216
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Narayanpur BO',
    pin: 841401
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Narharpur BO',
    pin: 841443
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Narpaliya BO',
    pin: 841313
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Narwan BO',
    pin: 841223
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Natwar Semaria BO',
    pin: 841214
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Nautan BO',
    pin: 841401
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Nawada BO',
    pin: 841412
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Nawada BO',
    pin: 841417
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Nayagaon SO',
    pin: 841217
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Olahanpur BO',
    pin: 841415
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Pachbhinda BO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Pachlakh BO',
    pin: 841402
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Pachraur BO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Pachrukhi BO',
    pin: 841402
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Pachua BO',
    pin: 841220
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Paharpur BO',
    pin: 841302
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Pahleza Barka BO',
    pin: 841101
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Paiga SO',
    pin: 841218
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Pakari BO',
    pin: 841417
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Pakri Mohammadpur BO',
    pin: 841218
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Panditpur SO',
    pin: 841224
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Parauna BO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Parmanandpur BO',
    pin: 841101
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Parsa SO',
    pin: 841219
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Parsagarh SO',
    pin: 841220
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Parsajogini BO',
    pin: 841311
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Parsauna BO',
    pin: 841219
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Patti Sital BO',
    pin: 841222
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'PBChapra BO',
    pin: 841401
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Phulwaria BO',
    pin: 841460
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Pipra BO',
    pin: 841422
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Piraridih BO',
    pin: 841222
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Pirauna BO',
    pin: 841302
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Pirauta BO',
    pin: 841443
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Pirmaker BO',
    pin: 841215
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Pojhi BO',
    pin: 841219
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Pokhrera BO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Pratappur SO Saran',
    pin: 841225
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Puchhari BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Puchitikala BO',
    pin: 841206
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Puraina BO',
    pin: 841401
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Purushottampur Nazirganj BO',
    pin: 841224
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Purwari Telpa SO',
    pin: 841302
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Pyarepur BO',
    pin: 841410
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Rahampur BO',
    pin: 841202
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Rahimpur BO',
    pin: 841101
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Rajdhani BO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Rajendra College SO Saran',
    pin: 841301
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Ram Chaura BO',
    pin: 841411
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Ramgarha BO',
    pin: 841202
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Rampur Atauli BO',
    pin: 841421
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Rampur Bindalal BO',
    pin: 841220
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Rampur BO',
    pin: 841311
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Rampur Kala BO',
    pin: 841414
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Rampur Khorram BO',
    pin: 841442
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Rampur Rudra BO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Rasalpura BO',
    pin: 841211
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Rasauli BO',
    pin: 841417
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Rasidpur BO',
    pin: 841415
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Rasualpur Chatti BO',
    pin: 841204
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Rasulpur BO',
    pin: 841419
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Revelganj SO',
    pin: 841305
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Rewari BO',
    pin: 841213
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Rith BO',
    pin: 841208
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Russi BO',
    pin: 841205
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sabalpur BO',
    pin: 841101
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sadhpur BO',
    pin: 841415
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Safari BO',
    pin: 841208
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sagar Sultanpur BO',
    pin: 841417
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sahajitpur SO',
    pin: 841422
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sahar Chapra BO',
    pin: 841219
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sahawa BO',
    pin: 841411
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sahebzadatola BO',
    pin: 841312
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Saidpur BO',
    pin: 841207
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Saidpur BO',
    pin: 841216
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Saidsarai BO',
    pin: 841311
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sakaddi BO',
    pin: 841412
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Salempur BO',
    pin: 841411
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Salimapur BO',
    pin: 841443
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Saraibuksh BO',
    pin: 841311
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Saraiya BO',
    pin: 841101
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Saraon BO',
    pin: 841212
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Saraya BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sareya Basant BO',
    pin: 841401
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sarha BO',
    pin: 841302
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sarhwara SO',
    pin: 841421
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sarmi BO',
    pin: 841422
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Satjora Bazar BO',
    pin: 841410
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Satua BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sawari Buxi Jee BO',
    pin: 841412
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Semri BO',
    pin: 841421
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Senduari BO',
    pin: 841419
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sengar Tola BO',
    pin: 841305
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Serampur BO',
    pin: 841460
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sherukaha BO',
    pin: 841417
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Shio Mohammadpur BO',
    pin: 841443
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Shitalpur Bazar BO',
    pin: 841201
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Shyam Kauria BO',
    pin: 841411
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sikarpur BO',
    pin: 841101
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sikati Bhikham BO',
    pin: 841421
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Silhauri BO',
    pin: 841419
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sirsia BO',
    pin: 841305
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sisai BO',
    pin: 841422
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sitabdiara BO',
    pin: 841312
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sitalpur SO',
    pin: 841221
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sobhepur BO',
    pin: 841311
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sohai Shahpur BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sonauli BO',
    pin: 841421
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sonbarsa BO',
    pin: 841410
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sonbarsa BO',
    pin: 841313
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sonepur RS SO',
    pin: 841101
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sonepur SO Saran',
    pin: 841101
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sonia BO',
    pin: 841205
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Sutihar SO',
    pin: 841222
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Taraiya SO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Tari BO',
    pin: 841302
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Tarwa Pojhia BO',
    pin: 841205
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Tarwar BO',
    pin: 841419
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Tejpurwa BO',
    pin: 841419
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Telcha BO',
    pin: 841224
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Terha BO',
    pin: 841411
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'TMPal BO',
    pin: 841101
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Tujarpur BO',
    pin: 841442
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Unehchak BO',
    pin: 841221
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Usari Kala BO',
    pin: 841443
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Ushri Chandpura BO',
    pin: 841424
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Ushti BO',
    pin: 841403
  },
  {
    state: 'Bihar',
    district: 'SARAN',
    subDistrict: 'Zilkabad BO',
    pin: 841211
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Adauri BO',
    pin: 843334
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Akhta BO',
    pin: 843313
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Amghatta BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Amua BO',
    pin: 843334
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Andauli BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Anhari BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Araria BO',
    pin: 843330
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Ashogi Purshottam BO',
    pin: 843313
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Athri SO',
    pin: 843311
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Awapur BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'B Baaz BO',
    pin: 843334
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'B Chandiha BO',
    pin: 843334
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'B Dhanushi BO',
    pin: 843323
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'B Dharmapur BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'B Jagdish SO',
    pin: 843335
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'B Jagjiwan BO',
    pin: 843334
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'B Jahidpur BO',
    pin: 843333
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'B Jay Nagar BO',
    pin: 843317
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'B Maksudan BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'B Piprarhi BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'B Rasalpur BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'B Shantikutir BO',
    pin: 843333
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Babhangama BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Baburban BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Baburban BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bachharpur BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bagaha BO',
    pin: 843332
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Baghari BO',
    pin: 843331
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Baghari BO',
    pin: 843323
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bahera BO',
    pin: 843332
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bairgania Bazar SO',
    pin: 843313
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bairgania SO',
    pin: 843313
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bairiya BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bajitpur BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bajpatti SO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bakhari BO',
    pin: 843331
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bakhari BO',
    pin: 843325
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Balasath BO',
    pin: 843326
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Baligarh BO',
    pin: 843328
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Banaul BO',
    pin: 843326
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Banchauri BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bangaon BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bangaraha BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Barahi BO',
    pin: 843331
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Barahi BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Barharwa SO Sitamarhi',
    pin: 843315
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bariyarpur BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Basantpatti BO',
    pin: 843334
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Basbitta BO',
    pin: 843315
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Basotra BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bathasli BO',
    pin: 843326
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bathnaha BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bathuara BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Batra BO',
    pin: 843326
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'BBajitpur BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'BBehta BO',
    pin: 843319
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bedaul BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bel BO',
    pin: 843313
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Belahi BO',
    pin: 843311
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Belahiya BO',
    pin: 843316
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Belahiya BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Belsand SO',
    pin: 843316
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Belwa BO',
    pin: 843334
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bengahi BO',
    pin: 843313
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Betaha BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bhadiyan BO',
    pin: 843333
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bhagwanpur BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bhairo Bhoop BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bhakurahar BO',
    pin: 843313
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bhanaspatti BO',
    pin: 843328
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bhandari BO',
    pin: 843316
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bhantabari BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'BHarpur BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bharthua BO',
    pin: 843328
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Bhatahan BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bhaurgarah BO',
    pin: 843318
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bhavdepur BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'BhBhimpur BO',
    pin: 843311
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bhitha Bazar BO',
    pin: 843331
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Bhorahan BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bhulli BO',
    pin: 843325
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bhutahi SO',
    pin: 843317
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bishanpur BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bishanpur BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'BJairam BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'BMachacha BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'BMachhpakauni BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'BNarha BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bokhra BO',
    pin: 843318
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Bokhtha BO',
    pin: 843315
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'BPhulwariya BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Budhnagra Deorhi SO',
    pin: 843318
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'CBishanpur BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'CC Union',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'CDharharwa BO',
    pin: 843328
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Chaipura BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Chakfateha BO',
    pin: 843334
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Chakmahila BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Chandauli Timha BO',
    pin: 843316
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Chandwara BO',
    pin: 843328
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Chhaurahiya BO',
    pin: 843332
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Chimanpur BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Chinachak BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Choraut SO',
    pin: 843319
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'CTakiya BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'D Kala BO',
    pin: 843315
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'D Katasari BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'D Khurd BO',
    pin: 843315
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Dadari BO',
    pin: 843333
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Dalkawa BO',
    pin: 843330
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Dhadhi BO',
    pin: 843333
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Dhankaul BO',
    pin: 843325
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Dharharwa BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Dheng BO',
    pin: 843315
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Dighi BO',
    pin: 843322
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'DMathauna BO',
    pin: 843319
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Dumarbana BO',
    pin: 843313
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Dumharpatti BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Dumra BO',
    pin: 843316
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Fatahapur BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'FGirmishani BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Fulkahan BO',
    pin: 843317
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Gamhariya BO',
    pin: 843315
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Gangati BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Garahiya BO',
    pin: 843334
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Garha BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Garha BO',
    pin: 843323
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Garhwa BO',
    pin: 843334
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Gaura BO',
    pin: 843326
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Gauri BO',
    pin: 843326
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Ghanshyampur BO',
    pin: 843328
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Gharwara BO',
    pin: 843315
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Gisara BO',
    pin: 843311
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Goraul Sharif BO',
    pin: 843318
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'H Barharwa BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'H Chandei BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'H Dularpur BO',
    pin: 843331
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'H Dumma BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Hanuman Nagar BO',
    pin: 843317
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Hanumannagar BO',
    pin: 843331
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Hardiya BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Haribela BO',
    pin: 843317
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Harnahiya BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Harnahiya BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Harpurkala BO',
    pin: 843315
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Harpurwa BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Hiramma BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Humayupur BO',
    pin: 843333
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Indarwa BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'J Kothia BO',
    pin: 843316
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Jadupatti Bazar BO',
    pin: 843319
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Jaffarpur BO',
    pin: 843316
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Jagdar BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Jahagirpur BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Jamua BO',
    pin: 843313
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Janaki Asthan SO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Janakpur Road SO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Janipur BO',
    pin: 843333
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Jhajhihat BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Jogiwana BO',
    pin: 843322
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'K Barhmtoli BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'K Bhandar BO',
    pin: 843317
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'K Bishanpur BO',
    pin: 843323
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'K Motnaje BO',
    pin: 843316
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Kamaladah BO',
    pin: 843323
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Kamaldah BO',
    pin: 843322
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Kamrauli BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Kanhawa BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Kansar BO',
    pin: 843316
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Kasturia BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Kathaur BO',
    pin: 843316
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'KBP Pupri BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'KGajpatti BO',
    pin: 843325
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Khairwa BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Khairwa Darp BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Kharsan BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Kishanpur BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'KMadan BO',
    pin: 843332
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Koat Bazar SO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Kohbarawa BO',
    pin: 843330
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Koili BO',
    pin: 843333
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Koily BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Koryahi BO',
    pin: 843319
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'KSiroman BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'KThikha BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Kuama BO',
    pin: 843325
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Kumma BO',
    pin: 843331
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Kushahar BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Lagma Azamgarh BO',
    pin: 843323
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Lahuriya BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Lalpur BO',
    pin: 843323
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Lattipur BO',
    pin: 843322
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'M Chhatta BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'M Kala BO',
    pin: 843317
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'M Kararia BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'M Pokharbinda BO',
    pin: 843334
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'M Rampur BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Madanpur BO',
    pin: 843325
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Madaripur BO',
    pin: 843333
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Madhopur BO',
    pin: 843322
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Madhurapur BO',
    pin: 843315
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Madhurapur BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Mahadeopatti BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Mahammadpur Dalel BO',
    pin: 843333
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Mahisautha BO',
    pin: 843318
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Mahuariya BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Mahuawa BO',
    pin: 843331
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Mahuawa BO',
    pin: 843334
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Majhaulia Estate SO',
    pin: 843322
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Majhaur BO',
    pin: 843333
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Majhaura BO',
    pin: 843331
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Majorganj SO',
    pin: 843332
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Malahi BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Malahi BO',
    pin: 843332
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Malahi BO',
    pin: 843331
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Manariya BO',
    pin: 843332
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Manikchowk SO',
    pin: 843323
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Maniyari BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Manpaur BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Marpa Factory BO',
    pin: 843313
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Mathurapur BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Maudah BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Mayurwa BO',
    pin: 843330
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'MBalaha BO',
    pin: 843325
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'MBasaha BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'MDostiya BO',
    pin: 843334
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Meghpur BO',
    pin: 843331
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Mehsaul BO',
    pin: 843328
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'MMalinia BO',
    pin: 843332
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'MMandal BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'MMorsand BO',
    pin: 843328
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'MSakrauli BO',
    pin: 843326
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Muraul BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Mushaharniya BO',
    pin: 843330
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Nanpur SO',
    pin: 843333
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Narayanpur BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Narga BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Narha BO',
    pin: 843331
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Narha BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Nayagaon BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'P Dadan BO',
    pin: 843317
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'P Murahi BO',
    pin: 843316
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'P Pataniya',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'P Tajpur BO',
    pin: 843316
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Pachaharwa BO',
    pin: 843332
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Pachara BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Pachtaki Jaddu BO',
    pin: 843313
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Paktola BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Pandaul Buzurg BO',
    pin: 843326
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Panthpakar BO',
    pin: 843322
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Pardeshiya BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Parihar SO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Parmanandpur BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Parrahi BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Parsa BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Parsauni BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Parsauni SO',
    pin: 843325
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Parshurampur BO',
    pin: 843325
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Partapur BO',
    pin: 843311
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Patahi BO',
    pin: 843316
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Patdaura BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'PBasantpur BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Phulkahan BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Piprarhi BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Piprarhi SO',
    pin: 843334
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Piprathi Punarvas BO',
    pin: 843313
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Pirokhar BO',
    pin: 843319
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'PKoria BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Pokharbhinda BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Pokharbhinda BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Pokhraira BO',
    pin: 843326
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'PParsain BO',
    pin: 843330
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'PPhulhatta BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'PRajwara BO',
    pin: 843330
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Prem Nagar Subhai BO',
    pin: 843323
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Punaura BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Pupari Bazar SO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'R Raghunathpur BO',
    pin: 843315
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Radhaur BO',
    pin: 843331
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Ragharpura BO',
    pin: 843331
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Rain Shankar BO',
    pin: 843328
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Raipur SO Sitamarhi',
    pin: 843326
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Rajopatti BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Rampur Bakhari BO',
    pin: 843325
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Ranjitpur BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Ratan Lasmi BO',
    pin: 843320
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Ratwara BO',
    pin: 843333
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Raxiya BO',
    pin: 843328
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'RBagahi BO',
    pin: 843311
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'RBhanpur BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Rewasi BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'RGanguly BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'RGosaipur BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Riga Colony BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Riga Gote BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Riga SO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Runnisaidpur SO',
    pin: 843328
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'S Kala BO',
    pin: 843315
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'S Katsari BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'S Sultan BO',
    pin: 843334
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Sahargama BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Sahbajpur BO',
    pin: 843327
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Sahiyara BO',
    pin: 843332
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Salempur BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Sardalpatti BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Saterh BO',
    pin: 843318
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Sauli BO',
    pin: 843316
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Saura BO',
    pin: 843333
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Shaktipith Chandidham SO',
    pin: 843301
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Shanki BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Sheohar SO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Shrikhandi Bhitta BO',
    pin: 843331
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Shyampur BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Singrahiya BO',
    pin: 843317
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Singwahini BO',
    pin: 843317
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Sirauli BO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Sirsi BO',
    pin: 843333
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Sirsia BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Sitamarhi Bazar SO',
    pin: 843302
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Sitamarhi HO',
    pin: 843301
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Siwaipaiti BO',
    pin: 843314
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Sonaul Mahoday BO',
    pin: 843332
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Sonbersa SO',
    pin: 843330
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Sujatpur BO',
    pin: 843319
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Suppi BO',
    pin: 843315
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Sursand SO',
    pin: 843331
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Sutihara BO',
    pin: 843331
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'T Chhapra BO',
    pin: 843316
  },
  {
    state: 'Bihar',
    district: 'SHEOHAR',
    subDistrict: 'Tajpur BO',
    pin: 843329
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Thahar BO',
    pin: 843328
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Thumma BO',
    pin: 843328
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Tikauli BO',
    pin: 843323
  },
  {
    state: 'Bihar',
    district: 'SITAMARHI',
    subDistrict: 'Vishwa BO',
    pin: 843324
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Achhaibar Pipra BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Admapur BO',
    pin: 841504
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Aghaila BO',
    pin: 841436
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Agya BO',
    pin: 841439
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Ahiyapur BO',
    pin: 841426
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Akolhi BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Alapur BO',
    pin: 841286
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Amarpur BO',
    pin: 841234
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Amarpura BO',
    pin: 841423
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Amlori BO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Amwa Nakchhed BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Andar SO',
    pin: 841231
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Ansar BO',
    pin: 841203
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Anugrhnagar BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Aranda BO',
    pin: 841236
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Asaon SO',
    pin: 841287
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'BA Pakwalia BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Babhanbara BO',
    pin: 841506
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Babubishunpur BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Badheyan BO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Badram BO',
    pin: 841241
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bagaura SO',
    pin: 841404
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Baghi BO',
    pin: 841406
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Baghibazar SO',
    pin: 841441
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'BAHADURPUR BAZAR BO',
    pin: 841232
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Baijubarhoga BO',
    pin: 841406
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Baikunthpur BO',
    pin: 841409
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Bairiya BO',
    pin: 841508
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bakerganj SO',
    pin: 841286
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bakhari BO',
    pin: 841203
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Balahu BO',
    pin: 841234
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Balaun BO',
    pin: 841244
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Baleshra BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Balia BO',
    pin: 841506
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Baliwan sagar BO',
    pin: 841501
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Ballia BO',
    pin: 841237
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Balliapokhra BO',
    pin: 841238
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Balthra BO',
    pin: 841503
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Balua BO',
    pin: 841435
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bangra Ke Bari BO',
    pin: 841203
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Bankata Jagirdari BO',
    pin: 841426
  },
  {
    state: 'Bihar',
    district: 'KHAGARIA',
    subDistrict: 'Banthu Sriram BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Baraiptti BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Barauli SO Gopalganj',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bardaha BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bargaon BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Barhani Bazar BO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Barheyan BO',
    pin: 841436
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Barhima BO',
    pin: 841423
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Barhipurgop BO',
    pin: 841408
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Barhni BO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Barhria SO',
    pin: 841232
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Barhulia BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Barkagaon BO',
    pin: 841436
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Barkagaon BO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Barkagaowan BO',
    pin: 841408
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Barkamanjha BO',
    pin: 841243
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Basantpur SO Siwan',
    pin: 841406
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Basaowan BO',
    pin: 841406
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Basdila BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'BASonbarsa BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Basopali BO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Batardey BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Bathubazar SO',
    pin: 841425
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'BDMahuwan BO',
    pin: 841508
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Belaon BO',
    pin: 841235
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Belaur BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Belauri BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Belhi Khas BO',
    pin: 841437
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Belsand BO',
    pin: 841413
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Benusar BO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Benusar Bujurg BO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bhagar BO',
    pin: 841210
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Bhagipatti Jhul BO',
    pin: 841437
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bhagwanpur Hat SO',
    pin: 841408
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Bhagwatparsa BO',
    pin: 841425
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Bhaisahi BO',
    pin: 841427
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bhaisakhal BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'BHALUAN BO',
    pin: 841232
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bhantapokher BO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Bharpurwa BO',
    pin: 841508
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bhartpura BO',
    pin: 841506
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bharuli BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Bhathwa BO',
    pin: 841441
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bhawrajpur BO',
    pin: 841231
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bherwania BO',
    pin: 841507
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bhikha Bandh Satjora BO',
    pin: 841244
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bhikhampur BO',
    pin: 841408
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bhikhpur Bhgwanpur BO',
    pin: 841236
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bhikhpur BO',
    pin: 841237
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'BHIMPUR BO',
    pin: 841232
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Bhitbherwa BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bhithi BO',
    pin: 841434
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bhlua BO',
    pin: 841435
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Bhore SO',
    pin: 841426
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Bijaipur SO Gopalganj',
    pin: 841508
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bilaspur BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Bindwalia BO',
    pin: 841501
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Bishambharpur BO',
    pin: 841501
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bishunpura Bazar BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bishunpura BO',
    pin: 841238
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Bishunpura SO',
    pin: 841407
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bishwania BO',
    pin: 841234
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bishwar BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bithuna BO',
    pin: 841507
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Bkulari BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Bodhachhapar BO',
    pin: 841503
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'BPEkdanga BO',
    pin: 841243
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'BR Bhan BO',
    pin: 841436
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'BRampur BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chainpur BO',
    pin: 841439
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chainpur Hata BO',
    pin: 841243
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chainpur SO Siwan',
    pin: 841203
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chakari BO',
    pin: 841435
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Chakarwakhas BO',
    pin: 841426
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chakia BO',
    pin: 841507
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chakra BO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Champ BO',
    pin: 841241
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chanaur BO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chandparsa BO',
    pin: 841240
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chapia Bujurg BO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chapra Road SO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chaukihasan BO',
    pin: 841506
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chhapmathia BO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chhitanpur BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chhitauli BO',
    pin: 841203
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Chhitauna BO',
    pin: 841425
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Chhitauna BO',
    pin: 841426
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chhotka Manjha BO',
    pin: 841243
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chhotkateghra BO',
    pin: 841238
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chimanpura BO',
    pin: 841416
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chitakhal BO',
    pin: 841435
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Choiapali BO',
    pin: 841242
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chorauli BO',
    pin: 841406
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Chorma BO',
    pin: 841406
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Dabchhu BO',
    pin: 841420
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Dahibhata BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Dangsi BO',
    pin: 841407
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Daraila BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Darauli SO',
    pin: 841234
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Daronda SO',
    pin: 841233
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Deoria BO',
    pin: 841238
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Devapur BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Dhanuti BO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Dhanutihata BO',
    pin: 841236
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Dharamparsa BO',
    pin: 841427
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Dharhara BO',
    pin: 841437
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Dhatingna BO',
    pin: 841440
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Dhebwa BO',
    pin: 841503
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Dighwalia BO',
    pin: 841203
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Dighwdubauli SO',
    pin: 841409
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Dindayalpur BO',
    pin: 841506
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'DNarendra BO',
    pin: 841426
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Done SO',
    pin: 841235
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Draili Mathia BO',
    pin: 841235
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Dudhra BO',
    pin: 841434
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Dumaria BO',
    pin: 841423
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Dumaria Dhamapakar BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Dumra BO',
    pin: 841416
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Dumrahar BO',
    pin: 841435
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Durgmatihania BO',
    pin: 841501
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Ekderwa BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'English BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Faizullahpur BO',
    pin: 841420
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Faridpur BO',
    pin: 841231
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Gabhirar SO',
    pin: 841509
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Gaighat BO',
    pin: 841231
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Gambhria BO',
    pin: 841241
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Gamhari BO',
    pin: 841420
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Gangpur Siswan SO',
    pin: 841210
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Garhmanjha SO',
    pin: 841427
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Gaura BO',
    pin: 841437
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Gauri BO',
    pin: 841234
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Gaushalaroad Siwan SO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Gausia BO',
    pin: 841427
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Gayaspur BO',
    pin: 841210
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Gaziapur BO',
    pin: 841446
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Ghurghat BO',
    pin: 841210
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Gohpur Bajrahia BO',
    pin: 841238
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Gopalganj College SO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Gopalganj HO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Gopalpur BO',
    pin: 841503
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Gopalpur BO',
    pin: 841420
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Goreakothi SO',
    pin: 841434
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Govindapur BO',
    pin: 841507
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'GS Manjha BO',
    pin: 841436
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Guthni SO',
    pin: 841435
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Habibnagar BO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Hahwa BO',
    pin: 841238
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Hakam BO',
    pin: 841407
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Hakam BO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Hardia BO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'HARDIA BO',
    pin: 841232
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Harihans BO',
    pin: 841286
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Harihar Pur Lalgarh BO',
    pin: 841434
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Hariharpur Kala BO',
    pin: 841434
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Harnatar BO',
    pin: 841235
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Harnathpur BO',
    pin: 841504
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Harpur Tengrahi BO',
    pin: 841423
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Harpurjan BO',
    pin: 841420
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Harsardhanauti BO',
    pin: 841233
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Hasanpura SO',
    pin: 841236
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Hassanpur Mathiya BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Hasua BO',
    pin: 841436
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Hathura BO',
    pin: 841237
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Hathwa SO',
    pin: 841436
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Hatimpur BO',
    pin: 841413
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Hulesra BO',
    pin: 841408
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Hussainganj SO',
    pin: 841237
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Hussaipurnand BO',
    pin: 841406
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Hussepur BO',
    pin: 841426
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Itwa Bartwalia BO',
    pin: 841241
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Jagarnath BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Jagatpur BO',
    pin: 841406
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Jagdishpur BO',
    pin: 841508
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Jagdishpur BO',
    pin: 841203
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Jagdishpur Kothi BO',
    pin: 841243
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Jagtauli BO',
    pin: 841426
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Jaijore BO',
    pin: 841231
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Jalalpur BO',
    pin: 841233
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Jalalpur BO',
    pin: 841506
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Jamobazar SO',
    pin: 841413
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Jamsar BO',
    pin: 841436
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Jamuaon BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Jasauli BO',
    pin: 841241
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Jasauli BO',
    pin: 841437
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Jhanjhawa Mohamadpur BO',
    pin: 841423
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Jhirwa BO',
    pin: 841440
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Jignadubey BO',
    pin: 841426
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Jignamath BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Jigrawan BO',
    pin: 841238
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Jiyan BO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'JJagarnath BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Jogapur Kothi BO',
    pin: 841413
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Kabirpur BO',
    pin: 841243
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Kachnar BO',
    pin: 841210
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Kahla BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Kailgarh BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Kaladumra BO',
    pin: 841439
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Kalyanpur BO',
    pin: 841425
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Kamalpur BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Kandhpakar BO',
    pin: 841287
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Kanhauli BO',
    pin: 841235
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Karanpura BO',
    pin: 841506
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Kararia BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Karsar BO',
    pin: 841504
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Karsaut BO',
    pin: 841238
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Karwatahi Bazar BO',
    pin: 841501
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Kasdeora Bangra BO',
    pin: 841238
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Kashi Tengrahi BO',
    pin: 841407
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Kashila BO',
    pin: 841287
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Katalpur BO',
    pin: 841420
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Kateya SO',
    pin: 841437
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Kauria BO',
    pin: 841406
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Keelpur BO',
    pin: 841243
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Keotalia BO',
    pin: 841234
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Khajuhatti BO',
    pin: 841407
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Khajuri BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Khajuria BO',
    pin: 841505
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Khalgaon BO',
    pin: 841441
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Khalishpur BO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Khalwa BO',
    pin: 841243
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Khawajapur BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Khawaspur BO',
    pin: 841416
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Kherai BO',
    pin: 841231
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Kherwa BO',
    pin: 841406
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Khujhwa SO',
    pin: 841502
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Kishunpura SO',
    pin: 841416
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'KK Kararia BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'KMATIHANIYA NRK TOLA',
    pin: 841501
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Koerigawan BO',
    pin: 841232
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Koila Deva BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Koini BO',
    pin: 841427
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Koiripatti BO',
    pin: 841503
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Kolhua BO',
    pin: 841233
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Kothua Sarangpur BO',
    pin: 841238
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Kpmishrauli BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Krishnapali BO',
    pin: 841234
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Krom BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'KSrirampur BO',
    pin: 841427
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'KTBharauli BO',
    pin: 841404
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Kuchaikote SO',
    pin: 841501
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Kumhatti BO',
    pin: 841235
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Kusaundhi BO',
    pin: 841436
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Lachhwar BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Laheji BO',
    pin: 841233
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Lakari BO',
    pin: 841416
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Lakri Dargah BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Lamichaur BO',
    pin: 841426
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Langarpura BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Lawa Rampur BO',
    pin: 841507
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Laxmiganj BO',
    pin: 841439
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Laxmiganj Sisai BO',
    pin: 841506
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Lebhri BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Line Bazar BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Lohijara BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'M Madho BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Machakna BO',
    pin: 841237
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Machhagar BO',
    pin: 841436
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Machhauta BO',
    pin: 841233
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Madhopur BO',
    pin: 841210
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Madhopur BO',
    pin: 841413
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Madhopur BO',
    pin: 841232
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Madhopur BO',
    pin: 841506
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Maharani BO',
    pin: 841407
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Maheshpur BO',
    pin: 841508
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Mahmoodpur BO',
    pin: 841232
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Mahodipur BO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Mahrajganj SO Siwan',
    pin: 841238
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Mahuwa BO',
    pin: 841407
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Mahuwal Mahal SO',
    pin: 841240
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Mahuwan BO',
    pin: 841437
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Mahuwari BO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Mairwa SO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Makariyar BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Manbodhparsauni BO',
    pin: 841440
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Mandrauli BO',
    pin: 841233
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Mania BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Manikpur BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Maniyara BO',
    pin: 841505
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Manjhariya BO',
    pin: 841427
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Marachhi BO',
    pin: 841434
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Markan BO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Mateya Khas BO',
    pin: 841501
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Mathia BO',
    pin: 841235
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Matiyari BO',
    pin: 841420
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Matiyari BO',
    pin: 841426
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'MBiraicha BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Merhi BO',
    pin: 841240
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Mirganj SO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Mirja Pur BO',
    pin: 841436
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Mishra Batrahan BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Miyan Ke Bhatkan BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Mohamadpur BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Mohammadpur BO',
    pin: 841407
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Mohmda Bazar BO',
    pin: 841406
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Molnapur BO',
    pin: 841406
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Mora SO Siwan',
    pin: 841507
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Mungarha BO',
    pin: 841427
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Murakhap BO',
    pin: 841235
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Murera BO',
    pin: 841235
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Musahri Bazar BO',
    pin: 841426
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Mustfabad SO',
    pin: 841439
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Nabiganj BO',
    pin: 841407
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Nadiwan BO',
    pin: 841231
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Nainpura BO',
    pin: 841241
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Nand Pur Amwari BO',
    pin: 841231
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Nandamura BO',
    pin: 841203
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Narahwan Sukla BO',
    pin: 841503
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Narendrapur SO',
    pin: 841446
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Narhan BO',
    pin: 841504
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Narkatia BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Nathuchhap BO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Nautan BO',
    pin: 841243
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Nawada BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Nechwajalapur SO',
    pin: 841503
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Neori BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Neori BO',
    pin: 841437
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Netwar BO',
    pin: 841235
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Newari BO',
    pin: 841509
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'NIKHTI KALA BO',
    pin: 841504
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Nimuiya BO',
    pin: 841427
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Noniyapatti BO',
    pin: 841210
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Pachdeori BO',
    pin: 841437
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Pachlakhi BO',
    pin: 841436
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Pachokhar BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Pachphera BO',
    pin: 841243
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Pachrukhi SO',
    pin: 841241
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Paharpur BO',
    pin: 841420
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Paikauli Baddo BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Pakri BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Pakwalia BO',
    pin: 841238
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Paltuhatta BO',
    pin: 841413
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Panjwar BO',
    pin: 841509
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Papaur BO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Parauli BO',
    pin: 841416
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Parsurampur BO',
    pin: 841427
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Partap Pur BO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Parwan BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Pasnauli BO',
    pin: 841238
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Pasrama BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Patar BO',
    pin: 841502
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Paterha BO',
    pin: 841242
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Paterhi SO',
    pin: 841242
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Pathra BO',
    pin: 841427
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'PBhagwanpur BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Peoli BO',
    pin: 841436
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'PHarsar BO',
    pin: 841233
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Phulwaria BO',
    pin: 841425
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Pihuli BO',
    pin: 841287
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Pipra BO',
    pin: 841244
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Pipra Naryan BO',
    pin: 841506
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Piprahiya BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'PKRampur BO',
    pin: 841507
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Punak BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Purandarpur BO',
    pin: 841439
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Purdiltola BO',
    pin: 841427
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Rachhopali BO',
    pin: 841427
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Radhaganj BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Rafipur BO',
    pin: 841286
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Raghunathpur SO Siwan',
    pin: 841504
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Rajanpura BO',
    pin: 841236
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Rajapatti SO',
    pin: 841420
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Rajapur BO',
    pin: 841441
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Rajapur BO',
    pin: 841238
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Rajpur BO',
    pin: 841504
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Rajwahi BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Ramchandrapur BO',
    pin: 841440
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Ramgarh BO',
    pin: 841244
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Ramgarh BO',
    pin: 841203
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Ramnagar BO',
    pin: 841504
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Rampur Daud BO',
    pin: 841505
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Rampur Ke Tola BO',
    pin: 841236
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Ramsapur BO',
    pin: 841233
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Rasulpur BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Rasulpur Chakri BO',
    pin: 841244
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Rasulpur Tilouta BO',
    pin: 841233
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Ratanparauli BO',
    pin: 841242
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Ratanpura BO',
    pin: 841501
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Ratanpura BO',
    pin: 841506
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Reotith BO',
    pin: 841407
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Repura BO',
    pin: 841436
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Rishura BO',
    pin: 841238
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'RP Tengrahi BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Rudalpur BO',
    pin: 841426
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Rudrapur BO',
    pin: 841437
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Ruiyabangra BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Rukundipur BO',
    pin: 841238
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Rupanchhap BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'S Bangra BO',
    pin: 841238
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sadarpur BO',
    pin: 841232
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sadauwan BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sadiha BO',
    pin: 841507
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Safiabad BO',
    pin: 841416
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sahatwar BO',
    pin: 841439
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sahdi Giri BO',
    pin: 841508
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sahlaur BO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sahpur SO',
    pin: 841243
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sahrkola BO',
    pin: 841406
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sahsrawan BO',
    pin: 841408
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sahuli BO',
    pin: 841286
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Saidpura BO',
    pin: 841439
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sakhekhas BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Salehpur BO',
    pin: 841501
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Salempur BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sanhaula BO',
    pin: 841503
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sani Basantpur BO',
    pin: 841439
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sanjalpur BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Santhi BO',
    pin: 841502
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sarari BO',
    pin: 841434
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sarauti BO',
    pin: 841241
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Saraya Sah Mohamd BO',
    pin: 841506
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sareya Narendra BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sareyarampur BO',
    pin: 841234
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sarhara BO',
    pin: 841203
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sarhrwa BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sarif Jalalpur BO',
    pin: 841416
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sarsar BO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sarwe BO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sasamusa SO',
    pin: 841505
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Satation Road SO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sathi BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sawana BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sawraje BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sekhpura BO',
    pin: 841406
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Semaria BO',
    pin: 841441
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Semaria BO',
    pin: 841243
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sematar BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Semra Bazar BO',
    pin: 841503
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Semrahi BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Semraon BO',
    pin: 841436
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Seotapur BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sepaya BO',
    pin: 841501
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Shakara BO',
    pin: 841506
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sher BO',
    pin: 841407
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Shiopur Sakra BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Shyampur BO',
    pin: 841407
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sidhwalia SO',
    pin: 841423
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sikandarpur BO',
    pin: 841434
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sikatiya Sridhar Sahi BO',
    pin: 841405
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Siktia BO',
    pin: 841244
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Singhauli BO',
    pin: 841507
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sirisia BO',
    pin: 841243
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sirisia BO',
    pin: 841413
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sisahni BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sisai BO',
    pin: 841426
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Siswa BO',
    pin: 841503
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Siswan Kala BO',
    pin: 841236
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Siswania BO',
    pin: 841436
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Siwan Chowk Bazar SO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Siwan HO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Siwan Mission House BO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sohagpur BO',
    pin: 841436
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sohgra BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sohilpatti BO',
    pin: 841406
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sohnariya BO',
    pin: 841437
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sonbarsa BO',
    pin: 841241
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sondhani BO',
    pin: 841408
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Songharwa BO',
    pin: 841425
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sorahiya BO',
    pin: 841423
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Srikalpur BO',
    pin: 841435
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Sughri BO',
    pin: 841406
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sukulbrindawan BO',
    pin: 841440
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sukulwa BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sultanpur Kala BO',
    pin: 841413
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Sundri BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Surwala BO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Takipur SO',
    pin: 841244
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Talimapur BO',
    pin: 841407
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Talli BO',
    pin: 841239
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Tari BO',
    pin: 841509
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Tariwani BO',
    pin: 841235
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Tarwa BO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Tarwa Parsia BO',
    pin: 841435
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Tarwaparsa BO',
    pin: 841240
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Tarwara SO',
    pin: 841506
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Tekniwas BO',
    pin: 841423
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Telkathu BO',
    pin: 841286
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Tenua BO',
    pin: 841435
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'TETHALI BO',
    pin: 841232
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Tetria BO',
    pin: 841226
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Thakrahan BO',
    pin: 841503
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Thawe SO',
    pin: 841440
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Thepaha Bazar BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Titra BO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Tiyan BO',
    pin: 841231
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Uchka Gaon BO',
    pin: 841501
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Uchkagaon BO',
    pin: 841438
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Ukhai BO',
    pin: 841227
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'UR Bangra BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Usribazar BO',
    pin: 841409
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'VS Mill BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'GOPALGANJ',
    subDistrict: 'Yadavpur Dukhharan BO',
    pin: 841428
  },
  {
    state: 'Bihar',
    district: 'SIWAN',
    subDistrict: 'Zeradei SO',
    pin: 841245
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Ahwar Shaikh BO',
    pin: 845459
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Alamganj Bazar BO',
    pin: 845459
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Alpaha BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Amolwa BO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Amwa Majhar BO',
    pin: 845459
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Anjua BO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Ashram Brindavan BO',
    pin: 845450
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Auraiya BO',
    pin: 845450
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'B Banahura BO',
    pin: 845459
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'B K Chowk BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'B Patkhaulia BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'B Ratanpura BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bagaha SO',
    pin: 845101
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bagahi BO',
    pin: 845452
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bagahi BO',
    pin: 845103
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Baijua BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bairiya Farm BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Baishakhawa BO',
    pin: 845307
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bakhari Pachrukhia BO',
    pin: 845106
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bakharia BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bakulahar Math BO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bakuli BO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Balua Rampurwa BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Balua Thori Bazar BO',
    pin: 845404
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Banu Chhapar BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bargajwa BO',
    pin: 845451
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bargaon BO',
    pin: 845101
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bargo BO',
    pin: 845103
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bariarwa BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Barwa Ojha BO',
    pin: 845452
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Barwat Pasrain BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Barwat Sena BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bastha BO',
    pin: 845306
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Baswariya BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'BB Bankatwa BO',
    pin: 845101
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Behari Bankatwa BO',
    pin: 845307
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Behra BO',
    pin: 845307
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Belbagh SO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Belsandi BO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Belwa Bahuari BO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Belwa BO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Belwa More BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bettiah Dih BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bettiah HO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bettiah RS SO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bhabhata BO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bhairoganj BO',
    pin: 845106
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bhaluahia BO',
    pin: 845306
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bhawal BO',
    pin: 845106
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bhawanipur BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bhawara BO',
    pin: 845307
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bheriharwa BO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bhikhana Thori BO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bhitaha BO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bhitaha Nizamat BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bhitiharwa Ashram BO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bhuidharwa BO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bijbania BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Binahi BO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bishabhar Pur BO',
    pin: 845459
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Bisunpura BO',
    pin: 845459
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Borwal BO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Briti Matiaria BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Chailabhar BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Champapur Gonauli BO',
    pin: 845107
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Chamukha BO',
    pin: 845452
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Chanayan Bandh BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Chandraha BO',
    pin: 845101
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Chanpatia Bazar SO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Chanpatia R S SO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Chaubey Tola BO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Chauhatta BO',
    pin: 845451
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Cheutaha BO',
    pin: 845106
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Chilwania BO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Chuhari SO',
    pin: 845450
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Damrapur BO',
    pin: 845451
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Danial Parsauna BO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Daunaha BO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Dhamaura BO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Dhanaha BO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Dhankutwa BO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Dharampur BO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Dhobini BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Dhokharaha BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Dhum Nagar BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Dhumnagar BO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Dianmarawa BO',
    pin: 845103
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'DKShikarpur SO',
    pin: 845451
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Dudhiawa BO',
    pin: 845452
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Dukhi Chhapar BO',
    pin: 845307
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Dumara BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Dumari Bazar BO',
    pin: 845452
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Dumari BO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Dumaria Estate BO',
    pin: 845103
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Gambhirpur BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Ghogha BO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Ghorpakari BO',
    pin: 845306
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Gobarahia Done BO',
    pin: 845106
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Gobardhana BO',
    pin: 845106
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Gobraura BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Goithahi BO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Gokhula BO',
    pin: 845451
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Gonauli BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Gopalpur BO',
    pin: 845307
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Gora Karamwa BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Gudgudi BO',
    pin: 845106
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Gurwalia BO',
    pin: 845450
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Harinagar SO',
    pin: 845103
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Haripur BO',
    pin: 845307
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Harnatar BO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Harpur BO',
    pin: 845101
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Harpur Tola BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Inarwa Bazar BO',
    pin: 845306
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Jado Chhapar BO',
    pin: 845450
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Jagarnath Pur BO',
    pin: 845459
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Jagarnathpur BO',
    pin: 845307
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Jagdishpur SO West Champaran',
    pin: 845459
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Jaitia BO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Jamunia BO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Jaralpur Dih BO',
    pin: 845452
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Jawkatia BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Jhakhara BO',
    pin: 845459
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Jharmahuee BO',
    pin: 845103
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Jogapatti SO',
    pin: 845452
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Jogia BO',
    pin: 845103
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Kathaia BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Kathar BO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Kehunia BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Khadda BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Khaira Tola BO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Khairpokhara BO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Kolhua BO',
    pin: 845106
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'KRHigh School BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Kunai Bhelahi BO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Kurshi Barawa BO',
    pin: 845307
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Kurwa Mathia BO',
    pin: 845450
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Lachhnauta BO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Lagunaha BO',
    pin: 845101
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Lakhanpur BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Lal Bazar Bettiah SO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Lal Saraiya BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Lalgarh BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Laukariya BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Lauriya SO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Laxmipur Bherihari BO',
    pin: 845107
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Laxmipur BO',
    pin: 845450
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Machhaha BO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Machhargawan BO',
    pin: 845452
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Madhopur BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Madhubani SO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Mahna Gani BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Mahuawa BO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Mahui BO',
    pin: 845103
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Mainatand SO',
    pin: 845306
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Majharia BO',
    pin: 845106
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Majharia Kisun BO',
    pin: 845459
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Majhariya Sheikh BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Majhaulia Rs SO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Maldi BO',
    pin: 845451
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Malkauli BO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Mangalpur BO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Mangalpur Gudaria BO',
    pin: 845459
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Mangrahari BO',
    pin: 845451
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Maniari BO',
    pin: 845451
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Manpur BO',
    pin: 845101
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Manwa Parsi BO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Marjadwa BO',
    pin: 845306
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Mathia BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Mathia Brit BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Mathia Kathia BO',
    pin: 845307
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Meena Bazar Bettiah SO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Meghwal Mathia BO',
    pin: 845106
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Mehura BO',
    pin: 845101
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Mohachhinain BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Mura Dih BO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Murali BO',
    pin: 845103
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Murli Parsauni BO',
    pin: 845307
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Mushahari BO',
    pin: 845450
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Musharwa BO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Naraipur SO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Narkaiaganj SO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Nauragia Done BO',
    pin: 845106
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Naurangia BO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Nautan Dubey BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Nawalpur BO',
    pin: 845452
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Naya Tola Bettiah SO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Padar Khap BO',
    pin: 845101
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Padraun BO',
    pin: 845451
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Pakhanaha Bazar BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Parsa BO',
    pin: 845101
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Parsa Factory BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Parsauna BO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Parsauni Farm BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Patilar BO',
    pin: 845101
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Patzirwa BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Pharsahani BO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Pindari BO',
    pin: 845306
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Piparia BO',
    pin: 845101
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Pipra Naurangia BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Pipra Pakari BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Piprasi BO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Pokharia BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Pokharia Rai BO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Puraina BO',
    pin: 845452
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Puraina Gosai BO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Purainia BO',
    pin: 845307
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Rajabhar BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Rajpur Madan BO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Rajwatia BO',
    pin: 845101
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Rakhahi BO',
    pin: 845451
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Ramnagar Bankat BO',
    pin: 845459
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Ramnagar SO West Champaran',
    pin: 845106
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Ramparsauna BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Rampur BO',
    pin: 845451
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Rampurwa BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Rampurwa BO',
    pin: 845107
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Rampurwa BO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Rampurwa Mahanwa BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Ranglalahi BO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Ratanmala Mathia BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Refujee Camp BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Roari BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Rulahi Nizamat BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sabeya BO',
    pin: 845103
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sahadat Pur BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Saidpur BO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'San Sariya BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sareya BO',
    pin: 845459
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sareya Ojhwalia BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sargatia BO',
    pin: 845307
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sariswa Bazar BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sathi BO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Semari Dumari BO',
    pin: 845106
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Semra Labedaha BO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Semra Medraul BO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Senwaria BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Serwa Done BO',
    pin: 845106
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Serwa Masjidwa BO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sheorajpur BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Shikarpur BO',
    pin: 845307
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Shikarpur BO',
    pin: 845454
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Shiorajpur BO',
    pin: 845452
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Shyampur Kotaraha BO',
    pin: 845459
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sidhaw BO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sigari Bigari BO',
    pin: 845106
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sihpur BO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sikta SO',
    pin: 845307
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Singari BO',
    pin: 845101
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sirisia BO',
    pin: 845450
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sirisia BO',
    pin: 845101
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sirnagar BO',
    pin: 845452
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sisai BO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Siswa Basantpur BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Siswa Bhangaha BO',
    pin: 845306
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Siswania BO',
    pin: 845453
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sitapur BO',
    pin: 845103
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sohagi Barwa BO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sugaha Bhawanipur BO',
    pin: 845307
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sugauli BO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Sundar Gaon BO',
    pin: 845307
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Surajpur BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Tadhawa Nandpur BO',
    pin: 845438
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Taruanwa BO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Tarwalia BO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Taulaha BO',
    pin: 845104
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Taulaha Champaran BO',
    pin: 845455
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Telpur BO',
    pin: 845103
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Teluha BO',
    pin: 845459
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Tikulia BO',
    pin: 845449
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Tinferia BO',
    pin: 845105
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Tribhuani BO',
    pin: 845106
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Turahapatti BO',
    pin: 845450
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Valmiki Nagar SO',
    pin: 845107
  },
  {
    state: 'Bihar',
    district: 'WEST CHAMPARAN',
    subDistrict: 'Victoria Mission BO',
    pin: 845459
  },
  {
    state: 'Bihar',
    district: 'BALLIA',
    subDistrict: 'Nauranga BO',
    pin: 277205
  }
]
