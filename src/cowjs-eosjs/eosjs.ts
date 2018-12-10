import { Api, ApiInterfaces, RpcError, RpcInterfaces, Serialize } from 'eosjs'
import JsonRpc from './eosjs-jsonrpc'

const Eos = { Api, ApiInterfaces, JsonRpc, RpcError, RpcInterfaces, Serialize }
const w = (window as any)
w.Eos = Eos

export { Api, ApiInterfaces, JsonRpc, RpcError, RpcInterfaces, Serialize }
