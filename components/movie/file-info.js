import EqualizerIcon from '@material-ui/icons/Equalizer';
import InfoIcon from '@material-ui/icons/Info';
import SpeakerIcon from '@material-ui/icons/Speaker';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import StorageIcon from '@material-ui/icons/Storage';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';

export default function FileInfo({ 
  quality,
  format,
  audio,
  subtitle,
  size,
  audioQuality,
  videoQuality,
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

  return(
    <div {...props}>
      <div>
        <Item label={'Qualidade: '} value={quality} >
          <EqualizerIcon fontSize="small" style={{color: '#EF444C', marginTop: '1px'}}/>
        </Item>
        <Item label={'Formato: '} value={format} >
          <InfoIcon fontSize="small" style={{color: '#EF444C', marginTop: '1px'}}/>
        </Item>
        <Item label={'Áudio: '} value={audio} >
          <SpeakerIcon fontSize="small" style={{color: '#EF444C', marginTop: '1px'}}/>
        </Item>
        <Item label={'Legenda: '} value={subtitle} >
          <SubtitlesIcon fontSize="small" style={{color: '#EF444C', marginTop: '1px'}}/>
        </Item>
        <Item label={'Tamanho: '} value={size} >
          <StorageIcon fontSize="small" style={{color: '#EF444C', marginTop: '1px'}}/>
        </Item>
        <Item label={'Qualidade de Áudio: '} value={audioQuality} >
          <GraphicEqIcon fontSize="small" style={{color: '#EF444C', marginTop: '1px'}}/>
        </Item>
        <Item label={'Qualidade de Video: '} value={videoQuality} >
          <PersonalVideoIcon fontSize="small" style={{color: '#EF444C', marginTop: '1px'}}/>
        </Item>
      </div>
    </div>
  )
}