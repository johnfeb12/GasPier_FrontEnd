$(document).ready(function () {

const onStart = function () {

    document.querySelector('.Talk').setAttribute('style', 'display:block;')
    document.querySelector('.close1').setAttribute('style', 'display:block;')



}

    
    setTimeout( onStart , 5000); // 5000 to load it after 5 seconds from page load

const Show = function () {
    document.querySelector('.Question').setAttribute('style', 'display:block')
}


document.querySelector('.close1').addEventListener('click', function () {
    document.querySelector('.Talk').setAttribute('style', 'display:none')
    document.querySelector('.close1').setAttribute('style', 'display:none')

    setTimeout(Show, 1000)
    
})

document.querySelector('.Question').addEventListener('click', function (){
    document.querySelector('.Question').setAttribute('style', 'display:none')
    document.querySelector('.Talk').setAttribute('style', 'display:block;')
    document.querySelector('.close1').setAttribute('style', 'display:block;')
    
})




});