class Sampradhaya {
    constructor() {
        this.data = [
            {
                id: 1, name: "Brihadeeswarar", location: { lat: 10.7828, lng: 79.1318 },
                meta: "1010 CE • Chola Dynasty",
                desc: "The world's first complete granite temple. Its massive 216ft Vimana tower was built without using any adhesive or binding material, relying solely on interlocking stones.",
                image: "https://images.unsplash.com/photo-1686310894901-d326b8722c13?q=80&w=1000",
                details: { timings: "6:00 AM - 12:30 PM, 4:00 PM - 8:30 PM", style: "Dravidian Architecture", festivals: "Maha Shivaratri, Sadhaya Vizha" }
            },
            {
                id: 2, name: "Kedarnath", location: { lat: 30.7352, lng: 79.0669 },
                meta: "8th Century • Adi Shankaracharya",
                desc: "One of the 12 Jyotirlingas, situated at 11,755ft. During the 2013 floods, a massive boulder protected the temple, now worshipped as the Bhim Shila.",
                image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000",
                details: { timings: "4:00 AM - 9:00 PM", style: "Kathuara Style", festivals: "Shravani Annakoot Mela" }
            },
            {
                id: 3, name: "Konark Sun Temple", location: { lat: 19.8876, lng: 86.0945 },
                meta: "1250 CE • Eastern Ganga",
                desc: "A colossal stone chariot for Surya. The 24 wheels are not just decorative; they are accurate sundials that tell time to the minute using the sun's shadow.",
                image: "https://images.unsplash.com/photo-1628134785730-22687f872e9a?q=80&w=1000",
                details: { timings: "6:00 AM - 8:00 PM", style: "Kalinga Architecture", festivals: "Konark Dance Festival" }
            },
            {
                id: 4, name: "Golden Temple", location: { lat: 31.6200, lng: 74.8765 },
                meta: "1577 CE • Sikh Empire",
                desc: "Sri Harmandir Sahib. The 750kg of gold gilding was added by Maharaja Ranjit Singh. It houses the world's largest community kitchen, feeding 100k daily.",
                image: "https://images.unsplash.com/photo-1588096344356-9b630386566d?q=80&w=1000",
                details: { timings: "Open 24 Hours", style: "Sikh Architecture", festivals: "Vaisakhi, Gurpurab" }
            },
            {
                id: 5, name: "Hampi (Virupaksha)", location: { lat: 15.3350, lng: 76.4600 },
                meta: "7th Century • Vijayanagara Empire",
                desc: "The musical heart of India. Some pillars in the Vittala temple produce distinct musical notes when tapped. The site is a surreal boulder-strewn landscape.",
                image: "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=1000",
                details: { timings: "6:00 AM - 6:00 PM", style: "Vijayanagara Style", festivals: "Hampi Utsav" }
            },
            {
                id: 6, name: "Meenakshi Amman", location: { lat: 9.9195, lng: 78.1193 },
                meta: "1623 CE • Nayak Dynasty",
                desc: "A city within a city. It contains 33,000 sculptures across its 14 gopurams. The Hall of Thousand Pillars is a masterpiece of geometric perspective.",
                image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000",
                details: { timings: "5:00 AM - 10:00 PM", style: "Dravidian Style", festivals: "Chithirai Festival" }
            },
            {
                id: 7, name: "Ajanta Caves", location: { lat: 20.5519, lng: 75.7467 },
                meta: "2nd Century BCE",
                desc: "30 rock-cut caves that contain the finest examples of ancient Indian art. The paintings were created using natural pigments that remain vibrant after 2,000 years.",
                image: "https://images.unsplash.com/photo-1626500155553-6147693673c2?q=80&w=1000",
                details: { timings: "9:00 AM - 5:00 PM", style: "Rock-cut Buddhist", festivals: "Ajanta Ellora Festival" }
            }
        ];
        
        this.map = null;
        this.init();
    }

    init() {
        this.runPreloader();
        this.setupCursor();
        this.setupNavigation();
    }

    runPreloader() {
        const tl = gsap.timeline();
        tl.to('.loader-bar', { width: '100%', duration: 2, ease: "power4.inOut" })
          .to('.loader-visual', { opacity: 0, y: -50, duration: 1 })
          .to('#preloader', { y: '-100%', duration: 1.5, ease: 'expo.inOut' })
          .from('h1', { y: 100, opacity: 0, duration: 1.2, stagger: 0.2 });
    }

    setupCursor() {
        const dot = document.querySelector('.cursor-dot');
        const outline = document.querySelector('.cursor-outline');
        window.addEventListener('mousemove', e => {
            gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(outline, { x: e.clientX - 17, y: e.clientY - 17, duration: 0.3 });
        });
        document.querySelectorAll('button, .custom-pin').forEach(el => {
            el.addEventListener('mouseenter', () => gsap.to(outline, { scale: 1.5, borderColor: '#fff' }));
            el.addEventListener('mouseleave', () => gsap.to(outline, { scale: 1, borderColor: '#c5a059' }));
        });
    }

    setupNavigation() {
        window.history.replaceState({ view: 'HERO' }, '', '/');
        document.getElementById('explore-btn').onclick = () => {
            window.history.pushState({ view: 'MAP' }, '', '#atlas');
            this.renderView('MAP');
        };
        document.getElementById('return-btn').onclick = () => window.history.back();
        window.addEventListener('popstate', (e) => {
            const view = e.state ? e.state.view : 'HERO';
            this.renderView(view, e.state?.data);
        });
    }

    renderView(viewName, data) {
        if (viewName === 'HERO') {
            gsap.to('#map-view', { opacity: 0, pointerEvents: 'none', duration: 1 });
            gsap.to('#hero-view', { opacity: 1, scale: 1, duration: 1 });
            document.getElementById('drawer').classList.remove('open');
        } else if (viewName === 'MAP') {
            gsap.to('#hero-view', { opacity: 0, scale: 1.1, duration: 1 });
            gsap.to('#map-view', { opacity: 1, pointerEvents: 'all', duration: 1 });
            if (!this.map) this.initMap();
        } else if (viewName === 'DRAWER') {
            this.populateDrawer(data);
            document.getElementById('drawer').classList.add('open');
            if(this.map) this.map.flyTo([data.location.lat, data.location.lng - 3.5], 7, { duration: 2 });
        }
    }

    initMap() {
        this.map = L.map('map-container', { zoomControl: false, attributionControl: false }).setView([21, 78], 5);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(this.map);
        this.data.forEach(site => {
            const marker = L.marker([site.location.lat, site.location.lng], {
                icon: L.divIcon({ className: 'custom-pin', iconSize: [14, 14] })
            }).addTo(this.map);
            marker.on('click', () => {
                window.history.pushState({ view: 'DRAWER', data: site }, '', '#details');
                this.renderView('DRAWER', site);
            });
        });
    }

    populateDrawer(data) {
        if(!data) return;
        document.getElementById('d-img').src = data.image;
        document.getElementById('d-name').innerText = data.name;
        document.getElementById('d-meta').innerText = data.meta;
        document.getElementById('d-desc').innerText = data.desc;
        document.getElementById('d-timings').innerText = data.details.timings;
        document.getElementById('d-style').innerText = data.details.style;
        document.getElementById('d-festivals').innerText = data.details.festivals;
    }
}

document.addEventListener('DOMContentLoaded', () => new Sampradhaya());