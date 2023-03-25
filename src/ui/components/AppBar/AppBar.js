import React, { Fragment } from 'react'
import { View } from 'react-native';
import { Appbar, Badge } from 'react-native-paper'; 

export default function AppBarCustom(props) {
  const { title, icon, isElevated, viewFn } = props;

  const ShowBadge = ({icon}) => {
    let content;
    if (icon === 'cart-outline'){
      content = <Badge style={{ position: 'absolute', top: -20  }}>3</Badge>
    }
    return <View>{content}</View>
  }

  return (
    <Fragment>
      <Appbar.Header elevated={isElevated}>
        <Appbar.Content title={title} />
        <Appbar.Action icon={icon} onPress={viewFn} />
        <ShowBadge icon={icon}/>
      </Appbar.Header>
    </Fragment>
  )
} 