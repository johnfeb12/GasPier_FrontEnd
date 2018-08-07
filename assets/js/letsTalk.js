
let direct = document.querySelector('.redirect');

const email = document.querySelector('.Email').value.length
console.log(email)
if(email > 0){
    direct = true
}

direct = false
console.log(direct)
 
document.querySelector('.redirect').addEventListener('click', function (){
    const email = document.querySelector('.Email').value.length

    console.log(email)

    direct = false

    if (email > 0) {
        direct = true
      window.location.replace('/thanks.html')
    }else{
        alert('Please Fill Out Form')
    }

    

    console.log(direct)

    
})