let username = document.querySelector('input');
let userdiscription = document.querySelector('.userdiscription');
let h2 = document.querySelector('h2');




let no = document.querySelectorAll('.no')

 async function search(){
if(username.value!=''){
    try {
        let response = await fetch(`https://api.github.com/users/${username.value}`);
        let data = await response.json();
if(response.ok){
    userdiscription.style.opacity = 1;
   h2.style.display = 'none'

    document.querySelector('img').setAttribute('src',`${data.avatar_url}`);
    document.querySelector('.name').innerText= data.name;
    document.querySelector('.ID').innerText= data.login;
    document.querySelector('a').setAttribute('href',`${data.html_url}`);
    document.querySelector('.Bio').innerText = data.bio
    no[0].innerText = data.followers
    no[1].innerText = data.following
    no[2].innerText = data.public_repos ;
}else{
    userdiscription.style.opacity = 0;
    h2.style.display = 'block'
   
}
    



       
     
     
    } catch (error) {
        alert(error)
    }
    
}else{
    alert('Please Enter Your Username First')
}

 }



window.addEventListener('keydown',function(event){
if(event.key=='Enter'){
    search()
}
})

/*Background Chainging according to Day & Night*/
window.addEventListener('load',function(){
    let time = new Date();
    let hours = time.getHours()
    if(hours>6&&hours<18){
        document.body.style.backgroundColor='white';
        document.body.style.color='black'
    }else{
        document.body.style.backgroundColor='black';
        document.body.style.color='white'
    }

})










