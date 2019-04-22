import {moduloActividad, actividadTest} from '../../helpers/actividadTest';

moduloActividad("BlockIDProblematicos");

// Notar que ambas soluciones tienen ids que terminan en $, por lo que en 1.4.0 genera problemas

actividadTest("TresNaranjas", {
	solucion: `<xml xmlns=\"http://www.w3.org/1999/xhtml\"><block type=\"al_empezar_a_ejecutar\" id=\"|6JNA2=.$0V+DuSa+qbd\" deletable=\"false\" movable=\"false\" editable=\"false\" x=\"15\" y=\"15\"><statement name=\"program\"><block type=\"Repetir\" id=\"rUDq?uw@/D8{E|%Pi3;Z\"><value name=\"count\"><block type=\"math_number\" id=\"QSA_?glC*rzkx/.H#tUJ\"><field name=\"NUM\">3</field></block></value><statement name=\"block\"><block type=\"MoverACasillaDerecha\" id=\"%eFKw~*o-wfmLXO6!mj-\"><next><block type=\"procedures_callnoreturn\" id=\"AYf_-:#ke?O[B%eSMVbF\"><mutation name=\"COMER NARANJA SI HAY\"></mutation></block></next></block></statement></block></statement></block><block type=\"procedures_defnoreturn\" id=\"FMF7V%|312bV)g_h5D9$\" x=\"310\" y=\"26\"><field name=\"NAME\">COMER NARANJA SI HAY</field><comment pinned=\"false\" h=\"80\" w=\"160\">Describe esta funcin...</comment><statement name=\"STACK\"><block type=\"Si\" id=\"Cvp$!KL$T-SjO2Y?kp/e\"><value name=\"condition\"><block type=\"TocandoNaranja\" id=\"UV9d54{l/1o.jiYP+p@5\"></block></value><statement name=\"block\"><block type=\"ComerNaranja\" id=\"dJ5?cn([fcvs%EZr~DEO\"></block></statement></block></statement></block></xml>`,
});

actividadTest("DibujandoFigurasDentroDeFiguras", {
	solucion: "<xml xmlns=\"http://www.w3.org/1999/xhtml\"><block type=\"al_empezar_a_ejecutar\" id=\"!kYgjw}3BbbVT];Yv4b,\" deletable=\"false\" movable=\"false\" editable=\"false\" x=\"15\" y=\"15\"><statement name=\"program\"><block type=\"procedures_callnoreturn\" id=\"~z.SKruYLd7ntE*e#(_$\"><mutation name=\"hacer algo\"><arg name=\"x\"></arg><arg name=\"y\"></arg></mutation><value name=\"ARG0\"><block type=\"Numero\" id=\"dTBs32W#STpQ@+,/A|fJ\"><field name=\"NUM\">5</field></block></value><value name=\"ARG1\"><block type=\"Numero\" id=\"EqjKl{!]VKN(NDE-AB{y\"><field name=\"NUM\">100</field></block></value><next><block type=\"procedures_callnoreturn\" id=\"~ayd[uk-{3YX`DPLYd2h\"><mutation name=\"hacer algo\"><arg name=\"x\"></arg><arg name=\"y\"></arg></mutation><value name=\"ARG0\"><block type=\"Numero\" id=\"_a[_/Exf2V*1+4w;@y%6\"><field name=\"NUM\">4</field></block></value><value name=\"ARG1\"><block type=\"Numero\" id=\",3j:P_^I!{XynAp=KQC8\"><field name=\"NUM\">100</field></block></value><next><block type=\"procedures_callnoreturn\" id=\"KQ*x/`[#jYbbeN3Hyo+J\"><mutation name=\"hacer algo\"><arg name=\"x\"></arg><arg name=\"y\"></arg></mutation><value name=\"ARG0\"><block type=\"Numero\" id=\"X}@beG}0s|U_=lD1z8_-\"><field name=\"NUM\">3</field></block></value><value name=\"ARG1\"><block type=\"Numero\" id=\".Oa`0t;?o.spM7s_IZHX\"><field name=\"NUM\">100</field></block></value></block></next></block></next></block></statement></block><block type=\"procedures_defnoreturn\" id=\"H~9q2sAlzr}D3{9*Gf?$\" x=\"41\" y=\"183\"><mutation><arg name=\"x\"></arg><arg name=\"y\"></arg></mutation><field name=\"NAME\">hacer algo</field><comment pinned=\"false\" h=\"80\" w=\"160\">Describe esta funcin...</comment><statement name=\"STACK\"><block type=\"RepetirVacio\" id=\"IvT|[DBp5hGl69d?MM+e\"><value name=\"count\"><block type=\"variables_get\" id=\"D3z2HeUFp,Lui3K(fp(m\"><field name=\"VAR\">x</field></block></value><statement name=\"block\"><block type=\"DibujarLado\" id=\"BIlSM-5bS2q:-5GMflNm\"><value name=\"longitud\"><block type=\"variables_get\" id=\"j}q):ve!%T4veFV6kNU(\"><field name=\"VAR\">y</field></block></value><next><block type=\"GirarGrados\" id=\"t;Wxq8lrT:0Nk;J1ArOB\"><value name=\"grados\"><block type=\"OpAritmetica\" id=\"+01IVklSNUtmhe74QS!R\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"math_number\" id=\"j,LtYNSPYNJy;?$2(BN5\"><field name=\"NUM\">360</field></block></value><value name=\"B\"><block type=\"variables_get\" id=\"XDuk8LG4[qOtcx|(vCc4\"><field name=\"VAR\">x</field></block></value></block></value></block></next></block></statement></block></statement></block><block type=\"math_number\" id=\"?daCSErBq3I+6(.IbLZb\" disabled=\"true\" x=\"420\" y=\"543\"><field name=\"NUM\">100</field></block></xml>",
});