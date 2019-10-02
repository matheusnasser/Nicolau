function pais () {
// Dados inseridos pelo usuário!
let input = document.getElementById("pais").value; 
// Transformação dos dados para letras minisculas para que não haja erros com a "database"
let inputL = input.toLowerCase();  

var paises = [  
    {pais: 'brasil',  lingua: 'Feliz Natal',},
    {pais: 'alemanha', lingua: 'Frohliche Weihnachten!',},
    {pais: 'austria',  lingua: 'Frohe Weihnacht!',},
    {pais: 'coreia', lingua: 'Chuk Sung Tan! ',},
    {pais: 'espanha', lingua:  'Feliz Navidad!',},
    {pais: 'grecia', lingua: 'Kala Christougena',},
    {pais: 'usa:', lingua: 'Merry Christmas',},
    {pais: 'inglaterra', lingua: 'Merry Christmas',},
    {pais: 'australia', lingua:  'Merry Christmas',},
    {pais: 'portugal', lingua: 'Feliz Natal!',},
    {pais: 'suecia', lingua: 'God Jul!',},
    {pais: 'turquia', lingua: 'God Jul!',},
    {pais: 'argentina', lingua: 'Feliz Navidad!',},
    {pais: 'chile', lingua:  'Feliz Navidad!',},
    {pais: 'mexico', lingua: 'Feliz Navidad!',},
    {pais: 'antartida', lingua: 'Merry Christmas!',},
    {pais: 'canada', lingua:  'Merry Christmas!',},
    {pais: 'irlanda', lingua: 'Nollaig Shona Dhuit!',},
    {pais: 'belgica', lingua: 'Zalig Kerstfeest!',},
    {pais: 'italia' , lingua: 'Buon Natale!',},
    {pais: 'libia', lingua: 'Buon Natale!',},
    {pais: 'siria', lingua: 'Milad Mubarak!',},
    {pais: 'marrocos', lingua: 'Milad Mubarak!',},
    {pais: 'japao:' , lingua: 'Merii Kurisumasu!',},
]
    //Poderia ser adicionado juntamente com a api do country.js algumas informações sobre o país como bandeira, população, fronteiras etc.
    //Criação de um banco de dados verdadeiro.
    
 let resultado = paises.filter(x => x.pais === inputL);
  if(!resultado[0]) {
    document.getElementById("divR").innerHTML = 'Not Found';
  }
  else{
    const printT = resultado[0].lingua;
    const printP = resultado[0].pais;
    let divR = document.getElementById("divR").innerHTML = "Feliz natal no país: " + printP + " é " + printT;
}
}

