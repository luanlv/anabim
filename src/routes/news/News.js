import React from 'react';
import Link from '../../components/Link'

import {Title, BreadCrumb} from './components'

class News extends React.Component {

  render() {
    const allNews = this.props.data.allNews.value
    const recentNews = this.props.data.recentNews.value
    const categories = this.props.data.categories.value
    return (
      <div>
        <Title title={'Tin tức'} description={''} />
        <BreadCrumb title={'Tin tức tổng hợp'} />

        <div className="container">
          <div className="row margin-bottom-30">
            <div className="col-xs-12 col-md-9">
              {allNews.map(news => {
                return (
                  <article className="clearfix hentry">
                    <Link to={'/news/' + news.slug}>
                      <img alt="placeholder" className="img-responsive" src={news.coverUrl} />
                    </Link>
                    <div className="meta-data">
                      <time className="meta-data__date" >{news.created_at}</time>
                      <span className="meta-data__separator">/</span>
                      <span className="meta-data__author">Gửi bởi Admin</span>
                      <span className="meta-data__separator">/</span>
                      <span className="meta-data__categories">
                      {news.category.map((category, index) => {
                        return <span>
                          <Link rel="category tag" to={'/category/' + category}>{findCategoryBySlug(category, categories).title}</Link>
                            {(news.category.length !== (index + 1) ) ? ' • ' : ''}
                        </span>
                      })}
                      </span>
                    </div>
                    <h2 className="hentry__title"><Link to={"/news/" + news.slug}>{news.title}</Link></h2>
                    <div className="hentry__content">
                      <p>
                        {news.description}
                      </p>
                      <p>
                        <Link className="more-link" to={"/news/" + news.slug}>
                          <span className="btn btn-default btn--post">Xem thêm</span>
                        </Link>
                      </p>
                    </div>
                  </article>
                )
              })}

              {/*<nav className="navigation pagination">*/}
                {/*<h2 className="screen-reader-text">Posts navigation</h2>*/}
                {/*<div className="nav-links">*/}
                  {/*<span className="page-numbers current">1</span>*/}
                  {/*<a href="news.html" className="page-numbers">2</a>*/}
                  {/*<a href="news.html" className="page-numbers">3</a>*/}
                  {/*<a href="news.html" className="next page-numbers"><i className="fa fa-caret-right" /></a>*/}
                {/*</div>*/}
              {/*</nav>*/}
            </div>{/* /.col */}
            <div className="col-xs-12 col-md-3">
              <div className="sidebar">
                <div className="widget_search">
                  <form action="#" className="search-form" method="get">
                    <label>
                      <span className="screen-reader-text">Search for:</span>
                      <input type="search" name="s"  placeholder="Search ..." className="search-field" />
                    </label>
                    <button className="search-submit" type="submit"><i className="fa fa-lg fa-search" /></button>
                  </form>
                </div>

                <div className="widget_recent_entries">
                  <h4 className="sidebar__headings">Bài viết gần đây</h4> <ul>
                  {recentNews.map(news => {
                    return (
                      <li>
                        <Link to={'/news/' + news.slug}>{news.title}</Link>
                      </li>
                    )
                  })}

                </ul>
                </div>

                <div className="widget_categories">
                  <h4 className="sidebar__headings">Danh mục</h4>
                  <ul>
                    {categories.map(el => {
                      return (
                        <li>
                          <Link to={"/category/" + el.slug}>{el.title}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>{/* /.col */}
          </div>{/* /.row */}
        </div>

      </div>
    );
  }
}

function findCategoryBySlug(slug, categories) {
  for (let i = 0; i < categories.length; i++){
    if(categories[i].slug === slug) {
      return categories[i]
    }
  }
  return {slug:'/', title: 'Không tồn tại'}
}

export default News
