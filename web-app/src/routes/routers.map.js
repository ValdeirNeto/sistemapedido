import DashboardComponent from '../components/admin/DashboardComponent'
import LoginComponent from '../components/admin/pages/auth/LoginComponent'
import Page404 from '../components/frontend/pages/404/Page404'
import ListUserComponent from '../components/admin/pages/users/ListUsersComponent'
import AddUserComponent from '../components/admin/pages/users/UserAddComponent'
import EditUserComponent from '../components/admin/pages/users/UserEditComponent'
import ConfigGeralComponent from '../components/admin/pages/config/geral/ConfigGeralComponent'
import ConfigArmazenamentoComponent from '../components/admin/pages/config/armazenamento/ConfigArmazenamentoComponent.vue'
import AddConfigArmazenamentoComponent from '../components/admin/pages/config/armazenamento/AddConfigArmazenamentoComponent.vue'
import EditConfigArmazenamentoComponent from '../components/admin/pages/config/armazenamento/EditConfigArmazenamentoComponent.vue'
import ConfigBaseDadosoComponent from '../components/admin/pages/config/basededados/ConfigBaseDadosComponet'
import AddConfigBaseDadosComponent from '../components/admin/pages/config/basededados/AddConfigBaseDadosComponent'
import EditConfigBaseDadosComponent from '../components/admin/pages/config/basededados/EditConfigBaseDadosComponent'
import ProdutoComponent from '../components/admin/pages/Produto/ProdutoComponent'
import addProdutoComponent from '../components/admin/pages/Produto/AddProdutoComponent'
import editProdutoComponent from '../components/admin/pages/Produto/EditProdutoComponent'
import PerfilComponent from '../components/admin/pages/perfil/PerfilComponent'
import LogProdutoComponent from '../components/admin/pages/Produto/LogProdutoComponent'

//import theme
import Full from '../containers/Full'

export default [
     /**
     * Rotas Admin
     */
    {path: '/entrar', component: LoginComponent, name: 'auth'},
    {
        path: '/',
        redirect: '/dashboard',
        name: 'Home',
        component: Full,
        meta: {auth: true},
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                meta: {
                    label: 'Dashboard'
                },
                component: DashboardComponent
            },
            {
                path: '/users',
                component: ListUserComponent,
                name: 'users',
                meta: {
                    label: 'Usuario'
                },
            },
            {
                path: '/users/add',
                component: AddUserComponent,
                name: 'addUsers',
                meta: {
                    label: 'Adicionar Usuario'
                },
            },
            {
                path: '/users/:id',
                component: EditUserComponent,
                name: 'loadUser',
                meta: {
                    label: 'Editar Usuario'
                },
            },
            {
                path: '/config/geral',
                component: ConfigGeralComponent,
                name: 'configg',
                meta: {
                    label: 'Configuração Geral'
                },
            },
            {
                path: '/config/armazenamento',
                component: ConfigArmazenamentoComponent,
                name: 'configa',
                meta: {
                    label: 'Configuração de Armazenamento'
                },
            },
            {
                path: '/config/armazenamento/add',
                component: AddConfigArmazenamentoComponent,
                name: 'addConfigA',
                meta: {
                    label: 'Configuração de Armazenamento'
                },
            },
            {
                path: '/config/armazenamento/:id',
                component: EditConfigArmazenamentoComponent,
                name: 'loadConfig',
                meta: {
                    label: 'Configuração de Armazenamento'
                },
            },
            {
                path: '/config/basededados',
                component: ConfigBaseDadosoComponent,
                name: 'configbase',
                meta: {
                    label: 'Configuração das Base de Dados'
                },
            },
            {
                path: '/config/basededados/add',
                component: AddConfigBaseDadosComponent,
                name: 'addConfigbase',
                meta: {
                    label: 'Configuração das Base de Dados'
                },
            },
            {
                path: '/config/basededados/:id',
                component: EditConfigBaseDadosComponent,
                name: 'loadConfigbase',
                meta: {
                    label: 'Configuração das Base de Dados'
                },
            },
            {
                path: '/Produto/lista',
                component: ProdutoComponent,
                name: 'loadProduto',
                meta: {
                    label: 'Produto'
                },
            },
            {
                path: '/Produto/add',
                component: addProdutoComponent,
                name: 'addProduto',
                meta: {
                    label: 'Produto'
                },
            },
            {
                path: '/Produto/:id',
                component: editProdutoComponent,
                name: 'loadProdEdit',
                meta: {
                    label: 'Produto'
                },
            },
            {
                path: '/Produto/visualizar/:id',
                component: LogProdutoComponent,
                name: 'loadLog',
                meta: {
                    label: 'Produto'
                },
            },
            {
                path: '/perfil/:id',
                component: PerfilComponent,
                name: 'loadPerfil',
                meta: {
                    label: 'Perfil'
                },
            },
        ]
        },
    // Rota 404
    {path: '*', component: Page404},
]