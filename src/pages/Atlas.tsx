import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { atlasTopics, type AtlasTopic } from '../data/atlas-topics'
import { useAtlasStore } from '../store/atlasStore'

type Category = 'todos' | 'anatomia' | 'bioquimica' | 'celular' | 'fisiologia'

export function Atlas() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('todos')
  const getMastery = useAtlasStore((s) => s.getMastery)

  const categories: { id: Category; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'anatomia', label: 'Anatomía' },
    { id: 'bioquimica', label: 'Bioquímica' },
    { id: 'celular', label: 'Celular' },
    { id: 'fisiologia', label: 'Fisiología' },
  ]

  const filtered =
    selectedCategory === 'todos'
      ? atlasTopics
      : atlasTopics.filter((t) => t.category === selectedCategory)

  const sorted = [...filtered].sort((a, b) => {
    const masteryA = getMastery(a.id)
    const masteryB = getMastery(b.id)

    if (masteryA !== masteryB) {
      const order = [1, 2, 0, 3]
      return order.indexOf(masteryA) - order.indexOf(masteryB)
    }

    return 0
  })

  return (
    <div className="flex-1 flex flex-col">
      <div className="bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-surface/15 backdrop-blur-sm flex items-center justify-center text-2xl">
              🗺️
            </div>
            <div>
              <h1 className="text-3xl font-bold">Atlas Visual</h1>
              <p className="text-white/80 text-sm">
                Estudio mediante imágenes anotadas · {atlasTopics.length} temas
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all flex-shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {sorted.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-zinc-500">No hay temas en esta categoría</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
            {sorted.map((topic) => (
              <AtlasCard key={topic.id} topic={topic} mastery={getMastery(topic.id)} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function AtlasCard({
  topic,
  mastery,
}: {
  topic: AtlasTopic
  mastery: 0 | 1 | 2 | 3
}) {
  const masteryLabels = {
    0: 'Sin iniciar',
    1: 'Visto',
    2: 'En progreso',
    3: 'Dominado',
  }

  const masteryColors = {
    0: 'bg-zinc-200 text-zinc-700',
    1: 'bg-blue-200 text-blue-700',
    2: 'bg-amber-200 dark:bg-amber-500/25 text-amber-700 dark:text-amber-300',
    3: 'bg-green-200 dark:bg-green-500/25 text-green-700 dark:text-green-300',
  }

  const categoryEmojis: Record<string, string> = {
    anatomia: '🫀',
    bioquimica: '⚗️',
    celular: '🔬',
    fisiologia: '💊',
  }

  return (
    <Link
      to={`/atlas/${topic.id}`}
      className="group card card-interactive p-0 overflow-hidden hover:shadow-lg transition-all flex flex-col h-full"
    >
      <div className="relative h-32 bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center overflow-hidden">
        <img
          src={topic.imagePath}
          alt={topic.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        <span className="absolute inset-0 flex items-center justify-center text-5xl opacity-0 group-hover:opacity-100 transition-opacity">
          {topic.emoji}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start gap-2 mb-2">
          <span className="text-xl">{topic.emoji}</span>
          <div className="flex-1">
            <h3 className="font-bold text-sm leading-snug text-zinc-900">
              {topic.title}
            </h3>
          </div>
        </div>

        <p className="text-xs text-zinc-500 mb-3 flex-1">{topic.subtitle}</p>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-zinc-500">
              {topic.questions.length} preguntas
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-zinc-200 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all ${
                  mastery === 0
                    ? 'w-0'
                    : mastery === 1
                      ? 'w-1/3 bg-primary'
                      : mastery === 2
                        ? 'w-2/3 bg-amber-500'
                        : 'w-full bg-green-500'
                }`}
              />
            </div>
          </div>

          <span
            className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${masteryColors[mastery]}`}
          >
            {masteryLabels[mastery]}
          </span>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault()
          }}
          className="mt-3 w-full flex items-center justify-center gap-1 text-xs font-semibold text-primary-ink hover:text-primary-700 transition-colors"
        >
          Ver tema <ArrowRight weight="bold" className="w-3 h-3" />
        </button>
      </div>
    </Link>
  )
}
