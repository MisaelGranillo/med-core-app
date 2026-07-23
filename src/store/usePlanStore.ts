import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { activePlanId, getPlan, plans } from '../data/plans'

interface PlanState {
  selectedPlanId: string
  setPlan: (id: string) => void
}

// El plan seleccionado se persiste para que la elección sobreviva a la
// navegación. Por defecto es el plan activo (UAD). Si el id guardado ya no
// existe (plan eliminado), cae al plan activo.
export const usePlanStore = create<PlanState>()(
  persist(
    (set) => ({
      selectedPlanId: activePlanId,
      setPlan: (id) => set({ selectedPlanId: id }),
    }),
    {
      name: 'medcore-plan',
      merge: (persisted, current) => {
        const p = persisted as Partial<PlanState> | undefined
        const id = p?.selectedPlanId && getPlan(p.selectedPlanId)
          ? p.selectedPlanId
          : activePlanId
        return { ...current, selectedPlanId: id }
      },
    },
  ),
)

export { plans, getPlan }
