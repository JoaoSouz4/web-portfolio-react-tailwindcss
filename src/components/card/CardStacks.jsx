

export function CardStacks({listStacks}){
    return(
        
            <div className = 'w-full'>
                <h2>Recusos utilizados:</h2>
                <div className = 'flex flex-start gap-5 flex-nowrap overflow-x-scroll w-full'>
                    {
                        listStacks.map( item => {
                            return(
                                <div className = ''>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        
    )
}