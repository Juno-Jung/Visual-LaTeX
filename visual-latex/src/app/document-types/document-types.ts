export class DocumentTypes {
  public static ARTICLE: string = `
  \\documentclass[12pt]{article}
  \\title{A Very Simple \\LaTeX Template}
  
  \\begin{document}
  \\maketitle`;      
  public static REPORT: string = `Report`;
  public static LETTER: string = `Letter`;
  public static SLIDES: string = `Slides`;
  public static BEAMER: string = `
  \\documentclass{beamer}
  \\usepackage[utf8]{inputenc}
    
  \\title{Sample title}
  \\author{Anonymous}
  \\institute{Overleaf}
  \\date{2014}
  
  \\begin{document}
  
  
  \\begin{frame}`;
  public static BOOK: string = `Book`;
}