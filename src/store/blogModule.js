import axios from 'axios'

export default {
    state: {
        cards: []
    },
    mutations: {
        setCards(state, payload) {
            state.cards = payload
        }
    },
    getters: {
        getAllCards(state) {
            return state.cards
        }
    },
    actions: {
        fetchCards(context) {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => context.commit("setCards", response.data))
        }
    },
}