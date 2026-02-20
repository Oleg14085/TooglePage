
import { useState } from "react"
 
export const LightSwitch = () => {
  const {isOn,toggle} = useToggle(false)
  return (
    <div>
      <h2>{isOn ? "💡 Свет включен" : "🌙 Свет выключен"}</h2>
      <button onClick={toggle}>Переключить свет</button>
    </div>
  )
}
  function useToggle(initialValue:boolean){
    const [state, setState] = useState(initialValue)
    
     return{
        isOn:state,
        toggle:() => {setState((prev)=>!prev)},
        setIsOn:(value:boolean)=>setState(value),
        reset:()=>setState(false)
     }
 }

export function VisibilityToggle(){
    const{isOn,setIsOn} = useToggle(false)
    return(
        <div>
            <h2>{isOn ?'🎉 Это секретное сообщение!':''}</h2>
            <button onClick={()=>setIsOn(true)}>Показать</button>
            <button onClick={()=>setIsOn(false)}>Скрыть</button>
        </div>
    )
}
  function NotificationSwitch(){
    const {isOn,setIsOn,toggle,reset} = useToggle(true)
    return(
        <div>
        <h2>{isOn ? "🔔 Уведомления включены" : "🔕 Уведомления выключены"}</h2>
        <button onClick={toggle}>Переключить</button>
        <button onClick={()=>setIsOn(true)}>Включить</button>
        <button onClick={reset}>Сбросить</button>
        </div>
    )
  }


function useText(initialValue:string){
    const[value,setValue] = useState(initialValue)
    return{
        text:value,
        setText:(newText:string)=>{setValue(newText)},
        clear:()=> setValue(''),
        toUpperCase:()=>setValue(value.toLocaleUpperCase()),
        toLowerCase:()=>setValue(value.toLocaleLowerCase())

    }
}
export function TitleEditor(){
    const {text,setText,toUpperCase,toLowerCase,clear} = useText("Заголовок статьи")
    return(
        <div>
            <h2>{text}</h2>
            <button onClick={toUpperCase}>ВЕРХНИЙ РЕГИСТР</button>
            <button onClick={toLowerCase}>нижний регистр</button>
            <button onClick={()=>setText('Новый заголовок')}>Изменить на Новый заголовок</button>
            <button onClick={clear}>Очистить</button>
        </div>
    )
}


 function GreetingCard(){
    const{text,setText,toUpperCase,toLowerCase,clear} = useText("Привет")
    return(
        <div>
            <h2>💬 {text}</h2>
            <button onClick={toUpperCase}>ГРОМКО</button>
            <button onClick={toLowerCase}>тихо</button>
            <button onClick={()=>setText('Добро пожаловать')}>Сказать Добро пожаловать!</button>
            <button onClick={clear}>Молчать</button>
        </div>
    )
 }
export const TogglePage = () => {
  return (
    <div>
      <LightSwitch />
      <VisibilityToggle/>
      <NotificationSwitch/>
      <TitleEditor/>
      <GreetingCard/>
    </div>
  )
}