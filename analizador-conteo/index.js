import fs from 'fs';
import antlr4 from 'antlr4';
import ConteoLexer from './ConteoLexer.js';
import ConteoParser from './ConteoParser.js';
import CustomConteoVisitor from './CustomConteoVisitor.js';

// Función para mostrar la tabla de lexemas y tokens
function mostrarTablaLexemas(lexemasTokens) {
    console.log("\n📋 TABLA DE LEXEMAS Y TOKENS");
    console.log("═══════════════════════════════════════════════════════════════");
    console.log(" Lexema                    | Token");
    console.log("───────────────────────────┼───────────────────────────────────");
    for (let item of lexemasTokens) {
        const lexemaMostrado = item.lexema.length > 25 ? item.lexema.substring(0, 22) + "..." : item.lexema;
        console.log(` ${lexemaMostrado.padEnd(25)} | ${item.token}`);
    }
    console.log("═══════════════════════════════════════════════════════════════");
    console.log(` Total de tokens reconocidos: ${lexemasTokens.length}\n`);
}

// Función para mostrar el árbol sintáctico concreto
function mostrarArbol(tree, parser) {
    console.log("🌳 ÁRBOL DE ANÁLISIS SINTÁCTICO CONCRETO");
    console.log("═══════════════════════════════════════════════════════════════");
    const treeStr = tree.toStringTree(parser.ruleNames);
    // Mejorar formato: sangría para facilitar lectura
    console.log(treeStr.replace(/\(/g, '\n(').substring(1));
    console.log("═══════════════════════════════════════════════════════════════\n");
}

async function main() {
    // Bienvenida
    console.log("\n🚀 INICIANDO ANALIZADOR DE LENGUAJE DE CONTEO");
    console.log("═══════════════════════════════════════════════════════════════");

    // Leer archivo de entrada
    let input;
    const filename = process.argv[2] || 'input.txt';
    try {
        input = fs.readFileSync(filename, 'utf8');
        console.log(`📂 Leyendo archivo: ${filename}`);
    } catch (err) {
        console.error(`❌ No se pudo leer ${filename}. Asegurate de que existe.`);
        return;
    }

    // Mostrar el código fuente (opcional, útil para entender contexto)
    console.log("\n📄 CÓDIGO FUENTE:");
    console.log("───────────────────────────────────────────────────────────────");
    console.log(input.trim());
    console.log("───────────────────────────────────────────────────────────────");

    // --- Análisis léxico ---
    console.log("\n🔍 INICIANDO ANÁLISIS LÉXICO...");
    const chars = new antlr4.CharStream(input);
    const lexer = new ConteoLexer(chars);
    
    const lexemasTokens = [];
    let token;
    do {
        token = lexer.nextToken();
        if (token.channel === 0 && token.type !== ConteoLexer.EOF) {
            let tokenName = null;
            if (lexer.constructor.symbolicNames) {
                tokenName = lexer.constructor.symbolicNames[token.type];
            }
            if (!tokenName) {
                tokenName = `'${token.text}'`;
            }
            lexemasTokens.push({
                lexema: token.text,
                token: tokenName
            });
        }
    } while (token.type !== ConteoLexer.EOF);
    
    mostrarTablaLexemas(lexemasTokens);

    // --- Análisis sintáctico ---
    console.log("📐 INICIANDO ANÁLISIS SINTÁCTICO...");
    const inputStream = new antlr4.CharStream(input);
    const lexer2 = new ConteoLexer(inputStream);
    const tokenStream = new antlr4.CommonTokenStream(lexer2);
    const parser = new ConteoParser(tokenStream);
    
    const tree = parser.prog();
    
    if (parser.syntaxErrorsCount > 0) {
        console.error(`\n❌ Se encontraron ${parser.syntaxErrorsCount} error(es) de sintaxis en la entrada.`);
        return;
    }
    
    console.log("✅ Entrada válida sintácticamente.");
    mostrarArbol(tree, parser);
    
    // --- Ejecución / Interpretación ---
    console.log("⚡ EJECUCIÓN / TRADUCCIÓN A JAVASCRIPT");
    console.log("═══════════════════════════════════════════════════════════════");
    const visitor = new CustomConteoVisitor();
    visitor.visit(tree);
    console.log("\n═══════════════════════════════════════════════════════════════");
    console.log("🏁 ANALIZADOR FINALIZADO CORRECTAMENTE.\n");
}

main().catch(err => console.error("❌ Error fatal:", err));