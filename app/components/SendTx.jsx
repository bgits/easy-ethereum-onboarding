import React, { Fragment, useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
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
    </Fragment>
  )
}

export default SendTransaction
