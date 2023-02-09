import axios from 'axios'

export const api = async (cep) => {


   try {
      const apiUrl = `https://viacep.com.br/ws/${cep}/json`;
      const response = await axios.get(apiUrl)

      const {data} =  response;
      return data

   }catch{
      console.log('Numero errado')
   }
   
}
