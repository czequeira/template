import { LoggerService } from '@nestjs/common';
import * as rfs from 'rotating-file-stream';
import * as dayjs from 'dayjs';
import {
  ANSI_BLUE,
  ANSI_CYAN,
  ANSI_GREEN,
  ANSI_RED,
  ANSI_RESET,
  ANSI_YELLOW,
} from './colors';

export class CustomLogger implements LoggerService {
  private stream;
  constructor() {
    this.stream = rfs.createStream(
      (_, index) => `logs/${dayjs().format('YYYY-MM-DD')}(${index || 0}).log`,
      {
        size: '10M',
        interval: '1d',
      },
    );
  }

  private logger(
    action: string,
    message: string,
    ...optionalParams: any[]
  ): void {
    const write = `${dayjs().format()} ${
      optionalParams[0] || 'Someone'
    } ${action}:${ANSI_RESET} ${message}`;
    console.log(write);
    this.stream.write(write + '\n');
  }

  log(message: string, ...optionalParams: any[]) {
    this.logger(`${ANSI_BLUE} LOG`, message, ...optionalParams);
  }
  error(message: string, trace: string, ...optionalParams: any[]) {
    this.logger(`${ANSI_RED} ERROR`, message, ...optionalParams);
  }
  warn(message: string, ...optionalParams: any[]) {
    this.logger(`${ANSI_YELLOW} WARN`, message, ...optionalParams);
  }
  debug(message: string, ...optionalParams: any[]) {
    this.logger(`${ANSI_GREEN} DEBUG`, message, ...optionalParams);
  }
  verbose(message: string, ...optionalParams: any[]) {
    this.logger(`${ANSI_CYAN} VERBOSE`, message, ...optionalParams);
  }
}
