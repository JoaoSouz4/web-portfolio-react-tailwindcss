export default function Section({children}){
    return(
        <section className = 'relative h-[100vh] flex justify-center items-center'>
            <div>
                {children}
            </div>
        </section>
    )
}