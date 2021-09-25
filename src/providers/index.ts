export * from 'src/modules/db/services';
import { services } from 'src/modules/db/services';
export { HelloService } from './hello/hello.service';
import { HelloService } from './hello/hello.service';

export const providers = [HelloService, ...services];
