export default function Tag({ tag }){
    return(
        <div className="px-3 py-1 rounded-xl bg-blue-400 text-white text-sm hover:bg-blue-600 cursor-pointer hover:shadow-md">
            { tag.charAt(0).toUpperCase() + tag.slice(1) }
        </div>
    )
}