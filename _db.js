let games = [
    {id:'1', title:'GTA 5', platform:['PC','PS5','XBOX']},
    {id:'2', title:'Elden Ring', platform:['PS5','XBOX','PC']},
    {id:'3', title:'Mario Kart', platform:['Switch']},
    {id:'4', title:'PUBG', platform:['Mobile','PC']},
    {id:'5', title:'The Last of Us', platform:['PS5']},
]

let authors = [
    {id:'1', name: 'mario', verified: true},
    {id:'2', name: 'luigi', verified: false},
    {id:'3', name: 'lily', verified: true},
]

let reviews = [
    {id: '1', rating: 9, content: 'lorem ipsum', author_id:'1', game_id:'2'},
    {id: '2', rating: 10, content: 'lorem ipsum', author_id:'2', game_id:'1'},
    {id: '3', rating: 7, content: 'lorem ipsum', author_id:'3', game_id:'3'},
    {id: '4', rating: 5, content: 'lorem ipsum', author_id:'4', game_id:'4'},
    {id: '5', rating: 8, content: 'lorem ipsum', author_id:'4', game_id:'5'},
    {id: '6', rating: 7, content: 'lorem ipsum', author_id:'1', game_id:'2'},
    {id: '7', rating: 10, content: 'lorem ipsum', author_id:'2', game_id:'1'},
]

export default { games, authors, reviews }