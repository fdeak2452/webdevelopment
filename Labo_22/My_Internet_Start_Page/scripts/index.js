const setup = () => {
    const global = {
        search: document.getElementById('search'),
        sortSelect: document.getElementById('sort-order'), // Nieuwe referentie
        platforms: {
            "/g": { name: "Google", url: "https://www.google.com/search?q=", color: "#4285F4" },
            "/y": { name: "YouTube", url: "https://www.youtube.com/results?search_query=", color: "#FF0000" },
            "/x": { name: "X", url: "https://x.com/hashtag/", color: "#000000" },
            "/i": { name: "Instagram", url: "https://www.instagram.com/explore/tags/", color: "#C32AA3" }
        }
    };

    const searchBtn = document.getElementById("search-btn");

    const zoekenAndSave = () => {
        const input = global.search.value.trim();

        if (!input.startsWith("/") || !input.includes(" ")) {
            alert("Ongeldig commando! Gebruik: /[prefix] [zoekterm]");
            return;
        }

        const prefix = input.substring(0, 2);
        const query = input.substring(3);
        const platform = global.platforms[prefix];

        if (!platform) {
            alert("Onbekende prefix! Gebruik /g, /y, /x of /i.");
            return;
        }

        const fullUrl = platform.url + query;
        const newHistoryItem = {
            title: platform.name,
            text: query,
            url: fullUrl,
            color: platform.color,
            date: new Date().toISOString()
        };

        const currentHistory = JSON.parse(localStorage.getItem("search.history")) || [];
        currentHistory.push(newHistoryItem);
        localStorage.setItem("search.history", JSON.stringify(currentHistory));

        window.open(fullUrl, '_blank');
        global.search.value = "";
        createCards();
    };

    const createCards = () => {
        const container = document.getElementById("history-container");
        let history = JSON.parse(localStorage.getItem("search.history")) || [];

        const sortValue = global.sortSelect.value;
        history.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sortValue === "newest" ? dateB - dateA : dateA - dateB;
        });

        container.replaceChildren();

        history.forEach((item) => {
            const col = document.createElement("div");
            col.className = "col-12 col-md-4 mb-4";

            const dateString = new Date(item.date).toLocaleString('nl-NL', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });

            const dateLabel = document.createElement("div");
            dateLabel.className = "text-muted small mb-1 fw-bold";
            dateLabel.textContent = dateString;

            const card = document.createElement("div");
            card.className = "card text-white h-100";
            card.style.backgroundColor = item.color;

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            const title = document.createElement("h5");
            title.className = "card-title";
            title.textContent = item.title;

            const text = document.createElement("p");
            text.className = "card-text";
            text.textContent = item.text;

            const link = document.createElement("a");
            link.className = "btn btn-light btn-sm";
            link.href = item.url;
            link.target = "_blank";
            link.textContent = "Go!";

            cardBody.append(title, text, link);
            card.appendChild(cardBody);

            col.append(dateLabel, card);
            container.appendChild(col);
        });
    };

    searchBtn.addEventListener("click", zoekenAndSave);
    global.sortSelect.addEventListener("change", createCards);
    createCards();
};
window.addEventListener("load", setup);