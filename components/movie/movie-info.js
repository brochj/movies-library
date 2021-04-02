import { dateFormat } from '../../utils/date-formatter'
import VideocamIcon from '@material-ui/icons/Videocam';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import StarIcon from '@material-ui/icons/Star';
import DateRangeIcon from '@material-ui/icons/DateRange';


export default function MovieInfo({
  title,
  synopsis,
  originalTitle,
  releaseDate,
  imdb,
  duration,
  trailer,
  tags,
  genre,
  ...props
}) {

  function Item({ label, value, children }) {
    return (
      <div className="flex mb-1 mx-3">
        {children}
        <p className="pl-2 font-bold dark:text-dark-onPrimary">
          <span className="font-normal dark:text-gray-300">
            {label}
          </span>
          {value}
        </p>

      </div>
    )
  }

  return (
    <div {...props}>
      <Item label={'Título Original: '} value={originalTitle} >
        <VideocamIcon fontSize="small" style={{color: '#EF444C', marginTop: '1px'}}/>
      </Item>
      <Item label={'Lançamento: '} value={dateFormat(releaseDate)}>
        <DateRangeIcon fontSize="small" style={{color: '#EF444C', marginTop: '1px'}}/>
      </Item>
      <Item label={'IMDb: '} value={imdb.rating}>
        <StarIcon fontSize="small" style={{color: '#EF444C', marginTop: '1px'}}/>
      </Item>
      <Item label={'Duração: '} value={duration}>
        <AccessTimeIcon fontSize="small" style={{color: '#EF444C', marginTop: '1px'}}/>
      </Item>
      <p className="py-5 dark:text-dark-onPrimary tracking-wide">{synopsis}</p>
    </div>
  )
}