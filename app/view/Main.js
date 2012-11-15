Ext.define("MyApp.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [{
            	xtype: "listTab"
        	},
            {
                xtype: "listTab2"
            },{
                xtype: "alampage"           	
            }
        ]
    }
});
