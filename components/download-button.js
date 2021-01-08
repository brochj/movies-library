export default function DownloadButton({ url }){
    return(
        <div className="flex self-center max-w-2xl mx-auto">
            <a href={url} className="bg-green-400 hover:bg-green-500 hover:shadow-lg rounded-xl px-8 py-4 text-white font-bold text-3xl text-center">
                Download
            </a>
        </div>
    )
}
