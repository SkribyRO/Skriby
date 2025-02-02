  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("discordForm").addEventListener("submit", async function (event) {
        event.preventDefault(); // Oprește trimiterea clasică a formularului

        const webhookURL = "https://discord.com/api/webhooks/1335351317773680701/JMH9V9Mh4mtM8dJJr80nStDlwsY8MeYNeWA8T1ldEqJsS1nx69p8RJR5wqD4QMK3nZhn"; // Înlocuiește cu Webhook-ul tău

        // Preluăm valorile din formular
        const nume = document.getElementById("nume").value;
        const email = document.getElementById("email").value;
        const mesaj = document.getElementById("mesaj").value;

        // Creăm obiectul JSON pentru Discord
        const data = {
            username: "Formular Bot",
            avatar_url: "https://cdn-icons-png.flaticon.com/512/295/295128.png",
            content: `📩 **Formular nou trimis**:\n👤 **Nume:** ${nume}\n📧 **Email:** ${email}\n💬 **Mesaj:** ${mesaj}`
        };

        try {
            const response = await fetch(webhookURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log("✅ Formular trimis cu succes!");
                alert("Formular trimis cu succes pe Discord!");
                document.getElementById("discordForm").reset();
            } else {
                console.error("❌ Eroare la trimitere:", response.status, response.statusText);
                alert("Eroare la trimitere! Verifică consola pentru detalii.");
            }
        } catch (error) {
            console.error("❌ Eroare la rețea:", error);
            alert("Eroare la conectarea cu Discord! Vezi consola.");
        }
    });
});
