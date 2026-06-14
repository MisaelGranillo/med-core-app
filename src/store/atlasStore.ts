import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface AtlasTopicProgress {
  topicId: string
  lastReviewed: string
  timesReviewed: number
  quizAttempts: {
    date: string
    score: number
    total: number
  }[]
  masteryLevel: 0 | 1 | 2 | 3
}

interface AtlasStore {
  progress: Record<string, AtlasTopicProgress>
  recordReview: (topicId: string) => void
  recordQuizAttempt: (topicId: string, score: number, total: number) => void
  getMastery: (topicId: string) => 0 | 1 | 2 | 3
}

export const useAtlasStore = create<AtlasStore>()(
  persist(
    (set, get) => ({
      progress: {},

      recordReview: (topicId) => set((state) => {
        const prev = state.progress[topicId]
        return {
          progress: {
            ...state.progress,
            [topicId]: {
              topicId,
              lastReviewed: new Date().toISOString(),
              timesReviewed: (prev?.timesReviewed ?? 0) + 1,
              quizAttempts: prev?.quizAttempts ?? [],
              masteryLevel: Math.max(prev?.masteryLevel ?? 0, 1) as 0 | 1 | 2 | 3,
            },
          },
        }
      }),

      recordQuizAttempt: (topicId, score, total) => set((state) => {
        const prev = state.progress[topicId]
        const pct = score / total
        const newMastery: 0 | 1 | 2 | 3 = pct >= 0.8 ? 3 : pct >= 0.5 ? 2 : 1
        return {
          progress: {
            ...state.progress,
            [topicId]: {
              topicId,
              lastReviewed: new Date().toISOString(),
              timesReviewed: prev?.timesReviewed ?? 0,
              quizAttempts: [
                ...(prev?.quizAttempts ?? []),
                { date: new Date().toISOString(), score, total },
              ],
              masteryLevel: Math.max(
                prev?.masteryLevel ?? 0,
                newMastery
              ) as 0 | 1 | 2 | 3,
            },
          },
        }
      }),

      getMastery: (topicId) => {
        return get().progress[topicId]?.masteryLevel ?? 0
      },
    }),
    { name: 'atlas-progress' }
  )
)
