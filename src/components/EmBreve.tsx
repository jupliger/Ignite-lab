import { ArrowFatRight } from "phosphor-react";
import ReactLogo from "./ReactLogo";

export function Embreve(){
     return(
          <div className="flex-1">
               

               <div className="m-6">
                    <strong className="flex justify-center items-center font-bold text-2xl ">
                              Comece Agora!
                    </strong>
                    
                    <p className="flex justify-center items-center">
                              Escolha ao lado qual aula você gostaria de assistir
                    </p>
                    <div className="flex justify-center items-center m-6 text-green-300">
                                <ArrowFatRight  size={42} weight="fill" />
                    </div>
               </div>

               <div className="flex flex-1 justify-center items-center  ">
                              <ReactLogo/>
               </div>
                    
          </div>
     )
}