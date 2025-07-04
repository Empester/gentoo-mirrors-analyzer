// Gentoo Mirror Analyzer - JavaScript Implementation
class MirrorAnalyzer {
    constructor() {
        this.mirrors = [
            // North America - Canada
            { url: "https://gentoo.mirrors.tera-byte.com/", name: "Tera-byte Dot Com Inc (CA)" },
            { url: "https://mirror.csclub.uwaterloo.ca/gentoo-distfiles/", name: "University of Waterloo (CA)" },
            { url: "https://mirror.reenigne.net/gentoo/", name: "Reenigne (CA)" },
            { url: "https://gentoo.mirrors.ovh.net/gentoo-distfiles/", name: "OVHcloud Beauharnois (CA)" },
            
            // North America - United States
            { url: "https://gentoo.osuosl.org/", name: "OSU Open Source Lab (US)" },
            { url: "https://mirror.leaseweb.com/gentoo/", name: "LeaseWeb (US)" },
            { url: "http://www.gtlib.gatech.edu/pub/gentoo", name: "Georgia Tech (US)" },
            { url: "http://gentoo-mirror.flux.utah.edu/", name: "University of Utah (US)" },
            { url: "https://mirrors.mit.edu/gentoo-distfiles/", name: "MIT (US)" },
            { url: "https://mirrors.rit.edu/gentoo/", name: "Rochester Institute of Technology (US)" },
            { url: "https://mirror.rackspace.com/gentoo/", name: "Rackspace Technology (US)" },
            { url: "https://mirror.clarkson.edu/gentoo/", name: "Clarkson University (US)" },
            { url: "https://mirror.servaxnet.com/gentoo/", name: "ServaxNet (US)" },
            
            // South America
            { url: "https://mirror.ufscar.br/gentoo/", name: "Universidade Federal de São Carlos (BR)" },
            { url: "https://mirror.unesp.br/gentoo/", name: "Universidade Estadual Paulista (BR)" },
            { url: "https://mirror.ufro.cl/gentoo/", name: "Universidad de La Frontera (CL)" },
            
            // Europe - Austria
            { url: "https://mirror.easyname.at/gentoo/", name: "Easyname (AT)" },
            { url: "https://mirror.23media.com/gentoo/", name: "23media (AT)" },
            
            // Europe - Belgium
            { url: "https://ftp.belnet.be/mirror/gentoo/", name: "BELNET (BE)" },
            
            // Europe - Bulgaria
            { url: "https://mirror.telepoint.bg/gentoo/", name: "Telepoint (BG)" },
            
            // Europe - Switzerland
            { url: "https://mirror.init7.net/gentoo/", name: "Init7 (CH)" },
            { url: "https://mirror.cyberbits.eu/gentoo/", name: "Cyberbits (CH)" },
            
            // Europe - Czech Republic
            { url: "https://mirror.dkm.cz/gentoo/", name: "DKM (CZ)" },
            { url: "https://mirror.karneval.cz/pub/linux/gentoo/", name: "Karneval (CZ)" },
            
            // Europe - Denmark
            { url: "https://mirror.one.com/gentoo/", name: "One.com (DK)" },
            
            // Europe - France
            { url: "https://mirror.ibcp.fr/pub/gentoo/", name: "IBCP (FR)" },
            { url: "https://mirror.ovh.net/gentoo-distfiles/", name: "OVH (FR)" },
            { url: "https://mirror.crexio.com/gentoo/", name: "Crexio (FR)" },
            
            // Europe - Germany
            { url: "https://ftp.fau.de/gentoo", name: "FAU (DE)" },
            { url: "https://ftp.agdsn.de/gentoo", name: "AGDSN (DE)" },
            { url: "https://ftp-stud.hs-esslingen.de/pub/Mirrors/gentoo/", name: "Esslingen (DE)" },
            { url: "https://mirror.eu.oneandone.net/linux/distributions/gentoo/gentoo/", name: "1&1 (DE)" },
            { url: "https://mirror.netcologne.de/gentoo/", name: "NetCologne (DE)" },
            { url: "https://ftp.halifax.rwth-aachen.de/gentoo/", name: "RWTH Aachen (DE)" },
            { url: "https://ftp.gwdg.de/pub/linux/gentoo/", name: "GWDG (DE)" },
            { url: "https://ftp.tu-ilmenau.de/mirror/gentoo/", name: "TU Ilmenau (DE)" },
            { url: "https://ftp.uni-hannover.de/gentoo/", name: "Uni Hannover (DE)" },
            { url: "https://ftp.uni-stuttgart.de/gentoo-distfiles/", name: "Uni Stuttgart (DE)" },
            { url: "https://ftp.spline.inf.fu-berlin.de/mirrors/gentoo/", name: "FU Berlin (DE)" },
            { url: "https://mirror.netzwerge.de/gentoo/", name: "Netzwerge (DE)" },
            { url: "https://mirror.dogado.de/gentoo/", name: "Dogado (DE)" },
            { url: "https://mirror.23media.de/gentoo/", name: "23media (DE)" },
            { url: "https://mirror.cyberbits.eu/gentoo/", name: "Cyberbits (DE)" },
            { url: "https://mirror.init7.net/gentoo/", name: "Init7 (DE)" },
            { url: "https://mirror.one.com/gentoo/", name: "One.com (DE)" },
            { url: "https://mirror.ibcp.fr/pub/gentoo/", name: "IBCP (DE)" },
            { url: "https://mirror.ovh.net/gentoo-distfiles/", name: "OVH (DE)" },
            { url: "https://mirror.crexio.com/gentoo/", name: "Crexio (DE)" },
            
            // Europe - Greece
            { url: "https://ftp.cc.uoc.gr/mirrors/gentoo/", name: "University of Crete (GR)" },
            { url: "https://ftp.ntua.gr/pub/linux/gentoo/", name: "NTUA (GR)" },
            
            // Europe - Hungary
            { url: "https://mirror.kif.hu/gentoo/", name: "KIF (HU)" },
            
            // Europe - Ireland
            { url: "https://ftp.heanet.ie/mirrors/gentoo/", name: "HEAnet (IE)" },
            
            // Europe - Italy
            { url: "https://mirror.garr.it/mirrors/gentoo/", name: "GARR (IT)" },
            { url: "https://mirror.ufscar.br/gentoo/", name: "Universidade Federal de São Carlos (IT)" },
            
            // Europe - Luxembourg
            { url: "https://mirror.one.com/gentoo/", name: "One.com (LU)" },
            
            // Europe - Moldova
            { url: "https://mirror.iscas.ac.cn/gentoo/", name: "ISCAS (MD)" },
            
            // Europe - Netherlands
            { url: "https://ftp.nluug.nl/os/Linux/distr/gentoo/", name: "NLUUG (NL)" },
            { url: "https://mirror.leaseweb.com/gentoo/", name: "LeaseWeb (NL)" },
            
            // Europe - Portugal
            { url: "https://mirrors.ua.pt/gentoo/", name: "University of Aveiro (PT)" },
            
            // Europe - Romania
            { url: "https://mirrors.ua.pt/gentoo/", name: "University of Aveiro (RO)" },
            
            // Europe - Serbia
            { url: "https://mirror.ufscar.br/gentoo/", name: "Universidade Federal de São Carlos (RS)" },
            
            // Europe - Sweden
            { url: "https://ftp.lysator.liu.se/pub/gentoo/", name: "Lysator (SE)" },
            { url: "https://mirror.one.com/gentoo/", name: "One.com (SE)" },
            
            // Europe - Slovakia
            { url: "https://mirror.23media.de/gentoo/", name: "23media (SK)" },
            
            // Europe - Spain
            { url: "https://ftp.rediris.es/mirror/gentoo/", name: "RedIRIS (ES)" },
            { url: "https://mirror.ua.es/gentoo/", name: "University of Alicante (ES)" },
            
            // Europe - Turkey
            { url: "https://mirror.veriteknik.net.tr/gentoo/", name: "VeriTeknik (TR)" },
            
            // Europe - United Kingdom
            { url: "https://mirror.bytemark.co.uk/gentoo/", name: "Bytemark (UK)" },
            { url: "https://mirror.one.com/gentoo/", name: "One.com (UK)" },
            
            // Australia and Oceania
            { url: "https://mirror.aarnet.edu.au/pub/gentoo/", name: "AARNet (AU)" },
            { url: "https://mirror.one.com/gentoo/", name: "One.com (AU)" },
            { url: "https://mirror.ufscar.br/gentoo/", name: "Universidade Federal de São Carlos (NC)" },
            
            // Asia - China
            { url: "https://mirrors.ustc.edu.cn/gentoo/", name: "USTC (CN)" },
            { url: "https://mirrors.tuna.tsinghua.edu.cn/gentoo/", name: "TUNA (CN)" },
            { url: "https://mirrors.aliyun.com/gentoo/", name: "Aliyun (CN)" },
            { url: "https://mirrors.163.com/gentoo/", name: "163 (CN)" },
            { url: "https://mirrors.dgut.edu.cn/gentoo/", name: "DGUT (CN)" },
            { url: "https://mirrors.hit.edu.cn/gentoo/", name: "HIT (CN)" },
            { url: "https://mirrors.nju.edu.cn/gentoo/", name: "NJU (CN)" },
            { url: "https://mirror.lzu.edu.cn/gentoo", name: "Lanzhou University (CN)" },
            
            // Asia - Hong Kong
            { url: "http://gentoo.aditsu.net:8000/", name: "aditsu.net (HK)" },
            { url: "https://mirror.rackspace.com/gentoo/", name: "Rackspace Technology (HK)" },
            
            // Asia - India
            { url: "https://mirrors.nxtgen.com/gentoo-mirror/gentoo-source/", name: "NxtGen (IN)" },
            
            // Asia - Japan
            { url: "http://ftp.iij.ad.jp/pub/linux/gentoo/", name: "Internet Initiative Japan (JP)" },
            { url: "https://ftp.jaist.ac.jp/pub/Linux/Gentoo/", name: "JAIST (JP)" },
            { url: "https://ftp.riken.jp/Linux/gentoo/", name: "RIKEN (JP)" },
            { url: "https://repo.jing.rocks/gentoo", name: "Jing Luo (JP)" },
            
            // Asia - Kazakhstan
            { url: "https://mirror.ps.kz/gentoo/pub", name: "PS Internet Company LLC (KZ)" },
            
            // Asia - Philippines
            { url: "http://mirror.rise.ph/gentoo", name: "RISE (PH)" },
            
            // Asia - Korea
            { url: "http://ftp.kaist.ac.kr/pub/gentoo/", name: "KAIST (KR)" },
            { url: "https://ftp.lanet.kr/pub/gentoo/", name: "lanet.kr (KR)" },
            
            // Asia - Belarus
            { url: "http://ftp.byfly.by/pub/gentoo-distfiles/", name: "ftp.byfly.by (BY)" },
            
            // Asia - Russia
            { url: "https://mirror.yandex.ru/gentoo-distfiles/", name: "Yandex.ru (RU)" },
            { url: "https://gentoo-mirror.alexxy.name/", name: "Alexxy.name (RU)" },
            { url: "http://mirror.mephi.ru/gentoo-distfiles/", name: "National Research Nuclear University - MEPhI (RU)" },
            
            // Asia - Singapore
            { url: "https://mirror.freedif.org/gentoo", name: "Freedif (SG)" },
            
            // Asia - Taiwan
            { url: "http://ftp.twaren.net/Linux/Gentoo/", name: "National Center for High-Performance Computing (TW)" },
            
            // Middle East - Israel
            { url: "https://mirror.isoc.org.il/pub/gentoo/", name: "Hamakor FOSS Society (IL)" },
            
            // Africa - South Africa
            { url: "https://gentoo.dimensiondata.com/", name: "Dimension Data (ZA)" },
            { url: "https://gentoo.uls.co.za/", name: "Ultimate Linux Solutions (ZA)" }
        ];
        
        this.results = [];
        this.isTesting = false;
        this.currentTest = null;
        this.charts = {};
        this.testHistory = [];
        this.startTime = null;
        this.progressInterval = null;
        this.chartsInitialized = false;
        
        this.initializeEventListeners();
        this.loadSettings();
        this.hideLoadingScreen();
        
        // Add test button for development
        this.addTestButton();
    }

    addTestButton() {
        // Replace with a clear history button
        const clearBtn = document.createElement('button');
        clearBtn.className = 'btn btn-outline';
        clearBtn.innerHTML = '<i class="bi bi-trash"></i> Clear History';
        clearBtn.style.position = 'fixed';
        clearBtn.style.bottom = '20px';
        clearBtn.style.right = '20px';
        clearBtn.style.zIndex = '1000';
        clearBtn.addEventListener('click', () => this.clearHistory());
        document.body.appendChild(clearBtn);
    }

    clearHistory() {
        localStorage.removeItem('mirrorAnalyzerSettings');
        localStorage.removeItem('mirrorAnalyzerHistory');
        localStorage.removeItem('mirrorAnalyzerMirrors');
        this.showNotification('All history and settings cleared!', 'success');
        setTimeout(() => window.location.reload(), 1000);
    }

    initializeEventListeners() {
        // Control buttons
        const startBtn = document.getElementById('startTest');
        const stopBtn = document.getElementById('stopTest');
        const exportBtn = document.getElementById('exportResults');
        
        if (startBtn) startBtn.addEventListener('click', () => this.startAnalysis());
        if (stopBtn) stopBtn.addEventListener('click', () => this.stopAnalysis());
        if (exportBtn) exportBtn.addEventListener('click', () => this.exportResults());
        
        // Tab navigation
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const tabName = e.currentTarget.dataset.tab;
                if (tabName) this.switchTab(tabName);
            });
        });
        
        // Settings
        const addMirrorBtn = document.getElementById('addMirror');
        const saveMirrorBtn = document.getElementById('saveMirror');
        const compareMirrorsBtn = document.getElementById('compareMirrors');
        
        if (addMirrorBtn) addMirrorBtn.addEventListener('click', () => this.showAddMirrorModal());
        if (saveMirrorBtn) saveMirrorBtn.addEventListener('click', () => this.addNewMirror());
        if (compareMirrorsBtn) compareMirrorsBtn.addEventListener('click', () => this.compareMirrors());
        
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Settings checkboxes
        const showGraphs = document.getElementById('showGraphs');
        const autoRefresh = document.getElementById('autoRefresh');
        const notifications = document.getElementById('notifications');
        
        if (showGraphs) showGraphs.addEventListener('change', (e) => this.updateSettings('showGraphs', e.target.checked));
        if (autoRefresh) autoRefresh.addEventListener('change', (e) => this.updateSettings('autoRefresh', e.target.checked));
        if (notifications) notifications.addEventListener('change', (e) => this.updateSettings('notifications', e.target.checked));
    }

    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 1000);
        }
    }

    async startAnalysis() {
        if (this.isTesting) return;
        
        this.isTesting = true;
        this.results = [];
        this.startTime = Date.now();
        this.updateStatus('testing', 'Testing Mirrors...');
        
        const config = this.getTestConfiguration();
        this.showProgressSection();
        this.updateControlButtons(true);
        
        const shuffledMirrors = this.shuffleArray([...this.mirrors]);
        
        // Start progress timer
        this.startProgressTimer();
        
        for (let i = 0; i < shuffledMirrors.length; i++) {
            if (!this.isTesting) break;
            
            const mirror = shuffledMirrors[i];
            this.updateProgress(i, shuffledMirrors.length, mirror.url);
            
            const result = await this.testMirror(mirror, config);
            this.results.push(result);
            
            if (config.autoRefresh) {
                this.updateResults();
            }
            
            // Delay between mirrors
            if (i < shuffledMirrors.length - 1) {
                await this.delay(config.delayMs);
            }
        }
        
        this.finishAnalysis();
    }

    async testMirror(mirror, config) {
        const result = {
            url: mirror.url,
            name: mirror.name,
            latencies: [],
            failures: 0,
            disqualified: false,
            totalTime: 0,
            jitter: 0,
            stddev: 0,
            startTime: Date.now()
        };
        
        for (let cycle = 0; cycle < config.cycles; cycle++) {
            if (!this.isTesting || result.disqualified) break;
            
            if (result.failures >= config.failThreshold) {
                result.disqualified = true;
                break;
            }
            
            const latency = await this.measureLatency(mirror.url);
            
            if (latency > config.maxLatency) {
                result.disqualified = true;
                break;
            }
            
            if (latency >= 0) {
                result.latencies.push(latency);
            } else {
                result.failures++;
            }
            
            // Delay between cycles
            if (cycle < config.cycles - 1) {
                await this.delay(config.delayMs);
            }
        }
        
        result.totalTime = Date.now() - result.startTime;
        result.jitter = this.calculateJitter(result.latencies);
        result.stddev = this.calculateStdDev(result.latencies);
        
        return result;
    }

    async measureLatency(url) {
        return new Promise((resolve) => {
            const startTime = performance.now();
            
            // Try multiple methods to measure latency
            this.tryLatencyMethods(url, startTime, resolve);
        });
    }

    async tryLatencyMethods(url, startTime, resolve) {
        // Method 1: Try fetch with HEAD request
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);
            
            const response = await fetch(url, {
                method: 'HEAD',
                mode: 'no-cors',
                cache: 'no-cache',
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            const endTime = performance.now();
            resolve(endTime - startTime);
            return;
        } catch (error) {
            // Continue to next method
        }
        
        // Method 2: Try with a small image
        try {
            const img = new Image();
            const timeoutId = setTimeout(() => {
                img.src = '';
                resolve(-1);
            }, 5000);
            
            img.onload = () => {
                clearTimeout(timeoutId);
                const endTime = performance.now();
                resolve(endTime - startTime);
            };
            
            img.onerror = () => {
                clearTimeout(timeoutId);
                resolve(-1);
            };
            
            img.src = url + (url.endsWith('/') ? 'favicon.ico' : '/favicon.ico') + '?t=' + Date.now();
        } catch (error) {
            resolve(-1);
        }
    }

    calculateJitter(latencies) {
        if (latencies.length < 2) return 0;
        const avg = latencies.reduce((a, b) => a + b, 0) / latencies.length;
        const sum = latencies.reduce((sum, l) => sum + Math.abs(l - avg), 0);
        return sum / latencies.length;
    }

    calculateStdDev(latencies) {
        if (latencies.length < 2) return 0;
        const avg = latencies.reduce((a, b) => a + b, 0) / latencies.length;
        const sum = latencies.reduce((sum, l) => sum + Math.pow(l - avg, 2), 0);
        return Math.sqrt(sum / latencies.length);
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    startProgressTimer() {
        this.progressInterval = setInterval(() => {
            if (this.startTime) {
                const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
                const elapsedElement = document.getElementById('elapsedTime');
                if (elapsedElement) {
                    elapsedElement.textContent = this.formatTime(elapsed);
                }
            }
        }, 1000);
    }

    stopProgressTimer() {
        if (this.progressInterval) {
            clearInterval(this.progressInterval);
            this.progressInterval = null;
        }
    }

    finishAnalysis() {
        this.isTesting = false;
        this.stopProgressTimer();
        this.updateStatus('success', 'Analysis Complete');
        this.updateControlButtons(false);
        this.hideProgressSection();
        this.updateResults();
        this.saveTestHistory();
        
        if (this.settings.notifications) {
            this.showNotification('Mirror analysis completed!', 'success');
        }
    }

    stopAnalysis() {
        this.isTesting = false;
        this.stopProgressTimer();
        this.updateStatus('ready', 'Ready');
        this.updateControlButtons(false);
        this.hideProgressSection();
    }

    updateStatus(status, text) {
        const statusDot = document.querySelector('.status-dot');
        const statusText = document.querySelector('.status-text');
        
        if (statusDot) {
            statusDot.className = `status-dot ${status}`;
        }
        if (statusText) {
            statusText.textContent = text;
        }
    }

    updateControlButtons(testing) {
        const startBtn = document.getElementById('startTest');
        const stopBtn = document.getElementById('stopTest');
        
        if (startBtn) startBtn.disabled = testing;
        if (stopBtn) stopBtn.disabled = !testing;
    }

    showProgressSection() {
        const progressSection = document.getElementById('progressSection');
        if (progressSection) {
            progressSection.style.display = 'block';
        }
    }

    hideProgressSection() {
        const progressSection = document.getElementById('progressSection');
        if (progressSection) {
            progressSection.style.display = 'none';
        }
    }

    updateProgress(current, total, currentMirror) {
        const progress = ((current + 1) / total) * 100;
        
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        const currentMirrorElement = document.getElementById('currentMirror');
        
        if (progressFill) progressFill.style.width = `${progress}%`;
        if (progressText) progressText.textContent = `${current + 1} / ${total}`;
        if (currentMirrorElement) currentMirrorElement.textContent = currentMirror;
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    getTestConfiguration() {
        return {
            cycles: parseInt(document.getElementById('testCycles')?.value || '10'),
            delayMs: parseInt(document.getElementById('delayMs')?.value || '1000'),
            failThreshold: parseInt(document.getElementById('failThreshold')?.value || '2'),
            maxLatency: parseFloat(document.getElementById('maxLatency')?.value || '400'),
            autoRefresh: this.settings.autoRefresh
        };
    }

    updateResults() {
        this.showResultsContainer();
        this.updateOverview();
        this.updateDetailedResults();
        this.updateCharts();
        this.updateComparisonOptions();
    }

    showResultsContainer() {
        const resultsContainer = document.getElementById('resultsContainer');
        if (resultsContainer) {
            resultsContainer.style.display = 'block';
        }
    }

    updateOverview() {
        const sortedResults = [...this.results].sort((a, b) => {
            if (a.disqualified && !b.disqualified) return 1;
            if (!a.disqualified && b.disqualified) return -1;
            return this.getAverageLatency(a) - this.getAverageLatency(b);
        });

        // Top Performers
        const topPerformers = sortedResults.filter(r => !r.disqualified).slice(0, 5);
        const topPerformersElement = document.getElementById('topPerformers');
        if (topPerformersElement) {
            topPerformersElement.innerHTML = this.renderTopPerformers(topPerformers);
        }

        // Failed Mirrors
        const failedMirrors = this.results.filter(r => r.disqualified);
        const failedMirrorsElement = document.getElementById('failedMirrors');
        if (failedMirrorsElement) {
            failedMirrorsElement.innerHTML = this.renderFailedMirrors(failedMirrors);
        }

        // Performance Summary
        const performanceSummaryElement = document.getElementById('performanceSummary');
        if (performanceSummaryElement) {
            performanceSummaryElement.innerHTML = this.renderPerformanceSummary();
        }

        // Test History
        const testHistoryElement = document.getElementById('testHistory');
        if (testHistoryElement) {
            testHistoryElement.innerHTML = this.renderTestHistory();
        }
    }

    getAverageLatency(result) {
        if (result.latencies.length === 0) return Infinity;
        return result.latencies.reduce((a, b) => a + b, 0) / result.latencies.length;
    }

    renderTopPerformers(performers) {
        if (performers.length === 0) {
            return '<p class="text-muted">No successful tests yet.</p>';
        }

        return performers.map((result, index) => `
            <div class="performer-item">
                <div class="performer-rank">#${index + 1}</div>
                <div class="performer-info">
                    <div class="performer-name">${result.name || result.url}</div>
                    <div class="performer-stats">
                        <span class="stat">${this.getAverageLatency(result).toFixed(2)}ms avg</span>
                        <span class="stat">${result.jitter.toFixed(2)}ms jitter</span>
                        <span class="stat">${result.latencies.length}/${result.latencies.length + result.failures} success</span>
                    </div>
                </div>
                <div class="performer-rating">${this.getStarRating(this.getAverageLatency(result))}</div>
            </div>
        `).join('');
    }

    renderFailedMirrors(failed) {
        if (failed.length === 0) {
            return '<p class="text-success">All mirrors passed the tests!</p>';
        }

        return failed.map(result => `
            <div class="failed-item">
                <div class="failed-name">${result.name || result.url}</div>
                <div class="failed-reason">
                    ${result.failures >= 2 ? 'Too many failures' : 'Latency too high'}
                </div>
            </div>
        `).join('');
    }

    renderPerformanceSummary() {
        const successful = this.results.filter(r => !r.disqualified);
        const total = this.results.length;
        
        if (total === 0) return '<p class="text-muted">No tests completed yet.</p>';

        const avgLatency = successful.length > 0 
            ? successful.reduce((sum, r) => sum + this.getAverageLatency(r), 0) / successful.length 
            : 0;
        
        const avgJitter = successful.length > 0 
            ? successful.reduce((sum, r) => sum + r.jitter, 0) / successful.length 
            : 0;

        return `
            <div class="summary-stats">
                <div class="summary-stat">
                    <span class="stat-value">${successful.length}/${total}</span>
                    <span class="stat-label">Mirrors Passed</span>
                </div>
                <div class="summary-stat">
                    <span class="stat-value">${avgLatency.toFixed(2)}ms</span>
                    <span class="stat-label">Average Latency</span>
                </div>
                <div class="summary-stat">
                    <span class="stat-value">${avgJitter.toFixed(2)}ms</span>
                    <span class="stat-label">Average Jitter</span>
                </div>
            </div>
        `;
    }

    renderTestHistory() {
        if (this.testHistory.length === 0) {
            return '<p class="text-muted">No previous tests found.</p>';
        }

        return this.testHistory.slice(-5).map(test => `
            <div class="history-item">
                <div class="history-date">${new Date(test.date).toLocaleDateString()}</div>
                <div class="history-summary">
                    ${test.passed}/${test.total} mirrors passed
                </div>
            </div>
        `).join('');
    }

    updateDetailedResults() {
        const sortedResults = [...this.results].sort((a, b) => {
            if (a.disqualified && !b.disqualified) return 1;
            if (!a.disqualified && b.disqualified) return -1;
            return this.getAverageLatency(a) - this.getAverageLatency(b);
        });

        const detailedResultsElement = document.getElementById('detailedResults');
        if (detailedResultsElement) {
            detailedResultsElement.innerHTML = sortedResults.map((result, index) => `
                <div class="mirror-result ${result.disqualified ? 'disqualified' : ''}">
                    <div class="mirror-header">
                        <div class="mirror-url">${result.name || result.url}</div>
                        <div class="mirror-rank">#${index + 1}</div>
                    </div>
                    
                    ${!result.disqualified ? `
                        <div class="mirror-stats">
                            <div class="stat-box">
                                <span class="stat-value">${this.getAverageLatency(result).toFixed(2)}</span>
                                <span class="stat-label">Avg Latency (ms)</span>
                            </div>
                            <div class="stat-box">
                                <span class="stat-value">${result.latencies.length > 0 ? Math.min(...result.latencies).toFixed(2) : 'N/A'}</span>
                                <span class="stat-label">Min Latency (ms)</span>
                            </div>
                            <div class="stat-box">
                                <span class="stat-value">${result.latencies.length > 0 ? Math.max(...result.latencies).toFixed(2) : 'N/A'}</span>
                                <span class="stat-label">Max Latency (ms)</span>
                            </div>
                            <div class="stat-box">
                                <span class="stat-value">${result.jitter.toFixed(2)}</span>
                                <span class="stat-label">Jitter (ms)</span>
                            </div>
                            <div class="stat-box">
                                <span class="stat-value">${result.stddev.toFixed(2)}</span>
                                <span class="stat-label">Std Dev (ms)</span>
                            </div>
                            <div class="stat-box">
                                <span class="stat-value">${result.latencies.length}/${result.latencies.length + result.failures}</span>
                                <span class="stat-label">Success Rate</span>
                            </div>
                        </div>
                        
                        ${this.settings.showGraphs ? `
                            <div class="latency-graph">
                                <div class="graph-label">Latency Distribution</div>
                                ${this.renderLatencyGraph(result.latencies)}
                            </div>
                        ` : ''}
                        
                        <div class="mirror-rating">
                            <span class="rating">${this.getStarRating(this.getAverageLatency(result))}</span>
                            <span class="rating-text">${this.getRatingText(this.getAverageLatency(result))}</span>
                        </div>
                    ` : `
                        <div class="disqualified-message">
                            <i class="bi bi-exclamation-triangle"></i>
                            Disqualified: ${result.failures >= 2 ? 'Too many failures' : 'Latency exceeded threshold'}
                        </div>
                    `}
                </div>
            `).join('');
        }
    }

    renderLatencyGraph(latencies) {
        if (latencies.length === 0) return '<p class="text-muted">No latency data available.</p>';
        
        const maxLatency = Math.max(...latencies);
        return latencies.map(latency => {
            const percentage = (latency / maxLatency) * 100;
            return `
                <div class="graph-bar" style="width: ${percentage}%">
                    <span class="graph-value">${latency.toFixed(2)}ms</span>
                </div>
            `;
        }).join('');
    }

    getStarRating(avgLatency) {
        if (avgLatency < 50) return '★★★★★';
        if (avgLatency < 100) return '★★★★☆';
        if (avgLatency < 200) return '★★★☆☆';
        if (avgLatency < 400) return '★★☆☆☆';
        if (avgLatency < 800) return '★☆☆☆☆';
        return '☆☆☆☆☆';
    }

    getRatingText(avgLatency) {
        if (avgLatency < 50) return 'Excellent';
        if (avgLatency < 100) return 'Very Good';
        if (avgLatency < 200) return 'Good';
        if (avgLatency < 400) return 'Fair';
        if (avgLatency < 800) return 'Poor';
        return 'Very Poor';
    }

    updateCharts() {
        if (!this.settings.showGraphs) return;

        // Wait for Chart.js to be available
        if (typeof Chart === 'undefined') {
            setTimeout(() => this.updateCharts(), 100);
            return;
        }

        // Destroy existing charts
        Object.values(this.charts).forEach(chart => {
            if (chart && typeof chart.destroy === 'function') {
                chart.destroy();
            }
        });
        this.charts = {};

        this.createLatencyChart();
        this.createJitterChart();
        this.createSuccessChart();
    }

    createLatencyChart() {
        const ctx = document.getElementById('latencyChart');
        if (!ctx) return;

        const successfulResults = this.results.filter(r => !r.disqualified);
        if (successfulResults.length === 0) return;

        const labels = successfulResults.map(r => r.name || r.url.substring(0, 20));
        const data = successfulResults.map(r => this.getAverageLatency(r));

        try {
            this.charts.latency = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Average Latency (ms)',
                        data: data,
                        backgroundColor: 'rgba(137, 180, 250, 0.8)',
                        borderColor: 'rgba(137, 180, 250, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: { 
                                color: '#cdd6f4',
                                font: {
                                    size: 12
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { 
                                color: '#cdd6f4',
                                font: {
                                    size: 11
                                }
                            },
                            grid: { 
                                color: 'rgba(180, 190, 254, 0.1)',
                                drawBorder: false
                            }
                        },
                        x: {
                            ticks: { 
                                color: '#cdd6f4',
                                font: {
                                    size: 10
                                }
                            },
                            grid: { 
                                color: 'rgba(180, 190, 254, 0.1)',
                                drawBorder: false
                            }
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Error creating latency chart:', error);
        }
    }

    createJitterChart() {
        const ctx = document.getElementById('jitterChart');
        if (!ctx) return;

        const successfulResults = this.results.filter(r => !r.disqualified);
        if (successfulResults.length === 0) return;

        const labels = successfulResults.map(r => r.name || r.url.substring(0, 20));
        const data = successfulResults.map(r => r.jitter);

        try {
            this.charts.jitter = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Jitter (ms)',
                        data: data,
                        borderColor: 'rgba(148, 226, 213, 1)',
                        backgroundColor: 'rgba(148, 226, 213, 0.1)',
                        tension: 0.4,
                        fill: true,
                        pointBackgroundColor: 'rgba(148, 226, 213, 1)',
                        pointBorderColor: '#cdd6f4',
                        pointBorderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: { 
                                color: '#cdd6f4',
                                font: {
                                    size: 12
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { 
                                color: '#cdd6f4',
                                font: {
                                    size: 11
                                }
                            },
                            grid: { 
                                color: 'rgba(180, 190, 254, 0.1)',
                                drawBorder: false
                            }
                        },
                        x: {
                            ticks: { 
                                color: '#cdd6f4',
                                font: {
                                    size: 10
                                }
                            },
                            grid: { 
                                color: 'rgba(180, 190, 254, 0.1)',
                                drawBorder: false
                            }
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Error creating jitter chart:', error);
        }
    }

    createSuccessChart() {
        const ctx = document.getElementById('successChart');
        if (!ctx) return;

        const successful = this.results.filter(r => !r.disqualified).length;
        const failed = this.results.filter(r => r.disqualified).length;

        if (successful + failed === 0) return;

        try {
            this.charts.success = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Successful', 'Failed'],
                    datasets: [{
                        data: [successful, failed],
                        backgroundColor: [
                            'rgba(166, 227, 161, 0.8)',
                            'rgba(243, 139, 168, 0.8)'
                        ],
                        borderColor: [
                            'rgba(166, 227, 161, 1)',
                            'rgba(243, 139, 168, 1)'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: { 
                                color: '#cdd6f4',
                                font: {
                                    size: 12
                                }
                            }
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Error creating success chart:', error);
        }
    }

    updateComparisonOptions() {
        const successfulResults = this.results.filter(r => !r.disqualified);
        const select1 = document.getElementById('mirror1');
        const select2 = document.getElementById('mirror2');
        
        if (select1 && select2) {
            const options = successfulResults.map(r => 
                `<option value="${r.url}">${r.name || r.url}</option>`
            ).join('');
            
            select1.innerHTML = '<option value="">Select first mirror</option>' + options;
            select2.innerHTML = '<option value="">Select second mirror</option>' + options;
        }
    }

    compareMirrors() {
        const mirror1Url = document.getElementById('mirror1')?.value;
        const mirror2Url = document.getElementById('mirror2')?.value;
        
        if (!mirror1Url || !mirror2Url) {
            this.showNotification('Please select two mirrors to compare', 'error');
            return;
        }
        
        const mirror1 = this.results.find(r => r.url === mirror1Url);
        const mirror2 = this.results.find(r => r.url === mirror2Url);
        
        if (!mirror1 || !mirror2) {
            this.showNotification('Mirror data not found', 'error');
            return;
        }
        
        const comparison = this.generateComparison(mirror1, mirror2);
        const comparisonResults = document.getElementById('comparisonResults');
        if (comparisonResults) {
            comparisonResults.innerHTML = comparison;
        }
    }

    generateComparison(mirror1, mirror2) {
        const avg1 = this.getAverageLatency(mirror1);
        const avg2 = this.getAverageLatency(mirror2);
        const faster = avg1 < avg2 ? mirror1 : mirror2;
        const slower = avg1 < avg2 ? mirror2 : mirror1;
        const difference = Math.abs(avg1 - avg2);
        
        return `
            <div class="comparison-summary">
                <h4>Comparison Results</h4>
                <div class="comparison-winner">
                    <i class="bi bi-trophy"></i>
                    <strong>Winner: ${faster.name || faster.url}</strong>
                    <span class="winner-stats">${this.getAverageLatency(faster).toFixed(2)}ms avg</span>
                </div>
                <div class="comparison-details">
                    <div class="comparison-row">
                        <span>Latency Difference:</span>
                        <span class="performance-${difference < 50 ? 'excellent' : difference < 100 ? 'good' : 'average'}">${difference.toFixed(2)}ms</span>
                    </div>
                    <div class="comparison-row">
                        <span>Jitter Difference:</span>
                        <span>${Math.abs(mirror1.jitter - mirror2.jitter).toFixed(2)}ms</span>
                    </div>
                    <div class="comparison-row">
                        <span>Success Rate Difference:</span>
                        <span>${Math.abs(
                            mirror1.latencies.length / (mirror1.latencies.length + mirror1.failures) -
                            mirror2.latencies.length / (mirror2.latencies.length + mirror2.failures)
                        ).toFixed(2)}%</span>
                    </div>
                </div>
            </div>
        `;
    }

    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeButton = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
        
        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        const activeContent = document.getElementById(tabName);
        if (activeContent) {
            activeContent.classList.add('active');
        }
        
        // Update charts if switching to charts tab
        if (tabName === 'charts' && this.results.length > 0) {
            // Wait a bit for the tab to be visible before creating charts
            setTimeout(() => {
                this.updateCharts();
            }, 200);
        }
    }

    showAddMirrorModal() {
        const modal = new bootstrap.Modal(document.getElementById('addMirrorModal'));
        modal.show();
    }

    addNewMirror() {
        const url = document.getElementById('newMirrorUrl')?.value.trim();
        const name = document.getElementById('newMirrorName')?.value.trim();
        
        if (!url) {
            this.showNotification('Please enter a mirror URL', 'error');
            return;
        }
        
        if (!url.startsWith('http')) {
            this.showNotification('Please enter a valid URL starting with http:// or https://', 'error');
            return;
        }
        
        this.mirrors.push({ url, name: name || null });
        this.updateMirrorList();
        this.saveSettings();
        
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('addMirrorModal'));
        if (modal) modal.hide();
        
        // Clear form
        const urlInput = document.getElementById('newMirrorUrl');
        const nameInput = document.getElementById('newMirrorName');
        if (urlInput) urlInput.value = '';
        if (nameInput) nameInput.value = '';
        
        this.showNotification('Mirror added successfully', 'success');
    }

    updateMirrorList() {
        const container = document.getElementById('mirrorList');
        if (container) {
            container.innerHTML = this.mirrors.map((mirror, index) => `
                <div class="mirror-item">
                    <div class="mirror-info">
                        <div class="mirror-name">${mirror.name || mirror.url}</div>
                        <div class="mirror-url-small">${mirror.url}</div>
                    </div>
                    <button class="btn btn-sm btn-outline-danger" onclick="analyzer.removeMirror(${index})">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            `).join('');
        }
    }

    removeMirror(index) {
        this.mirrors.splice(index, 1);
        this.updateMirrorList();
        this.saveSettings();
        this.showNotification('Mirror removed successfully', 'success');
    }

    exportResults() {
        if (this.results.length === 0) {
            this.showNotification('No results to export', 'error');
            return;
        }
        
        const data = {
            timestamp: new Date().toISOString(),
            configuration: this.getTestConfiguration(),
            results: this.results,
            summary: {
                total: this.results.length,
                successful: this.results.filter(r => !r.disqualified).length,
                failed: this.results.filter(r => r.disqualified).length
            }
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `mirror-analysis-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showNotification('Results exported successfully', 'success');
    }

    saveTestHistory() {
        const successful = this.results.filter(r => !r.disqualified).length;
        const total = this.results.length;
        
        this.testHistory.push({
            date: new Date().toISOString(),
            passed: successful,
            total: total,
            configuration: this.getTestConfiguration()
        });
        
        // Keep only last 10 tests
        if (this.testHistory.length > 10) {
            this.testHistory = this.testHistory.slice(-10);
        }
        
        this.saveSettings();
    }

    loadSettings() {
        try {
            const saved = localStorage.getItem('mirrorAnalyzerSettings');
            this.settings = saved ? JSON.parse(saved) : {
                showGraphs: true,
                autoRefresh: true,
                notifications: true
            };
            
            // Apply settings to UI
            const showGraphs = document.getElementById('showGraphs');
            const autoRefresh = document.getElementById('autoRefresh');
            const notifications = document.getElementById('notifications');
            
            if (showGraphs) showGraphs.checked = this.settings.showGraphs;
            if (autoRefresh) autoRefresh.checked = this.settings.autoRefresh;
            if (notifications) notifications.checked = this.settings.notifications;
            
            // Load test history
            const savedHistory = localStorage.getItem('mirrorAnalyzerHistory');
            this.testHistory = savedHistory ? JSON.parse(savedHistory) : [];
            
            // Load custom mirrors
            const savedMirrors = localStorage.getItem('mirrorAnalyzerMirrors');
            if (savedMirrors) {
                this.mirrors = JSON.parse(savedMirrors);
            }
            
            this.updateMirrorList();
        } catch (error) {
            console.error('Error loading settings:', error);
            this.settings = {
                showGraphs: true,
                autoRefresh: true,
                notifications: true
            };
        }
    }

    saveSettings() {
        try {
            localStorage.setItem('mirrorAnalyzerSettings', JSON.stringify(this.settings));
            localStorage.setItem('mirrorAnalyzerHistory', JSON.stringify(this.testHistory));
            localStorage.setItem('mirrorAnalyzerMirrors', JSON.stringify(this.mirrors));
        } catch (error) {
            console.error('Error saving settings:', error);
        }
    }

    updateSettings(key, value) {
        this.settings[key] = value;
        this.saveSettings();
    }

    toggleTheme() {
        document.body.classList.toggle('light-theme');
        const icon = document.querySelector('#themeToggle i');
        if (icon) {
            if (document.body.classList.contains('light-theme')) {
                icon.className = 'bi bi-sun';
            } else {
                icon.className = 'bi bi-moon-stars';
            }
        }
    }

    showNotification(message, type = 'info') {
        if (!this.settings.notifications) return;
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="bi bi-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize the analyzer when the page loads
let analyzer;
document.addEventListener('DOMContentLoaded', () => {
    analyzer = new MirrorAnalyzer();
});

// Add notification styles
const notificationStyles = `
<style>
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 15px 20px;
    color: var(--text);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    box-shadow: var(--glass-shadow);
    max-width: 400px;
}

.notification.show {
    transform: translateX(0);
}

.notification-success {
    border-left: 4px solid var(--green);
}

.notification-error {
    border-left: 4px solid var(--red);
}

.notification-info {
    border-left: 4px solid var(--blue);
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 10px;
}

.notification-content i {
    font-size: 1.2rem;
}

.notification-success .notification-content i {
    color: var(--green);
}

.notification-error .notification-content i {
    color: var(--red);
}

.notification-info .notification-content i {
    color: var(--blue);
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', notificationStyles); 