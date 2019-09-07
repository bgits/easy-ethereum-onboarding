import React, { useEffect, useState } from 'react';
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

function App(props) {
  const [hasTransactions, setTransactions] = useState(null)

  useEffect(() => {
    simpleTorusInit()
  }, [])

  const logthis = async () => {
    const { fileStorage, web3Skale } = this
    console.log({fileStorage, web3Skale})

  }

  const inputHandler = e => {
    const email = e.target.value
    getTxCountByEmail(email, setTransactions)
  }

  const classes = useStyles()
  const { fullWidth } = classes
  return (
    <div className={classes.root}>
      Testing
      <input className={fullWidth} onChange={(e) => skaleFileUpload(e)} type="file" id="files" / >
      <Button className={fullWidth} variant="contained" onClick={connectSquareLink}>
        Connect with Squarelink
      </Button>
      <Button className={fullWidth} variant="contained" onClick={connectTorusProvider}>
        Connect with Torus
      </Button>
      <TextField
        id="outlined-bare"
        className={classes.fullWidth}
        margin="normal"
        variant="outlined"
        placeholder="Enter email"
        type="email"
        onChange={inputHandler}
      />
      {hasTransactions === false && <Typography>No account Associated with Account</Typography>}
      <Button className={fullWidth} variant="contained" onClick={logthis}>Log this</Button>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));
