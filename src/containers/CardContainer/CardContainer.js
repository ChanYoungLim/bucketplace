import React, { Component } from 'react';
import {Card, CardWrapper} from '../../components';
import * as service from '../../services/Card';

// 화면 하단 Card List
class CardContainer extends Component {
    constructor(props) {
        super();
        /*
            state variable decription
             - page : 현재 페이지
             - fetching : axios로 패치상태 확인용
             - cards : 패치된 card list
        */
        this.state = {
            page: 1,
            fetching: false,
            cards: [],
        };
    }

    // 컴포넌트 마운트시 첫 페이지 패치. handleScroll 등록.
    componentDidMount() {
        this.fetchCardInfo(this.state.page);
        window.addEventListener("scroll", this.handleScroll);
        return () => {
             window.removeEventListener('scroll', this.handleScroll);
        };
    }

    // 무한스크롤 핸들링 function
    handleScroll = () => {
        const { innerHeight } = window;
        const { scrollHeight } = document.body;
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        if (scrollHeight - innerHeight - scrollTop < 80) {
            this.fetchCardInfo(this.state.page + 1);
        }
      };

    // 사진 리스트 패치
    fetchCardInfo = async (page) => {
        this.setState({
            fetching: true
        });

        // 미리 만들어 놓은 service fetch 로직에 요청 페이지를 넣고 호출
        const cardData = await service.getCards(page);

        // 받아온 list를 기존 cards state에 추가
        this.setState(state => {
            const cards = state.cards.concat(cardData.data);
            return {cards};
        })
        this.setState({
            page,
            fetching: false
        });

        console.log(this.state.cards);
    }

    // map 함수를 이용해 card list 출력
    render() {
        const {cards} = this.state;
        return (
            <CardWrapper>
                {cards.map(card => <Card id={card.id} image_url={card.image_url} nickname={card.nickname} profile_image_url={card.profile_image_url} />)}
            </CardWrapper>
        );
    }
}

export default CardContainer;



// *** hooks로 state를 관리하려고 했으나 handleScroll에서 state값 변경안되는 이슈 해결못해서 기존 class 방식으로 수행 ***

// const CardContainer = () => {
//     const {page, fetching,  cards} = useSelector((state) => ({ page: state.card.page, fetching: state.card.fetching, cards: state.card.cards}));
//     const dispatch = useDispatch();
//     const [count, setCount] = useState(1);

//     useEffect(() => {
//         //fetchCardInfo(page);
//         fetchCardInfo(count);
//         actions.increasePage(dispatch);
//         console.log('count value : ', count);
//         window.addEventListener("scroll", handleScroll, { passive: true });
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//           };
//     }, []);

//     const handleScroll = useCallback(() => {
//         const { innerHeight } = window;
//         const { scrollHeight } = document.body;
//         const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

//         if (scrollHeight - innerHeight - scrollTop < 100) {
//             actions.increasePage(dispatch);
//             //console.log('page value : ', page);
//             //fetchCardInfo(page);
//             setCount(prevCount => prevCount + 1);
//             //setPageTmp(2);
            
//             console.log('count value : ', count);
//             fetchCardInfo(count);
//         }
//       }, [count]);

//       const fetchCardInfo = async (pageProp) => {
//         //console.log('page value : ', page);
//         const cardData = await service.getCards(pageProp);
//         cardData.data.map(data => data.checked = false);
//         //console.log(cardData.data[0]);
//         actions.addList(dispatch, cardData.data);
//         //console.log('pageProp value : ', pageProp);

//     }

//     return (
//         <CardWrapper>
//             {cards.map(card => <Card key={card.id} id={card.id} image_url={card.image_url} nickname={card.nickname} profile_image_url={card.profile_image_url} />)}
//         </CardWrapper>
//     );
// }