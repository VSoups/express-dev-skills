const express = require('express');
const router = express.Router();
const skillsController = require('../contollers/skills');

/* GET users listing. */
router.get('/', skillsController.index);
// GET /skills/new
router.get('/new', skillsController.new);
// GET /skills/:id
router.get('/:id', skillsController.show);
// POST /skills
router.post('/', skillsController.create)
// DELETE /skills/:id
router.delete('/:id', skillsController.delete);
// GET /skills/:id/edit
router.get('/:id/edit', skillsController.edit);

module.exports = router;
