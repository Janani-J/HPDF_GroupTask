import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import './App.css';

const style = {
    height: '325px',
    width: '350px',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft:'500px',
    marginRight:'0px',
    spacing:'20px',
    display:'flex',
    borderColor:'black'
  };

  const textbox = {
    backgroundColor: 'white',
    display: 'flex',
    borderRadius: '2px',
    border:'0.5px solid #949494',
    borderShadow:'none',
    marginLeft: '25px',
    paddingTop: '0px',
    height: '35px',
    width: '290px',
    marginBottom:'15px'
  }
  const buttonstyle={
    color: '#f0c14b',
    backgroundColor: '#f0c14b',
    borderRadius: '2px',
    border:'0.5px solid #a88734',
    borderShadow:'none',
    marginLeft: '0px',
    paddingTop: '5px',
    height: '35px',
    width: '290px',
    display:'inline-block',
    verticalAlign:'middle'
  }

  const imgstyle = {
    height: '100px',
    width: '200px',
    border: '2px solid #fff',
    color: '#fff',
    backgroundSize:'400px 670px',
    marginLeft:'575px',
    display:'inline-block',
    verticalAlign: 'top',
    paddingBottom:'0px'
}
   

  const LoginPage = () => (
    <div >
      <img src="amazon_logo.jpg" style={imgstyle}/>
      <Paper style={style} zDepth={2}rounded='true'>
      <div style={{align:'left'}}>
      <p style={{fontWeight: '400',fontSize:'28px',color: '#111',lineHeight: '1.2',paddingLeft:'25px',marginBottom:'0px',fontFamily:'helvetica'}}>Login</p>
      <p style={{fontSize:'13px',color: '#111',fontWeight:'bold',fontFamily:'helvetica',paddingLeft:'25px',paddingTop:'0px',marginBottom:'0px'}}>Email or mobile phone number</p>
      <br/>
      <div style={textbox}>
        <TextField  underlineShow={false}/>
        </div>
        <p style={{fontSize:'13px',color: '#111',fontWeight:'bold',fontFamily:'helvetica',paddingLeft:'25px',paddingTop:'0px',marginBottom:'0px'}}>Password</p>
      <br/>
      <div style={textbox} >
        <TextField  underlineShow={false} type="password"/>
        </div>
        <div style={{display:'inline'}}>
        <RaisedButton label="Login" labelStyle={{lineHeight: '25px',fontFamily: 'helvetica',fontSize: '13px',textTransform:'none',fontWeight:'bold',verticalAlign:'middle'}} buttonStyle={buttonstyle}disableTouchRipple='false'
        style={{color: 'transparent',backgroundColor: '#f0c14b',borderRadius: '2px',borderShadow:'none',height: '35px',width: '290px',verticalAlign:'middle',display:'inline-block',marginLeft:'25px'}}
        />
        </div>
        <div class="help">
        <p>Need Help?</p>
      </div>
      </div>
      </Paper>
      <div>
      <p style={{align:'center',display:'inline-block',paddingLeft:'620px', color:'#767676',fontSize:'12px',fontWeight:'400',fontFamily:'helvetica',position:'relative'}}>New to Amazon</p>
      </div>
      <RaisedButton label="Create your Amazon account" labelStyle={{lineHeight: '25px',fontFamily: 'helvetica',fontSize: '13px',textTransform:'none',fontWeight:'bold',verticalAlign:'middle'}} 
      buttonStyle={{  color: '#f0c14b',backgroundColor: '#e7e9ec',borderRadius: '2px',border:'0.5px solid #8d9096',borderShadow:'none',marginLeft: '0px',paddingTop: '5px',height: '35px',width: '350px',display:'inline-block',verticalAlign:'middle'}}disableTouchRipple='false'
        style={{color: 'transparent',backgroundColor: '#e7e9ec',borderRadius: '2px',borderShadow:'none',height: '35px',width: '350px',verticalAlign:'middle',display:'inline-block',marginLeft:'500px', marginBottom:'20px'}}
        />
        <hr width="50%" size="0.1px" noshade/>
      </div>
  );
  
  export default LoginPage;