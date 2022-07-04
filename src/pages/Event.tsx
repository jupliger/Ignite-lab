import { useParams } from "react-router-dom";
import { Embreve } from "../components/EmBreve";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


export function Event(){
     const {slug} = useParams<{slug : string}>();


     return(
          <div className="flex flex-col ">
               <Header/>
               <main className="flex felx-1 min-h-screen">
               
                    {slug ?
                    (<Video lessonSlug={slug}/>) : 
                    (<div className="flex-1">
                        <Embreve/>

                    </div>)
                    }
                    <Sidebar/>
                    
               </main>
          </div>
     )
}