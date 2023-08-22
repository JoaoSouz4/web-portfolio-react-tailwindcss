export function ButtonLabel ({label, isBold}){
    return (
        <label className = {isBold == true && `font-bold`}>
            {label}
        </label>
    )
}