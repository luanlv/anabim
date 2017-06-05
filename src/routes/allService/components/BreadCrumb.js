import React from 'react'
import Link from '../../../components/Link'

class BreadCrumb extends React.Component {
  render () {
    return (
      <div className="breadcrumbs">
        <div className="container">
          <span>
            <Link className="home" to="/" title="Go to CargoPress." rel="v:url">Trang chủ</Link>
          </span>
          <span>
            <span>{this.props.title}</span>
          </span>
        </div>
      </div>
    )
  }
}

export default BreadCrumb
