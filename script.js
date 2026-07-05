// ===== CHANNEL DATA from M3U Playlist =====
const channels = [
    // --- BANGLA ---
    { name: "BTV", group: "BANGLA", logo: "https://ssl.com.bd/sites/default/files/BTV%20Logo%20Gallery.png", url: "http://198.195.239.50:8095/btv/tracks-v1a1/mono.m3u8" },
    { name: "Sangshod TV", group: "BANGLA", logo: "https://ssl.com.bd/sites/default/files/BTV%20Logo%20Gallery.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8" },
    { name: "SOMOY TV", group: "BANGLA", logo: "https://dl.dropbox.com/s/leielj83em5kg7h/somoy_news.png", url: "http://198.195.239.50:8095/somoyTv/tracks-v1a1/mono.m3u8" },
    { name: "Ekattor TV", group: "BANGLA", logo: "https://s4.gifyu.com/images/imagea02f4314e761661d.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/index.m3u8" },
    { name: "Channel-1", group: "BANGLA", logo: "https://static.wikia.nocookie.net/logopedia/images/2/2a/Channel_1_Logo_Bangladesh.svg/revision/latest?cb=20260205224305", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8" },
    { name: "Channel 24", group: "BANGLA", logo: "https://dl.dropbox.com/s/puf12xv5flgbnz5/channel24_bd.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8" },
    { name: "Independent TV", group: "BANGLA", logo: "https://dl.dropbox.com/s/7xwwb8hetz3w8rp/independent_tv.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8" },
    { name: "Jamuna TV", group: "BANGLA", logo: "https://dl.dropbox.com/s/k7z1dsec1jfjbkn/jamuna_tv_bd.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8" },
    { name: "NEWS 24 HD", group: "BANGLA", logo: "https://dl.dropbox.com/s/bl983avhouqd47c/news_24_bd.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1708/output/index.m3u8" },
    { name: "DBC News", group: "BANGLA", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9f/DBC_News_logo.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1728/output/index.m3u8" },
    { name: "Ekhon TV", group: "BANGLA", logo: "https://upload.wikimedia.org/wikipedia/en/0/0d/Ekhon_Logo.png", url: "https://stream.ottplus.live/live/ekhon_tv_abr/live/ekhon_tv_hd_720/chunks.m3u8" },
    { name: "ATN NEWS", group: "BANGLA", logo: "https://dl.dropbox.com/s/4ldi1dp09s8o6bm/atn_news_bd.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8" },
    { name: "ATN Bangla", group: "BANGLA", logo: "https://s6.gifyu.com/images/image27cfa7002786c232.png", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/atnbd-8-org.stream/tracks-v1a1/mono.m3u8" },
    { name: "NTV", group: "BANGLA", logo: "https://www.ntvbd.com/sites/default/files/aggregator/2020/02/17/ntv-channel_0.jpg", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8" },
    { name: "RTV", group: "BANGLA", logo: "https://s4.gifyu.com/images/image29282f9d45a183d6.png", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/rtv-sg.stream/tracks-v1a1/mono.m3u8" },
    { name: "Banglavision", group: "BANGLA", logo: "https://s4.gifyu.com/images/image5c0bfa6b281be803.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1715/output/index.m3u8" },
    { name: "SATV", group: "BANGLA", logo: "https://s4.gifyu.com/images/image9f4a0ee9cd069bad.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1720/output/index.m3u8" },
    { name: "Boishakhi TV", group: "BANGLA", logo: "https://dl.dropbox.com/s/xolazzofexo6ub8/boishakhi.png", url: "https://boishakhi.sonarbanglatv.com/boishakhi/boishakhitv/index.m3u8" },
    { name: "Ekushey TV", group: "BANGLA", logo: "https://s4.gifyu.com/images/image534fa27d7683f33d.png", url: "http://210.4.72.204/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8" },
    { name: "Channel I", group: "BANGLA", logo: "https://cdn.tvpassport.com/image/station/240x135/channel-i-bangla.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/index.m3u8" },
    { name: "Deepto TV", group: "BANGLA", logo: "https://upload.wikimedia.org/wikipedia/en/3/31/Deepto_TV_logo.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1711/output/index.m3u8" },
    { name: "Maasranga TV", group: "BANGLA", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Maasranga_Television_Logo.jpg/180px-Maasranga_Television_Logo.jpg", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8" },
    { name: "Channel 9", group: "BANGLA", logo: "https://i.ibb.co/xgfM1sf/2021-06-14-fff22-19-07.jpg", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1729/output/index.m3u8" },
    { name: "GAZI TV", group: "BANGLA", logo: "https://i.ibb.co/pQGXzMP/images-1-removebg-preview.png", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/gazibdz.stream/tracks-v1a1/mono.m3u8" },
    { name: "Desh TV", group: "BANGLA", logo: "https://www.tradebangla.com.bd/images/business/profile/2017/12/12/222121217071805.jpg", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/deshtv.stream/tracks-v1/mono.m3u8" },
    { name: "MY TV HD", group: "BANGLA", logo: "https://dl.dropbox.com/s/jjr5835pbth49tm/my_tv_bd.png", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/mytv-up-off.stream/tracks-v1a1/mono.m3u8" },
    { name: "Green TV", group: "BANGLA", logo: "https://bugsfreeweb.github.io/LiveTVCollector/BugsfreeLogo/default-logo.png", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/greentv.stream/live-orgin/greentv.stream/chunks.m3u8" },
    { name: "Asian TV", group: "BANGLA", logo: "https://www.pngfind.com/pngs/m/162-1620250_asian-tv-bd-logo-hd-png-download.png", url: "https://mtlivestream.com/hls/asian/ytlive/index.m3u8" },
    { name: "Deshe Bideshe", group: "BANGLA", logo: "https://pbs.twimg.com/profile_images/739539785304281088/zMwNO936_400x400.jpg", url: "https://dbcanada.sonarbanglatv.com/deshebideshe/dbtv/index.m3u8" },
    // --- English News ---
    { name: "Al Jazeera", group: "English News", logo: "https://1000logos.net/wp-content/uploads/2020/08/Al-Jazeera-Logo.jpg", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1721/output/index.m3u8" },
    { name: "BBC News", group: "English News", logo: "https://seeklogo.com/images/B/bbc-news-logo-8648ABD044-seeklogo.com.png", url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs15" },
    { name: "CNN", group: "English News", logo: "https://logos-world.net/wp-content/uploads/2020/11/CNN-Logo.png", url: "https://amg01448-samsungin-cnnnow-samsungin-4npqg.amagi.tv/playlist/amg01448-samsungin-cnnnow-samsungin/playlist.m3u8" },
    { name: "DW", group: "English News", logo: "https://bugsfreeweb.github.io/LiveTVCollector/BugsfreeLogo/default-logo.png", url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8" },
    { name: "France 24", group: "English News", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/FRANCE_24_logo.svg/1200px-FRANCE_24_logo.svg.png", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/fr24.stream/playlist.m3u8" },
    { name: "Sky News", group: "English News", logo: "https://bugsfreeweb.github.io/LiveTVCollector/BugsfreeLogo/default-logo.png", url: "https://d39chvnxm26pgp.cloudfront.net/v1/master/72588bff830dec7b26d7cbbf5f3c24928aec5c03/cc-sthen6ms4vxgv-stage/WNSFO/ABR.m3u8" },
    // --- Islamic ---
    { name: "Saudi Quran", group: "Islamic", logo: "https://yt3.ggpht.com/ytc/AMLnZu_Gxy8ywjMY6_YPX-1uYtUGA56FOfDoBsH62-ekNA=s900-c-k-c0x00ffffff-no-rj", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1713/output/index.m3u8" },
    { name: "Peace TV Bangla", group: "Islamic", logo: "https://images-na.ssl-images-amazon.com/images/I/71CywdrFaZL.png", url: "https://dzkyvlfyge.erbvr.com/PeaceTvBangla/tracks-v3a1/mono.m3u8?sid=s7AaNdTzDE2912wNcPLejQ" },
    { name: "Islamic TV", group: "Islamic", logo: "https://images-na.ssl-images-amazon.com/images/I/71CywdrFaZL.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1724/output/index.m3u8" },
    { name: "Islam Bangla", group: "Islamic", logo: "https://i.imgur.com/xuNhiek.png", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/islamchbangla.stream/tracks-v1a1/mono.m3u8" },
    // --- Kids ---
    { name: "Duronto TV", group: "Kids", logo: "https://upload.wikimedia.org/wikipedia/en/d/d7/Duronto_TV_Logo.png", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/duronto.stream/tracks-v1a1/mono.m3u8" },
    { name: "Cartoon Network", group: "Kids", logo: "https://bugsfreeweb.github.io/LiveTVCollector/BugsfreeLogo/default-logo.png", url: "https://live20.bozztv.com/giatvplayout7/giatv-209624/index.m3u8" },
    { name: "Baby Shark TV", group: "Kids", logo: "https://static.wikia.nocookie.net/logopedia/images/c/c7/Pinkfong_Baby_Shark.svg", url: "https://newidco-babysharktv-1-eu.rakuten.wurl.tv/playlist.m3u8" },
    // --- Indian Bangla ---
    { name: "Star Jalsha HD", group: "Indian-Bangla", logo: "https://static.wikia.nocookie.net/logopedia/images/3/3c/Star_Jalsha_HD.png/revision/latest/scale-to-width-down/250?cb=20180908084350", url: "https://yupptvcatchupire.yuppcdn.net/preview/starjalsha/1800.m3u8" },
    { name: "Zee Bangla HD", group: "Indian-Bangla", logo: "https://dl.dropbox.com/s/8z5yuaoyryedp6l/ZB.jpg", url: "https://yupptvcatchupire.yuppcdn.net/preview/zeebangla/2500.m3u8" },
    { name: "Colors Bangla", group: "Indian-Bangla", logo: "https://dl.dropbox.com/s/44vdhjj6fja02co/CBHD.jpg", url: "https://yupptvcatchupire.yuppcdn.net/preview/colorsbanglahd/800.m3u8" },
    { name: "Sony Aath", group: "Indian-Bangla", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sony_Aath_logo.svg/1200px-Sony_Aath_logo.svg.png", url: "https://stream.ottplus.bd/live/sony_aath_abr/live/sony_aath_720/chunks.m3u8" },
    { name: "DD Bangla", group: "Indian-Bangla", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wJdNPAfkGDb7D52d7HRbJ5hLgCUB7Ss74mStkPgemQ&s", url: "https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/7ff57cc9046b4c188b51a0d506f36e7f/index_3.m3u8" },
    { name: "Republic Bangla", group: "Indian-Bangla", logo: "https://bugsfreeweb.github.io/LiveTVCollector/BugsfreeLogo/default-logo.png", url: "https://vg-republictvlive.akamaized.net/v1/manifest/611d79b11b77e2f571934fd80ca1413453772ac7/vglive-sk-456368/06e5afc2-a022-4e51-9131-4e33a6207c5c/1.m3u8" },
    { name: "News18 Bangla", group: "Indian-Bangla", logo: "https://jio.dinesh29.com.np/smart/ardinesh/logos/news18-bangla-news.png", url: "https://amg01448-samsungin-news18bangla-samsungin-ad-qy.amagi.tv/playlist/amg01448-samsungin-news18bangla-samsungin/playlist.m3u8" },
    { name: "TV9 Bangla", group: "Indian-Bangla", logo: "https://jio.dinesh29.com.np/smart/ardinesh/logos/tv9-bangla.png", url: "https://amg01448-samsungin-tv9bangla-samsungin-9lgnh.amagi.tv/playlist/amg01448-samsungin-tv9bangla-samsungin/playlist.m3u8" },
    // --- Music ---
    { name: "ATN Music", group: "Music", logo: "https://i.ytimg.com/vi/ZKFyzan2-xo/maxresdefault_live.jpg", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1717/output/index.m3u8" },
    { name: "Sangeet Bangla", group: "Music", logo: "https://static.wikia.nocookie.net/logopedia/images/1/1f/Sangeet_Bangla.jpg/revision/latest?cb=20200804091515", url: "https://cdn-4.pishow.tv/live/1143/master.m3u8" },
    // --- Hindi ---
    { name: "Colors Cineplex HD", group: "Hindi", logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Colors-cineplex.png?20211203010524", url: "https://vods2.aynaott.com/hindimovies/index.m3u8" },
    { name: "Zee Cinema HD", group: "Hindi", logo: "https://akamaividz2.zee5.com/image/upload/resources/0-9-zeecinemahd/list/09zeecinemahdzeecinemahd.jpg", url: "https://stream.ottplus.bd/live/zee_cinema_hd_abr/live/zee_cinema_hd_720/chunks.m3u8" },
    { name: "Sony TV HD", group: "Hindi", logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/56e54462053b1b278b80b532c89c01f17e360fd5/Sony%20TV.png", url: "http://198.195.239.50:8095/SonyTv/tracks-v1a1/mono.m3u8" },
    { name: "Sony SAB", group: "Hindi", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/SonySABlogo.png", url: "http://maxotts.maxdigitaltv.com/x-media/C64/master.m3u8" },
    { name: "Sony MAX HD", group: "Hindi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sony_MAX.svg/1200px-Sony_MAX.svg.png", url: "https://stream.ottplus.bd/live/max_hd_abr/live/max_hd_720/chunks.m3u8" },
    { name: "Star Gold HD", group: "Hindi", logo: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Star_Gold_HD.png", url: "http://maxotts.maxdigitaltv.com/x-media/C103/master.m3u8" },
];

// All unique groups
const allGroups = ["ALL", ...new Set(channels.map(c => c.group))];

// ===== STATE =====
let activeGroup = "ALL";
let searchQuery = "";
let hlsInstance = null;

// ===== DOM REFS =====
const channelGrid = document.getElementById('dynamic-channel-grid');
const groupTabsEl = document.getElementById('group-tabs');
const overlay = document.getElementById('player-overlay');
const playerTitle = document.getElementById('player-title');
const playerClose = document.getElementById('player-close');
const liveVideo = document.getElementById('live-video');
const playerStatus = document.getElementById('player-status');
const searchInput = document.getElementById('search-input');
const onlineCount = document.getElementById('online-count');

// ===== RENDER GROUP TABS =====
function renderGroupTabs() {
    groupTabsEl.innerHTML = '';
    allGroups.forEach(group => {
        const btn = document.createElement('button');
        btn.className = 'group-tab' + (group === activeGroup ? ' active' : '');
        btn.textContent = group;
        btn.addEventListener('click', () => {
            activeGroup = group;
            searchInput.value = '';
            searchQuery = '';
            renderChannels();
            renderGroupTabs();
        });
        groupTabsEl.appendChild(btn);
    });
}

// ===== RENDER CHANNELS =====
function renderChannels() {
    const filtered = channels.filter(ch => {
        const matchGroup = activeGroup === "ALL" || ch.group === activeGroup;
        const matchSearch = ch.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchGroup && matchSearch;
    });

    onlineCount.textContent = filtered.length + ' CHANNELS';

    channelGrid.innerHTML = '';

    if (filtered.length === 0) {
        channelGrid.innerHTML = '<p style="color:#aaa;grid-column:1/-1;text-align:center;padding:40px;">No channels found.</p>';
        return;
    }

    filtered.forEach(ch => {
        const card = document.createElement('div');
        card.className = 'channel-card';
        card.innerHTML = `
            <div class="card-thumb">
                <span class="live-tag">LIVE</span>
                <img src="${ch.logo}" alt="${ch.name}" loading="lazy" onerror="this.src='https://bugsfreeweb.github.io/LiveTVCollector/BugsfreeLogo/default-logo.png'">
                <div class="play-overlay">▶</div>
            </div>
            <div class="card-name">${ch.name}</div>
            <div class="card-group">${ch.group}</div>
        `;
        card.addEventListener('click', () => openPlayer(ch.name, ch.url));
        channelGrid.appendChild(card);
    });
}

// ===== VIDEO PLAYER =====
function openPlayer(name, streamUrl) {
    playerTitle.textContent = '📺 ' + name;
    overlay.classList.add('active');
    playerStatus.style.display = 'flex';
    playerStatus.textContent = '⏳ Loading stream...';
    document.body.style.overflow = 'hidden';

    if (hlsInstance) { hlsInstance.destroy(); hlsInstance = null; }
    liveVideo.removeAttribute('src');
    liveVideo.load();

    if (Hls.isSupported()) {
        hlsInstance = new Hls({ enableWorker: true, lowLatencyMode: true });
        hlsInstance.loadSource(streamUrl);
        hlsInstance.attachMedia(liveVideo);

        hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
            playerStatus.style.display = 'none';
            liveVideo.play().catch(() => {});
        });

        hlsInstance.on(Hls.Events.ERROR, (event, data) => {
            if (data.fatal) {
                playerStatus.style.display = 'flex';
                playerStatus.textContent = '⚠️ Stream offline or unavailable. Try another channel.';
                hlsInstance.destroy();
            }
        });
    } else if (liveVideo.canPlayType('application/vnd.apple.mpegurl')) {
        liveVideo.src = streamUrl;
        liveVideo.addEventListener('loadedmetadata', () => {
            playerStatus.style.display = 'none';
            liveVideo.play().catch(() => {});
        }, { once: true });
        liveVideo.addEventListener('error', () => {
            playerStatus.style.display = 'flex';
            playerStatus.textContent = '⚠️ Stream unavailable. Try another channel.';
        }, { once: true });
    } else {
        playerStatus.textContent = '⚠️ Your browser does not support HLS streaming.';
    }
}

function closePlayer() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    if (hlsInstance) { hlsInstance.destroy(); hlsInstance = null; }
    liveVideo.pause();
    liveVideo.removeAttribute('src');
    liveVideo.load();
}

playerClose?.addEventListener('click', closePlayer);
overlay?.addEventListener('click', e => { if (e.target === overlay) closePlayer(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePlayer(); });

// ===== SEARCH =====
searchInput?.addEventListener('input', () => {
    searchQuery = searchInput.value.trim();
    renderChannels();
});

// ===== HAMBURGER =====
document.getElementById('hamburger')?.addEventListener('click', () => {
    document.getElementById('mobile-nav')?.classList.toggle('open');
});

// ===== ALPHABET FILTER =====
document.querySelectorAll('.alpha').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelectorAll('.alpha').forEach(a => a.classList.remove('active'));
        el.classList.add('active');
        const letter = el.dataset.letter;
        if (letter === '#') {
            searchQuery = '';
            searchInput.value = '';
        } else {
            searchQuery = letter;
            searchInput.value = letter;
        }
        activeGroup = 'ALL';
        renderChannels();
        renderGroupTabs();
    });
});

// ===== BACK TO TOP =====
document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== SHOW MORE MATCHES =====
document.getElementById('show-more-btn')?.addEventListener('click', function () {
    this.textContent = 'No more matches to show';
    this.disabled = true;
    this.style.background = '#555';
});

// ===== INIT =====
renderGroupTabs();
renderChannels();
