console.log("nigger")



import {setNavEnglish, setNavSpanish, setNavCzech} from "./nav-language.js";

const videos = [
    [    
        {
            name: "Grónská PARODIE",
            tags: ["parodie", "nohavica", "gronska", "gronsko"],
            format: "long-video",
            url: "https://www.youtube.com/watch?v=3WOsehrd7-A",
            thumbnail: "https://i.ytimg.com/vi/3WOsehrd7-A/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AG0B4AC0AWKAgwIABABGH8gQSgVMA8=&rs=AOn4CLAdPcx3P35c8sWJ8I16RU3cYs0YXw",
            published: 250529,
            views: 10,
            description: {
                cz: "Vtipná parodie písničky od Jaromíra Nohavicy jménem Grósnká písnička. Video obsahuje originální video písně a přidané, humoristické, krátké pasáže z internetu.",
                en: "Funny parody of the song 'Grósnká písnička' (Greenlandic Song) by Jaromír Nohavica. The video contains the original song video and added, humorous, short passages from the internet.",
                es: "Un vídeo muy divertido y un poco loco. Es una parodia de la canción 'Grósnká písnička' (Canción groenladesa) de Jaromír Nohavica."
            }
         }, 
         {
            name: "CHALLENGE, VYDRŽ 24 HODIN V DIVOČINĚ!",
            format: "long-video",
            tags: ["challenge", "unbeliaveable", "wow", "divočina", "competition", "wild"],
            url: "https://www.youtube.com/watch?v=fH6_QwWP8s8",
            thumbnail: "https://i.ytimg.com/vi/fH6_QwWP8s8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDcOarie59sfW1Co4sphsN3HZZUoQ", 
            published: 240722,
            views: 70,
            description: {
                cz: "Toto video bylo natočeno v Bezkydech v roce 2024. Jedná se o parodii. Kvalita není nejlepší, protože video bylo natočeno a sestříháno na telefonu.",
                en: "This video was shot in Bezkydy in 2024. It's a parody. The quality is not the best, because the video was shot and edited on a phone. ",
                es: "Este vídeo fue filmado en Bezkydy en el año 2024. Es una parodia. La calidad no es buena, porque el vídeo fue filmado con teléfono."
            }
        },
        
        {
            name: "Porovnávání Pití",
            tags: ["rýbaaróba", "fizi", "mogumogu", "recenze", "pití"],
            format: "long-video",
            url: "https://www.youtube.com/watch?v=YJFmlnUIaVc&t=0s",
            thumbnail: "https://i.ytimg.com/vi/YJFmlnUIaVc/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHOBYACgAqKAgwIABABGGUgTyhCMA8=&rs=AOn4CLCoStb1dIqyiq6E-SuyaPTD-XjF0w",
            published: 240518,
            views: 60,
            description: {
                cz: "Tohle video je porovnání a recenze pití Fizi drink Ultra Boris a Mogu Mogu Grapes.",
                en: "This video is a comparison and review of Fizi drink Ultra Boris and Mogu Mogu Grapes.",
                es: "Este vídeo es una compración de bebidas: Fizi drink Ultra Boris y Mogu Mogu Grapes."
            }
        },
        
        {
            name: "Helicopter landing in Qaqortoq, Greenland",
            tags: [],
            format: "long-video",
            url: "https://www.youtube.com/watch?v=xYNBdQUCtAk",
            thumbnail: "https://i.ytimg.com/vi/xYNBdQUCtAk/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGFUgXihlMA8=&rs=AOn4CLDnjOyW0gMOP7yPk-ZEQtloWTSPOg",
            published: 231014,
            views: 61,
            description: {
                cz: "Video s velmi špatnou kvalitou, natočeno v Qaqortoq, jížní Grónsko 2023.",
                en: "Very poor quality video, shot in Qaqortoq, South Greenland 2023.",
                es: "Un vídeo con muy mala calidad, Sur Groenlandica 2023."
            }
        }
    ], 

    [
        {
            name: "When you finish your Duolingo lesson...",
            tags: ["duolingo", "annoying"],
            format: "short",
            url: "https://www.youtube.com/shorts/Lr4zL5Qg_jM",
            thumbnail: "https://i.ytimg.com/vi/Lr4zL5Qg_jM/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDCj8K5aYN19HRMqoyFC7cXrY3UYA",
            published: 240809,
            views: 580,
            description: {
              cz: "Toto video ukazuje jak otravný design má Duolingo.",
              en: "This video shows the annoying design of Duolingo.",
              es: "Este video muestra lo molesto que es el diseño de Duolingo."
            }
        },
        
        {
            name: "Helicopter Take-off from Narsaq, Greenland.",
            tags: ["greenland", "takeoff", "helicopter", "nature"],
            format: "short",
            url: "https://www.youtube.com/shorts/lgKVcH67QFU",
            thumbnail: "https://i.ytimg.com/vi/lgKVcH67QFU/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAiT53mVVy8AyPTDeVkmJEtY3KgFA",
            published: 231014,
            views: 190,
            description: {
                cz: "Video natočeno z helikoptéry Air Greenland při odletu z Narsaqu, jížní Grónsko 2023.",
                en: "Video shot from an Air Greenland helicopter departing from Narsaq, South Greenland 2023.",
                es: "Video que fue filmado desde de un Air Greenland helicóptero que se sale de Narsaq, Sur Groenlandica 2023. "
            },
        },
        
        {
            name: "Landing in Nuuk, Greenland. (Time-lapse video)",
            tags: ["landing", "greenland", "nuuk"],
            format: "short",
            url: "https://www.youtube.com/shorts/b0G6XIKggnM",
            thumbnail: "https://i.ytimg.com/vi/b0G6XIKggnM/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDuBrqrO2495awW2MVOYRTkJ_CjHw",
            published: 231218,
            views: 2260,
            description: {
                cz: "Zrychlené video natočeno z letadla Air Greenland Dash 8-200 při přistání v Nuuku, Grónsko 2023.",
                en: "Time-lapse video shot from an Air Greenland Dash 8-200 landing in Nuuk, Greenland 2023.",
                es: "Un vídeo de laspso de tiempo que fue filmado desde un Air Greenland Dash 8-200 durante aterrizaje en Nuuk, Groenlandica, 2023"
            }
        },
        
        {
            name: "Confused blind man falls into a pool😨😨😨",
            tags: ["pool"],
            format: "short",
            url: "https://www.youtube.com/shorts/6uuQ894GgRo",
            thumbnail: "https://i.ytimg.com/vi_webp/6uuQ894GgRo/oar2.webp",
            published: 240101,
            views: 410,
            description: {
                cz: "Vtipné videjko.",
                en: "Funny video.",
                es: "Un vídeo divertido."
            },
        },
        
        {
            name: "Fish",
            tags: [],
            format: "short",
            url: "https://www.youtube.com/shorts/bnxfX8hfcV4",
            thumbnail: "https://i.ytimg.com/vi/bnxfX8hfcV4/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDsXY0-Q-JhHHeFo0i8_yZZf48mVA",
            published: 240121,
            views: 2530,
            description: {
                cz: "Video ryby žijicí v Brněnské zoo.",
                en: "Video of a fish in Brno zoo.",
                es: "Vídeo de un pez en el zoológico de Brno."
            }
        },
        
        {
            name: "How to SIGMA Bacon",
            tags: ["ohio", "sigma", "bacon", "brawlstars", "amazing", "iphone", "lifehack", "hashtag", "subscribe"],
            format: "short",
            url: "https://www.youtube.com/shorts/NsQ5hgQtVRI",
            thumbnail: "https://i.ytimg.com/vi/NsQ5hgQtVRI/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDzCO7CDVTKzRYkAhR_j3y307cq6w",
            published: 240601,
            views: 60,
            description: {
                cz: "Návod jak na operačním systému iOS mýt jednu aplikaci mnohokrát.",
                en: "Tutorial how to have the same app many times on iOS.",
                es: "Tutorial sobre cómo tener la misma aplicación varias veces en iOS."
            }
        },
        
        {
            name: "Sermitsiaq mountain waterfall near Nuuk, Greenland.",
            tags: ["greenland", "nuuk", "nature"],
            format: "short",
            url: "https://www.youtube.com/shorts/90DLZ6ggwpA",
            thumbnail: "https://i.ytimg.com/vi/90DLZ6ggwpA/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLB13-Kmtha1qDsbpRgPZGvMl8C2hA",
            published: 231227,
            views: 210,
            description: {
                cz: "Video natočeno z lodě. Vodopád na hoře Sermitisiaq u Nuuku, zapadní Grónsko 2023.",
                en: "Video taken from a boat. Waterfall on Sermitsiaq mountain near Nuuk, West Greenland 2023.",
                es: "Un vídeo que fue filmado desde un barco. Cascada encima Sermitsiaq montaña, Oeste Groenlandica 2023."
            }
        },
        
        {
            name: "To je výhodné...!!!",
            tags: ["rýbaaróba", "amazing", "neuvěřitelné", "wow", "subscribe"],
            format: "short",
            url: "https://www.youtube.com/shorts/TQSxm-uGIy0",
            thumbnail: "https://i.ytimg.com/vi/TQSxm-uGIy0/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDy_IzaTZgRxkstb3DFQ6ljxKDpIQ",
            published: 240702,
            views: 61,
            description: {
                cz: "Odebírejte! Natočeno v Brně.",
                en: "Subscribe! Shot in Brno.",
                es: "Subsribir! Filmado en Brno."
            }
        },
        
        {
            name: "Dog hunting mice",
            tags: ["dog", "mice", "animals", "vysočina", "písečné"],
            format: "short",
            url: "https://www.youtube.com/shorts/hPVRGMevKCk",
            thumbnail: "https://i.ytimg.com/vi/hPVRGMevKCk/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLB3XMHlcDNHunydLJDRix60_XTY9w",
            published: 240719,
            views: 520,
            description: {
                cz: "Video jak pes loví miši na Vsočině.",
                en: "Video of dog hunting mice in Vysočina.",
                es: "Vídeo de un perro de caza."
            }
        },
    
        {
            name: "Odebíráte kanál Tadeas Tolver?",
            tags: ["odebírej"],
            format: "short",
            url: "https://www.youtube.com/shorts/jrpK67BJ4OE",
            thumbnail: "https://i.ytimg.com/vi/jrpK67BJ4OE/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAYi8YVpOETkMJ5A-1U4nHwZh2CXg",
            published: 240809,
            views: 30,
            description: {
              cz: "Odebírejte! Natočeno na Vysočině",
              en: "Subscribe! Shot in Vysočina.",
              es: "Subscribir! Filmado en Vysočina."
            }
        },
        
        {
            name: "První lesní žebrák v ČR.",
            tags: [],
            format: "short",
            url: "https://www.keysigns.co.uk/images/no-access-signs-p1310-40478_zoom.jpg",
            thumbnail: "https://imgur.com/Pjj696b.jpg",
            published: 207,
            views: 0,
            description: {
                cz: "V tomto velice vtipném video je výletář se psem který si užívá výlet. Výletář však potká nepřijemného lesního žebráka.",
                en: "In this funny video, there is a hiker with a dog enjoying their trip. However, the hiker meets an disgusting forest beggar.",
                es: "En este vídeo muy divertido aparece un excursionista con un perro disfrutando del viaje. Sin embargo, el excursionista se encuentra con un desagradable mendigo del bosque."
            }
        },
     
        {
            name: "Ochutnávání Skittles Giants Gooey",
            tags: ["skittles", "candy"],
            format: "short",
            url: "https://www.youtube.com/shorts/GTDKrA7ypsE",
            thumbnail: "https://i.ytimg.com/vi/GTDKrA7ypsE/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAvOxwTfkjAjjm2_BVEZN2C1TvDvQ",
            published: 240819,
            views: 50,
            description: {
              cz: "Ochutnávání Skittles Giants Gooey (sestra tam ruší!).",
              en: "Skittles Giants Gooey review.",
              es: "Reseña de Skittles Giants Gooey."
            }
        },
            
        {
            name: "Dog dreaming",
            tags: ["dog", "dream", "pet"],
            format: "short",
            url: "https://www.youtube.com/shorts/E3AZdyGV4j0",
            thumbnail: "https://i.ytimg.com/vi/E3AZdyGV4j0/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLABJoyGkEXAzB60ppOKU7FZNV6B4g",
            published: 240820,
            views: 270,
            description: {
              cz: "Video spícího psa.",
              en: "Video of a sleeping dog.",
              es: "Vídeo de un perro durmiendo."
            }
        },
            
        {
            name: "Dog wont let go of tennis ball",
            tags: ["dog"],
            format: "short",
            url: "https://www.youtube.com/shorts/8M8H24A40_o",
            thumbnail: "https://imgur.com/M7XvA0T.jpg",
            published: 241103,
            views: 520,
            description: {
              cz: "V tomto video pes nechce pustit tenisový míč.",
              en: "In this video, the dog won't let go of the tennis ball.",
              es: "En este vídeo hay un perro que no quiere soltar la pelota de tenis."
            }
        }
    ]
];

const longVideosCon = document.querySelector("#long-videos-con");
const shortsCon = document.querySelector("#shorts-con");
const ytSearch = document.querySelector("#yt-search");
const labelForOrder = document.querySelector("#label-for-order");
const newestOption = document.querySelector("#newest");
const viewestOption = document.querySelector("#viewest");
const searchBar = document.querySelector("#yt-search");
const searchButton = document.querySelector("#search-button");

let language = localStorage.getItem("language");

if (language === "en") {
    setNavEnglish();
    ytSearch.placeholder = "Search for videos";
    labelForOrder.innerHTML = "Order:";
    newestOption.innerHTML = "🕒 Newest.";
    viewestOption.innerHTML = "👁️ Most viewed.";
} else if (language === "es") {
    setNavSpanish();
    ytSearch.placeholder = "Busca vídeos";
    labelForOrder.innerHTML = "Orden:";
    newestOption.innerHTML = "🕒 Más nuevo.";
    viewestOption.innerHTML = "👁️ Más visto.";
} else {
    setNavCzech();
    ytSearch.placeholder = "Hledejte videa";
    labelForOrder.innerHTML = "Řazení:";
    newestOption.innerHTML = "🕒 Nejnovější.";
    viewestOption.innerHTML = "👁️ Nejvzhlédnutější.";
}



const bubbleSort = (array, data) => {
    const len = array.length;
    
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
          if (array[j][data] < array[j + 1][data]) {
              // swap
              const temp = array[j];
              array[j] = array[j + 1];

              array[j + 1] = temp;
          }
       }
    }
};

async function getViews(videoId) {
    const apiKey = "AIzaSyAuayuzV6BxekZTH6rjqcrLyHJwvPh9Q6M";
    const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
        const views = data.items[0].statistics.viewCount;
        return views;
    } else {
        throw new Error("Not found.");
    }
}

console.log(getViews("3WOsehrd7-A"));

function renderVideos() {
    let order = document.querySelector("#order-select").value;
    
    if (order === "🕒 Nejnovější." || order === "🕒 Newest." || order === "🕒 Más nuevo.") {
       bubbleSort(videos[0], "published");  
       bubbleSort(videos[1], "published");
    } else if (order === "👁️ Nejvzhlédnutější." || order === "👁️ Más visto." || order === "👁️ Most viewed.") {
       bubbleSort(videos[0], "views");       
       bubbleSort(videos[1], "views");       
    }
    
    longVideosCon.innerHTML = "";
    shortsCon.innerHTML = "";
    videos.forEach((videoGroup) => {
        videoGroup.forEach((video) => {
            let container;

            if (video.format === "long-video") {
                container = longVideosCon;
            } else {
                container = shortsCon;
            }

            container.innerHTML += `
                <div class="${video.format}-con" id="${video.name.slice(0, 6).replace(/\s+/g, "") + video.name.length}">
                    <img src="${video.thumbnail}" class="${video.format}-image"/>
                    <div class="${video.format}-text-con">
                       <a href="${video.url}" target="_blank" style="text-decoration: none;"><h2 class="video-title ${(video.format === "short") ? "short-video-title" : ""}">${video.name}</h2></a>
                       <p class="video-text ${(video.format === "short") ? "short-video-text" : ""}">${video.description[language]}</p>             
                    </div>
                </div>
                
                
            `;
        });
    });
}

renderVideos();
document.querySelector("#order-select").addEventListener("change", renderVideos);


function searchFunction() {
    const search = searchBar.value.toLowerCase().replace(/\s+/g, "");
    let count = videos[0].length + videos[1].length; 
    
    videos[0].forEach((video) => {
        document.querySelector(`#${video.name.slice(0, 6).replace(/\s+/g, "") + video.name.length}`).classList.remove("hide");
        if (!(video.description[language].toLowerCase().replace(/\s+/g, "").includes(search)) && !(search in video.tags) && !(video.name.toLowerCase().replace(/\s+/g, "").includes(search))) {
            document.querySelector(`#${(video.name.slice(0, 6)).replace(/\s+/g, "") + video.name.length}`).classList.add("hide");
            count --;
        }
    });
    videos[1].forEach((video) => {
        document.querySelector(`#${video.name.slice(0, 6).replace(/\s+/g, "") + video.name.length}`).classList.remove("hide");
        if (!(video.description[language].toLowerCase().replace(/\s+/g, "").includes(search)) && !(search in video.tags) && !(video.name.toLowerCase().replace(/\s+/g, "").includes(search))) {
            document.querySelector(`#${video.name.slice(0, 6).replace(/\s+/g, "") + video.name.length}`).classList.add("hide");
            count --;
        }
    });
    
    if (count === 0) {
        document.querySelector("#no-results").style.display = "block";
    } else {
        document.querySelector("#no-results").style.display = "none";
    }
}

ytSearch.addEventListener("keyup", () => {
  if (event.key === "Enter") {
    searchFunction();   
  }
});

searchButton.addEventListener("click", () => {
    searchFunction();
});



