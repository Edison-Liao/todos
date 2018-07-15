import Poetry from "@/components/Poetry";
export default {
    name: "App",
    components: {
        Poetry
    },
    data() {
        return {

            newPoetryText: '',
            
            poetryList: []
        }
    },
    methods: {
        addPoetry() {
            this.poetryList.push(this.newPoetryText);

            this.newPoetryText = ''
            
        },


    }

};


