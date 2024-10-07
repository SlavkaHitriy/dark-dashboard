import { useEffect } from 'react'

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      const isBurger = event.target.classList.contains('burger') || event.target.closest('.burger')
      if (!ref.current || ref.current.contains(event.target) || isBurger) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
