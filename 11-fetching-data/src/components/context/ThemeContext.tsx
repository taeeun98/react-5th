import { createContext, useContext, useState } from "react";
import { darkTheme, lightTheme, type ThemeType } from "./themes";


const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeContextType {
    theme : ThemeType;
    toggleTheme: () => void;
}

export function ThemeProvider({children}:{children:React.ReactNode}) {
    const [themeName, setThemeName] = useState<'light'|'dark'>('light');

    const theme = themeName === 'light' ? lightTheme : darkTheme;

    const toggleTheme = () => {
        //React가 내부적으로 prev를 이전 상태 값으로 자동으로 전달
        setThemeName((prev)=>(prev === 'light' ? 'dark' : 'light'))
    }

    return (
        //JSX에서는 속성 값에 JavaScript 객체를 넘길 때 중괄호 2번
        //바깥 {} → JS 표현식 / 안쪽 {} → 객체
        <ThemeContext value={{theme, toggleTheme}}>
            {children}
        </ThemeContext>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if(!ctx) throw new Error('ThemeProvider 가 필요합니다');
    return ctx;
}