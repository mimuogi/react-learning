import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts.js'

// Avoid naming that refers to the implementation like useFetchFact
export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // Get the fact at refresh
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}