function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('[Erro] verifique o ano e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex [0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src','/img/menino-bebe.png')
                document.body.style.background = "#55a9f760"
            }else if(idade > 11 && idade <= 17){
                img.setAttribute('src','/img/homem-jovem.png')
                document.body.style.background = "#55a9f760"
            } else if(idade >= 18 && idade <= 64){
                img.setAttribute('src','/img/homem-adulto.png')
                document.body.style.background = "#55a9f760"
            }else{
                img.setAttribute('src','/img/homem-idoso.png')
                document.body.style.background = "#55a9f760"
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src','/img/menina-bebe.png')
                document.body.style.background = "#e474f396"
            }else if(idade > 11 && idade <= 17){
                img.setAttribute('src','/img/mulher-jovem.png')
                document.body.style.background = "#e474f396"
            } else if(idade >= 18 && idade <= 64){
                img.setAttribute('src','/img/mulher-adulta.png')
                document.body.style.background = "#e474f396"
            }else{
                img.setAttribute('src','/img/mulher-idosa.png')
                document.body.style.background = "#e474f396"
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = ` ${genero} com ${idade} anos. <br/> <br/>`
        res.appendChild(img)
    }
}