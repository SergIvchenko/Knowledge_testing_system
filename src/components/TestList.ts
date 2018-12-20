import { Component } from 'vue-property-decorator';
import BaseComponent from './BaseComponent';
import {filter} from "fuse-box/Utils";

@Component({
    data() {return {checker: ''}},
    computed: {

        goga () {return this.alltests.TestesList.filter(t => (!this.checker) | t.title.includes(this.checker));}
    }
})
export default class TestList extends BaseComponent
{}





}