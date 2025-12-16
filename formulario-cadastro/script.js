//  Validações 
//     1. Nome deverá ser nome e sobrenome
//     2. Email deverá conter @ e .com
//     3. Sexo deverá ser "M" || "F" || "Masculino" || "MASCULINO" || "masculino" || "Feminino" || "FEMININO" || "feminino"
//     4. Data nascimento Formato pt-br "DD/MM/AAAA"

const formCadastro = document.querySelector("#form-cadastro")
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const sexo = document.querySelector("#sexo")
const dataNascimento = document.querySelector("#data-nascimento")

formCadastro.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('infos', nome.value, email.value, sexo.value, dataNascimento.value)
    
    if( nome.value === '' || email.value === '' || sexo.value === '' || dataNascimento.value === ''){
        return alert('Existem campos obrigatórios não preenchidos !')
    }

    const possuiNomeESobrenome = nome.value.trim().split(' ').filter(item => item.length > 0).length > 1

    // o Regex a seguir, testa a validade de um email 
    // é necessário que tenha @, ".com", e ".br"
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i 
    const emailEhValido = emailRegex.test(email.value)

    const ehSexoValido = sexo.value.trim().toLowerCase() === 'masculino' || sexo.value.trim().toLowerCase() === 'feminino' || sexo.value.trim().toLowerCase() === 'f' || sexo.value.trim().toLowerCase() === 'm'

    const converteDataNascimento = new Intl.DateTimeFormat('pt-BR').format(new Date(dataNascimento.value))

    const splittedDate = converteDataNascimento.split('/')
    // ["08", "05", "1991"]
    // splittedDate[0].length === 2, [1] === 2, [2] === 4
    console.log('Data splitada: ', splittedDate)

    const ehUmFormatoValidoDeData = splittedDate[0].length === 2 || splittedDate[1].length === 2 || splittedDate[2].length === 4

    
})
