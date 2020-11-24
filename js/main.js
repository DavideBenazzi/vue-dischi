const app = new Vue ({
    el: '#app',
    data: {
        albums: [],
        selection: 'All',
    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then ( response => { 
            this.albums = response.data.response;
        })
        .catch( error => { 
            console.log(error);
        });
    },
    methods: {
        // FUNCTION FOR FILTER ALBUMS BY GENRE
        filterGenre() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then ( response => { 
                let newAlbums = response.data.response;
                if (this.selection !== 'All') {
                    newAlbums = newAlbums.filter(album => album.genre === this.selection);
                };
                this.albums = newAlbums;
            })
            .catch( error => { 
                console.log(error);
            });
        },
    },
});