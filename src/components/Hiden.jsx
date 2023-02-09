import React, { useContext, useState } from 'react';
import { Fragment } from 'react';
import { Message } from './Message';

// import {Contexto} from '../Contexto'

export const Hiden = (props) => {

   // const [showLoad, setShowLoad] = useState(true);
   // const [showLoad, setShowLoad] = useContext(Contexto)

   return (props.showLoad ?
      <div id="fade" className='hide'>

         {props.load ? <div id="loader" className="spinner-border text-info hide" role="status">
            <span className="visually-hidden ">Loading...</span>

         </div> : <Message></Message>}





      </div> : Fragment

   );
}

export default Hiden;