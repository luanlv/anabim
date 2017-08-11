import React from 'react'
import PropTypes from 'prop-types';
import Link from '../Link'

class Footer extends React.Component {
  
  static contextTypes = { store: PropTypes.object.isRequired };
  
  
  constructor (props) {
    super(props)
    this.state = {
    }
    
  }
  
  render() {
    const footer = this.context.store.getState().data.information.value.footer
    return (
      <div id='footer'>
        <div className='ui inverted segment noBor noSha noRa noMa footer-top'>
          <div className='ui container'>
            <div className='ui stackable grid'>
              <div className=' twelve wide column'>
                <div className='ui three column grid'>
                  <div className='column '>
                    <h3>ANABIM EDUCATION</h3>
                    {footer.cot1.map((el,index) => {
                      return <Link key={index} to={el.url}>{el.title}</Link>
                    })}
                  </div>
                
                  <div className='column'>
                    <h3>VĂN PHÒNG ANABIM</h3>
                    <div dangerouslySetInnerHTML={{__html: footer.cot2}}/>
                  </div>
                
                  <div className='column '>
                    <h3>HỖ TRỢ</h3>
                    <div dangerouslySetInnerHTML={{__html: footer.cot3}}/>
                  </div>
                </div>
              </div>
            
              <div className='four wide column '>
                <h3 className='centerInside'>Connect</h3>
                <div className='row centerInside'>
                  <a target='_blank' href='https://facebook.com/daotaokientrucxaydung/'><i
                    className='huge facebook square icon'/></a>
                  <a target='_blank' href='https://plus.google.com/105729788429368018982'><i
                    className='huge google plus square icon'/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='ui inverted segment noBor noSha noRa noMa footer-bot'>
          <div className='ui container'>
            <div className='ui secondary  menu'>
              <a className='active item'>
                © 2017 Anabim.com, Inc.
              </a>
              <a className='item'>
                Site Map
              </a>
              <a className='item'>
                Privacy policy
              </a>
              <a className='item'>
                Web Use Policy
              </a>
              <div className='right menu'>
                <a className='ui item'>
                  ANABIM
                  <i className='icons'>
                    <i className='angle double up icon'/>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
