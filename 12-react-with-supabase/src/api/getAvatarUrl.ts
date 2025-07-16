import supabase from "@/supabase/supabase";






export async function getAvatarUrl(userId:string):Promise<string|null>{

  const {data: files, error:listError} = await supabase.storage
  .from('avatars')
  .list("",{
    limit:100
  });
  
  if(listError || !files){
    console.error('파일 불러오기 실패~!');
    return null;
  }

  const matchedFile = files.find((file)=>
    file.name.startsWith(userId)
  )
  
  if(!matchedFile){
    console.warn('해당하는 이미지가 없습니다.');
    return null;
  }

  const {data} = supabase
  .storage
  .from('avatars')
  .getPublicUrl(matchedFile.name)

  return data?.publicUrl || null

}