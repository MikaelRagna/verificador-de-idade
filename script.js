function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO]')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade>= 0 && idade < 5){
                //Bebê
                img.setAttribute("src","bbM.png")
            }else if(idade >=5 && idade < 11){
                //Criança
                img.setAttribute("src","cM.png")
            }else if (idade>=12 && idade < 18){
                //Adolescente
                img.setAttribute("src","aM.png")
            }else if(idade >= 18 && idade < 60){
                //Adulto
                img.setAttribute("src","adM.png")
            }else{
                //Idoso
                img.setAttribute("src","iM.png")
            }
        }else{
            genero = 'Mulher'
            if(idade>= 0 && idade < 5){
                //Bebê
                img.setAttribute("src","bbF.png")
            }else if(idade >=5 && idade < 11){
                //Criança
                img.setAttribute("src","cF.png")
            }else if (idade>=12 && idade < 18){
                //Adolescente
                img.setAttribute("src","aF.png")
            }else if(idade >= 18 && idade < 60){
                //Adulto
                img.setAttribute("src","adF.png")
            }else{
                //Idoso
                img.setAttribute("src","iF.png")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Detectamos ${genero} de ${idade} ano`)
        res.appendChild(img)
    }
}
