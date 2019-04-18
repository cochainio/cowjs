import { Api, ApiInterfaces, RpcError, RpcInterfaces, Serialize } from 'eosjs'
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig'
import JsonRpc from './eosjs-jsonrpc'
export { convertLegacyPublicKey } from 'eosjs/dist/eosjs-numeric'

const Eos = { Api, ApiInterfaces, JsonRpc, RpcError, RpcInterfaces, Serialize, JsSignatureProvider }
const w = (window as any)
w.Eos = Eos

export { Api, ApiInterfaces, JsonRpc, RpcError, RpcInterfaces, Serialize, JsSignatureProvider }
