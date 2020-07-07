import {observable, action} from 'mobx';
class CountStore {
    @observable count = 0;

    @action.bound
    addCount() {
        this.count += 1;
    }
    @action.bound
    jddCount() {
        this.count -= 1;
    }

}
export default new CountStore();