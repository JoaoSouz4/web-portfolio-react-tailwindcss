import Button from '../button'

export default function Form({children, submit, nameButton}){
    return(
        <form
            className = 'flex flex-col gap-5 w-[400px] h-full'
            onSubmit={submit}
        >
            
            <div className = 'flex flex-col gap-3'>
                {children}
            </div>

            <Button.Root >
                <Button.Label 
                    label={nameButton}
                    isBold={true}
                />
            </Button.Root>
        </form>
    )
}