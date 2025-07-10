import '@/styles/main.css'
import '@/programming/imperative'
import '@/programming/declarative'
import { createRoot } from 'react-dom/client'
import Form from '@/programming/declarative'



const root = document.getElementById('root')
if(root){
    createRoot(root).render(
        <Form></Form>
    )
}