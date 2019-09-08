import React, { useEffect, useState } from 'react'
import 'typeface-roboto'
import Torus from "@toruslabs/torus-embed"
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import EmbarkJS from 'Embark/EmbarkJS';
import Web3 from 'web3'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import useStyles from './styles/dapp'
import { connectSquareLink } from './utils/squareLink'
import { skaleFileUpload } from './utils/skale'
import { connectTorus, connectTorusProvider, simpleTorusInit } from './utils/torus'
import { getTxCountByEmail } from './utils/lookups'
import SendTransaction from './components/SendTx'

function checkConnected(setIsConnected) {
  console.log('called')
  web3.eth.net.isListening()
    .then((res) => {
      console.log({res})
      simpleTorusInit()
      setIsConnected(true)
    })
    .catch((err) => {
      console.log({err})
      setIsConnected(false)
    })
}

function App(props) {
  const [hasTransactions, setTransactions] = useState(null)
  const [loading, setLoading ] = useState(false)
  const [isConnected, setConnected] = useState(false)
  const [contact, setContact] = useState({ email: '', address: '' })

  useEffect(() => {
   checkConnected(setConnected)
  }, [])

  const logthis = async () => {
    const { fileStorage, web3Skale } = this
    console.log({fileStorage, web3Skale})

  }

  const inputHandler = e => {
    const email = e.target.value
    getTxCountByEmail(email, setTransactions, setContact, setLoading)
  }

  const classes = useStyles()
  const { fullWidth } = classes
  const noTransactions = hasTransactions === false
  const transactionsExist = hasTransactions === true
  return (
    <div className={classes.root}>
      {loading && <LinearProgress className={classes.loading} />}
      <Typography className={classnames(classes.title, classes.marginTop)}>Help onboard a friend to Ethereum</Typography>
      <TextField
        id="outlined-bare"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        placeholder="Enter their email to see if they have an active account"
        type="email"
        onChange={inputHandler}
      />
      {noTransactions && <Typography className={classes.helpText}>No account associated with this email. Send them some ETH to help them get started!</Typography>}
      {transactionsExist && <Typography className={classes.helpText}>Your friend already has some transactions</Typography>}
      {noTransactions && <SendTransaction contact={contact} setLoading={setLoading} />}
      {!isConnected && <Button className={classes.button} variant="contained" onClick={connectTorusProvider}>
        Connect with Torus
       </Button>}
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));
