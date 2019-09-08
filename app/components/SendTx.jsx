import React, { Fragment, useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import classnames from 'classnames'
import { Formik } from 'formik'
import useStyles from '../styles/dapp'

const subject = 'I just sent you some crypto currency'
const body = amount => `I just sent you ${amount} ETH to help you get started with Ethereum. You can access your Ethereum wallet just using your gmail account. Go to http://tor.us to start using it!`
function SendTransaction({ contact }) {
  const classes = useStyles()
  return (
    <Formik
      initialValues={{ amount: '' }}
      onSubmit={async (values, { setSubmitting }) => {
        const amount = web3.utils.toWei(values.amount)
        const from = await web3.eth.getCoinbase()
        const toSend = web3.eth.sendTransaction({
          from,
          to: contact.address,
          value: amount
        }).then(res => {
          console.log({res})
          window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body(values.amount)}`;
        }).catch(console.log)
        console.log({amount, contact})
      }}
    >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (
      <form className={classnames(classes.root, classes.fullWidth)} onSubmit={handleSubmit}>
        <TextField
          id="outlined-bare"
          name="amount"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          placeholder="Enter ETH amount to send"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.amount}
        />
        <Button type="submit" className={classes.button} disabled={isSubmitting}>{isSubmitting ? `Sending your friend ${values.amount }ETH`: 'Send ETH'}</Button>
      </form>
    )}
    </Formik>
  )
}

export default SendTransaction
