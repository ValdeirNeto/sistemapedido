// Importaçao da constante HTTP do config.js da API onde possui a baseURL e etc
import { http } from '../api/config'

export default {
  // Método para listar as notas - GET
  listar: () => {
    return http.get('usuario')
  },
  // Método para salvar as Notas - POST
  // Este método precisa que passe o objeto 'nota' como retorno
  salvar: (nota) => {
    return http.post('usuario', nota)
  }
}
