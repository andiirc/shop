import React, { Fragment } from 'react'
import { StatusBar, SafeAreaView } from 'react-native'

export default function StatusBarCustom(props) {
  const { backgroundColor, ...rest }= props;

  return (
    <Fragment>
        <StatusBar backgroundColor={backgroundColor} {...rest} />
        <SafeAreaView style={{ flex: 0, backgroundColor: backgroundColor}}/>
    </Fragment>
  )
}
