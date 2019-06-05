/*
 * 公共校验类
 * */
export const verifyPassword = message => ({
  required: true,
  min: 6,
  max: 15,
  trigger: 'blur',
  message: message || '请正确输入密码(6-15位)'
})

export const verifyMobilePhone = message => ({
  required: true,
  min: 2,
  max: 10,
  message: message || '请输入正确的手机号',
  pattern: /^\d{11}$/,
  trigger: 'blur'
})

export const verifyEmail = message => ({
  required: false,
  type: 'email',
  trigger: 'blur',
  message: message || '请正确输入邮箱'
})

const checkBoolean = (rule, value, callback) => {
  if (!value) {
    return callback(new Error(rule.message || '请选中值'))
  } else {
    callback()
  }
}

export const verifyChecked = message => ({
  validator: checkBoolean,
  trigger: 'change',
  message: message
})

// 手机验证码
export const checkPhoneCode = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('验证不能为空'))
  } else {
    const reg = /^\d{4}$/
    console.log(reg.test(value))
    if (reg.test(value)) {
      callback()
    } else {
      return callback(new Error('请输入4位数验证码'))
    }
  }
}
