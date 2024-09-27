import { Box, styled } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataProvider'


function OutputScreen() {

    const Container = styled(Box)`
        height: 41vh
    `

    const [src, setSrc] = useState('')

    const {html, css, js} = useContext(DataContext)

    // making a boiler plate for a html document 
    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode)
        }, 1000)

        return () => clearTimeout(timeout);
    }, [html, css, js])

  return (
    <Container>
        <iframe 
            srcDoc={src} 
            frameborder={0}
            title='Output'
            sandbox='allow-scripts'
            width='100%'
            height='100%'
        >
        </iframe>
    </Container>
  )
}

export default OutputScreen
