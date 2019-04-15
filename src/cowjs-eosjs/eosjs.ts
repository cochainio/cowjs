import { Api, ApiInterfaces, RpcError, RpcInterfaces, Serialize, JsSignatureProvider } from 'eosjs'
import JsonRpc from './eosjs-jsonrpc'

const Eos = { Api, ApiInterfaces, JsonRpc, RpcError, RpcInterfaces, Serialize, JsSignatureProvider }
const w = (window as any)
w.Eos = Eos

export { Api, ApiInterfaces, JsonRpc, RpcError, RpcInterfaces, Serialize, JsSignatureProvider }
