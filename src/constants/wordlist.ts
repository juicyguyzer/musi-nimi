import { CONFIG } from './config'

export const WORDS = ['anpa','ante','awen','esun','insa','jaki','jami','jelo','kala','kama','kasi','kese','kiki','kili','kule','kute','lape','laso','lawa','leko','lete','lili','lipu','loje','luka','lupa','mama','mani','meli','meso','mije','misa','moku','moli','musi','mute','nasa','natu','nena','nimi','noka','olin','open','pake','pali','pana','pata','pini','pipi','poka','poki','pona','powe','puwa','sama','seli','selo','seme','sewi','sike','sina','soko','sona','soto','suli','suno','supa','suwi','taki','taso','tawa','teje','telo','toki','tomo','tuli','unpa','walo','waso','wawa','weka','wile']

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
