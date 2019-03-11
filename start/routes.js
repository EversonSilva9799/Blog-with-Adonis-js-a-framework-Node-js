'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.get('/', "HomeController.index");

Route.post('/register', 'UserController.register');
Route.get('/register', 'UserController.create');
Route.post('/login', 'UserController.login');
Route.get('/login', 'UserController.formLogin');
Route.get('/logout', 'UserController.logout');

Route.get('/posts', 'PostController.index');//Lista todos os posts
Route.get('/posts/create', 'PostController.create'); // Chama o form de criação de posts
Route.get('/posts/:id', 'PostController.show' ); //Lista um post
Route.post('/posts', 'PostController.store');// Armazena um post no Banco de dados
Route.get('/posts/edit/:id', 'PostController.edit'); // Chama o form de edição de posts
Route.put('/posts/:id', 'PostController.update'); // Atualiza um post
Route.delete('/posts/:id', 'PostController.destroy'); // Deleta um post


