// exibir a faixa etaria 
// se a pessoa nasceu entre 1946 e 1964: Baby
// se a pessoa nasceu entre 1965 e 1980: geracao X
// se a pessoa nasceu entre 1981 e 1996: millennial
// se a pessoa nasceu entre 1997 e 2012: geracao z
// se a pessoa nasceu entre 2013: geracao alpha

let ano = 1955

if(ano >= 1946 && ano <=1964){
    console.log("Baby boomer")
} 

else if(ano >= 1965 && ano <=1980){
    console.log("Xr")
} 

else if(ano >= 1981 && ano <=1996){
    console.log("millennial")
} 

else if(ano >= 1997 && ano <=2012){
    console.log("Z")
} 

else if(ano >= 2013) {
    console.log("alpha")
} 