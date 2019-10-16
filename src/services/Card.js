import axios from 'axios';

export function getCards(page) {
    const url = 'https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/cards/page_' + page + '.json';

    return axios.get(url);
}