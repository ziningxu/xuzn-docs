import appConst from '@/appConst'
import { FormItemRule } from 'element-plus'

export const mobilePhoneValidator: FormItemRule['validator'] = (_, val, cb) => {
  if (!val || appConst.MOBILE_PHONE_REG.test(val)) {
    cb()
  } else {
    cb(new Error(appConst.MOBILE_PHONE_REG_MSG))
  }
}

export const passwordValidator: FormItemRule['validator'] = (_, val, cb) => {
  if (appConst.PASSWORD_REG.test(val)) {
    cb()
  } else {
    cb(new Error(appConst.PASSWORD_REG_MSG))
  }
}

export const emailValidator: FormItemRule['validator'] = (_, val, cb) => {
  if (!val || appConst.EMAIL_REG.test(val)) {
    cb()
  } else {
    cb(new Error(appConst.EMAIL_REG_MSG))
  }
}

export const idcardValidator: FormItemRule['validator'] = (_, val, cb) => {
  if (!val || appConst.ID_CARD_NO_REG.test(val)) {
    cb()
  } else {
    cb(new Error(appConst.ID_CARD_NO_REG_MSG))
  }
}
