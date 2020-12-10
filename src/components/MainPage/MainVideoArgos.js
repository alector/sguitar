import React from "react"

const MainVideoArgos = () => {
  const videoSrcURL = "https://www.youtube.com/watch?v=z9RJ2yiMjVA&t"
  const videoTitle = "ARGOS DUO | BLACK EARTH (Kara Toprak) by Fazil SAY  "

  return (
    <section className="argos-video">
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </section>
  )
}
export default MainVideoArgos

//  <iframe
// className="argos-video-frame"
// width="100%"
// src="https://www.youtube.com/embed/z9RJ2yiMjVA"
// ></iframe>
