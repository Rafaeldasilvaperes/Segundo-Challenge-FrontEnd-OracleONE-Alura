import { appendTodosProdutosPaginaFiltros } from '../../controller/lista-todos-produtos-public-controller.js'
import { filtroPorChar } from '../filtros/filtro-geral-por-char.js'
import { filtroPorValor } from '../filtros/filtro-por-valor.js'
import { resetaFiltros } from './filtro-reset.js';
import { checaSeEstaLogadoProdutosPublic } from '../../controller/checa-se-esta-logado-produtos-public.js'

checaSeEstaLogadoProdutosPublic();
appendTodosProdutosPaginaFiltros();
filtroPorChar();
filtroPorValor();
resetaFiltros();



