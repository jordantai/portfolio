import React from "react"
import styled from "styled-components"
import macFrame from "assets/mac-frame.png"
import phoneFrame from "assets/phone-frame.png"

const FrameWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  @media (max-device-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

const ImageFrame = styled.img`
  max-width: 15rem;
  background: none;
`

const PhoneImageFrame = styled(ImageFrame)`
  max-height: 5rem;
  background-size: contain;
  background-repeat: no-repeat;
`

const MacImageFrame = styled(ImageFrame)`
  background-size: 98%;
  background-repeat: no-repeat;
  background-position: 50% 20%;
`

const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem;
  border-radius: 2px;
  align-items: center;
  span {
    font-weight: bold;
  }
  svg {
    margin-right: 5px;
    margin-bottom: -2px;
  }
`

const ArticleIntroLayout = ({ macBkg, phoneBkg, children }) => {
  return (
    <FrameWrapper>
      <ImgContainer>
        <MacImageFrame
          src={`${macFrame}`}
          style={{ backgroundImage: `url(${macBkg})` }}
          alt="Monitor screen with image of website displaying"
        />
        <PhoneImageFrame
          src={`${phoneFrame}`}
          style={{ backgroundImage: `url(${phoneBkg})` }}
          alt="Phone screen with image of website displaying"
        />
      </ImgContainer>
      {children}
    </FrameWrapper>
  )
}

export { ListContainer, ArticleIntroLayout }
