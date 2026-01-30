import Api from './Api'

export default {
  index () {
    return Api().get('coffees')
  },
  show (coffeeId) {
    return Api().get('coffee/' + coffeeId)
  },
  post (coffee) {
    return Api().post('coffee', coffee)
  },
  put (coffee) {
    return Api().put('coffee/' + coffee.id, coffee)
  },
  delete (coffee) {
    return Api().delete('coffee/' + coffee.id)
  }
}
