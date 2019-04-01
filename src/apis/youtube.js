import axios from 'axios';

const KEY = 'AIzaSyA7vLDgOpwXBXZ_8JTIx3-nPLKisXA_26c';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
