import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from '../components/PageBase';
import axios from 'axios';
class AddMember extends React.Component {
constructor(){
  super();
  this.state= {
    username:'',
    email:'',
    password:'',
    role:'',
    first_name:'',
    last_name:'',
    gender:'',
    alamat:'',
    date_birth:'',
    no_hp:''

  }
}

bind (e) {
this.setState({[e.target.name]:e.target.value})

}

save  ()  {
let url = "http://localhost/lapangan/public/member/save";
const listItem = JSON.parse(localStorage.getItem("users"));
const form = new FormData();
form.append("id",listItem.id);
form.append('action','insert');
form.append('role',this.state.role);
form.append("username",this.state.username);
form.append("password",this.state.password);
form.append("email",this.state.email);
form.append("first_name",this.state.first_name);
form.append("last_name",this.state.last_name);
form.append("gender",this.state.gender);
form.append("date_birth",this.state.date_birth);
form.append("no_hp",this.state.no_hp);
form.append("alamat",this.state.alamat);
axios.post(url,form).then(res=>{
alert(res.data.message)
})



}

componentDidMount(){

}

  render(){
    const styles = {
      toggleDiv: {
        maxWidth: 300,
        marginTop: 40,
        marginBottom: 5
      },
      toggleLabel: {
        color: grey400,
        fontWeight: 100
      },
      buttons: {
        marginTop: 30,
        float: 'right'
      },
      saveButton: {
        marginLeft: 5
      }
    };
    const listItem = JSON.parse(localStorage.getItem("users"));
    return (
      <PageBase title="Tambah Member"
                navigation="Add Member">
        <form>

          <TextField
            hintText="Username"
            name="username"
            type="text"
            floatingLabelText="Name"
            fullWidth={true}
            onChange={(e) => this.bind(e)}
            value={this.state.username}
          />
          <TextField
            hintText="Password"
            name="password"
            type="text"
            floatingLabelText="Name"
            fullWidth={true}
            onChange={(e) => this.bind(e)}
            value={this.state.password}
          />
          <TextField
            hintText="Email"
            floatingLabelText="Email"
            name="email"
            onChange={(e) => this.bind(e)}
            fullWidth={true}
            value={this.state.email}
          />
          <TextField
            hintText="First Name"
            floatingLabelText="First Name"
            name="first_name"
            onChange={(e) => this.bind(e)}
            fullWidth={true}
            value={this.state.first_name}
          />
          <TextField
            hintText="Last Name"
            floatingLabelText="Last Name"
            name="last_name"
            onChange={(e) => this.bind(e)}
            fullWidth={true}
            value={this.state.last_name}
          />
          <TextField
            hintText="Gender"
            floatingLabelText="Gender"
            name="gender"
            onChange={(e) => this.bind(e)}
            fullWidth={true}
            value={this.state.gender}
          />
          <TextField
            hintText="Alamat"
            floatingLabelText="Alamat"
            name="alamat"
            onChange={(e) => this.bind(e)}
            fullWidth={true}
            value={this.state.alamat}
          />
          <TextField
            hintText="No Hp"
            floatingLabelText="No Hp"
            name="no_hp"
            onChange={(e) => this.bind(e)}
            fullWidth={true}
          />
          <DatePicker
            hintText="Birth"
            name="date_birth"
            onChange={(e) => this.bind(e)}
            floatingLabelText="Birth"
            fullWidth={true}
            />

          <div style={styles.toggleDiv}>
            <Toggle
              label="Disabled"
              labelStyle={styles.toggleLabel}
            />
          </div>

          <Divider/>

          <div style={styles.buttons}>
            <Link to="/">
              <RaisedButton label="Cancel"/>
            </Link>

          </div>
        </form>
<br/>
                    <RaisedButton label="Save"
                                  style={styles.saveButton}
                                  onClick={this.save.bind(this)}
                                  primary={true}/>
      </PageBase>
    );
  }
}

export default AddMember;
