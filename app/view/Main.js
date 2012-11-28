Ext.define('BucketList.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
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
            xtype: "notice"           	
        }
        ]
    }
});
