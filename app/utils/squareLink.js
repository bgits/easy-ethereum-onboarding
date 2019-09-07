import Squarelink from 'squarelink'
import Web3 from 'web3'
import { SKALE_ENDPOINT } from './skale'


export const connectSquareLink = () => {
  const sqlk = new Squarelink('57b8cc3df733ca393a8e', {
    url: SKALE_ENDPOINT,
    chainId: 1337,
    skipCache: false
  })

  sqlk.getProvider(provider => {
    window.web3Skale = new Web3(provider)
    console.log('set provider')
  })
}
