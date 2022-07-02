import { CONFIG } from './config'

export const VALIDGUESSES = ['anpa','ante','awen','esun','insa','jaki','jami','jelo','kala','kama','kasi','kese','kiki','kili','kule','kute','lape','laso','lawa','leko','lete','lili','lipu','loje','luka','lupa','mama','mani','meli','meso','mije','misa','moku','moli','musi','mute','nasa','natu','nena','nimi','noka','olin','open','pake','pali','pana','pata','pini','pipi','poka','poki','pona','powe','puwa','sama','seli','selo','seme','sewi','sike','sina','soko','sona','soto','suli','suno','supa','suwi','taki','taso','tawa','teje','telo','toki','tomo','tuli','unpa','walo','waso','wawa','weka','wile']

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
