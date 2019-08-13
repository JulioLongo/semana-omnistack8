const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(req, res){
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        //buscar todos os usuarios que nao possuem dislikes,like, e seja o logado
        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } },
            ],
        }) 
        
        return res.json(users);
    },


    async store(req, res){
        //Desestrutura o body do request em json
        const { username } = req.body;

        //procura se existe um usuario
        const userExists = await Dev.findOne({ user: username});
        if(userExists){
            return res.json(userExists);
        }


        const response = await axios.get(`https://api.github.com/users/${username}`);
        
        //imprime todo o response obtido de resposta
        console.log(response.data);

        //desestrutura o json
        const { name, bio , avatar_url} = response.data;
        
        //Cadastra no banco de dados 
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar: avatar_url
        });

        return res.json(dev);
    }
};