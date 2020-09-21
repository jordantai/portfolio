import styled from "styled-components"
import crimeStatsMobileImg from "../../content/assets/crime-stats-mobile2.png"
import crimeStatsMacImg from "../../content/assets/crime-stats-mac.png"

const FrameWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`
const ImageFrame = styled.img`
  max-width: 15rem;
  background: none;
`

const PhoneImageFrame = styled(ImageFrame)`
  max-height: 5rem;
  background-image: url(${crimeStatsMobileImg});
  background-size: contain;
  background-repeat: no-repeat;
`

const MacImageFrame = styled(ImageFrame)`
  background-image: url(${crimeStatsMacImg});
  background-size: 98%;
  background-repeat: no-repeat;
  background-position: 50% 20%;
`

const ListContainer = styled.ul`
  list-style: none;
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

export { FrameWrapper, MacImageFrame, PhoneImageFrame, ListContainer }
