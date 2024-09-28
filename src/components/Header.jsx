import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`

function Header() {
    const logo = 'https://blog.codepen.io/wp-content/uploads/2023/09/logo-white.png'

  return (
    <Container position='static'>
        <Toolbar>
            <img src={logo} alt="logo" style={{width: 40}} />
        </Toolbar>
    </Container>
  )
}

export default Header
