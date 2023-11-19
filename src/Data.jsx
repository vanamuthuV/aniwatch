import React from "react";
import Jujutsu from "../public/Jujutsu.jpeg"
import Naruto from "../public/Naruto.jpeg"
import One from "../public/One.jpeg";
import Tokyo from "../public/Tokyo.jpeg";
import Devil from "../public/Devil.jpeg";

export const SimpleData = [
  {
    id: 1,
    Name: "Naruto Uzumaki",
    info: "Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage. In the following years, through many hardships and ordeals, he became a capable ninja, regarded as a hero both by the villagers, and soon after, the rest of the world, becoming known as the Hero of the Hidden Leaf (木ノ葉隠れの英雄, Konohagakure no Eiyū, literally meaning: Hero of the Hidden Tree Leaves). He soon proved to be one of the main factors in winning the Fourth Shinobi World War, leading him to achieve his dream and become the village's Seventh Hokage (七代目火影, Nanadaime Hokage, literally meaning: Seventh Fire Shadow).",
    rating: 10,
    clan: "Uzumaki",
    kekkie_Genkai: "Wind and Earth",
    Jutsu: "Ninjutsu",
  },
  {
    id: 2,
    Name: "Sakura Haruno",
    info: "Sakura Uchiha (うちはサクラ, Uchiha Sakura, née Haruno (春野)) is a kunoichi of Konohagakure. When assigned to Team 7, Sakura quickly finds herself ill-prepared for the duties of a shinobi. However, after training under the Sannin Tsunade, she overcomes this, and becomes recognised as one of the greatest medical-nin in the world.",
    rating: 2,
    clan: "Haruno",
    kekkie_Genkai: "Trash",
    Jutsu: "Taijustsu",
  },
  {
    id: 3,
    Name: "Sasuke Uchiha",
    info: "Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) is one of the last surviving members of Konohagakure's Uchiha clan. After his older brother, Itachi, slaughtered their clan, Sasuke made it his mission in life to avenge them by killing Itachi. He is added to Team 7 upon becoming a ninja and, through competition with his rival and best friend, Naruto Uzumaki, Sasuke starts developing his skills, but eventually grows dissatisfied with his progress. He defects from Konoha so that he can acquire the strength needed to exact his revenge and master the Cursed Seal of Heaven. His years of seeking vengeance and his actions that followed become increasingly demanding, irrational and isolates him from others, leading him to be branded as an international criminal. After learning the truth of his brother's sacrifice, later proving instrumental in ending the Fourth Shinobi World War, and being happily redeemed by Naruto, Sasuke decides to return to Konoha and dedicate his life to help protect the village and its inhabitants, becoming referred to as the 'Supporting Kage' (支う影, Sasaukage, literally meaning: Supporting Shadow).",
    rating: 10,
    clan: "Uchiha",
    kekkie_Genkai: "Fire and Lighting",
    Jutsu: "Ninjutsu",
  },
  {
    id: 4,
    Name: "Kakshi Hatake",
    info: "Kakashi Hatake (はたけカカシ, Hatake Kakashi) is a shinobi of Konohagakure's Hatake clan. Famed as Kakashi of the Sharingan (写輪眼のカカシ, Sharingan no Kakashi), he is one of Konoha's most talented ninja, regularly looked to for advice and leadership despite his personal dislike of responsibility. To his students on Team 7, Kakashi emphasises the importance of teamwork; he himself received this lesson, along with the Sharingan, from his childhood friend, Obito Uchiha. After the Fourth Shinobi World War, Kakashi becomes Konoha's Sixth Hokage (六代目火影, Rokudaime Hokage, literally meaning: Sixth Fire Shadow).",
    rating: "8/10",
    clan: "Hatake",
    kekkie_Genkai: "Lighting and Earth",
    Jutsu: "Ninjutsu",
  },
  {
    id: 5,
    Name: "Rock Lee",
    info: "Rock Lee (ロック・リー, Rokku Rī) is a shinobi of Konohagakure's Lee clan and a member of Team Guy. Unlike most shinobi, he lacked the skills necessary to use ninjutsu or genjutsu. However, he overcomes those shortcomings by undergoing special training from Might Guy that would make him a taijutsu master while still a genin.",
    rating: 6,
    clan: "Unknown",
    kekkie_Genkai: "None",
    Jutsu: "Taijutsu",
  },
  {
    id: 6,
    Name: "Tenten",
    info: "Tenten (テンテン) is a kunoichi from Konohagakure and a member of Team Guy. While initially wanting to be like the legendary Sannin Tsunade, she realised that she did not have the necessary chakra control to be a medical-nin. However, she did not give up on being a powerful kunoichi, putting her all into perfecting her weaponry and fūinjutsu skills.",
    rating: 5,
    clan: "Unkown",
    kekkie_Genkai: "None",
    Jutsu: "Weapon Expert",
  },
  {
    id: 7,
    Name: "Neji Yuga",
    info: "Neji Hyūga (日向ネジ, Hyūga Neji) was a shinobi of Konohagakure's Hyūga clan. Though a prodigy even by the Hyūga's standards, Neji was a member of the clan's branch house; no matter how skilled he became, he would always be in service to the Hyūga's main house, a fact that convinced him fate was predetermined. After experiencing Naruto Uzumaki's refusal to be limited by such an ideology, Neji realised his fate was what he chose it to be, and as a member of Team Guy he sought the strength necessary to make the future he wanted for his family and friends, and ultimately sacrificed his life to protect the very same person who taught him about the freedom of one's choice of fate, Naruto.",
    rating: 9,
    clan: "Yuga",
    kekkie_Genkai: "Ocular Yuga Secrets",
    Jutsu: "Ninjutsu",
  },
  {
    id: 8,
    Name: "Might Guy",
    info: "Might Guy (マイト・ガイ, Maito Gai) is a jōnin of Konohagakure. A master of taijutsu, Guy leads and passes his wisdom onto the members of Team Guy.",
    rating: 10,
    clan: "",
    kekkie_Genkai: "",
  },
  {
    id: 9,
    Name: "Tsunade Senju",
    info: "Tsunade (綱手) is a descendant of the Senju and Uzumaki Clan, and is one of Konohagakure's Sannin. She is famed as the world's strongest kunoichi and its greatest medical-nin. The repeated loss of her loved ones caused Tsunade to later abandon the life of a shinobi for many years. She is eventually persuaded to return to Konoha and take on the mantle of Fifth Hokage (五代目火影, Godaime Hokage, literally meaning: Fifth Fire Shadow), where her skills prove invaluable to the village.",
    rating: 10,
    clan: "Senju",
    kekkie_Genkai: "Unknown",
    Jutsu: "Ninjutsu",
  },
  {
    id: 10,
    Name: "Sanin Jiraiya",
    info: "Jiraiya (自来也) was one of Konohagakure's Sannin. Famed as a hermit and pervert of stupendous ninja skill, Jiraiya travelled the world in search of knowledge that would help his friends, the various novels he wrote, and, posthumously, the world in its entirety – knowledge that would be passed on to his godson and final student, Naruto Uzumaki",
    rating: 10,
    clan: "Unkown",
    kekkie_Genkai: "Toads Specialized Technique",
    Jutsu: "Ninjutsu",
  },
];


export const Anime = [
  {
    id : 1,
    url: Naruto,
    Name : 'Naruto Shippuden',
    info: `"Naruto" is a renowned Japanese manga and anime series created by Masashi Kishimoto. The story revolves around Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and earning the title of Hokage, the leader of his village, the Hidden Leaf Village. However, Naruto carries the burden of being the host of the Nine-Tailed Fox, a powerful and malevolent creature that attacked the village years ago. Facing prejudice and loneliness, Naruto strives to prove himself and gain the acceptance of his fellow villagers.`,
  },

  {
    id : 2,
    url: One,
    Name : 'One Piece',
    info: `"One Piece" is a Japanese manga and anime series created by Eiichiro Oda. The story centers around Monkey D. Luffy, a young and ambitious pirate with the ability to stretch his body like rubber after eating a Devil Fruit. Luffy sets out on a grand adventure to find the legendary treasure known as One Piece and become the Pirate King, the most prestigious title for a pirate. Throughout his journey, Luffy gathers a diverse and loyal crew, known as the Straw Hat Pirates, each with their unique abilities and dreams. Together, they sail the treacherous seas of the Grand Line, facing powerful foes, discovering hidden islands, and unveiling the mysteries of the world. The series is renowned for its intricate world-building, complex characters, and the overarching theme of friendship and camaraderie.`,
  },

  {
    id : 3,
    url:  Jujutsu,
    Name : 'Jujutsu Kaisan',
    info: `"Jujutsu Kaisen" is a popular Japanese manga and anime
            series written and illustrated by Gege Akutami. The story
            follows Yuji Itadori, a high school student with
            extraordinary physical abilities, who stumbles upon a cursed
            talisman containing a malevolent Curse. When his friends
            inadvertently unseal the talisman, unleashing a horde of
            Cursed Spirits, Yuji becomes entangled in the dangerous
            world of Jujutsu Sorcery. To save his friends and himself,
            Yuji joins Tokyo Metropolitan Jujutsu Technical High School,
            where he trains under the enigmatic and powerful sorcerer
            Satoru Gojo. The series seamlessly blends intense battles
            with elements of horror, humor, and complex character
            development. "Jujutsu Kaisen" has gained widespread acclaim
            for its dynamic animation, compelling characters, and
            well-executed fight sequences, solidifying its place as one
            of the standout anime and manga series of its time.`,
  },

  {
    id : 4,
    url: Tokyo,
    Name : 'Tokyo Revengers',
    info: `"Tokyo Revengers" is a Japanese manga and anime series created by Ken Wakui. The story follows Takemichi Hanagaki, a disheartened and directionless young man who discovers that his first love, Hinata Tachibana, and her brother, Naoto, have been murdered by a ruthless Tokyo gang known as the Tokyo Manji Gang. After an unexpected encounter with a mysterious force sends Takemichi back in time to his middle school days, he realizes that he has been given a chance to change the future and prevent the tragedies that befell his friends.`,
  },

  {
    id : 5,
    url: Devil,
    Name : 'The Devil Part  Timer',
    info: `"The Devil Is a Part-Timer!" (Hataraku Maou-sama!) is a Japanese light novel series written by Satoshi Wagahara. It has been adapted into both manga and anime formats. The story revolves around Satan, the Demon Lord, who is forced to retreat from his world, Ente Isla, after being defeated in a war against the Hero Emilia. In order to survive in modern-day Tokyo, Satan takes on a human form and adopts the name Sadao Maou. Stripped of his demonic powers, he finds himself working part-time at a fast-food restaurant to make ends meet.`,
  },
];

export const AccordionInfo = [
  {
    id: 1,
    Ques: "Want Action or Fantasy",
    Answer:
      "Demon Slayer: Kimetsu no Yaiba: Follows Tanjiro Kamado, a young boy turned demon slayer, as he seeks revenge for his family.",
  },
  {
    id: 2,
    Ques: "Want Adventure or Sci-Fi",
    Answer:
      "*Cowboy Bebop: Chronicles the adventures of the bounty-hunting crew aboard the spaceship Bebop in a futuristic, space-western setting.",
  },
  {
    id: 3,
    Ques: "Want Mystery or Thriller",
    Answer:
      "Death Note: Explores the moral dilemmas of a high school student who gains the power to kill anyone by writing their name in a supernatural notebook.",
  },
  {
    id: 4,
    Ques: "Want Romance or Drama",
    Answer:
      "Your Name (Kimi no Na wa): Revolves around two teenagers who mysteriously swap bodies and attempt to find each other.",
  },
];

let Datas
const url = "https://api.jikan.moe/v4/anime";
export async function DataProducer () {
  const res = await fetch(url)
  const data = await res.json()
  Datas = data
  console.log(Datas)
  return Datas.body
}