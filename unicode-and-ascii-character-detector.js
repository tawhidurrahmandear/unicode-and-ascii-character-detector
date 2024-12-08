// Unicode and ASCII Character Detector
// developed by Tawhidur Rahman Dear, https://www.tawhidurrahmandear.com
// Live Preview available at https://www.devilhunter.net/p/unicode-and-ascii-character-detector.html


       document.addEventListener("DOMContentLoaded", function () {
            const textInput = document.getElementById("unicode-and-ascii-character-detector_textInput");
            const analyzeButton = document.getElementById("unicode-and-ascii-character-detector_analyzeButton");
            const resultGrid = document.getElementById("unicode-and-ascii-character-detector_resultGrid");

            analyzeButton.addEventListener("click", () => {
                const text = textInput.value.trim();
                resultGrid.innerHTML = ""; // Clear previous results

                if (!text) {
                    resultGrid.textContent = "Please enter some text to analyze.";
                    return;
                }

                [...text].forEach((char) => {
                    const asciiCode = char.charCodeAt(0);
                    const cell = document.createElement("div");
                    cell.className = "unicode-and-ascii-character-detector_resultCell";

                    if (asciiCode <= 127) {
                        // ASCII range
                        if (/[!@#$%^&*(),.?":{}|<>]/.test(char)) {
                            cell.classList.add("unicode-and-ascii-character-detector_asciiSymbol"); // ASCII Symbol
                        } else {
                            cell.classList.add("unicode-and-ascii-character-detector_asciiCharacter"); // ASCII Character
                        }
                    } else {
                        // Unicode range
                        if (/[\p{P}\p{S}]/u.test(char)) {
                            cell.classList.add("unicode-and-ascii-character-detector_unicodeSymbol"); // Unicode Symbol
                        } else {
                            cell.classList.add("unicode-and-ascii-character-detector_unicodeCharacter"); // Unicode Character
                        }
                    }

                    cell.innerHTML = char === " " ? '<span class="space">␣</span>' : char; // Represent spaces with ␣
                    resultGrid.appendChild(cell);
                });
            });
        });
 