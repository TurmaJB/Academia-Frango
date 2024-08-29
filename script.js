const btnLupa = document.getElementById ("btn-lupa")

const lupaPreta = document.getElementById ("lupa-preta")
const lupaBranca = document.getElementById ("lupa-branca")

btnLupa.addEventListener ("mouseover", () => {   

    lupaPreta.style.display="none"
    lupaBranca.style.display="inline"
})

btnLupa.addEventListener ("mouseout", () => {   

    lupaPreta.style.display="inline"
    lupaBranca.style.display="none"
})




