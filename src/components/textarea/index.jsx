export default function TextArea({title}){
    return (
        <div className = 'flex flex-col gap-2'>
            <label className="font-bold text-lg text-primary">{title}</label>
            <textarea
                rows={'2'}
                cols={'2'}
                className = 'bg-light px-3 py-6 rounded-lg text-gray-dark'
            />
        </div>
    )
}