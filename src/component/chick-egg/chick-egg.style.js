import styled from 'styled-components'

export const LeftShell = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;

  @keyframes left {
    0% {
        transform-origin: bottom right;
      transform: rotate(0deg);
      left: 225px;
      top: -40px;
    }

    100% {
      transform-origin: bottom right;
      transform: rotate(-30deg);
      left: 225px;
      top: -40px;
    }
  }

  animation: left ;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;'

`

export const Chick = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  left: 222px;
  top: -35px;
  @keyframes chick {
    100% {
      transform-origin: bottom right;
      transform: rotate(-25deg);
    }
  }

  animation: chick;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  clip-path: polygon(
    51% 0,
    81% 13%,
    100% 30%,
    100% 63%,
    91% 73%,
    56% 75%,
    33% 68%,
    19% 47%,
    16% 28%,
    12% 11%
  );
  transform: rotate(30deg);
`

export const RightShell = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  left: 380px;
  top: -15px;

  @keyframes right {
    100% {
      transform-origin: bottom left;
      transform: rotate(25deg);
    }
  }

  animation: right;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`

export const Wrap = styled.div`
  position relative;
  display: flex;
  justify-content:center;
  width:100%;
`
