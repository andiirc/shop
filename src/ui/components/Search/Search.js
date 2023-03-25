import React, { Fragment }  from 'react';
import { Searchbar } from 'react-native-paper';

export default function Search(props) {
  const { placeholder } = props;
  return (
    <Fragment>
      <Searchbar placeholder={placeholder} />
    </Fragment>
  )
}