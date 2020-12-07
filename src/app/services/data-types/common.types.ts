export type Banner = {
    targetId: number;
    url: string;
    imageUrl: string;
}

export type HotTag = {
    position: number;
    name: string;
    id: number;
}



export type singer = {
    name: string;
    musicSize: number;
    img1v1Url: string;
    id: number;
}

//歌曲
export type Song = {
    id: number;
    name: string;
    url: string;
    ar: singer[];
    al: {
        id: number;
        name: string;
        picUrl: string;
    };
    dt: number;
}

//歌曲播放地址
export type SongUrl = {
    id: number;
    url: string;
}

//歌单
export type SongSheet = {
    playCount: number;
    name: string;
    id: number;
    picUrl: string;
    tracks: Song[]
}