var card = {

    name : "Troll Ascetic",
    manaCost : {
        common: 1,
        white: 0,
        ublue: 0, 
        black: 0,
        red:   0,
        green: 2,
    },
    cardType : "Creature ",
    subType : "Troll Shaman",
    expansion : {
        expansionID : 9,
        name : "The Gathering-Commander",
        rarity : "Rare",
        maximumNumber: 350, 
    },
    collectionNumber: 176,
    //autore
    //quote(citazione)
    flavourText : {
        author: "Puddnhead", quote : "Non è una coincidenza che i troll più antichi siano anche quelli più arrabbiati."
    },
    //ogni abilità ha un costo specifico ed ha una descrizione || 
    abilities: {      
        manaCost :{
            common: 1,
            white: 0,
            ublue: 0, 
            black: 0,
            red:   0,
            green: 1,
        },    //posso usare sempre manacost?
        
        description : "Rigenera l'asceta troll"
    },
     //illustratore [ID artista, nome, cognome, ]
    illustrator: {
        id: "",
        name: "Puddnhead",
        surname: "",
    },

    illustrationImage : "", // immagine principale

    constitution : 3,
    strength : 2,
    borderHue: "black",

    //immagine della carta completa
    cardImage : "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=262136&type=card",

    convertedManaCost :
    function () {
        let sum = 0;
        for (const key in this.manaCost) {
            sum += this.manaCost[key];      
        }
        return sum;
    },
};

console.table(card);
console.log(card.convertedManaCost());

