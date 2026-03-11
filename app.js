/**
 * DAO (Digital Art Odyssey) - Core Logic
 */

// 1. 박물관 및 작품 데이터
const MUSEUM_DATA = {
    louvre: { label: "루브르 박물관", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8740960862534!2d2.335455315663671!3d48.86061107928737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb9757ad1a440683e!2z66Oo666W0IOuwleyrrOq0gA!5e0!3m2!1sko!2skr!4v1682145678901!5m2!1sko!2skr" },
    national: { label: "내셔널 갤러리", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.246830172605!2d-0.13109122338162232!3d51.50853301010339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce17604393%3A0x3f54508933b9d0!2z64K07I6U64SQIOqwnOufvOumrA!5e0!3m2!1sko!2skr!4v1682145800000!5m2!1sko!2skr" },
    vatican: { label: "바티칸 박물관", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.507833147987!2d12.453079315419077!3d41.90648797921947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6063837c8b8f%3A0xa9ed6d0a07b3a26f!2z67CU7Yuw7Lm0IOuwleyrrOq0gA!5e0!3m2!1sko!2skr!4v1682146050000!5m2!1sko!2skr" },
    orangerie: { label: "오랑주리", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7702220455855!2d2.320490076710433!3d48.86384770041232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f3513b63297%3A0xd6e5f84d668c2937!2z7Jik656R7KO866asIOuvuOyInOq0gA!5e0!3m2!1sko!2skr!4v1682145900000!5m2!1sko!2skr" }
};

const ARTWORKS = {
    louvre: [
        { id: "l1", title: "Mona Lisa", artist: "Leonardo da Vinci", desc: "루브르 박물관의 보석. 다빈치의 스푸마토 기법이 담긴 신비로운 미소를 디지털 돋보기로 감상해 보세요.", img: "img/r_img1.jpg", year: "1503~1519년경", tip: "미소와 눈빛, 손의 포즈에 집중해 보세요." },
        { id: "l2", title: "Liberty Leading the People", artist: "Eugène Delacroix", desc: "프랑스 혁명의 상징. 민중을 이끄는 자유의 여신의 역동적인 필치를 느껴보세요.", img: "img/r_img2.jpg", year: "1830년", tip: "삼색기와 인물들의 구도, 역동적인 붓질을 감상해 보세요." }
    ],
    national: [
        { id: "n1", title: "Sunflowers", artist: "Vincent van Gogh", desc: "고흐의 강렬한 생명력이 담긴 해바라기입니다. 화가 특유의 임파스토 기법을 관찰해 보세요.", img: "img/img6.jpg", year: "1888년", tip: "두꺼운 물감과 노란색의 변화를 비교해 보세요." },
        { id: "n2", title: "The Virgin of the Rocks", artist: "Leonardo da Vinci", desc: "다빈치의 성모자. 암석과 동굴 속에서 성모 마리아와 세례 요한, 아기 예수가 교감하는 신비로운 구도를 스푸마토로 완성했습니다. 런던 내셔널 갤러리 소장본입니다.", img: "img/img2.jpg", year: "1491~1508년경", tip: "암석과 인물의 명암, 스푸마토의 부드러운 경계를 보세요." }
    ],
    vatican: [
        { id: "v1", title: "The School of Athens", artist: "Raphael", desc: "르네상스 지성의 전당. 라파엘로가 담아낸 고대 철학자들의 조화와 원근법의 미학입니다.", img: "img/img3.jpg", year: "1509~1511년", tip: "원근법의 소실점과 중앙의 플라톤·아리스토텔레스를 찾아보세요." },
        { id: "v2", title: "The Last Supper", artist: "Leonardo da Vinci", desc: "다빈치의 걸작. 예수와 열두 제자가 마지막 만찬을 나누는 장면을 원근법과 제스처로 드라마틱하게 담았습니다. 배신과 구원의 순간이 한 화폭에 압축되어 있습니다.", img: "img/img4.jpg", year: "1495~1498년", tip: "제자들의 손짓과 표정, 배경 창문의 원근을 감상해 보세요." }
    ],
    orangerie: [
        { id: "o5", title: "Reflets verts (Green Reflection)", artist: "Claude Monet", desc: "초록의 잔상. 연못 수면에 남은 초록빛 잔상과 수련이 겹쳐 모네 특유의 빛과 색의 해체를 보여줍니다. 지베르니 연못의 한 순간이 인상으로 녹아든 걸작입니다.", img: "img/o_img1.jpg", year: "1916~1926년", tip: "수면의 반사와 초록색의 농담 변화를 느껴 보세요." },
        { id: "o2", title: "Water Lilies (Clouds)", artist: "Claude Monet", desc: "수련: 구름. 하늘에 뜬 구름이 연못 수면에 비쳐 수련과 한데 어우러집니다. 하늘과 물, 꽃이 경계 없이 녹아드는 모네만의 인상파 세계입니다.", img: "img/o_img2.jpg", year: "1903년경", tip: "하늘과 물이 만나는 경계의 색채를 감상해 보세요." },
        { id: "o3", title: "Water Lilies (Morning)", artist: "Claude Monet", desc: "수련: 아침. 이른 아침 연못 위에 스민 부드러운 빛과 맑은 수련 잎. 모네가 지베르니 정원에서 포착한 새벽의 고요함과 생명력이 담겨 있습니다.", img: "img/o_img3.jpg", year: "1905년경", tip: "아침빛이 수면에 스미는 느낌을 따라가 보세요." },
        { id: "o4", title: "Water Lilies (Sunset)", artist: "Claude Monet", desc: "수련: 일몰. 지는 해에 물빛이 주황과 보라로 물들고 수련 잎이 그림자로 스며듭니다. 하루의 끝을 담은 모네의 색채와 분위기가 압도적입니다.", img: "img/o_img4.jpg", year: "1914~1926년", tip: "일몰 무렵의 따뜻한 색과 그림자의 대비를 보세요." }
    ]
};

// 2. 앱 상태 관리
const state = {
    users: JSON.parse(localStorage.getItem('dao_users') || '[]'),
    currentUser: null,
    likes: JSON.parse(localStorage.getItem('dao_likes') || '{}'),
    currentMuseum: 'louvre',
    currentArtId: null
};

// 3. UI 렌더링 함수
function renderAuthUI() {
    const authBtns = document.getElementById('authBtns');
    const userBadge = document.getElementById('userBadge');
    const userNameEl = document.getElementById('userName');
    const likeHint = document.getElementById('like-hint');

    if (state.currentUser) {
        // 로그인 성공 시: 닉네임 표시 (문자열 닉네임만 사용, 숫자/빈값이면 이메일 ID 사용)
        authBtns.hidden = true;
        userBadge.hidden = false;
        const nick = state.currentUser.nick;
        const isValidNick = typeof nick === 'string' && nick.trim().length > 0 && !/^\d+$/.test(nick.trim());
        const displayName = isValidNick ? nick.trim() : (state.currentUser.email ? state.currentUser.email.split('@')[0] : "사용자");
        userNameEl.innerText = displayName; 
        if (likeHint) likeHint.innerText = "보관함에 저장되었습니다.";
    } else {
        // 로그아웃 상태
        authBtns.hidden = false;
        userBadge.hidden = true;
        if (likeHint) likeHint.innerText = "로그인하면 보관함에 저장됩니다.";
    }
}

function selectArt(museumId, artId) {
    const works = ARTWORKS[museumId];
    const art = works.find(a => a.id === artId) || works[0];

    state.currentMuseum = museumId;
    state.currentArtId = art.id;

    document.getElementById('main-img').src = art.img;
    document.getElementById('art-title').innerText = art.title;
    document.getElementById('art-author').innerText = art.artist;
    document.getElementById('art-desc').innerText = art.desc;
    document.getElementById('museum-label').innerText = MUSEUM_DATA[museumId].label;
    document.getElementById('art-year').innerText = art.year || "—";
    document.getElementById('art-tip').innerText = art.tip || "—";
    
    const mapIframe = document.getElementById('google-map');
    if (mapIframe) mapIframe.src = MUSEUM_DATA[museumId].map;

    const thumbs = document.getElementById('thumbs');
    thumbs.innerHTML = '';
    works.forEach(item => {
        const div = document.createElement('div');
        div.className = `thumb ${item.id === art.id ? 'active' : ''}`;
        div.innerHTML = `<img src="${item.img}" alt="${item.title}">`;
        div.onclick = () => selectArt(museumId, item.id);
        thumbs.appendChild(div);
    });

    const lCount = state.likes[art.id] || 0;
    document.getElementById('like-count').innerText = lCount.toLocaleString();
    document.getElementById('like-btn').classList.remove('active');
}

// 4. 초기화 및 이벤트 핸들링
function initialize() {
    // 미술관 탭 이벤트
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = (e) => {
            const mId = e.target.dataset.museum;
            state.currentMuseum = mId;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            selectArt(mId, ARTWORKS[mId][0].id);
        };
    });

    // 돋보기 효과 (마우스 이동 시 중심점 변경)
    const frame = document.getElementById('zoom-container');
    const img = document.getElementById('main-img');
    if (frame && img) {
        frame.onmousemove = (e) => {
            const rect = frame.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            img.style.transformOrigin = `${x}% ${y}%`;
        };
    }

    // 조명 컨트롤
    const darkModeBtn = document.getElementById('dark-mode-btn');
    if (darkModeBtn) {
        darkModeBtn.onclick = function() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            this.innerHTML = isDark ? 
                '<i class="fa-solid fa-sun"></i> 조명 켜기' : 
                '<i class="fa-solid fa-moon"></i> 조명 끄기';
        };
    }

    // 좋아요 버튼
    document.getElementById('like-btn').onclick = () => {
        if (!state.currentArtId) return;

        if (!state.currentUser) {
            alert('로그인 후 좋아요를 누를 수 있습니다.');
            return;
        }

        const id = state.currentArtId;
        const current = state.likes[id] || 0;
        const next = current + 1;
        state.likes[id] = next;
        localStorage.setItem('dao_likes', JSON.stringify(state.likes));

        document.getElementById('like-count').innerText = next.toLocaleString();
        document.getElementById('like-btn').classList.add('active');
    };

    // --- 인증 로직 ---
    const modal = document.getElementById('authModal');
    const authForm = document.getElementById('authForm');
    const authNotice = document.getElementById('authNotice');

    function setAuthMode(mode) {
        const isReg = mode === 'register';
        document.getElementById('authTitle').innerText = isReg ? "회원가입" : "로그인";
        document.getElementById('submitAuthBtn').innerText = isReg ? "가입하기" : "로그인";
        
        const nameField = document.getElementById('nameField');
        if (nameField) nameField.hidden = !isReg;

        document.querySelector('[data-auth-mode="login"]').classList.toggle('active', !isReg);
        document.querySelector('[data-auth-mode="register"]').classList.toggle('active', isReg);
        
        authForm.dataset.mode = mode;
        authNotice.style.display = 'none';
        authForm.reset();
    }

    document.getElementById('openLoginBtn').onclick = () => { modal.classList.add('open'); setAuthMode('login'); };
    document.getElementById('openRegisterBtn').onclick = () => { modal.classList.add('open'); setAuthMode('register'); };
    document.getElementById('closeAuthModal').onclick = () => modal.classList.remove('open');
    
    document.querySelectorAll('.modal-tabs button').forEach(btn => {
        btn.onclick = () => setAuthMode(btn.dataset.authMode);
    });

    authForm.onsubmit = (e) => {
        e.preventDefault();
        const mode = authForm.dataset.mode;
        const email = document.getElementById('emailInput').value.trim();
        const pw = document.getElementById('passwordInput').value;

        if (mode === 'register') {
            // 회원가입 시 닉네임 우선순위: 입력값 > 이메일 ID
            const inputNick = document.getElementById('displayNameInput').value.trim();
            const nick = inputNick || email.split('@')[0];

            if (state.users.find(u => u.email === email)) {
                authNotice.innerText = "이미 존재하는 이메일입니다.";
                authNotice.style.display = 'block';
                authNotice.className = "notice open error";
                return;
            }
            state.users.push({ email, pw, nick });
            localStorage.setItem('dao_users', JSON.stringify(state.users));
            
            alert(`가입 완료! 닉네임: ${nick}\n로그인 해주세요.`);
            setAuthMode('login');
        } else {
            // 로그인 처리
            const user = state.users.find(u => u.email === email && u.pw === pw);
            if (user) {
                state.currentUser = user;
                renderAuthUI();
                modal.classList.remove('open');
            } else {
                authNotice.innerText = "계정 정보가 올바르지 않습니다.";
                authNotice.style.display = 'block';
                authNotice.className = "notice open error";
            }
        }
    };

    document.getElementById('logoutBtn').onclick = () => {
        state.currentUser = null;
        renderAuthUI();
    };

    // 초기 실행
    renderAuthUI();
    selectArt('louvre', 'l1');
}

window.onload = initialize;