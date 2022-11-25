import * as S from './chick-egg.style'

const ChickEgg = () => {
  return (
  <S.Wrap>
          <S.LeftShell src='/image/shell-left.png' id='shell-left'></S.LeftShell>
          <S.Chick src='/image/chick.png' id='chick'></S.Chick>
          <S.RightShell src='/image/shell-right.png' id='shell-right'></S.RightShell>
        </S.Wrap>
  )
}

export default ChickEgg