import { useEffect, useRef, MutableRefObject } from 'react'
import { gsap } from 'gsap'

interface GSAPOptions {
  scope?: string | Element
  dependencies?: any[]
  revertOnUpdate?: boolean
}

/**
 * Custom hook for GSAP animations with SSR compatibility
 * Handles hydration issues and provides clean animation setup
 */
export function useGSAP(
  callback: (context: { gsap: typeof gsap }) => gsap.core.Timeline | void,
  options: GSAPOptions = {}
): MutableRefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement | null>(null)
  const contextRef = useRef<gsap.Context | null>(null)
  const { scope, dependencies = [], revertOnUpdate = true } = options

  useEffect(() => {
    // Only run on client side after hydration
    if (typeof window === 'undefined') return

    const element = scope || ref.current
    if (!element) return

    // Create GSAP context for cleanup
    contextRef.current = gsap.context(() => {
      callback({ gsap })
    }, element)

    return () => {
      contextRef.current?.kill()
    }
  }, [callback, scope, ...dependencies])

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      contextRef.current?.kill()
    }
  }, [])

  return ref
}

/**
 * Hook specifically for ScrollTrigger animations
 */
export function useGSAPScrollTrigger(
  callback: (context: { gsap: typeof gsap; ScrollTrigger: any }) => void,
  options: GSAPOptions = {}
): MutableRefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Dynamically import ScrollTrigger to avoid SSR issues
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger)

      const element = options.scope || ref.current
      if (!element) return

      const ctx = gsap.context(() => {
        callback({ gsap, ScrollTrigger })
      }, element)

      return () => ctx.kill()
    })
  }, [callback, options.scope, ...(options.dependencies || [])])

  return ref
}