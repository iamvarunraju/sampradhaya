class App {
    constructor() {
        this.ui = {
            hero: document.querySelector('#hero-view'),
            mapView: document.querySelector('#map-view'),
            drawer: document.querySelector('#drawer'),
            cursor: document.querySelector('.cursor-dot')
        };
        this.map = null;
        this.data = [
            {
                id: 1, name: "Brihadeeswarar", location: { lat: 10.7828, lng: 79.1318 },
                meta: "1010 CE • Chola Dynasty",
                desc: "The world's first complete granite temple and a masterpiece of Dravidian architecture.",
                image: "https://images.unsplash.com/photo-1686310894901-d326b8722c13?w=800",
                details: { timings: "6:00 AM - 8:30 PM", style: "Dravidian", festivals: "Maha Shivaratri" }
            },
            {
                id: 2, name: "Kedarnath", location: { lat: 30.7352, lng: 79.0669 },
                meta: "8th Century • Adi Shankaracharya",
                desc: "One of the twelve Jyotirlingas, located amidst the snowy Garhwal Himalayas.",
                image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
                details: { timings: "4:00 AM - 9:00 PM", style: "Kathuara Style", festivals: "Shravani Annakoot Mela" }
            },
            {
                id: 3, name: "Konark Sun Temple", location: { lat: 19.8876, lng: 86.0945 },
                meta: "1250 CE • Eastern Ganga",
                desc: "Designed as a colossal chariot for the Sun God Surya, with 24 giant stone wheels.",
                image: "https://imgs.search.brave.com/gmHJPiwJ2mVCUj4_s6CRUS4spQKi9kHIDzIQDjypc18/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjAz/NjM0MjAxOC9waG90/by90aGUta29uYXJr/LXN1bi10ZW1wbGUt/aXMtYmVpbmctc2Vl/bi1pbi1rb25hcmst/b2Rpc2hhLW9uLWZl/YnJ1YXJ5LTI0LTIw/MjQtdGhpcy0xM3Ro/LWNlbnR1cnktY2Uu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUxpcFFQZmp6VDNR/WDluMkg1V3FhNzdw/SmpGVWVvZXd4aDZB/dFJ2eF9CZTA9",
                details: { timings: "6:00 AM - 8:00 PM", style: "Kalinga Architecture", festivals: "Magha Saptami" }
            },
            {
                id: 4, name: "Golden Temple", location: { lat: 31.6200, lng: 74.8765 },
                meta: "1577 CE • Sikh Empire",
                desc: "The holiest Gurdwara of Sikhism, representing human brotherhood and equality.",
                image: "https://imgs.search.brave.com/CthxPdaLYz1HQDSVVU-o3se1yIt7D5E-ocR2MI-oPGc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk0L1Ro/ZV9Hb2xkZW5fVGVt/cGxlX29mX0Ftcml0/aHNhcl83LmpwZy81/MTJweC1UaGVfR29s/ZGVuX1RlbXBsZV9v/Zl9BbXJpdGhzYXJf/Ny5qcGc",
                details: { timings: "Open 24 Hours", style: "Sikh Architecture", festivals: "Vaisakhi" }
            },
            {
                id: 5, name: "Hampi (Virupaksha)", location: { lat: 15.3350, lng: 76.4600 },
                meta: "7th Century • Vijayanagara Empire",
                desc: "A sprawling UNESCO site where boulders meet divinity, featuring unique acoustic marvels.",
                image: "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?w=800",
                details: { timings: "6:00 AM - 6:00 PM", style: "Vijayanagara", festivals: "Hampi Utsav" }
            },
            {
                id: 6, name: "Meenakshi Amman", location: { lat: 9.9195, lng: 78.1193 },
                meta: "1623 CE • Nayak Dynasty",
                desc: "The heartbeat of Madurai, featuring 14 magnificent gopurams covered in colorful stone figures.",
                image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
                details: { timings: "5:00 AM - 10:00 PM", style: "Dravidian", festivals: "Meenakshi Tirukalyanam" }
            },
            {
                id: 7, name: "Ajanta Caves", location: { lat: 20.5519, lng: 75.7467 },
                meta: "2nd Century BCE",
                desc: "30 rock-cut Buddhist cave monuments featuring the finest surviving examples of ancient Indian art.",
                image: "https://imgs.search.brave.com/D4EHZEzG0a-Te66pumL8lGykJy2Ae0w8DvLZsF2fej4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/MjI4NzU5NC9waG90/by90aGUtd29uZGVy/LW9mLWFqYW50YS1j/YXZlcy10aGUtcm9j/ay1jdXQtYnVkZGhp/c3QtbW9udW1lbnRz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1VNzhHQ0JQbnpS/aG9SOUQxblhiaS1l/Z2hqc0U4WGVCSTFY/YTd0a3NiZUNFPQ",
                details: { timings: "9:00 AM - 5:00 PM", style: "Rock-cut", festivals: "Ajanta Ellora Festival" }
            },
            {
                id: 8, name: "Paradesi Synagogue", location: { lat:9.95722, lng: 76.25944 },
                meta: "1568 A.D",
                desc: "The Malabari Jews or Yehudan Mappila (also known as Cochin Jews) formed a prosperous trading community of Kerala, and they controlled a major portion of worldwide spice trade.",
                image: "https://imgs.search.brave.com/xgkz4foeFUdezYrxB20-u_Mzt7jg6QuVcDWvtGGjmn0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2VyYWxhdG91cmlz/bS5vcmcvaW1hZ2Vz/L2p1ZGFpc20vbGFy/Z2UvbWF0dGFuY2hl/cnlfbGFyZ2UuanBn",
                details: { timings: "9:00 AM - 5:00 PM", style: "-", festivals: "-" }
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
        tl.to('.loader-bar', { width: '100%', duration: 1.5, ease: "expo.inOut" })
          .to('.loader-content', { opacity: 0, y: -20, duration: 0.5 })
          .to('#preloader', { y: '-100%', duration: 1, ease: 'power4.inOut' })
          .from('h1', { y: 50, opacity: 0, duration: 1 });
    }

    setupCursor() {
        window.addEventListener('mousemove', e => {
            gsap.to(this.ui.cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
        });
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mouseenter', () => gsap.to(this.ui.cursor, { scale: 3, opacity: 0.5 }));
            btn.addEventListener('mouseleave', () => gsap.to(this.ui.cursor, { scale: 1, opacity: 1 }));
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
            gsap.to(this.ui.mapView, { opacity: 0, pointerEvents: 'none', duration: 0.6 });
            gsap.to(this.ui.hero, { opacity: 1, pointerEvents: 'all', duration: 0.6 });
            this.ui.drawer.classList.remove('open');
        } else if (viewName === 'MAP') {
            gsap.to(this.ui.hero, { opacity: 0, pointerEvents: 'none', duration: 0.6 });
            gsap.to(this.ui.mapView, { opacity: 1, pointerEvents: 'all', duration: 0.6 });
            if (!this.map) this.initMap();
        } else if (viewName === 'DRAWER') {
            this.populateDrawer(data);
            this.ui.drawer.classList.add('open');
            if(this.map) this.map.flyTo([data.location.lat, data.location.lng - 3], 6, {duration: 1.5});
        }
    }

    initMap() {
        this.map = L.map('map-container', { zoomControl: false, attributionControl: false }).setView([20.5937, 78.9629], 5);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(this.map);
        this.data.forEach(site => {
            const marker = L.marker([site.location.lat, site.location.lng], {
                icon: L.divIcon({ className: 'custom-pin', iconSize: [16,16] })
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
