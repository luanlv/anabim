/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import UniversalRouter from 'universal-router'
import history from '../../../history'
import Link from '../../../components/Link'
import { Button, DatePicker, Table, Icon, Popconfirm, message} from 'antd';
import axios from 'axios'

class KhoaHoc extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      page: 1,
      data: []
    }
    this.getList()
  }
  render() {
    return (
        <div>
          <Table columns={columns} rowKey={record => record.slug} dataSource={this.state.data} />
        </div>
    );
  }
  async getList() {
    let course = 'allCourse{name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, relatedCourse, categories, created_at}';
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{'+ course +'}',
      }),
      credentials: 'include',
    })
    const {data} = await resp.json();
    this.setState(prev => {
      return {
        ...prev,
        loading: false,
        data: data.allCourse
      }
    })
  }
}

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'name',
  key: 'name',
  render: text => <span>{text.length > 53 ? (text.slice(0, 50) + '...') : (text)}</span>,
}, {
  title: 'Cấp độ',
  dataIndex: 'level',
  key: 'level',
  render: lelvel => <span>{lelvel}</span>,
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <Link to={"/admin/khoahoc?v=edit&slug=" + record.slug }>
        <Button type="danger">
        Sửa
        </Button>
      </Link>
      <Popconfirm placement="right"
        onConfirm={() => {
          let that = this;
          axios.post('/api/khoahoc/delete', {slug: record.slug})
            .then(res => {
              message.success('Xoá thành công')
              location.reload();
            })
            .catch(err => {
              message.error('Có lỗi')
            })
        }}
        okText="Chắc chắn xóa" cancelText="Hủy">
      <Button
        type="primary"
      >Xóa</Button>
    </Popconfirm>
    </span>
  ),
}];

export default KhoaHoc
