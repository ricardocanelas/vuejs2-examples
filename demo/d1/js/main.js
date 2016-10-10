
var vm = new Vue({

    el: '#app',

    data: {
        categories: [],
        category_id: 0,
        postsPerPage: 3,
        pageCurrent:1,
        posts: [],
        post: {}
    },

    computed:{
        filterPosts: function(){
            var postsFilter = [];

            if(this.category_id == 0){
                postsFilter = this.posts;
            }else {
                for (var i=0; i < this.posts.length; i++) {
                    if (this.posts[i].category_id == this.category_id) {
                        postsFilter.push(this.posts[i]);
                    }
                }
            }

            return postsFilter;
        },

        list:function(){
            var postsTemp = [];
            console.log(this.filterPosts.length);
            for(var i=0; i<this.filterPosts.length; i++){
                if((i < this.postsPerPage * this.pageCurrent)) {
                    postsTemp.push(this.filterPosts[i]);
                }
            }
            return postsTemp;
        },

        canShowListPosts: function(){
            return this.post.id == undefined;
        },
        canShowSinglePost: function(){
            return this.post.id != undefined;
        },
        canShowLoadmoreButton: function(){
            return (this.postsPerPage * this.pageCurrent) < this.filterPosts.length;
        }
    },

    methods:{
        showSinglePost: function(post){
            this.post = post;
        },
        loadcategories: function(){
            var that = this;
            return this.$http.get('data/categories.json').then(function(response){
                 that.categories = response.data.results;
            });
        },
        loadposts: function(){
            var that = this;
            return this.$http.get('data/posts.json').then(function(response){
                 that.posts = response.data.results;
            });
        }
    },

    watch: {
        category_id: function(newCategoryId){
            this.pageCurrent = 1;
        }
    },

    created: function(){
        this.loadcategories();
        this.loadposts();
    }

});