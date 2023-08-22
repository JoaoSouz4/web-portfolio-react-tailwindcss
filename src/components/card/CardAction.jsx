import Button from '../button'

export function CardAction({label, action, style}){
    return(
        <Button.Root 
            style = {style}
            action={action}
        >
            <Button.Label label={label} />

        </Button.Root>
    )
}