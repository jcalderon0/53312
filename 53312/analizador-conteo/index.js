import fs from 'fs';
import antlr4 from 'antlr4';
import ConteoLexer from './ConteoLexer.js';
import ConteoParser from './ConteoParser.js';
import CustomConteoVisitor from './CustomConteoVisitor.js';

function mostrarTablaLexemas(lexemasTokens) {
    console.log("\n=== TABLA DE LEXEMAS Y TOKENS ===");
    console.log("Lexema\t\t\tToken");
    console.log("------\t\t\t-----");
    for (let item of lexemasTokens) {
        console.log(`${item.lexema.padEnd(20)}\t${item.token}`);
    }
}

function mostrarArbol(tree, parser) {
    console.log("\n=== ÁRBOL DE ANÁLISIS SINTÁCTICO ===");
    console.log(tree.toStringTree(parser.ruleNames));
}

async function main() {
    let input;
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        console.error("No se pudo leer input.txt. Asegurate de que existe.");
        return;
    }

    const chars = new antlr4.CharStream(input);
    const lexer = new ConteoLexer(chars);
    
    // Recolectar lexemas y tokens para la tabla
    const lexemasTokens = [];
    let token;
    do {
        token = lexer.nextToken();
        if (token.channel === 0 && token.type !== ConteoLexer.EOF) {
            // Obtener nombre del token de forma segura
            let tokenName = null;
            if (lexer.constructor.symbolicNames) {
                tokenName = lexer.constructor.symbolicNames[token.type];
            }
            if (!tokenName) {
                // Si no tiene nombre simbólico, es un literal (como '{', '}', '(', ')', ';')
                tokenName = `'${token.text}'`;
            }
            lexemasTokens.push({
                lexema: token.text,
                token: tokenName
            });
        }
    } while (token.type !== ConteoLexer.EOF);
    
    mostrarTablaLexemas(lexemasTokens);
    
    // Reiniciar el lexer y parser para el análisis sintáctico
    const inputStream = new antlr4.CharStream(input);
    const lexer2 = new ConteoLexer(inputStream);
    const tokenStream = new antlr4.CommonTokenStream(lexer2);
    const parser = new ConteoParser(tokenStream);
    
    const tree = parser.prog();
    
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
        return;
    }
    
    console.log("\n✅ Entrada válida sintácticamente.");
    mostrarArbol(tree, parser);
    
    const visitor = new CustomConteoVisitor();
    console.log("\n=== EJECUCIÓN / TRADUCCIÓN A JAVASCRIPT ===");
    visitor.visit(tree);
}

main().catch(err => console.error(err));