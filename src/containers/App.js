import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import Data from '../data';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false,
      menus:[],
    };
  }

componentDidMount(){
  const item = JSON.parse(localStorage.getItem("users"))
  if(item.role == "admin"){
    let menus = [
      { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
      { text: 'Data Lapangan', icon: <Web/>, link: '/lapangan' },
      { text: 'Data Member', icon: <GridOn/>, link: '/user' },
      { text: 'Tambah Member', icon: <GridOn/>, link: '/add_member' },
      { text: 'Tambah lapangan', icon: <GridOn/>, link: '/add_lapangan' },
      { text: 'Data Sewa', icon: <Web/>, link: '/booking' },
      { text: 'Logout', icon: <Web/>, link: '/logout' },


    ]
    this.setState({menus:menus});
  } else {
    let menus = [
      { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
      { text: 'Profil', icon: <Web/>, link: '/profil' },
      { text: 'Sewa Lapangan', icon: <Web/>, link: '/booking_lapangan' },
      { text: 'Logout', icon: <Web/>, link: '/logout' },

    ]
    this.setState({menus:menus});
    console.log(this.state.menus)
  }
}
  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {

    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;
    console.log(this.state.menus)

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <Header styles={styles.header}
                  handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

            <LeftDrawer navDrawerOpen={navDrawerOpen}
                        menus={this.state.menus}
                        username="User Admin"/>

            <div style={styles.container}>
              {this.props.children}
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

export default withWidth()(App);
