import React from 'react';
import HeaderApp from '../components/Header';
import {
  Button,
  Text,
  Container,
  Content,
  Thumbnail,
  Form, Item, Input, Label, Icon, CheckBox,ListItem,Body
} from "native-base";
import {View, StyleSheet } from 'react-native';

const uri = "http://www.calle7.hn/wp-content/uploads/2018/01/07GAL-GADOTweb-superJumbo.jpg";

const styles = StyleSheet.create({
  profileCard: {
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent:'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  pcTitle: {
    fontWeight:'bold',
    lineHeight:28,
    fontSize: 20,
    marginTop:15
  },
  pcSubTitle: {
    color:'#888',
    lineHeight:20
  },
  formCard: {
    paddingBottom:150
  },
  fcChangePass: {
    textAlign:'center',
    marginTop:16,
    marginBottom:16,
    textDecorationLine: 'underline'
  },
  fcChangePassSucc: {
    textAlign:'center',
    marginTop:16,
    marginBottom:16,
    color:'#0B0'
  },
  fcIcon:{
    'color':'#18F'
  }
});

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'Patricia Martínez Delgado',
      company:'iphonedroid',
      email:'pmartinez@designer.com',
      password:'patricia123456',

      notifications:false,
      hiddenPassword:true,
      disabledButton:true
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(item,text){
    this.setState({
      [item]:text,
      disabledButton:false
    });
  }
  render() {
    const {
      name,
      company,
      email,
      password,
      notifications,hiddenPassword,disabledButton} = this.state;

    const successPassChange = this.props.navigation.getParam('successPassChange',false);

    return  <Container>
    <HeaderApp title="Perfil" navigation={this.props.navigation}/>
    <Content padder>
      <View style={styles.profileCard}>
        <Thumbnail large source={{uri: uri}}/>
        <Text style={styles.pcTitle}>Patricia Martínez Delgado</Text>
        <Text style={styles.pcSubTitle}>@patridesign</Text>
      </View>
      <View style={styles.formCard}>
        <Form>
          <Item floatingLabel>
            <Label>Nombre</Label>
            <Input value={name} onChangeText={text =>{this.onChange('name',text)}}/>
            <Icon name='pencil' type="FontAwesome" style={styles.fcIcon}/>
          </Item>
          <Item floatingLabel>
            <Label>Empresa</Label>
            <Input value={company} onChangeText={text =>{this.onChange('company',text)}}/>
            <Icon name='pencil' type="FontAwesome" style={styles.fcIcon}/>
          </Item>
          <Item floatingLabel>
            <Label>Correo electrónico</Label>
            <Input value={email} onChangeText={text =>{this.onChange('email',text)}}/>
            <Icon name='pencil' type="FontAwesome" style={styles.fcIcon}/>
          </Item>
          <Item floatingLabel last>
            <Label>Contraseña</Label>
            <Input value={password} secureTextEntry={hiddenPassword}
               onChangeText={text =>{this.onChange('password',text)}}
            />
            <Icon name={hiddenPassword ? 'eye-slash':'eye'} type="FontAwesome" style={styles.fcIcon}
              onPress={()=>{this.setState({hiddenPassword:!hiddenPassword})}}
            />
          </Item>
          {successPassChange ? <Text
            style={styles.fcChangePassSucc}
          >¡La contraseña se ha cambiado exitosamente!</Text> : <Text
            style={styles.fcChangePass}
            onPress={() => this.props.navigation.navigate("ChangePassword")}>Cambiar contraseña</Text>}

          <ListItem
            style={{
              'justifyContent':'center',
              'marginBottom':20
            }}
            onPress={()=>{this.setState({notifications:!notifications,disabledButton:false})}}
          >          
            <CheckBox checked={notifications}/>
            <Body style={{
              'flex':0
            }}>
              <Text>Recibir Notificaciones Push</Text>
            </Body>            
          </ListItem>
        </Form>
        <Button
          full
          rounded
          primary
          disabled={disabledButton}
          style={{ marginTop: 10 }}
          onPress={() => this.props.navigation.navigate("ProfileScreen")}
        >
          <Text>Guardar Cambios</Text>
        </Button>
      </View>      
    </Content>
  </Container>;
  }
};