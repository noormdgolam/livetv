// ============================================================
// FREE LIVE TV - 200+ CHANNELS
// Sources: iptv-org.github.io + bugsfreeweb LiveTVCollector
// ============================================================

const channels = [

// ===================== 🇧🇩 BANGLADESH =====================
{ name: "BTV National", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/5OE2FDt.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/1709.m3u8" },
// OFFLINE: { name: "BTV News", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/hvpyuek.png", url: "https://tvsen6.aynaott.com/BTVNews/index.m3u8" },
{ name: "BTV Chattogram", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/hvpyuek.png", url: "https://bozztv.com/rongo/rongo-BTVChattagram/index.m3u8" },
// OFFLINE: { name: "T Sports", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/2JzlorD.png", url: "https://tvsen7.aynaott.com/tsports-hd/index.m3u8" },
{ name: "Jamuna TV", group: "🇧🇩 Bangladesh", logo: "https://www.jamuna.tv/wp-content/themes/jtv-news/img/logo.png", url: "https://bozztv.com/rongo/rongo-JamunaTelevision/index.m3u8" },
{ name: "Ekattor TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/zoLwwUK.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/1705.m3u8" },
{ name: "Somoy News TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/i54AQic.png", url: "https://bozztv.com/rongo/rongo-somoy/index.m3u8" },
{ name: "NTV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/l75bDTx.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8" },
{ name: "RTV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/yu8ugqt.png", url: "https://bozztv.com/rongo/rongo-RTV/index.m3u8" },
// OFFLINE: { name: "ATN Bangla", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/K1HmMRz.png", url: "https://tvsen5.aynaott.com/atnbangla/index.m3u8" },
{ name: "ATN News", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/4qZQKjo.png", url: "https://bozztv.com/rongo/rongo-ATNNews/index.m3u8" },
// OFFLINE: { name: "ATN Music", group: "🇧🇩 Bangladesh", logo: "https://www.jagobd.com/wp-content/uploads/2015/12/atnmusic.jpg?x50681", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/atnmusic.stream/playlist.m3u8" },
{ name: "Channel 24", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/4JLkaF7.png", url: "https://bozztv.com/rongo/rongo-Channel24HD/index.m3u8" },
// OFFLINE: { name: "News 24 HD", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/fkTHh75.png", url: "https://bozztv.com/rongo/rongo-News24HD/index.m3u8" },
{ name: "DBC News", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/Qbt6q4z.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1728/output/index.m3u8" },
// OFFLINE: { name: "Independent TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/POXFhGN.png", url: "https://bozztv.com/rongo/rongo-IndependentTV/index.m3u8" },
{ name: "Deepto TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/F62GUqS.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1711/output/index.m3u8" },
{ name: "Maasranga TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/uVZJMed.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8" },
{ name: "Banglavision", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/nCWgp38.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1715/output/index.m3u8" },
{ name: "Channel I", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/X0JJlOX.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/index.m3u8" },
// OFFLINE: { name: "SA TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/tL9kxxB.png", url: "https://tvsen6.aynaott.com/satv/index.m3u8" },
{ name: "Channel 9", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/Xf5YuoE.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1729/output/index.m3u8" },
// OFFLINE: { name: "Boishakhi TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/gxL05Y4.png", url: "https://tvsen6.aynaott.com/boishakhitv/index.m3u8" },
// OFFLINE: { name: "Ekushey TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/lRpkGHj.png", url: "https://tvsen6.aynaott.com/etv/index.m3u8" },
// OFFLINE: { name: "Gazi TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/2Lzhiq6.png", url: "http://tvn1.chowdhury-shaheb.com/gazitv/index.m3u8" },
// OFFLINE: { name: "Desh TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/ItrZok1.png", url: "https://bozztv.com/rongo/rongo-DeshTV/index.m3u8" },
// OFFLINE: { name: "My TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/475qK5T.png", url: "https://tvsen6.aynaott.com/mytv/index.m3u8" },
{ name: "Mohona TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/E6doEWH.png", url: "https://bozztv.com/rongo/rongo-MohonaTV/index.m3u8" },
// OFFLINE: { name: "Bangla TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/DLGjTfI.png", url: "https://tvsen6.aynaott.com/banglatv/index.m3u8" },
// OFFLINE: { name: "Asian TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/k2adSjA.png", url: "https://tvsen6.aynaott.com/asiantv/index.m3u8" },
// OFFLINE: { name: "Global TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/oe0pq1R.png", url: "https://tvsen6.aynaott.com/globaltvhd/index.m3u8" },
// OFFLINE: { name: "Ekhon TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/tRrDh6z.png", url: "https://tplay.live/out/bangladesh/ekhontv.index.m3u8" },
// OFFLINE: { name: "Bijoy TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/Faetm0C.png", url: "https://tvsen6.aynaott.com/bijoytv/index.m3u8" },
// OFFLINE: { name: "Ananda TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/jkbo7Qe.png", url: "https://bozztv.com/rongo/rongo-AnandaTV/index.m3u8" },
// OFFLINE: { name: "Sangsad TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/jkouxLg.png", url: "https://bozztv.com/rongo/rongo-SangsadTV/index.m3u8" },
{ name: "Rupashi Bangla TV", group: "🇧🇩 Bangladesh", logo: "https://jiotvimages.cdn.jio.com/dare_images/images/Rupashi_Bangla.png", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/ruposhibangla.stream/playlist.m3u8" },
{ name: "Star News BD", group: "🇧🇩 Bangladesh", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Star_News_Bangladesh_Logo.svg/1280px-Star_News_Bangladesh_Logo.svg.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1710/output/index.m3u8" },
{ name: "Aamar Bangla", group: "🇧🇩 Bangladesh", logo: "https://jiotvimages.cdn.jio.com/dare_images/images/Amaar_Bangla.png", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/amarbanglatv.stream/playlist.m3u8" },
// OFFLINE: { name: "Green TV", group: "🇧🇩 Bangladesh", logo: "https://www.jagobd.com/wp-content/uploads/2022/12/green-tv.jpg", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/greentv.stream/live-orgin/greentv.stream/playlist.m3u8" },
// OFFLINE: { name: "Vokta TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/szAGBCU.png", url: "https://vokta.raytahost.com/live/voktatv/index.m3u8" },
// OFFLINE: { name: "Madani Channel Bangla", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/vIJTVia.png", url: "https://streaming.madanichannel.tv/static/streaming-playlists/hls/d3e49b76-ac06-4689-a641-9200445b647f/master.m3u8" },
{ name: "Peace TV Bangla", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/1ztVXUi.png", url: "https://dzkyvlfyge.erbvr.com/PeaceTvBangla/index.m3u8" },
{ name: "Azan TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/JlqS6I4.jpeg", url: "https://dbcanada.sonarbanglatv.com/azantv/atv/index.m3u8" },
// OFFLINE: { name: "Duronto TV", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/gXsddRK.png", url: "https://tvsen5.aynaott.com/durontotv/index.m3u8" },
// OFFLINE: { name: "Star Jalsha HD", group: "🇧🇩 Bangladesh", logo: "https://i.imgur.com/IlufzR5.png", url: "https://tvsen4.aynaott.com/n64PH4YL/index.m3u8" },
// OFFLINE: { name: "Zee Bangla HD", group: "🇧🇩 Bangladesh", logo: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_ZEE_BANGLA/images/LOGO_HD/LOGO_HD_image.png", url: "http://217.20.112.199:8080/maamovies/index.m3u8" },
// ===================== 🚀 BDIX PREMIUM =====================
{ name: "Welcome to PlayZ TV", group: "🚀 BDIX Premium", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyniKyW9pUz1OKx5bgzLASwGVSuP0e7hX9FxVMTJMHxhu8X0tpucgSplBZgM8pCYrJJH0P2_dTC1-wzp4mMUU4sKnOzghGPCwWdbYOOa4jTyhpr7ydNj-UK-bc56IMsk2H3WZJ-SzSZIk0dTpyABCFR2_zjC2_c86W1pv7odFBT_Y-hyJs62g-3zCJkPGd/s1024/1000398131.png", url: "https://playztv.pages.dev/promo/master.m3u8" },
{ name: "Ekushey TV (Akash)", group: "🚀 BDIX Premium", logo: "https://s4.gifyu.com/images/image534fa27d7683f33d.png", url: "http://210.4.72.204/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8" },
{ name: "Deepto TV (Akash)", group: "🚀 BDIX Premium", logo: "https://upload.wikimedia.org/wikipedia/en/3/31/Deepto_TV_logo.png", url: "https://byphdgllyk.gpcdn.net/hls/deeptotv/0_1/index.m3u8" },
// OFFLINE: { name: "BBC News (Akash)", group: "🚀 BDIX Premium", logo: "https://seeklogo.com/images/B/bbc-news-logo-8648ABD044-seeklogo.com.png", url: "https://cdn4.skygo.mn/live/disk1/BBC_News/HLSv3-FTA/BBC_News-avc1_3000000=8-mp4a_208000_eng=2.m3u8" },
{ name: "Somoy TV HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735560559088.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8" },
{ name: "Jamuna TV HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735560213832.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8" },
{ name: "DBC News HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770186306600.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1728/output/index.m3u8" },
{ name: "Ekattor HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1739963327549.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/index.m3u8" },
{ name: "Channel 24 HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735556516924.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8" },
{ name: "ATN News HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1739962961772.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8" },
{ name: "News 24 HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770186895850.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1708/output/index.m3u8" },
{ name: "Star News HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770189826301.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1710/output/index.m3u8" },
{ name: "Channel 9 HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770188008067.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1729/output/index.m3u8" },
{ name: "Channel I HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1740567626692.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/index.m3u8" },
{ name: "Bangla Vision HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735561344354.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1715/output/index.m3u8" },
{ name: "NTV HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735560841094.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8" },
{ name: "BTV HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1778082545894.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8" },
{ name: "Independent TV HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1778087037971.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8" },
{ name: "Cineedge HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770347851305.png", url: "https://nomawnoijl.gpcdn.net/akash/cineedge/playlist.m3u8" },
{ name: "Uniques HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770347327658.png", url: "https://nomawnoijl.gpcdn.net/akash/uniques/playlist.m3u8" },
{ name: "Superrix HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770348388925.png", url: "https://nomawnoijl.gpcdn.net/akash/superrix/playlist.m3u8" },
{ name: "Sports Legends", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770377900139.png", url: "https://nomawnoijl.gpcdn.net/akash/sportslegends/playlist.m3u8" },
{ name: "Flash Guys HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770378074527.png", url: "https://nomawnoijl.gpcdn.net/akash/flashguys/playlist.m3u8" },
{ name: "Sports Range", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770380601958.png", url: "https://nomawnoijl.gpcdn.net/akash/sportrange/playlist.m3u8" },
{ name: "Thunder Er", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770380791303.png", url: "https://nomawnoijl.gpcdn.net/akash/thunder/playlist.m3u8" },
{ name: "Fighters", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770380942670.png", url: "https://nomawnoijl.gpcdn.net/akash/fighter/playlist.m3u8" },
{ name: "BuddyStar HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770379038530.png", url: "https://nomawnoijl.gpcdn.net/akash/buddystar/playlist.m3u8" },
{ name: "Kids Stars", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1770381398090.png", url: "https://nomawnoijl.gpcdn.net/akash/kidsstars/playlist.m3u8" },
{ name: "Al Quran HD", group: "🚀 BDIX Premium", logo: "https://tstatic.akash-go.com/cms-ui/images/custom-content/1778086065071.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1713/output/index.m3u8" },

// ===================== ⚽ FOOTBALL / SPORTS =====================
// OFFLINE: { name: "T Sports HD 🇧🇩", group: "⚽ Football & Sports", logo: "https://i.imgur.com/2JzlorD.png", url: "https://tvsen7.aynaott.com/tsports-hd/index.m3u8" },
{ name: "Alkass One", group: "⚽ Football & Sports", logo: "https://i.imgur.com/10mmlha.png", url: "https://liveeu-gcp.alkassdigital.net/alkass1-p/main.m3u8" },
{ name: "Alkass Two", group: "⚽ Football & Sports", logo: "https://i.imgur.com/8w61kFX.png", url: "https://liveeu-gcp.alkassdigital.net/alkass2-p/main.m3u8" },
{ name: "Alkass Three", group: "⚽ Football & Sports", logo: "https://i.imgur.com/d57BdFh.png", url: "https://liveeu-gcp.alkassdigital.net/alkass3-p/main.m3u8" },
{ name: "Alkass Four", group: "⚽ Football & Sports", logo: "https://i.imgur.com/iDL65Wu.png", url: "https://liveeu-gcp.alkassdigital.net/alkass4-p/main.m3u8" },
// OFFLINE: { name: "Alkass Five", group: "⚽ Football & Sports", logo: "https://i.imgur.com/6RGNGsM.png", url: "https://liveeu-gcp.alkassdigital.net/alkass5-p/main.m3u8" },
{ name: "Alkass Six", group: "⚽ Football & Sports", logo: "https://i.imgur.com/CrPSPSC.png", url: "https://liveeu-gcp.alkassdigital.net/alkass6-p/main.m3u8" },
// OFFLINE: { name: "Alkass Seven", group: "⚽ Football & Sports", logo: "https://i.imgur.com/3eyHP3S.png", url: "https://liveeu-gcp.alkassdigital.net/alkass7-p/main.m3u8" },
{ name: "Alkass SHOOF", group: "⚽ Football & Sports", logo: "https://shoof.alkass.net/assets/images/shoof.png", url: "https://liveeu-gcp.alkassdigital.net/shooflive/main.m3u8" },
{ name: "Alkass SHOOF 2", group: "⚽ Football & Sports", logo: "https://shoof.alkass.net/assets/images/shoof2.png", url: "https://liveeu-gcp.alkassdigital.net/shooflive2/main.m3u8" },
{ name: "A Spor", group: "⚽ Football & Sports", logo: "https://i.imgur.com/ZhkZzLf.png", url: "https://rnttwmjcin.turknet.ercdn.net/lcpmvefbyo/aspor/aspor.m3u8" },
{ name: "Al Iraqia Sport", group: "⚽ Football & Sports", logo: "https://i.imgur.com/DrrlxTO.png", url: "https://imn-live.esite-lab.com/hls/iraqia-sports-1.m3u8" },
{ name: "Arryadia", group: "⚽ Football & Sports", logo: "https://i.imgur.com/XjzK3gZ.png", url: "https://stream-lb.livemediama.com/arryadia/hls/master.m3u8" },
{ name: "Arryadia HD 1", group: "⚽ Football & Sports", logo: "https://i.ibb.co/fYNx6Fk1/image-removebg-preview-1.png", url: "https://stream-lb.livemediama.com/arryadia-hd-01/hls/master.m3u8" },
{ name: "Arryadia HD 2", group: "⚽ Football & Sports", logo: "https://i.ibb.co/jPFCVFNS/image-removebg-preview-3.png", url: "https://stream-lb.livemediama.com/arryadia-hd-02/hls/master.m3u8" },
{ name: "Arryadia HD 3", group: "⚽ Football & Sports", logo: "https://i.ibb.co/mCnJzvvB/image-removebg-preview-4.png", url: "https://stream-lb.livemediama.com/arryadia-hd-03/hls/master.m3u8" },
{ name: "Bahrain Sports 1", group: "⚽ Football & Sports", logo: "https://i.imgur.com/fBpLsbC.png", url: "https://5c7b683162943.streamlock.net/live/ngrp:sportsone_all/playlist.m3u8" },
{ name: "Bahrain Sports 2", group: "⚽ Football & Sports", logo: "https://i.imgur.com/ZkuZmIo.png", url: "https://5c7b683162943.streamlock.net/live/ngrp:bahrainsportstwo_all/playlist.m3u8" },
{ name: "Africa 24 Sport", group: "⚽ Football & Sports", logo: "https://i0.wp.com/africa24tv.com/wp-content/uploads/2023/12/LOGO-AFRICASPORT-4-HD-sans-fond.png?fit=512%2C107&ssl=1", url: "https://africa24.vedge.infomaniak.com/livecast/ik:africa24sport/manifest.m3u8" },
// OFFLINE: { name: "Arena Sport 1", group: "⚽ Football & Sports", logo: "https://i.imgur.com/RJrJGbW.png", url: "https://nl1.nghk.ai/ArenaSport1HD/index.m3u8" },
// OFFLINE: { name: "Arena Sport 2", group: "⚽ Football & Sports", logo: "https://i.imgur.com/aqlECBj.png", url: "https://nl1.nghk.ai/ArenaSport2HD/index.m3u8" },
// OFFLINE: { name: "Arena Sport 3", group: "⚽ Football & Sports", logo: "https://i.imgur.com/3r3burN.png", url: "https://nl1.nghk.ai/ArenaSport3HD/index.m3u8" },
// OFFLINE: { name: "Arena Sport 4", group: "⚽ Football & Sports", logo: "https://i.imgur.com/h1XhGkz.png", url: "https://nl1.nghk.ai/ArenaSport4HD/index.m3u8" },
// OFFLINE: { name: "Arena Sport 5", group: "⚽ Football & Sports", logo: "https://i.imgur.com/036qMgu.png", url: "https://nl1.nghk.ai/ArenaSport5HD/index.m3u8" },
{ name: "30A Golf Kingdom", group: "⚽ Football & Sports", logo: "https://i.imgur.com/Lv53nh4.png", url: "https://30a-tv.com/feeds/vidaa/golf.m3u8" },
// OFFLINE: { name: "Adjarasport 1", group: "⚽ Football & Sports", logo: "https://i.imgur.com/SVV5xHC.png", url: "https://live20.bozztv.com/dvrfl05/gin-adjara/index.m3u8" },
// OFFLINE: { name: "AntenaSport", group: "⚽ Football & Sports", logo: "https://cdn.as.ro/wp-content/themes/antenasport/images/icons-as/as.svg", url: "https://hls.rundletv.eu.org/LIVE$AntenaSport/6.m3u8/Level/300720051?end=END&start=LIVE" },
// OFFLINE: { name: "Alfa Sport", group: "⚽ Football & Sports", logo: "https://i.imgur.com/vhMPYIW.png", url: "https://dev.aftermind.xyz/edge-hls/unitrust/alfasports/index.m3u8?token=8TXWzhY3h6jrzqEqx" },

// ===================== 📰 WORLD NEWS =====================
{ name: "Al Jazeera", group: "📰 World News", logo: "https://1000logos.net/wp-content/uploads/2020/08/Al-Jazeera-Logo.jpg", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1721/output/index.m3u8" },
{ name: "Al Arabiya", group: "📰 World News", logo: "https://shahid.mbc.net/mediaObject/a4c125db-ede8-4970-9eed-963948c78651?height=auto&width=512&croppingPoint=&version=1&type=png", url: "https://live.alarabiya.net/alarabiapublish/alarabiya.smil/playlist.m3u8" },
{ name: "Al Arabiya English", group: "📰 World News", logo: "https://shahid.mbc.net/mediaObject/7cfc0baf-1201-477f-b722-d3099fafe17f?height=230&width=512&croppingPoint=&version=1&type=png", url: "https://live.alarabiya.net/alarabiapublish/english/playlist_dvr.m3u8" },
{ name: "BBC News", group: "📰 World News", logo: "https://seeklogo.com/images/B/bbc-news-logo-8648ABD044-seeklogo.com.png", url: "http://cdns.jp-primehome.com:8000/zhongying/live/playlist.m3u8?cid=cs15" },
{ name: "CNN", group: "📰 World News", logo: "https://logos-world.net/wp-content/uploads/2020/11/CNN-Logo.png", url: "https://amg01448-samsungin-cnnnow-samsungin-4npqg.amagi.tv/playlist/amg01448-samsungin-cnnnow-samsungin/playlist.m3u8" },
{ name: "ABC News Live 1", group: "📰 World News", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/ABC_News_Live_logo_2021.svg/960px-ABC_News_Live_logo_2021.svg.png", url: "https://abcnews-streams.akamaized.net/hls/live/2023560/abcnewshudson1/master.m3u8" },
{ name: "ABC News Live 2", group: "📰 World News", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/ABC_News_Live_logo_2021.svg/960px-ABC_News_Live_logo_2021.svg.png", url: "https://abcnews-streams.akamaized.net/hls/live/2023561/abcnewshudson2/master.m3u8" },
{ name: "ABC News (Australia)", group: "📰 World News", logo: "https://i.imgur.com/BrW7gk8.png", url: "https://abc-news-dmd-streams-1.akamaized.net/out/v1/701126012d044971b3fa89406a440133/index.m3u8" },
{ name: "DW News", group: "📰 World News", logo: "https://bugsfreeweb.github.io/LiveTVCollector/BugsfreeLogo/default-logo.png", url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8" },
{ name: "France 24", group: "📰 World News", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/FRANCE_24_logo.svg/1200px-FRANCE_24_logo.svg.png", url: "https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/fr24.stream/playlist.m3u8" },
{ name: "Africa 24", group: "📰 World News", logo: "https://africa24tv.com/wp-content/uploads/2021/09/logo.png", url: "https://africa24.vedge.infomaniak.com/livecast/ik:africa24/manifest.m3u8" },
{ name: "Africa 24 English", group: "📰 World News", logo: "https://africa24tv.com/wp-content/uploads/2023/12/logo-Africa24TVEnglish.png", url: "https://edge20.vedge.infomaniak.com/livecast/ik:africa24english/manifest.m3u8" },
{ name: "Africanews English", group: "📰 World News", logo: "https://i.imgur.com/5UxU4zc.png", url: "https://cdn-euronews.akamaized.net/live/eds/africanews-en/25049/index.m3u8" },
{ name: "Africanews French", group: "📰 World News", logo: "https://i.imgur.com/5UxU4zc.png", url: "https://cdn-euronews.akamaized.net/live/eds/africanews-fr/25050/index.m3u8" },
{ name: "Sky News", group: "📰 World News", logo: "https://bugsfreeweb.github.io/LiveTVCollector/BugsfreeLogo/default-logo.png", url: "https://d39chvnxm26pgp.cloudfront.net/v1/master/72588bff830dec7b26d7cbbf5f3c24928aec5c03/cc-sthen6ms4vxgv-stage/WNSFO/ABR.m3u8" },
{ name: "Aaj Tak HD", group: "📰 World News", logo: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_AAJ_TAK/images/LOGO_HD/image.png", url: "https://feeds.intoday.in/aajtak/api/aajtakhd/master.m3u8" },
{ name: "ABP News", group: "📰 World News", logo: "https://dtil.tmsimg.com/assets/s158138_ld_h15_aa.png?lock=720x540", url: "https://d1rc86nwwc9fag.cloudfront.net/vglive-sk-472500/abpnews/master.m3u8" },
{ name: "ABP Ananda", group: "📰 World News", logo: "https://dtil.tmsimg.com/assets/s142518_ld_h15_aa.png?lock=720x540", url: "https://d2l4ar6y3mrs4k.cloudfront.net/live-streaming/ananda-livetv/master.m3u8" },
{ name: "A Haber", group: "📰 World News", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Ahaber_Logo.png", url: "https://rnttwmjcin.turknet.ercdn.net/lcpmvefbyo/ahaber/ahaber.m3u8" },
{ name: "Al Alam", group: "📰 World News", logo: "https://i.imgur.com/Zdi31dy.png", url: "https://live2.alalam.ir/alalam.m3u8" },
{ name: "92 News HD", group: "📰 World News", logo: "https://i.imgur.com/gp1Ao4s.jpeg", url: "http://92news.vdn.dstreamone.net/92newshd/92hd/playlist.m3u8" },
// OFFLINE: { name: "24 TV Turkey", group: "📰 World News", logo: "https://i.imgur.com/8FO41es.png", url: "https://mn-nl.mncdn.com/kanal24/smil:kanal24.smil/playlist.m3u8" },
{ name: "Afghanistan International", group: "📰 World News", logo: "https://i.imgur.com/r8MmFRX.png", url: "https://hls.afintl.com/hls/stream.m3u8" },
{ name: "3AW Melbourne", group: "📰 World News", logo: "https://i.imgur.com/Z4MdB0S.png", url: "https://3awlive.akamaized.net/hls/live/2032295/3AW/index.m3u8" },

// ===================== 🕌 ISLAMIC =====================
{ name: "Saudi Quran", group: "🕌 Islamic", logo: "https://yt3.ggpht.com/ytc/AMLnZu_Gxy8ywjMY6_YPX-1uYtUGA56FOfDoBsH62-ekNA=s900-c-k-c0x00ffffff-no-rj", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1713/output/index.m3u8" },
{ name: "Madina Live", group: "🕌 Islamic", logo: "https://images-na.ssl-images-amazon.com/images/I/71CywdrFaZL.png", url: "https://cdn-globecast.akamaized.net/live/eds/saudi_sunnah/hls_roku/index.m3u8" },
{ name: "Peace TV Bangla", group: "🕌 Islamic", logo: "https://i.imgur.com/1ztVXUi.png", url: "https://dzkyvlfyge.erbvr.com/PeaceTvBangla/index.m3u8" },
{ name: "Islamic TV", group: "🕌 Islamic", logo: "https://images-na.ssl-images-amazon.com/images/I/71CywdrFaZL.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1724/output/index.m3u8" },
// OFFLINE: { name: "Islam Bangla", group: "🕌 Islamic", logo: "https://i.imgur.com/xuNhiek.png", url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/islamchbangla.stream/tracks-v1a1/mono.m3u8" },
// OFFLINE: { name: "Madani Channel Bangla", group: "🕌 Islamic", logo: "https://i.imgur.com/vIJTVia.png", url: "https://streaming.madanichannel.tv/static/streaming-playlists/hls/d3e49b76-ac06-4689-a641-9200445b647f/master.m3u8" },

// ===================== 🎬 HINDI / INDIAN =====================
// OFFLINE: { name: "Sony TV HD", group: "🎬 Hindi & Indian", logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/56e54462053b1b278b80b532c89c01f17e360fd5/Sony%20TV.png", url: "http://198.195.239.50:8095/SonyTv/tracks-v1a1/mono.m3u8" },
// OFFLINE: { name: "Sony SAB", group: "🎬 Hindi & Indian", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/SonySABlogo.png", url: "http://maxotts.maxdigitaltv.com/x-media/C64/master.m3u8" },
{ name: "Sony MAX HD", group: "🎬 Hindi & Indian", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sony_MAX.svg/1200px-Sony_MAX.svg.png", url: "https://stream.ottplus.bd/live/max_hd_abr/live/max_hd_720/chunks.m3u8" },
{ name: "Sony Aath", group: "🎬 Hindi & Indian", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sony_Aath_logo.svg/1200px-Sony_Aath_logo.svg.png", url: "https://stream.ottplus.bd/live/sony_aath_abr/live/sony_aath_720/chunks.m3u8" },
// OFFLINE: { name: "Sony Kal", group: "🎬 Hindi & Indian", logo: "https://bugsfreeweb.github.io/LiveTVCollector/BugsfreeLogo/default-logo.png", url: "https://spt-sonykal-1-us.lg.wurl.tv/playlist.m3u8" },
// OFFLINE: { name: "Star Gold HD", group: "🎬 Hindi & Indian", logo: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Star_Gold_HD.png", url: "http://maxotts.maxdigitaltv.com/x-media/C103/master.m3u8" },
{ name: "Zee Cinema HD", group: "🎬 Hindi & Indian", logo: "https://akamaividz2.zee5.com/image/upload/resources/0-9-zeecinemahd/list/09zeecinemahdzeecinemahd.jpg", url: "https://stream.ottplus.bd/live/zee_cinema_hd_abr/live/zee_cinema_hd_720/chunks.m3u8" },
{ name: "Colors Cineplex HD", group: "🎬 Hindi & Indian", logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Colors-cineplex.png?20211203010524", url: "https://vods2.aynaott.com/hindimovies/index.m3u8" },
{ name: "DD Bangla", group: "🎬 Hindi & Indian", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wJdNPAfkGDb7D52d7HRbJ5hLgCUB7Ss74mStkPgemQ&s", url: "https://d3qs3d2rkhfqrt.cloudfront.net/out/v1/7ff57cc9046b4c188b51a0d506f36e7f/index_3.m3u8" },
{ name: "News18 Bangla", group: "🎬 Hindi & Indian", logo: "https://jio.dinesh29.com.np/smart/ardinesh/logos/news18-bangla-news.png", url: "https://amg01448-samsungin-news18bangla-samsungin-ad-qy.amagi.tv/playlist/amg01448-samsungin-news18bangla-samsungin/playlist.m3u8" },
{ name: "TV9 Bangla", group: "🎬 Hindi & Indian", logo: "https://jio.dinesh29.com.np/smart/ardinesh/logos/tv9-bangla.png", url: "https://amg01448-samsungin-tv9bangla-samsungin-9lgnh.amagi.tv/playlist/amg01448-samsungin-tv9bangla-samsungin/playlist.m3u8" },
{ name: "Republic Bangla", group: "🎬 Hindi & Indian", logo: "https://bugsfreeweb.github.io/LiveTVCollector/BugsfreeLogo/default-logo.png", url: "https://vg-republictvlive.akamaized.net/v1/manifest/611d79b11b77e2f571934fd80ca1413453772ac7/vglive-sk-456368/06e5afc2-a022-4e51-9131-4e33a6207c5c/1.m3u8" },
{ name: "Enter 10 Bangla", group: "🎬 Hindi & Indian", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Enterr10_Bangla.jpeg/200px-Enterr10_Bangla.jpeg", url: "https://amg01448-samsungin-enterr10bangla-samsungin-ad-gg.amagi.tv/playlist/amg01448-samsungin-enterr10bangla-samsungin/playlist.m3u8" },
// OFFLINE: { name: "Nat Geo HD", group: "🎬 Hindi & Indian", logo: "https://logos-world.net/wp-content/uploads/2020/09/National-Geographic-Logo.png", url: "http://149.71.34.166:8002/play/a013/index.m3u8" },
// OFFLINE: { name: "Nat Geo Wild HD", group: "🎬 Hindi & Indian", logo: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_NAT_GEO_WILD/images/LOGO_HD/image.png", url: "http://149.71.34.166:8002/play/a012/index.m3u8" },
// OFFLINE: { name: "Nickelodeon", group: "🎬 Hindi & Indian", logo: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_NICK/images/LOGO_HD/image.png", url: "http://149.71.34.166:8000/play/a00u/index.m3u8" },

// ===================== 🎵 MUSIC =====================
{ name: "ATN Music", group: "🎵 Music", logo: "https://i.ytimg.com/vi/ZKFyzan2-xo/maxresdefault_live.jpg", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1717/output/index.m3u8" },
{ name: "Sangeet Bangla", group: "🎵 Music", logo: "https://static.wikia.nocookie.net/logopedia/images/1/1f/Sangeet_Bangla.jpg/revision/latest?cb=20200804091515", url: "https://cdn-4.pishow.tv/live/1143/master.m3u8" },
{ name: "B4U Music", group: "🎵 Music", logo: "https://seeklogo.com/images/B4U-music-logo-12FA930444-seeklogo.com.png", url: "https://cdn-2.pishow.tv/live/415/master.m3u8" },
{ name: "Music India", group: "🎵 Music", logo: "https://bugsfreeweb.github.io/LiveTVCollector/BugsfreeLogo/default-logo.png", url: "https://cdn-2.pishow.tv/live/226/master.m3u8" },

// ===================== 🧒 KIDS =====================
// OFFLINE: { name: "Duronto TV", group: "🧒 Kids", logo: "https://upload.wikimedia.org/wikipedia/en/d/d7/Duronto_TV_Logo.png", url: "https://tvsen5.aynaott.com/durontotv/index.m3u8" },
{ name: "Baby Shark TV", group: "🧒 Kids", logo: "https://static.wikia.nocookie.net/logopedia/images/c/c7/Pinkfong_Baby_Shark.svg", url: "https://newidco-babysharktv-1-eu.rakuten.wurl.tv/playlist.m3u8" },
{ name: "PBS Kids Eastern", group: "🧒 Kids", logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/pbs-kids-us.png", url: "https://livestream.pbskids.org/out/v1/14507d931bbe48a69287e4850e53443c/est.m3u8" },
{ name: "PBS Kids Pacific", group: "🧒 Kids", logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/pbs-kids-us.png", url: "https://livestream.pbskids.org/out/v1/11f2e6b73eaa4887b3746cb863960e79/pst.m3u8" },
{ name: "PBS Kids Mountain", group: "🧒 Kids", logo: "https://i.imgur.com/ambc9le.png", url: "https://livestream.pbskids.org/out/v1/3fe3030a2c8045a3932f4289d9eba3e6/mst.m3u8" },
{ name: "Cartoon Network", group: "🧒 Kids", logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/canada/cartoon-network-ca.png", url: "https://live20.bozztv.com/giatvplayout7/giatv-209624/index.m3u8" },
// OFFLINE: { name: "Disney International HD", group: "🧒 Kids", logo: "https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_DISNEY_INTERNATIONAL_HD/images/LOGO_HD/image.png", url: "http://149.71.34.166:8002/play/a01p/index.m3u8" },
{ name: "Ryan and Friends", group: "🧒 Kids", logo: "https://i.imgur.com/jcIprmt.png", url: "https://ryanandfriends-samsungau.amagi.tv/playlist.m3u8" },
{ name: "Super Simple Songs", group: "🧒 Kids", logo: "https://i.imgur.com/3k4F7O9.png", url: "https://janson-supersimplesongs-1-us.roku.wurl.tv/playlist.m3u8" },
{ name: "ZooMoo Kids", group: "🧒 Kids", logo: "https://static.wikia.nocookie.net/logopedia/images/4/44/ZooMoo_Kids_2020.svg", url: "https://zoomoo-samsungau.amagi.tv/playlist720p.m3u8" },
{ name: "Duck TV", group: "🧒 Kids", logo: "https://static.wikia.nocookie.net/logopedia/images/b/bc/Duck_TV.svg", url: "https://d6lk10bkdgfae.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-n0stmvwxmsf5c/playlist.m3u8" },
{ name: "Tiny POP", group: "🧒 Kids", logo: "https://tvpnlogopeu.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/GBBD3200003T6_20250107T030811SQUARE.png", url: "https://amg01753-narrativeentert-tinypop-samsunguk-hvvb7.amagi.tv/ts-eu-w1-n2/playlist/amg01753-narrativeentert-tinypop-samsunguk/playlist.m3u8" },
{ name: "Smurf TV", group: "🧒 Kids", logo: "https://tvpnlogopeu.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/GBBD1300001WA_20250107T030751SQUARE.png", url: "https://d144py1prrd7ns.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-affg2ev32s0dq/smrfe.m3u8" },

// ===================== 🎥 DOCUMENTARY =====================
{ name: "DW Documentary", group: "🎥 Documentary", logo: "https://bugsfreeweb.github.io/LiveTVCollector/BugsfreeLogo/default-logo.png", url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8" },
{ name: "Real Wild", group: "🎥 Documentary", logo: "https://bugsfreeweb.github.io/LiveTVCollector/BugsfreeLogo/default-logo.png", url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00426-littledotstudio-realwild-tcl/playlist.m3u8" },
{ name: "Wild Earth", group: "🎥 Documentary", logo: "https://bugsfreeweb.github.io/LiveTVCollector/BugsfreeLogo/default-logo.png", url: "https://wildearth-plex.amagi.tv/master.m3u8" },
// OFFLINE: { name: "Insight TV", group: "🎥 Documentary", logo: "https://bugsfreeweb.github.io/LiveTVCollector/BugsfreeLogo/default-logo.png", url: "https://insighttv-samsung-us.amagi.tv/playlist.m3u8" },
{ name: "BBC Earth", group: "🎥 Documentary", logo: "https://upload.wikimedia.org/wikipedia/en/4/44/BBC_Earth_logo.png", url: "https://amg00793-amg00793c6-xumo-us-2669.playouts.now.amagi.tv/BBCStudios-BBCEarthA-hls/playlist540p.m3u8" },
{ name: "Travel XP", group: "🎥 Documentary", logo: "https://photos.prnewswire.com/prnfull/20150515/10122924", url: "https://travelxp-travelxp-1-eu.rakuten.wurl.tv/playlist.m3u8" },
// OFFLINE: { name: "National Geographic HD", group: "🎥 Documentary", logo: "https://logos-world.net/wp-content/uploads/2020/09/National-Geographic-Logo.png", url: "http://149.71.34.166:8002/play/a013/index.m3u8" },
];

// ============================================================
// All unique groups (ordered)
const groupOrder = ["ALL", "🚀 BDIX Premium", "⚽ Football & Sports", "🇧🇩 Bangladesh", "📰 World News", "🎬 Hindi & Indian", "🕌 Islamic", "🎵 Music", "🧒 Kids", "🎥 Documentary"];
const allGroups = groupOrder.filter(g => g === "ALL" || channels.some(c => c.group === g));

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
            document.getElementById('channel-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        groupTabsEl.appendChild(btn);
    });
}

// ===== RENDER CHANNELS =====
function renderChannels() {
    const filtered = channels.filter(ch => {
        const matchGroup = activeGroup === "ALL" || ch.group === activeGroup;
        const matchSearch = ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            ch.group.toLowerCase().includes(searchQuery.toLowerCase());
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
                <div class="play-overlay">&#9654;</div>
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
        hlsInstance = new Hls({ enableWorker: true, lowLatencyMode: true, maxBufferLength: 30 });
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

// ===== EVENTS =====
playerClose?.addEventListener('click', closePlayer);
overlay?.addEventListener('click', e => { if (e.target === overlay) closePlayer(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePlayer(); });

searchInput?.addEventListener('input', () => {
    searchQuery = searchInput.value.trim();
    activeGroup = 'ALL';
    renderChannels();
    renderGroupTabs();
});

document.getElementById('hamburger')?.addEventListener('click', () => {
    document.getElementById('mobile-nav')?.classList.toggle('open');
});

// Alphabet filter
document.querySelectorAll('.alpha').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelectorAll('.alpha').forEach(a => a.classList.remove('active'));
        el.classList.add('active');
        const letter = el.dataset.letter;
        searchQuery = letter === '#' ? '' : letter;
        searchInput.value = searchQuery;
        activeGroup = 'ALL';
        renderChannels();
        renderGroupTabs();
    });
});

// Nav link -> group filter
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const txt = link.textContent.trim().toUpperCase();
        if (txt === 'HOME') { activeGroup = 'ALL'; }
        else if (txt.includes('BANGLA')) { activeGroup = '🇧🇩 Bangladesh'; }
        else if (txt.includes('SPORT')) { activeGroup = '⚽ Football & Sports'; }
        else if (txt.includes('NEWS')) { activeGroup = '📰 World News'; }
        searchQuery = '';
        searchInput.value = '';
        renderChannels();
        renderGroupTabs();
        document.getElementById('channel-section')?.scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('show-more-btn')?.addEventListener('click', function () {
    this.textContent = 'No more matches to show';
    this.disabled = true;
    this.style.background = '#555';
});

// ===== INIT =====
renderGroupTabs();
renderChannels();
