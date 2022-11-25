import * as S from './image.style'

const Image = ({url, alt, count, id}) => {
  return <S.Image count={count} src={url} alt={alt} id={id}/>
}

export default Image