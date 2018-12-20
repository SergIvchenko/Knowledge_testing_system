import { Vue,Component  } from 'vue-property-decorator';
import BaseComponent from './BaseComponent';




@Component({})
export default class TestResults extends BaseComponent
{
    public get hoha() {return {a: 22, b: 33};}
    public get stats () {
        var right = ((this as any).testresults as any[]).filter(t => t.IsRight).length;
        var total = ((this as any).testresults as any[]).length;
        var percent = Math.round((100 * right) / total);
        if (percent > 50) {
            var correct = true;
        }
        return {right, total, percent, correct};
    }
}

