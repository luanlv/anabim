import React from 'react'
import { Layout, Menu, Breadcrumb, Icon, LocaleProvider, Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
import Link from '../../../components/Link'

import enUS from 'antd/lib/locale-provider/en_US';
import { StickyContainer, Sticky } from 'react-sticky';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name,
      collapsed: false,
      mode: 'inline',
    };
  }
  onCollapse = (collapsed) => {
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
        <LocaleProvider locale={enUS}>
         <Layout>
          <Sider
            collapsible
            breakpoint="lg"
            collapsedWidth="0"
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            width="170"
          >
            <div className="logo" />
            <div className="admin-topSlide">
             <span>ADMIN</span>
            </div>
            <Menu theme="dark"
                  mode={this.state.mode}
                  selectedKeys={[this.props.name]}
                  defaultOpenKeys={['taikhoan']}
            >
              <Menu.Item key="Dashboard">
                <Link to="/admin/">
                  <span>
                    <Icon type="layout" />
                    <span className="nav-text">Dashboard</span>
                  </span>
                </Link>
              </Menu.Item>

              <Menu.Item key="Seo">
                <Link to="/admin/seo/">
                  <span>
                    <Icon type="layout" />
                    <span className="nav-text">SEO</span>
                  </span>
                </Link>
              </Menu.Item>

              <SubMenu
                key="danhmuc"
                title={<span><Icon type="idcard" /><span className="nav-text">Danh mục</span></span>}
              >
                <Menu.Item key="tintuc1">
                  <Link to="/admin/category?v=list" >Danh sách danh mục</Link>
                </Menu.Item>
                <Menu.Item key="tintuc2">
                  <Link to="/admin/category?v=add" >Thêm mới danh mục</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="baiviet"
                title={<span><Icon type="idcard" /><span className="nav-text">Bài viết</span></span>}
              >
                <Menu.Item key="tintuc1">
                  <Link to="/admin/news?v=list" >Danh sách bài viết</Link>
                </Menu.Item>
                <Menu.Item key="tintuc2">
                  <Link to="/admin/news?v=add" >Thêm mới bài viết</Link>
                </Menu.Item>
              </SubMenu>


              <SubMenu
                key="danhmucphanmem"
                title={<span><Icon type="idcard" /><span className="nav-text">Danh mục PM</span></span>}
              >
                <Menu.Item key="danhmucphanmem1">
                  <Link to="/admin/danhmuc?v=list" >Danh mục phần mềm</Link>
                </Menu.Item>
                <Menu.Item key="danhmucphanmem2">
                  <Link to="/admin/danhmuc?v=add" >Thêm mới danh mục</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="phanmem"
                title={<span><Icon type="idcard" /><span className="nav-text">Phần mềm</span></span>}
              >
                <Menu.Item key="phanmem1">
                  <Link to="/admin/phanmem?v=list" >Danh sách phần mềm</Link>
                </Menu.Item>
                <Menu.Item key="phanmem2">
                  <Link to="/admin/phanmem?v=add" >Thêm mới phần mềm</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="khoahoc"
                title={<span><Icon type="idcard" /><span className="nav-text">Khóa học</span></span>}
              >
                <Menu.Item key="khoahoc1">
                  <Link to="/admin/khoahoc?v=list" >Danh sách khóa học</Link>
                </Menu.Item>
                <Menu.Item key="khoahoc2">
                  <Link to="/admin/khoahoc?v=add" >Thêm mới khóa học</Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="video">
                <Link to="/admin/video">
                  <span>
                    <Icon type="tool" />
                    <span className="nav-text">video</span>
                  </span>
                </Link>
              </Menu.Item>

              <SubMenu
                key="taikhoan"
                title={<span><Icon type="idcard" /><span className="nav-text">Tài khoản</span></span>}
              >
                <Menu.Item key="taikhoan0">
                  <Link to="/admin/membership" >Thành viên Membership</Link>
                </Menu.Item>
                <Menu.Item key="taikhoan1">
                  <Link to="/admin/donhang" >Đơn hàng chờ duyệt</Link>
                </Menu.Item>
                <Menu.Item key="taikhoan2">
                  <Link to="/admin/daduyet" >Đơn hàng đã duyệt</Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="price">
                <Link to="/admin/price">
                  <span>
                    <Icon type="tool" />
                    <span className="nav-text">Bảng giá</span>
                  </span>
                </Link>
              </Menu.Item>

              <Menu.Item key="coupon">
                <Link to="/admin/coupon">
                  <span>
                    <Icon type="tool" />
                    <span className="nav-text">Mã giảm giá</span>
                  </span>
                </Link>
              </Menu.Item>

              <Menu.Item key="activecode">
                <Link to="/admin/activecode">
                  <span>
                    <Icon type="tool" />
                    <span className="nav-text">Mã kích hoạt</span>
                  </span>
                </Link>
              </Menu.Item>

              <Menu.Item key="trangchu">
                <Link to="/admin/trangchu">
                  <span>
                    <Icon type="tool" />
                    <span className="nav-text">Khóa học trang chủ</span>
                  </span>
                </Link>
              </Menu.Item>
  
              <Menu.Item key="menuchinh">
                <Link to="/admin/menuchinh">
                  <span>
                    <Icon type="appstore-o" />
                    <span className="nav-text">Menu Chính</span>
                  </span>
                </Link>
              </Menu.Item>
              
              <Menu.Item key="thongtinchung">
                <Link to="/admin/thongtinchung">
                  <span>
                    <Icon type="appstore-o" />
                    <span className="nav-text">Thông tin website</span>
                  </span>
                </Link>
              </Menu.Item>

              <Menu.Item key="Library">
                <Link to="/admin/library">
                  <span>
                    <Icon type="appstore-o" />
                    <span className="nav-text">Thư viện ảnh</span>
                  </span>
                </Link>
              </Menu.Item>

              <Menu.Item key="Setting">
                <Link to="/admin/setting">
                  <span>
                    <Icon type="tool" />
                    <span className="nav-text">Cài đặt</span>
                  </span>
                </Link>
              </Menu.Item>

              <Menu.Item key="Logout">
                <a href="/auth/logout">
                  <span>
                    <Icon type="tool" />
                    <span className="nav-text">Đăng xuất</span>
                  </span>
                </a>
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout>
            <Header style={{ height: 47, background: 'white', padding: 0}} >
            </Header>
            <Content style={{ margin: '0 5px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
                <Breadcrumb.Item>{ this.state.name }</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{background: '#fff', minHeight: 500 }}>
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center'}}>
              Admin Page ©201 Created by Lưu Văn Luận
            </Footer>
          </Layout>
        </Layout>
        </LocaleProvider>
    );
  }
}



export default App
