import { createLogger, format, transports } from "winston";
import path from "path";
import DailyRotateFile from 'winston-daily-rotate-file';
const { combine, timestamp, label, prettyPrint, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {

  const date = new Date(timestamp);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds()

  return `${date.toString()}  ${hour}: ${minutes}: ${seconds} [${label}] ${level}: ${message}`;
});


const InfoLogger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'UniversityManagement' }),
    timestamp(),
    myFormat,
    prettyPrint(),
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(process.cwd(), 'log', "winstion","success", "universityName-%DATE%-success.lgo"), level: "info" ,
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })
  ],

});
const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'UniversityManagement' }),
    timestamp(),
    myFormat,
    prettyPrint(),
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(process.cwd(), 'log', "winstion","error", "universityName-%DATE%-error.lgo"), level: "info" ,
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })
  ],
});




export {
  InfoLogger,
  errorLogger
}