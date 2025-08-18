function ProfileCard() {
  return (
    //  bg-[#ffeb3b] = [] 안에 색상코드 넣으면 원하는 색 지정 가능
    // tailwind 는 mobile first 라서, 기본 값이 모바일 크기 지정임.
    // 프리픽스를 붙여서 더 큰 화면을 정의하는 것
    <div className="flex flex-col sm:flex-row  sm:items-center sm:gap-6 sm:py-4 gap-2 p-8 rounded-xl m-5 bg-[#fffdee] min-w-[200px]">
        <img className="size-30 mx-auto block rounded-full sm:mx-0 sm:shrink-0" src="/visual.jpg" alt="고양이 사진" />
        <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
                <p className="text-lg font-semibold text-black">김태은</p>
                <p className="font-medium text-gray-500">Product Engineer</p>
            </div>
            <button className=" animate-bounce transition border-purple-200 text-purple-600 outline-1 px-3 py-1 rounded-full hover:text-white hover:bg-purple-800 cursor-pointer" >Message</button>
        </div>
    </div>
  )
}
export default ProfileCard