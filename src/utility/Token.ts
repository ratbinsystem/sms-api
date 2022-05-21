import crypto from 'crypto'
class Token {
  createToken = () => crypto.randomBytes(32).toString('hex')

  hashToken = (key: string) =>
    crypto.createHash('sha256').update(key).digest('hex')
}

export default new Token()
