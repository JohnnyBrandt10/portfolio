'use client'
import { useEffect } from 'react'

export default function ScrollInit() {
  useEffect(() => {
    // Scroll Up
    const scrollUp = document.getElementById('scroll-up')
    const onScroll = () => {
      if (!scrollUp) return
      if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll')
      } else {
        scrollUp.classList.remove('show-scroll')
      }

      // Active link
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(section => {
        const el = section as HTMLElement
        const top = el.offsetTop - 100
        const height = el.offsetHeight
        const id = el.getAttribute('id')
        const link = document.querySelector(`.nav__list a[href*="${id}"]`)
        if (link) {
          if (window.scrollY > top && window.scrollY <= top + height) {
            link.classList.add('active-link')
          } else {
            link.classList.remove('active-link')
          }
        }
      })
    }

    window.addEventListener('scroll', onScroll)

    // ScrollReveal
    const loadSR = async () => {
      const ScrollReveal = (await import('scrollreveal')).default
      const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 800,
        delay: 100,
        easing: 'cubic-bezier(0.17, 0.55, 0.55, 1)',
        reset: false,
      })

      sr.reveal('.home__subtitle', { delay: 100 })
      sr.reveal('.home__title', { delay: 200 })
      sr.reveal('.home__description', { delay: 300 })
      sr.reveal('.home__buttons', { delay: 400 })
      sr.reveal('.home__socials', { delay: 500 })
      sr.reveal('.home__img-wrapper', { origin: 'right', delay: 300 })
      sr.reveal('.about__data', { origin: 'left', delay: 100 })
      sr.reveal('.about__img-wrapper', { origin: 'right', delay: 200 })
      sr.reveal('.work__card', { interval: 150 })
      sr.reveal('.services__item', { interval: 100 })
      sr.reveal('.skills__group', { interval: 150 })
      sr.reveal('.experience__item', { interval: 150, origin: 'left' })
      sr.reveal('.contact__form', { origin: 'left', delay: 100 })
      sr.reveal('.contact__info', { origin: 'right', delay: 200 })
    }

    loadSR()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}