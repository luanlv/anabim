import React from 'react';

import {Title, BreadCrumb} from './components'

class About extends React.Component {

  render() {

    const about = this.props.data.information.value.about

    return (
      <div>
        <Title title={about.title} description={about.description} />
        <BreadCrumb title={about.title} />
        <div className="container">
          <div className="row margin-bottom-30">
            <div className="col-sm-6">
              <div dangerouslySetInnerHTML={{ __html: about.body }} />
            </div>
            <div className="col-sm-6">
              <p>
                <img alt="placeholder" src={about.img1} className="alignnone" />
              </p>
              <p>
                <img alt="placeholder" src={about.img2} className="alignnone" />
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default About
