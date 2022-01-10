const app=Vue.createApp({    
    data() {
        return {
            items:"",           
            tableVisible:false,
            updated:"",
            disclaimer:""

        }
    },
    methods:{loadData(){        
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response=>response.json())
        .then(json=>{
            this.items=json.bpi;
            this.updated=json.time.updated;
            this.disclaimer=json.disclaimer;
        });
        this.tableVisible=true;
        
    }},

}).mount("#app")