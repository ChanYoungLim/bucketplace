import React, {Component} from 'react';
import {Card, CardWrapper} from '../../components';
import * as service from '../../services/Card';

class CardContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            page: 1,
            fetching: false,
            cards: [],
        };
    }
    componentDidMount() {
        this.fetchCardInfo(1);
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { innerHeight } = window;
        const { scrollHeight } = document.body;
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        if (scrollHeight - innerHeight - scrollTop < 100) {
            this.fetchCardInfo(this.state.page + 1);
        }
      };

    fetchCardInfo = async (page) => {
        this.setState({
            fetching: true
        });

        const cardData = await service.getCards(page);
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

    render() {
        const {cards, page} = this.state;
        return (
            <CardWrapper>
                {cards.map(card => <Card id={card.id} image_url={card.image_url} nickname={card.nickname} profile_image_url={card.profile_image_url} />)}
            </CardWrapper>
        );
    }
}

export default CardContainer;