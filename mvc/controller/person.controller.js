const persons = [];

module.exports = {
    find: (req, res) => {
        res.send(persons);
    },
    create: (req, res) => {
        const person = req.body;

        persons.push(person);

        res.send(person);
    },
    findByID: (req, res) => {
        const id = req.params.id;

        res.send(persons[id - 1]);

        console.log(id);
    },
    update: (req, res) => {
        const { id } = req.params;

        const person = req.body;

        const index = id - 1;

        persons[index] = person;

        res.send(persons[id - 1]);

    },
    delete: (req, res) => {
        const { id } = req.params;
        persons.splice(id - 1, 1);
        res.status(204).send();
    }

}