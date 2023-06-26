
const path = require('path');

const fs = require('fs').promises;

async function readUsers() {
    const filePath = path.join(__dirname, '../data/user.json');
    try {
        const data = await fs.readFile(filePath, { encoding: 'utf-8' });
        return JSON.parse(data);
    } catch (err) {
        console.error(err);
        return [];
    }
}
async function writeUsers(users) {
    const filePath = path.join(__dirname, '../data/user.json');
    try {
        await fs.writeFile(filePath, JSON.stringify(users, null, 2));
        console.log('Dados de usuários gravados com sucesso!');
    } catch (err) {
        console.error(err);
    }
}

async function generateUniqueID() {
    try {
        const characters = "ABCDEFGHIJLMNOPQRSTUVXYZ1234567890";
        const users = await readUsers();
        console.log({
            users
        })
        let id = "";

        do {
            id = "";
            while (id.length < 7) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                id += characters[randomIndex];
            }
        } while (users.some((payment) => payment.id === id));

        return id;
    } catch (error) {
        console.log({
            error
        })
    }
}

module.exports = Object.freeze({
    async create(user) {
        try {
            const users = await readUsers();
            user.id = await generateUniqueID();
            users.push(user);
            writeUsers(users);
        } catch (error) {
            console.log({
                error
            })
        }
    },
    updateUserById(userId, updatedUser) {
        const users = readUsers();
        const userIndex = users.findIndex(user => user.id === userId);

        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...updatedUser };
            writeUsers(users);
            return true;
        }

        return false;
    },
    deleteUserById(userId) {
        const users = readUsers();
        const updatedUsers = users.filter(user => user.id !== userId);

        if (users.length !== updatedUsers.length) {
            writeUsers(updatedUsers);
            return true;
        }

        return false;
    },
    getUserById(userId) {
        const users = readUsers();
        return users.find(user => user.id === userId);
    },
    async getUserByEmail(email) {
        const users = await readUsers();
        return users.find(user => user.email === email);
    }
})
