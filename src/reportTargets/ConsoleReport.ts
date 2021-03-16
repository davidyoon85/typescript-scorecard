import { OutputTarget } from '../Summay';

export class ConsoleReport implements OutputTarget {
    print(report: string): void {
        console.log(report);
    }
}