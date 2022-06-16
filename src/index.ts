import {MatchReader} from './MatchReader'
import {CsvFileReader} from './CsvFileReader'
import {WinsAnalysis} from './analyzers/WinsAnalysis'
import {Summary} from './Summary'
import {HtmlReport} from './reportTargets/HtmlReport'

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = Summary.winsAnalysisWithhtmlReport('Man United')

summary.buildAndPrintReport(matchReader.matches);
