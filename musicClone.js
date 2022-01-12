console.log('welcom to mentos');

let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')





let songs =[
    {songName:"shiddat title track",filePath:"C:\Users\Divya\Downloads\1.mpeg",coverPath:"cover/1.jpg"},
    {songName:"shiddat title track",filePath:"C:\Users\Divya\Downloads\1.mpeg",coverPath:"cover/1.jpg"},
    {songName:"barbbadiya",filePath:"C:\Users\Divya\Downloads\1.mpeg",coverPath:"cover/1.jpg"},
    {songName:"shiddat title track",filePath:"C:\Users\Divya\Downloads\1.mpeg",coverPath:"cover/1.jpg"},
    {songName:"shiddat title track",filePath:"C:\Users\Divya\Downloads\1.mpeg",coverPath:"cover/1.jpg"},

]
let audioElement= new Audio('C:\Users\Divya\Downloads\1.mpeg');

masterPlay.addEventListener('click',()=>{
    if(audioElement.pause|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-step-forward');

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-step-forward');
        masterPlay.classList.add('fa-play-circle');
    }
})


 audioElement.addEventListener('timeupdate',()=>{
     console.log('timeupdate')
 })
