import React from 'react';
import HeaderApp from '../components/Header';
import {
  Button,
  Text,
  Container,
  Content,
  Form, Item, Input, Label, Icon
} from "native-base";
import {View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formCard: {
    paddingBottom:150
  },
  fcIcon:{
    'color':'#18F'
  }
});

export default class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password1:'',
      password2:'',
      password3:'',
      hiddenPassword1:false,
      hiddenPassword2:true,
      hiddenPassword3:true,
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(item,text){
    this.setState({
      [item]:text
    });
  }
  render() {

    const {
      password1,
      password2,
      password3,
      hiddenPassword1,
      hiddenPassword2,
      hiddenPassword3
    } = this.state;

    const enabledBtn = (password1 !== '' && password2 !== '' && password3 !== '') && (password2 === password3);

    return  <Container>
    <HeaderApp title="Cambio de contraseña" goToScreen={'Home'} navigation={this.props.navigation}/>
    <Content padder>      
      <View style={styles.formCard}>
        <Form>          
          <Item floatingLabel style={{ marginBottom: 60 }}>
            <Label>Contraseña actual</Label>
            <Input value={password1} secureTextEntry={hiddenPassword1}
               onChangeText={text =>{this.onChange('password1',text)}}
            />
            <Icon name={hiddenPassword1 ? 'eye-slash':'eye'} type="FontAwesome" style={styles.fcIcon}
              onPress={()=>{this.setState({hiddenPassword1:!hiddenPassword1})}}
            />
          </Item>
          <Item floatingLabel>
            <Label>Contraseña nueva</Label>
            <Input value={password2} secureTextEntry={hiddenPassword2}
               onChangeText={text =>{this.onChange('password2',text)}}
            />
            <Icon name={hiddenPassword2 ? 'eye-slash':'eye'} type="FontAwesome" style={styles.fcIcon}
              onPress={()=>{this.setState({hiddenPassword2:!hiddenPassword2})}}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Contraseña nueva</Label>
            <Input value={password3} secureTextEntry={hiddenPassword3}
               onChangeText={text =>{this.onChange('password3',text)}}
            />
            <Icon name={hiddenPassword3 ? 'eye-slash':'eye'} type="FontAwesome" style={styles.fcIcon}
              onPress={()=>{this.setState({hiddenPassword3:!hiddenPassword3})}}
            />
          </Item>
        </Form>
        <Button
          bordered
          full
          rounded
          primary
          disabled={!enabledBtn}
          style={{ marginTop: 90 }}
          onPress={() => this.props.navigation.navigate("Home",{'successPassChange':true})}
        >
          <Text>Guardar Cambios</Text>
        </Button>
      </View>      
    </Content>
  </Container>;
  }
};