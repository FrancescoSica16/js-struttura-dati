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

    version : ["goldenrod", "black", "iridescent"],

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

let abilitiesHTMLContent = "<strong>No abilities avaiable</strong>";
if(card.abilities.length){
    abilitiesHTMLContent ='<ul class="card-abilities">'; 
    for (let i = 0; i < card.abilities.length; i++) {
        const currentAbility = card.abilities[i];
        abilitiesHTMLContent += "----------------";
        abilitiesHTMLContent += `"<li>Description: ${currentAbility.description}</li>"`;
        
        abilitiesHTMLContent += `<li>Specific launch cost: 
                                    <ul class="mana-cost">
                                        <li>Common cost: ${currentAbility.manaCost.common}</li>
                                        <li>white cost: ${currentAbility.manaCost.white}</li>
                                        <li>ublue cost: ${currentAbility.manaCost.ublue}</li>
                                        <li>black cost: ${currentAbility.manaCost.black}</li>
                                        <li>red cost: ${currentAbility.manaCost.red}</li>
                                        <li>green cost: ${currentAbility.manaCost.green}</li>    
                                    </ul>
                                </li>`
        abilitiesHTMLContent += "----------------";
    }
    abilitiesHTMLContent += "</ul>";
} // if(abilities.length > 0)

let cardDisplayHTML = 
`<ul  class = "card-element">

<li>Name: ${card.name} </li>

<li>Launch combined cost: ${card.convertedManaCost()}</li>

<li>costitution: ${card.constitution} </li>
<li>strenght: ${card.strength} </li>

<li>Specific launch cost: 
    <ul class="mana-cost">
        <li>Common cost: ${card.manaCost.common}</li>
        <li>white cost: ${card.manaCost.white}</li>
        <li>ublue cost: ${card.manaCost.ublue}</li>
        <li>black cost: ${card.manaCost.black}</li>
        <li>red cost: ${card.manaCost.red}</li>
        <li>green cost: ${card.manaCost.green}</li>    
    </ul>
</li>
<li>Card type: ${card.cardType} ${card.subType}</li>

<li>Expansion: 
    <ul class="expansion-list">
        <li>Name: ${card.expansion.name}</li>
        <li>Rarity: ${card.expansion["rarity"]}  ${card.expansion["other"]} </li>
        <li>Numbers of cards: ${card.expansion.maximumNumber}</li>
    </ul>
</li>

<li>Collection numbers: ${card.collectionNumber}/${card.expansion.maximumNumber} </li>

<li>Flavor text: <em>${card.flavourText.quote}</em> -by ${card.flavourText.author}</li>

<li>Abilità:${abilitiesHTMLContent}</li>

<li>Illustration info:  
        ${card.illustrator.name} ${card.surname}
</li>

<li>Border color: ${card.borderHue}</li>

<li>Version: ${card.version.join(" ")}</li>
</ul>`

document.getElementById("deck").innerHTML += cardDisplayHTML;