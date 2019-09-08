import Torus from "@toruslabs/torus-embed"
import Web3 from "web3"
import { SKALE_ENDPOINT } from './skale'

export const connectTorus = async () => {
  const torus = new Torus();
  await torus.init();
  torus.setProvider({
    networkUrl: SKALE_ENDPOINT,
    chainid: 1337,
    networkName: 'skale eth boston'
  })
  await torus.login(); // await torus.ethereum.enable()
  window.web3Skale = new Web3(torus.provider);
}

export const simpleTorusInit = async () => {
  const torus = new Torus();
  await torus.init();
  torus.setProvider({
    networkUrl: 'ropsten'
  })
  window.torus = torus;
}

export const connectTorusProvider = async () => {
  const torus = new Torus();
  await torus.init();
  await torus.login(); // await torus.ethereum.enable()
  torus.setProvider('ropsten')
  window.torus = torus;
  window.torusProvider = new Web3(torus.provider);
}

export const getPublicAddress = email => window.torus.getPublicAddress(email)
