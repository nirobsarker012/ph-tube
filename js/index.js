console.log("Hello");

const loadCategories = () => {
  // fething link
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //   promise call stack
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
};

// category function
const displayCategories = (categories) => {
  const categoryContainer = document.querySelector(".category-container");
  for (let cat of categories) {
    // console.log(cat.category);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `<button
              class="bg-[rgba(37,37,37,0.15)] rounded-[4px] text-black py-[6.5px] px-[20px] font-medium text-[18px] hover:bg-[#FF1F3D] hover:text-[#ffff] duration-200"
            >${cat.category}
            </button>`;

    categoryContainer.append(btnDiv);
  }
};

// Videos functions
const displayVideos = (videos) => {
  //   console.log(videos);
  const videoContainer = document.querySelector(".video-container");
  for (let vi of videos) {
    console.log(vi);
    const videoDiv = document.createElement("div");
    videoDiv.innerHTML = `
                    <div class="w-[312px] flex flex-col">
                    <div class="relative">
                    <img src="${vi.thumbnail}" alt="" class="w-full h-[200px] rounded-[8px]">
                    <span class="absolute bg-black text-[#fff] text-[10px]  px-[5px] py-[4px] rounded-[4px] bottom-3 right-4">3hrs 56 min ago</span>
                </div>
                    <div class="flex items-start gap-[12px] mt-[20px]">
                        <div class="avatar">
                            <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                              <img src="${vi.authors[0].profile_picture}" />
                            </div>
                          </div>
                          <div class="flex flex-col gap-[4px]">
                            <h2 class="font-bold text-[#171717] text-[16px]">Building a Winning UX Strategy Using the Kano Model</h2>
                            <div class="flex gap-[8px]">
                                <span class="text-[rgba(23,23,23,0.7)] text-[14px]">${vi.authors[0].profile_name}</span>
                                <img src="../assets/verifed.svg" alt="" class="">
                            </div>
                            <span class="text-[rgba(23,23,23,0.7)] text-[14px]">${vi.others.views}</span>
                          </div>
                    </div>
                </div>
    `;
    videoContainer.append(videoDiv);
  }
};

// Call the functions
loadCategories();
loadVideos();

// {
//     "category_id": "1001",
//     "video_id": "aaab",
//     "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
//     "title": "Midnight Serenade",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
//             "profile_name": "Noah Walker",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "543K",
//         "posted_date": ""
//     },
//     "description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
// }
