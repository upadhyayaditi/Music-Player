import { useState } from "react"
import Player from "./components/Player"
import { useEffect } from "react"


function App() {
  const [songs] = useState([
    {
      title: "Akhiyaan Gulab",
      artist: "Mitraz",
      img_src: "https://c.saavncdn.com/878/Akhiyaan-Gulaab-From-Teri-Baaton-Mein-Aisa-Uljha-Jiya-Hindi-2024-20240119131017-500x500.jpg",
      src: "./songs/Akhiyan Gulab.mp3"
    },
    {
      title: "Amplifier",
      artist: "Imran Khan",
      img_src: "https://i1.sndcdn.com/artworks-000234660209-69hvb1-t500x500.jpg",
      src: "./songs/Amplifier.mp3"
    },
    {
      title: "Baby",
      artist: "Justin Bieber",
      img_src: "https://i.scdn.co/image/ab67616d00001e02629dc9e2e3bc20bbd7d92e4a",
      src: "./songs/Baby.mp3"
    },
    {
      title: "Blue Eyes",
      artist: "Yo Yo Honey Singh",
      img_src: "https://i.scdn.co/image/ab67616d0000b27346a4f62d210c2cb02158eac7",
      src: "./songs/Blue Eyes.mp3"
    },
    {
      title: "I Hate Luv Story",
      artist: "Vishal Dadlani",
      img_src: "https://c.saavncdn.com/200/I-Hate-Luv-Storys-Hindi-2010-20190603134705-500x500.jpg",
      src: "./songs/I Hate Luv Story.mp3"
    },
    {
      title: "Dooriyan",
      artist: "Mohit Chauhan",
      img_src: "https://c.saavncdn.com/827/Love-Aaj-Kal-Hindi-2009-20230430081730-500x500.jpg",
      src: "./songs/Dooriyan.mp3"
    },
    {
      title: "Khuda Jaane",
      artist: "Vishal-Shekhar, K.K., Shilpa Rao",
      img_src: "https://i.scdn.co/image/ab67616d0000b2731499a3fc0bdd9aa3213687b5",
      src: "./songs/Khuda Jaane.mp3"
    },
    {
      title: "Levitating",
      artist: "Dua Lipa",
      img_src: "https://i.scdn.co/image/ab67616d00001e022172b607853fa89cefa2beb4",
      src: "./songs/Levitating.mp3"
    },
    {
      title: "Tera Hone Laga hoon",
      artist: "Atif Aslam",
      img_src: "https://c.saavncdn.com/792/Ajab-Prem-Ki-Ghazab-Kahani-Hindi-2009-20230804160740-500x500.jpg",
      src: "./songs/Tera Hone Laga.mp3"
    },
    {
      title: "Pehle Bhi main",
      artist: "Vishal Mishra",
      img_src: "https://i.scdn.co/image/ab67616d0000b2735f3ede47954a93aa03efe5f9",
      src: "./songs/Pehle Bhi Main.mp3"
    },
    {
      title: "Kabhi kabhi Aditi",
      artist: "Rashid Ali",
      img_src: "https://c-fa.cdn.smule.com/rs-s79/arr/fc/ac/5a829af7-f132-4d23-9b12-5bf39af1e7e3.jpg",
      src: "./songs/Kabhi Kabhi Aditi.mp3"
    },
    {
      title: "Tujhko Jo Paya",
      artist: " Mohit Chauhan",
      img_src: "https://i.scdn.co/image/ab67616d0000b273c32737e2c7f606beecbf1bae",
      src: "./songs/Tujhko Jo Paaya.mp3"
    },
    {
      title: "Breakup Party",
      artist: "Yo Yo Honey Singh",
      img_src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYjGsbNc_STaC3kGurFBpQea_rcTO5746hVlDF7K4Lb9BQzQ57tbDhx5qPRsOme9EyzzSM6t_zf4NSuZIneeMtvuT3a4TIWVt22dSwebsd57ZTkpQwayaQFRLntztMdX43Dk1jUBNdwrKf/s1600/new+metro+lyrics.jpg",
      src: "./songs/Breakup Party.mp3"
    },{
      title: "Heeriye Heeriye",
      artist: "Arijit Singh",
      img_src: "https://c.saavncdn.com/022/Heeriye-feat-Arijit-Singh-Hindi-2023-20230928050405-500x500.jpg",
      src: "./songs/Heeriye Heeriye.mp3"
    },{
      title: "Tu Jaane Na",
      artist: "Atif Aslam",
      img_src: "https://c.saavncdn.com/507/Tu-Jaane-Naa-Lofi-Mix-Hindi-2021-20230304205408-500x500.jpg",
      src: "./songs/Tu Jaane Na.mp3"
    },{
      title: "Care Ni Karda",
      artist: "Alfaaz, Yo Yo Honey Singh",
      img_src: "https://i.scdn.co/image/ab67616d0000b273b16f6cf0a387381d737d0c55",
      src: "./songs/Care Ni Karda.mp3"
    },{
      title: "Titliyan Warga",
      artist: "Harrdy Sandhu",
      img_src: "https://images.hungama.com/c/1/8c5/403/61296498/61296498_300x300.jpg",
      src: "./songs/Titliyan Warga.mp3"
    }


    

  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(0)

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1){
        return 0;
      }else{
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex, songs.length])

  return (
   <div className="App">
      <Player
      currentSongIndex = {currentSongIndex}
      setCurrentSongIndex = {setCurrentSongIndex}
      nextSongIndex = {nextSongIndex}
      songs = {songs}
      />
   </div>
  )
}

export default App
