import SunsetHero from '../components/home/SunsetHero'
import StatsMarquee from '../components/home/StatsMarquee'
import FeatureBento from '../components/home/FeatureBento'
import StyleShowcase from '../components/home/StyleShowcase'
import CtaSunset from '../components/home/CtaSunset'

export default function Home() {
  return (
    <div style={{ overflowX: 'clip' }}>
      <SunsetHero />
      <StatsMarquee />
      <FeatureBento />
      <StyleShowcase />
      <CtaSunset />
    </div>
  )
}
