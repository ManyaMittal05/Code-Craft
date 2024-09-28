import React, { useContext, useEffect } from 'react'
import Editor from './Editor'
import { Box, styled } from '@mui/material'
import { DataContext } from '../context/DataProvider'

const Container = styled(Box)`
    display: flex;
    background-color: #060606;
    height: 55vh;
`

function Code() {

    const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext)

    // Load saved code from localStorage when the component mounts
    useEffect(() => {
        const savedHtml = localStorage.getItem('htmlCode');
        const savedCss = localStorage.getItem('cssCode');
        const savedJs = localStorage.getItem('jsCode');

        if (savedHtml) setHtml(savedHtml);
        if (savedCss) setCss(savedCss);
        if (savedJs) setJs(savedJs);
    }, [setHtml, setCss, setJs]);

    // Save code to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('htmlCode', html);
    }, [html]);

    useEffect(() => {
        localStorage.setItem('cssCode', css);
    }, [css]);

    useEffect(() => {
        localStorage.setItem('jsCode', js);
    }, [js]);

  return (
    <Container>
        <Editor 
            heading="HTML"
            icon="/"
            color="#FF3C41"
            value={html}
            onChange={setHtml}
        />
        <Editor 
            heading="CSS"  
            icon="*"  
            color="#0EBEFF"
            value={css}
            onChange={setCss}
        />
        <Editor 
            heading="JavaScript"
            icon="{ }"
            color="#FCD000"
            value={js}
            onChange={setJs}
        />
    </Container>
  )
}

export default Code
