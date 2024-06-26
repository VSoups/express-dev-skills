const SkillList = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update,
};

function update(req, res) {
    console.log('at controller');
    SkillList.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
    res.render('skills/edit', { skill: SkillList.getOne(req.params.id), title: 'Edit a Skill' });
}

function deleteSkill(req, res) {
    SkillList.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    SkillList.create(req.body);
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'Add a Skill' });
}

function index(req, res) {
    res.render('skills/index', { skills: SkillList.getAll(), title: 'Current Coding Skills' });
}

function show(req, res) {
    res.render('skills/show', { skill: SkillList.getOne(req.params.id), title: `Coding Skill Details ${req.params.id}` });
}