import React  from 'react';
import { Button, DatePicker, Switch, Row, Col, message, Collapse, Input, InputNumber, Transfer, Select, Popconfirm} from 'antd';
const Option = Select.Option;
import axios from 'axios'
import moment from 'moment'
import Editor from '../Components/CustomEditor'

// import CodeMirror from '../Components/CodeMirror'
const Panel = Collapse.Panel;
var CodeMirror = require('react-codemirror')
if(process.env.BROWSER) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

const dateFormat = 'YYYY/MM/DD';


import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) =>
  <li>{value}</li>
);

const SortableList = SortableContainer(({items, indexSelect, handleDelete}) => {
  return (
    <ul className="sortIndex">
      {items.map((value, index) => (
        <SortableItem
          style={{paddingBottom: 15, cursor: 'pointer'}}
          key={`item-${index}`} index={index}
          value={
          <span className={(indexSelect === index) ? "selected" : ""}
          >
            <span>{value.category.name}</span>
          </span>
        } />
      ))}
    </ul>
  );
});




class TrangChu extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: {
        value: []
      },
      selectedIndex: 0,
      newCategory: false,
      option: []
    }
    this.init()
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(prev => {
      return {
        ...prev,
        data: {
          ...prev.data,
          value: arrayMove(this.state.data.value, oldIndex, newIndex),
        },
        selectedIndex: newIndex
      }
    });
  };

  async init () {
    let indexCourse = 'oneIndexCourse{_id, value created_at}';
    let allCourse = 'allCourse{_id, name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, relatedCourse, categories, created_at}';
    let allCategory = 'allCategory{_id, name, coverUrl, slug, description, created_at}';
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{' + indexCourse + allCourse + allCategory + '}',
      }),
      credentials: 'include',
    })
    const {data} = await resp.json();

    this.setState(prev => {
      return {
        ...prev,
        data: data.oneIndexCourse,
        allCourse: data.allCourse,
        allCategory: data.allCategory
      }
    })

  }


  updateSetting(data){
    axios.post('/api/information/update', data)
      .then(res => {
        message.success('Cập nhập thành công!')
      })
      .catch(err => {
        message.error('Cập nhập thất bại')
      })
  }

  handleDelete () {
    let that = this
    let newValue = []
    this.state.data.value.forEach((el, index) => {
      if(index !== that.state.selectedIndex) {
        newValue.push(el)
      }
    })
    this.setState(prev => {
      return {
        ...prev,
        data: {
          ...prev.data,
          value: newValue,

        },
        selectedIndex: 0
      }
    })
  }

  handleChange (keys) {
    let allCourses = this.state.allCourse
    let courses = []
    keys.map(id => {
      courses.push(allCourses[findIndexCourse(id, allCourses)])
    })
    let data = this.state.data;
    data.value[this.state.selectedIndex].courses = courses
    this.setState(prev => {
      return {
        ...prev,
        data: data
      }
    })
  }

  render() {
    return (
        <div id="index">
          <Row
            style={{height: 50}}
          >
            <Button style={{margin: 10, float: 'right'}} type="primary"
                onClick={() => {
                  axios.post('/api/indexcourse/update', this.state.data)
                    .then(res => {
                      message.success('Cập nhập thành công!')
                    })
                    .catch(err => {
                      message.error('Cập nhập thất bại')
                    })
                }}
            >Cập nhập</Button>
          </Row>
          <Row className="padding-5">
            <Col sm={6} >
              <SortableList items={this.state.data.value} indexSelect={this.state.selectedIndex} handleDelete={(id) => this.handleDelete(id)} onSortEnd={this.onSortEnd} />
              {this.state.newCategory && <Row>
                <Select
                  style={{width: '100%'}}
                  onChange={(value) => {
                    let categoryIndex = findIndexCourse(parseInt(value), this.state.allCategory)
                    let data = this.state.data
                    data.value.push({
                      category: this.state.allCategory[categoryIndex],
                      courses: []
                    })
                    this.setState(prev => {
                      return {
                        ...prev,
                        data: data,
                        newCategory: false,
                        option: []
                      }
                    })
                  }}
                >
                  {this.state.option}
                </Select>
              </Row>}
              <Button type="dashed"
                onClick={() => {
                  let options = this.state.option
                  this.state.allCategory.map((el, index) => {
                    if(findIndexCategory(el._id, this.state.data.value) < 0) {
                      options.push(<Option key={el._id}>{el.name}</Option>);
                    }
                  })
                  this.setState(prev => {
                    return {
                      ...prev,
                      newCategory: true,
                      option: options
                    }
                  })
                }}
              >Thêm mới</Button>
            </Col>
            <Col sm={18} >
              {this.state.allCourse &&
              <App
                initData={this.state.allCourse}
                initSelected={this.state.data.value[this.state.selectedIndex].courses}
                index={this.state.selectedIndex}
                handleChange={(keys) => this.handleChange(keys)}
              />}
              <Popconfirm placement="right"
                          onConfirm={() => this.handleDelete()}
                          okText="Chắc chắn xóa" cancelText="Hủy">
                <Button type="danger" size="small">Xóa</Button>
              </Popconfirm>
            </Col>
          </Row>
        </div>
    )
  }


}


class App extends React.Component {
  constructor(props) {
    super(props)
    let initKeys = []
    props.initSelected.map((el, index) => {
      initKeys.push(el._id)
    })
    this.state = {
      data: props.initData || [],
      targetKeys: initKeys,
      index: props.index
    }
  }
  componentDidMount() {

  }


  componentWillReceiveProps(nextProps) {
    let initKeys = []
    nextProps.initSelected.map((el, index) => {
      initKeys.push(el._id)
    })
    this.setState({
      targetKeys: initKeys
    })
  }

  handleChange = (targetKeys, direction, moveKeys) => {
    this.setState({ targetKeys });
    this.props.handleChange(targetKeys)
  }

  renderItem = (item) => {
    const customLabel = (
      <span className="custom-item">
        {item.name}
      </span>
    );

    return {
      label: customLabel,  // for displayed item
      value: item._id,   // for title and filter matching
    };
  }

  render() {
    return (
      <Transfer
        rowKey={record => record._id}
        dataSource={this.state.data}
        listStyle={{
          width: 300,
          height: 300,
        }}
        targetKeys={this.state.targetKeys}
        onChange={this.handleChange}
        render={this.renderItem}
      />
    );
  }
}


export default TrangChu


function findIndexCourse(id, courses) {
  for(let i = 0; i < courses.length; i++) {
    if(courses[i]._id === id){
      return i
    }
  }
  return -1;
}

function findIndexCategory(id, list) {
  for(let i = 0; i < list.length; i++) {
    if(list[i].category._id === id){
      return i
    }
  }
  return -1;
}
