$(document).ready(function () {
    const posts = [
        { image: "https://picsum.photos/600/300?random=1", likes: 120 },
        { video: "https://www.w3schools.com/html/mov_bbb.mp4", likes: 95 },
        { image: "https://picsum.photos/600/300?random=2", likes: 150 },
        { image: "https://picsum.photos/600/300?random=3", likes: 150 }
    ];

    const galleryContainer = $("#gallery-container");

    posts.forEach((post, index) => {
        const postCard = $(`
            <div class="col">
                <div class="post-card">
                    ${post.image ? `<img src="${post.image}" alt="Publicación">` :
                    `<video controls><source src="${post.video}" type="video/mp4">Tu navegador no soporta el video.</video>`}
                    <div class="like-container">
                        <img src="starboostrap.svg" class="like-btn" data-index="${index}" data-liked="false">
                        <span class="like-count">${post.likes} Likes</span>
                    </div>
                </div>
            </div>
        `);
        galleryContainer.append(postCard);
    });

    $(document).on("click", ".like-btn", function () {
        let index = $(this).attr("data-index");
        let isLiked = $(this).attr("data-liked") === "true";
        let likeCountElement = $(this).next(".like-count");

        posts[index].likes += isLiked ? -1 : 1;
        $(this).attr("src", isLiked ? "starboostrap.svg" : "starfillboostrap.svg");
        $(this).attr("data-liked", !isLiked);
        likeCountElement.text(`${posts[index].likes} Likes`);
    });
});
