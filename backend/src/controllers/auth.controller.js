const { criarUsuario, buscarUsuarioPorEmail } = require('../services/user.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'segredo';

async function cadastrar(req, res) {
    const { name, email, password, role } = req.body;

    const existingUser = await buscarUsuarioPorEmail(email);
    if (existingUser) return res.status(400).json({ message: 'Email já cadastrado' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await criarUsuario(name, email, hashedPassword, role);

    res.status(201).json(user);
}

async function login(req, res) {
    const { email, password } = req.body;

    const user = await buscarUsuarioPorEmail(email);
    if (!user) return res.status(401).json({ message: 'Usuário não encontrado' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Senha inválida' });

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });

    res.json({ token, user });
}

module.exports = { cadastrar, login };
