export default function TextArea({title}){
    return (
        <div className = 'flex flex-col gap-1'>
            <label className="font-bold text-sm text-primary">{title}</label>
            <textarea
                maxLength={500}
                className = 'bg-light px-3 py-6 rounded-lg text-gray-dark resize-none'
            />
        </div>
    )
}