import { getPublicAddress } from './torus'
const etherscan = require('etherscan-api').init('','ropsten', '3000')


function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
}

function getTransactionCount(address) {
  return web3.eth.getTransactionCount(address)
}

export async function getTxCountByEmail(email, setState, setContact, setLoading) {
  if (validateEmail(email)) {
    setLoading(true)
    const address = await getPublicAddress(email);
    const balance = await etherscan.account.balance(address)
    setContact({ email, address })
    let hasTransactions = true;
    try {
      const txlist = await etherscan.account.txlist(address)
    } catch(e) {
      hasTransactions = false
    }
    setState(hasTransactions);
    setLoading(false);
  }
}
