let count = 0
document.getElementById('oshirish').addEventListener('click', ()=>{
    count++
    document.getElementById('son').textContent = count
})

document.getElementById('kamaytirish').addEventListener('click',()=>{
    count--
    document.getElementById('son').textContent = count
})