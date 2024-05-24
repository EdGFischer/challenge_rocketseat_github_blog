import { BannerContainer } from './styles'
import bannerHeader from '../../assets/bannerHeader.svg'
export function Header() {
  return (
    <BannerContainer>
      <img src={bannerHeader} alt="" />
    </BannerContainer>
  )
}
