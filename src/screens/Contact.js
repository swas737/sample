import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, deleteItem } from '../redux/actions/index'

const Contact = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [remark, setRemark] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    window.onbeforeunload = function () {
      let urlParameter = window.location.href
      if (window.location.href.match(/[?]/i) != null) {
        let splittedURL = urlParameter.split('?')[1]
        dispatch(addItem(splittedURL))
      }
    }
    // localStorage.getItem('queryParameter')
    return () => {
      window.onbeforeunload = null
    }
  }, [])
  const queryString = useSelector((state) => state.queryParameter)
  const queryStringArr = Object.keys(queryString)

  const submitHandler = (e) => {
    e.preventDefault()
    var contact = {
      username: username,
      email: email,
      remark: remark,
      queryString: queryString,
    }

    axios({
      method: 'post',
      url: 'http://localhost:5000/api/contact',
      data: contact,
    })
      .then(function (response) {
        console.log(response)
        alert('Success')


        queryStringArr.forEach((d) => {
          console.log('d >> ', d);
          dispatch(deleteItem(d))
        })


      })
      .catch(function (error) {
        console.log(error)
      })


  }

  return (
    <>
      <div
        className='row justify-content-center'
        style={{
          display: 'flex',
          alignItems: ' center',
          justifyContent: 'center',
        }}
      >
        <div
          className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'
          style={{ marginTop: '100px' }}
        >
          <div className='contact-main'>
            <h1 style={{ alignItems: 'center' }}>Contact - Us</h1>
            <form className='row' onSubmit={submitHandler}>
              <div
                className=' col-lg-6 col-md-6 col-sm-12 form-group'
                style={{ margin: '1%' }}
              >
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                />
              </div>

              <div
                className=' col-lg-6 col-md-6 col-sm-12 form-group'
                style={{ margin: '1%' }}
              >
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email Id'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </div>
              <div
                className=' col-lg-6 col-md-6 col-sm-12 form-group'
                style={{ margin: '1%' }}
              >
                <textarea
                  type='text'
                  className='form-control'
                  placeholder='Enter your query here'
                  value={remark}
                  onChange={(e) => {
                    setRemark(e.target.value)
                  }}
                />
              </div>
              <div className='contact-us'>
                <input type='Submit' className='btn btn-primary' />
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
