"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
// import { CsvFileReader } from "./CsvFileReader";
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
// import { WinsAnalysis } from "./analyzers/WinsAnalysis";
const Summary_1 = require("./Summary");
// import { HtmlReport } from "./reportTargets/HtmlReport";
const matchReader = MatchReader_1.MatchReader.formCsv("football.csv");
// const csvFileReader = new CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new HtmlReport(),
// );
summary.buildAndPrintReport(matchReader.matches);
