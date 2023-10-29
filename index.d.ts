declare module 'backend-colors' {
  import chalk from 'chalk';

  interface Colors {
    S: string;
    E: string;
    W: string;
    I: string;
  }

  const C: Colors;

  const s: chalk.Chalk & { (text: string): string };
  const bS: chalk.Chalk & { (text: string): string };
  const e: chalk.Chalk & { (text: string): string };
  const bE: chalk.Chalk & { (text: string): string };
  const w: chalk.Chalk & { (text: string): string };
  const bW: chalk.Chalk & { (text: string): string };
  const i: chalk.Chalk & { (text: string): string };
  const bI: chalk.Chalk & { (text: string): string };

  export {
    s,
    bS,
    e,
    bE,
    w,
    bW,
    i,
    bI,
    C as Colors,
  };
}
