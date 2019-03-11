'use strict'

class HomeController {

  async index({ view, auth }) {
    //var userLogged = await auth.getUser();
    return view.render('home.index');
  }
}

module.exports = HomeController
