import ConteoVisitor from './ConteoVisitor.js';

class CustomConteoVisitor extends ConteoVisitor {
    constructor() {
        super();
        this.variables = {};
    }

    visitProg(ctx) {
        for (let inst of ctx.instruccion()) this.visit(inst);
    }

    visitInstConteo(ctx) {
        return this.visit(ctx.conteo());
    }

    visitConteo(ctx) {
        const id = ctx.ID().getText();
        const desde = parseInt(ctx.NUM(0).getText(), 10);
        const hasta = parseInt(ctx.NUM(1).getText(), 10);
        console.log(`\n// Traducción: for (let ${id} = ${desde}; ${id} <= ${hasta}; ${id}++)`);
        for (let i = desde; i <= hasta; i++) {
            this.variables[id] = i;
            this.visit(ctx.bloque());
        }
        delete this.variables[id];
    }

    visitBloque(ctx) {
        for (let sent of ctx.sentencia()) this.visit(sent);
    }

    visitSentSalida(ctx) {
        for (let sal of ctx.salida()) this.visit(sal);
    }

    visitSentTerminar(ctx) {
        this.visit(ctx.terminar());
    }

    visitSalida(ctx) {
        let texto = ctx.CADENA().getText();
        texto = texto.slice(1, -1);
        console.log(`console.log("${texto.replace(/"/g, '\\"')}");`);
        console.log(texto);
    }

    visitTerminar(ctx) {
        console.log("// salir; -> process.exit(0)");
        process.exit(0);
    }
}

export default CustomConteoVisitor;