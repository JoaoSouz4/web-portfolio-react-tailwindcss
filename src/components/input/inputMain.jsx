export default function InputMain({placeholder, isChange, type}){
    return(
        <input 
            type= {type}
            onChange={isChange}
            placeholder= {placeholder}
            className = 'px-6 py-4 bg-light text-dark rounded-lg w-full '
        />
    )
}