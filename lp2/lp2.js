let attempt = 0;
        const correctDate = 25;

        function validateInput() {
            let tanggal = document.getElementById("tanggal").value;

            if (tanggal != correctDate) {
                attempt++;

                if (attempt >= 3) {
                    document.getElementById("warning-text").classList.remove("hidden");
                }
                return false;
            }
            window.location.href = "lp3.html";
            return false;
        }