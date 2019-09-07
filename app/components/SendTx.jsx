import React, { Fragment, useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import useStyles from '../styles/dapp'

function SendTransaction() {
  const classes = useStyles()
  return (
    <Fragment>
      <TextField
        id="outlined-bare"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        placeholder="Enter ETH amount to send"
      />

      <Button className={classes.button}>Send ETH</Button>
    </Fragment>
  )
}

export default SendTransaction
