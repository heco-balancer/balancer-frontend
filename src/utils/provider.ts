import { AlchemyProvider, InfuraProvider, JsonRpcProvider} from '@ethersproject/providers';

import config from '@/config';

const provider = new JsonRpcProvider(config.rpcUrl);
// const provider = new InfuraProvider(config.network, config.infuraKey);

export default provider;

const debugProvider = new JsonRpcProvider(config.rpcUrl);

// const debugProvider = new AlchemyProvider(config.network, config.alchemyKey);

export { debugProvider };
