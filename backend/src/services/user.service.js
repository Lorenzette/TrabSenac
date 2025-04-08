const prisma = require('../prismaClient');

async function criarUsuario(name, email, password, role) {
    return await prisma.user.create({
        data:  { name, email, password, role }
    });
}

async function buscarUsuarioPorEmail(email){
    return await prisma.user.findUnique({
        where: { email }
    });
}

module.exports = { criarUsuario, buscarUsuarioPorEmail };