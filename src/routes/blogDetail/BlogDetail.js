import React from 'react';
import Link from '../../components/Link'
import moment from 'moment'

class About extends React.Component {

  render () {
    const news = this.props.data.news.value
    const recentNews = this.props.data.recentNews.value
    const categoryPosts = this.props.data.categoryPosts.value

    return (<div id='main'>
      <div className='ui container' style={{paddingTop: 50}}>
        <h3 className="ui header">Tin tức</h3>
        <div className="ui section divider"/>
        <h3 className="ui header" style={{paddingBottom: 50}}>
          <div className="row" id="article">
            <div className="ui grid container">
              <div className="eleven wide column">
                <h1 className="ui sub header"
                  style={{fontSize: 20, fontWeight: 'bold', color: '#666'}}
                >
                  {news.title}
                </h1>
                <span
                  style={{fontSize: 12, color: '#999'}}
                >Đăng bởi Admin vào {moment(news.created_at).format("DD/MM/YYYY")}</span>

                <div className="ui divider" />

                <div
                  dangerouslySetInnerHTML={{__html: news.body}}
                />

              </div>
              <div className="four wide right floated column">
                <h4 className="ui header">
                  Danh mục
                </h4>
                <div className="ui list">
                  {categoryPosts.map((el, index) => {
                    return (
                    <Link to={'/danhmuc/' + el.slug} className="item" key={index}>{el.title}</Link>
                    )
                  })}
                </div>
                <div className="ui hidden divider" />
                <h4 className="ui header">
                  Bài viết mới
                </h4>
                <div className="ui list">
                  {recentNews.map((el, index) => {
                    return (
                      <Link key={index} className="item"
                        to={'/blog/' + el.slug}
                      >
                        {el.title}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

        </h3>
      </div>
    </div>)
  }

}

export default About
