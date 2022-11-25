import styled from 'styled-components'

export const Image = styled.img`
  width: 200px;
  height: 200px;
  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(95deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(90deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(85deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(90deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(95deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(90deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(85deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(90deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(95deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(90deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(85deg);
      ${({ count }) => (count > 9 ? 'opacity: 0.2;' : '')}
    }
  }

  position: absolute;
  left: 300px;

  ${({ id, count }) =>
    id === 'egg'
      ? ` ${
          count > 0 ? 'animation:shake 0.7s infinite;' : ''
        } animation-timing-function: ease-out; top: 30px; transform: rotate(90deg);`
      : ''}
`
