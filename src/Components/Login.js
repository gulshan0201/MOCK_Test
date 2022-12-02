import { Container } from '@mui/system'
import React, { useState } from 'react'
import './Login.css';
import { RiLoginCircleLine } from 'react-icons/ri';
import { FaRegUserCircle } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const iconStyle = { color: "#fff", fontSize: "1.5rem" }

const Login = () => {

  const navigate = useNavigate();

  const navigateSummary = () => {
    navigate('/summary')
  }

  const [userName, setUserName] = useState("gulshan.crj26@gmail.com");
  const [password, setPassword] = useState("1234567890");
  return (
    <>
      <Container className='container' maxWidth="sm" sx={{ marginTop: "12rem" }}>
        <form>
          <div className='login'>
            <Typography variant='h3' mt={3} mb={3} width="100" sx={{ fontWeight: "bold", color: "#fff" }}>
              Login Form <RiLoginCircleLine />
            </Typography>
            <span>
              <label>UserName</label><FaRegUserCircle style={iconStyle} />
            </span>
            <input type="text"
              name="username"
              placeholder="enter your username"
              value={userName}
              autoComplete="on"
              onChange={(e) => setUserName(e.target.value)}
            />
            <br ></br>
            <span>
              <label>Password</label> <RiLockPasswordLine style={iconStyle} />
            </span>
            <input type="password"
              name="password"
              placeholder="enter your username"
              value={password}
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <Button sx={{
              width: "15rem",
              color: "white",
              borderRadius: "20px"
            }}
              variant='outlined'
              type="submit"
              onClick={navigateSummary}>Submit</Button>
          </div>
        </form>
      </Container>
    </>
  )
}

export default Login