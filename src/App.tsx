import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GithubBlogContextProvider } from './context/GithubBlogContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <GithubBlogContextProvider>
          <Router />
        </GithubBlogContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
