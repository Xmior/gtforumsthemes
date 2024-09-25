// Temalar burada listelenir
const themes = [
  { name: "Sunny", image: "/themes/sunny/weather_sunny.png" },
  { name: "Night", image: "/themes/night/weather_night.png" },
  { name: "Rainy", image: "/themes/rainy/weather_rainy.png" },
  { name: "Beach", image: "/themes/beach/weather_beach.png" },
  { name: "Arid", image: "/themes/arid/weather_arid.png" },
  { name: "Harvest", image: "/themes/harvest/weather_harvest.png" },
  { name: "Mars", image: "/themes/mars/weather_mars.png" },
  { name: "Spooky", image: "/themes/spooky/weather_spooky.png" },
  { name: "Snowy", image: "/themes/snowy/weather_snowy.png" },
  { name: "Snowy Night", image: "/themes/snowy_night/weather_snowy_night.png" },
  { name: "Undersea", image: "/themes/undersea/weather_undersea.png" },
  { name: "Comet", image: "/themes/comet/weather_comet.png" },
  { name: "Spring", image: "/themes/spring/weather_spring.png" },
  { name: "Padoga", image: "/themes/pagoda/weather_pagoda.png" },
  { name: "Apocalypse", image: "/themes/apocalypse/weather_apocalypse.png" },
  { name: "Jungle", image: "/themes/jungle/weather_jungle.png" },
  { name: "BalloonWarz", image: "/themes/balloonwarz/weather_balloonwarz.png" },
  { name: "Autumn", image: "/themes/autumn/weather_autumn.png" },
  { name: "Valentine's", image: "/themes/valentines/weather_valentines.png" },
  { name: "St. Paddy's Day", image: "/themes/st_paddys_day/weather_st_paddys_day.png" },
  { name: "Iceberg", image: "/themes/iceberg/weather_iceberg.png" },
  { name: "Flying Castles", image: "/themes/flying_castles/weather_flying_castles.png" },
  { name: "Volcano", image: "/themes/volcano/weather_volcano.png" },
  { name: "Digital Rain", image: "/themes/digital_rain/weather_digital_rain.png" },
  { name: "Monochrome", image: "/themes/monochrome/weather_monochrome.png" },
  { name: "Frozen Cliffs", image: "/themes/frozen_cliffs/weather_frozen_cliffs.png" },
  { name: "SurgWorld", image: "/themes/surgworld/weather_surgworld.png" },
  { name: "Bountiful", image: "/themes/bountiful/weather_bountiful.png" },
  { name: "Ascended", image: "/themes/ascended/weather_ascended.png" },
  { name: "Descended", image: "/themes/descended/weather_descended.png" },
  { name: "Celebrity Hills", image: "/themes/celebrity_hills/weather_celebrity_hills.png" },
  { name: "Legendary City", image: "/themes/legendary_city/weather_legendary_city.png" },
  { name: "Blood Dragon", image: "/themes/blood_dragon/weather_blood_dragon.png" },
  { name: "Prince Of Persia", image: "/themes/prince_of_persia/weather_prince_of_persia.png" },
  { name: "Nebula", image: "/themes/nebula/weather_nebula.png" },
  { name: "Protostar Landing", image: "/themes/protostar_landing/weather_protostar_landing.png" },
  { name: "Dark Mountains", image: "/themes/dark_mountains/weather_dark_mountains.png" },
  { name: "Assasin", image: "/themes/assasin/weather_assasin.png" },
  { name: "Mt. Growmore", image: "/themes/mt_growmore/weather_mt_growmore.png" },
  { name: "Crack On Reality", image: "/themes/crack_on_reality/weather_crack_on_reality.png" },
  { name: "Nian’s Mountain", image: "/themes/nian_mountain/weather_nian_mountain.png" },
  { name: "Rayman", image: "/themes/rayman/weather_rayman.png" },
  { name: "SteamPunk", image: "/themes/steampunk/weather_steampunk.png" },
  { name: "Realm’s of Spirits", image: "/themes/realms_of_spirits/weather_realms_of_spirits.png" },
  { name: "Rainin’ Gems", image: "/themes/rainin_gems/weather_rainin_gems.png" },
  { name: "Holiday Haven", image: "/themes/holiday_haven/weather_holiday_haven.png" },
  { name: "Immortals Fenyx Rising", image: "/themes/immortals_fenyx_rising/weather_immortals_fenyx_rising.png" },
  { name: "Neptune's Atlantis", image: "/themes/neptunes_atlantis/weather_neptunes_atlantis.png" },
  { name: "Pinuski's Petal Purrfect Haven", image: "/themes/pinuski_petals/weather_pinuski_petals.png" }
];

let selectedTheme = null;

// Tema listesini doldur
const themeGrid = document.getElementById('theme-grid');
themes.forEach((theme) => {
    let themeBtn = document.createElement('div');
    themeBtn.classList.add('theme-btn');
    themeBtn.style.backgroundImage = `url(${chrome.runtime.getURL(theme.image)})`; // Arka plan resmi

    let label = document.createElement('span');
    label.textContent = theme.name;

    themeBtn.appendChild(label);
    themeGrid.appendChild(themeBtn); // Butonu tema ızgarasına ekle

    // Butona tıklandığında temayı seç
    themeBtn.addEventListener('click', function() {
        selectedTheme = theme.image;
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.style.borderColor = '#ddd';
        });
        themeBtn.classList.add('active');
        themeBtn.style.borderColor = '#4CAF50';
    });
});

// Apply butonuna basıldığında seçili temayı uygula
document.getElementById('apply-button').addEventListener('click', function() {
    if (selectedTheme) {
        // Seçilen temayı kaydet
        chrome.storage.sync.set({ selectedTheme: selectedTheme }, function() {
            console.log('Theme set to ' + selectedTheme);

            // Aktif sekmeyi yenile
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                if (tabs.length > 0) {
                    // Seçilen temayı aktif sekmeye gönder
                    chrome.tabs.sendMessage(tabs[0].id, { theme: selectedTheme });

                    // Sayfayı yenile
                    chrome.tabs.reload(tabs[0].id);
                } else {
                    console.error('No active tab found!');
                }
            });
        });
    } else {
        alert("Please select a theme first!");
    }
});
