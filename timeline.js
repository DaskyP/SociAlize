$(document).ready(function () {
    const posts = [
{ username: "Danna González", fullName: "Danna Sofía González", image: "https://picsum.photos/600/300?random=1", caption: "Disfrutando la puesta de sol!", likes: 120, liked: false },
{ username: "Juan Juanito", fullName: "Juan Pérez", video: "https://www.w3schools.com/html/mov_bbb.mp4", caption: "Pobre mariposa", likes: 200, liked: false }
];


    const timelineContainer = $("#timeline-container");

    posts.forEach((post, index) => {
        const postCard = $(`
        <div class="post-card">
<h5>@${post.username}</h5>
<p class="full-name">${post.fullName}</p> <!-- Agregar el nombre completo -->
${post.image ? `<img src="${post.image}" alt="${post.username}">` :
`<video controls><source src="${post.video}" type="video/mp4">Tu navegador no soporta el video.</video>`}
<p>${post.caption}</p>
<div class="like-container">
<img src="starboostrap.svg" class="like-btn" data-index="${index}" data-liked="false">
<span class="like-count">${post.likes} Likes</span>
</div>
</div>

        `);
        timelineContainer.append(postCard);
    });

    $(document).on("click", ".like-btn", function () {
        let index = $(this).attr("data-index");
        let isLiked = $(this).attr("data-liked") === "true";
        let likeCountElement = $(this).next(".like-count");

        if (isLiked) {
            posts[index].likes--;
            $(this).attr("src", "starboostrap.svg"); // Estrella vacía
        } else {
            posts[index].likes++;
            $(this).attr("src", "starfillboostrap.svg"); // Estrella llena
        }

        $(this).attr("data-liked", !isLiked);
        likeCountElement.text(`${posts[index].likes} Likes`);
    });
});
