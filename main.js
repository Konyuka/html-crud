const baseURL = "http://localhost:3001/students/"
const app = Vue.createApp({
    async created() {
        try {
            const res = await axios.get(baseURL);
            this.registeredStudents = res.data;
            console.log(this.registeredStudents)
        } catch (e) {
            console.error(e);
        }
    },
    methods: {
        async finya() {
            try {
                const res = await axios.post(baseURL, { student: this.form });

                this.postedData = res.data

            } catch (e) {
                console.error(e);
            }
        }
    },
    data() {
        return {
            postedData:{},
            form:{
                fname:'',
                lname:'',
                faculty:'',
                reg:'',
                unitone:'',
                unittwo:'',
                unitthree:'',
                unitfour:'',
                unitfive:'',
                unitsix:''
            },
            registeredStudents:[],
            alert:false,
        }
    },

})

app.mount('#app')


