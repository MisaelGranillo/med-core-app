import type { Question } from '../types'
import { anatomiaUadQuestions } from './anatomia-uad-quizzes'
import { inglesUadQuestions } from './ingles-uad-quizzes'
import { inglesAdelantoQuestions } from './ingles-adelanto-quizzes'
import { inglesProyectoS2Questions } from './ingles-proyecto-s2-quizzes'
import { geneticaQuestions } from './genetica-quizzes'
import { histologiaQuestions } from './histologia-quizzes'
import { bioquimicaQuestions } from './bioquimica-quizzes'
import { embriologiaQuestions } from './embriologia-quizzes'
import { humanisticaQuestions } from './humanistica-quizzes'
import { examenesPeriodo1 } from './examenes-1-quizzes'

export const questions: Question[] = [...anatomiaUadQuestions, ...inglesUadQuestions, ...inglesAdelantoQuestions, ...inglesProyectoS2Questions, ...geneticaQuestions, ...histologiaQuestions, ...bioquimicaQuestions, ...embriologiaQuestions, ...humanisticaQuestions, ...examenesPeriodo1]
