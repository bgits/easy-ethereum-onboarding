import React, { useEffect, useState } from 'react'
import 'typeface-roboto'
import Torus from "@toruslabs/torus-embed"
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import EmbarkJS from 'Embark/EmbarkJS';
import Web3 from 'web3'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import useStyles from './styles/dapp'
import { connectSquareLink } from './utils/squareLink'
import { skaleFileUpload } from './utils/skale'
import { connectTorus, connectTorusProvider, simpleTorusInit } from './utils/torus'
import { getTxCountByEmail } from './utils/lookups'
import SendTransaction from './components/SendTx'

function App(props) {
  const [hasTransactions, setTransactions] = useState(null)
  const [contact, setContact] = useState({ email: '', address: '' })

  useEffect(() => {
    simpleTorusInit()
  }, [])

  const logthis = async () => {
    const { fileStorage, web3Skale } = this
    console.log({fileStorage, web3Skale})

  }

  const inputHandler = e => {
    const email = e.target.value
    getTxCountByEmail(email, setTransactions, setContact)
  }

  const classes = useStyles()
  const { fullWidth } = classes
  const noTransactions = hasTransactions === false
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Help onboard a friend to Ethereum</Typography>
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
      {noTransactions && <SendTransaction contact={contact} />}
      <Button className={classes.button} variant="contained" onClick={connectTorusProvider}>
        Connect with Torus
      </Button>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));
