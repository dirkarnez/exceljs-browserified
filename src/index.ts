// import { sum } from "./calculator";

// console.log(`1 + 10 = ${sum(1, 10)}`)
// // import PDFDocument from 'pdfkit';
// // import PDFDocument from "pdfkit/js/";
// // export default PDFDocument;



// // ts-ignore
// // export { default } from 'fastest-levenshtein';
// // export * from 'fastest-levenshtein';

import exceljs from "exceljs";
import { ReadableWebToNodeStream } from "readable-web-to-node-stream";
// import iconvlite from "iconv-lite";

export const readCSV = async (file: File, encoding: string) => {
  // The stream() method returns a native Web ReadableStream
  return await new exceljs.Workbook().csv.read(new ReadableWebToNodeStream(file.stream()) as any, { parserOptions: {encoding: encoding}});
}

// export const getGBK = (str: string, encoding: string) => {
//   // [91, 111, 98, 106, 101, 99, 116, 32, 77, 111, 100, 117, 108, 101, 93]
//   return iconvlite.decode(new TextEncoder().encode(str), "gb2312");
// }

export { decode } from "iconv-lite";