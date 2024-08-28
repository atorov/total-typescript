const ALBUM_TYPES = {
    CD: 'cd',
    VINYL: 'vinyl',
    DIGITAL: 'digital',
} as const;

type AlbumType = (typeof ALBUM_TYPES)[keyof typeof ALBUM_TYPES];

function getAlbumType(type: AlbumType) {
    // ...
}

getAlbumType(ALBUM_TYPES.CD);
