import Api from './Api'

export default {
  upload (formData) {
    return Api().post('upload', formData)
  }
}
