import {DiReact,  DiNodejsSmall} from 'react-icons/di';
import { BiLogoMongodb, BiLogoTypescript, BiLogoTailwindCss, BiLogoJavascript} from 'react-icons/bi';
import {SiStyledcomponents, SiVite, SiElectron, SiExpress} from 'react-icons/si'

export function CardStacks({listFrontEnd, listBackEnd}){
    return(
        
            <div className = 'w-full'>
                <div className = 'flex items-center justify-around mt-3'>

                   <div>
                        <h5 className = 'text-sm text-[#D4D4D4]'>Front-end</h5>
                        <div className = 'flex flex-start gap-2 flex-nowrap overflow-x-auto w-full'>
                            {listFrontEnd.map( item => {
                                return(
                                    <div className= 'text-4xl'>
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
                        <h5 className = 'text-sm text-[#D4D4D4]'>Back-end</h5>
                        <div className = 'flex flex-start gap-2 flex-nowrap overflow-x-auto w-full'>
                            {listBackEnd.map( item => {
                                return(
                                    <div className = 'text-4xl'>
                                        {item == 'node' && <DiNodejsSmall />}
                                        {item == 'mongodb' && <BiLogoMongodb />}
                                        {item == 'express' && <SiExpress />}
                                        {item == 'typescript' && <BiLogoTypescript />}
                                    </div>
                                )
                            })}
                        </div>
                   </div>
                </div>
            </div>
        
    )
}