import { createContext , useState } from "react"

export const ThemeContext = createContext('default')

export const ThemeProvider =  (props) =>{
  let [theme, setTheme] = useState('default')

  if(localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.documentElement.classList.add('dark');
  }

  const toggleTheme = () =>{
    if (theme!='dark') {
        localStorage.theme='dark';
        setTheme('dark')
        document.documentElement.classList.add('dark');
    } else {
        localStorage.theme='light';
        setTheme('light')
        document.documentElement.classList.remove('dark')
    }
  }

  let themeStore = { theme , toggleTheme }

  return (<ThemeContext.Provider value={themeStore}>
    {props.children}
  </ThemeContext.Provider>)
}
