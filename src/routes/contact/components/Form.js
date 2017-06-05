import React from 'react'

class Form extends React.Component {
  render () {
    return (
      <div id='form'>
        <h3 className="widget-title margin-top-0">
          {this.props.header}
        </h3>

        <div dangerouslySetInnerHTML={{ __html: this.props.body }} />

        <form data-toggle="validator" method="post" action="form.php" className="aSubmit">
          <div style={{display: 'none'}}><input type="text" name="maximus" /></div>
          <input type="hidden" name="theSubject" defaultValue="CargoPress: Contact Request" />
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <div className="form-group">
                <input type="text" placeholder="First Name*" aria-invalid="false" aria-required="true" size={40}  name="your-name" required />
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="form-group">
                <input type="text" placeholder="Last Name*" aria-invalid="false" aria-required="true" size={40}  name="last-name" required />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <div className="form-group">
                <input type="email" placeholder="E-mail address*" aria-invalid="false" aria-required="true" size={40}  name="your-email" required />
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" aria-invalid="false" aria-required="true" size={40}  name="your-phone" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <div className="form-group">
                <input type="text" placeholder="Subject*" aria-invalid="false" size={40}  name="your-subject" required />
              </div>
            </div>
            <div className="col-xs-12">
              <div className="form-group">
                <textarea placeholder="Message*" aria-invalid="false" rows={10} cols={40} name="your-message" required defaultValue={""} />
              </div>
              <input type="submit" className="btn btn-primary" defaultValue="Gửi tin nhắn" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
