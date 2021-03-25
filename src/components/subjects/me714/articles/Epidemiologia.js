import React from 'react';
import Latex from 'react-latex';

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

export default function Epidemiologia(){ return(<>
<h2>
    Epidemiologia
</h2>

<h3>
    Tipos de Estudos
</h3>

<b>Estudo Caso-Controle</b>: Estudo observacional em que os indivíduos (objetos de estudo) são amostrados
baseados na presença (casos) ou ausência (controle) da <u>doença de interesse</u>. A informação é coletada
sobre exposições de fatores de risco de interesse antes da ocorrência da doença.
<br />
<br />
<b>Estudo Coorte</b>: Estudo observacional em que indivíduos são amostrados baseados na presença (exposição) 
ou ausência (não exposição) de um <u>fator de risco de interesse</u>. Estes indivíduos são observados
por um tempo para verificar o aparecimento da doença de interesse.
<br />

<h3>
    Medidas de Epidemiologia em um estudo coorte
</h3>

Vamos definir as medidas a partir desta tabela:

<Box mx={12} my={3}>
    <Paper>
        <Box p={1}>
            <center>
                <Typography variant="h6"component="div">
                    Resumo de dados de risco de um estudo coorte
                </Typography>
            </center>
        </Box>
        <Divider />
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Exposto</TableCell>
                        <TableCell>Não Exposto</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Morte</TableCell>
                        <TableCell>A</TableCell>
                        <TableCell>B</TableCell>
                        <TableCell>A+B</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Não Morte</TableCell>
                        <TableCell>C</TableCell>
                        <TableCell>D</TableCell>
                        <TableCell>C+D</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total</TableCell>
                        <TableCell>A+C</TableCell>
                        <TableCell>B+D</TableCell>
                        <TableCell>A+B+C+D</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
</Box>

O risco de morte para as pessoas expostas é definido por: <br />

<Latex displayMode={true}>{'$$'+
    'R_{expostas}='+
    '\\frac{ A }{ A+C }'
+ '$$'}</Latex>


O risco de morte para as pessoas não expostas é definido por: <br />

<Latex displayMode={true}>{'$$'+
    'R_{\\text{não expostas}}='+
    '\\frac{ B }{ B+D }'
+ '$$'}</Latex>


A Razão de Risco é definida por: <br />

<Latex displayMode={true}>{'$$'+
    'RR='+
    '\\frac{ R_{expostas} }{ R_{\\text{não expostas}} }'
+ '$$'}</Latex>

<br />

<h3>
    Medidas de Epidemiologia em um estudo Caso-Controle
</h3>

<Box mx={12} my={3}>
    <Paper>
        <Box p={1}>
            <center>
                <Typography variant="h6"component="div">
                    Resumo de dados coletados de um estudo caso-controle
                </Typography>
            </center>
        </Box>
        <Divider />
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Exposto</TableCell>
                        <TableCell>Não Exposto</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Casos</TableCell>
                        <TableCell>A</TableCell>
                        <TableCell>B</TableCell>
                        <TableCell>A+B</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Controle</TableCell>
                        <TableCell>C</TableCell>
                        <TableCell>D</TableCell>
                        <TableCell>C+D</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total</TableCell>
                        <TableCell>A+C</TableCell>
                        <TableCell>B+D</TableCell>
                        <TableCell>A+B+C+D</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
</Box>

A razão das proporções é dada por:

<Latex displayMode={true}>{'$$'+
    'RO='+
    '\\frac{\\text{proporção de exposição dos casos}}{\\text{proporção de exposição dos controles}} ='+
    '\\frac{ \\frac{A}{B} }{ \\frac{C}{D} }'
+ '$$'}</Latex>
<br />

l 

<h3>
    Medidas importantes em epidemiologia, medicina e saúde pública:
</h3>

<b>Risco (R)</b> : a chance (verossimilhança) de um indivíduo contrair uma
doença. E a propoção de indivíduos sadios que, em média, contrairam
a doença de interesse dentro de um periodo especifico.

<Latex displayMode={true}>{'$$'+
    'R='+
    '\\frac{\\text{\\text{Novos Casos}}}{\\text{População}} ='+
    '\\frac{ A }{ N }'
+ '$$'}</Latex>


<b>Prevalência (P)</b> :  A proporção de infectados já presentes numa
população.

<Latex displayMode={true}>{'$$'+
    'P='+
    '\\frac{\\text{Total de casos}}{\\text{População}} ='+
    '\\frac{ C }{ N }'
+ '$$'}</Latex>


<b>Pessoa-Tempo (PT)</b> : O tempo em que indivíduos de uma população
de risco levam para desenvolver uma doença.

<Latex displayMode={true}>{'$$'+
    'PT='+
    '\\text{(Tamanho médio da população em risco)} x \\text{(Tempo de Observação)}'
+ '$$'}</Latex>


<b>Taxa de Incidência (TI)</b> : Mede a rapidez com que novos casos da doença
aparecem.

<Latex displayMode={true}>{'$$'+
    'TI='+
    '\\frac{\\text{Novos Casos}}{\\text{Pessoa-Tempo}} =' +
    '\\frac{A}{PT}'
+ '$$'}</Latex>


<b>Sobrevivência (S)</b> :  É a probabilidade de permanecer vivo por um determinado
período de tempo.

<Latex displayMode={true}>{'$$'+
    'S='+
    '\\frac{\\text{Novos Casos } x \\text{ Novas Mortes}}{\\text{Novos Casos}} =' +
    '\\frac{A - D}{A}'
+ '$$'}</Latex>


<b>Taxa de Letalidade (TL)</b> :  É a proporção de pessoas que morreram dentro de um período específico de tempo.

<Latex displayMode={true}>{'$$'+
    'TL='+
    '\\frac{\\text{Novas Mortes}}{\\text{Novos Casos}} =' +
    '\\frac{D}{A}'
+ '$$'}</Latex>








</>)}