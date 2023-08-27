export default function Section({children, title, icon: Icon}){
    return(
        <section 
            className = 'relative h-[100vh] w-full flex justify-center'>
            { title && 
                <div className = 'flex gap-2 items-center'>
                    <h1 className = 'text-4xl text-primary font-bold'>{title}</h1>
                    {Icon && 
                        <div>
                            <Icon className = 'text-3xl text-primary'/>
                        </div>}
                </div>
            }
            
                {children}
            
        </section>
    )
}