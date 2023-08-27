export default function Section({children, title, icon: Icon}){
    return(
        <section 
            className = 'relative h-[100vh] w-full flex flex-col  items-center justify-center gap-4'>
            { title && 
                <div className = 'flex gap-2 items-center'>
                    <h1 className = 'text-xl text-primary font-bold md:text-3xl'>{title}</h1>
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