
export const Button = (props) => {

   // const [showLoad, setShowLoad] = useContext(Contexto)


   return (
      <div className="d-flex justify-content-end">
         <button onClick={() => props.getData()} id="save-btn" type="submit" className ="btn btn-primary" disabled = {props.isDisabled}>
            {props.text}
         </button>
      </div>
   )
} 