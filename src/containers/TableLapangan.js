import React from 'react';
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500,red500,blue300} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import DeleteIcon from 'material-ui/svg-icons/content/remove-circle';
import Data from '../data';

import axios from 'axios';

class TableLapangan extends React.Component {
constructor(props){
  super(props)
  this.state = {
    dataLapangan : [],
  }
}

componentDidMount(){
const url = "http://localhost/lapangan/public/lapangan";
axios.get(url).then(res => {
  this.setState({dataLapangan:res.data.lapangan});
  })
}

drop = (id) => {
const url = "http://localhost/lapangan/public/lapangan/drop/"+id;
axios.delete(url).then(res=>{
  alert(res.data.message)
  this.componentDidMount()
})
}

render() {
  const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    },
    editButton: {
      fill: blue300
    },
    removeButton:{
      fill:red500
    },
    columns: {
      id: {
        width: '10%'
      },
      name: {
        width: '40%'
      },
      price: {
        width: '20%'
      },
      category: {
        width: '20%'
      },
      edit: {
        width: '10%'
      }
    }
  };

  return (
    <PageBase title="Data Lapangan"
              navigation="Application / Table Page">

      <div>
        <Link to="/form" >
          <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn style={styles.columns.id}>ID</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.name}>Nama</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.price}>Harga</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.edit}>Edit</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.dataLapangan.map(item =>
              <TableRow key={item.id}>
                <TableRowColumn style={styles.columns.id}>{item.id}</TableRowColumn>
                <TableRowColumn style={styles.columns.name}>{item.nama}</TableRowColumn>
                <TableRowColumn style={styles.columns.price}>{item.harga}</TableRowColumn>
                <TableRowColumn style={styles.columns.edit}>
                    <FloatingActionButton zDepth={0}
                                          mini={true}
                                          backgroundColor={grey200}

                                          iconStyle={styles.editButton}>
                      <ContentCreate  />
                    </FloatingActionButton>
                    <FloatingActionButton zDepth={0}
                                          mini={true}
                                          backgroundColor={grey200}
                                          onClick={() => this.drop(item.id)}
                                          iconStyle={styles.removeButton}>
                      <DeleteIcon/>
                    </FloatingActionButton>
                </TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </PageBase>
  );
}
}

export default TableLapangan;
