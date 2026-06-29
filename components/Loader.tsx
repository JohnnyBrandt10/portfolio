'use client'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`loader ${hidden ? 'hidden' : ''}`} id="loader">
      <div className="loader__content">
        <span className="loader__logo">
          Johnny<span>.</span>
        </span>
        <div className="loader__bar">
          <div className="loader__progress"></div>
        </div>
      </div>
    </div>
  )
}