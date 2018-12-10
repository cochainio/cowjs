import Cowjs from './cowjs-core'
import CowjsEos from './cowjs-eosjs'

const w = (window as any)
w.Cowjs = Cowjs
w.CowjsEos = CowjsEos

const d = (document as any)
d.dispatchEvent(new Event('cowjsready'))

export default Cowjs
export { CowjsEos }
