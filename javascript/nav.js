const aiheet = ["Solar_Jetman", "Animaatio", "Faxanadu", ]

aiheet.forEach(aihe => {

    const element = document.getElementById(aihe + "_aihe");
    element.onclick = () => {
      
      let alasivut = document.querySelectorAll(".ala_sivusto_" + aihe.toLowerCase());
      
      alasivut.forEach(alasivu => {
        alasivu.style.display = alasivu.style.display === "block" ? "none" : "block";
    });
     }
});

