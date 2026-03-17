// Zelfde data-object als voorheen (laat dat gewoon staan)
const data = {
    "Labo 2": [
        "opdracht_3.html","opdracht_4.html","opdracht_5.html","opdracht_6.html",
        "opdracht_7.html","opdracht_8.html","opdracht_9.html","opdracht_10.html",
        "opdracht_11.html","opdracht_12.html","opdracht_13.html"
    ].map((f,i)=>({name:"Opdracht "+(i+3), path:"Labo_2/"+f})),

    "Labo 3": [
        ["Opdracht homepage","homepage"],
        ["Opdracht contactinformatie","contactinformatie"],
        ["Opdracht opleidingsaanbod","opleidingsaanbod"],
        ["Opdracht uitbreiding homepage","uitbreiding_homepage"]
    ].map(([n,p])=>({name:n,path:"Labo_3/"+p})),

    "Labo 4":[{name:"Opdracht 5",path:"Labo_4/homepage"}],
    "Labo 5":[{name:"Opdracht 6",path:"Labo_5/Opdracht_6"},{name:"Opdracht 7",path:"Labo_5/Opdracht_7"}],
    "Labo 6":[
        {name:"Opdracht 1",path:"Labo_6/Opdracht_1"},
        {name:"Opdracht cv",path:"Labo_6/Opdracht_cv/cv.html"},
        {name:"Opdracht 4",path:"Labo_6/Opdracht_4"},
        {name:"Opdracht 5",path:"Labo_6/Opdracht_5"},
        {name:"Opdracht 6",path:"Labo_6/Opdracht_6"}
    ],
    "Labo 7":[
        {name:"Nature blog",path:"Labo_7/Opgave_nature_blog"},
        {name:"Opdracht homepage",path:"Labo_7/homepage"},
        {name:"Opdracht kalender",path:"Labo_7/Opdracht_Kalender"}
    ],
    "Labo 8":[
        {name:"Lorem Ipsum",path:"Labo_8/Lorem_Ipsum"},
        {name:"Lorem Ipsum extra space",path:"Labo_8/Lorem_Ipsum_extra_space"},
        {name:"Opdracht cocktail bar",path:"Labo_8/opdracht_cocktailbar/loungestart.html"}
    ],
    "Labo 9":[
        {name:"Opdracht positioneren van images",path:"Labo_9/Opdracht_positioneren_van_images"},
        {name:"Opdracht airbus",path:"Labo_9/Opdracht_Airbus/airbus.html"}
    ],
    "Labo 10":[
        {name:"Opdracht Media Queries",path:"Labo_10/Beginsituatie_media_queries/oef1.html"},
        {name:"Opdracht Bootstrap 5",path:"Labo_10/Beginsituatie_Bootstrap_5"},
        {name:"Opdracht bootstrap 5 - 2",path:"Labo_10/opdracht_3"}
    ],
    "Labo 11":[
        {name:"Grid Exercises",path:"Labo_11/Grid_exercises/index.html"},
        {name:"Aparte Oefening",path:"Labo_11/Beginsituatie/index.html"}
    ],
    "Labo 12":[
        {name:"Opdracht 2",path:"Labo_12/Beginsituatie_1"},
        {name:"Opdracht 3",path:"Labo_12/Beginsituatie_2"},
        {name:"Opdracht 4",path:"Labo_12/Beginsituatie_3"}
    ],
    "Labo 13":[
        {name:"sjabloon oefeningen",path:"Labo_13"}
    ],
    "Labo 14":[
        {name:"Opdracht Arrays",path:"Labo_14/Opdracht_Arrays"},
        {name:"Opdracht Dialoogvensters",path:"Labo_14/Opdracht_Dialoogvensters"},
        {name:"Opdracht innerHTML",path:"Labo_14/Opdracht_innerHTML"},
        {name:"Opdracht kopieer",path:"Labo_14/Opdracht_kopieer"},
        {name:"Opdracht substring",path:"Labo_14/Opdracht_substring"}
    ],
    "Labo 15":[
        {name:"Opdracht Paragrafen",path:"Labo_15/Opdracht_Paragrafen"},
        {name:"Opdracht Colorpicker",path:"Labo_15/Opdracht_Colorpicker"},
        {name:"Opdracht Kleurenwisselaar",path:"Labo_15/Opdracht_Kleurenwisselaar"},
        {name:"Opdracht Producten",path:"Labo_15/Opdracht_Producten"}
    ],
    "Labo 16":[
        {name:"Opdracht Invulformulier",path:"Labo_16/Opdracht_Invulformulier"},
        {name:"Opdracht typeof",path:"Labo_16/Opdracht_typeof"},
        {name:"Opdracht Spaties op console",path:"Labo_16/Opdracht_spaties_op_console"},
        {name:"Opdracht Spaties met functies",path:"Labo_16/Opdracht_spaties_met_functies"},
        {name:"Opdracht Man van An",path:"Labo_16/Opdracht_man_van_an"}
    ],
    "Labo 17":[
        {name:"Opdracht Trigrams", path:"Labo_17/Opdracht_Trigrams"},
        {name:"Opdracht De En Het", path:"Labo_17/Opdracht_deEnHet"},
        {name:"Opdracht Gemeenten", path:"Labo_17/Opdracht_Gemeenten"},
        {name:"Opdracht Formwaarden", path:"Labo_17/Opdracht_formwaarden"},
        {name:"Opdracht Formvalidatie", path:"Labo_17/Opdracht_formvalidatie"}
    ],
    "Labo 18":[
        {name:"Opdracht_nodes1",path:"Labo_18/Opdracht_nodes1"},
        {name:"Opdracht_nodes2",path:"Labo_18/Opdracht_nodes2"},
        {name:"Opdracht_nodes3",path:"Labo_18/Opdracht_nodes3"},
        {name:"Opdracht_Colorpicker_uitbreiding", path:"Labo_18/Opdracht_Colorpicker_uitbreiding"},
    ]
};


const container = document.getElementById("content");

// Build dropdown menus
Object.entries(data).forEach(([title, items]) => {
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown";

    dropdown.innerHTML = `
        <div class="dropdown-header">
            ${title}
            <span>▶</span>
        </div>
        <div class="dropdown-content">
            <ol>
                ${items.map(i => `<li><a href="${i.path}">${i.name}</a></li>`).join("")}
            </ol>
        </div>
    `;

    container.appendChild(dropdown);
});

// Toggle open/closed
document.querySelectorAll(".dropdown").forEach(drop => {
    const header = drop.querySelector(".dropdown-header");
    const content = drop.querySelector(".dropdown-content");

    header.addEventListener("click", () => {
        const open = drop.classList.contains("open");

        drop.classList.toggle("open");

        content.style.maxHeight = open ? "0px" : content.scrollHeight + "px";
    });
});

// ===== LIVE SEARCH FUNCTION =====
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    document.querySelectorAll(".dropdown").forEach(drop => {
        const title = drop.querySelector(".dropdown-header").textContent.toLowerCase();
        const items = [...drop.querySelectorAll("li")];

        let match = false;

        // Check if labo title matches
        if (title.includes(query)) {
            match = true;
        }

        // Check if any item matches
        items.forEach(li => {
            const text = li.textContent.toLowerCase();
            li.style.display = text.includes(query) ? "list-item" : "none";
            if (text.includes(query)) match = true;
        });

        // Show/hide entire dropdown
        drop.style.display = match ? "block" : "none";

        // Auto-open dropdown when matching
        const content = drop.querySelector(".dropdown-content");
        if (query !== "") {
            drop.classList.add("open");
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            drop.classList.remove("open");
            content.style.maxHeight = "0px";
        }
    });
});


