import {DiReact,  DiNodejsSmall} from 'react-icons/di';
import { BiLogoMongodb, BiLogoTypescript, BiLogoTailwindCss, BiLogoJavascript} from 'react-icons/bi';
import {SiStyledcomponents, SiVite, SiElectron} from 'react-icons/si'

export function CardStacks({listFrontEnd, listBackEnd}){
    return(
        
            <div className = 'w-full'>
                <h2>Recusos utilizados:</h2>
                <div className = 'flex flex-col'>

                   <div>
                        <h5>Front-end</h5>
                        <div className = 'flex flex-start gap-5 flex-nowrap overflow-x-scroll w-full'>
                            {listFrontEnd.map( item => {
                                return(
                                    <div>
                                        {item == 'react' && <DiReact />}
                                        {item == 'electron' && <SiElectron />}
                                        {item == 'vite' && <SiVite />}
                                        {item == 'javascript' && <BiLogoJavascript />}
                                        {item == 'styledcomponents' && <SiStyledcomponents />}
                                        {item == 'tailwind' && <BiLogoTailwindCss />}
                                    </div>
                                )
                            })}
                        </div>
                   </div>

                   <div>
                        <h5>Back-end</h5>
                        <div className = 'flex flex-start gap-5 flex-nowrap overflow-x-scroll w-full'>
                            {listBackEnd.map( item => {
                                return(
                                    <div>
                                        {item == 'node' && <DiNodejsSmall />}
                                        {item == 'mongo' && <BiLogoMongodb />}
                                        {item == 'express' && <SiStyledcomponents />}
                                        {item == 'typescript' && <BiLogoTypescript />}
                                    </div>
                                )
                            })}
                        </div>
                   </div>
                      
                            
                    {/* {item  == 'typescript' && <BiLogoTypescript />}
                    {item == 'node' && <DiNodejsSmall />}
                    {item == 'tailwind' && <BiLogoTailwindCss />}
                    {item == 'stlyedcomponent' && <SiStyledcomponents />}
                    {item == 'mongodb' && <BiLogoMongodb />}
                    {item == 'javascript' && <BiLogoJavascript />} */}
                          
                </div>
            </div>
        
    )
}