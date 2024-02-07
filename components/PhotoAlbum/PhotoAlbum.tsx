import PhotoAlbum from "react-photo-album";

const photos = [
    {
        src: "/images/image1_800x600.jpg",
        width: 800,
        height: 700,
        srcSet: [
            { src: "https://picsum.photos/id/1018/250/150", width: 400, height: 300 },
            { src: "https://picsum.photos/id/1018/250/150", width: 200, height: 150 },
        ],
    },
    {
        src: "/images/image2_1600x900.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "https://picsum.photos/id/1015/1000/600", width: 800, height: 450 },
            { src: "https://picsum.photos/id/1015/1000/600", width: 400, height: 225 },
        ],
    },
];

export default function Gallery() {
    return <PhotoAlbum layout="rows" photos={photos} />;
}