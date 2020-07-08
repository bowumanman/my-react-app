import {observable, action, computed} from 'mobx';
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
    @computed get total() {
        return `total: ${this.count}`;
    }

}
export default new CountStore();