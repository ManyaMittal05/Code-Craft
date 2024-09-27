import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`

function Header() {
    const logo = 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/dev-512.png'

  return (
    <Container position='static'>
        <Toolbar>
            <img src={logo} alt="logo" style={{width: 40}} />
        </Toolbar>
    </Container>
  )
}

export default Header
