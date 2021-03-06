import { CaretRight, DiscordLogo, FileArrowDown, Lightning, Image, Spinner } from "phosphor-react";
import {DefaultUi, Player, Youtube } from "@vime/react"
import { gql, useQuery } from "@apollo/client";
import "@vime/core/themes/default.css"



const GET_LESSON_BY_SLUG_QUERY = gql`
query GetLessonBySlug ($slug: String) {
     lesson(where: {slug: $slug} stage:PUBLISHED) {
       title
       videoId
       description
       availableAt
       teacher {
         avatarURL
         bio
         name
       }
     }
  }
`




interface GetLessonBySlugResponse {
     lesson: {
          title: string;
          videoId: string;
          description: string;
          availableAt: string;
       teacher:{
         avatarURL: string;
         bio: string;
         name: string;
       }
     }
}


interface VideoProps {
     lessonSlug : string,
   
}



export function Video(props: VideoProps){
     const {data} = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY,{
          variables:{
               slug: props.lessonSlug,
               
          }
     })

     

     if(!data?.lesson.videoId){
          return(
               <div className="flex-1">
                    <div className="flex flex-col w-full items-center mt-20  aspect-video">
                         <p className="flex-1 text-2xl m-6">
                              Carregando...
                         </p>    
                         <div className="flex-1">
                              <Spinner size={32} />
                         </div>
                    </div>
               </div>
          )
     }

     return(
          <div className="flex-1">

             

               <div className="bg-black flex justify-center">
                   
                         <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video  ">
                                   <Player>
                                        <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId}/>
                                        <DefaultUi/>
                                   </Player>
                         
                         </div>

                   
               </div>
   
               <div className="p-8 max-w-[1100px] mx-auto">
                    <section className="flex items-start gap-16">
                         <div className="flex-1">
                             <h1 className="text-2xl font-bold">
                                    {data.lesson.title}
                             </h1>
                             <p className="mt-4 text-gray-200 leading-relaxed mb-4">
                                     {data.lesson.description}
                             </p>

                             <div className="flex items-center gap-4 mt-06">
                                   <img 
                                     className="h-16 w-16 rounded-full border-2 border-blue-500"
                                     src={data.lesson.teacher.avatarURL}
                                     alt=""/>
                                   <div>
                                        <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                        <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                                   </div>
                             </div>
                         </div>
                         <div className="flex flex-col gap-4">
                              <a href="https://discord.com/channels/327861810768117763/988846584009719849" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-900 hover:transition-colors">
                                   <DiscordLogo size={30}/>
                                   Comunidade do Discord 
                              </a>

                              <a href="https://rseat.in/desafios-ignite-lab " className="p-4 text-sm flex items-center text-blue-500 rounded font-bold uppercase gap-2 justify-center  border hover:bg-blue-500 hover:text-gray-900 hover:transition-colors">
                                   <Lightning size={30}/>
                                   Acesse o desafio
                              </a>
                         </div>
                    </section>
                    <section className="gap-8 mt-20 grid  grid-cols-2">
                        <a target="_blank" href="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                              <div className="bg-green-700 h-full p-6 flex items-center">
                                   <FileArrowDown size={40}/>
                              </div>
                              <div className="py-6 leading-relaxed">
                                   <strong className="text-2xl">Material complementar</strong>
                                   <p className="text-sm text-gray-200 mt-2">Acesse o material complementar para acelerar o seu desenvolvimento</p>
                              </div>
                              <div className="h-full p-6 flex items-center">
                                   <CaretRight size={24}/>
                              </div>
                        </a>

                        <a target="_blank" href="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR?usp=sharing" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                              <div className="bg-green-700 h-full p-6 flex items-center">
                                   <Image size={40}/>
                              </div>
                              <div className="py-6 leading-relaxed">
                                   <strong className="text-2xl">Wallpapers exclusivos</strong>
                                   <p className="text-sm text-gray-200 mt-2">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua m??quina</p>
                              </div>
                              <div className="h-full p-6 flex items-center">
                                   <CaretRight size={24}/>
                              </div>
                        </a>
                    </section>
               </div>
          </div>
     )
}