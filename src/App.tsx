import { useEffect, useState } from 'react'
import { HeroSection } from './components/sections/HeroSection'
import { MarqueeSection } from './components/sections/MarqueeSection'
import { FeaturesSection } from './components/sections/FeaturesSection'
import { WorkflowSection } from './components/sections/WorkflowSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { StatsSection } from './components/sections/StatsSection'
import { CtaSection } from './components/sections/CtaSection'
import { getPublicLanding } from './api'
import { content } from './data/content'

function App() {
  const [landingContent, setLandingContent] = useState(content)

  useEffect(() => {
    const controller = new AbortController()

    const loadLandingContent = async () => {
      try {
        const liveContent = await getPublicLanding({
          signal: controller.signal,
          fallback: content,
        })

        setLandingContent(liveContent)
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          return
        }

        console.error('Unable to fetch landing content from backend', error)
      }
    }

    void loadLandingContent()

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <main id="top" className="min-h-screen w-full overflow-x-hidden bg-slate-100 font-sans text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_4%_8%,#f7e8d2_0%,transparent_24%),radial-gradient(circle_at_95%_92%,#d5f6f0_0%,transparent_20%),#edf2f8]" />
      <HeroSection hero={landingContent.hero} />
      <MarqueeSection items={landingContent.marquee} />
      <FeaturesSection features={landingContent.features} />
      <WorkflowSection steps={landingContent.workflow} />
      <TestimonialsSection testimonials={landingContent.testimonials} />
      <StatsSection stats={landingContent.stats} />
      <CtaSection />
    </main>
  )
}

export default App
