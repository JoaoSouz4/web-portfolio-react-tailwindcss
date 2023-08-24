export function ButtonLabel ({label, isBold}){
    return (
        <label className = {isBold == true ? `font-bold cursor-pointer` : 'cursor-pointer'}>
            {label}
        </label>
    )
}