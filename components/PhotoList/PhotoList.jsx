import { PhotoCard } from '../PhotoCard/PhotoCard'

export const PhotoList = ({ photos }) => {
  return (
    <div className='img-grid'>
      {
        photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)
      }
    </div>
  )
}
