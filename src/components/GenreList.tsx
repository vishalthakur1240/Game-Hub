import useGenres from '../hooks/useGenres'

const GenreList = () => {
  const {datas} = useGenres();

  return (
    <ul>
      {datas.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList