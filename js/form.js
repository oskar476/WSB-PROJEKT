const name = document.getElementById('name')
const surname = document.getElementById('surname')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const finance = document.getElementById('finance')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Złe dane')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

    if (surname.value === '' || surname.value == null) {
        messages.push('Złe dane')
    }

    if (finance.value === '' || surname.value == null) {
        messages.push('Złe dane')
    }
})