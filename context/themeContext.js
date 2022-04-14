import { createContext } from "react"

export const ThemeContext = createContext('default')

export const ThemeProvider =  (props) =>{
  let [theme, setTheme] = useState('default')
  let themeStore = {theme,setTheme}

  return (<ThemeContext.Provider value={themeStore}>
    {props.children}
  </ThemeContext.Provider>)
}
