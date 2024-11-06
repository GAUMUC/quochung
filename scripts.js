let links = [
  "https://www.youtube.com/watch?v=RvNcGgMtf38",
  "https://web.facebook.com/reel/1185408302521740",
  "https://web.facebook.com/reel/1097223367951825",
  "https://www.facebook.com/reel/1293329844970586/?mibextid=9drbnH&s=yWDuG2&fs=e",
  "https://www.facebook.com/reel/461712193541452",
  "https://www.youtube.com/watch?v=1QXBNUNS3_I",
  "https://www.youtube.com/watch?v=V6e34SBzyik?si=gCHQCTtCKFXaFMCh",
  "https://www.facebook.com/reel/8330636817019243?mibextid=9drbnH&s=yWDuG2&fs=e",
  "https://web.facebook.com/reel/2218715265194650",
];

links = links.map((link) => {
  if (link.includes("youtube.com/watch?v=")) {
    // Chuyển đổi link YouTube sang dạng nhúng
    return link.replace("youtube.com/watch?v=", "youtube.com/embed/");
  } else if (link.includes("facebook.com/reel/")) {
    // Chuyển đổi link Facebook Reel sang dạng nhúng
    const reelId = link.split("facebook.com/reel/")[1].split("&")[0];
    return `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/${reelId}`;
  }
  // else if (link.includes("facebook.com/share/r")) {
  //   const shareId = link.split("facebook.com/share/r")[1].split("&")[0];
  //   return `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/r${shareId}`;
  // }

  return link;
});

links.forEach((link) => {
  const iframe = document.createElement("iframe");
  iframe.src = link;
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  document.body.appendChild(iframe);
});
