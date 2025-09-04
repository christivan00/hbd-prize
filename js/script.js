function openSurprise() {
        // Sembunyiin overlay
        document.getElementById("overlay").style.display = "none";
        // Tampilkan konten utama
        document.getElementById("main-content").style.display = "flex";
        // Play musik
        document.getElementById("bg-music").play();

        let duration = 3 * 1000; 
        let end = Date.now() + duration;

        (function frame() {
            confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
            });
            confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
            });

            if (Date.now() < end) {
            requestAnimationFrame(frame);
            }
        }());
        }