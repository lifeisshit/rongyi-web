/*
 * 公共校验类
 * */
export const verifyPassword = message => ({
  required: true,
  min: 6,
  max: 15,
  trigger: 'blur',
  message: message || '请正确输入密码'
})

export const verifyUsername = message => ({
  required: true,
  min: 2,
  max: 10,
  message: message || '请输入正确的手机号',
  pattern: /^\d{11}$/,
  trigger: 'blur'
})

export const verifyEmail = message => ({
  required: true,
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
