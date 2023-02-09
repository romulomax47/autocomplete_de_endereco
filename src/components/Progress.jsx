import React from "react"

export const Progress = (props) => {
   return (
      <div id='steps' className="container-sm d-flex justify-content-between mt-4 mb-4 ">
         <div className ="line"></div>

         <div className="step">
            <i className="bi bi-person active"></i>
            <p className="d-none d-md-block">Criação de conta</p>
         </div>
         <div className="step">
            <i className="bi bi-geo-alt active"></i>
            <p className="d-none d-md-block">Endereço</p>
         </div>
         <div className="step">
            <i className="bi bi-credit-card"></i>
            <p className="d-none d-md-block">Pagamento</p>
         </div>

      </div> 

   )
}