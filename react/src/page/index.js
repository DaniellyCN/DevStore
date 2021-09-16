import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar';

import {Container, ElipseAzul} from './styled.js'

import { useState, useEffect, useRef } from 'react';
import Api from '../service/api';

const api = new Api();


export default function Index(){

    const [produtos,setProdutos]=useState([]);
    
    const[idAlterando,setIdAlterando] = useState(0);

    const [produto,setProduto]=useState('');
    const [categoria,setCategoria]=useState('');
    const [precoDe,setPrecoDe]=useState('');
    const [precoPor,setPrecoPor]=useState('');
    const [avaliacao,setAvaliacao]=useState('');
    const [descricao,setDescricao]=useState('');
    const [estoque,setEstoque]=useState('');
    const [imagem,setImagem]=useState('');
    
    const loading = useRef(null);
    

    async function listar(){
        loading.current.continuousStart();
        let r = await api.listar();
        setProdutos(r);
        loading.current.complete();
    }

    async function inserir(){

        if(idAlterando==0){
            let r = await api.inserir(produto,categoria,precoDe,precoPor,avaliacao,descricao,estoque,imagem);
            
            if(r.erro)
                toast.dark(r.erro)
            else{
            toast.dark('🤙 Produto inserido com sucesso.');
            } 
        }
        else{
            let r = await api.alterar(idAlterando,produto,categoria,precoDe,precoPor,avaliacao,descricao,estoque,imagem);
            if(r.erro)
                toast.dark(r.erro)
            else{
            toast.dark('🧓Produto alterado com sucesso.🧓');
            }
        
            
            Clean();
        }        
        listar();
        }

  




    function Clean(){
        setIdAlterando(0);
        setProduto('');
        setCategoria('');
        setPrecoDe('');
        setPrecoPor('');
        setAvaliacao('');
        setDescricao('')
        setEstoque('');
        setImagem(''); 
    }

    async function remover(id){
        let remover = window.confirm(`Deseja excluir o item ✂️${id}✂️ da lista?`);
        if(remover){
            alert(`O item ${id} será removido👩‍🔧.`)
            await api.deletar(id);
            toast.dark('❌ Produto removido.')
            listar();
        }
        else{
            alert(`Você desistiu de excluir o item ${id}.`)
        }
    }

    async function editar(item){
       setIdAlterando(item.id_produto);
       setProduto(item.nm_produto);
       setCategoria(item.ds_categoria);
       setPrecoDe(item.vl_preco_de);
       setPrecoPor(item.vl_preco_por);
       setAvaliacao(item.vl_avaliacao);
       setDescricao(item.ds_produto);
       setEstoque(item.qtd_estoque);
       setImagem(item.img_produto);
    }



    useEffect(()=>{
        listar();
    },[])

    return(
        <Container>
            <ToastContainer/>
            <LoadingBar color="#119FDC" ref={loading} />

            <div className='Esquerdo'>
                <div className='parado'>
                <div className='Logo'>
                    <div className='Logo1'><img src=' /assets/images/Logo1.svg' alt=''/></div>
                    <div className='Logo2'><img src=' /assets/images/DevStore.svg' alt=''/></div>
                </div>
                
                <div className='Opcao1'></div>

                <div className='Opcao2'>
                    <div className='Gerenciamento'>Gerenciamento</div>
                    <div className='Seta'><img src=' /assets/images/Setinha.png' alt=''/></div>
                </div>

                <div className='Opcao3'>Produtos</div>
            </div>
            </div>

            <div className='Direito'>
                <div className='Cabecalho'>

                    <div className='Perfil'>
                        <div className='Foto'><img src='/assets/images/Photo.png' alt=''/></div>
                        <div className='Numero'>3</div>
                        
                        <div className='BoasVindas'>
                            <div className='Ola'>Olá,</div>
                            <div className='Nome'>Bruno de Oliveira</div>
                        </div>
                    </div>

                    <div className='Funcoes'>
                        <ElipseAzul>
                            <img src=' /assets/images/Reload.png' alt=''/>
                        </ElipseAzul>
                        <ElipseAzul>
                            <img className='out' src=' /assets/images/Out.svg' alt=''/>
                        </ElipseAzul>
                    </div>
                </div>

                <div className='Conteudo'>
                    <div className='Cadastro'>
                        <div className='Novo'>
                            <div className='Linha'><img src=' /assets/images/Line.png' alt=''/></div>
                            <div className=''>{idAlterando==0?"Novo Produto":`Alterando Produto : ${idAlterando}`}</div>
                        </div>
                        <div className='Divisao'>
                            <div className="Inserir">
                                <div className='Inputs'>
                                    <div>
                                        <div>Nome: <input type ='text'  value={produto}  onChange={e => setProduto(e.target.value)} /></div>
                                        <div>Categoria: <input type ='text' value={categoria}  onChange={e => setCategoria(e.target.value)} /></div>
                                        <div>Avaliação: <input type ='text' value={avaliacao}  onChange={e => setAvaliacao(e.target.value)} /></div>
                                    </div>
                                    <div>
                                        <div>Preço DE: <input type ='text' value={precoDe}  onChange={e => setPrecoDe(e.target.value)} /></div>
                                        <div>Preço POR: <input type ='text' value={precoPor}  onChange={e => setPrecoPor(e.target.value)} /></div>
                                        <div>Estoque: <input type ='text' value={estoque}  onChange={e => setEstoque(e.target.value)} /></div>
                                    </div>
                                </div>
                                <div className='Inputs1'><div>Link Imagem: <input value={imagem}  onChange={e => setImagem(e.target.value)} type='text'/></div></div>
                                <div className='Text'>
                                    <div>Descrição: </div>
                                    <div><textarea   value={descricao}  onChange={e => setDescricao(e.target.value)}  cols='74' rows='10'></textarea></div>
                                </div>

                            </div>
                            <div className='Botao'>
                                <button onClick={inserir}>{idAlterando==0?"Cadastrar":"Alterar"} </button>
                            </div>
                        </div>
                    </div>

                    <div className='Produtos'>
                        <div className='Novo esse'>
                            <div className='Linha'><img src=' /assets/images/Line.png' alt=''/></div>
                            <div className=''>Produtos Cadastrados</div>
                        </div>
                        <div className='table'>
                            <div className='tr borde'>
                                <div className='a mostruario titulo dn'>.</div>
                                <div className='a id titulo'>ID</div>
                                <div className='a produto titulo'>Produto</div>
                                <div className='a categoria titulo'>Categoria</div>
                                <div className='a preco titulo'>Preço</div>
                                <div className='a estoque titulo'>Estoque</div>
                                <div className='a icone titulo dn'>.</div>
                                <div className='a icone titulo dn'>.</div>
                            </div>
                            {produtos.map((item,i)=>
                                
                                <div className={i%2==0?"Bordar":"cor"}>
                                    <div className='a mostruario1 sub'><img src={item.img_produto}></img></div>
                                    <div className='a id1 sub'>{item.id_produto}</div>
                                    <div className='a produto1 sub' title={item.nm_produto}>{(item.nm_produto != null && item.nm_produto.length>=22)?`${item.nm_produto.substr(0,22)}...`:item.nm_produto}</div>
                                    <div className='a categoria1 sub'>{item.ds_categoria}</div>
                                    <div className='a preco1 sub'>{item.vl_preco_por}</div>
                                    <div className='a estoque1 sub'>{item.qtd_estoque}</div>
                                    <div className='a icone1 sub'><div onClick={()=> editar(item)} className='circulo'><img src=' /assets/images/Edit.svg' alt=''/></div></div>
                                    <div className='a icone1 sub'><div onClick={()=> remover(item.id_produto)} className='circulo'><img src=' /assets/images/Trash.svg' alt=''/></div></div>
                                </div>
                            )}

                        </div>

                    


                    </div>
                </div>




            </div>

        </Container>
    )

}