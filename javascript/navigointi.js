

let aihealue = [
    //"Pääsivu",
    "Solar Jetman",
    "Animaatio",
    "Faxanadu",
    //"Verkko"
]

let osoitteet_pääsivu = [
    "paasivu.html",
]

let osoitteet_solar = [
    "/solar jetman/solar_jetman_kuvailu.html",
    "/solar jetman/solar_jetman_planeetat.html",
    "/solar jetman/solar_jetman_esineet.html",
    "/solar jetman/solar_jetman_varustukset.html",
    "/solar jetman/solar_jetman_parannukset.html",
    "/solar jetman/solar_jetman_vinkit.html"
]

let sivut_solar = [
    "Pelin kuvaus ja tarina",
    "Planeetat",
    "Raahattavat esineet",
    "Ostettavat varustukset",
    "Parannuksia peliin",
    "Vinkkejä peliin"
]


let osoitteet_animaatio = [
    "/animaatio/animaatio_70.html",
    "/animaatio/animaatio_80.html",
    "/animaatio/animaatio_90.html",
    "/animaatio/animaatio_2000.html",
    "/animaatio/animaatio_2010.html"
]

 
let sivut_animaatio = [
    "70-luku",
    "80-luku",
    "90-luku",
    "2000-luku",
    "2010-luku"
]

 
let osoitteet_faxanadu = [
    "/faxanadu/faxanadu_tarina.html",
    "/faxanadu/faxanadu_aseet_ja_suojaukset.html",
    "/faxanadu/faxanadu_taiat.html" ,
    "/faxanadu/faxanadu_esineet.html",
    "/faxanadu/faxanadu_vinkit.html",
    "/faxanadu/faxanadu_sensuuri.html",
    "/faxanadu/faxanadu_parannukset.html"
]

let sivut_faxanadu = [
    "Tarina",
    "Aseet ja suojaukset",
    "Taiat",
    "Esineet",
    "Vinkit",
    "Sensuuri",
    "Parannusehdotukset"
]


let osoitteet_verkko = [
    "/verkko/uusi_netti.html"
]





//Luodaan pääsivun painike valikkoon

let div_paasivu = document.createElement('div')
div_paasivu.id = "paasivun_painike"
div_paasivu.className = "muu_sivusto"

let otsikko = document.createElement('h3')

let a = document.createElement('a')
let link = document.createTextNode('Pääsivu')

a.appendChild(link)
a.href = "paasivu.html"

otsikko.appendChild(a)
div_paasivu.appendChild(otsikko)

const element = document.getElementById("navigointi");
element.appendChild(div_paasivu);


//Luodaan aihealueet muista sivuista valikkoon
for(i = 0; i<aihealue.length; i++){
    let div_otsikko = document.createElement('div')
    div_otsikko.id = aihealue[i].replace(" ", "_") + "_aihe"

    div_otsikko.className = "muu_sivusto"

    
    let otsikko = document.createElement('h3')
    let aihe = document.createTextNode(aihealue[i])

    otsikko.appendChild(aihe)
    div_otsikko.appendChild(otsikko)
    
    const element = document.getElementById("navigointi");
    element.appendChild(div_otsikko);

}



//Sijoitetaan sivustot eri aihealueille valikossa

let osa

if (document.body.classList.contains("paasivu")){
    osa = "html"
} else {
    //Valikon pääsivu, kun jokin muu sivu on avattu
    document.getElementById("paasivun_painike").children[0].children[0].href = "../../paasivu.html"

    //muut osat, sijainti on avatun sivuston juuri / sama kansio missä avattu sivu sijaitsee
    osa = ".."
}


const lapikaytavat = [sivut_solar, sivut_animaatio, sivut_faxanadu ]
const lapikaytavat_sivut = [osoitteet_solar, osoitteet_animaatio, osoitteet_faxanadu ]

lapikaytavat.forEach((sivut, indeksi) => {

    for(i = 0; i<sivut.length; i++){

        let div = document.createElement('div');
        div.id = sivut[i].replace(/\s/g, "_") + "_painike"
        div.className = "ala_sivusto_" + aihealue[indeksi].replace(/\s/g, "_").toLowerCase()
        let a = document.createElement('a');
        let link = document.createTextNode(sivut[i]);
        a.appendChild(link);
        a.href = osa + lapikaytavat_sivut[indeksi][i];
        div.appendChild(a)
        const element = document.getElementById(aihealue[indeksi].replace(" ", "_") + "_aihe")
        element.appendChild(div);
        
        
    }
})

//Luodaan verkkopainike
let div_verkko = document.createElement('div')
div_verkko.id = "verkko_painike"
div_verkko.className = "muu_sivusto"

verko_otsikko= document.createElement('h3')

a_verkko = document.createElement('a')
link_verkko = document.createTextNode('Internetti')

a_verkko.appendChild(link_verkko)


if (document.body.classList.contains("paasivu")){
    osa = "html"
} else {
    //muut osat, sijainti on avatun sivuston juuri / sama kansio missä avattu sivu sijaitsee
    osa = ".."
}

a_verkko.href = osa + "/verkko/uusi_netti.html"

verko_otsikko.appendChild(a_verkko)
div_verkko.appendChild(verko_otsikko)

let verkko_element = document.getElementById("navigointi");
verkko_element.appendChild(div_verkko);



// Päätetään minkä aihealueen alla ollaan ja annetaan "nykyinen" -luokka, joka tyylitetään CSS-tiedostossa, tuoden sen aihealueen otsikko esille muista
//Tämä katsotaan bodyn class-nimestä, joka pitää täsmätä sen aihealueiden kanssa
if (document.body.classList.contains("paasivu")){

    div_paasivu.classList.add("nykyinen")
}

aihealue.forEach(aihe => {
    
    if (document.body.classList.contains(aihe.replace(/\s/g, "_").toLowerCase())){
        document.getElementById(aihe.replace(/\s/g, "_") + "_aihe").classList.add("nykyinen")
    }
})

if (document.body.classList.contains("tietoverkko")) {
    div_verkko.classList.add("nykyinen")

}



//Toiminto jolla navigointi tunnistaa mikä yksittäinen sivu on valittu, tämä katsotaan bodyn id:stä

lapikaytavat.forEach((aihe) => {

    aihe.forEach(sivu => {
    
    if (document.body.id == sivu.replace(/\s/g, "_") + "_sivu"){
        document.getElementById(sivu.replace(/\s/g, "_") + "_painike").classList.add("nykyinen_alasivu")
    }
})
    
})



const aiheet = aihealue.map(aihe => aihe.replace(" ", "_"));


aiheet.forEach(aihe => {

    const element = document.getElementById(aihe + "_aihe");
    element.onclick = () => {
      
      let alasivut = document.querySelectorAll(".ala_sivusto_" + aihe.toLowerCase());
      
      alasivut.forEach(alasivu => {
        alasivu.style.display = alasivu.style.display === "block" ? "none" : "block";
    });
     }
});