const publicProfiles = [
    { username: "Danna González", image: "https://picsum.photos/300/220?random=1", caption: "Disfrutando la puesta de sol!", likes: 120 },
    { username: "Julissa", image: "https://picsum.photos/300/220?random=4", caption: "Viajando por el mundo!", likes: 95 },
    { username: "La Roca", image: "https://picsum.photos/300/220?random=3", caption: "Hora del café!", likes: 80 }
];

const profilesContainer = document.getElementById("profiles-container");

publicProfiles.forEach(profile => {
    const profileCard = document.createElement("div");
    profileCard.className = "col-md-4 mb-4";
    profileCard.innerHTML = `
        <div class="profile-card">
            ${profile.image ? `<img src="${profile.image}" alt="${profile.username}" class="profile-image">` : 
            `<video controls class="profile-video"><source src="${profile.video}" type="video/mp4">Tu navegador no soporta el video.</video>`}
            <div class="profile-content">
                <h5>@${profile.username}</h5>
                <p>${profile.caption}</p>
                <p><strong><img src="starfillboostrap.svg" class="star-icon"> ${profile.likes} Likes</strong></p>
            </div>
        </div>
    `;
    profilesContainer.appendChild(profileCard);
});
