import React, { useState } from 'react'
import './login.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Col, Button, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser } from '../../Redux/ReducerApi/Get/user/login'
import { setIsForgetPass } from '../../Redux/Reducers/login/forgetPass'
import { AppDispatch, RootState } from '../../Redux/store'
import ForgetPass from './forgetpass'

const LoginForm: React.FC = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const isForgetPass = useSelector(
    (state: RootState) => state.forgetPassSlile.isForgetPass
  )
  const dispatch = useDispatch<AppDispatch>()

  const handleLogin = async () => {
    if (name.trim() === '' || password.trim() === '') {
      alert('Hãy nhập tên và mật khẩu.')
      return
    }
    try {
      const response = await dispatch(LoginUser({ name, password }))
      const { payload } = response
      const message = payload.message
      if (message === 'success') {
        navigate('/home')
      } else {
        alert(message)
      }
    } catch (error) {
      console.error('Đăng nhập thất bại:', error.message)
      alert('Đăng nhập thất bại. Vui lòng thử lại.')
    }
  }

  const handleForgetPassClick = () => {
    dispatch(setIsForgetPass(true))
  }
  // hàm sử lí sự kiện khi người dùng nhấn phím enter
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }
  return (
    <div className="background">
      <Container>
        <Col md={{ span: 6, offset: 3 }} className="formLogin">
          {isForgetPass ? (
            <ForgetPass />
          ) : (
            <form>
              <h2 style={{ textAlign: 'center' }}>Đăng Nhập Tài Khoản</h2>
              <div className="form-group">
                <label htmlFor="name">Tên đăng nhập:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mật khẩu:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <Row className="mt-3">
                <Col
                  xs={12}
                  md={{ span: 4 }}
                  className="d-flex align-items-center"
                >
                  <Button variant="link" onClick={handleForgetPassClick}>
                    Quên Mật Khẩu
                  </Button>
                </Col>
                <Col
                  xs={12}
                  md={{ span: 4, offset: 4 }}
                  className="d-flex justify-content-md-end mt-md-0 mt-2"
                >
                  <Button
                    variant="info"
                    onClick={handleLogin}
                    className="w-100"
                  >
                    Đăng nhập
                  </Button>
                </Col>
              </Row>
            </form>
          )}
        </Col>
      </Container>
    </div>
  )
}

export default LoginForm
