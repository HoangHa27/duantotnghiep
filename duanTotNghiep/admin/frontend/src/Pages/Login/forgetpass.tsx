import React, { useState } from 'react'
import './login.scss'
import { Container, Col, Button, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { forgetPass } from '../../Redux/ReducerApi/Get/user/forgetpass'
import { AppDispatch } from '../../Redux/store'
import { setIsForgetPass } from '../../Redux/Reducers/login/forgetPass'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'

const ForgetPass: React.FC = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const handleForget = async () => {
    if (email.trim() === '') {
      alert('hãy nhập vào email của bạn')
      return
    }
    // viết tiếp phần sử lý quên mk
  }
  const handleBackToLogin = () => {
    dispatch(setIsForgetPass(false))
  }

  // hàm sử lí sự kiện khi người dùng nhấn phím enter
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleForget()
    }
  }

  return (
    <form>
      <div
        onClick={handleBackToLogin}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <ArrowLeftOutlined />
      </div>
      <h2 style={{ textAlign: 'center' }}>Quên Mật Khẩu</h2>
      <div className="form-group">
        <label htmlFor="email">Nhập email của bạn</label>
        <input
          type="text"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <Row className="mt-3">
        <Col
          xs={12}
          md={{ span: 4, offset: 8 }}
          className="d-flex justify-content-md-end mt-md-0 mt-2"
        >
          <Button variant="info" onClick={handleForget} className="w-100">
            Lấy lại mật khẩu
          </Button>
        </Col>
      </Row>
    </form>
  )
}

export default ForgetPass
