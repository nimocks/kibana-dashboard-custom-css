import getObjectCss from './server/routes/getObjectCss';
import saveObjectCss from './server/routes/saveObjectCss';

export default function(kibana) {
    return new kibana.Plugin({
        require: ['elasticsearch', 'kibana'],
        name: 'Data Connection',
        uiExports: {
            app: {
                title: 'CSS Editor',
                description: 'Allows attaching custom CSS to Dashboards',
                main: 'plugins/custom-css/app',
            },
            hacks: 'plugins/custom-css/hack',
        },

        init(server, options) {
            const xpackMainPlugin = server.plugins.xpack_main;

            // Add server routes and initialize the plugin here
            getObjectCss(server);
            saveObjectCss(server);
        },
    });
}