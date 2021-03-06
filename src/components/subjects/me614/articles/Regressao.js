import React from 'react';
import Latex from 'react-latex';
export default function Regressao(){ return( 
<>

<h1>Regressão Linear Múltipla </h1>

<p>O modelo geral para regressão linear múltipla é dado por</p>

<Latex>{"$ Y_i=\\beta_0 + \\sum^{p-1}_{j=0}X_{i,j}\\beta_j + \\epsilon_i$"}</Latex> , e também, <Latex>{"$E(Y_i)=\\beta_0 + \\sum^{p-1}_{j=0}X_i,j\\beta_j $"}</Latex>

<p> E também </p>

<Latex displaymode={true}>
{"$$" +
"\\mathbf{Y}_{nx1} = "+
"\\begin{pmatrix}"+
"Y_1\\\\"+
"Y_2\\\\"+
"\\vdots\\\\"+
"Y_n"+
"\\end{pmatrix}"+
"$$"}
</Latex>
<Latex displaymode={true}>
{"$$" +
"\\mathbf{X}_{nxp}="+
"\\begin{pmatrix}"+
"1&X_{1,1}&\\cdots&X_{1,p_1}\\\\"+
"\\vdots&\\vdots&\\vdots&\\vdots\\\\"+
"1&X_{n,1}&\\cdots&X_{n,p_1}"+
"\\end{pmatrix}"+
"$$"}
</Latex>
<Latex displaymode={true}>
{"$$" +
"\\boldsymbol{\\beta}_{px1} = "+
"\\begin{pmatrix}"+
"\\beta_0\\\\"+
"\\beta_1\\\\"+
"\\vdots\\\\"+
"\\beta_{p-1}"+
"\\end{pmatrix}"+
"$$"}
</Latex>
<Latex displaymode={true}>
{"$$" +
"\\boldsymbol{\\varepsilon}_{nx1} = "+
"\\begin{pmatrix}"+
"\\epsilon_1\\\\"+
"\\epsilon_2\\\\"+
"\\vdots\\\\"+
"\\epsilon_n"+
"\\end{pmatrix}"+
"$$"}
</Latex>
</>
)}