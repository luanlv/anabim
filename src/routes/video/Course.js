import React from 'react';
import { CourseInfo, Video } from './components'
import Link from '../../components/Link'
import fn from '../../components/Partial/Fn'
import FacebookProvider, { Comments } from 'react-facebook'
import moment from 'moment'

class Course extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      tab: 1
    }
  }

  componentDidMount () {
    $('.special.cards .image').dimmer({
      on: 'hover'
    })

    $('.ui.rating')
      .rating('disable')

    $('.ui.accordion')
      .accordion({exclusive: false})
  }

  render () {
    return (<div>
      ok
    </div>)
  }

  redraw () {
    this.setState({})
  }

}

export default Course
