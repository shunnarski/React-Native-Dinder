import React, {Component} from 'react';
import {Button, Item, Input, Icon, Text, Form} from 'native-base';
import {observer} from 'mobx-react/native';
import {observable} from 'mobx';

export default class Login extends Component {
  @observable email='';
  @observable password='';

  constructor(props){
    super(props);
  }

  signIn() {
    const {auth} = this.props.stores;
    const {navigate} = this.props.navigation;
    auth.signIn({
      email: this.email,
      password: this.password
    }).then(() => {
      navigate('Match')
    })
  }

  render() {
    const {auth} = this.props.stores;

    return (
      <Form>
        <Item style={{marginBottom: 10, borderColor: '#000'}}  rounded>
          <Icon style={{color: "#000"}} name='person-outline'/>
            <Input style={{color: '#000'}} placeholder='Please Enter Email' placeholderTextColor="#000" onChangeText={(email) => this.email = email}/>
        </Item>
        <Item style={{marginBottom: 10, borderColor: '#000'}} rounded>
          <Icon style={{color: "#000"}} name='lock-open'/>
            <Input style={{color: '#000'}} placeholder='Please Enter Password' placeholderTextColor="#000" secureTextEntry={true} onChangeText={(pass) => this.password = pass}/>
        </Item>
        <Button rounded block style={{marginBottom: 0}} onPress={this.signIn.bind(this)}>
          <Text>Login</Text>
        </Button>
      </Form>

    );
  }
}
