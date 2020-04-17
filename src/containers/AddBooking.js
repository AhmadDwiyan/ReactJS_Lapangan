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
class AddBooking extends React.Component {
constructor(){
  super();
  this.state= {
    nama:'',
    harga:'',
    waktu_mulai:"",
    waktu_selesai:"",
    waktu_book:"",
    image:null,
    lapangan:[]
  }
}

bind (e) {
this.setState({[e.target.name]:e.target.value})
}

bindImage(e){
  this.setState({image:e.target.files[0]})
}


save  ()  {
let url = "http://localhost/lapangan/public/sewa/save";
const listItem = JSON.parse(localStorage.getItem("users"));
const form = new FormData();
form.append('action','insert');
form.append("id_lapangan",this.state.lapangan.id);
form.append('id_user',listItem.id);
form.append("tgl_book",this.state.waktu_book);
form.append("wkt_mulai",this.state.waktu_mulai);
form.append("wkt_selesai",this.state.waktu_selesai);
axios.post(url,form).then(res=>{
alert(res.data.message)
})



}

componentDidMount(){
const lapangan = JSON.parse(localStorage.getItem("item_book"));
this.setState({lapangan:lapangan})
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
      <PageBase title="Booking Lapangan"
                navigation="Add Lapangan">
        <form>


          <TextField
            hintText="Nama Lapangan"
            name="nama_lapangan"
            type="text"
            floatingLabelText="Nama Lapangan"
            fullWidth={true}
            value={this.state.lapangan.nama}
          />
          <TextField
            hintText="Harga Lapangan"
            name="Harga"
            type="text"
            floatingLabelText="Harga Lapangan"
            fullWidth={true}
            value={this.state.lapangan.harga}
          />
                    <TextField
                      name="waktu_mulai"
                      type="time"
                      floatingLabelText="Waktu Mulai"
                      fullWidth={true}
                      onChange={(e) => this.bind(e)}
                      value={this.state.waktu_mulai}
                    />
                    <TextField
                      name="waktu_selesai"
                      type="time"
                      floatingLabelText="selesai"
                      fullWidth={true}
                      onChange={(e) => this.bind(e)}
                      value={this.state.waktu_selesai}
                    />
                    <TextField
                      name="waktu_book"
                      type="date"
                      floatingLabelText="Tanggal Book"
                      fullWidth={true}
                      onChange={(e) => this.bind(e)}
                      value={this.state.waktu_book}
                    />

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

export default AddBooking;
