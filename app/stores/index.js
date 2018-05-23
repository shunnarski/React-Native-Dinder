import ConfigStore from './config.stores';
import AuthStore from './auth.store';

const config = new ConfigStore();
const auth = new AuthStore();

export default {config, auth}
