const skills = [
    {id: 101, skill: 'HTML', status: true},
    {id: 102, skill: 'CSS', status: true},
    {id: 103, skill: 'JavaScript', status: true},
    {id: 104, skill: 'Node', status: false},
    {id: 105, skill: 'Express', status: false},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
};

function update(id, newSkill) {
    console.log('made it to models');
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    // skill.skill = newSkill.skill;
    Object.assign(skill, newSkill);
}

function deleteOne(id) {
    // convert id(string) into integer
    id = parseInt(id);
    // iterrate through array to match id with the corresponding id in the skills array, then save as variable
    const idx = skills.findIndex(skill => skill.id === id);
    // remove with splice
    skills.splice(idx, 1);
}

function create(skill) {
    // creates an id based on Date.now() and sets the id property of the skill object parameter that was passed to this function
    skill.id = Date.now() % 1000000;
    // sets status parameter as false automatically since we wouldn't add a completed task to a list
    skill.status = false;
    // add to the array
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    idNum = parseInt(id);
    return skills.find((skill) => skill.id === idNum);
}