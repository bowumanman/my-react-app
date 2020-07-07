import {observable, action} from 'mobx';
class UserStore {
    @observable user = {token: 1111};

    @action.bound
    getUserInfo(data) {
        this.user = Object.assign({}, this.user, data);
    }
}
export default new UserStore();