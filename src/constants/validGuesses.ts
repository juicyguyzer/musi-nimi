import { CONFIG } from './config'

export const VALIDGUESSES = ['a', 'akesi', 'ala', 'alasa', 'ale, ali', 'anpa', 'ante', 'anu', 'apeja', 'awen', 'e', 'en', 'epiku', 'esun', 'ete', 'ewe', 'ijo', 'ike', 'ilo', 'insa', 'isipin', 'jaki', 'jami', 'jan', 'jasima', 'jelo', 'jo', 'kala', 'kalama', 'kama', 'kamalawala', 'kan', 'kapesi', 'kasi', 'ken', 'kepeken', 'kese', 'kijetesantakalu', 'kiki', 'kili', 'kin', 'kipisi', 'kiwen', 'ko', 'kokosila', 'kon', 'ku', 'kule', 'kulijo', 'kulupu', 'kuntu', 'kute', 'la', 'lanpan', 'lape', 'laso', 'lawa', 'leko', 'len', 'lete', 'li', 'lili', 'linja', 'linluwi', 'lipu', 'loje', 'lon', 'luka', 'lukin', 'lupa', 'ma', 'majuna', 'mama', 'mani', 'meli', 'melome', 'meso', 'mi', 'mije', 'mijomi', 'misa', 'misikeke', 'moku', 'moli', 'monsi', 'monsuta', 'mu', 'mulapisu', 'mun', 'musi', 'mute', 'n', 'namako', 'nanpa', 'nasa', 'nasin', 'natu', 'nena', 'ni', 'nimi', 'noka', 'o', 'oke', 'oko', 'olin', 'omekapo', 'ona', 'open', 'pakala', 'pake', 'pali', 'palisa', 'pan', 'pana', 'pata', 'pi', 'pilin', 'pimeja', 'pini', 'pipi', 'po', 'poka', 'poki', 'pona', 'powe', 'pu', 'puwa', 'sama', 'san', 'seli', 'selo', 'seme', 'sewi', 'sijelo', 'sike', 'sin', 'sina', 'sinpin', 'sitelen', 'soko', 'sona', 'soto', 'soweli', 'su', 'suli', 'suno', 'supa', 'sutopatikuna', 'suwi', 'taki', 'tan', 'taso', 'tawa', 'te', 'teje', 'telo', 'tenpo', 'to', 'toki', 'tomo', 'tonsi', 'tu', 'tuli', 'unpa', 'unu', 'usawi', 'uta', 'utala', 'wa', 'waleja', 'walo', 'wan', 'waso', 'wawa', 'weka', 'wekama', 'wile', 'yupekosi']

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
