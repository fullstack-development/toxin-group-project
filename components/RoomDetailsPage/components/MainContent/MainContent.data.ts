type RoomImagesPreview = {
  src: string;
  alt: string;
};

const roomImagesPreview: Required<RoomImagesPreview[]> = [
  {
    src: '/img/room-image-preview-1.jpg',
    alt: 'Представление номера',
  },
  {
    src: '/img/room-image-preview-2.jpg',
    alt: 'Представление номера',
  },
  {
    src: '/img/room-image-preview-3.jpg',
    alt: 'Представление номера',
  },
];

export { roomImagesPreview };
