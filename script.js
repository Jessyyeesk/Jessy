/**
 * PPSY - Dr. D. Lirious' Mind Maze Escape Room
 * JavaScript Application Logic & Question Bank
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. QUESTION BANK & ROOM DATA (CLEARLY LABELED AND EDITABLE)
       ========================================================================== */
    const questionBank = [
        {
            id: 1,
            roomTitle: "Chamber 1: The Gloomy Study",
            subtitle: "Diagnose Patient A: Arthur's Prolonged Melancholy",
            clues: [
                { id: "prop1", name: "Personal Diary", text: "📅 'It's been over 3 consecutive weeks. I feel an overwhelming sense of emptiness, fatigue, and I no longer enjoy playing chess or listening to music.'" },
                { id: "prop2", name: "Sleep Tracker", text: "📊 'Insomnia every night. Weight dropped 5kg without trying. Severe feelings of worthlessness.'" }
            ],
            svgGraphics: `
                <svg width="100%" height="100%" viewBox="0 0 600 300">
                    <rect width="600" height="300" fill="#111827"/>
                    <!-- Bookshelf -->
                    <rect x="50" y="50" width="120" height="200" fill="#374151" stroke="#4B5563" stroke-width="4"/>
                    <rect x="60" y="80" width="100" height="10" fill="#6B7280"/>
                    <rect x="60" y="140" width="100" height="10" fill="#6B7280"/>
                    <!-- Interactive Prop 1: Diary -->
                    <g class="svg-interactive-prop" id="svg-prop1">
                        <rect x="80" y="100" width="25" height="40" fill="#EF4444" rx="3"/>
                        <text x="88" y="125" fill="#FFF" font-size="12" font-weight="bold">LOG</text>
                    </g>
                    <!-- Desk & Chair -->
                    <rect x="220" y="180" width="200" height="80" fill="#4B5563"/>
                    <!-- Interactive Prop 2: Sleep Tracker Clipboard -->
                    <g class="svg-interactive-prop" id="svg-prop2">
                        <rect x="280" y="160" width="35" height="45" fill="#3B82F6" rx="2"/>
                        <rect x="285" y="165" width="25" height="35" fill="#FFF"/>
                        <line x1="290" y1="175" x2="305" y2="175" stroke="#000" stroke-width="2"/>
                        <line x1="290" y1="185" x2="305" y2="185" stroke="#000" stroke-width="2"/>
                    </g>
                    <!-- Locked Door -->
                    <rect x="480" y="80" width="80" height="180" fill="#1F2937" stroke="#38BDF8" stroke-width="4"/>
                    <circle cx="500" cy="170" r="6" fill="#F59E0B"/>
                </svg>
            `,
            scenario: "Arthur (age 34) has experienced persistent depressed mood, severe lack of interest in previously enjoyed activities (anhedonia), insomnia, unintended weight loss, and feelings of worthlessness every day for 3 full weeks. He shows no history of manic episodes. What is the primary diagnosis?",
            options: [
                "Major Depressive Disorder",
                "Bipolar I Disorder",
                "Schizophrenia",
                "Persistent Depressive Disorder (Dysthymia)"
            ],
            correctIndex: 0,
            explanation: "Correct! Major Depressive Disorder requires at least 5 depressive symptoms (including depressed mood or anhedonia) lasting for at least 2 consecutive weeks."
        },
        {
            id: 2,
            roomTitle: "Chamber 2: The Rollercoaster Room",
            subtitle: "Diagnose Patient B: Bella's Unstoppable Energy",
            clues: [
                { id: "prop1", name: "Credit Card Statement", text: "💳 'Spent $12,000 on 40 gold statue cats in 2 days. Slept only 1 hour per night and feels like Superman!'" },
                { id: "prop2", name: "Audio Log", text: "🎙️ 'Fast-talking voice memo: I have solved gravity! I don't need sleep! Now let's open 5 businesses today!'" }
            ],
            svgGraphics: `
                <svg width="100%" height="100%" viewBox="0 0 600 300">
                    <rect width="600" height="300" fill="#1E1035"/>
                    <!-- Wild neon graphs -->
                    <path d="M 50 200 Q 150 20, 250 220 T 450 30" fill="none" stroke="#A855F7" stroke-width="5"/>
                    <!-- Interactive Prop 1: Receipts -->
                    <g class="svg-interactive-prop" id="svg-prop1">
                        <rect x="120" y="210" width="40" height="30" fill="#F59E0B" rx="3"/>
                        <text x="125" y="230" fill="#000" font-size="10" font-weight="bold">$$$</text>
                    </g>
                    <!-- Interactive Prop 2: Recorder -->
                    <g class="svg-interactive-prop" id="svg-prop2">
                        <rect x="380" y="80" width="30" height="50" fill="#22C55E" rx="5"/>
                        <circle cx="395" cy="95" r="8" fill="#000"/>
                    </g>
                    <!-- Door -->
                    <rect x="480" y="80" width="80" height="180" fill="#1F2937" stroke="#A855F7" stroke-width="4"/>
                </svg>
            `,
            scenario: "Bella presented to the clinic after spending 5 days with zero need for sleep, rapid pressurized speech, extreme distractibility, and grandiosity (believing she communicated with aliens to invent free energy). Prior to this, she experienced a deep depressive episode. What is the diagnosis?",
            options: [
                "Major Depressive Disorder",
                "Bipolar I Disorder",
                "Generalized Anxiety Disorder",
                "Schizophrenia"
            ],
            correctIndex: 1,
            explanation: "Correct! Bipolar I Disorder is characterized by at least one manic episode (elevated/irritable mood, reduced sleep need, grandiosity, impulse actions), often alternating with depressive episodes."
        },
        {
            id: 3,
            roomTitle: "Chamber 3: The Echoing Hallway",
            subtitle: "Diagnose Patient C: Carl's Perceptual Disturbances",
            clues: [
                { id: "prop1", name: "Psychiatrist Notes", text: "📝 'Carl hears commentary voices when no one is around. Firmly believes the radio is sending secret codes directly to his teeth.'" },
                { id: "prop2", name: "Art Sketch", text: "🎨 'Drawing of disorganized, fragmented patterns with notes: They are controlling my thoughts through the walls.'" }
            ],
            svgGraphics: `
                <svg width="100%" height="100%" viewBox="0 0 600 300">
                    <rect width="600" height="300" fill="#0F172A"/>
                    <!-- Wall Radio -->
                    <rect x="80" y="80" width="80" height="60" fill="#475569"/>
                    <!-- Interactive Prop 1: Notes -->
                    <g class="svg-interactive-prop" id="svg-prop1">
                        <rect x="250" y="190" width="35" height="45" fill="#FFF" rx="2"/>
                        <line x1="255" y1="200" x2="275" y2="200" stroke="#000" stroke-width="2"/>
                    </g>
                    <!-- Interactive Prop 2: Easel Art -->
                    <g class="svg-interactive-prop" id="svg-prop2">
                        <polygon points="380,240 400,120 420,240" fill="#334155"/>
                        <rect x="385" y="130" width="30" height="40" fill="#EC4899"/>
                    </g>
                    <!-- Door -->
                    <rect x="480" y="80" width="80" height="180" fill="#1F2937" stroke="#22C55E" stroke-width="4"/>
                </svg>
            `,
            scenario: "Carl (age 22) exhibits auditory hallucinations (hearing non-existent voices), bizarre delusions of control, disorganized speech, and social withdrawal for over 8 months. What condition does this best represent?",
            options: [
                "Bipolar I Disorder",
                "Schizophrenia",
                "Major Depressive Disorder",
                "Specific Phobia"
            ],
            correctIndex: 1,
            explanation: "Correct! Schizophrenia involves psychotic symptoms including hallucinations, delusions, disorganized thinking/speech, and negative symptoms lasting at least 6 months."
        },
        {
            id: 4,
            roomTitle: "Chamber 4: The Low-Tide Library",
            subtitle: "Diagnose Patient D: Diane's Chronic Low Mood",
            clues: [
                { id: "prop1", name: "Multi-Year Calendar", text: "📆 'Marked low mood almost continuously for over 2.5 years. Never severe enough for hospitalization, but rarely feels happy.'" },
                { id: "prop2", name: "Journal Entry", text: "📖 'I'm used to this low energy and low self-esteem. It's just how I've been for years.'" }
            ],
            svgGraphics: `
                <svg width="100%" height="100%" viewBox="0 0 600 300">
                    <rect width="600" height="300" fill="#131C2E"/>
                    <!-- Interactive Prop 1: Calendar -->
                    <g class="svg-interactive-prop" id="svg-prop1">
                        <rect x="100" y="70" width="70" height="80" fill="#E2E8F0" rx="4"/>
                        <rect x="100" y="70" width="70" height="20" fill="#EF4444"/>
                        <text x="110" y="85" fill="#FFF" font-size="10" font-weight="bold">2 YEARS</text>
                    </g>
                    <!-- Interactive Prop 2: Diary on table -->
                    <g class="svg-interactive-prop" id="svg-prop2">
                        <rect x="280" y="200" width="50" height="35" fill="#8B5CF6" rx="3"/>
                    </g>
                    <!-- Door -->
                    <rect x="480" y="80" width="80" height="180" fill="#1F2937" stroke="#F59E0B" stroke-width="4"/>
                </svg>
            `,
            scenario: "Diane reports feeling consistently 'down in the dumps', tired, and self-critical for more than two years. While she manages daily duties, her low mood is almost continuous without major manic or severe immobilizing depressive breaks. What is the diagnosis?",
            options: [
                "Major Depressive Disorder",
                "Persistent Depressive Disorder (Dysthymia)",
                "Schizophrenia",
                "Bipolar I Disorder"
            ],
            correctIndex: 1,
            explanation: "Correct! Persistent Depressive Disorder (Dysthymia) is characterized by a chronically depressed mood occurring most of the day, for more days than not, for at least 2 years."
        },
        {
            id: 5,
            roomTitle: "Chamber 5: The Grand Synthesis Master Lab",
            subtitle: "Final Evaluation: Differential Diagnosis Application",
            clues: [
                { id: "prop1", name: "Differential Matrix", text: "🔬 'Compare key criteria: Time duration (2 wks vs 2 yrs), Mania presence, and Psychotic presence.'" },
                { id: "prop2", name: "New Patient Case File E", text: "📁 'Patient E reports episodic intense sadness lasting 1 month, followed by 1 week of non-stop energy without sleep. Currently hearing voices.'" }
            ],
            svgGraphics: `
                <svg width="100%" height="100%" viewBox="0 0 600 300">
                    <rect width="600" height="300" fill="#09101D"/>
                    <!-- Lab Equipment -->
                    <circle cx="150" cy="150" r="40" fill="#38BDF8" opacity="0.3"/>
                    <!-- Interactive Prop 1: Matrix Board -->
                    <g class="svg-interactive-prop" id="svg-prop1">
                        <rect x="80" y="60" width="140" height="90" fill="#1E293B" stroke="#38BDF8" stroke-width="2"/>
                        <line x1="90" y1="90" x2="210" y2="90" stroke="#38BDF8"/>
                    </g>
                    <!-- Interactive Prop 2: Case File E -->
                    <g class="svg-interactive-prop" id="svg-prop2">
                        <rect x="300" y="180" width="50" height="60" fill="#F59E0B" rx="3"/>
                        <text x="312" y="215" fill="#000" font-weight="bold">CASE</text>
                    </g>
                    <!-- Final Exit Arch -->
                    <rect x="470" y="60" width="100" height="200" fill="#22C55E" opacity="0.2" rx="10"/>
                    <rect x="480" y="80" width="80" height="180" fill="#1F2937" stroke="#22C55E" stroke-width="5"/>
                </svg>
            `,
            scenario: "Synthesizing your diagnostic knowledge: Which key feature MOST clearly differentiates Bipolar I Disorder from Major Depressive Disorder?",
            options: [
                "The severity of suicidal ideation",
                "The presence of at least one manic episode",
                "The presence of insomnia",
                "A continuous duration of symptoms over 2 years"
            ],
            correctIndex: 1,
            explanation: "Correct! The presence of even a single full manic episode elevates a clinical profile from Major Depressive Disorder to Bipolar I Disorder."
        }
    ];

    /* ==========================================================================
       2. GAME STATE MANAGEMENT
       ========================================================================== */
    let currentState = {
        currentRoomIndex: 0,
        score: 0,
        attemptsCurrentRoom: 0,
        unlockedClues: new Set(),
        isTimed: true,
        timeRemaining: 600, // 10 minutes in seconds
        timerInterval: null,
        soundEnabled: true,
        userAnswers: []
    };

    /* ==========================================================================
       3. DOM ELEMENT REFERENCES
       ========================================================================== */
    const screens = {
        home: document.getElementById('screen-home'),
        instructions: document.getElementById('screen-instructions'),
        game: document.getElementById('screen-game'),
        results: document.getElementById('screen-results')
    };

    const hud = {
        container: document.getElementById('hud'),
        roomName: document.getElementById('hud-room-name'),
        timer: document.getElementById('hud-timer'),
        score: document.getElementById('hud-score'),
        btnSound: document.getElementById('btn-toggle-sound')
    };

    const modals = {
        clue: document.getElementById('modal-clue'),
        clueTitle: document.getElementById('modal-clue-title'),
        clueBody: document.getElementById('modal-clue-body'),
        terminal: document.getElementById('modal-terminal'),
        questionHeading: document.getElementById('question-room-heading'),
        scenario: document.getElementById('question-scenario'),
        optionsContainer: document.getElementById('options-container'),
        feedbackContainer: document.getElementById('feedback-container'),
        feedbackTitle: document.getElementById('feedback-title'),
        feedbackText: document.getElementById('feedback-text'),
        btnNext: document.getElementById('btn-next-room'),
        btnTryAgain: document.getElementById('btn-try-again')
    };

    /* ==========================================================================
       4. AUDIO SYNTHESIZER (WEB AUDIO API)
       ========================================================================== */
    function playSound(type) {
        if (!currentState.soundEnabled) return;
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);

            if (type === 'correct') {
                osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
                osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
                gain.gain.setValueAtTime(0.2, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
                osc.start();
                osc.stop(ctx.currentTime + 0.3);
            } else if (type === 'incorrect') {
                osc.frequency.setValueAtTime(220, ctx.currentTime); // A3
                osc.frequency.setValueAtTime(180, ctx.currentTime + 0.1);
                gain.gain.setValueAtTime(0.2, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
                osc.start();
                osc.stop(ctx.currentTime + 0.3);
            } else if (type === 'click') {
                osc.frequency.setValueAtTime(800, ctx.currentTime);
                gain.gain.setValueAtTime(0.05, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
                osc.start();
                osc.stop(ctx.currentTime + 0.05);
            }
        } catch (e) {
            console.log("Audio API not supported or user muted.");
        }
    }

    /* ==========================================================================
       5. SCREEN NAVIGATION & GAME INITIALIZATION
       ========================================================================== */
    function switchScreen(screenKey) {
        Object.keys(screens).forEach(key => {
            if (key === screenKey) {
                screens[key].classList.remove('hidden');
                screens[key].classList.add('active');
            } else {
                screens[key].classList.add('hidden');
                screens[key].classList.remove('active');
            }
        });
    }

    function startGame(timedMode) {
        currentState.currentRoomIndex = 0;
        currentState.score = 0;
        currentState.attemptsCurrentRoom = 0;
        currentState.unlockedClues.clear();
        currentState.isTimed = timedMode;
        currentState.timeRemaining = 600;
        currentState.userAnswers = [];

        hud.container.classList.remove('hidden');
        switchScreen('instructions');
    }

    function startTimer() {
        if (currentState.timerInterval) clearInterval(currentState.timerInterval);
        if (!currentState.isTimed) {
            hud.timer.textContent = "Untimed ♾️";
            return;
        }

        updateTimerDisplay();
        currentState.timerInterval = setInterval(() => {
            currentState.timeRemaining--;
            updateTimerDisplay();

            if (currentState.timeRemaining <= 0) {
                clearInterval(currentState.timerInterval);
                finishGame(true); // Ended by timeout
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const mins = Math.floor(currentState.timeRemaining / 60);
        const secs = currentState.timeRemaining % 60;
        hud.timer.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    /* ==========================================================================
       6. ROOM LOADING & INTERACTIVE CLUES
       ========================================================================== */
    function loadRoom(roomIndex) {
        const roomData = questionBank[roomIndex];
        currentState.attemptsCurrentRoom = 0;
        currentState.unlockedClues.clear();

        // Update HUD & Progress
        hud.roomName.textContent = `${roomIndex + 1} / ${questionBank.length}`;
        hud.score.textContent = currentState.score;
        document.getElementById('progress-bar-fill').style.width = `${((roomIndex + 1) / questionBank.length) * 100}%`;

        // Update Room Content
        document.getElementById('room-title').textContent = roomData.roomTitle;
        document.getElementById('room-subtitle').textContent = roomData.subtitle;

        // Render SVG Graphic
        const viewport = document.getElementById('room-viewport');
        viewport.innerHTML = roomData.svgGraphics;

        // Attach SVG prop interaction
        roomData.clues.forEach(clue => {
            const svgProp = viewport.querySelector(`#svg-${clue.id}`);
            if (svgProp) {
                svgProp.addEventListener('click', () => openClueModal(clue));
            }
        });

        updateClueTracker();
        switchScreen('game');
    }

    function openClueModal(clue) {
        playSound('click');
        currentState.unlockedClues.add(clue.id);
        updateClueTracker();

        modals.clueTitle.textContent = `🔍 Evidence: ${clue.name}`;
        modals.clueBody.textContent = clue.text;
        modals.clue.classList.remove('hidden');
    }

    function updateClueTracker() {
        const total = questionBank[currentState.currentRoomIndex].clues.length;
        const current = currentState.unlockedClues.size;
        document.getElementById('clue-count').textContent = `${current} / ${total}`;
    }

    /* ==========================================================================
       7. TERMINAL & QUESTION LOGIC
       ========================================================================== */
    function openTerminal() {
        playSound('click');
        const roomData = questionBank[currentState.currentRoomIndex];

        modals.questionHeading.textContent = `${roomData.roomTitle} - Diagnostic Lock`;
        modals.scenario.textContent = roomData.scenario;
        modals.feedbackContainer.classList.add('hidden');
        modals.btnNext.classList.add('hidden');
        modals.btnTryAgain.classList.add('hidden');

        // Render Answer Options
        modals.optionsContainer.innerHTML = '';
        roomData.options.forEach((optText, index) => {
            const btn = document.createElement('button');
            btn.className = 'btn-option';
            btn.textContent = `${String.fromCharCode(65 + index)}. ${optText}`;
            btn.addEventListener('click', () => handleAnswerSelection(index, btn));
            modals.optionsContainer.appendChild(btn);
        });

        modals.terminal.classList.remove('hidden');
    }

    function handleAnswerSelection(selectedIndex, selectedBtn) {
        const roomData = questionBank[currentState.currentRoomIndex];
        const allOptionBtns = modals.optionsContainer.querySelectorAll('.btn-option');
        
        // Prevent repeated scoring on already answered state
        allOptionBtns.forEach(btn => btn.disabled = true);

        currentState.attemptsCurrentRoom++;

        if (selectedIndex === roomData.correctIndex) {
            playSound('correct');
            selectedBtn.classList.add('correct');

            // Scoring math
            const pointsAwarded = currentState.attemptsCurrentRoom === 1 ? 100 : 50;
            currentState.score += pointsAwarded;
            hud.score.textContent = currentState.score;

            // Save result log
            currentState.userAnswers.push({
                room: roomData.roomTitle,
                correct: true,
                attempts: currentState.attemptsCurrentRoom
            });

            // Show Feedback
            modals.feedbackContainer.className = 'feedback-box correct';
            modals.feedbackTitle.textContent = '✅ Access Granted! Correct Diagnosis';
            modals.feedbackText.textContent = roomData.explanation;
            modals.feedbackContainer.classList.remove('hidden');

            modals.btnNext.classList.remove('hidden');
        } else {
            playSound('incorrect');
            selectedBtn.classList.add('incorrect');

            modals.feedbackContainer.className = 'feedback-box incorrect';
            modals.feedbackTitle.textContent = '❌ Access Denied! Incorrect Diagnosis';
            modals.feedbackText.textContent = 'Review the symptoms in the room clues carefully and try again.';
            modals.feedbackContainer.classList.remove('hidden');

            modals.btnTryAgain.classList.remove('hidden');
        }
    }

    /* ==========================================================================
       8. RESULTS & REVIEWS
       ========================================================================== */
    function finishGame(isTimeout = false) {
        if (currentState.timerInterval) clearInterval(currentState.timerInterval);

        hud.container.classList.add('hidden');
        modals.terminal.classList.add('hidden');
        modals.clue.classList.add('hidden');

        document.getElementById('final-score').textContent = currentState.score;

        const totalRooms = questionBank.length;
        const firstTryCorrect = currentState.userAnswers.filter(a => a.correct && a.attempts === 1).length;
        const accuracy = Math.round((firstTryCorrect / totalRooms) * 100);
        document.getElementById('final-accuracy').textContent = `${accuracy}%`;

        const timeSpentSeconds = 600 - currentState.timeRemaining;
        const mins = Math.floor(timeSpentSeconds / 60);
        const secs = timeSpentSeconds % 60;
        document.getElementById('final-time').textContent = currentState.isTimed ? 
            `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}` : 'N/A';

        // Badge Award Logic
        const badgeElem = document.getElementById('results-badge');
        if (accuracy >= 80) {
            badgeElem.textContent = "🏆 Chief Clinical Psychologist";
        } else if (accuracy >= 50) {
            badgeElem.textContent = "🎓 Psychology Resident";
        } else {
            badgeElem.textContent = "📚 Psy-Lab Trainee";
        }

        // Render Case Summaries
        const reviewList = document.getElementById('case-review-list');
        reviewList.innerHTML = '';
        questionBank.forEach((room, idx) => {
            const card = document.createElement('div');
            card.className = 'case-card';
            card.innerHTML = `
                <h4>${room.roomTitle}</h4>
                <p><strong>Diagnosis:</strong> ${room.options[room.correctIndex]}</p>
                <p><em>${room.explanation}</em></p>
            `;
            reviewList.appendChild(card);
        });

        switchScreen('results');
    }

    /* ==========================================================================
       9. EVENT LISTENERS
       ========================================================================== */
    document.getElementById('btn-start-timed').addEventListener('click', () => startGame(true));
    document.getElementById('btn-start-untimed').addEventListener('click', () => startGame(false));

    document.getElementById('btn-enter-room').addEventListener('click', () => {
        startTimer();
        loadRoom(0);
    });

    document.getElementById('btn-open-terminal').addEventListener('click', openTerminal);

    document.getElementById('btn-close-clue').addEventListener('click', () => modals.clue.classList.add('hidden'));
    document.getElementById('btn-dismiss-clue').addEventListener('click', () => modals.clue.classList.add('hidden'));

    document.getElementById('btn-close-terminal').addEventListener('click', () => modals.terminal.classList.add('hidden'));

    document.getElementById('btn-try-again').addEventListener('click', () => {
        modals.feedbackContainer.classList.add('hidden');
        const allOptionBtns = modals.optionsContainer.querySelectorAll('.btn-option');
        allOptionBtns.forEach(btn => {
            btn.disabled = false;
            btn.classList.remove('incorrect', 'correct');
        });
    });

    document.getElementById('btn-next-room').addEventListener('click', () => {
        modals.terminal.classList.add('hidden');
        if (currentState.currentRoomIndex + 1 < questionBank.length) {
            currentState.currentRoomIndex++;
            loadRoom(currentState.currentRoomIndex);
        } else {
            finishGame();
        }
    });

    document.getElementById('btn-restart').addEventListener('click', () => switchScreen('home'));
    document.getElementById('btn-home').addEventListener('click', () => switchScreen('home'));

    hud.btnSound.addEventListener('click', () => {
        currentState.soundEnabled = !currentState.soundEnabled;
        hud.btnSound.textContent = currentState.soundEnabled ? '🔊' : '🔇';
    });

});