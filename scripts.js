let links = [
  "https://www.youtube.com/watch?v=RvNcGgMtf38",
  "https://www.facebook.com/plugins/video.php?href=https://web.facebook.com/reel/1185408302521740&width=400",
  ""https://www.facebook.com/reel/8339511266117672",
  "https://www.youtube.com/watch?v=1QXBNUNS3_I",
  "https://www.youtube.com/watch?v=V6e34SBzyik?si=gCHQCTtCKFXaFMCh",
  "https://www.youtube.com/watch?v=V6e34SBzyik",
];

links = links.map((link) => {
  if (link.includes("youtube.com/watch?v=")) {
    return link.replace("youtube.com/watch?v=", "youtube.com/embed/", "");
    else if (link.includes("facebook.com/reel/")) {
    // Mở trong tab mới nếu là Facebook Reel
    window.open(link, "_blank");
    return null;
  }
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
