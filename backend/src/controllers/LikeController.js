const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    console.log(req.params.devId);
    console.log(req.headers.user);

    //destruturar
    const { user } = req.headers;
    const { devId } = req.params;
    
    //encontrar id
    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    //se nao existir
    if (!targetDev) {
      return res.status(400).json({ error: "Dev not exist" });
    }

    //verifica se o like ja nao existe no array
    if(targetDev.likes.includes(loggedDev._id)){
        console.log('MATCH');
    }

    loggedDev.likes.push(targetDev._id);

    //salvar no banco
    await loggedDev.save();

    return res.json(loggedDev);
  }
};
