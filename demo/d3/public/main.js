
var vm = new Vue({

    el: '#app',

    data: {
        words: [],
    },

    
    methods:{
        loadWords: function(){
            var that = this;
            return this.$http.get('http://localhost:3000/words.json').then(function(response){
                 that.words = response.data;
            });
        }
    },

    created: function(){
        this.loadWords();
    }

});