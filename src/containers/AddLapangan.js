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
    nama:'',
    harga:'',
    image:null
  }
}

bind (e) {
this.setState({[e.target.name]:e.target.value})
}

bindImage(e){
  this.setState({image:e.target.files[0]})
}


save  ()  {
let url = "http://localhost/lapangan/public/lapangan/save";
const listItem = JSON.parse(localStorage.getItem("users"));
const form = new FormData();
form.append("id",listItem.id);
form.append('action','insert');
form.append('nama',this.state.nama);
form.append("harga",this.state.harga);
form.append("gambar",this.state.image);
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
      <PageBase title="Tambah Lapangan"
                navigation="Add Lapangan">
        <form>

          <TextField
            hintText="Nama Lapangan"
            name="nama"
            type="text"
            floatingLabelText="Nama Lapangan"
            fullWidth={true}
            onChange={(e) => this.bind(e)}
            value={this.state.nama}
          />
          <TextField
            hintText="Harga Lapangan"
            name="harga"
            type="number"
            floatingLabelText="Harga Lapangan"
            fullWidth={true}
            onChange={(e) => this.bind(e)}
            value={this.state.harga}
          />
          <label> Gambar Lapangan </label><br/>
<input type="file" name="image" onChange={(e) => this.bindImage(e)} />


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
