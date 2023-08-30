export default function Section({children}){
    return(
        <section className = 'relative h-[100vh] w-full flex flex-col  pb-[2rem] items-center justify-center gap-4'>
            {children}
            
        </section>
    )
}