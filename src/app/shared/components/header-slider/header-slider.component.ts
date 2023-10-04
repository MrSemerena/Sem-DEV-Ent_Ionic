import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-header-slider',
  templateUrl: './header-slider.component.html',
  styleUrls: ['./header-slider.component.scss'],
})
export class HeaderSliderComponent  implements OnInit {
  swiperModules = [IonicSlides];

  header_slides: {
    id: number,
    bg_image: string,
    avatar: string,
    category: string;
    title: string;
    subtitle: string;
    description: string
  }[] = [
    {
      id: 0,
      bg_image: "/assets/header_slides/anime_bg_slide.jpeg",
      avatar: "/assets/header_slides/anime_avatar.jpg",
      category: "Japanese media & Entertainment",
      title: "Anime",
      subtitle: "Right from Japan... to your eyes!",
      description: "Here we are going to deliver some ofthe best anime content around! Wanna see what we have for you? Come here, it is time to enjoy!"
    },
    {
      id: 1,
      bg_image: "/assets/header_slides/dau_bg_slide.jpeg",
      avatar: "/assets/header_slides/dau_avatar.jpeg",
      category: "Parodies",
      title: "Meet Perfect Cell & Kermit The Frog",
      subtitle: "Are you ready for this multiversal adventure?",
      description: "Devil Artimus had delivered us a very funny and deep universe. Come and explore it with Cell, Kermit and the gang. Also we are going to help you this..."
    },
    {
      id: 2,
      bg_image: "/assets/header_slides/horror_bg_slide.jpeg",
      avatar: "/assets/header_slides/horror_avatar.jpg",
      category: "Movies",
      title: "Are you ready for a good scare?",
      subtitle: "The Boogeymen are here!",
      description: "Horror movies are thrilling and astonishing... In a very dark way. That's why we bring some of the best examples here..."
    },
    {
      id: 3,
      bg_image: "/assets/header_slides/manga_bg_slide.jpeg",
      avatar: "/assets/header_slides/manga_avatar.jpeg",
      category: "Japanese media & Entertainment",
      title: "Manga",
      subtitle: "These comics are awesome! Come and see why...",
      description: "We are here fot one thing: Showing you the reasons why many eyes had been set on Manga. Amazing stories, remarkable characters, a very particular aethetics, a strong and powerful narrative that breaks the fourth wall... Come and meet some of the very best examples of this"
    },
    {
      id: 4,
      bg_image: "/assets/header_slides/mgtow_bg_slide.png",
      avatar: "/assets/header_slides/mgtow_avatar.jpeg",
      category: "Male Content",
      title: "MGTOW & Red Pill",
      subtitle: "Liberals had Feminism and Wokism... Men Go Their Own Way!",
      description: "Men Going Their Own Way or MGTOW is a group of men tired of being labelled as bad guys and creators of all evil. So, instead of cry and whine they do the manly thing... Get off the plantation and try savinf as many as possible. Avoid the traps of women, dating, marriage and feminism. Remember: IS OKAY TO BE A DUDE... YOU CREATED THIS SOCIETY, YOU PROTECT AND PROVIDE... So, if you choose to, you can destroy it, the same way"
    },
    {
      id: 5,
      bg_image: "/assets/header_slides/videogames_bg_slide.jpeg",
      avatar: "/assets/header_slides/videogames_avatar.png",
      category: "Digital media",
      title: "Videogames",
      subtitle: "Welcome to the World of Gaming... Here we have lots of Adventures!",
      description: "Here we are going to present some of the best content related to gaminh. Characters, stories, titles, releasing dates and much more... Are you ready for this feast?"
    },
    {
      id: 6,
      bg_image: "/assets/header_slides/movies_bg_slide.jpg",
      avatar: "/assets/header_slides/movies_avatar.jpeg",
      category: "Movies",
      title: "Flix",
      subtitle: "What to watch right now!",
      description: "We bring some of the best films in general. You can see them or perhaps you had and share our opunion. Let us know about it! Comment, share and tell us your opinions..."
    }
  ]

  anime_header_slides: {
    id: number,
    bg_image: string,
    avatar: string,
    section: string,
    title: string,
    subtitle: string,
    description: string
  }[] = [
    {
      id: 0,
      bg_image: "/assets/anime_slides/anime_characters_bg_slide.jpeg",
      avatar: "/assets/anime_slides/anime_characters_avatar.jpg", 
      section: "The Anime Warehouse",
      title: "Anime Characters",
      subtitle: "Those who set the pace here!",
      description: "This section contains some of the best characters in Anime. Heros, villains or supportting characters, we include them because of how awesome they are and the weight they had gained over the fandom..."
    },
    {
      id: 1,
      bg_image: "/assets/anime_slides/anime_series_bg_slides.jpeg",
      avatar: "/assets/anime_slides/anime_series_avatar.jpeg", 
      section: "The Anime Warehouse",
      title: "Anime Series",
      subtitle: "These had built Anime's reputation over the years...",
      description: "We had picked some of the best series Anime has to offer. We include some all-time classics, but also some new hot trends, even some hidden gems over here and there. We hope you enjoy our selection..."
    },
    {
      id: 2,
      bg_image: "/assets/anime_slides/anime_waifus_bg_slide.jpg",
      avatar: "/assets/anime_slides/anime_waifus_avatar.jpeg", 
      section: "The Anime Warehouse",
      title: "Anime Waifus",
      subtitle: "These ladies just wanna have your heart...",
      description: "Waifus are awesome! That is why many fans over the world love them. Did you know about them? If this is you first time hearing about them, we will guide you through... Come over, please"
    },
    {
      id: 3,
      bg_image: "/assets/anime_slides/anime_facts_bg_slide.jpeg",
      avatar: "/assets/anime_slides/anime_facts_avatar.jpeg", 
      section: "The Anime Warehouse",
      title: "Anime facts",
      subtitle: "What you need to know!",
      description: "Anime is fantastic! That's why we prepared some information that every Anime-lover needs to know. So, come and see what we had prepared for you! We know you'll love it!"
    }
  ];

  dau_header_slides: {
    id: number,
    bg_image: string,
    avatar: string,
    section: string;
    title: string;
    subtitle: string;
    description: string
  }[] = [
    {
      id: 0,
      bg_image: "/assets/dau_slides/dau_characters_bg_slide.jpg",
      avatar: "/assets/dau_slides/dau_characters-avatar.jpeg",
      section: "The Devil Artimus Universe Central",
      title: "DAU Characters",
      subtitle: "Meet the stars of the show!",
      description: "Main characters, side characters and also some special guests are the ones that create this fantstic and funny universe. Remarkable for its clever and mature humor and a wide variety of scenarios available..."
    },
    {
      id: 1,
      bg_image: "/assets/dau_slides/dau_series_bg_slide.jpg",
      avatar: "/assets/dau_slides/dau_series_avatar.jpg",
      section: "The Devil Artimus Universe Central",
      title: "DAU Series",
      subtitle: "This is hpw the plot is organized...",
      description: "There are a lot of series here. Some of them are regular, such as Cell VS, but other are spontaneous. However, regardless of the previous, the fun and laughs are secured, because there is a lot of that..."
    },
    {
      id: 2,
      bg_image: "/assets/dau_slides/dau_waifus_bg_slide.jpg",
      avatar: "/assets/dau_slides/dau_waifus_avatar.jpeg",
      section: "The Devil Artimus Universe Central",
      title: "DAU Waifus",
      subtitle: "The Eye-Candy has arrived!",
      description: "Waifus are also present here! As lovely and cheerful as always and they will prove to you exactly why they are so loved by fans. Are you ready?"
    },
    {
      id: 3,
      bg_image: "/assets/dau_slides/dau_compilations_bg_slide.jpeg",
      avatar: "/assets/dau_slides/dau_compilations_avatar.jpg",
      section: "The Devil Artimus Universe Central",
      title: "DAU Compilations",
      subtitle: "These are the best way to meet the DAU",
      description: "The compilations are awesome, because they picked some of the best moments and clips of several episodes and sagas, put them together for those new adopters. We highly recommend to cathc any so you can have a peek..."
    }
  ];

  horror_header_slides: {
    id: number,
    bg_image: string,
    avatar: string,
    category: string;
    title: string;
    subtitle: string;
    description: string
  }[] = [];

  manga_header_slides: {
    id: number,
    bg_image: string,
    avatar: string,
    category: string;
    title: string;
    subtitle: string;
    description: string
  }[] = [];

  mgtow_header_slides: {
    id: number,
    bg_image: string,
    avatar: string,
    category: string;
    title: string;
    subtitle: string;
    description: string
  }[] = [];

  videogames_header_slides: {
    id: number,
    bg_image: string,
    avatar: string,
    category: string;
    title: string;
    subtitle: string;
    description: string
  }[] = [];

  movies_header_slides: {
    id: number,
    bg_image: string,
    avatar: string,
    category: string;
    title: string;
    subtitle: string;
    description: string
  }[] = [];

  constructor() { }

  ngOnInit() {}

}
