import React from 'react'

const EmailConfirm = ({}) => {
  return (
    <div id='email-comfirm' className='ui small modal '>
      <div className='header' style={{textAlign: 'center'}}>
        Kích hoạt email
      </div>
      <div className='ui' style={{textAlign: 'center', padding: '30px 10px'}}>
        Một email kích hoạt đã được gửi đến email của bạn<span style={{color: 'red'}}/>
        <br />
        Bạn hãy check email và làm theo hướng dẫn để kích hoạt tài khoản
      </div>

    </div>
  )
}

export default EmailConfirm
