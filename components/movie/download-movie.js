import GetAppIcon from '@material-ui/icons/GetApp';

export default function DownloadMovie({ download }){

  function DownloadRow({ row }){
    return (
      <tr className="dark:text-dark-onPrimary">
        <td className="border-t border-b border-gray-500 px-4 py-2 dark:text-gray-400">{row.quality}</td>
        <td className="border-t border-b border-gray-500 px-4 py-2 dark:text-gray-400">{row.format}</td>
        <td className="border-t border-b border-gray-500 px-4 py-2">{row.resolution}</td>
        <td className="border-t border-b border-gray-500 px-4 py-2 font-bold">{row.size}</td>
        <td className="border-t border-b border-gray-500 px-4 py-2 font-bold dark:text-yellow-500">{row.audio}</td>
        <td className="border-t border-b border-gray-500 px-4 py-2 hover:bg-green-400  transition-colors">
          <a href={row.url} className="flex justify-center items-center">
            <GetAppIcon fontSize="large" style={{color: '#ffffff', marginTop: '1px'}}/>
            <p className="hidden md:block ml-3 lg:text-lg">Download</p>
          </a>
        </td>
      </tr>
    )
  }

  return (
    <section className="mx-auto">
      <hr className="my-3 dark:border-gray-700" />
      <h3 className="dark:text-dark-onBackground font-semibold text-2xl md:text-3xl lg:text-4xl md:text-center">Download</h3>
      <table className="mt-4 mx-auto dark:bg-dark-surface overflow-hidden w-full md:w-5/6 xl:w-9/12">
        <tbody>
          {download.map((row) => <DownloadRow row={row} key={row.url}/>)}
        </tbody>
      </table>

    </section>
  )
}