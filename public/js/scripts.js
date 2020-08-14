const input = document.querySelector('input[name="price"]')
input.addEventListener('keydown', (e) => {
    
    setTimeout(() => {
        let { value } = e.target
        value = value.replace(/\D/g, '')
        e.target.value = value
    })
})