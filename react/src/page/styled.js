import styled from 'styled-components';

document.querySelector('body').style.margin = "0px";

const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: row;


.Esquerdo{
    width: 25%;
    height: auto;
    background-color: #2B3031;
    display: flex;
    flex-direction: column;
    
    .parado{ 
        position: sticky;
        top:0px;}
    .Logo{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        padding: 3em 5em;
        position: sticky;
        top:0px;

    }
    .Opcao1,.Opcao2,.Opcao3{height:3.8em
    }
    .Opcao1{background-color:#262626}


    .Opcao2{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        font: 1.1em Roboto-500;
        color:#ffffff;
    }
    .Opcao3{
        display: flex;
        flex-direction: column;
        padding-left: 2.4em;
        justify-content: center;
        font: 1.1em Roboto-500;
        background-color: white;
        border-left: 3px solid #10EAEA;
    }
    
}
.dn{
color: #6CC3DF!important}
.Direito{
    width: 100%;
    height: auto;
    .Cabecalho{
        
        display: flex;
        flex-direction: row;
        padding:1.4em 2.6em;
        justify-content:space-between;
    }
    .mostruario1 img{
        width:3em;
        height: 3em;}

/*
//tooltip estilizado aqui
.tooltip {
  position: relative;
  display: inline-block;
  
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 200px;
  height: 50px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

*/


    .Foto{
        width: 3.5em;
        height: 3.5em;
        border-radius: 50%;
        position: relative;
        }
    .Numero{
        left: -1.5em;
        position: relative;
        z-index: 2;
        border: 2px solid white;
        width: 1.5em;
        height: 1.5em;
        border-radius: 50px;
        background-color: #119FDC;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        font: 0.6em Roboto-700;
        }
    .Nome{color:#615858;margin-left:0.5em;}
    .BoasVindas{
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font: 1em Roboto-500;
    }
    .Funcoes{
        display: flex;
        flex-direction: row;
        width: 6em;
        justify-content: space-between;
    }

    .Conteudo{
        background-color: #F5F5F5;
        //height: 100%;
        padding:2em 3.2em;
    }
    .Cadastro{
        background-color: white; 
        width: 100% ;
    }
    .Novo{
        padding-top: 1em;
        font: 2em Roboto-700;
    }
    .Linha{
        margin: 0 0.5em 0 2em;
    }

    .Text, .Inputs, .Novo,.Perfil{
        display:flex;
        flex-direction: row;
    }
    .Inserir{  
        display:flex;
        flex-direction: column;     
        font:1.1em Roboto-500;
        color:#615858;
        
        .Inputs div,.Inputs1 div{float:right;}
    }
    .Inputs{        
       div{         
            div{
                line-height: 3em;                
                input{height:2.3em;width:201px;}}         
          }
    }
    .Inputs1{
        div{
        line-height: 3em;
            input{height:2.3em;width:541px;}}
    }
  
   
    .Divisao{
        width: 44em;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        padding-bottom: 2em;
        margin-top: 1em;
    }

    .Text{padding:0em 2em 0em 3.5em;}
    .Botao{
        display: flex;
        flex-direction: row;
        align-items:flex-end;
    
    }
    button{
        padding: 0.6em 1em;
        font:0.9em Roboto-700;
        border-radius:44px;
        color:white;
        background-color: #119FDC;
        width: 6.6em;
        border:none;
        margin-left: -1em;
    }
    .Produtos{
        width: 100%;
        margin-top: 2em;
       
        background-color: white;
    }
    .mostruario1,.mostruario{width:3%}
    .estoque{width:5%}
    .produto,.categoria{width:18%}
    .preco,.preco1{width:12%}
    .icone,.icone1{width:3%}
    .id1,.id{width:3%}
    .estoque1{width:5%}
    .produto1,.categoria1{width:18%}
    

    .table{
        width:auto;
        padding: 1em 0em;
        .Bordar,.cor{
            .icone1{visibility: hidden;}}
        .Bordar:hover,.cor:hover{
            .icone1{visibility: visible;}           
        }
    }
    .a{
        padding: 1.4em;
    }

    .borde{margin-bottom:1em;}
    
    .titulo{
        background-color: #6CC3DF;
        font:1.1em Roboto-700;
        color:white;
        padding: none;
    }
    .sub{
        font:1.1em Roboto-500;
        color:#6D6868;
    }
    .Bordar{
        border: 1px solid #E2E2E2;
        margin:0em 1.4em;
        display:flex;
        flex-direction: row;
        width:auto;
        align-items:center;
        background-color: white;        
    }
   
    .cor{
        background-color: #F1F0F0;
        border: 1px solid #E2E2E2;
        margin:0em 1.4em;
        display:flex;
        flex-direction: row;
        width:auto;
        align-items:center;
    }

    .tr{
        border: 1px solid #E2E2E2;
        margin:0em 1.4em;
        display:flex;
        flex-direction: row;
        width:auto;
        align-items:center;
    }
    .circulo{
        width:2em;
        height: 2em;
        border-radius: 50%;
        background-color: #565656;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
   
    
    .esse{
        justify-content: flex-start;
    }
}
`
const ElipseAzul = styled.div`
width: 44px;
height: 44px;
border-radius: 50px;
background-color: #119FDC;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.out{width:24px;height:24px}
`




export{Container,ElipseAzul};