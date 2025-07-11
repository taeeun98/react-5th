import notesData from '@/data/notes.json'
import usersData from '@/data/users.json'

//typeof notesData // => Note[]
// 배열에서 [number]를 붙이면, 배열의 개별 요소 타입을 뜻함

export type Note = (typeof notesData)[number] & {
    expand?: {
        user: typeof usersData[number]
    }
}


export function getNoteList():Note[] {
    return notesData.map((note)=>{
        const user = usersData.find((user)=> user.id === note.userId)
        
        if(user) {
            (note as Note).expand = {user}
        }

        return note;
    })
}

export function getNoteItem(noteId:number):Note | null {
    const notes = getNoteList();
    const note = notes.find((note)=>note.id == noteId);
    return note  ? note : null;
}