// Generated from Conteo.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ConteoListener from './ConteoListener.js';
import ConteoVisitor from './ConteoVisitor.js';

const serializedATN = [4,1,15,58,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,17,1,1,1,1,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,3,1,3,5,3,33,8,3,10,3,12,3,36,9,3,1,3,1,3,1,4,4,4,41,8,
4,11,4,12,4,42,1,4,3,4,46,8,4,1,5,1,5,1,5,1,5,1,5,3,5,53,8,5,1,6,1,6,1,6,
1,6,0,0,7,0,2,4,6,8,10,12,0,0,55,0,15,1,0,0,0,2,19,1,0,0,0,4,21,1,0,0,0,
6,30,1,0,0,0,8,45,1,0,0,0,10,47,1,0,0,0,12,54,1,0,0,0,14,16,3,2,1,0,15,14,
1,0,0,0,16,17,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,1,1,0,0,0,19,20,3,4,
2,0,20,3,1,0,0,0,21,22,5,6,0,0,22,23,5,12,0,0,23,24,5,7,0,0,24,25,5,13,0,
0,25,26,5,8,0,0,26,27,5,13,0,0,27,28,5,9,0,0,28,29,3,6,3,0,29,5,1,0,0,0,
30,34,5,1,0,0,31,33,3,8,4,0,32,31,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,34,
35,1,0,0,0,35,37,1,0,0,0,36,34,1,0,0,0,37,38,5,2,0,0,38,7,1,0,0,0,39,41,
3,10,5,0,40,39,1,0,0,0,41,42,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,46,1,
0,0,0,44,46,3,12,6,0,45,40,1,0,0,0,45,44,1,0,0,0,46,9,1,0,0,0,47,48,5,10,
0,0,48,49,5,3,0,0,49,50,5,14,0,0,50,52,5,4,0,0,51,53,5,5,0,0,52,51,1,0,0,
0,52,53,1,0,0,0,53,11,1,0,0,0,54,55,5,11,0,0,55,56,5,5,0,0,56,13,1,0,0,0,
5,17,34,42,45,52];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ConteoParser extends antlr4.Parser {

    static grammarFileName = "Conteo.g4";
    static literalNames = [ null, "'{'", "'}'", "'('", "')'", "';'", "'para'", 
                            "'desde'", "'hasta'", "'hacer'", "'imprimir'", 
                            "'salir'" ];
    static symbolicNames = [ null, null, null, null, null, null, "PARA", 
                             "DESDE", "HASTA", "HACER", "IMPRIMIR", "SALIR", 
                             "ID", "NUM", "CADENA", "ESPACIOS" ];
    static ruleNames = [ "prog", "instruccion", "conteo", "bloque", "sentencia", 
                         "salida", "terminar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ConteoParser.ruleNames;
        this.literalNames = ConteoParser.literalNames;
        this.symbolicNames = ConteoParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ConteoParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this.instruccion();
	            this.state = 17; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ConteoParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.conteo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conteo() {
	    let localctx = new ConteoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ConteoParser.RULE_conteo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(ConteoParser.PARA);
	        this.state = 22;
	        this.match(ConteoParser.ID);
	        this.state = 23;
	        this.match(ConteoParser.DESDE);
	        this.state = 24;
	        this.match(ConteoParser.NUM);
	        this.state = 25;
	        this.match(ConteoParser.HASTA);
	        this.state = 26;
	        this.match(ConteoParser.NUM);
	        this.state = 27;
	        this.match(ConteoParser.HACER);
	        this.state = 28;
	        this.bloque();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ConteoParser.RULE_bloque);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(ConteoParser.T__0);
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10 || _la===11) {
	            this.state = 31;
	            this.sentencia();
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 37;
	        this.match(ConteoParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ConteoParser.RULE_sentencia);
	    try {
	        this.state = 45;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 39;
	            		this.salida();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 42; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ConteoParser.RULE_salida);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(ConteoParser.IMPRIMIR);
	        this.state = 48;
	        this.match(ConteoParser.T__2);
	        this.state = 49;
	        this.match(ConteoParser.CADENA);
	        this.state = 50;
	        this.match(ConteoParser.T__3);
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 51;
	            this.match(ConteoParser.T__4);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ConteoParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(ConteoParser.SALIR);
	        this.state = 55;
	        this.match(ConteoParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ConteoParser.EOF = antlr4.Token.EOF;
ConteoParser.T__0 = 1;
ConteoParser.T__1 = 2;
ConteoParser.T__2 = 3;
ConteoParser.T__3 = 4;
ConteoParser.T__4 = 5;
ConteoParser.PARA = 6;
ConteoParser.DESDE = 7;
ConteoParser.HASTA = 8;
ConteoParser.HACER = 9;
ConteoParser.IMPRIMIR = 10;
ConteoParser.SALIR = 11;
ConteoParser.ID = 12;
ConteoParser.NUM = 13;
ConteoParser.CADENA = 14;
ConteoParser.ESPACIOS = 15;

ConteoParser.RULE_prog = 0;
ConteoParser.RULE_instruccion = 1;
ConteoParser.RULE_conteo = 2;
ConteoParser.RULE_bloque = 3;
ConteoParser.RULE_sentencia = 4;
ConteoParser.RULE_salida = 5;
ConteoParser.RULE_terminar = 6;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConteoParser.RULE_prog;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConteoVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConteoParser.RULE_instruccion;
    }

	conteo() {
	    return this.getTypedRuleContext(ConteoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConteoVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConteoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConteoParser.RULE_conteo;
    }

	PARA() {
	    return this.getToken(ConteoParser.PARA, 0);
	};

	ID() {
	    return this.getToken(ConteoParser.ID, 0);
	};

	DESDE() {
	    return this.getToken(ConteoParser.DESDE, 0);
	};

	NUM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ConteoParser.NUM);
	    } else {
	        return this.getToken(ConteoParser.NUM, i);
	    }
	};


	HASTA() {
	    return this.getToken(ConteoParser.HASTA, 0);
	};

	HACER() {
	    return this.getToken(ConteoParser.HACER, 0);
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.enterConteo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.exitConteo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConteoVisitor ) {
	        return visitor.visitConteo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConteoParser.RULE_bloque;
    }

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.exitBloque(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConteoVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConteoParser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConteoVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConteoParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(ConteoParser.IMPRIMIR, 0);
	};

	CADENA() {
	    return this.getToken(ConteoParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConteoVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConteoParser.RULE_terminar;
    }

	SALIR() {
	    return this.getToken(ConteoParser.SALIR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConteoVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ConteoParser.ProgContext = ProgContext; 
ConteoParser.InstruccionContext = InstruccionContext; 
ConteoParser.ConteoContext = ConteoContext; 
ConteoParser.BloqueContext = BloqueContext; 
ConteoParser.SentenciaContext = SentenciaContext; 
ConteoParser.SalidaContext = SalidaContext; 
ConteoParser.TerminarContext = TerminarContext; 
