import { Injectable } from '@nestjs/common';
import * as os from 'os';

@Injectable()
export class AppService {
  getHello(): any {
    return {
          serviceName: process.env.SERVICE_NAME || 'aws-practice1',
          environment: process.env.NODE_ENV || 'development',
          port: Number(process.env.PORT) || 3000,
    
          hostname: os.hostname(),
    
          privateIp:
            Object.values(os.networkInterfaces())
              .flat()
              .find((network) => network?.family === 'IPv4' && !network.internal)
              ?.address || 'unknown',
    
          nodeVersion: process.version,
          platform: process.platform,
        };
  }
}
