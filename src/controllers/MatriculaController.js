const Controller = require("./controller.js");
const MatriculaServices = require('../services/MatriculaServices.js')

const matriculaServices = new MatriculaServices()

class MatriculaController extends Controller{
  constructor(){
    super(matriculaServices)
  }
}

module.exports = MatriculaController;
