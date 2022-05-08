import crypto from 'crypto'
class Token {
  createToken = () => {
    return crypto.randomBytes(32).toString('hex')
  }

  hashToken = (key: string) => {
    const hashedToken = crypto.createHash('sha256').update(key).digest('hex')
    return hashedToken
  }
}

export default new Token()
