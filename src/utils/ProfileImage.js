import maleImage from '~/assets/img/man@.png';
import femaleImage from '~/assets/img/woman@.png';
import defaultPhoto from '~/assets/img/default-photo.jpg';

const DefaultProfileImage = (param) => {
  switch (param) {
    case 'male':
      return maleImage;
    case 'female':
      return femaleImage;
    default:
      return defaultPhoto;
  }
};

export default DefaultProfileImage;
