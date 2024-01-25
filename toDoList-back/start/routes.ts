/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import NoteController from '#controllers/Http/NoteController'

import router from '@adonisjs/core/services/router'

router.resource('/notes', NoteController).apiOnly();
