import React, { Fragment, useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import classnames from 'classnames'
import { Formik } from 'formik'
import useStyles from '../styles/dapp'

function SendTransaction({ contact }) {
  const classes = useStyles()
  return (
    <Formik
      initialValues={{ amount: '' }}
      onSubmit={(values, { setSubmitting }) => {
        const amount = web3.utils.toWei(values.amount)
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

      <Button type="submit" className={classes.button}>Send ETH</Button>
      </form>
    )}
    </Formik>
  )
}

export default SendTransaction
