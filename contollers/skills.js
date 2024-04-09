const SkillList = require('../models/skill');

module.exports = {
    index,
    show
}

function index(req, res) {
    res.render('skills/index', { skills: SkillList.getAll() });
}

function show(req, res) {
    res.render('skills/show', { skill: SkillList.getOne(req.params.id) });
}