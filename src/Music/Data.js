const MUSIC_LIST = [
	{name:"Anomalies Abound",               by:"Eric Matyas", site:"https://soundimage.org/drama-2/", siten:"SoundImage.org"},
	{name:"Beatdown City",                  by:"Darren Curtis", yt:"qL4u3u5WKgU", site:"https://www.darrencurtismusic.com", siten:"DarrenCurtisMusic.com", pat:"darrencurtismusic"},
	{name:"Blast",                          by:"PeriTune",    site:"https://peritune.com/blast/", siten:"PeriTune.com", sc:"sei_peridot/blast"},
	{name:"Boat Paint",                     by:"Al Gorgeous", sc:"al-goregous/boat-paint"},
	{name:"Breeze",                         by:"PeriTune",      yt:"RINkM_o-e4I", site:"https://peritune.com/breeze/", siten:"PeriTune.com", sc:"sei_peridot/breeze"},
	{name:"Breeze 2",                       by:"PeriTune",      yt:"fVm5ul0y0kk", site:"https://peritune.com/breeze2/", siten:"PeriTune.com", sc:"sei_peridot/breeze2"},
	{name:"Chamber of Jewels",              by:"Eric Matyas", site:"https://soundimage.org/fantasy-5/", siten:"SoundImage.org"},
	{name:"Dark Anthem",                    by:"Darren Curtis", yt:"G-VY51L2AQU", site:"https://www.darrencurtismusic.com", siten:"DarrenCurtisMusic.com", pat:"darrencurtismusic"},
	{name:"Decisions",                      by:"Eric Matyas", site:"https://soundimage.org/introspective/", siten:"SoundImage.org", bpm:95.34},
	{name:"Demise",                         by:"PeriTune",      yt:"Ouj_cwWJdmo", site:"https://peritune.com/demise/", siten:"PeriTune.com", sc:"sei_peridot/demise"},
	{name:"Dueling With Cyborg Ninjas",     by:"Darren Curtis", yt:"j1TSpz7Itso", site:"https://www.darrencurtismusic.com", siten:"DarrenCurtisMusic.com", pat:"darrencurtismusic"},
	{name:"Exotic",                         by:"PeriTune",      yt:"ykiWQdzt4GI", site:"https://peritune.com/exotic/", siten:"PeriTune.com", sc:"sei_peridot/exotic"},
	{name:"Fantasy Game Background",        by:"Eric Matyas", site:"https://soundimage.org/fantasywonder/", siten:"SoundImage.org"},
	{name:"Glory Eternal",                  by:"Darren Curtis", yt:"Qx1ypzkhTy0", site:"https://www.darrencurtismusic.com", siten:"DarrenCurtisMusic.com", pat:"darrencurtismusic"},
	{name:"Gothic Dark",                    by:"PeriTune",      yt:"brZWB8cdBDs", site:"https://peritune.com/gothic_dark/", siten:"PeriTune.com", sc:"sei_peridot/gothic-dark"},
	{name:"Hong Kong Midnight",             by:"Eric Matyas", site:"https://soundimage.org/world/", siten:"SoundImage.org"},
	{name:"Light Years",                    by:"Eric Matyas", site:"https://soundimage.org/naturescience-2/", siten:"SoundImage.org"},
	{name:"Magical Getaway",                by:"Eric Matyas", site:"https://soundimage.org/aerial-drone-2/", siten:"SoundImage.org"},
	{name:"Maleficent Mysticism",           by:"Darren Curtis", yt:"20ZsqH6rb6Y", site:"https://www.darrencurtismusic.com", siten:"DarrenCurtisMusic.com", pat:"darrencurtismusic"},
	{name:"Massacre on Teddy Bear Hill",    by:"Darren Curtis", yt:"qG5e8cmoL_s", site:"https://www.darrencurtismusic.com", siten:"DarrenCurtisMusic.com", pat:"darrencurtismusic"},
	{name:"Mountainside",                   by:"Eric Matyas", site:"https://soundimage.org/quiet-peaceful-mellow/", siten:"SoundImage.org"},
	{name:"Move it Out",                    by:"Eric Matyas", site:"https://soundimage.org/epic-battle/", siten:"SoundImage.org"},
	{name:"Mysterious Deep",                by:"Eric Matyas", site:"https://soundimage.org/nature-science-3/", siten:"SoundImage.org"},
	{name:"Night 2",                        by:"PeriTune",      yt:"GO8FavhnqiU", site:"https://peritune.com/night2/", siten:"PeriTune.com"},
	{name:"Pay The Reaper",                 by:"Darren Curtis", yt:"_fjnQMHrk0k", site:"https://www.darrencurtismusic.com", siten:"DarrenCurtisMusic.com", pat:"darrencurtismusic"},
	{name:"Rapid 2",                        by:"PeriTune",    site:"https://peritune.com/rapid2/", siten:"PeriTune.com", sc:"sei_peridot/rapid2"},
	{name:"Reaching Altitude",              by:"Eric Matyas", site:"https://soundimage.org/aerial-drone/", siten:"SoundImage.org"},
	{name:"Remote Island",                  by:"Eric Matyas", site:"https://soundimage.org/naturescience-2/", siten:"SoundImage.org"},
	{name:"Samurai Sake Showdown",          by:"Darren Curtis", yt:"NOGZX7Z4wSI", site:"https://www.darrencurtismusic.com", siten:"DarrenCurtisMusic.com", pat:"darrencurtismusic"},
	{name:"Sculpture Garden",               by:"Eric Matyas", site:"https://soundimage.org/classical-sounding/", siten:"SoundImage.org"},
	{name:"Seahorse Dreams",                by:"Kubbi",         yt:"DLvrDRRaftQ", site:"https://kubbimusic.com/track/seahorse-dreams"},
	{name:"Star Light",                     by:"Eric Matyas", site:"https://soundimage.org/naturescience-2/", siten:"SoundImage.org"},
	{name:"Strategy 3",                     by:"PeriTune",      yt:"tqS-DwicQCo", site:"https://peritune.com/strategy3/", siten:"PeriTune.com", sc:"sei_peridot/strategy3"},
	{name:"Surreal Chase",                  by:"Eric Matyas", site:"https://soundimage.org/action/", siten:"SoundImage.org"},
	{name:"Tempest",                        by:"Darren Curtis", yt:"NsSYDbyQteg", site:"https://www.darrencurtismusic.com", siten:"DarrenCurtisMusic.com", pat:"darrencurtismusic"},
	{name:"The Darkness Below",             by:"Eric Matyas", site:"https://soundimage.org/dark-ominous/", siten:"SoundImage.org"},
	{name:"The Inspector's Epiphany",       by:"Eric Matyas", site:"https://soundimage.org/drama-2/", siten:"SoundImage.org"},
	{name:"The Old Country Farm",           by:"Darren Curtis", yt:"HPt2ngfRQ8I", site:"https://www.darrencurtismusic.com", siten:"DarrenCurtisMusic.com", pat:"darrencurtismusic"},
	{name:"The Triumph of the Clock Maker", by:"Eric Matyas", site:"https://soundimage.org/fantasy-5/", siten:"SoundImage.org"},
	{name:"Underwater Coolness",            by:"Eric Matyas", site:"https://soundimage.org/nature-science-3/", siten:"SoundImage.org"},
	{name:"Up In My Jam (All Of A Sudden)", by:"Kubbi",         yt:"6DB6hBRPsWc", site:"https://kubbimusic.com/track/up-in-my-jam-all-of-a-sudden"},
	{name:"War of the Pianos",              by:"Darren Curtis", yt:"CP8HoV4ArHw", site:"https://www.darrencurtismusic.com", siten:"DarrenCurtisMusic.com", pat:"darrencurtismusic"},
	{name:"Wicked Dreams",                  by:"Eric Matyas", site:"https://soundimage.org/horrorsurreal/", siten:"SoundImage.org"},
	{name:"Whisper 2",                      by:"PeriTune",      yt:"VT2P3ZEuZWE", site:"https://peritune.com/whisper2/", siten:"PeriTune.com", sc:"sei_peridot/whisper2"},
];
var MUSIC_HASH = {};
MUSIC_LIST.forEach(function(sing, dex) {
	sing.description = "\"" + sing.name + "\" by " + sing.by + ". Click to listen.";
	MUSIC_HASH[sing.name + " - " + sing.by] = sing;
	MUSIC_HASH[sing.name] = sing;
	sing.index = dex;
	sing.siteList = [];
	if (sing.site)
		sing.siteList.push({name:sing.siten, href:sing.site});
	if (sing.yt)
		sing.siteList.push({name:"YouTube", href:"https://www.youtube.com/watch?v="+sing.yt});
	if (sing.sc)
		sing.siteList.push({name:"SoundCloud", href:"https://soundcloud.com/"+sing.sc});
	if (sing.pat)
		sing.siteList.push({name:"Patreon", href:"https://www.patreon.com/"+sing.pat});
});