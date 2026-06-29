'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const big = document.querySelector('.cursor__ball--big') as HTMLElement
    const small = document.querySelector('.cursor__ball--small') as HTMLElement

    if (!big || !small) return

    if ('ontouchstart' in window) {
      big.style.display = 'none'
      small.style.display = 'none'
      return
    }

    let bigX = 0, bigY = 0

    const animate = () => {
      const mouseX = parseFloat(small.style.left) || 0
      const mouseY = parseFloat(small.style.top) || 0
      bigX += (mouseX - bigX) * 0.12
      bigY += (mouseY - bigY) * 0.12
      big.style.left = bigX + 'px'
      big.style.top = bigY + 'px'
      requestAnimationFrame(animate)
    }

    const onMove = (e: MouseEvent) => {
      small.style.left = e.clientX + 'px'
      small.style.top = e.clientY + 'px'
    }

    document.addEventListener('mousemove', onMove)
    animate()

    const targets = document.querySelectorAll('a, button, .work__card, .services__header, .skills__item')
    targets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        big.style.transform = 'translate(-50%, -50%) scale(1.8)'
        big.style.backgroundColor = 'var(--accent-glow)'
      })
      el.addEventListener('mouseleave', () => {
        big.style.transform = 'translate(-50%, -50%) scale(1)'
        big.style.backgroundColor = 'transparent'
      })
    })

    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div className="cursor__ball cursor__ball--big"></div>
      <div className="cursor__ball cursor__ball--small"></div>
    </>
  )
}