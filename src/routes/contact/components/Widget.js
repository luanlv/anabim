import React from 'react'

class Widget extends React.Component {
  render () {
    return (
      <div>
        <div className="widget_black-studio-tinymce">
          <div className="featured-widget">
            <h3 className="widget-title">
              <span className="widget-title__inline">OLD FASHIONED CONTACT</span>
            </h3>
            <p>
              <strong>CargoPress, Itd.</strong><br />
              227 Marion Street<br />
              Columbia, SC 29201
            </p>
            <p>
              1-888-123-4567<br />
              1-888-123-4568<br />
              <a href="mailto:info@cargopress.com">info@cargopress.com</a>
            </p>
          </div>
        </div>
        <div className="widget_pw_opening_time">
          <div className="featured-widget">
            <h3>
              <span className="icon icons-ornament-left" />
              OPENING TIME
              <span className="icon icons-ornament-right" />
            </h3>
            <dl className="week-day ">
              <dt>Monday</dt>
              <dd>8:00 - 16:00</dd>
            </dl>
            <dl className="week-day  light-bg">
              <dt>Tuesday</dt>
              <dd>8:00 - 16:00</dd>
            </dl>
            <dl className="week-day ">
              <dt>Wednesday</dt>
              <dd>8:00 - 16:00</dd>
            </dl>
            <dl className="week-day  light-bg">
              <dt>Thursday</dt>
              <dd>8:00 - 16:00</dd>
            </dl>
            <dl className="week-day ">
              <dt>Friday</dt>
              <dd>8:00 - 16:00</dd>
            </dl>
            <dl className="week-day  light-bg">
              <dt>Saturday</dt>
              <dd>8:00 - 16:00</dd>
            </dl>
            <dl className="week-day  closed today">
              <dt>Sunday</dt>
              <dd>CLOSED</dd>
            </dl>
          </div>
        </div>
      </div>
    )
  }
}

export default Widget
