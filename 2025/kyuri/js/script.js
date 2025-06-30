window.onload = () => {
  const video = document.getElementById('mainVideo');
  const videoSource = document.getElementById('videoSource');
  const audio = document.getElementById('mainAudio');

  // ✅ 디바이스 구분
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // 모바일 영상
    videoSource.src = "./video/mobile.mp4";
  } else {
    // PC 영상
    videoSource.src = "./video/main.mp4";
  }

  video.load();
  video.play();

  // PC: 화면 클릭 시 사운드 재생
  document.body.addEventListener("click", () => {
    audio.play()
      .then(() => console.log("✅ 사운드 재생됨"))
      .catch(err => console.error("❌ 사운드 재생 실패:", err));
  });

  // 모바일: 화면 터치 시 사운드 재생
  document.body.addEventListener("touchstart", () => {
    audio.play()
      .then(() => console.log("✅ 사운드 재생됨"))
      .catch(err => console.error("❌ 사운드 재생 실패:", err));
  });
};
