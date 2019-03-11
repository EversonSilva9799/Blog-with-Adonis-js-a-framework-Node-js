'use strict'

const User = use('App/Models/User');

class UserController {

  async create ({ view }) {
    return view.render('register.index');
  }

  async register ({ request }) {
    const data = request.only(["username", "email", "password"])

    const user = await User.create(data)

    return user
  }

  async login ({ auth, request, response, view }) {

    const { email, password } = request.all()
    await auth.attempt(email, password)

    return response.redirect('/');
  }

  show ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile"
    }
    return auth.user
  }

  async formLogin({ view }) {
    return view.render('login.index');
  }

  async logout({ auth, response }) {
    await auth.logout();
    response.redirect('/');

  }
}

module.exports = UserController
