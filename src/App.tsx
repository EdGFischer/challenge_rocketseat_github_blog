import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { IssuesProvider } from './contexts/IssuesContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <IssuesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </IssuesProvider>
    </ThemeProvider>
  )
}

export default App
