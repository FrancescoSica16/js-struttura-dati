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
        other: "",
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

let cardDisplayHTML = 

`<ul  class = "card-element">

<li> </li>
<li>Name: ${card.name} </li>

<li>Launch combined cost: ${card.convertedManaCost()}
    <ul class="mana-cost">
        <li>Common cost: ${card.manaCost.common}</li>
        <li>white cost: ${card.manaCost.white}</li>
        <li>ublue cost: ${card.manaCost.ublue}</li>
        <li>black cost: ${card.manaCost.black}</li>
        <li>red cost: ${card.manaCost.red}</li>
        <li>green cost: ${card.manaCost.green}</li>    
    </ul>
</li>

<li>Specific launch cost: ${card.manaCost} </li>
<li>Card type: ${card.cardType} ${card.subType}</li>

<li>Expansion: 
    <ul class="expansion-list">
        <li>Name: ${card.expansion.name}</li>
        <li>Rarity: ${card.expansion["rarity"]}  ${card.expansion["other"]} </li>
        <li>Numbers of cards: ${card.expansion.maximumNumber}</li>
    </ul>
</li>

<li> </li>
<li> </li>

</ul>`

document.getElementById("deck").innerHTML += cardDisplayHTML;