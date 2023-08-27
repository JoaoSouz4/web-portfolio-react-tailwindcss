export function ButtonLabel ({label, isBold}){
    return (
        <label className = {isBold == true ? `font-bold cursor-pointer text-sm lg:text-lg` : 'lg:text-lg cursor-pointer text-sm'}>
            {label}
        </label>
    )
}