const CryptoJS = require('crypto-js')
const key = CryptoJS.enc.Utf8.parse('dfh3@443JA_sdf34')
// AES加密
export const AESEncrypt = function (str) {
  const tempStr = CryptoJS.enc.Utf8.parse(str)
  const encrypt = CryptoJS.AES.encrypt(tempStr, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
  return encrypt.toString()
}
// AES解密
export const AESDecrypt = function (str) {
  const decrypt = CryptoJS.AES.decrypt(str, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
  return decrypt.toString(CryptoJS.enc.Utf8).toString()
}
