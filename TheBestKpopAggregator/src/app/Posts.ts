export interface Post {
    id: number;
    bandId: number,
    socialMediaId: number;
    postText: string;
    postImage: string[]; //url do fotki
    postDate: string; //tez string bo zalezy od social media
  }
  