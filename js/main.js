const app = new Vue ({
    el: '#app',
    data: {
        albums: [],
    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then ( response => { 
            this.albums = response.data.response;
            console.log(this.albums);
        })
        .catch( error => { 
            console.log(error);
        });
    },
});