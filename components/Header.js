import React from 'react';
import {
  Button,
  Body,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";

export default class HeaderApp extends React.Component {
  render() {

    const {title,goToScreen,navigation} = this.props;


    return <Header>
        <Left style={{
          'flex':1
        }}>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body style={{
            'flex':1
          }}>
          <Title>{title}</Title>
        </Body>
        {goToScreen ? <Right style={{
          'flex':1
        }}>        
          <Button transparent
            onPress={() => {navigation.navigate(goToScreen)}}
          >
          <Icon name='arrow-back' />
        </Button>
      </Right>:null}
    </Header>
  }
};