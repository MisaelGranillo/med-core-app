import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { TopicProgress, QuizAttempt } from '../types'

interface ProgressState {
  progress: Record<string, TopicProgress>
  markSectionRead: (topicId: string, sectionId: string) => void
  addQuizAttempt: (topicId: string, attempt: QuizAttempt) => void
  getSectionsRead: (topicId: string) => string[]
  getQuizAttempts: (topicId: string) => QuizAttempt[]
  getBestScore: (topicId: string) => number | null
  getTotalSectionsRead: () => number
  resetTopic: (topicId: string) => void
}

const defaultProgress = (topicId: string): TopicProgress => ({
  topicId,
  sectionsRead: [],
  quizAttempts: [],
  lastVisited: new Date().toISOString(),
})

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      progress: {},

      markSectionRead: (topicId, sectionId) => {
        set((state) => {
          const tp = state.progress[topicId] ?? defaultProgress(topicId)
          if (tp.sectionsRead.includes(sectionId)) return state
          return {
            progress: {
              ...state.progress,
              [topicId]: {
                ...tp,
                sectionsRead: [...tp.sectionsRead, sectionId],
                lastVisited: new Date().toISOString(),
              },
            },
          }
        })
      },

      addQuizAttempt: (topicId, attempt) => {
        set((state) => {
          const tp = state.progress[topicId] ?? defaultProgress(topicId)
          return {
            progress: {
              ...state.progress,
              [topicId]: {
                ...tp,
                quizAttempts: [...tp.quizAttempts, attempt],
                lastVisited: new Date().toISOString(),
              },
            },
          }
        })
      },

      getSectionsRead: (topicId) => {
        return get().progress[topicId]?.sectionsRead ?? []
      },

      getQuizAttempts: (topicId) => {
        return get().progress[topicId]?.quizAttempts ?? []
      },

      getBestScore: (topicId) => {
        const attempts = get().progress[topicId]?.quizAttempts ?? []
        if (attempts.length === 0) return null
        return Math.max(...attempts.map((a) => Math.round((a.score / a.total) * 100)))
      },

      getTotalSectionsRead: () => {
        return Object.values(get().progress).reduce(
          (acc, tp) => acc + tp.sectionsRead.length,
          0
        )
      },

      resetTopic: (topicId) => {
        set((state) => ({
          progress: {
            ...state.progress,
            [topicId]: defaultProgress(topicId),
          },
        }))
      },
    }),
    { name: 'anatomy-study-progress' }
  )
)
