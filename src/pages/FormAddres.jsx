import { estados } from '../utils/estados'
import { Progress } from '../components/Progress'
import { Button } from '../components/Button'
import { useState } from 'react'
import { api} from '../utils/api'

export const FormAddres = (props) => {

   const [data, setData] = useState({
      cep:'',
      logradouro:'',
      numero:'',
      bairro: '',
      complemento:'',
      localidade:'',
      estado:''
      
   })


   const [showLoad, setShowLoad] = useState(false)

   const handleData = async (e) => {
      const {value, name} = e.target;

      setData((prev) => {
         const newData = {...prev, [name]:value}
         return newData
      })

      if(name === 'cep' && value.length === 8){
         /// PEGAR OS DADOS NA API
         
            const datas = await api(value)
            if(datas.erro){
               return alert("Cep invalido")
            }
    
            setData({
               cep: datas.cep,
               logradouro:datas.logradouro,
               bairro: datas.bairro,
               complemento:'',
               localidade: datas.localidade,
               estado: undefined,
            })
         
      }

      
   }
   const cadastraUser = (e) => {
      setShowLoad(true)
      const input = document.getElementsByTagName('input')
     

   }

   return (
      <div id='order-container' className='container px-md-0' >
         <Progress></Progress>

         <form id="addres-form">

            <div className="row ">
                  {/* CEP */}
               <div className="form-floating mb-3">
                  <input type="text" name= "cep" id="cep" className="form-control show-none" placeholder="Digite o seu CEP"
                     minLength="8" maxLength="8" required data-input value= {data.cep} onChange = {handleData} />

                  <label htmlFor="cep">Digite o seu CEP</label>
               </div>



               <div className="form-floating col-12 col-sm-6 mb-3 sm- 0">
                  <input type="text" name="logradouro" id="address" className="form-control show-none" placeholder="Rua"
                     disabled = {data.localidade == ''} required data-input value={data.logradouro} onChange = {handleData} />
                  <label htmlFor="address">Rua</label>
               </div>


               <div className="form-floating mb-3 col-12 col-sm-6 sm-0">
                  <input type="text" name="number" id="number" className="form-control show-none"
                     placeholder="Digite o seu CEP" disabled = {data.localidade == ''} required value={data.numero} onChange = {handleData} />
                  <label htmlFor="number">Digite o número da residência</label>
               </div>
            </div>


            <div className="row mb-3">
               <div className="form-floating mb-3 col-12 col-sm-6 sm-0">
                  <input type="text" name="complemento" id="complemento" className="form-control show-none"
                     placeholder="Digite o complemento" disabled = {data.localidade == ''} value={data.complemento} onChange = {handleData}/>
                  <label htmlFor="cep">Digite o complemento</label>
               </div>



               <div className="form-floating col-12 col-sm-6 mb-3 sm- 0">
                  <input type="text" name="bairro" id="bairro" className="form-control show-none" placeholder="Bairro"
                     disabled = {data.localidade == ''} required data-input  value={data.bairro} onChange = {handleData}/>
                  <label htmlFor="address">Bairro</label>
               </div>


               <div className="form-floating mb-3 col-12 col-sm-6 sm-0">
                  <input type="text" name="localidade" id="city" className="form-control show-none" placeholder="Cidade"
                     disabled = {data.localidade == ''} required data-input value={data.localidade} onChange = {handleData}/>
                  <label htmlFor="number">Cidade</label>
               </div>

               <div className="form-floating col-12 col-sm-6">
                  <select name="estado" id="region" className="form-select shadow-none" disabled = {data.localidade == ''} required data-input value={data.estado} onChange = {handleData}>
                     {estados.map((estado, index) => {
                        return <option key={index} value={estado.value}>{estado.estado}</option>
                     })}
                  </select>
               </div>
            </div>
            <Button getData = {cadastraUser} isDisabled = {data.localidade == ''} text='Cadastra'></Button>
         </form>

      </div>
   )
}