/**
 * SAMPRADHAYA ENGINE - AGENCY GRADE (STATIC EDITION)
 */

class App {
    constructor() {
        this.ui = {
            hero: document.querySelector('#hero-view'),
            mapView: document.querySelector('#map-view'),
            drawer: document.querySelector('#drawer'),
            cursor: document.querySelector('.cursor-dot'),
            cursorRing: document.querySelector('.cursor-ring')
        };
        this.map = null;
        
        // The embedded World-Class database (No server needed)
        this.data = [
            {
                id: 1, name: "Brihadeeswarar", location: { lat: 10.7828, lng: 79.1318 },
                meta: "1010 CE • Chola Dynasty",
                desc: "The world's first complete granite temple. Its massive 216ft Vimana tower was built without using any adhesive, relying entirely on the perfect interlocking of stones.",
                image: "https://images.unsplash.com/photo-1686310894901-d326b8722c13?q=80&w=1000",
                details: { timings: "6:00 AM - 12:30 PM, 4:00 PM - 8:30 PM", style: "Dravidian Architecture", festivals: "Maha Shivaratri, Sadhaya Vizha" }
            },
            {
                id: 2, name: "Kedarnath", location: { lat: 30.7352, lng: 79.0669 },
                meta: "8th Century • Adi Shankaracharya",
                desc: "One of the twelve Jyotirlingas, perched at 11,755 ft in the Himalayas. It is not just a temple, but a profound test of faith amidst the rugged snowy peaks.",
                image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000",
                details: { timings: "4:00 AM - 9:00 PM (Closed in Winter)", style: "Kathuara Style", festivals: "Shravani Annakoot Mela" }
            },
            {
                id: 3, name: "Konark Sun Temple", location: { lat: 19.8876, lng: 86.0945 },
                meta: "1250 CE • Eastern Ganga",
                desc: "Designed as a colossal chariot for the Sun God Surya. The 24 intricately carved stone wheels act as accurate sundials, calculating time to the exact minute.",
                image: "https://images.unsplash.com/photo-1628134785730-22687f872e9a?q=80&w=1000",
                details: { timings: "6:00 AM - 8:00 PM", style: "Kalinga Architecture", festivals: "Konark Dance Festival" }
            },
            {
                id: 4, name: "Golden Temple", location: { lat: 31.6200, lng: 74.8765 },
                meta: "1577 CE • Sikh Empire",
                desc: "Sri Harmandir Sahib represents ultimate human brotherhood. Coated in 750kg of pure gold, its massive Langar feeds over 100,000 pilgrims daily, regardless of their background.",
                image: "https://images.unsplash.com/photo-1588096344356-9b630386566d?q=80&w=1000",
                details: { timings: "Open 24 Hours", style: "Sikh & Indo-Islamic", festivals: "Vaisakhi, Guru Nanak Gurpurab" }
            },
            {
                id: 5, name: "Hampi (Virupaksha)", location: { lat: 15.3350, lng: 76.4600 },
                meta: "7th Century • Vijayanagara Empire",
                desc: "A sprawling UNESCO site where boulders meet divinity. The temple is famous for its acoustic marvels and a pinhole camera effect that inverts the tower's shadow.",
                image: "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=1000",
                details: { timings: "6:00 AM - 6:00 PM", style: "Vijayanagara Style", festivals: "Hampi Utsav" }
            },
            {
                id: 6, name: "Meenakshi Amman", location: { lat: 9.9195, lng: 78.1193 },
                meta: "1623 CE • Nayak Dynasty",
                desc: "The beating heart of Madurai, featuring 14 massive gopurams encrusted with thousands of colorful stone figures. The Hall of Thousand Pillars is a masterclass in geometric perspective.",
                image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000",
                details: { timings: "5:00 AM - 10:00 PM", style: "Dravidian Architecture", festivals: "Meenakshi Tirukalyanam" }
            },
            {
                id: 7, name: "Ajanta Caves", location: { lat: 20.5519, lng: 75.7467 },
                meta: "2nd Century BCE",
                desc: "Thirty ancient rock-cut Buddhist caves hiding deep within a horseshoe-shaped gorge. They contain the finest surviving examples of ancient Indian mural art.",
                image: "https://images.unsplash.com/photo-1626500155553-6147693673c2?q=80&w=1000",
                details: { timings: "9:00 AM - 5:00 PM (Closed Mondays)", style: "Rock-cut Buddhist", festivals: "Ajanta Ellora Festival" }
            }
        ];
        
        this.init();
    }

    init() {
        this.runPreloader();
        this.setupCursor();
        this.setupNavigation();
    }

    runPreloader() {
        const tl = gsap.timeline();
        tl.to('.loader-bar', { width: '100%', duration: 1.8, ease: "power3.inOut" })
          .to('.loader-content', { opacity: 0, y: -20, duration: 0.5 })
          .to('#preloader', { y: '-100%', duration: 1.2, ease: 'power4.inOut' })
          .from('h1', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' }, "-=0.5")
          .from('.label, p, .magnetic-btn', { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' }, "-=0.5");
    }

    setupCursor() {
        window.addEventListener('mousemove', e => {
            gsap.to(this.ui.cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(this.ui.cursorRing, { x: e.clientX, y: e.clientY, duration: 0.3 });
        });
        
        document.querySelectorAll('button, .custom-pin').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                gsap.to(this.ui.cursorRing, { width: 60, height: 60, borderColor: '#fff' });
                gsap.to(this.ui.cursor, { scale: 0.5, backgroundColor: '#fff' });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(this.ui.cursorRing, { width: 40, height: 40, borderColor: 'rgba(212, 175, 55, 0.5)' });
                gsap.to(this.ui.cursor, { scale: 1, backgroundColor: '#d4af37' });
            });
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
            const data = e.state ? e.state.data : null;
            this.renderView(view, data);
        });
    }

    renderView(viewName, data) {
        if (viewName === 'HERO') {
            gsap.to(this.ui.mapView, { opacity: 0, pointerEvents: 'none', duration: 0.8, ease: "power2.inOut" });
            gsap.to(this.ui.hero, { opacity: 1, pointerEvents: 'all', duration: 0.8, ease: "power2.inOut", scale: 1 });
            this.ui.drawer.classList.remove('open');
        } 
        else if (viewName === 'MAP') {
            gsap.to(this.ui.hero, { opacity: 0, pointerEvents: 'none', duration: 0.8, ease: "power2.inOut", scale: 1.05 });
            gsap.to(this.ui.mapView, { opacity: 1, pointerEvents: 'all', duration: 0.8, ease: "power2.inOut" });
            this.ui.drawer.classList.remove('open');
            if (!this.map) this.initMap();
        } 
        else if (viewName === 'DRAWER') {
            this.populateDrawer(data);
            this.ui.drawer.classList.add('open');
            if(this.map) this.map.flyTo([data.location.lat, data.location.lng - 3], 6, { duration: 1.5, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' });
        }
    }

    initMap() {
        this.map = L.map('map-container', { zoomControl: false, attributionControl: false }).setView([20.5937, 78.9629], 5);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(this.map);
        this.renderMarkers(this.data);
    }

    renderMarkers(items) {
        items.forEach(site => {
            const marker = L.marker([site.location.lat, site.location.lng], {
                icon: L.divIcon({ className: 'custom-pin', iconSize: [12,12] })
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

new App();
