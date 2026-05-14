grammar Conteo;

// Gramatica
prog: instruccion+;

instruccion: conteo;

conteo: PARA ID DESDE NUM HASTA NUM HACER bloque;

bloque: '{' sentencia* '}';

sentencia: salida+ | terminar;

salida: IMPRIMIR '(' CADENA ')' ';'?;

terminar: SALIR ';';

// Lexemas
PARA     : 'para';
DESDE    : 'desde';
HASTA    : 'hasta';
HACER    : 'hacer';
IMPRIMIR : 'imprimir';
SALIR    : 'salir';

ID   : [a-zA-Z][a-zA-Z0-9]*;
NUM  : [0-9]+;
CADENA : '\'' [a-zA-Z0-9.,!?]* '\'';

ESPACIOS : [ \t\r\n]+ -> skip;