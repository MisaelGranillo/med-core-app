import type { Topic } from '../types'
import { anatomiaUadTopics } from './anatomia-uad-topics'
import { inglesUadTopics } from './ingles-uad-topics'
import { geneticaTopics } from './genetica-topics'
import { bioquimicaTopics } from './bioquimica-topics'
import { histologiaTopics } from './histologia-topics'
import { embriologiaTopics } from './embriologia-topics'
import { humanisticaTopics } from './humanistica-topics'

export const topics: Topic[] = [...anatomiaUadTopics, ...inglesUadTopics, ...geneticaTopics, ...histologiaTopics, ...bioquimicaTopics, ...embriologiaTopics, ...humanisticaTopics]
