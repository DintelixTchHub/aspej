'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const splashStorageKey = 'aspej-platform-introduced'

export function PlatformSplash() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)
  const splashDurationMs = 1200

  useEffect(() => {
    if (window.sessionStorage.getItem(splashStorageKey)) {
      setVisible(false)
      return
    }

    const progressTimer = window.setInterval(() => {
      setProgress((current) => Math.min(current + 4, 100))
    }, 42)

    const closeTimer = window.setTimeout(() => {
      window.sessionStorage.setItem(splashStorageKey, 'true')
      setProgress(100)
      setVisible(false)
    }, splashDurationMs)

    return () => {
      window.clearInterval(progressTimer)
      window.clearTimeout(closeTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="platform-splash" role="status" aria-live="polite" aria-label="Loading ASPEJ platform">
      <div className="splash-orbit splash-orbit-one" />
      <div className="splash-orbit splash-orbit-two" />
      <div className="splash-content">
        <div className="splash-logo-wrap">
          <Image
            className="splash-logo"
            src="/images/aspej-logo.jpg"
            alt="ASPEJ school crest"
            width={132}
            height={132}
            priority
          />
        </div>
        <span className="splash-kicker">Lycée du Lac Muhazi</span>
        <h1>ASPEJ</h1>
        <p>Preparing skills. Opening futures.</p>
        <div className="splash-progress" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
        <div className="splash-progress-meta">
          <span>Loading platform</span>
          <strong>{progress}%</strong>
        </div>
      </div>
    </div>
  )
}
