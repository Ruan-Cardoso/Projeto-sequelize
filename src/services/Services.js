//Services aplica regas de negocio ao moelo
const dataSource = require ('../models')

class Services{
  constructor(nomeDoModel){
    this.model = nomeDoModel
  }

  async pegaTodosOsRequisitos(){
    return dataSource[this.model].findAll()
  }

  async pegarUmRegistroPorId(id){
    return dataSource[this.model].findByPk(id)
  }

  async criaRegistro(dadosDoRegistro) {
    return dataSource[this.model].create(dadosDoRegistro);
  }
  async atualizaRegistro(dadosAtualizados,id){
    const listaDeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados,
      {where: {id: id }}
      )
      if (listaDeRegistrosAtualizados[0]=== 0){
        return false;
      }
      return true;
  }

  async excluiRegistro(id){
    return dataSource[this.model].destroy(
      {where: {id: id}}
      )
  }
}

module.exports = Services;