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
};

function getAll() {
    return skills;
}

function getOne(id) {
    idNum = parseInt(id);
    return skills.find((skill) => skill.id === idNum);
}