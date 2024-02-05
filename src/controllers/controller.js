class Controller {
  constructor(entidadeServices){
    this.entidadeServices = entidadeServices
  }
  async pegaTodos(req, res){
    try{
      const listaDeRegistro = await this.entidadeServices.pegaTodosOsRequisitos()
      return res.status(200).json(listaDeRegistro);
    }catch (erro){

    }
  }

async pegaUmPorId(req,res){
  const { id }= req.params;
  try {
    const umRegistro = await this.entidadeServices.pegarUmRegistroPorId(Number(id));
    return res.status(200).json(umRegistro);
  }catch (erro){
    //erro
  }
}

async criaNovo(req, res) {
  const dadosParaCriacao = req.body;
  try {
    const novoRegistroCriado = await this.entidadeServices.criaRegistro(dadosParaCriacao);
    return res.status(200).json(novoRegistroCriado);
  } catch (erro) {
    
  }
}

async atualiza(req,res){
  const { id } = req.params;
  const dadosAtualizados = req.body;
  try{
    const foiAtualizado = await this.entidadeServices.atualizaRegistro(dadosAtualizados, Number(id))
    if (!foiAtualizado){
      return res.status(400).json({ mensagem: 'registro não foi atualizado' })
    }
    return res.status(200).json({mesagem: 'atualizado com sucesso'})
  }catch (erro){
    //erro
  }
}

async exclui(req, res){
  const { id } = req.params;
  try{
    await this.entidadeServices.excluiRegistro(Number(id));
    return res.status(200).json({mensagem: `id ${id}deletado`});
  }catch (erro){
    return res.status(500).json(error.message);
}
}

}

module.exports = Controller;