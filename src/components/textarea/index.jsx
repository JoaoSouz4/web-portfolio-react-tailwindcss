export default function TextArea({title, value, isChange}){
    return (
        <div className = 'flex flex-col gap-1'>
            <label className="font-bold text-sm text-primary">{title}</label>
            <textarea
                value = {value}
                onChange = {isChange}
                maxLength={500}
                className = 'bg-light px-3 py-6 rounded-lg text-dark resize-none'
            />
        </div>
    )
}