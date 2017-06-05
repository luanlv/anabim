import React from 'react';

import {Title, BreadCrumb, Widget, FormEmail} from './components'

class Contact extends React.Component {
  render() {

    const contact = this.props.data.information.value.contact

    return (
      <div>
        <Title title={contact.title} description={contact.description} />
        <BreadCrumb title={contact.title} />

        <div className="container">
          <div className="row margin-bottom-30">
            <div className="col-sm-3 hentry" dangerouslySetInnerHTML={{ __html: contact.widget }} />
            <div className="col-sm-9">
              <FormEmail header={contact.header} body={contact.body} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact
