export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
        },
        {
            name: 'Usuario',
            url: '/users',
            icon: 'icon-user'
        },
        {
            name: 'Produto',
            url: '/Produto/lista',
            icon: 'fa fa-database'
        },
        {
            name: 'Configuração',
            url: '/config',
            icon: 'icon-settings',
            children: [
                // {
                //     name: 'Geral',
                //     url: '/config/geral',
                //     icon: 'icon-settings'
                // },
                {
                    name: 'Armazenamento',
                    url: '/config/armazenamento',
                    icon: 'icon-settings'
                },
                {
                    name: 'Base de Dados',
                    url: '/config/basededados',
                    icon: 'icon-settings'
                }
            ]
        },

    ]
}
