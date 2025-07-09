
// 명령형 프로그래밍
// 대상 찾기
const container = document.getElementById('imperative-programming')!;
const checkbox = document.querySelector('input[type="checkbox"]') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;


function handleChange(e:Event) {
    const {checked} = e.target as HTMLInputElement;
    console.log(checked);

    // 시키기
    if(checked){
        button.removeAttribute('disabled');
        button.textContent = '활성 상태'
    }else{
        button.setAttribute('disabled', 'true');
        button.textContent = '비활성 상태'
    }
}


checkbox.addEventListener('change', handleChange)