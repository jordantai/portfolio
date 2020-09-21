import styled from "styled-components"
import crimeStatsMobileImg from "../../content/assets/crime-stats-mobile2.png"
import crimeStatsMacImg from "../../content/assets/crime-stats-mac.png"

const FrameWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`
const ImageFrame = styled.img`
  max-width: 15rem;
  background: none;
  margin-right: 5px;
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

export { FrameWrapper, MacImageFrame, PhoneImageFrame }
