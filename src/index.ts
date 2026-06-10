// import { sum } from "./calculator";

// console.log(`1 + 10 = ${sum(1, 10)}`)
// // import PDFDocument from 'pdfkit';
// // import PDFDocument from "pdfkit/js/";
// // export default PDFDocument;



// ts-ignore
// export { default } from 'fastest-levenshtein';
// export * from 'fastest-levenshtein';

import exceljs from "exceljs";
import { ReadableWebToNodeStream } from "readable-web-to-node-stream";

export const readCSV = async (file: File) => {
  // The stream() method returns a native Web ReadableStream
  return await new exceljs.Workbook().csv.read(new ReadableWebToNodeStream(file.stream()));
}
