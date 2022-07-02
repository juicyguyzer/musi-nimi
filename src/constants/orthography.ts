import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'p',
  't',
  'k',
  's',
  'm',
  'a',
  'e',
  'i',
  'o',
  'u',
  'n',
  'l',
  'j',
  'w'
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
