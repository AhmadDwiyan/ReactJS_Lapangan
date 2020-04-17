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

class TableUser extends React.Component {
constructor(props){
  super(props)
  this.state = {
    listUser : [],
  }
}

componentDidMount(){
const url = "http://localhost/lapangan/public/member";
axios.get(url).then(res => {
  this.setState({listUser:res.data.member});
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
    <PageBase title="Table User"
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
              <TableHeaderColumn style={styles.columns.name}>Username</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.price}>Role</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.category}>Email</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.edit}>Edit</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.listUser.map(item =>
              <TableRow key={item.id}>
                <TableRowColumn style={styles.columns.id}>{item.id}</TableRowColumn>
                <TableRowColumn style={styles.columns.name}>{item.username}</TableRowColumn>
                <TableRowColumn style={styles.columns.price}>{item.role}</TableRowColumn>
                <TableRowColumn style={styles.columns.category}>{item.email}</TableRowColumn>
                <TableRowColumn style={styles.columns.edit}>
                  <Link className="button" to="/form">
                    <FloatingActionButton zDepth={0}
                                          mini={true}
                                          backgroundColor={grey200}
                                          iconStyle={styles.editButton}>
                      <ContentCreate  />
                    </FloatingActionButton>
                    <FloatingActionButton zDepth={0}
                                          mini={true}
                                          backgroundColor={grey200}
                                          iconStyle={styles.removeButton}>
                      <DeleteIcon/>
                    </FloatingActionButton>
                  </Link>
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

export default TableUser;
